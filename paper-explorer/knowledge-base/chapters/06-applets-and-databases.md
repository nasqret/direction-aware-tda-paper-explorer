# Applets And Database Browser

The static site turns paper concepts into lightweight interactive views.

## Applets

| Applet | Paper concept | Purpose |
| --- | --- | --- |
| Anisotropy/performance explorer | Table 1 and supplementary RTPxyz result | Show how directional gain grows with anisotropy. |
| Descriptor comparison | PH, ECP, PH+ECP | Compare non-directional and directional metrics. |
| Cone filtration toy | Cone-based filtration | Demonstrate local directional occupancy. |
| RTP field toy | Random trigonometric phase generation | Visualize thresholding and anisotropy in a 2D slice proxy. |

These applets are intentionally small and deterministic. They should be read as explanatory models, not as reproductions of the full paper computations.

## Database Browser

The browser includes two layers:

- paper-level dataset and result metadata extracted from the manuscript;
- generated repository inventory from the cloned code/data repository.

The paper-level dataset manifest records:

- dataset name;
- structure count when reported;
- anisotropy regime;
- generation method;
- mechanical target;
- known result rows.

The generated external inventory records:

- file inventory;
- CSV row counts;
- descriptor dimensions;
- SHA-256 checksums;
- script/workflow files;
- Git LFS status for voxelized `.npy` structures.

Preview slices for voxelized arrays require materialized LFS payloads. In the current clone, structure files are pointers until `git lfs pull` is run inside the external repository.

## Repository Collection

The first repository manifest contains the code/data repository stated in the manuscript. Additional repositories can be added as related work or implementation dependencies are identified.
