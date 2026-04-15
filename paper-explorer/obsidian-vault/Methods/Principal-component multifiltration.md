# Principal-component multifiltration

The principal-component multifiltration estimates local material direction from a neighborhood point cloud.

## Procedure

1. Select a material voxel.
2. Collect non-zero voxels in a spherical neighborhood.
3. Compute the first principal component.
4. Return $(1-|v_z|, 1-|v_y|)$.

## Paper Parameter

- Neighborhood radius: 4.

## Used By

- [[Euler characteristic profiles]]
- [[Direction-aware TDA]]

