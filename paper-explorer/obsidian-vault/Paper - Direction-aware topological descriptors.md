# Paper - Direction-aware topological descriptors

**Title:** Direction-aware topological descriptors for Young's modulus prediction in porous materials

**Authors:** [[Rafal Topolnicki]], [[Michal Bogdan]], [[Jakub Malinowski]], [[Bartosz Naskrecki]], [[Maciej Haranczyk]], [[Pawel Dlotko]]

**Core claim:** [[Direction-aware TDA]] improves [[Young's modulus prediction]] for porous materials by embedding the loading direction into filtrations used by [[Persistent homology]] and [[Euler characteristic profiles]].

## Source

- Local LaTeX source: `../../arXiv-2604.08105v1/main.tex`
- Supplement: `../../arXiv-2604.08105v1/supplement.tex`
- Code/data repository: [[Direction-aware TDA repository]]

## Main Components

- Context: porous materials, anisotropic mechanical response, limits of direction-agnostic descriptors.
- Data: [[Random Trigonometric Phase dataset]], [[Topologically Diverse dataset]], [[Anisotropic Transformed TD dataset]].
- Filtrations: [[Cone-based filtration]], [[Principal-component multifiltration]].
- Descriptors: [[Persistent homology]], [[Euler characteristic profiles]], [[PH plus ECP descriptor]].
- Models: [[CatBoost model]], [[DenseNet CNN baseline]].
- Results: [[Performance summary]].

## Open Build Notes

- Link every site applet back to its corresponding method note.
- Add actual database schema notes after the external data repository is cloned or mounted.

