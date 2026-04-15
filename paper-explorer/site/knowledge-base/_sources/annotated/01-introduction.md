# Introduction

```{admonition} Coverage
:class: annotation-legend
This page annotates **Main manuscript**, source lines **47-66**. Blue blocks reproduce or faithfully restate the original source material. Amber blocks are model-added interpretation explaining role, assumptions, and reading context.
```

```{admonition} Reading lens
:class: model-interpretation
- This section builds the motivation from materials science toward topology: porous geometry matters, density laws are insufficient, and classical TDA has a directional blind spot.
- Track the escalation of the argument: applications -> failure of simple density scaling -> promise of TDA -> isotropy problem -> proposed direction-aware fix.
- The key reader question is whether the proposed descriptors solve a real modeling obstruction rather than simply adding more features.
```

## Annotated Source

### Introduction

::::{admonition} Original paper material - source lines 47-47
:class: paper-original

```latex
  47 | \section{Introduction}
```

**Readable text**

> Introduction

::::

::::{admonition} Model-added interpretation - source lines 47-47
:class: model-interpretation

- This heading opens a new logical unit: **Introduction**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.
::::

::::{admonition} Original paper material - source lines 48-48
:class: paper-original

```latex
  48 | Porous materials consist of interconnected regions of solid matter and voids, which may be filled with a gas or liquid.  Porous and nanoporous metals, in particular, have found widespread applications in chemical catalysis, plasmonics, and spectroscopy~\cite{Koya2021}, as orthopedic implants~\cite{Guo2025,Matassi2013,Depboylu2024}, in energy storage technologies, and as the basis for strong, ultralight structural materials~\cite{Schaedler2016}. In many of these applications, the mechanical performance of porous metals—encompassing stiffness, strength, deformation behavior, and failure—plays a critical role in determining functionality, durability, and reliability.
```

**Readable text**

> Porous materials consist of interconnected regions of solid matter and voids, which may be filled with a gas or liquid. Porous and nanoporous metals, in particular, have found widespread applications in chemical catalysis, plasmonics, and spectroscopy (citation: Koya2021), as orthopedic implants (citation: Guo2025,Matassi2013,Depboylu2024), in energy storage technologies, and as the basis for strong, ultralight structural materials (citation: Schaedler2016). In many of these applications, the mechanical performance of porous metals—encompassing stiffness, strength, deformation behavior, and failure—plays a critical role in determining functionality, durability, and reliability.

::::

::::{admonition} Model-added interpretation - source lines 48-48
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.
::::

::::{admonition} Original paper material - source lines 51-53
:class: paper-original

```latex
  51 | Despite decades of research, establishing predictive relationships between porous structure and mechanical properties remains challenging. In particular, predicting the dependence of Young’s modulus on microstructural features such as porosity, pore morphology, and connectivity is nontrivial. Most existing approaches rely on scaling relationships between material density and tensile or compressive moduli, derived from empirical observations or simplified theoretical models.
  52 | The widely used and theoretically well-justified Gibson-Ashby model~\cite{Gibson1982} postulates a power-law relationship between material density $\rho$ and Young's modulus $E \propto \rho^n$. This foundational model predicts $E \propto \rho^2$ for open-cell porous materials and $E \propto \rho^3 $ for materials with closed pores~\cite{Gibson1982}. 
  53 | However, many types of materials violate the Gibson-Ashby model. In some open-celled nanoporous metal structures Young's modulus grows faster with density than the model's predictions suggest~\cite{Badwe2017}, while in others it grows slower~\cite{Zheng2014}. While this makes it clear that the porosity of a porous material itself does not determine its Young's modulus and geometrical and topological details of the solid material and pores also play key roles, no general functional relationship between Young's modulus and topology is known. 
```

**Readable text**

> Despite decades of research, establishing predictive relationships between porous structure and mechanical properties remains challenging. In particular, predicting the dependence of Young’s modulus on microstructural features such as porosity, pore morphology, and connectivity is nontrivial. Most existing approaches rely on scaling relationships between material density and tensile or compressive moduli, derived from empirical observations or simplified theoretical models. The widely used and theoretically well-justified Gibson-Ashby model (citation: Gibson1982) postulates a power-law relationship between material density $rho$ and Young's modulus $E propto rho^n$. This foundational model predicts $E propto rho^2$ for open-cell porous materials and $E propto rho^3 $ for materials with closed pores (citation: Gibson1982). However, many types of materials violate the Gibson-Ashby model. In some open-celled nanoporous metal structures Young's modulus grows faster with density than the model's predictions suggest (citation: Badwe2017), while in others it grows slower (citation: Zheng2014). While this makes it clear that the porosity of a porous material itself does not determine its Young's modulus and geometrical and topological details of the solid material and pores also play key roles, no general functional relationship between Young's modulus and topology is known.

::::

::::{admonition} Model-added interpretation - source lines 51-53
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This is the density-baseline motivation: porosity alone is treated as insufficient for predicting stiffness across complex porous morphologies.
- In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.
::::

::::{admonition} Original paper material - source lines 55-55
:class: paper-original

```latex
  55 | Topological data analysis (TDA) offers a principled mathematical framework for quantifying such structural features across multiple length scales. By characterizing connectivity, loops, and cavities in a scale-dependent manner, TDA provides compact summaries of complex structures that are robust to noise and discretization. Tools such as persistent homology, persistence diagrams, Euler characteristic curves, and Euler characteristic profiles encode how topological features emerge and disappear as a structure is coarse-grained. Importantly, these descriptors can be efficiently computed for large datasets and subsequently vectorized for use in machine-learning pipelines~\cite{Krishnapriyan2021,Moon2019}.
```

**Readable text**

> Topological data analysis (TDA) offers a principled mathematical framework for quantifying such structural features across multiple length scales. By characterizing connectivity, loops, and cavities in a scale-dependent manner, TDA provides compact summaries of complex structures that are robust to noise and discretization. Tools such as persistent homology, persistence diagrams, Euler characteristic curves, and Euler characteristic profiles encode how topological features emerge and disappear as a structure is coarse-grained. Importantly, these descriptors can be efficiently computed for large datasets and subsequently vectorized for use in machine-learning pipelines (citation: Krishnapriyan2021,Moon2019).

::::

::::{admonition} Model-added interpretation - source lines 55-55
:class: model-interpretation

- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.
::::

::::{admonition} Original paper material - source lines 57-57
:class: paper-original

```latex
  57 | A limited number of such TDA-involving attempts to predict the properties of porous materials have been reported. The existing results suggest TDA can be helpful in quantifying the heterogeneity of porous materials and predicting properties related to flow transport, permeability, fluid trapping and dissolution properties under reactive transport~\cite{Robins2016, Herring2019, Moon2019, Thompson2023, Lisitsa2020}, classifying  metal-organic frameworks based on their gas adsorption potential~\cite{Lee2017} and predicting the efficiency of the adsorption~\cite{Krishnapriyan2021, Chen2025, Wang2025, Lee2017}. A relationship has been found between persistent homology and elastic modulus in a sample of rock structures ~\cite{Jiang2018} and a similar study was conducted for wet compact powders~\cite{Ishihara2023}, however, both of these studies are affected by a very small sample sizes.
```

**Readable text**

> A limited number of such TDA-involving attempts to predict the properties of porous materials have been reported. The existing results suggest TDA can be helpful in quantifying the heterogeneity of porous materials and predicting properties related to flow transport, permeability, fluid trapping and dissolution properties under reactive transport (citation: Robins2016, Herring2019, Moon2019, Thompson2023, Lisitsa2020), classifying metal-organic frameworks based on their gas adsorption potential (citation: Lee2017) and predicting the efficiency of the adsorption (citation: Krishnapriyan2021, Chen2025, Wang2025, Lee2017). A relationship has been found between persistent homology and elastic modulus in a sample of rock structures (citation: Jiang2018) and a similar study was conducted for wet compact powders (citation: Ishihara2023), however, both of these studies are affected by a very small sample sizes.

::::

::::{admonition} Model-added interpretation - source lines 57-57
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.
::::

::::{admonition} Original paper material - source lines 59-59
:class: paper-original

```latex
  59 | A key limitation of existing TDA approaches in this context is their inherent isotropy. Standard topological descriptors are invariant under rotations and reflections and therefore do not encode directional information or account for the breaking of symmetry with respect to the principal axes. This poses a fundamental obstacle for modeling anisotropic mechanical response in porous materials, where uniaxial Young’s modulus depends strongly on the loading direction and different axes may act as mechanically easy or hard directions. As a result, direction-agnostic topological summaries cannot distinguish between structurally identical but mechanically inequivalent orientations, making them unsuitable for predicting direction-dependent properties such as uniaxial stiffness or strength in anisotropic porous solids.
```

**Readable text**

> A key limitation of existing TDA approaches in this context is their inherent isotropy. Standard topological descriptors are invariant under rotations and reflections and therefore do not encode directional information or account for the breaking of symmetry with respect to the principal axes. This poses a fundamental obstacle for modeling anisotropic mechanical response in porous materials, where uniaxial Young’s modulus depends strongly on the loading direction and different axes may act as mechanically easy or hard directions. As a result, direction-agnostic topological summaries cannot distinguish between structurally identical but mechanically inequivalent orientations, making them unsuitable for predicting direction-dependent properties such as uniaxial stiffness or strength in anisotropic porous solids.

::::

::::{admonition} Model-added interpretation - source lines 59-59
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.
::::

::::{admonition} Original paper material - source lines 61-63
:class: paper-original

```latex
  61 | In this work, a direction-aware TDA framework is introduced by embedding the loading axis directly into filtration functions and systematically evaluating the resulting descriptors for uniaxial Young’s modulus prediction. To this end, we construct datasets spanning a wide range of structural anisotropy and demonstrate that directional TDA descriptors achieve substantially higher predictive performance than the non-directional descriptors commonly used in the literature. 
  62 | For strongly anisotropic structures, direction-aware descriptors provide large gains in both $R^2$ (coefficient of determination) and MAE (Mean Absolute Error), while for nominally isotropic datasets they remain uniformly competitive and typically improve $R^2$, indicating that direction-aware topology captures mechanically relevant organization even when macroscopic anisotropy is weak.
  63 | To verify that these findings are not specific to a particular structure class or generation mechanism, we further evaluate the approach on additional datasets encompassing diverse porous topologies and controlled anisotropy levels, recovering the same qualitative trends. Across all datasets, direction-aware persistent homology and multifiltration Euler characteristic profiles yield superior predictive performance, with the performance gap increasing systematically with structural anisotropy. When combined, directional PH and ECP descriptors achieve predictive accuracy approaching that of convolutional neural networks trained directly on voxelized structure data, while remaining orders of magnitude more compact and offering substantially greater interpretability.
```

**Readable text**

> In this work, a direction-aware TDA framework is introduced by embedding the loading axis directly into filtration functions and systematically evaluating the resulting descriptors for uniaxial Young’s modulus prediction. To this end, we construct datasets spanning a wide range of structural anisotropy and demonstrate that directional TDA descriptors achieve substantially higher predictive performance than the non-directional descriptors commonly used in the literature. For strongly anisotropic structures, direction-aware descriptors provide large gains in both $R^2$ (coefficient of determination) and MAE (Mean Absolute Error), while for nominally isotropic datasets they remain uniformly competitive and typically improve $R^2$, indicating that direction-aware topology captures mechanically relevant organization even when macroscopic anisotropy is weak. To verify that these findings are not specific to a particular structure class or generation mechanism, we further evaluate the approach on additional datasets encompassing diverse porous topologies and controlled anisotropy levels, recovering the same qualitative trends. Across all datasets, direction-aware persistent homology and multifiltration Euler characteristic profiles yield superior predictive performance, with the performance gap increasing systematically with structural anisotropy. When combined, directional PH and ECP descriptors achieve predictive accuracy approaching that of convolutional neural networks trained directly on voxelized structure data, while remaining orders of magnitude more compact and offering substantially greater interpretability.

::::

::::{admonition} Model-added interpretation - source lines 61-63
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- The principal-component construction adds local orientation information and supports multiparameter Euler-characteristic descriptors.
::::

::::{admonition} Original paper material - source lines 65-65
:class: paper-original

```latex
  65 | This paper is organized as follows. Section~2 describes the datasets of porous structures used in this study, including the procedures for dataset generation and the numerical estimation of uniaxial Young’s modulus using FFT-based simulations. Section~3 introduces the construction of both directional and non-directional topological descriptors, detailing the formulation of force-direction-aware scalar and vector fields for persistent homology and Euler characteristic profiles. Section~4 presents and analyzes the results of the proposed direction-aware TDA-based predictive models and compares their performance with the non-directional counterparts and with convolutional neural networks trained directly on voxelized structures, demonstrating the advantages of incorporating directional topology. Section~5 summarizes the main findings and discusses their implications.
```

**Readable text**

> This paper is organized as follows. Section~2 describes the datasets of porous structures used in this study, including the procedures for dataset generation and the numerical estimation of uniaxial Young’s modulus using FFT-based simulations. Section~3 introduces the construction of both directional and non-directional topological descriptors, detailing the formulation of force-direction-aware scalar and vector fields for persistent homology and Euler characteristic profiles. Section~4 presents and analyzes the results of the proposed direction-aware TDA-based predictive models and compares their performance with the non-directional counterparts and with convolutional neural networks trained directly on voxelized structures, demonstrating the advantages of incorporating directional topology. Section~5 summarizes the main findings and discusses their implications.

::::

::::{admonition} Model-added interpretation - source lines 65-65
:class: model-interpretation

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This connects geometry to the target variable: directional Young's modulus under a specified loading axis.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This is the target-generation mechanism: the paper uses FFT-based homogenization rather than treating stiffness labels as empirical annotations.
::::

