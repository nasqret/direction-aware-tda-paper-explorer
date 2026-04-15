# Datasets And Mechanical Targets

The paper evaluates several porous-structure datasets. Each structure is voxelized on an $80 \times 80 \times 80$ grid, and Young's modulus is computed under uniaxial loading.

## Random Trigonometric Phase

The RTP dataset is generated from a periodic scalar field:

$$
S(\mathbf{x}) =
\sqrt{\frac{2}{K}}
\sum_{k=1}^{K}
\cos\left(2\pi\,\mathbf{q}_k \cdot \mathbf{x} + \phi_k \right).
$$

Thresholding this field creates the binary material indicator. Anisotropy is introduced by scaling Fourier wavevector components, with the paper using $s_x=s_y=1$ and $s_z=0.2$ for elongated structures.

![Three RTP structures](../_static/images/render_rtp_420.png)

The paper reports 500 RTP structures. Compression is evaluated along selected Cartesian directions:

- **RTPxy** compares x/y axes and is weakly anisotropic.
- **RTPxz** compares x/z axes and is strongly anisotropic.
- **RTPxyz** aggregates all three axes and appears in the supplementary material.

## Topologically Diverse Structures

The TD dataset contains 2375 statistically isotropic periodic porous structures from five families:

- Voronoi-based structures.
- Zeolitic-inspired structures.
- Diamond-like structures.
- Cubic-strut structures.
- Spline-based structures.

![TD and ATTD structure families](../_static/images/render_splines.png)

## Anisotropic Transformed TD

The ATTD dataset is created by geometrically elongating TD structures along the $z$ direction. This preserves local topology while introducing a preferred axis. It is a bridge between the statistically isotropic TD set and the strongly anisotropic RTPxz setting.

## Anisotropy Measures

The paper uses two anisotropy summaries:

- **Spectral measure** $k$, based on directional second moments of the Fourier power spectrum.
- **Correlation-length measure** $L$, based on one-dimensional autocorrelation functions along each axis.

For each benchmark, the reported $\sigma(k)$ and $\sigma(L)$ measure the spread of directional anisotropy values across the axes used in that dataset.

## Young's Modulus Simulation

Effective Young's moduli are computed with the FFT-based homogenization package FFTMAD. RTP simulations use Au-Ag-like solid parameters, while TD and ATTD use aluminium-like parameters.

:::{admonition} Reproducibility Note
:class: tip
The manuscript states that the associated repository contains voxelized `.npy` structures, FFTMAD-computed Young's modulus values, vectorized descriptors, training scripts, and figure-generation workflows.
:::
