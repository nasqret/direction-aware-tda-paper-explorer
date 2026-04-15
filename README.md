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

The scaffold is source-grounded in the LaTeX bundle and images already present in `arXiv-2604.08105v1`. It also indexes a local shallow clone of the external code/data repository when available at:

```text
paper-explorer/repos/direction-aware-tda-for-porous-materials
```

The cloned repository is ignored by this repo to avoid vendoring the data payload. Generated manifests are committed under `paper-explorer/site/data/`, `paper-explorer/site/generated/`, and `docs/`.

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

To regenerate the external repository inventory after updating the local clone, run:

```sh
node paper-explorer/scripts/build-external-repo-manifest.mjs
```

## Source Links

- Paper arXiv page: https://arxiv.org/abs/2604.08105
- Code and data repository named in the manuscript: https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials

## Data Payload Note

The external repository tracks `structures/` with Git LFS. The current inventory records 8626 `.npy` structure files as LFS pointers. Run `git lfs pull` inside the external clone only when full voxel previews are needed.
