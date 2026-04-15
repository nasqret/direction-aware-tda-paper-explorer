#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const workspaceRoot = path.resolve(import.meta.dirname, "../..");
const repoRelative = "paper-explorer/repos/direction-aware-tda-for-porous-materials";
const repoRoot = path.join(workspaceRoot, repoRelative);
const siteDataDir = path.join(workspaceRoot, "paper-explorer/site/data");
const generatedDir = path.join(workspaceRoot, "paper-explorer/site/generated");
const docsDir = path.join(workspaceRoot, "docs");

const expectedDatabases = [
  "database/directional/rtp/database_both.csv",
  "database/directional/rtp/database_xy_both.csv",
  "database/directional/rtp/database_xz_both.csv",
  "database/directional/various_isotropy/database_both.csv",
  "database/directional/various_anisotropy/database_both.csv",
  "database/undirectional/rtp/database_both.csv",
  "database/undirectional/rtp/database_xy_both.csv",
  "database/undirectional/rtp/database_xz_both.csv",
  "database/undirectional/various_isotropy/database_both.csv",
  "database/undirectional/various_anisotropy/database_both.csv"
];

function git(args) {
  return execFileSync("git", ["-C", repoRoot, ...args], { encoding: "utf8" }).trim();
}

async function walk(dir, prefix = "") {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === ".git") continue;
    const relative = path.join(prefix, entry.name);
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await walk(absolute, relative));
    } else if (entry.isFile()) {
      out.push(relative.split(path.sep).join("/"));
    }
  }
  return out;
}

async function fileHash(filePath) {
  const data = await readFile(filePath);
  return createHash("sha256").update(data).digest("hex");
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    const next = line[i + 1];
    if (ch === "\"" && quoted && next === "\"") {
      current += "\"";
      i += 1;
    } else if (ch === "\"") {
      quoted = !quoted;
    } else if (ch === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  values.push(current);
  return values;
}

function emptyStats() {
  return {
    count: 0,
    min: null,
    max: null,
    mean: null
  };
}

function pushStat(stats, value) {
  if (!Number.isFinite(value)) return;
  stats.count += 1;
  stats.min = stats.min === null ? value : Math.min(stats.min, value);
  stats.max = stats.max === null ? value : Math.max(stats.max, value);
  stats.mean = stats.mean === null ? value : stats.mean + value;
}

function finishStat(stats) {
  if (!stats.count) return stats;
  return {
    count: stats.count,
    min: stats.min,
    max: stats.max,
    mean: stats.mean / stats.count
  };
}

function normalizedStructureId(npyPath) {
  return npyPath
    .replace(/_axis-[xyz]\.npy$/, ".npy")
    .replace(/_stretch_axis-[xyz]\.npy$/, ".npy");
}

async function csvSummary(relativePath) {
  const absolute = path.join(repoRoot, relativePath);
  if (!existsSync(absolute)) {
    return { path: relativePath, exists: false };
  }
  const text = await readFile(absolute, "utf8");
  const lines = text.trimEnd().split(/\r?\n/);
  const headers = parseCsvLine(lines[0] ?? "");
  const firstRow = parseCsvLine(lines[1] ?? "");
  const npyIndex = headers.indexOf("npy_path");
  const axisIndex = headers.indexOf("stress_axis");
  const targetIndex = headers.indexOf("cii");
  const groups = headers.reduce((acc, column) => {
    if (column.startsWith("ecp_")) acc.ecp += 1;
    else if (column.startsWith("ph_cone_")) acc.phCone += 1;
    else acc.metadata += 1;
    return acc;
  }, { metadata: 0, ecp: 0, phCone: 0 });
  const targetStats = emptyStats();
  const axisStats = new Map();
  const npyPaths = new Set();
  const normalizedStructures = new Set();
  let referencedFilesExist = 0;
  let referencedFilesMissing = 0;
  const missingExamples = [];
  const sampleRows = [];
  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;
    const row = parseCsvLine(line);
    const npyPath = row[npyIndex] ?? "";
    const axis = row[axisIndex] || "unknown";
    const cii = Number(row[targetIndex]);
    pushStat(targetStats, cii);
    if (!axisStats.has(axis)) axisStats.set(axis, emptyStats());
    pushStat(axisStats.get(axis), cii);
    if (npyPath) {
      npyPaths.add(npyPath);
      normalizedStructures.add(normalizedStructureId(npyPath));
      if (existsSync(path.join(repoRoot, npyPath))) {
        referencedFilesExist += 1;
      } else {
        referencedFilesMissing += 1;
        if (missingExamples.length < 5) missingExamples.push(npyPath);
      }
    }
    if (sampleRows.length < 3) {
      sampleRows.push({ npy_path: npyPath, stress_axis: axis, cii: Number.isFinite(cii) ? cii : null });
    }
  }

  const descriptorKind = relativePath.includes("/directional/")
    ? "directional"
    : relativePath.includes("/undirectional/")
      ? "undirectional"
      : "unknown";
  const datasetKey = relativePath
    .replace(/^database\/(directional|undirectional)\//, "")
    .replace(/\/database.*$/, "")
    .replace("various_isotropy", "TD")
    .replace("various_anisotropy", "ATTD")
    .replace("rtp", "RTP");

  return {
    path: relativePath,
    descriptorKind,
    datasetKey,
    exists: true,
    bytes: (await stat(absolute)).size,
    sha256: await fileHash(absolute),
    rows: Math.max(0, lines.length - 1),
    columns: headers.length,
    featureGroups: groups,
    metadataColumns: headers.filter((column) => !column.startsWith("ecp_") && !column.startsWith("ph_cone_")),
    firstRowPreview: {
      npy_path: firstRow[npyIndex] ?? null,
      stress_axis: firstRow[axisIndex] ?? null,
      cii: firstRow[targetIndex] ?? null
    },
    sampleRows,
    uniqueNpyPaths: npyPaths.size,
    normalizedStructureCount: normalizedStructures.size,
    referencedFilesExist,
    referencedFilesMissing,
    missingExamples,
    targetStats: finishStat(targetStats),
    axisStats: [...axisStats.entries()]
      .map(([axis, stats]) => ({ axis, ...finishStat(stats) }))
      .sort((a, b) => a.axis.localeCompare(b.axis))
  };
}

async function structureSummary(files) {
  const npyFiles = files.filter((file) => file.startsWith("structures/") && file.endsWith(".npy"));
  const byDataset = new Map();
  let lfsPointers = 0;
  let materialized = 0;
  for (const file of npyFiles) {
    const [, dataset] = file.split("/");
    const absolute = path.join(repoRoot, file);
    const info = await stat(absolute);
    const current = byDataset.get(dataset) ?? { dataset, files: 0, lfsPointers: 0, materialized: 0, exampleFiles: [] };
    current.files += 1;
    if (current.exampleFiles.length < 6) current.exampleFiles.push(file);
    const sample = await readFile(absolute, "utf8").catch(() => "");
    const isPointer = sample.startsWith("version https://git-lfs.github.com/spec/v1");
    if (isPointer) {
      current.lfsPointers += 1;
      lfsPointers += 1;
    } else {
      current.materialized += 1;
      materialized += 1;
    }
    byDataset.set(dataset, current);
  }
  return {
    totalNpyFiles: npyFiles.length,
    lfsPointers,
    materialized,
    byDataset: [...byDataset.values()].sort((a, b) => a.dataset.localeCompare(b.dataset))
  };
}

function scriptClass(file) {
  if (file.endsWith(".sh")) return "shell workflow";
  if (file.includes("train_catboost")) return "CatBoost training";
  if (file.includes("train_nn") || file.includes("TRIDCNNPyTorch")) return "neural network training";
  if (file.includes("ph")) return "persistent homology";
  if (file.includes("ecp") || file.includes("euler")) return "Euler characteristic";
  if (file.includes("filtration") || file.includes("distance")) return "filtration";
  if (file.includes("npy_to_vtk")) return "visualization conversion";
  return "support";
}

async function main() {
  if (!existsSync(repoRoot)) {
    throw new Error(`External repository not found at ${repoRoot}`);
  }

  const files = await walk(repoRoot);
  const topLevel = [...new Set(files.map((file) => file.split("/")[0]))].sort();
  const extensionCounts = files.reduce((acc, file) => {
    const ext = path.extname(file).slice(1) || "[none]";
    acc[ext] = (acc[ext] ?? 0) + 1;
    return acc;
  }, {});

  const databaseFiles = files.filter((file) => file.startsWith("database/") && file.endsWith(".csv")).sort();
  const databaseSummaries = await Promise.all(databaseFiles.map(csvSummary));
  const expectedDatabaseStatus = await Promise.all(expectedDatabases.map(async (dbPath) => ({
    path: dbPath,
    exists: existsSync(path.join(repoRoot, dbPath))
  })));
  const structures = await structureSummary(files);
  const scripts = files
    .filter((file) => file.startsWith("scripts/") || file.endsWith(".sh"))
    .filter((file) => /\.(py|jl|sh)$/.test(file))
    .map((file) => ({ path: file, class: scriptClass(file) }))
    .sort((a, b) => a.path.localeCompare(b.path));

  const manifest = {
    generatedAt: new Date().toISOString(),
    repository: {
      name: "direction-aware-tda-for-porous-materials",
      owner: "dioscuri-tda",
      url: "https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials",
      localPath: repoRelative,
      head: git(["rev-parse", "HEAD"]),
      branch: git(["branch", "--show-current"]),
      shallow: existsSync(path.join(repoRoot, ".git/shallow")),
      workingTreeStatus: git(["status", "--short"]) || "clean"
    },
    inventory: {
      totalFiles: files.length,
      topLevel,
      extensionCounts,
      databaseCsvFiles: databaseFiles.length,
      scriptFiles: scripts.length
    },
    databases: databaseSummaries,
    expectedDatabaseStatus,
    structures,
    scripts,
    notes: [
      "The structures directory is tracked with Git LFS in the external repository.",
      "The current clone contains LFS pointer files for structures, not materialized 80x80x80 arrays.",
      "Run `git lfs pull` inside the external repository if full voxel previews are required.",
      "The repository uses `undirectional` in paths while the manuscript and README use `non-directional`/`nondirectional` wording."
    ]
  };

  await mkdir(siteDataDir, { recursive: true });
  await mkdir(generatedDir, { recursive: true });
  await mkdir(docsDir, { recursive: true });
  await writeFile(
    path.join(siteDataDir, "external-repo-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
  await writeFile(
    path.join(generatedDir, "external-repo-manifest.js"),
    `window.ExternalRepoManifest = ${JSON.stringify(manifest, null, 2)};\n`
  );

  const missing = manifest.expectedDatabaseStatus.filter((item) => !item.exists);
  const markdown = [
    "# External Repository Inventory",
    "",
    `Generated: ${manifest.generatedAt}`,
    "",
    "## Repository",
    "",
    `- URL: ${manifest.repository.url}`,
    `- Local path: \`${manifest.repository.localPath}\``,
    `- HEAD: \`${manifest.repository.head}\``,
    `- Branch: \`${manifest.repository.branch}\``,
    `- Shallow clone: ${manifest.repository.shallow ? "yes" : "no"}`,
    `- Working tree: ${manifest.repository.workingTreeStatus}`,
    "",
    "## Inventory",
    "",
    `- Total non-git files: ${manifest.inventory.totalFiles}`,
    `- CSV database files: ${manifest.inventory.databaseCsvFiles}`,
    `- Script/workflow files: ${manifest.inventory.scriptFiles}`,
    `- Structure \`.npy\` files: ${manifest.structures.totalNpyFiles}`,
    `- Materialized structures: ${manifest.structures.materialized}`,
    `- Git LFS pointer structures: ${manifest.structures.lfsPointers}`,
    "",
    "## Database CSVs",
    "",
    "| Path | Rows | Structures | Axes | Target mean | Columns | ECP | PH cone | Missing refs | SHA-256 |",
    "| --- | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |",
    ...manifest.databases.map((db) => `| \`${db.path}\` | ${db.rows} | ${db.normalizedStructureCount} | ${db.axisStats.map((axis) => axis.axis).join(", ")} | ${db.targetStats.mean.toFixed(4)} | ${db.columns} | ${db.featureGroups.ecp} | ${db.featureGroups.phCone} | ${db.referencedFilesMissing} | \`${db.sha256.slice(0, 12)}...\` |`),
    "",
    "## Expected Path Check",
    "",
    missing.length
      ? `Missing expected paths: ${missing.map((item) => `\`${item.path}\``).join(", ")}.`
      : "All expected database paths exist.",
    "",
    "## Structure Groups",
    "",
    "| Dataset directory | Files | LFS pointers | Materialized |",
    "| --- | ---: | ---: | ---: |",
    ...manifest.structures.byDataset.map((group) => `| \`${group.dataset}\` | ${group.files} | ${group.lfsPointers} | ${group.materialized} |`),
    "",
    "## Notes",
    "",
    ...manifest.notes.map((note) => `- ${note}`),
    ""
  ].join("\n");
  await writeFile(path.join(docsDir, "external-repo-inventory.md"), markdown);

  console.log(JSON.stringify({
    head: manifest.repository.head,
    databaseCsvFiles: manifest.inventory.databaseCsvFiles,
    structures: manifest.structures.totalNpyFiles,
    lfsPointers: manifest.structures.lfsPointers,
    missingExpectedDatabases: missing.map((item) => item.path)
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
