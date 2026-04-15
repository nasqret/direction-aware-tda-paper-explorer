# Release Checklist

Use this checklist before publishing or sending a standalone paper explorer export.

## Local Acceptance Gate

Run:

```sh
./paper-explorer/scripts/prepare-site-export.sh
```

This command:

- checks JavaScript syntax;
- validates committed JSON data;
- builds the JupyterBook with warnings as errors;
- syncs the built JupyterBook HTML and Obsidian vault into `paper-explorer/site/`;
- checks that local `href` and `src` targets stay inside the static export root.

## Package

Run:

```sh
./paper-explorer/scripts/package-site-export.sh
```

The archive is written under `.exports/` and contains `site/` as the static hosting root.

## Manual Browser Smoke Test

Serve the export root:

```sh
python3 -m http.server 8026 -d paper-explorer/site
```

Check these URLs:

- `http://127.0.0.1:8026/index.html`
- `http://127.0.0.1:8026/applets.html`
- `http://127.0.0.1:8026/database.html`
- `http://127.0.0.1:8026/repos.html`
- `http://127.0.0.1:8026/library.html`
- `http://127.0.0.1:8026/knowledge-base/index.html`
- `http://127.0.0.1:8026/obsidian-vault/Paper%20-%20Direction-aware%20topological%20descriptors.md`

## Known Release Limits

- The external structure arrays are still Git LFS pointers in the ignored local clone.
- Voxel-backed applets require an explicit `git lfs pull` in `paper-explorer/repos/direction-aware-tda-for-porous-materials`.
- The current applets are explanatory browser simulations, not full reproductions of the descriptor pipeline.
- No public deployment target is configured yet.
