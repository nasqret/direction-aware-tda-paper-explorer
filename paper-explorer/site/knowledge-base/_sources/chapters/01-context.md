# Context: Why Direction Matters

Porous materials are mechanically governed by more than porosity. Connectivity, loops, cavities, local alignment, pore morphology, and scale-dependent geometry all influence stiffness. This is why topological data analysis is attractive: it can summarize connected components, tunnels, and voids across filtrations in a compact representation.

The paper focuses on **uniaxial Young's modulus**. That target is inherently directional: the same material can be stiff when compressed along one axis and compliant along another. A descriptor that ignores the loading axis can miss the relevant symmetry breaking.

:::{admonition} Core Limitation
:class: warning
Standard topological descriptors used in many porous-material workflows are invariant to permutations or rotations of spatial axes. This is useful for some problems, but it is a liability when the response variable is direction-dependent.
:::

## Existing Baseline

Classical porous-material models often begin with density or porosity. The Gibson-Ashby model, for example, links modulus to density by a power law. The paper positions direction-aware TDA as a richer alternative: it keeps multiscale topology while adding the loading direction explicitly.

## Direction-Aware Hypothesis

If elastic response depends on the compression axis, the topological descriptor should be computed from a filtration that also depends on that axis. The paper tests this hypothesis across datasets with weak, moderate, and strong anisotropy.

## Key Reading Questions

- When does a direction-agnostic descriptor fail?
- How much predictive signal is recovered by adding directional topology?
- Does the benefit only appear for deliberately anisotropic structures, or also for nominally isotropic ensembles?
- How close can compact topological descriptors get to voxel CNN baselines?

