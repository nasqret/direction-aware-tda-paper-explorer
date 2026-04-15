# Front Matter and Abstract

```{admonition} Coverage
:class: important
This page annotates **Main manuscript**, source lines **21-46**. The original LaTeX source is reproduced in line-numbered blocks, followed by commentary explaining the role, assumptions, and interpretation of each block.
```

## Reading Lens

- Read this as the contract for the whole paper: title, authorship, affiliations, and the compressed claim in the abstract.
- The abstract already contains the causal chain used throughout the manuscript: anisotropy creates direction-dependent mechanics; standard topology forgets direction; direction-aware filtrations restore that information.
- When reading later sections, check that every dataset, descriptor, and result actually supports the claims made here.

## Annotated Source

::::{admonition} Source lines 22-22
:class: note

```latex
  22 | \title[Direction-aware TDA]{Direction-aware topological descriptors for Young's modulus prediction in porous materials}
```

**Readable text**

> Direction-aware topological descriptors for Young's modulus prediction in porous materials

**Commentary and remarks**

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 24-25
:class: note

```latex
  24 | \author*[1,2]{Rafał Topolnicki}
  25 | \email{rafal.topolnicki@uwr.edu.pl}
```

**Readable text**

> Rafał Topolnicki rafal.topolnicki@uwr.edu.pl

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 27-31
:class: note

```latex
  27 | \author[1]{Michał Bogdan}
  28 | \author[3]{Jakub Malinowski}
  29 | \author[1,4]{Bartosz Naskręcki}
  30 | \author[5]{Maciej Harańczyk}
  31 | \author[1]{Paweł Dłotko}
```

**Readable text**

> Michał Bogdan Jakub Malinowski Bartosz Naskręcki Maciej Harańczyk Paweł Dłotko

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 33-39
:class: note

```latex
  33 | \affil[1]{Dioscuri Center in Topological Data Analysis, Institute of Mathematics, Polish Academy of Sciences, ul.
  34 | Sniadeckich 8, 00-656 Warsaw, Poland}
  35 | \affil[2]{Institute of Experimental Physics, University of Wrocław, pl. Maxa Borna 9, Wrocław 50-204, Poland}
  36 | \affil[3]{Faculty of Pure and Applied Mathematics, Wrocław University of Science and Technology, ul. Wybrzeże Wyspiańskiego 27, 50-370 Wrocław, Poland}
  37 | \affil[4]{Faculty of Mathematics and Computer Science, Adam Mickiewicz University, ul. Uniwersytetu Poznańskiego
  38 | 4, 61-614 Poznań, Poland}
  39 | \affil[5]{IMDEA Materials Institute, C. Eric Kandel 2, Getafe, 28906 Madrid, Spain}
```

**Readable text**

> Dioscuri Center in Topological Data Analysis, Institute of Mathematics, Polish Academy of Sciences, ul. Sniadeckich 8, 00-656 Warsaw, Poland Institute of Experimental Physics, University of Wrocław, pl. Maxa Borna 9, Wrocław 50-204, Poland Faculty of Pure and Applied Mathematics, Wrocław University of Science and Technology, ul. Wybrzeże Wyspiańskiego 27, 50-370 Wrocław, Poland Faculty of Mathematics and Computer Science, Adam Mickiewicz University, ul. Uniwersytetu Poznańskiego 4, 61-614 Poznań, Poland IMDEA Materials Institute, C. Eric Kandel 2, Getafe, 28906 Madrid, Spain

**Commentary and remarks**

- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 41-45
:class: note

```latex
  41 | \abstract{
  42 | \textit{
  43 | Classical topological descriptors used in topological data analysis (TDA) are invariant under permutations of spatial axes and therefore cannot represent the loading direction, which is essential for modeling anisotropic mechanical response. Here, this limitation is addressed by introducing a \emph{direction-aware TDA framework} in which the compression axis is explicitly embedded into filtration functions used to compute both persistent homology and Euler characteristic profile descriptors. Across multiple porous-material datasets spanning a broad range of structural anisotropy, direction-aware descriptors yield higher predictive accuracy than their direction-agnostic counterparts, with performance gains that increase systematically with anisotropy. Notably, direction-aware descriptors remain competitive and often improve $R^2$ even for nominally isotropic ensembles, indicating sensitivity to mechanically relevant directional organization beyond bulk anisotropy measures. When used as inputs to gradient-boosted tree models, the proposed descriptors approach the accuracy of convolutional neural networks trained directly on voxelized structures while retaining a compact, transferable representation. The study considers multiple datasets spanning weak to strong anisotropy, enabling systematic validation of direction-aware topology across regimes. Overall, the results establish direction-aware TDA as a general route for linking porous structure to direction-dependent elastic properties and motivate its use in anisotropic materials modeling problems where a preferred direction naturally arises.}
  44 | }
  45 | \maketitle
```

**Readable text**

> Classical topological descriptors used in topological data analysis (TDA) are invariant under permutations of spatial axes and therefore cannot represent the loading direction, which is essential for modeling anisotropic mechanical response. Here, this limitation is addressed by introducing a direction-aware TDA framework in which the compression axis is explicitly embedded into filtration functions used to compute both persistent homology and Euler characteristic profile descriptors. Across multiple porous-material datasets spanning a broad range of structural anisotropy, direction-aware descriptors yield higher predictive accuracy than their direction-agnostic counterparts, with performance gains that increase systematically with anisotropy. Notably, direction-aware descriptors remain competitive and often improve $R^2$ even for nominally isotropic ensembles, indicating sensitivity to mechanically relevant directional organization beyond bulk anisotropy measures. When used as inputs to gradient-boosted tree models, the proposed descriptors approach the accuracy of convolutional neural networks trained directly on voxelized structures while retaining a compact, transferable representation. The study considers multiple datasets spanning weak to strong anisotropy, enabling systematic validation of direction-aware topology across regimes. Overall, the results establish direction-aware TDA as a general route for linking porous structure to direction-dependent elastic properties and motivate its use in anisotropic materials modeling problems where a preferred direction naturally arises.

**Commentary and remarks**

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This supplies the scalar anisotropy summaries used to interpret when directional descriptors should matter most.
::::

