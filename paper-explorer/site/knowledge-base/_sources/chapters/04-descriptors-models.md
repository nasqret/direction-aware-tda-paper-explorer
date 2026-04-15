# Descriptors And Models

After directional filtrations are computed, they must be converted into fixed-size feature vectors for machine learning.

## Persistent Homology

Persistent homology tracks connected components, loops, and voids as the filtration threshold changes. The paper computes dimensions 0, 1, and 2 on cubical complexes.

Persistence diagrams are vectorized as persistence images:

- image size: $10 \times 10$;
- birth range: $(0,1.25)$;
- persistence range: $(0,1.25)$;
- dimensions 0, 1, and 2 are vectorized separately and concatenated.

## Euler Characteristic Profiles

Euler characteristic profiles are less detailed than full persistent homology but computationally efficient and naturally compatible with multiparameter filtrations.

The paper samples ECP descriptors on a $7 \times 7 \times 7$ grid.

## Model Families

| Model | Input | Role |
| --- | --- | --- |
| CatBoost | PH, ECP, or PH+ECP vectors | Main tabular model for topological descriptors |
| DenseNet-121 CNN | Voxelized structures | High-performing image/voxel baseline |

## Cross-Validation

The paper uses 8-fold cross-validation:

- six folds for training;
- one fold for validation and early stopping;
- one fold for testing;
- repeated so every fold is used as test once.

Splits are performed at the structure level to prevent leakage between directional modulus values from the same structure.

:::{admonition} Why The Split Matters
:class: warning
If the same porous structure appeared in both train and test sets under different loading directions, the model could learn the structure identity rather than generalizing. The paper avoids this by keeping all directions of one structure in the same split.
:::

