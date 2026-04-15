#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "$ROOT/.." && pwd)"

cd "$REPO_ROOT"

echo "Checking JavaScript syntax..."
node --check paper-explorer/site/explorer.js
node --check paper-explorer/scripts/build-annotated-paper.mjs
node --check paper-explorer/scripts/build-external-repo-manifest.mjs
node --check paper-explorer/scripts/build-vault-graph.mjs
node --check paper-explorer/scripts/check-site-export-links.mjs
node --check paper-explorer/scripts/sync-site-export-assets.mjs

echo "Generating annotated paper..."
node paper-explorer/scripts/build-annotated-paper.mjs

echo "Generating vault graph..."
node paper-explorer/scripts/build-vault-graph.mjs
node --check paper-explorer/site/generated/vault-graph.js

echo "Checking JSON data files..."
python3 -m json.tool paper-explorer/knowledge-base/annotated/manifest.json >/dev/null
python3 -m json.tool paper-explorer/site/data/paper.json >/dev/null
python3 -m json.tool paper-explorer/site/data/datasets.json >/dev/null
python3 -m json.tool paper-explorer/site/data/results.json >/dev/null
python3 -m json.tool paper-explorer/site/data/repos.json >/dev/null
python3 -m json.tool paper-explorer/site/data/external-repo-manifest.json >/dev/null
python3 -m json.tool paper-explorer/site/data/vault-graph.json >/dev/null

echo "Building JupyterBook..."
./paper-explorer/scripts/validate-book.sh

echo "Syncing export assets..."
node paper-explorer/scripts/sync-site-export-assets.mjs

echo "Checking static export links..."
node paper-explorer/scripts/check-site-export-links.mjs

echo "Static export ready at paper-explorer/site"
du -sh paper-explorer/site
