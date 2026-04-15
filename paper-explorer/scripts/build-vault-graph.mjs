#!/usr/bin/env node
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const explorerRoot = path.resolve(scriptDir, "..");
const vaultRoot = path.join(explorerRoot, "obsidian-vault");
const siteDataDir = path.join(explorerRoot, "site", "data");
const siteGeneratedDir = path.join(explorerRoot, "site", "generated");

function walkMarkdown(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(fullPath);
    if (entry.isFile() && entry.name.endsWith(".md")) return [fullPath];
    return [];
  });
}

function cleanWikiTarget(rawTarget) {
  return rawTarget
    .split("|")[0]
    .split("#")[0]
    .trim()
    .replace(/\.md$/i, "");
}

function cleanExcerpt(markdown) {
  const paragraph = markdown
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith("```"));

  if (!paragraph) return "";
  return paragraph
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (_, target, alias) => alias || target)
    .replace(/\*\*/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .slice(0, 220);
}

function encodeVaultUrl(relativePath) {
  return `obsidian-vault/${relativePath.split(path.sep).map(encodeURIComponent).join("/")}`;
}

const files = walkMarkdown(vaultRoot).sort((a, b) => a.localeCompare(b));
const nodes = files.map((file) => {
  const relativePath = path.relative(vaultRoot, file);
  const title = path.basename(file, ".md");
  const category = path.dirname(relativePath) === "." ? "Vault" : path.dirname(relativePath).split(path.sep)[0];
  const content = readFileSync(file, "utf8");
  return {
    id: title,
    title,
    category,
    path: relativePath,
    url: encodeVaultUrl(relativePath),
    excerpt: cleanExcerpt(content),
    links: Array.from(content.matchAll(/\[\[([^\]]+)\]\]/g), (match) => cleanWikiTarget(match[1]))
  };
});

const byTitle = new Map(nodes.map((node) => [node.title.toLowerCase(), node]));
const edges = [];
const unresolved = [];
const edgeKeys = new Set();

for (const node of nodes) {
  for (const targetTitle of node.links) {
    const target = byTitle.get(targetTitle.toLowerCase());
    if (!target) {
      unresolved.push({ source: node.id, target: targetTitle });
      continue;
    }
    if (target.id === node.id) continue;
    const key = `${node.id}\u0000${target.id}`;
    if (edgeKeys.has(key)) continue;
    edgeKeys.add(key);
    edges.push({ source: node.id, target: target.id });
  }
  delete node.links;
}

const degreeById = new Map(nodes.map((node) => [node.id, 0]));
for (const edge of edges) {
  degreeById.set(edge.source, degreeById.get(edge.source) + 1);
  degreeById.set(edge.target, degreeById.get(edge.target) + 1);
}
for (const node of nodes) {
  node.degree = degreeById.get(node.id);
}

const categories = Array.from(new Set(nodes.map((node) => node.category))).sort((a, b) => a.localeCompare(b));
const graph = {
  schemaVersion: 1,
  source: "paper-explorer/obsidian-vault",
  nodeCount: nodes.length,
  edgeCount: edges.length,
  categories,
  unresolved,
  nodes,
  edges
};

mkdirSync(siteDataDir, { recursive: true });
mkdirSync(siteGeneratedDir, { recursive: true });

writeFileSync(
  path.join(siteDataDir, "vault-graph.json"),
  `${JSON.stringify(graph, null, 2)}\n`
);

writeFileSync(
  path.join(siteGeneratedDir, "vault-graph.js"),
  `window.VaultGraph = ${JSON.stringify(graph, null, 2)};\n`
);

console.log(`Generated vault graph: ${nodes.length} node(s), ${edges.length} edge(s), ${unresolved.length} unresolved link(s).`);
