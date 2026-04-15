# Content Inventory

## Paper Metadata

- arXiv source folder: `arXiv-2604.08105v1`
- Title: Direction-aware topological descriptors for Young's modulus prediction in porous materials
- Short title in LaTeX: Direction-aware TDA
- Corresponding email in LaTeX: `rafal.topolnicki@uwr.edu.pl`
- Main code/data repository: `https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials`

## Authors

| Author | Affiliations in paper |
| --- | --- |
| Rafał Topolnicki | Dioscuri Center in TDA, IMPAN; Institute of Experimental Physics, University of Wrocław |
| Michał Bogdan | Dioscuri Center in TDA, IMPAN |
| Jakub Malinowski | Faculty of Pure and Applied Mathematics, Wrocław University of Science and Technology |
| Bartosz Naskręcki | Dioscuri Center in TDA, IMPAN; Faculty of Mathematics and Computer Science, Adam Mickiewicz University |
| Maciej Harańczyk | IMDEA Materials Institute |
| Paweł Dłotko | Dioscuri Center in TDA, IMPAN |

## Datasets

| Dataset | Role |
| --- | --- |
| RTP | Random Trigonometric Phase porous microstructures; anisotropy controlled in Fourier space. |
| RTPxy | RTP subset evaluated along weakly differentiated x/y directions. |
| RTPxz | RTP subset evaluated along mechanically easy x and hard z directions. |
| RTPxyz | RTP aggregate across all three axes; supplementary result. |
| TD | Topologically diverse statistically isotropic structures. |
| ATTD | TD structures transformed by elongation along z to introduce anisotropy. |

## Main Technical Objects

- Direction-aware TDA.
- Cone-based scalar filtration.
- Principal-component multifiltration.
- Persistent homology and persistence images.
- Euler characteristic profiles.
- CatBoost regression.
- DenseNet-121 CNN baseline.
- FFTMAD Young's modulus simulations.

## Knowledge Base Coverage

The JupyterBook now contains an annotated-paper layer under `paper-explorer/knowledge-base/annotated/`.

- Primary narrative: `annotated/expanded-narrative.md`, a continuous expanded reading with formulas, tables, figures, and embedded remarks.
- Main manuscript coverage: front matter, abstract, Introduction, Dataset, Background and methods, Results and Discussion, Summary, Declarations, and bibliography commands.
- Supplement coverage: TD generation details, RTPxyz results, and per-fold cross-validation tables.
- Provenance style: line-numbered LaTeX source blocks, readable text, figure assets where present, and commentary remarks for each source block.
- Regeneration command: `node paper-explorer/scripts/build-annotated-paper.mjs`.
