# External Repository Inventory

Generated: 2026-04-15T00:09:37.752Z

## Repository

- URL: https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials
- Local path: `paper-explorer/repos/direction-aware-tda-for-porous-materials`
- HEAD: `f62d7226920f610fc6b7ac69f05bd6c258d1271b`
- Branch: `main`
- Shallow clone: yes
- Working tree: clean

## Inventory

- Total non-git files: 8682
- CSV database files: 8
- Script/workflow files: 42
- Structure `.npy` files: 8626
- Materialized structures: 0
- Git LFS pointer structures: 8626

## Database CSVs

| Path | Rows | Structures | Axes | Target mean | Columns | ECP | PH cone | Missing refs | SHA-256 |
| --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
| `database/directional/rtp/database_both.csv` | 1500 | 500 | x, y, z | 1.9500 | 646 | 343 | 300 | 0 | `373bab14b4b4...` |
| `database/directional/rtp/database_xy_both.csv` | 1000 | 500 | x, y | 1.1474 | 646 | 343 | 300 | 0 | `4033ab109d0a...` |
| `database/directional/rtp/database_xz_both.csv` | 1000 | 500 | x, z | 2.3507 | 646 | 343 | 300 | 0 | `30ce06935231...` |
| `database/directional/various_anisotropy/database_both.csv` | 4770 | 2395 | x, z | 0.9364 | 646 | 343 | 300 | 20 | `cdbdc9195bd2...` |
| `database/directional/various_isotropy/database_both.csv` | 2375 | 2375 | z | 0.7447 | 646 | 343 | 300 | 0 | `d11c8badad70...` |
| `database/undirectional/rtp/database_both.csv` | 1500 | 500 | x, y, z | 1.9500 | 333 | 30 | 300 | 0 | `44d105b4d8f7...` |
| `database/undirectional/various_anisotropy/database_both.csv` | 4770 | 2395 | x, z | 0.9364 | 333 | 30 | 300 | 20 | `83dd326a04b3...` |
| `database/undirectional/various_isotropy/database_both.csv` | 2375 | 2375 | z | 0.7447 | 333 | 30 | 300 | 0 | `87eaabf533ab...` |

## Expected Path Check

Missing expected paths: `database/undirectional/rtp/database_xy_both.csv`, `database/undirectional/rtp/database_xz_both.csv`.

## Structure Groups

| Dataset directory | Files | LFS pointers | Materialized |
| --- | ---: | ---: | ---: |
| `rtp` | 1500 | 1500 | 0 |
| `various_anisotropy` | 4750 | 4750 | 0 |
| `various_isotropy` | 2376 | 2376 | 0 |

## Notes

- The structures directory is tracked with Git LFS in the external repository.
- The current clone contains LFS pointer files for structures, not materialized 80x80x80 arrays.
- Run `git lfs pull` inside the external repository if full voxel previews are required.
- The repository uses `undirectional` in paths while the manuscript and README use `non-directional`/`nondirectional` wording.
