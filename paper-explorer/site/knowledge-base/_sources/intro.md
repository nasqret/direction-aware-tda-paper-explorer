# Direction-Aware TDA Paper Explorer

This book decomposes the paper **Direction-aware topological descriptors for Young's modulus prediction in porous materials** into a navigable knowledge base. The source manuscript argues that standard topological descriptors lose essential information when the target property depends on a loading direction.

The first part, [Annotated Paper](annotated/index.md), is the primary reading companion. Its main chapter is the [Expanded Annotated Text](annotated/expanded-narrative.md), a streamlined walkthrough of the paper with formulas, tables, figures, and remarks. Blue-tinted material is original-paper material or source-derived reconstruction; amber-tinted material is model-added interpretation. The following pages preserve line-numbered source annotations as provenance.

The central idea is simple:

> Encode the compression direction directly into the filtration functions used for topological descriptors, then use those descriptors to predict direction-dependent Young's modulus.

![Direction-aware TDA schematic](_static/images/TDA_directional_horizontal_new.png)

## What The Paper Shows

- Classical distance-transform-based TDA descriptors are effectively direction-agnostic.
- Porous materials can have a strong hard/easy-axis mechanical response.
- Direction-aware persistent homology and Euler characteristic profile descriptors improve Young's modulus prediction, especially as anisotropy increases.
- The best direction-aware PH+ECP models approach voxel CNN performance on the strongly anisotropic RTPxz benchmark while remaining much more compact.

## Navigation

- [Expanded Annotated Text](annotated/expanded-narrative.md) gives the streamlined annotated manuscript chapter.
- [Annotated Paper](annotated/index.md) gives the full annotated-paper section, including source-provenance pages.
- [Context](chapters/01-context.md) explains the scientific motivation.
- [Datasets](chapters/02-datasets.md) summarizes RTP, TD, ATTD, anisotropy measures, and FFTMAD simulations.
- [Directional filtrations](chapters/03-directional-filtrations.md) explains cone and principal-component constructions.
- [Descriptors and models](chapters/04-descriptors-models.md) connects PH/ECP vectorization to CatBoost and CNN baselines.
- [Results](chapters/05-results.md) records the main performance table and its interpretation.
- [Applets and databases](chapters/06-applets-and-databases.md) maps the browser UI to the paper.

## Companion Artifacts

- Static explorer: `../site/index.html`
- Obsidian vault: `../obsidian-vault`
- Code and data repository named in the manuscript: <https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials>
