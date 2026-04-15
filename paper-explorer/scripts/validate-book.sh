#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BOOK="$ROOT/knowledge-base"

if ! command -v jupyter-book >/dev/null 2>&1; then
  echo "jupyter-book is not installed. Install it to build the knowledge base."
  exit 127
fi

jupyter-book build "$BOOK" -W -n --all

