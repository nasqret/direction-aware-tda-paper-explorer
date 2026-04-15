# Expanded Annotated Text

This chapter is the main reading companion for the paper. It is not a short
summary. It rewrites the manuscript in a continuous explanatory form, keeping
the scientific order of the original text, preserving the formulas, figures,
and tables, and adding comments at the point where the reader needs them.

```{admonition} Source convention
:class: annotation-legend
Short source anchors such as `main.tex:67-313` point to the original LaTeX
source in `arXiv-2604.08105v1/`. The line-numbered provenance pages remain
available after this chapter, but the present chapter is intended to be read as
standard mathematical exposition.
```

```{admonition} Color legend
:class: annotation-legend
<span class="legend-swatch paper-swatch"></span> **Blue** marks original-paper
material or source-derived reconstruction: manuscript order, formulas, tables,
figures, reported values, and faithful explanatory restatement of the source.

<span class="legend-swatch model-swatch"></span> **Amber** marks
model-added interpretation: comments, reading advice, explanatory remarks, and
context that is not itself part of the paper text.
```

## Central Claim And Abstract-Level Reading

The paper studies **direction-dependent elastic response** in porous materials.
The target property is the directional Young's modulus: the same voxelized
microstructure can have different effective stiffness depending on whether it is
compressed along the $x$, $y$, or $z$ axis.

The key problem is that many standard topological descriptors are deliberately
insensitive to coordinate direction. This is usually a strength: a topological
summary should not change under irrelevant rotations or axis permutations. In
this paper, however, the loading direction is not irrelevant. It is part of the
physical experiment. A descriptor that forgets the loading axis can therefore
identify two mechanically distinct situations.

The proposed solution is:

1. Start with a binary porous structure.
2. Choose a compression direction.
3. Build filtrations whose values depend on that direction.
4. Compute persistent homology (PH) and Euler characteristic profile (ECP)
   descriptors from those filtrations.
5. Use the vectorized descriptors in regression models for Young's modulus.

The abstract's main empirical claim is that direction-aware topological
descriptors outperform direction-agnostic descriptors, with the improvement
becoming larger when the dataset is more anisotropic. The strongest test case is
RTPxz, where directional PH+ECP reaches $R^2=0.978$, close to the voxel CNN
baseline $R^2=0.985$.

```{admonition} Remark
:class: model-interpretation
The conceptual move is not simply to add an axis label to the data table. The
axis is inserted before topology is computed, by changing the filtration
function itself. That is why the topological features can become direction
aware.
```

## 1. Introduction

Source: `main.tex:47-66`.

Porous materials are modeled here as structures with two phases: solid material
and void. The mechanical behavior depends not only on the total amount of solid
material, but also on how the solid is connected, how pores are arranged, and
how load paths travel through the geometry.

The classical baseline intuition is the Gibson--Ashby density law
{cite}`Gibson1982`. It relates material density $\rho$ to Young's modulus $E$
by a power law,

$$
E \propto \rho^n.
$$

For idealized open-cell structures one expects $n \approx 2$, while for
closed-cell structures one expects different scaling, often described in the
paper as $E \propto \rho^3$ in the cited setting. The important point is not the
exact exponent, but the limitation of density-only reasoning. Real porous
materials can be stiffer or softer than density scaling predicts because
connectivity, pore morphology, strut alignment, and topological organization
matter.

Topological data analysis (TDA) supplies descriptors for these missing
geometric and topological aspects. Persistent homology records the appearance
and disappearance of components, loops, and voids across a filtration. Euler
characteristic curves and profiles record alternating counts of cells or
topological features across one or more filtration parameters. These descriptors
are compact enough to be used in machine-learning pipelines.

The paper identifies a specific limitation of previous TDA descriptors for
porous materials: many are based on distance transforms or other constructions
that do not know which direction is being loaded. If a microstructure is
anisotropic, the modulus along a hard axis and an easy axis can be very
different. A descriptor invariant under axis permutation can collapse this
difference.

```{admonition} Comment
:class: model-interpretation
This is the central modeling obstruction. A direction-agnostic descriptor can be
mathematically elegant and still physically wrong for a directional target.
Young's modulus under uniaxial compression is not a scalar property of the
unoriented shape alone; it is a property of shape plus loading direction.
```

The paper's contribution is therefore a direction-aware TDA framework. The
compression axis is embedded directly into the filtration functions used to
compute PH and ECP descriptors. These descriptors are then compared with
non-directional counterparts and with a CNN trained directly on voxel grids.

## 2. Datasets

Source: `main.tex:67-313`; supplementary source: `supplement.tex:6-73`.

The dataset design is part of the argument. The paper does not test only one
kind of porous material. It uses:

- RTP structures, where anisotropy is controlled in Fourier space.
- TD structures, which are statistically isotropic but topologically diverse.
- ATTD structures, created by elongating TD structures to introduce anisotropy.
- RTPxyz in the supplement, where all three loading directions are pooled.

The reason for this design is that direction-aware descriptors should be tested
both where anisotropy is strong and where it is weak or absent. If the method
only worked for one synthetic generator, the claim would be much weaker.

### 2.1 Random Trigonometric Phase Structures

Source: `main.tex:69-155`.

The RTP dataset is generated from a random trigonometric scalar field on the
unit cube with periodic boundary conditions. The grid resolution is
$N \times N \times N$ with $N=80$, and coordinates are normalized as
$\mathbf{x}\in[0,1)^3$.

The scalar field is

$$
S(\mathbf{x}) =
\sqrt{\frac{2}{K}}
\sum_{k=1}^{K}
\cos\!\left(2\pi\,\mathbf{q}_k \cdot \mathbf{x} + \phi_k\right),
$$

where:

- $K$ is the number of trigonometric modes;
- $\phi_k \sim \mathcal{U}(0,2\pi)$ are independent random phases;
- $\mathbf{q}_k=(n_x,n_y,n_z)$ is sampled from a bounded integer lattice with
  $n_\alpha\in[-n_{\max}, n_{\max}]$.

The paper uses $K$ sampled uniformly from $[10,30]$, fixes
$n_{\max}=12$, and samples target porosity from $[0.2,0.8]$.

The continuous scalar field is thresholded to obtain a binary material:

$$
X(\mathbf{x}) =
\begin{cases}
1, & S(\mathbf{x}) > \tau,\\
0, & \text{otherwise}.
\end{cases}
$$

Here $X=1$ denotes solid and $X=0$ denotes void. The threshold $\tau$ is chosen
numerically so that the generated structure matches the target porosity.

```{admonition} Remark
:class: model-interpretation
The threshold is not a fixed global constant. It is adjusted per realization to
control porosity. This matters because the study is not just measuring density
effects; it wants to separate porosity, topology, and anisotropic organization.
```

The generated structures must also pass connectivity and percolation checks:
all solid voxels must form one connected component, and the solid phase must
percolate across all three Cartesian directions. Without this condition, the
effective mechanical response could be dominated by disconnected or physically
irrelevant fragments.

Anisotropy is introduced by scaling the wavevectors before evaluating the RTP
field:

$$
\mathbf{q}_k =
\operatorname{diag}(s_x,s_y,s_z)\,\mathbf{q}_k^{(0)}.
$$

The paper uses $s_x=s_y=1$ and $s_z=0.2$. Larger $s_\alpha$ means higher spatial
frequency and shorter correlation length along direction $\alpha$; smaller
$s_\alpha$ means longer correlation length. Thus $s_z=0.2$ creates elongated
structure along the $z$ axis.

![RTP examples](../_static/images/render_rtp_420.png)

The paper reports 500 RTP microstructures. Each is tested under uniaxial
compression along the Cartesian directions, producing directional Young's
moduli. Two paired datasets are central:

- **RTPxy**: the same structures evaluated along $x$ and $y$ only. This is
  weakly anisotropic in the probed plane.
- **RTPxz**: the same structures evaluated along $x$ and $z$. This compares an
  easy direction with a hard direction and is strongly anisotropic.

### 2.2 Topologically Diverse Structures

Source: `main.tex:156-221`; supplement: `supplement.tex:6-73`.

The TD dataset contains 2375 statistically isotropic periodic porous structures
on an $80^3$ grid. It is designed to test whether the topological descriptors
generalize beyond the RTP mechanism.

The five structure families are:

| Family | Construction idea | Role in the dataset |
| --- | --- | --- |
| Voronoi | Random seed points define Voronoi tessellations; edges are thickened into struts. | Network-like structures with random cell geometry. |
| Zeolitic | Predicted zeolite frameworks are rescaled to the unit cube; Si-neighbor connections form the skeleton. | Realistic framework-like connectivity. |
| Diamond-like | Perturbed diamond-lattice atoms are connected by thickened nearest-neighbor bonds. | Ordered but randomly perturbed strut networks. |
| Cubic-strut | Perturbed simple cubic lattice points are connected and thickened. | Classical cubic scaffold variations. |
| Spline-based | Periodic random B-spline scalar fields are thresholded. | Smooth pore morphologies. |

![TD and ATTD structure families](../_static/images/render_splines.png)

The supplement gives the most explicit mathematical description for the
spline-based structures. Random coefficients are sampled as

$$
r_{ijk}\sim\mathcal{U}(0,1),\qquad i,j,k=1,\dots,n.
$$

A trivariate periodic tensor-product B-spline field is then defined by

$$
f(x,y,z)=
\sum_{i=1}^{n}\sum_{j=1}^{n}\sum_{k=1}^{n}
r_{ijk}\,N_{i,3}(x)\,N_{j,3}(y)\,N_{k,3}(z),
$$

where $N_{i,3}$ are cubic B-spline basis functions. The binary structure is a
super-level set:

$$
T_{abc}(t)=
\mathbf{1}\!\left\{
f\!\left(\frac{a}{L},\frac{b}{L},\frac{c}{L}\right)\ge t
\right\},
\qquad a,b,c=0,\dots,L-1,
$$

with $L=80$. The volume fraction is

$$
\phi(t)=\frac{1}{L^3}\sum_{a,b,c}T_{abc}(t).
$$

```{admonition} Comment
:class: model-interpretation
The TD dataset is not merely "more data." It changes the geometric prior. RTP
structures are generated by Fourier modes; TD structures include strut
networks, framework-like geometries, lattice perturbations, and smooth spline
fields. This tests whether the descriptor idea is tied to a generator or to a
more general structure-property principle.
```

### 2.3 Anisotropic Transformed TD Structures

Source: `main.tex:222-268`.

The ATTD dataset is built because the TD generators do not provide an obvious
knob for controlled anisotropy. The paper therefore applies a geometric
elongation procedure:

1. Start with an isotropic $80\times80\times80$ TD structure.
2. Downsample it to $40\times40\times40$.
3. Elongate the segment along $z$ to $40\times40\times80$.
4. Replicate it four times in the transverse directions to reconstruct an
   $80\times80\times80$ periodic grid.

This approximately preserves local topology while introducing a preferred
direction. ATTD is therefore a bridge between statistically isotropic TD and
strongly anisotropic RTPxz.

### 2.4 Anisotropy Measures

Source: `main.tex:269-295`.

The paper uses two complementary anisotropy measures, one in real space and one
in Fourier space.

Let the binary indicator be $X(\mathbf{x})$. The mean-centered field is

$$
Y(\mathbf{x})=X(\mathbf{x})-\langle X\rangle.
$$

For each Cartesian direction, a one-dimensional periodic autocorrelation
function is computed and averaged over transverse coordinates. The directional
correlations are denoted

$$
C_x(\ell),\qquad C_y(\ell),\qquad C_z(\ell),
$$

and are normalized by $C_\alpha(0)=1$.

The directional correlation length is defined as

$$
L_\alpha=\sum_{\ell\ge 0} C_\alpha(\ell),
$$

where the sum is restricted to non-negative lags up to the first zero crossing
of $C_\alpha(\ell)$.

The Fourier-space measure uses the discrete Fourier transform of $Y$ and the
directional second moments of the power spectrum:

$$
\langle k_\alpha^2\rangle.
$$

The zero-frequency mode is removed before computing these moments. This avoids
letting the mean solid fraction dominate the spectral anisotropy signal.

```{admonition} Remark
:class: model-interpretation
The paper reports dataset-level anisotropy through the standard deviations
$\sigma(k)$ and $\sigma(L)$ over the loading axes used in the dataset. Large
values mean the probed directions differ strongly in morphology. RTPxz has
$\sigma(k)=0.40$ and $\sigma(L)=1.89$, making it the cleanest test of
direction-aware topology.
```

### 2.5 Young's Modulus Labels

Source: `main.tex:296-313`.

Effective Young's moduli are computed using FFT-based homogenization via
`FFTMAD` {cite}`Lucarini2019`. Each structure is compressed along selected
principal directions, and the effective modulus is extracted from the linear
macroscopic stress-strain response.

For RTP, the solid phase is assigned properties representative of an
Au$_{0.30}$Ag$_{0.70}$ alloy:

$$
E_{\mathrm{bulk}}=81.5\,\mathrm{GPa},
\qquad
\nu_{\mathrm{bulk}}=0.39.
$$

For TD and ATTD, the solid phase corresponds to aluminium:

$$
E_{\mathrm{bulk}}=70.0\,\mathrm{GPa},
\qquad
\nu_{\mathrm{bulk}}=0.33.
$$

All simulations are small-strain simulations on voxelized structures.

## 3. Direction-Aware Topological Descriptors

Source: `main.tex:314-402`.

The paper uses cubical complexes to represent voxelized porous structures.
Filtration values are first assigned to vertices and then propagated to higher
dimensional cells using the standard V-construction. The key distinction is
between:

- **non-directional filtrations**, such as distance-transform filtrations used
  in prior porous-material TDA work;
- **direction-aware filtrations**, where the loading axis enters the filtration
  before PH or ECP is computed.

![Direction-aware filtration schematic](../_static/images/TDA_directional_horizontal_new.png)

### 3.1 Cone-Based Filtration

Source: `main.tex:336-352`.

The cone filtration measures local porosity in cones aligned with the
compression direction. For a grid point $e=(i_0,j_0,k_0)$, the paper defines a
double cone of height $h$ and radius $r$:

$$
\mathrm{Cone}(e,r,h)
=
\left\{
(i,j,k)\in\mathcal{N}:
|k-k_0|<h
\;\land\;
\sqrt{|i-i_0|^2+|j-j_0|^2}
\le
\frac{|k-k_0|r}{h}
\right\}.
$$

The displayed formula is written for a compression direction parallel to the
$z$ axis. For other compression directions, the coordinate role changes
accordingly.

For a binary grid $G$ of size $n\times n\times n$, the cone-based filtration is

$$
F_{\mathrm{cone}}(e;r,h)
=
1-
\frac{1}{|\mathrm{Cone}(e,r,h)|}
\sum_{(i,j,k)\in \mathrm{Cone}(e,r,h)}
g_{i'j'k'},
$$

where

$$
i'=i\bmod n,\qquad j'=j\bmod n,\qquad k'=k\bmod n.
$$

The modulo operation implements periodicity. Since $g=1$ for solid material and
$g=0$ for void, the average in the formula measures the solid fraction inside
the cone. Subtracting from 1 gives a local cone porosity.

If the selected grid element is empty, the filtration value is set to 1.25. This
is deliberately outside the physical solid-material range $[0,1]$, so void
vertices enter the filtration after all material vertices.

```{admonition} Comment
:class: model-interpretation
The cone filtration is interpretable. It asks: looking forward and backward
along the loading direction, how much solid material lies in a conical support
region? This encodes a simple proxy for directional load transfer.
```

The fixed hyperparameters are:

$$
h_{\mathrm{cone}}=6,
\qquad
r_{\mathrm{cone}}=3.
$$

### 3.2 Principal-Component Multifiltration

Source: `main.tex:353-384`.

The principal-component construction estimates local material orientation. For
a selected solid grid element, all nonzero grid elements inside a sphere of
radius $r$ are treated as a point cloud. The first principal component of that
point cloud gives a local dominant direction.

If the normalized first principal component is $v$, the filtration value used
in the paper is the two-parameter vector

$$
\left(1-|v_z|,\;1-|v_y|\right).
$$

The component $|v_z|$ measures alignment with the compression direction in the
paper's coordinate convention. A material direction aligned with compression
has $|v_z|$ close to 1, hence $1-|v_z|$ close to 0.

The neighborhood radius is fixed as

$$
r_{\mathrm{PC1}}=4.
$$

The algorithmic content can be written as:

```text
PcFiltration(G, (i,j,k), r):
    if G[i,j,k] = 0:
        return (1.25, 1.25)
    neighborhood = get_neighborhood(G, (i,j,k), r)
    v = first_principal_component(neighborhood)
    v = v / |v|
    return (1 - |v[2]|, 1 - |v[1]|)
```

```{admonition} Remark
:class: model-interpretation
This is the main place where the paper moves from a scalar filtration to a
multifiltration. ECP can naturally sample a multiparameter grid, so the
principal-component construction is paired with Euler characteristic profiles.
```

### 3.3 PH, ECP, And Vectorization

Source: `main.tex:385-393`.

The cone filtration is used for persistent homology. PH tracks connected
components, loops, and voids across the filtration. The paper uses dimensions
0, 1, and 2 and converts persistence diagrams into persistence images
{cite}`JMLR:v18:16-337`.

The persistence image settings are:

$$
10\times10
\quad\text{image grid},
\qquad
\text{birth range }(0,1.25),
\qquad
\text{persistence range }(0,1.25).
$$

The persistence images for dimensions 0, 1, and 2 are vectorized separately and
concatenated.

ECP descriptors are computed from the multifiltration and sampled on a

$$
7\times7\times7
$$

grid. ECP is less detailed than PH but computationally efficient and suitable
for multiparameter filtrations.

### 3.4 Learning Models And Cross-Validation

Source: `main.tex:394-402`.

Topological descriptors are used as tabular features for CatBoost regression
{cite}`Prokhorenkova2019`. The CNN baseline is DenseNet-121 trained directly on
the voxelized structures.

The evaluation uses $k$-fold cross-validation with

$$
k=8.
$$

For each fold, six folds are used for training, one for validation, and one for
testing. Metrics are computed only on test sets and then averaged across folds.

To avoid data leakage, splits are performed at the **structure level**. If the
same structure has multiple Young's modulus labels under different loading
directions, those labels stay together in train, validation, or test.

```{admonition} Comment
:class: model-interpretation
This split policy is essential. If the same geometry appeared in training under
one loading direction and in testing under another, the model could partially
memorize the structure rather than learn a general descriptor-property map.
```

## 4. Results And Discussion

Source: `main.tex:403-579`; supplement: `supplement.tex:74-159`.

The main empirical question is whether direction-aware descriptors outperform
non-directional descriptors, and whether the improvement grows with anisotropy.

### 4.1 Main Performance Table

Source: `main.tex:459-489`.

| Dataset | $\sigma(k)$ | $\sigma(L)$ | CNN $R^2$ | CNN MAE | Method | Non-dir $R^2$ | Non-dir MAE | Dir $R^2$ | Dir MAE |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: |
| RTPxz | 0.40 | 1.89 | 0.985 | 1.62 | PH | 0.463 | 9.42 | 0.954 | 2.65 |
| RTPxz | 0.40 | 1.89 | 0.985 | 1.62 | ECP | 0.616 | 12.06 | 0.978 | 1.85 |
| RTPxz | 0.40 | 1.89 | 0.985 | 1.62 | PH+ECP | 0.754 | 7.05 | 0.978 | 1.86 |
| RTPxy | 0.11 | 0.21 | 0.979 | 1.02 | PH | 0.878 | 2.42 | 0.873 | 2.45 |
| RTPxy | 0.11 | 0.21 | 0.979 | 1.02 | ECP | 0.925 | 1.86 | 0.940 | 1.66 |
| RTPxy | 0.11 | 0.21 | 0.979 | 1.02 | PH+ECP | 0.916 | 1.98 | 0.938 | 1.69 |
| TD | 0.14 | 1.80 | 0.976 | 0.62 | PH | 0.596 | 2.44 | 0.665 | 2.18 |
| TD | 0.14 | 1.80 | 0.976 | 0.62 | ECP | 0.815 | 1.48 | 0.818 | 1.66 |
| TD | 0.14 | 1.80 | 0.976 | 0.62 | PH+ECP | 0.822 | 1.46 | 0.836 | 1.53 |
| ATTD | 0.20 | 1.74 | 0.894 | 0.34 | PH | 0.536 | 3.78 | 0.759 | 2.53 |
| ATTD | 0.20 | 1.74 | 0.894 | 0.34 | ECP | 0.653 | 3.36 | 0.815 | 2.13 |
| ATTD | 0.20 | 1.74 | 0.894 | 0.34 | PH+ECP | 0.643 | 3.33 | 0.825 | 2.06 |

```{admonition} How to read this table
:class: model-interpretation
The table is not just a leaderboard. Compare within each dataset and descriptor
family: PH non-directional vs PH directional, ECP non-directional vs ECP
directional, and PH+ECP non-directional vs PH+ECP directional. The central
claim is about these paired comparisons.
```

### 4.2 RTPxy And RTPxz

Source: `main.tex:410-514`.

![RTP predicted versus computed](../_static/images/scatter_rtp_xy.png)

RTPxy probes $x$ and $y$ directions. The mean moduli are almost identical:

$$
E_x=11.46\,\mathrm{GPa},
\qquad
E_y=11.49\,\mathrm{GPa}.
$$

The anisotropy measures are small:

$$
\sigma(k)=0.11,
\qquad
\sigma(L)=0.21.
$$

Thus direction-aware topology has limited opportunity to help. Even so,
directional ECP improves from $R^2=0.925$ to $R^2=0.940$, and directional
PH+ECP improves from $R^2=0.916$ to $R^2=0.938$.

RTPxz is the decisive case. It probes $x$ and $z$ directions in the same
underlying structures:

$$
E_x=11.46\,\mathrm{GPa},
\qquad
E_z=35.55\,\mathrm{GPa}.
$$

The anisotropy measures are much larger:

$$
\sigma(k)=0.40,
\qquad
\sigma(L)=1.89.
$$

For RTPxz, non-directional PH gives only $R^2=0.463$, while directional PH gives
$R^2=0.954$. Non-directional ECP gives $R^2=0.616$, while directional ECP gives
$R^2=0.978$. Directional PH+ECP also reaches $R^2=0.978$.

```{admonition} Interpretation
:class: model-interpretation
The same geometry can be mechanically easy in one direction and hard in
another. Non-directional descriptors mix these cases because they cannot
represent the loading axis. Direction-aware descriptors separate them before
topology is summarized.
```

### 4.3 TD And ATTD

Source: `main.tex:515-579`.

![TD and ATTD predicted versus computed](../_static/images/scatter_td.png)

The TD dataset tests generality under statistical isotropy. It has

$$
\sigma(k)=0.14,
\qquad
\sigma(L)=1.80,
\qquad
\bar{E}=7.46\,\mathrm{GPa}.
$$

The same broad pattern holds: ECP is stronger than PH alone, and directional
PH+ECP gives the best $R^2$ among topological models. The gains are modest
because TD is not designed to contain a preferred direction.

ATTD introduces moderate anisotropy by elongating TD structures. It has

$$
\sigma(k)=0.20,
\qquad
\sigma(L)=1.74,
\qquad
\bar{E}=9.36\,\mathrm{GPa}.
$$

For ATTD, the directional improvement is substantial:

- ECP improves from $R^2=0.653$ to $R^2=0.815$.
- PH+ECP improves from $R^2=0.643$ to $R^2=0.825$.
- The directional PH+ECP MAE is $2.06\,\mathrm{GPa}$, compared with
  $3.33\,\mathrm{GPa}$ for non-directional PH+ECP.

The CNN remains strong, but the gap between CNN and directional topology
shrinks as anisotropy increases. The paper explicitly compares these gaps:

| Dataset | CNN $R^2$ | Directional PH+ECP $R^2$ | Gap |
| --- | ---: | ---: | ---: |
| TD | 0.976 | 0.836 | 0.140 |
| ATTD | 0.894 | 0.825 | 0.069 |
| RTPxy | 0.979 | 0.938 | 0.041 |
| RTPxz | 0.985 | 0.978 | 0.006 |

```{admonition} Comment
:class: model-interpretation
This gap analysis is important because it reframes the CNN comparison. The CNN
is not merely "better"; it is better partly because it can learn directional
organization from voxels. Direction-aware topology recovers much of that signal
in a compact descriptor.
```

### 4.4 Supplementary RTPxyz Result

Source: `supplement.tex:74-104`.

RTPxyz pools all three loading directions. It contains 1500 samples: two thirds
from mechanically easy $x$ and $y$ axes and one third from the hard $z$ axis.

![RTPxyz predicted versus computed](../_static/images/scatter_rtp_xyz.png)

| Dataset | $\sigma(k)$ | $\sigma(L)$ | CNN $R^2$ | CNN MAE | Method | Non-dir $R^2$ | Non-dir MAE | Dir $R^2$ | Dir MAE |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: |
| RTPxyz | 0.38 | 1.77 | 0.990 | 1.88 | PH | 0.509 | 13.26 | 0.548 | 13.61 |
| RTPxyz | 0.38 | 1.77 | 0.990 | 1.88 | ECP | 0.493 | 15.11 | 0.974 | 3.09 |
| RTPxyz | 0.38 | 1.77 | 0.990 | 1.88 | PH+ECP | 0.511 | 9.94 | 0.974 | 2.89 |

The supplement reports a bifurcation in non-directional predictions: easy-axis
samples are systematically overestimated and hard-axis samples are
systematically underestimated. This is the clearest qualitative picture of the
failure mode. The model sees a topological structure but not the direction in
which it was compressed.

### 4.5 Per-Fold Cross-Validation Tables

Source: `supplement.tex:105-158`.

The supplement provides fold-wise results for PH+ECP on RTPxz and RTPxy. These
tables show that the average gains are not caused by one lucky split.

#### Fold-wise $R^2$

| Fold | RTPxz Dir | RTPxz Non-dir | Gain | RTPxz CNN | RTPxy Dir | RTPxy Non-dir | Gain | RTPxy CNN |
| ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: |
| 1 | 0.9706 | 0.7213 | Yes | 0.9689 | 0.9176 | 0.9012 | Yes | 0.9852 |
| 2 | 0.9829 | 0.8088 | Yes | 0.9876 | 0.9777 | 0.9587 | Yes | 0.9751 |
| 3 | 0.9814 | 0.7638 | Yes | 0.9923 | 0.9265 | 0.9179 | Yes | 0.9889 |
| 4 | 0.9726 | 0.7582 | Yes | 0.9899 | 0.9132 | 0.9013 | Yes | 0.9823 |
| 5 | 0.9795 | 0.7018 | Yes | 0.9889 | 0.9408 | 0.9162 | Yes | 0.9892 |
| 6 | 0.9798 | 0.7473 | Yes | 0.9776 | 0.9525 | 0.9035 | Yes | 0.9732 |
| 7 | 0.9764 | 0.7866 | Yes | 0.9828 | 0.9532 | 0.9130 | Yes | 0.9863 |
| 8 | 0.9816 | 0.7464 | Yes | 0.9884 | 0.9233 | 0.9169 | Yes | 0.9541 |
| Mean | 0.9781 | 0.7543 | Yes | 0.9846 | 0.9381 | 0.9161 | Yes | 0.9793 |
| Std | 0.0045 | 0.0340 | Yes | 0.0078 | 0.0221 | 0.0186 | No | 0.0118 |

#### Fold-wise MAE

| Fold | RTPxz Dir | RTPxz Non-dir | Gain | RTPxz CNN | RTPxy Dir | RTPxy Non-dir | Gain | RTPxy CNN |
| ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: |
| 1 | 2.116 | 7.532 | Yes | 2.269 | 2.051 | 2.202 | Yes | 0.871 |
| 2 | 1.572 | 6.511 | Yes | 1.504 | 1.120 | 1.493 | Yes | 1.225 |
| 3 | 1.631 | 6.803 | Yes | 1.185 | 1.512 | 1.763 | Yes | 0.701 |
| 4 | 1.965 | 6.757 | Yes | 1.203 | 1.674 | 1.735 | Yes | 0.792 |
| 5 | 1.820 | 7.821 | Yes | 1.380 | 1.764 | 2.087 | Yes | 0.735 |
| 6 | 1.891 | 7.331 | Yes | 2.062 | 1.656 | 2.213 | Yes | 1.243 |
| 7 | 2.119 | 6.788 | Yes | 2.021 | 1.850 | 2.396 | Yes | 1.060 |
| 8 | 1.730 | 6.878 | Yes | 1.336 | 1.906 | 1.989 | Yes | 1.520 |
| Mean | 1.855 | 7.053 | Yes | 1.620 | 1.692 | 1.985 | Yes | 1.018 |
| Std | 0.207 | 0.454 | Yes | 0.430 | 0.284 | 0.300 | Yes | 0.293 |

```{admonition} Interpretation
:class: model-interpretation
For RTPxz, the directional PH+ECP improvement appears in every fold for both
$R^2$ and MAE. That is stronger evidence than the averaged table alone.
```

## 5. Summary And Meaning

Source: `main.tex:580-606`.

The paper establishes a general representation principle: when the target
property is direction dependent, topology should be computed from filtrations
that know the direction. The method is not tied to one dataset. It is strongest
on RTPxz, remains useful on ATTD, and does not collapse on weakly anisotropic or
nominally isotropic datasets.

The main conclusions are:

1. Standard topological descriptors are useful but incomplete for anisotropic
   mechanical response.
2. Direction-aware filtrations repair a specific physical mismatch between
   descriptor invariance and direction-dependent targets.
3. ECP is the strongest standalone descriptor family in the reported
   experiments.
4. PH+ECP gives the most stable combined topological representation.
5. Direction-aware PH+ECP can approach voxel CNN performance in strongly
   anisotropic settings while remaining compact and interpretable.

```{admonition} Final remark
:class: model-interpretation
The paper should be read as a method for inserting physical directionality into
topological summaries. The exact porous-material datasets are the validation
surface, but the conceptual template can extend to any problem where a
preferred direction controls a material, transport, or mechanical property.
```

## 6. Reproducibility Surface

Source: `main.tex:591-606`.

The associated implementation and datasets are available at:

<https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials>

The repository is described as containing:

- code for directional and non-directional descriptor computation;
- CatBoost and CNN training scripts;
- numerical experiment reproduction tools;
- voxelized porous structures stored as `.npy`;
- FFTMAD-computed Young's modulus values;
- vectorized PH, ECP, and PH+ECP descriptors.

In this explorer, the external repository inventory is available through the
database and repository pages. The current local inventory records the structure
arrays as Git LFS pointers unless the full LFS payload is explicitly pulled.
