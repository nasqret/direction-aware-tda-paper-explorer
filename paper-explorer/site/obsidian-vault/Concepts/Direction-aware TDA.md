# Direction-aware TDA

Direction-aware TDA is the paper's central construction. It modifies the filtration function so that the loading or compression axis is encoded before topological summaries are computed.

## Why It Exists

Standard topological descriptors can be invariant under permutations or rotations of axes. That is a weakness for [[Young's modulus prediction]] when the modulus depends on the compression direction.

## Implementations In The Paper

- [[Cone-based filtration]] for scalar filtrations and [[Persistent homology]].
- [[Principal-component multifiltration]] for multiparameter filtrations and [[Euler characteristic profiles]].

## Connected Results

- Strongest improvement appears on [[RTPxz]].
- More moderate but consistent gains appear on [[Anisotropic Transformed TD dataset]].
- Weakly anisotropic cases such as [[RTPxy]] remain competitive.

