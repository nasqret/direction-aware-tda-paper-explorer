# Paper Explorer Plan

Last updated: 2026-04-15

## Assumptions

- Audience: researchers, graduate students, and technical readers in topological data analysis, porous materials, computational mechanics, and scientific machine learning.
- Delivery target: static-first project that can be hosted from any static server, with a JupyterBook knowledge base and an Obsidian vault in the same repository.
- Source of truth: `arXiv-2604.08105v1/main.tex`, `supplement.tex`, figures, and `references.bib`.
- Applet phase: browser-native pedagogical simulations first; later phases may bind to real `.npy` voxel data and descriptor databases from the associated GitHub repository.
- Database browser phase: start with dataset and result metadata from the manuscript, then add ingestion of real databases once they are mounted or cloned.

## Workstreams

| Workstream | Status | Deliverable |
| --- | --- | --- |
| Repository setup | Complete | Git repo, README, `.gitignore`, docs, plan, journal |
| Paper metadata extraction | Complete | Title, authors, affiliations, abstract, datasets, methods, result tables |
| JupyterBook knowledge base | Complete | Config, TOC, chapters, references, validation script |
| Obsidian knowledge graph | Complete | Vault notes with bidirectional links between concepts, datasets, methods, results, authors |
| Landing page | Complete | Static paper landing page with authors, institutions, references, figures, and links |
| Interactive applets | Complete | Descriptor comparison, anisotropy/performance explorer, cone-filtration toy, RTP field toy |
| Database browser | Complete | Dataset cards, performance table filters, repo/data availability panel |
| Repository collection | Complete | Manifest for code/data repository and future related repositories |
| External repo inventory | Complete | Shallow clone indexed; CSV schemas, row counts, target statistics, hashes, scripts, and LFS pointer status generated |
| Full voxel payload | Pending | Optional `git lfs pull`; needed only for local voxel previews and `.npy` slice applets |
| Verification | Complete | Static file checks, JupyterBook config check, browser render check |

## Proposed Milestones

1. **Bootstrap scaffold**
   - Create repository contracts, site shell, JupyterBook shell, Obsidian vault, and source metadata.
   - Validation: file inventory exists and pages link correctly.
   - Status: complete.

2. **Content pass**
   - Expand each JupyterBook chapter with examples, definitions, and figure commentary.
   - Add richer Obsidian graph notes for every cited method and dataset.
   - Validation: JupyterBook strict HTML build.

3. **Data pass**
   - Clone or mount `dioscuri-tda/direction-aware-tda-for-porous-materials`.
   - Add dataset manifests, file counts, schema summaries, and sample previews.
   - Validation: database browser loads real metadata from generated JSON.
   - Status: partial complete. CSV database manifests, target statistics, and repository inventory are integrated; full voxel payload remains Git LFS-gated.

4. **Applet pass**
   - Replace toy applets with reproducible miniature computations where feasible.
   - Add downloadable code snippets and cross-links to book chapters.
   - Validation: browser smoke test on desktop and mobile viewports.

5. **Release pass**
   - Add deployment target, preview URL, CI build checks, and polished copy.
   - Validation: clean repo status except intentional generated build artifacts.

## Open Questions

- Should the final explorer be plain static HTML, JupyterBook-only, or a React/Next app?
- Should the external code/data repository be vendored as a submodule, cloned into `paper-explorer/repos/`, or referenced only as an external dependency?
- Should the applets prioritize mathematical pedagogy, direct reproduction of numerical results, or lightweight visual intuition?
- Should the JupyterBook include executed notebooks, or remain Markdown-first until data is available locally?
