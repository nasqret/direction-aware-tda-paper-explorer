# Paper Explorer Architecture

## Design Goal

The explorer is a static-first companion to the paper. It should help readers move between four modes:

1. **Read** - landing page and JupyterBook explanations.
2. **Inspect** - database browser and result tables.
3. **Experiment** - interactive applets that isolate one mechanism at a time.
4. **Connect** - Obsidian knowledge graph and repository manifest.

## Directory Responsibilities

| Path | Role |
| --- | --- |
| `arXiv-2604.08105v1/` | Original paper source bundle. Treat as read-only input. |
| `paper-explorer/site/` | Static browser experience. No build step required in the first version. |
| `paper-explorer/site/assets/` | Manuscript figures copied from the LaTeX bundle. |
| `paper-explorer/site/data/` | JSON metadata used by applets and database browser. |
| `paper-explorer/knowledge-base/` | JupyterBook source. Markdown-first, notebook-ready. |
| `paper-explorer/obsidian-vault/` | Linked Markdown vault for graph exploration. |
| `paper-explorer/repos/` | Repository manifest and future local clones/submodules. |
| `paper-explorer/scripts/` | Validation and future extraction scripts. |

## Data Model

The first version uses small JSON files extracted from the paper:

- `paper.json` - paper metadata, authors, affiliations, links, summary.
- `datasets.json` - dataset descriptions and reported sizes/regimes.
- `results.json` - cross-validated performance table values.
- `repos.json` - paper-related code/data repositories.
- `external-repo-manifest.json` - generated inventory of the cloned code/data repository.
- `vault-graph.json` - generated node and edge graph from Obsidian wiki links.

When the external dataset repository is available locally, add a generation step that creates:

- file-level database manifests;
- descriptor schema summaries;
- sample previews;
- checksum/index data for reproducibility.

That generation step is implemented as `paper-explorer/scripts/build-external-repo-manifest.mjs`. It writes static JSON plus a `generated/external-repo-manifest.js` browser bundle so the site can render inventory data even when opened without a framework.

## Static Export Policy

`paper-explorer/site/` is treated as a self-contained static export root. Browser-facing `href` and `src` attributes must either point inside that directory or to external URLs. The built JupyterBook HTML and Obsidian vault snapshot are copied into the site with `node paper-explorer/scripts/sync-site-export-assets.mjs`, so landing-page links keep working after the site folder is copied, zipped, or hosted alone.

Run `node paper-explorer/scripts/check-site-export-links.mjs` before publishing a copied or zipped site export.

## Applet Strategy

The initial applets are pedagogical and deterministic:

- **Anisotropy/performance explorer** maps dataset anisotropy measures to model performance.
- **Descriptor comparison** filters the reported PH, ECP, and PH+ECP results.
- **Cone filtration toy** computes cone occupancy on a small 2D proxy grid.
- **RTP field toy** renders a thresholded trigonometric phase field slice.

These are not replacements for the paper computations. They expose mechanisms and point to the source repository for full reproduction.

## Knowledge Graph Strategy

The Obsidian vault is the authoring source for linked notes. `paper-explorer/scripts/build-vault-graph.mjs` parses wiki links in that vault and generates:

- `paper-explorer/site/data/vault-graph.json`;
- `paper-explorer/site/generated/vault-graph.js`.

The static `graph.html` page renders that generated graph without external libraries, so the graph works when `paper-explorer/site/` is copied, zipped, or served by GitHub Pages.

## Current External Repository Status

The source repository is cloned locally under `paper-explorer/repos/direction-aware-tda-for-porous-materials` and ignored by Git. Generated manifests are tracked instead. Structure `.npy` files are Git LFS pointers until `git lfs pull` is run inside the external clone.
