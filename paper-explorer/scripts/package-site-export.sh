#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO_ROOT="$(cd "$ROOT/.." && pwd)"
ARCHIVE_NAME="${1:-paper-explorer-site}"
OUT_DIR="$REPO_ROOT/.exports"
ARCHIVE="$OUT_DIR/${ARCHIVE_NAME}.tar.gz"

cd "$REPO_ROOT"

./paper-explorer/scripts/prepare-site-export.sh

mkdir -p "$OUT_DIR"
tar -czf "$ARCHIVE" -C "$REPO_ROOT/paper-explorer" site

echo "Wrote $ARCHIVE"
du -sh "$ARCHIVE"
