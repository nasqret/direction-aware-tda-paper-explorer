const Paper = {
  id: "arXiv-2604.08105v1",
  title: "Direction-aware topological descriptors for Young's modulus prediction in porous materials",
  arxivUrl: "https://arxiv.org/abs/2604.08105",
  codeDataUrl: "https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials",
  authors: [
    { name: "Rafał Topolnicki", role: "Corresponding author", website: "https://dioscuri-tda.org/", affiliations: [1, 2] },
    { name: "Michał Bogdan", website: "https://dioscuri-tda.org/", affiliations: [1] },
    { name: "Jakub Malinowski", website: "https://pwr.edu.pl/en/", affiliations: [3] },
    { name: "Bartosz Naskręcki", website: "https://bnaskrecki.faculty.wmi.amu.edu.pl/", affiliations: [1, 4] },
    { name: "Maciej Harańczyk", website: "https://materiales.imdea.org/people/maciej-haranczyk/", affiliations: [5] },
    { name: "Paweł Dłotko", website: "https://dioscuri-tda.org/", affiliations: [1] }
  ],
  affiliations: [
    { id: 1, name: "Dioscuri Center in Topological Data Analysis, Institute of Mathematics, Polish Academy of Sciences", address: "ul. Śniadeckich 8, 00-656 Warsaw, Poland", website: "https://dioscuri-tda.org/" },
    { id: 2, name: "Institute of Experimental Physics, University of Wrocław", address: "pl. Maxa Borna 9, Wrocław 50-204, Poland", website: "https://uwr.edu.pl/" },
    { id: 3, name: "Faculty of Pure and Applied Mathematics, Wrocław University of Science and Technology", address: "ul. Wybrzeże Wyspiańskiego 27, 50-370 Wrocław, Poland", website: "https://pwr.edu.pl/en/" },
    { id: 4, name: "Faculty of Mathematics and Computer Science, Adam Mickiewicz University", address: "ul. Uniwersytetu Poznańskiego 4, 61-614 Poznań, Poland", website: "https://wmi.amu.edu.pl/" },
    { id: 5, name: "IMDEA Materials Institute", address: "C. Eric Kandel 2, Getafe, 28906 Madrid, Spain", website: "https://materiales.imdea.org/" }
  ]
};

const Datasets = [
  { name: "RTP", fullName: "Random Trigonometric Phase", structures: 500, grid: "80 x 80 x 80", regime: "controlled anisotropy", description: "Periodic thresholded trigonometric random fields with Fourier-space anisotropy scaling." },
  { name: "RTPxy", structures: 500, samples: 1000, sigmaK: 0.11, sigmaL: 0.21, regime: "weak anisotropy", description: "RTP structures evaluated along x and y directions." },
  { name: "RTPxz", structures: 500, samples: 1000, sigmaK: 0.40, sigmaL: 1.89, regime: "strong anisotropy", description: "RTP structures evaluated along mechanically easy x and hard z directions." },
  { name: "RTPxyz", structures: 500, samples: 1500, sigmaK: 0.38, sigmaL: 1.77, regime: "mixed axes", description: "Supplementary aggregate over x, y, and z directions." },
  { name: "TD", fullName: "Topologically Diverse", structures: 2375, sigmaK: 0.14, sigmaL: 1.80, regime: "statistically isotropic", description: "Voronoi, zeolitic, diamond-like, cubic-strut, and spline-based porous structures." },
  { name: "ATTD", fullName: "Anisotropic Transformed Topologically Diverse", sigmaK: 0.20, sigmaL: 1.74, regime: "moderate anisotropy", description: "TD structures elongated along z to introduce a preferred direction." }
];

const Results = [
  ["RTPxz", 0.40, 1.89, 0.985, 1.62, "PH", 0.463, 9.42, 0.954, 2.65],
  ["RTPxz", 0.40, 1.89, 0.985, 1.62, "ECP", 0.616, 12.06, 0.978, 1.85],
  ["RTPxz", 0.40, 1.89, 0.985, 1.62, "PH+ECP", 0.754, 7.05, 0.978, 1.86],
  ["RTPxy", 0.11, 0.21, 0.979, 1.02, "PH", 0.878, 2.42, 0.873, 2.45],
  ["RTPxy", 0.11, 0.21, 0.979, 1.02, "ECP", 0.925, 1.86, 0.940, 1.66],
  ["RTPxy", 0.11, 0.21, 0.979, 1.02, "PH+ECP", 0.916, 1.98, 0.938, 1.69],
  ["TD", 0.14, 1.80, 0.976, 0.62, "PH", 0.596, 2.44, 0.665, 2.18],
  ["TD", 0.14, 1.80, 0.976, 0.62, "ECP", 0.815, 1.48, 0.818, 1.66],
  ["TD", 0.14, 1.80, 0.976, 0.62, "PH+ECP", 0.822, 1.46, 0.836, 1.53],
  ["ATTD", 0.20, 1.74, 0.894, 0.34, "PH", 0.536, 3.78, 0.759, 2.53],
  ["ATTD", 0.20, 1.74, 0.894, 0.34, "ECP", 0.653, 3.36, 0.815, 2.13],
  ["ATTD", 0.20, 1.74, 0.894, 0.34, "PH+ECP", 0.643, 3.33, 0.825, 2.06],
  ["RTPxyz", 0.38, 1.77, 0.990, 1.88, "PH", 0.509, 13.26, 0.548, 13.61],
  ["RTPxyz", 0.38, 1.77, 0.990, 1.88, "ECP", 0.493, 15.11, 0.974, 3.09],
  ["RTPxyz", 0.38, 1.77, 0.990, 1.88, "PH+ECP", 0.511, 9.94, 0.974, 2.89]
].map(([dataset, sigmaK, sigmaL, cnnR2, cnnMae, method, nonDirectionalR2, nonDirectionalMae, directionalR2, directionalMae]) => ({
  dataset,
  sigmaK,
  sigmaL,
  cnnR2,
  cnnMae,
  method,
  nonDirectionalR2,
  nonDirectionalMae,
  directionalR2,
  directionalMae
}));

const Repos = [
  {
    name: "direction-aware-tda-for-porous-materials",
    owner: "dioscuri-tda",
    url: "https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials",
    role: "Primary code and data repository stated in the manuscript",
    expectedContents: ["descriptor computation", "CatBoost and CNN training", "voxel databases", "Young's modulus values", "PH/ECP descriptors"]
  },
  {
    name: "dioscuri-tda organization",
    owner: "dioscuri-tda",
    url: "https://github.com/dioscuri-tda/",
    role: "Related TDA software organization",
    expectedContents: ["Euler characteristic tools", "Ball Mapper tools", "applied topology utilities"]
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const fmt = (value, digits = 3) => Number.isFinite(value) ? value.toFixed(digits) : "n/a";
const unique = (items) => Array.from(new Set(items));
const gainFor = (row) => row.directionalR2 - row.nonDirectionalR2;
const cnnGapFor = (row) => Math.abs(row.cnnR2 - row.directionalR2);
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
})[char]);

function optionList(select, values, allLabel) {
  if (!select) return;
  select.innerHTML = "";
  if (allLabel) {
    select.append(new Option(allLabel, "all"));
  }
  values.forEach((value) => select.append(new Option(value, value)));
}

function affiliationNames(ids) {
  return ids.map((id) => Paper.affiliations.find((aff) => aff.id === id)?.name).filter(Boolean);
}

function renderHome() {
  const authorList = $("#author-list");
  if (authorList) {
    authorList.innerHTML = Paper.authors.map((author) => `
      <a class="person-link" href="${author.website}" target="_blank" rel="noreferrer">
        <strong>${author.name}</strong>
        <span>${author.role || affiliationNames(author.affiliations)[0]}</span>
      </a>
    `).join("");
  }

  const institutionList = $("#institution-list");
  if (institutionList) {
    institutionList.innerHTML = Paper.affiliations.map((aff) => `
      <a href="${aff.website}" target="_blank" rel="noreferrer">
        <span>${aff.id}</span>
        <span><strong>${aff.name}</strong><small>${aff.address}</small></span>
        <span>Website</span>
      </a>
    `).join("");
  }
}

function readoutRow(label, value, max, kind = "") {
  const width = Math.max(0, Math.min(100, (value / max) * 100));
  return `
    <div class="readout-row">
      <span>${label}</span>
      <span class="bar-track"><span class="bar-fill ${kind}" style="width:${width}%"></span></span>
      <strong>${fmt(value, 3)}</strong>
    </div>
  `;
}

function setupMetricApplet() {
  const datasetSelect = $("#metric-dataset");
  const methodSelect = $("#metric-method");
  if (!datasetSelect || !methodSelect) return;

  optionList(datasetSelect, unique(Results.map((row) => row.dataset)));
  optionList(methodSelect, unique(Results.map((row) => row.method)));
  datasetSelect.value = "RTPxz";
  methodSelect.value = "PH+ECP";

  const render = () => {
    const row = Results.find((item) => item.dataset === datasetSelect.value && item.method === methodSelect.value);
    if (!row) return;
    const gain = row.directionalR2 - row.nonDirectionalR2;
    const maeDrop = row.nonDirectionalMae - row.directionalMae;
    $("#metric-readout").innerHTML = [
      readoutRow("Non-dir R2", row.nonDirectionalR2, 1, "alt"),
      readoutRow("Dir R2", row.directionalR2, 1),
      readoutRow("CNN R2", row.cnnR2, 1, ""),
      `<div class="readout-row"><span>R2 gain</span><span class="bar-track"><span class="bar-fill ${gain >= 0 ? "" : "warn"}" style="width:${Math.min(100, Math.abs(gain) * 220)}%"></span></span><strong>${gain >= 0 ? "+" : ""}${fmt(gain, 3)}</strong></div>`,
      `<div class="readout-row"><span>MAE drop</span><span class="bar-track"><span class="bar-fill ${maeDrop >= 0 ? "" : "warn"}" style="width:${Math.min(100, Math.abs(maeDrop) * 12)}%"></span></span><strong>${maeDrop >= 0 ? "-" : "+"}${fmt(Math.abs(maeDrop), 2)}</strong></div>`
    ].join("");
    drawGainCanvas(row);
  };

  datasetSelect.addEventListener("change", render);
  methodSelect.addEventListener("change", render);
  render();
}

function drawGainCanvas(selected) {
  const canvas = $("#gain-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#d9d4c9";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const y = 42 + i * 64;
    ctx.beginPath();
    ctx.moveTo(60, y);
    ctx.lineTo(w - 30, y);
    ctx.stroke();
  }
  ctx.fillStyle = "#5f625f";
  ctx.font = "16px system-ui";
  ctx.fillText("Directional R2 gain vs sigma(k), PH+ECP", 60, 28);
  ctx.fillText("sigma(k)", w - 98, h - 18);
  ctx.save();
  ctx.translate(20, 190);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("R2 gain", 0, 0);
  ctx.restore();

  const rows = Results.filter((row) => row.method === "PH+ECP");
  rows.forEach((row) => {
    const x = 70 + (row.sigmaK / 0.42) * (w - 120);
    const gain = row.directionalR2 - row.nonDirectionalR2;
    const y = h - 58 - (gain / 0.5) * (h - 110);
    const isSelected = row.dataset === selected.dataset && row.method === selected.method;
    ctx.fillStyle = isSelected ? "#9f3f34" : "#2f6f5e";
    ctx.beginPath();
    ctx.arc(x, y, isSelected ? 10 : 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#141414";
    ctx.font = isSelected ? "700 15px system-ui" : "13px system-ui";
    ctx.fillText(row.dataset, x + 12, y + 4);
  });
}

function coneCells(cx, cy, axis, radius, height, size) {
  const cells = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      const axial = axis === "vertical" ? Math.abs(dy) : Math.abs(dx);
      const radial = axis === "vertical" ? Math.abs(dx) : Math.abs(dy);
      if ((axial === 0 && radial === 0) || (axial > 0 && axial <= height && radial <= (axial * radius) / height)) {
        cells.push(`${x},${y}`);
      }
    }
  }
  return new Set(cells);
}

function materialAt(x, y) {
  const a = (x * 17 + y * 31) % 11;
  const band = Math.abs(x - y) <= 1 || Math.abs(x + y - 14) <= 1;
  const pore = (x - 8) ** 2 + (y - 5) ** 2 < 10 || (x - 4) ** 2 + (y - 10) ** 2 < 7;
  return (band || a < 4) && !pore;
}

function setupConeApplet() {
  const canvas = $("#cone-canvas");
  const radius = $("#cone-radius");
  const height = $("#cone-height");
  const axis = $("#cone-axis");
  if (!canvas || !radius || !height || !axis) return;
  const ctx = canvas.getContext("2d");
  const size = 15;
  let selected = { x: 7, y: 7 };

  const draw = () => {
    const r = Number(radius.value);
    const ht = Number(height.value);
    const cone = coneCells(selected.x, selected.y, axis.value, r, ht, size);
    const cell = canvas.width / size;
    let materialCount = 0;
    cone.forEach((key) => {
      const [x, y] = key.split(",").map(Number);
      if (materialAt(x, y)) materialCount += 1;
    });
    const porosity = cone.size ? 1 - materialCount / cone.size : 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fffdf8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const key = `${x},${y}`;
        const inCone = cone.has(key);
        ctx.fillStyle = materialAt(x, y) ? "#141414" : "#e8e1d2";
        if (inCone) ctx.fillStyle = materialAt(x, y) ? "#2f6f5e" : "#d8b15e";
        if (x === selected.x && y === selected.y) ctx.fillStyle = "#9f3f34";
        ctx.fillRect(x * cell + 2, y * cell + 2, cell - 4, cell - 4);
      }
    }
    $("#cone-readout").innerHTML = [
      `<div class="readout-row"><span>Cells</span><span class="bar-track"><span class="bar-fill alt" style="width:${Math.min(100, cone.size * 2.2)}%"></span></span><strong>${cone.size}</strong></div>`,
      `<div class="readout-row"><span>Material</span><span class="bar-track"><span class="bar-fill" style="width:${Math.min(100, materialCount * 3)}%"></span></span><strong>${materialCount}</strong></div>`,
      `<div class="readout-row"><span>F cone</span><span class="bar-track"><span class="bar-fill warn" style="width:${porosity * 100}%"></span></span><strong>${fmt(porosity, 3)}</strong></div>`
    ].join("");
  };

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    selected = {
      x: Math.max(0, Math.min(size - 1, Math.floor(((event.clientX - rect.left) / rect.width) * size))),
      y: Math.max(0, Math.min(size - 1, Math.floor(((event.clientY - rect.top) / rect.height) * size)))
    };
    draw();
  });
  [radius, height, axis].forEach((input) => input.addEventListener("input", draw));
  draw();
}

function setupRtpApplet() {
  const canvas = $("#rtp-canvas");
  const modes = $("#rtp-modes");
  const threshold = $("#rtp-threshold");
  const anisotropy = $("#rtp-anisotropy");
  if (!canvas || !modes || !threshold || !anisotropy) return;
  const ctx = canvas.getContext("2d");
  const dim = 180;

  const vectors = Array.from({ length: 30 }, (_, i) => {
    const qx = ((i * 5 + 3) % 13) - 6 || 1;
    const qz = ((i * 7 + 5) % 13) - 6 || -1;
    const phase = ((i * 97) % 360) * Math.PI / 180;
    return { qx, qz, phase };
  });

  const draw = () => {
    const k = Number(modes.value);
    const tau = Number(threshold.value) / 100;
    const zScale = Number(anisotropy.value) / 100;
    const image = ctx.createImageData(dim, dim);
    let solid = 0;
    for (let y = 0; y < dim; y += 1) {
      for (let x = 0; x < dim; x += 1) {
        const nx = x / dim;
        const nz = y / dim;
        let field = 0;
        for (let i = 0; i < k; i += 1) {
          const v = vectors[i];
          field += Math.cos(2 * Math.PI * (v.qx * nx + v.qz * zScale * nz) + v.phase);
        }
        field *= Math.sqrt(2 / k);
        const isSolid = field > tau;
        if (isSolid) solid += 1;
        const offset = (y * dim + x) * 4;
        const color = isSolid ? [33, 65, 61] : [235, 226, 210];
        image.data[offset] = color[0];
        image.data[offset + 1] = color[1];
        image.data[offset + 2] = color[2];
        image.data[offset + 3] = 255;
      }
    }
    ctx.imageSmoothingEnabled = false;
    const scratch = document.createElement("canvas");
    scratch.width = dim;
    scratch.height = dim;
    scratch.getContext("2d").putImageData(image, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(scratch, 0, 0, canvas.width, canvas.height);
    const fraction = solid / (dim * dim);
    $("#rtp-readout").innerHTML = [
      `<div class="readout-row"><span>Modes</span><span class="bar-track"><span class="bar-fill alt" style="width:${(k / 30) * 100}%"></span></span><strong>${k}</strong></div>`,
      `<div class="readout-row"><span>Solid</span><span class="bar-track"><span class="bar-fill" style="width:${fraction * 100}%"></span></span><strong>${fmt(fraction, 3)}</strong></div>`,
      `<div class="readout-row"><span>z scale</span><span class="bar-track"><span class="bar-fill warn" style="width:${zScale * 100}%"></span></span><strong>${fmt(zScale, 2)}</strong></div>`
    ].join("");
  };

  [modes, threshold, anisotropy].forEach((input) => input.addEventListener("input", draw));
  draw();
}

function renderDatasets() {
  const grid = $("#dataset-grid");
  if (!grid) return;
  grid.innerHTML = Datasets.map((dataset) => `
    <article class="dataset-card">
      <div>
        <p class="label">${dataset.regime}</p>
        <h3>${dataset.name}</h3>
        <p>${dataset.description}</p>
      </div>
      <dl>
        <div><dt>Structures</dt><dd>${dataset.structures || "n/a"}</dd></div>
        <div><dt>Samples</dt><dd>${dataset.samples || "n/a"}</dd></div>
        <div><dt>sigma(k)</dt><dd>${dataset.sigmaK ?? "n/a"}</dd></div>
        <div><dt>sigma(L)</dt><dd>${dataset.sigmaL ?? "n/a"}</dd></div>
      </dl>
    </article>
  `).join("");
}

function bytesLabel(bytes) {
  if (!Number.isFinite(bytes)) return "n/a";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }
  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
}

function renderExternalDatabaseInventory() {
  const manifest = window.ExternalRepoManifest;
  const summary = $("#external-repo-summary");
  const files = $("#database-files");
  if (!manifest || !summary || !files) return;

  summary.innerHTML = [
    ["CSV databases", manifest.inventory.databaseCsvFiles],
    ["Structure .npy files", manifest.structures.totalNpyFiles],
    ["LFS pointer files", manifest.structures.lfsPointers],
    ["Script files", manifest.inventory.scriptFiles]
  ].map(([label, value]) => `
    <div class="inventory-stat">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");

  const expectedMissing = manifest.expectedDatabaseStatus.filter((item) => !item.exists);
  const missingNote = expectedMissing.length
    ? `<p><strong>Missing expected paths:</strong> ${expectedMissing.map((item) => `<code>${item.path}</code>`).join(", ")}</p>`
    : "";

  const axisSummary = (db) => db.axisStats.map((axis) => `
    <span class="axis-chip">
      <strong>${axis.axis}</strong>
      <span>n=${axis.count}, mean=${fmt(axis.mean, 3)}</span>
    </span>
  `).join("");

  files.innerHTML = [
    ...manifest.databases.map((db) => `
      <article class="database-file">
        <div>
          <p class="label">${db.path.includes("/directional/") ? "directional" : "undirectional"}</p>
          <code>${db.path}</code>
        </div>
        <dl>
          <div><dt>Rows</dt><dd>${db.rows}</dd></div>
          <div><dt>Structures</dt><dd>${db.normalizedStructureCount}</dd></div>
          <div><dt>Size</dt><dd>${bytesLabel(db.bytes)}</dd></div>
          <div><dt>Target mean</dt><dd>${fmt(db.targetStats.mean, 3)}</dd></div>
          <div><dt>Target range</dt><dd>${fmt(db.targetStats.min, 3)}-${fmt(db.targetStats.max, 3)}</dd></div>
          <div><dt>Missing refs</dt><dd class="${db.referencedFilesMissing ? "gain-negative" : ""}">${db.referencedFilesMissing}</dd></div>
          <div><dt>Columns</dt><dd>${db.columns}</dd></div>
          <div><dt>ECP</dt><dd>${db.featureGroups.ecp}</dd></div>
          <div><dt>PH cone</dt><dd>${db.featureGroups.phCone}</dd></div>
          <div><dt>SHA-256</dt><dd>${db.sha256.slice(0, 12)}...</dd></div>
        </dl>
        <div class="axis-chip-row">${axisSummary(db)}</div>
        ${db.missingExamples.length ? `<details><summary>Missing reference examples</summary><ul>${db.missingExamples.map((item) => `<li><code>${item}</code></li>`).join("")}</ul></details>` : ""}
      </article>
    `),
    missingNote ? `<article class="database-file">${missingNote}</article>` : ""
  ].join("");
}

function renderResultSummary() {
  const summary = $("#result-summary");
  if (!summary) return;
  const rows = Results.map((row) => ({
    ...row,
    gain: gainFor(row),
    cnnGap: cnnGapFor(row)
  }));
  const bestGain = rows.reduce((best, row) => row.gain > best.gain ? row : best, rows[0]);
  const bestDirectional = rows.reduce((best, row) => row.directionalR2 > best.directionalR2 ? row : best, rows[0]);
  const closestCnn = rows.reduce((best, row) => row.cnnGap < best.cnnGap ? row : best, rows[0]);
  const averageGain = rows.reduce((total, row) => total + row.gain, 0) / rows.length;
  summary.innerHTML = [
    [`+${fmt(bestGain.gain, 3)}`, `Largest R2 gain: ${bestGain.dataset} ${bestGain.method}`],
    [fmt(bestDirectional.directionalR2, 3), `Best directional R2: ${bestDirectional.dataset} ${bestDirectional.method}`],
    [fmt(closestCnn.cnnGap, 3), `Smallest gap to CNN: ${closestCnn.dataset} ${closestCnn.method}`],
    [`+${fmt(averageGain, 3)}`, "Mean directional R2 gain across table"]
  ].map(([value, label]) => `
    <div class="inventory-stat">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");
}

function sortRows(rows, sortValue) {
  const sorted = [...rows];
  const compareText = (a, b) => `${a.dataset} ${a.method}`.localeCompare(`${b.dataset} ${b.method}`);
  const sorters = {
    "gain-desc": (a, b) => gainFor(b) - gainFor(a) || compareText(a, b),
    "directional-desc": (a, b) => b.directionalR2 - a.directionalR2 || compareText(a, b),
    "cnn-gap-asc": (a, b) => cnnGapFor(a) - cnnGapFor(b) || compareText(a, b),
    "mae-asc": (a, b) => a.directionalMae - b.directionalMae || compareText(a, b),
    "dataset-asc": compareText
  };
  return sorted.sort(sorters[sortValue] || sorters["gain-desc"]);
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function rowsToCsv(rows) {
  const columns = [
    ["dataset", "Dataset"],
    ["method", "Method"],
    ["sigmaK", "sigma(k)"],
    ["sigmaL", "sigma(L)"],
    ["nonDirectionalR2", "Non-dir R2"],
    ["directionalR2", "Dir R2"],
    ["gain", "R2 gain"],
    ["nonDirectionalMae", "Non-dir MAE"],
    ["directionalMae", "Dir MAE"],
    ["cnnR2", "CNN R2"]
  ];
  return [
    columns.map(([, label]) => csvEscape(label)).join(","),
    ...rows.map((row) => columns.map(([key]) => {
      const value = key === "gain" ? gainFor(row) : row[key];
      return csvEscape(typeof value === "number" ? fmt(value, key.includes("Mae") ? 2 : 3) : value);
    }).join(","))
  ].join("\n");
}

function downloadCsv(rows) {
  const blob = new Blob([rowsToCsv(rows)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "direction-aware-tda-results.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function categoryColor(category) {
  const palette = {
    Authors: "#24547a",
    Concepts: "#286d5b",
    Datasets: "#a97822",
    Institutions: "#596b73",
    Methods: "#a1463c",
    Models: "#6a5a8a",
    Repositories: "#7a6332",
    Results: "#2c6f7a",
    Vault: "#101615"
  };
  return palette[category] || "#58615e";
}

function setupVaultGraph() {
  const graph = window.VaultGraph;
  const canvas = $("#vault-graph-canvas");
  const searchInput = $("#graph-search");
  const categorySelect = $("#graph-category");
  const resetButton = $("#graph-reset");
  const stats = $("#graph-stats");
  const nodeList = $("#graph-node-list");
  const detail = $("#graph-detail");
  if (!graph || !canvas || !searchInput || !categorySelect || !stats || !nodeList || !detail) return;

  const ctx = canvas.getContext("2d");
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const adjacency = new Map(graph.nodes.map((node) => [node.id, new Set()]));
  graph.edges.forEach((edge) => {
    adjacency.get(edge.source)?.add(edge.target);
    adjacency.get(edge.target)?.add(edge.source);
  });
  const graphRoot = nodeById.get("Paper - Direction-aware topological descriptors")
    || graph.nodes.reduce((best, node) => node.degree > best.degree ? node : best, graph.nodes[0]);
  const state = {
    selected: graphRoot,
    positions: new Map()
  };

  optionList(categorySelect, graph.categories, "All categories");

  const matchesFilter = (node) => {
    const term = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const haystack = `${node.title} ${node.category} ${node.excerpt}`.toLowerCase();
    return (category === "all" || node.category === category) && (!term || haystack.includes(term));
  };

  const filteredNodes = () => graph.nodes
    .filter(matchesFilter)
    .sort((a, b) => b.degree - a.degree || a.title.localeCompare(b.title));

  const layout = () => {
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const ringX = width * 0.34;
    const ringY = height * 0.31;
    const byCategory = new Map(graph.categories.map((category) => [
      category,
      graph.nodes.filter((node) => node.category === category).sort((a, b) => a.title.localeCompare(b.title))
    ]));

    state.positions.clear();
    graph.categories.forEach((category, categoryIndex) => {
      const nodes = byCategory.get(category) || [];
      const angle = -Math.PI / 2 + (categoryIndex / graph.categories.length) * Math.PI * 2;
      const clusterX = cx + Math.cos(angle) * ringX;
      const clusterY = cy + Math.sin(angle) * ringY;
      const localRadius = Math.max(34, Math.min(92, 20 + nodes.length * 9));
      nodes.forEach((node, nodeIndex) => {
        if (node.id === graphRoot.id) {
          state.positions.set(node.id, { x: cx, y: cy });
          return;
        }
        const nodeAngle = -Math.PI / 2 + (nodeIndex / Math.max(1, nodes.length)) * Math.PI * 2 + categoryIndex * 0.17;
        const degreePull = Math.min(0.58, node.degree / 24);
        state.positions.set(node.id, {
          x: clusterX * (1 - degreePull) + cx * degreePull + Math.cos(nodeAngle) * localRadius * (1 - degreePull * 0.4),
          y: clusterY * (1 - degreePull) + cy * degreePull + Math.sin(nodeAngle) * localRadius * (1 - degreePull * 0.4)
        });
      });
    });
  };

  const draw = () => {
    layout();
    const width = canvas.width;
    const height = canvas.height;
    const matches = new Set(filteredNodes().map((node) => node.id));
    const selectedNeighbors = adjacency.get(state.selected.id) || new Set();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fffdfa";
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 1.2;
    graph.edges.forEach((edge) => {
      const source = state.positions.get(edge.source);
      const target = state.positions.get(edge.target);
      if (!source || !target) return;
      const selectedEdge = edge.source === state.selected.id || edge.target === state.selected.id;
      const matchedEdge = matches.has(edge.source) && matches.has(edge.target);
      ctx.globalAlpha = selectedEdge ? 0.72 : matchedEdge ? 0.28 : 0.055;
      ctx.strokeStyle = selectedEdge ? "#24547a" : "#8f9b94";
      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();
    });

    graph.nodes.forEach((node) => {
      const position = state.positions.get(node.id);
      if (!position) return;
      const matched = matches.has(node.id);
      const selected = node.id === state.selected.id;
      const connected = selectedNeighbors.has(node.id);
      const radius = selected ? 15 : Math.max(6, Math.min(13, 5 + node.degree * 0.45));
      ctx.globalAlpha = selected ? 1 : matched ? 0.95 : connected ? 0.62 : 0.22;
      ctx.fillStyle = categoryColor(node.category);
      ctx.beginPath();
      ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = selected ? "#101615" : "#fffdfa";
      ctx.lineWidth = selected ? 3 : 1.6;
      ctx.stroke();
    });

    const labeled = graph.nodes
      .filter((node) => node.id === state.selected.id || (matches.has(node.id) && node.degree >= 8))
      .sort((a, b) => b.degree - a.degree)
      .slice(0, 12);

    ctx.font = "700 15px system-ui";
    ctx.textBaseline = "middle";
    labeled.forEach((node) => {
      const position = state.positions.get(node.id);
      if (!position) return;
      const label = node.title.length > 30 ? `${node.title.slice(0, 27)}...` : node.title;
      ctx.fillStyle = "rgba(255, 253, 250, 0.88)";
      const textWidth = ctx.measureText(label).width;
      ctx.fillRect(position.x + 13, position.y - 13, textWidth + 12, 26);
      ctx.fillStyle = "#101615";
      ctx.fillText(label, position.x + 19, position.y + 1);
    });

    ctx.globalAlpha = 1;
  };

  const renderStats = () => {
    const visible = filteredNodes().length;
    stats.innerHTML = [
      [graph.nodeCount, "notes"],
      [graph.edgeCount, "links"],
      [graph.categories.length, "categories"],
      [visible, "visible"]
    ].map(([value, label]) => `
      <div>
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    `).join("");
  };

  const renderDetail = () => {
    const node = state.selected;
    const neighbors = Array.from(adjacency.get(node.id) || [])
      .map((id) => nodeById.get(id))
      .filter(Boolean)
      .sort((a, b) => b.degree - a.degree || a.title.localeCompare(b.title));
    detail.innerHTML = `
      <div>
        <p class="label">${escapeHtml(node.category)} · ${node.degree} link${node.degree === 1 ? "" : "s"}</p>
        <h2>${escapeHtml(node.title)}</h2>
      </div>
      <p>${escapeHtml(node.excerpt || "No excerpt available.")}</p>
      <p><a href="${node.url}">Open source note</a></p>
      <div class="neighbor-list">
        ${neighbors.map((neighbor) => `<button type="button" data-node="${escapeHtml(neighbor.id)}">${escapeHtml(neighbor.title)}</button>`).join("")}
      </div>
    `;
    $$(".neighbor-list button", detail).forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = nodeById.get(button.dataset.node) || state.selected;
        renderAll();
      });
    });
  };

  const renderNodeList = () => {
    const nodes = filteredNodes();
    nodeList.innerHTML = nodes.map((node) => `
      <button class="graph-node-button ${node.id === state.selected.id ? "is-active" : ""}" type="button" data-node="${escapeHtml(node.id)}">
        <strong>${escapeHtml(node.title)}</strong>
        <span>${escapeHtml(node.category)} · ${node.degree} links</span>
      </button>
    `).join("");
    $$(".graph-node-button", nodeList).forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = nodeById.get(button.dataset.node) || state.selected;
        renderAll();
      });
    });
  };

  const renderAll = () => {
    renderStats();
    renderNodeList();
    renderDetail();
    draw();
  };

  const nearestNode = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    let best = null;
    let bestDistance = Infinity;
    graph.nodes.forEach((node) => {
      const position = state.positions.get(node.id);
      if (!position) return;
      const distance = Math.hypot(position.x - x, position.y - y);
      if (distance < bestDistance) {
        best = node;
        bestDistance = distance;
      }
    });
    return bestDistance <= 22 ? best : null;
  };

  canvas.addEventListener("click", (event) => {
    const node = nearestNode(event);
    if (!node) return;
    state.selected = node;
    renderAll();
  });

  canvas.addEventListener("mousemove", (event) => {
    canvas.style.cursor = nearestNode(event) ? "pointer" : "default";
  });

  [searchInput, categorySelect].forEach((input) => input.addEventListener("input", renderAll));
  resetButton?.addEventListener("click", () => {
    searchInput.value = "";
    categorySelect.value = "all";
    state.selected = graphRoot;
    renderAll();
  });

  renderAll();
}

function setupResultsTable() {
  const datasetSelect = $("#table-dataset");
  const methodSelect = $("#table-method");
  const searchInput = $("#table-search");
  const sortSelect = $("#table-sort");
  const status = $("#table-status");
  const exportButton = $("#export-results");
  const tbody = $("#results-table tbody");
  if (!datasetSelect || !methodSelect || !searchInput || !sortSelect || !tbody) return;
  optionList(datasetSelect, unique(Results.map((row) => row.dataset)), "All datasets");
  optionList(methodSelect, unique(Results.map((row) => row.method)), "All descriptors");
  let currentRows = [];

  const render = () => {
    const term = searchInput.value.trim().toLowerCase();
    currentRows = sortRows(Results.filter((row) => {
      const matchesDataset = datasetSelect.value === "all" || row.dataset === datasetSelect.value;
      const matchesMethod = methodSelect.value === "all" || row.method === methodSelect.value;
      const haystack = `${row.dataset} ${row.method}`.toLowerCase();
      return matchesDataset && matchesMethod && (!term || haystack.includes(term));
    }), sortSelect.value);
    if (status) {
      status.textContent = `${currentRows.length} result${currentRows.length === 1 ? "" : "s"}`;
    }
    tbody.innerHTML = currentRows.length ? currentRows.map((row) => {
      const gain = gainFor(row);
      return `
        <tr>
          <td>${row.dataset}</td>
          <td>${row.method}</td>
          <td>${fmt(row.sigmaK, 2)}</td>
          <td>${fmt(row.sigmaL, 2)}</td>
          <td>${fmt(row.nonDirectionalR2, 3)}</td>
          <td>${fmt(row.directionalR2, 3)}</td>
          <td class="${gain >= 0 ? "gain-positive" : "gain-negative"}">${gain >= 0 ? "+" : ""}${fmt(gain, 3)}</td>
          <td>${fmt(row.nonDirectionalMae, 2)}</td>
          <td>${fmt(row.directionalMae, 2)}</td>
          <td>${fmt(row.cnnR2, 3)}</td>
        </tr>
      `;
    }).join("") : `<tr><td colspan="10">No matching rows.</td></tr>`;
  };

  [datasetSelect, methodSelect, searchInput, sortSelect].forEach((input) => input.addEventListener("input", render));
  if (exportButton) {
    exportButton.addEventListener("click", () => downloadCsv(currentRows));
  }
  render();
}

function renderRepos() {
  const list = $("#repo-list");
  if (!list) return;
  list.innerHTML = Repos.map((repo) => `
    <article class="repo-item">
      <div>
        <p class="label">${repo.owner}</p>
        <h2>${repo.name}</h2>
        <p>${repo.role}</p>
        <a href="${repo.url}" target="_blank" rel="noreferrer">${repo.url}</a>
      </div>
      <ul>
        ${repo.expectedContents.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderRepoInventory() {
  const manifest = window.ExternalRepoManifest;
  const target = $("#repo-inventory");
  if (!manifest || !target) return;
  target.innerHTML = `
    <div>
      <dl>
        <div><dt>Local path</dt><dd>${manifest.repository.localPath}</dd></div>
        <div><dt>HEAD</dt><dd>${manifest.repository.head.slice(0, 12)}</dd></div>
        <div><dt>Clone</dt><dd>${manifest.repository.shallow ? "shallow" : "full"}</dd></div>
        <div><dt>Files</dt><dd>${manifest.inventory.totalFiles}</dd></div>
        <div><dt>CSV DBs</dt><dd>${manifest.inventory.databaseCsvFiles}</dd></div>
        <div><dt>Working tree</dt><dd>${manifest.repository.workingTreeStatus}</dd></div>
      </dl>
    </div>
    <div>
      <h3>Structure payload status</h3>
      <dl>
        ${manifest.structures.byDataset.map((group) => `
          <div><dt>${group.dataset}</dt><dd>${group.files} files, ${group.lfsPointers} LFS pointers</dd></div>
        `).join("")}
      </dl>
      <ul>
        ${manifest.notes.map((note) => `<li>${note}</li>`).join("")}
      </ul>
    </div>
  `;
}

function init() {
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "applets") {
    setupMetricApplet();
    setupConeApplet();
    setupRtpApplet();
  }
  if (page === "graph") setupVaultGraph();
  if (page === "database") {
    renderDatasets();
    renderResultSummary();
    renderExternalDatabaseInventory();
    setupResultsTable();
  }
  if (page === "repos") {
    renderRepos();
    renderRepoInventory();
  }
}

document.addEventListener("DOMContentLoaded", init);
