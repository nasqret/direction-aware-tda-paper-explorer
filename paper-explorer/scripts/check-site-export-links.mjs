#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const explorerRoot = path.resolve(scriptDir, "..");
const siteRoot = path.join(explorerRoot, "site");
const htmlAttrPattern = /\b(?:href|src)\s*=\s*(["'])(.*?)\1/gis;
const protocolPattern = /^[a-z][a-z0-9+.-]*:/i;

function walkFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(fullPath);
    if (entry.isFile()) return [fullPath];
    return [];
  });
}

function isInside(parent, target) {
  const relative = path.relative(parent, target);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function cleanLocalUrl(rawUrl) {
  const trimmed = rawUrl.trim();
  const withoutFragment = trimmed.split("#")[0];
  const withoutQuery = withoutFragment.split("?")[0];
  try {
    return decodeURI(withoutQuery);
  } catch {
    return withoutQuery;
  }
}

function shouldSkip(rawUrl) {
  const trimmed = rawUrl.trim();
  return (
    trimmed === "" ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("//") ||
    trimmed.includes("{{") ||
    trimmed.includes("}}") ||
    protocolPattern.test(trimmed)
  );
}

const htmlFiles = walkFiles(siteRoot).filter((file) => file.endsWith(".html"));
const failures = [];
let checkedLinks = 0;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, "utf8");
  const htmlDir = path.dirname(htmlFile);
  let match;
  while ((match = htmlAttrPattern.exec(html)) !== null) {
    const rawUrl = match[2];
    if (shouldSkip(rawUrl)) continue;
    const localUrl = cleanLocalUrl(rawUrl);
    if (!localUrl) continue;
    checkedLinks += 1;
    const resolved = path.resolve(htmlDir, localUrl);
    const from = path.relative(siteRoot, htmlFile);
    const target = path.relative(siteRoot, resolved);

    if (!isInside(siteRoot, resolved)) {
      failures.push(`${from}: ${rawUrl} resolves outside site export (${target})`);
      continue;
    }

    if (!existsSync(resolved)) {
      failures.push(`${from}: ${rawUrl} resolves to missing export file (${target})`);
      continue;
    }

    const stat = statSync(resolved);
    if (!stat.isFile() && !stat.isDirectory()) {
      failures.push(`${from}: ${rawUrl} resolves to unsupported filesystem entry (${target})`);
    }
  }
}

if (failures.length) {
  console.error(`Site export link check failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site export link check passed for ${htmlFiles.length} HTML file(s) and ${checkedLinks} local link(s).`);
