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

## Remote Publication

GitHub Actions publishes the static explorer through `.github/workflows/deploy-pages.yml`.

Live site:

```text
https://nasqret.github.io/direction-aware-tda-paper-explorer/
```

Remote repository:

```text
https://github.com/nasqret/direction-aware-tda-paper-explorer
```

The workflow:

- builds the JupyterBook;
- syncs `paper-explorer/site/knowledge-base/` and `paper-explorer/site/obsidian-vault/`;
- checks export-local links;
- uploads `paper-explorer/site/` as the GitHub Pages artifact.

The Pages source must be configured as GitHub Actions for the remote repository.

The export includes `.nojekyll`, `robots.txt`, and `sitemap.xml` so GitHub Pages serves copied JupyterBook `_static` assets and exposes the main public routes to crawlers.

The validation workflow intentionally does not require byte-identical generated Sphinx files after a CI rebuild. Sphinx static asset cache keys can vary across environments; the release invariant is that the export rebuilds cleanly and passes the local-link check.

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
- `http://127.0.0.1:8026/sitemap.xml`
- `http://127.0.0.1:8026/robots.txt`
- `http://127.0.0.1:8026/knowledge-base/index.html`
- `http://127.0.0.1:8026/obsidian-vault/Paper%20-%20Direction-aware%20topological%20descriptors.md`

## Known Release Limits

- The external structure arrays are still Git LFS pointers in the ignored local clone.
- Voxel-backed applets require an explicit `git lfs pull` in `paper-explorer/repos/direction-aware-tda-for-porous-materials`.
- The current applets are explanatory browser simulations, not full reproductions of the descriptor pipeline.
