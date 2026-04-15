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

When the external dataset repository is available locally, add a generation step that creates:

- file-level database manifests;
- descriptor schema summaries;
- sample previews;
- checksum/index data for reproducibility.

## Applet Strategy

The initial applets are pedagogical and deterministic:

- **Anisotropy/performance explorer** maps dataset anisotropy measures to model performance.
- **Descriptor comparison** filters the reported PH, ECP, and PH+ECP results.
- **Cone filtration toy** computes cone occupancy on a small 2D proxy grid.
- **RTP field toy** renders a thresholded trigonometric phase field slice.

These are not replacements for the paper computations. They expose mechanisms and point to the source repository for full reproduction.

