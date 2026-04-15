# Direction-aware TDA repository

Repository stated in the manuscript:

https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials

## Expected Contents From Paper

- Directional and non-directional descriptor computation.
- CatBoost and CNN training scripts.
- Numerical experiment reproduction workflows.
- Manuscript figure generation.
- Voxelized `.npy` structures.
- FFTMAD-computed Young's modulus values.
- Vectorized PH, ECP, and PH+ECP descriptors.

## Local Inventory

- Local path: `paper-explorer/repos/direction-aware-tda-for-porous-materials`
- Indexed HEAD: `f62d7226920f610fc6b7ac69f05bd6c258d1271b`
- Inventory note: `docs/external-repo-inventory.md`
- Browser manifest: `paper-explorer/site/data/external-repo-manifest.json`

## Current Findings

- 8 CSV database files are present.
- Directional database files have 646 columns: metadata, 343 ECP features, and 300 PH-cone features.
- Undirectional database files have 333 columns: metadata, 30 ECP features, and 300 PH-cone features.
- RTP directional database has 1500 rows over x/y/z axes and 500 normalized structures.
- RTPxy and RTPxz directional subset databases each have 1000 rows and 500 normalized structures.
- TD database has 2375 rows and 2375 normalized structures.
- ATTD database has 4770 rows and 2395 normalized structures in the CSV manifest.
- 8626 structure `.npy` files are present as Git LFS pointers.
- Full voxel previews require `git lfs pull`.
- The repository uses `undirectional` in paths while the manuscript/site language uses non-directional.
- Expected undirectional RTP subset paths for `database_xy_both.csv` and `database_xz_both.csv` are absent in the current clone.
- ATTD CSVs reference 20 structure paths that are not present in the current clone's `structures/various_anisotropy` directory.

## Related

- [[Paper - Direction-aware topological descriptors]]
- [[Database browser]]
