#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const explorerRoot = path.resolve(scriptDir, "..");
const siteRoot = path.join(explorerRoot, "site");

const copies = [
  {
    label: "JupyterBook HTML",
    source: path.join(explorerRoot, "knowledge-base", "_build", "html"),
    target: path.join(siteRoot, "knowledge-base")
  },
  {
    label: "Obsidian vault",
    source: path.join(explorerRoot, "obsidian-vault"),
    target: path.join(siteRoot, "obsidian-vault")
  }
];

mkdirSync(siteRoot, { recursive: true });

for (const copy of copies) {
  if (!existsSync(copy.source)) {
    console.error(`${copy.label} source is missing: ${path.relative(explorerRoot, copy.source)}`);
    if (copy.label === "JupyterBook HTML") {
      console.error("Run ./paper-explorer/scripts/validate-book.sh before syncing the site export.");
    }
    process.exit(1);
  }

  cpSync(copy.source, copy.target, {
    recursive: true,
    force: true,
    dereference: true
  });
  console.log(`Synced ${copy.label} -> ${path.relative(explorerRoot, copy.target)}`);
}
