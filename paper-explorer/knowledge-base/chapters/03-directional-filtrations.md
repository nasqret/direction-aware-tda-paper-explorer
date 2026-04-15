# Directional Filtrations

The paper modifies the filtration step so that the compression direction becomes part of the topological descriptor.

## Cone-Based Filtration

For each material voxel, a double cone is placed with its axis aligned to the compression direction. The filtration value is the porosity inside that cone. Empty voxels are assigned a value above the material range so that material enters the filtration first.

The manuscript defines a double cone around a grid element $e=(i_0,j_0,k_0)$:

$$
\mathrm{Cone}(e,r,h)=
\left\{
(i,j,k)\in \mathcal{N}:
|k-k_0|<h
\land
\sqrt{|i-i_0|^2+|j-j_0|^2}
\leq
\frac{|k-k_0|r}{h}
\right\}.
$$

The cone-based filtration is:

$$
F_{\mathrm{cone}}(e;r,h)=
1-
\frac{1}{|\mathrm{Cone}(e,r,h)|}
\sum_{(i,j,k)\in \mathrm{Cone}(e,r,h)} g_{i'j'k'},
$$

where indices are wrapped periodically.

:::{admonition} Interpretation
:class: definition
The cone asks: "How much material lies in the local forward/backward load-bearing neighborhood aligned with the compression axis?"
:::

## Principal-Component Multifiltration

The second construction estimates the local material direction. Around each material voxel, the neighboring material points form a point cloud. The first principal component gives a dominant local axis. The filtration records components relative to the compression direction and an independent transverse direction:

$$
(1-|v_z|,\;1-|v_y|).
$$

This produces a multiparameter filtration suitable for Euler characteristic profiles.

## Hyperparameters Used In The Paper

| Construction | Hyperparameters |
| --- | --- |
| Cone filtration | height $h_{\mathrm{cone}}=6$, radius $r_{\mathrm{cone}}=3$ |
| PC1 multifiltration | neighborhood radius $r_{\mathrm{PC1}}=4$ |

## Important Distinction

- Persistent homology is computed from the cone-based scalar filtration.
- Euler characteristic profiles are computed from multiparameter filtrations.
- PH calculations assume periodicity in the compression direction.
- ECP calculations are performed without assuming periodicity in any direction.

