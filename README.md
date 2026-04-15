# Direction-Aware TDA Paper Explorer

This repository contains the source scaffold for an explorable companion site and knowledge base for:

**Direction-aware topological descriptors for Young's modulus prediction in porous materials**

Source paper bundle: [`arXiv-2604.08105v1`](arXiv-2604.08105v1)

## Components

- `paper-explorer/site/` - static landing page, applets page, database browser, and repository index.
- `paper-explorer/knowledge-base/` - JupyterBook that decomposes the paper into context, theory, datasets, methods, and results.
- `paper-explorer/obsidian-vault/` - Obsidian vault for the paper knowledge graph.
- `paper-explorer/repos/` - local manifest area for paper-related Git repositories.
- `docs/` - engineering notes, architecture, and content inventory.
- `PLAN.md` - live implementation plan.
- `JOURNAL.md` - chronological work journal.

## Current Scope

The first scaffold is source-grounded in the LaTeX bundle and images already present in `arXiv-2604.08105v1`. The browser uses paper-level metadata and the reported performance tables. It does not yet clone or index the external dataset repository.

## Quick Open

The static explorer can be opened directly:

```text
paper-explorer/site/index.html
```

The JupyterBook source is in:

```text
paper-explorer/knowledge-base/
```

When `jupyter-book` is installed, run:

```sh
./paper-explorer/scripts/validate-book.sh
```

## Source Links

- Paper arXiv page: https://arxiv.org/abs/2604.08105
- Code and data repository named in the manuscript: https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials

