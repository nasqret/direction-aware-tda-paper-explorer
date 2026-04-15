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

The browser begins with the paper-level dataset manifest:

- dataset name;
- structure count when reported;
- anisotropy regime;
- generation method;
- mechanical target;
- known result rows.

Later, when the external repository is available, the browser should add:

- file inventory;
- sample counts by split;
- descriptor dimensions;
- checksum and provenance fields;
- preview slices for voxelized `.npy` structures;
- links from each database row to the relevant book and Obsidian notes.

## Repository Collection

The first repository manifest contains the code/data repository stated in the manuscript. Additional repositories can be added as related work or implementation dependencies are identified.

