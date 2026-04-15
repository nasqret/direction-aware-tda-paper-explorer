# Summary

```{admonition} Coverage
:class: annotation-legend
This page annotates **Main manuscript**, source lines **580-606**. Blue blocks reproduce or faithfully restate the original source material. Amber blocks are model-added interpretation explaining role, assumptions, and reading context.
```

```{admonition} Reading lens
:class: model-interpretation
- This section compresses the paper back into its main claim and explains what should be taken forward.
- The key interpretive point is that direction-aware topology is presented as a reusable representation strategy, not as a one-off model trick.
- Notice which claims are framed as established by the experiments and which remain future-facing.
```

## Annotated Source

### Summary

::::{admonition} Original paper material - source lines 580-580
:class: paper-original

```latex
 580 | \section{Summary}
```

**Readable text**

> Summary

::::

::::{admonition} Model-added interpretation - source lines 580-580
:class: model-interpretation

- This heading opens a new logical unit: **Summary**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Original paper material - source lines 581-581
:class: paper-original

```latex
 581 | \label{sec:summary}
```

**Readable text**

> (label: sec:summary)

::::

::::{admonition} Model-added interpretation - source lines 581-581
:class: model-interpretation

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Original paper material - source lines 583-583
:class: paper-original

```latex
 583 | Direction-dependent properties in porous materials pose a structural learning problem in which symmetry breaking with respect to the loading axis is essential. This work demonstrates that incorporating directional information into topological data analysis provides a significant advantage for predicting direction-dependent elastic properties of porous structures. Standard topological descriptors, while effective at capturing multiscale connectivity and void structure, are inherently isotropic and therefore insufficient for modeling anisotropic mechanical response. By embedding the loading direction directly into the filtration functions used for persistent homology and Euler characteristic profiles, the proposed direction-aware construction lifts this intrinsic isotropy and encodes mechanically relevant anisotropic topology in a compact representation.
```

**Readable text**

> Direction-dependent properties in porous materials pose a structural learning problem in which symmetry breaking with respect to the loading axis is essential. This work demonstrates that incorporating directional information into topological data analysis provides a significant advantage for predicting direction-dependent elastic properties of porous structures. Standard topological descriptors, while effective at capturing multiscale connectivity and void structure, are inherently isotropic and therefore insufficient for modeling anisotropic mechanical response. By embedding the loading direction directly into the filtration functions used for persistent homology and Euler characteristic profiles, the proposed direction-aware construction lifts this intrinsic isotropy and encodes mechanically relevant anisotropic topology in a compact representation.

::::

::::{admonition} Model-added interpretation - source lines 583-583
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Original paper material - source lines 585-585
:class: paper-original

```latex
 585 | Across multiple datasets spanning weak to strong anisotropy, direction-aware persistent homology and Euler characteristic profiles systematically improve predictive performance for uniaxial Young’s modulus compared with direction-agnostic topology, with gains that grow as structural anisotropy strengthens. The effect is most pronounced for strongly anisotropic structures (RTPxz), where direction-aware topology yields large improvements in both explained variance ($R^2$) and mean absolute error (MAE), reducing prediction errors by several-fold and nearly matching a voxel-based CNN baseline. For nominally isotropic ensembles (RTPxy and TD), directional descriptors remain uniformly competitive and typically increase $R^2$ (while occasionally inducing minor changes in MAE), indicating that direction-aware topology captures subtle mechanically relevant organization even when macroscopic anisotropy is weak.
```

**Readable text**

> Across multiple datasets spanning weak to strong anisotropy, direction-aware persistent homology and Euler characteristic profiles systematically improve predictive performance for uniaxial Young’s modulus compared with direction-agnostic topology, with gains that grow as structural anisotropy strengthens. The effect is most pronounced for strongly anisotropic structures (RTPxz), where direction-aware topology yields large improvements in both explained variance ($R^2$) and mean absolute error (MAE), reducing prediction errors by several-fold and nearly matching a voxel-based CNN baseline. For nominally isotropic ensembles (RTPxy and TD), directional descriptors remain uniformly competitive and typically increase $R^2$ (while occasionally inducing minor changes in MAE), indicating that direction-aware topology captures subtle mechanically relevant organization even when macroscopic anisotropy is weak.

::::

::::{admonition} Model-added interpretation - source lines 585-585
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This defines the RTP construction, where anisotropy is controlled in Fourier space before thresholding into a porous structure.
::::

::::{admonition} Original paper material - source lines 587-587
:class: paper-original

```latex
 587 | Among descriptor families, multifiltration Euler characteristic profiles (ECP) consistently provide stronger predictive signal than persistent homology (PH) when used alone, and their combination (PH+ECP) produces the most accurate and stable models across all considered regimes. Moreover, as anisotropy increases (RTPxz and ATTD), the performance gap between topological models and convolutional neural networks trained directly on voxelized structures narrows substantially, demonstrating that a significant portion of the predictive power of high-dimensional image-based models can be recovered through compact, physics-informed, direction-aware topological summaries.
```

**Readable text**

> Among descriptor families, multifiltration Euler characteristic profiles (ECP) consistently provide stronger predictive signal than persistent homology (PH) when used alone, and their combination (PH+ECP) produces the most accurate and stable models across all considered regimes. Moreover, as anisotropy increases (RTPxz and ATTD), the performance gap between topological models and convolutional neural networks trained directly on voxelized structures narrows substantially, demonstrating that a significant portion of the predictive power of high-dimensional image-based models can be recovered through compact, physics-informed, direction-aware topological summaries.

::::

::::{admonition} Model-added interpretation - source lines 587-587
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This defines the RTP construction, where anisotropy is controlled in Fourier space before thresholding into a porous structure.
- This constructs anisotropy by transforming otherwise diverse structures, giving a bridge between controlled RTP anisotropy and heterogeneous real-looking morphologies.
::::

::::{admonition} Original paper material - source lines 589-589
:class: paper-original

```latex
 589 | From the perspective of porous-materials modeling, these results establish a general, geometry-agnostic route for encoding anisotropic connectivity and alignment effects—key determinants of stiffness—without relying on handcrafted geometric descriptors or expensive end-to-end training on voxel grids. More broadly, the proposed direction-aware TDA framework provides a transferable and low-dimensional alternative (or complement) to voxel-based deep learning for structure–property prediction in porous media, with natural extensions to other direction-dependent properties such as yield strength, elastic tensors, permeability, and transport coefficients governed by anisotropic microstructural organization.
```

**Readable text**

> From the perspective of porous-materials modeling, these results establish a general, geometry-agnostic route for encoding anisotropic connectivity and alignment effects—key determinants of stiffness—without relying on handcrafted geometric descriptors or expensive end-to-end training on voxel grids. More broadly, the proposed direction-aware TDA framework provides a transferable and low-dimensional alternative (or complement) to voxel-based deep learning for structure–property prediction in porous media, with natural extensions to other direction-dependent properties such as yield strength, elastic tensors, permeability, and transport coefficients governed by anisotropic microstructural organization.

::::

::::{admonition} Model-added interpretation - source lines 589-589
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

#### Code and Data Availability

::::{admonition} Original paper material - source lines 591-591
:class: paper-original

```latex
 591 | \subsection*{Code and Data Availability}
```

**Readable text**

> Code and Data Availability

::::

::::{admonition} Model-added interpretation - source lines 591-591
:class: model-interpretation

- This heading opens a new logical unit: **Code and Data Availability**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- This is part of the reproducibility surface: it points from the paper to the code/data artifacts indexed elsewhere in this explorer.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Original paper material - source lines 592-592
:class: paper-original

```latex
 592 | A complete implementation of all methods used in this study is available in the accompanying GitHub repository at \url{https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials}. The repository includes the full codebase for computing directional and non-directional topological descriptors, training the CatBoost and CNN models, reproducing all numerical experiments, and generating the figures reported in the manuscript. It also contains all datasets used in this work, including voxelized porous structures stored as \texttt{.npy} files, FFTMAD-computed Young’s modulus values, and vectorized PH, ECP, and PH+ECP descriptors. Ready-to-use databases, training scripts, and detailed instructions for reproducing every result are provided to ensure full transparency and straightforward replication of the presented findings.
```

**Readable text**

> A complete implementation of all methods used in this study is available in the accompanying GitHub repository at https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials. The repository includes the full codebase for computing directional and non-directional topological descriptors, training the CatBoost and CNN models, reproducing all numerical experiments, and generating the figures reported in the manuscript. It also contains all datasets used in this work, including voxelized porous structures stored as `.npy` files, FFTMAD-computed Young’s modulus values, and vectorized PH, ECP, and PH+ECP descriptors. Ready-to-use databases, training scripts, and detailed instructions for reproducing every result are provided to ensure full transparency and straightforward replication of the presented findings.

::::

::::{admonition} Model-added interpretation - source lines 592-592
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This is the target-generation mechanism: the paper uses FFT-based homogenization rather than treating stiffness labels as empirical annotations.
::::

#### Funding

::::{admonition} Original paper material - source lines 594-594
:class: paper-original

```latex
 594 | \subsection*{Funding}
```

**Readable text**

> Funding

::::

::::{admonition} Model-added interpretation - source lines 594-594
:class: model-interpretation

- This heading opens a new logical unit: **Funding**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Original paper material - source lines 595-599
:class: paper-original

```latex
 595 | Financial support from the PORMETALOMICS project, funded by the Spanish
 596 | Ministry for Science, Innovation, and Universities (award no.
 597 | PCI2022-132975) and the National Science Centre, Poland (project no.
 598 | 2021/03/Y/ST5/00232) within the M-ERA.NET 3 call, is gratefully acknowledged. 
 599 | This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 958174.
```

**Readable text**

> Financial support from the PORMETALOMICS project, funded by the Spanish Ministry for Science, Innovation, and Universities (award no. PCI2022-132975) and the National Science Centre, Poland (project no. 2021/03/Y/ST5/00232) within the M-ERA.NET 3 call, is gratefully acknowledged. This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 958174.

::::

::::{admonition} Model-added interpretation - source lines 595-599
:class: model-interpretation

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Original paper material - source lines 601-605
:class: paper-original

```latex
 601 | This research is financed under Dioscuri, a programme initiated by the
 602 | Max Planck Society, jointly managed with the National Science Centre
 603 | in Poland, and mutually funded by Polish Ministry of Science and
 604 | Higher Education and German Federal Ministry of Research,
 605 | Technology and Space.
```

**Readable text**

> This research is financed under Dioscuri, a programme initiated by the Max Planck Society, jointly managed with the National Science Centre in Poland, and mutually funded by Polish Ministry of Science and Higher Education and German Federal Ministry of Research, Technology and Space.

::::

::::{admonition} Model-added interpretation - source lines 601-605
:class: model-interpretation

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

