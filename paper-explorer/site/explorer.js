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

  files.innerHTML = [
    ...manifest.databases.map((db) => `
      <article class="database-file">
        <div>
          <p class="label">${db.path.includes("/directional/") ? "directional" : "undirectional"}</p>
          <code>${db.path}</code>
        </div>
        <dl>
          <div><dt>Rows</dt><dd>${db.rows}</dd></div>
          <div><dt>Columns</dt><dd>${db.columns}</dd></div>
          <div><dt>Size</dt><dd>${bytesLabel(db.bytes)}</dd></div>
          <div><dt>ECP</dt><dd>${db.featureGroups.ecp}</dd></div>
          <div><dt>PH cone</dt><dd>${db.featureGroups.phCone}</dd></div>
          <div><dt>SHA-256</dt><dd>${db.sha256.slice(0, 12)}...</dd></div>
        </dl>
      </article>
    `),
    missingNote ? `<article class="database-file">${missingNote}</article>` : ""
  ].join("");
}

function setupResultsTable() {
  const datasetSelect = $("#table-dataset");
  const methodSelect = $("#table-method");
  const searchInput = $("#table-search");
  const tbody = $("#results-table tbody");
  if (!datasetSelect || !methodSelect || !searchInput || !tbody) return;
  optionList(datasetSelect, unique(Results.map((row) => row.dataset)), "All datasets");
  optionList(methodSelect, unique(Results.map((row) => row.method)), "All descriptors");

  const render = () => {
    const term = searchInput.value.trim().toLowerCase();
    const rows = Results.filter((row) => {
      const matchesDataset = datasetSelect.value === "all" || row.dataset === datasetSelect.value;
      const matchesMethod = methodSelect.value === "all" || row.method === methodSelect.value;
      const haystack = `${row.dataset} ${row.method}`.toLowerCase();
      return matchesDataset && matchesMethod && (!term || haystack.includes(term));
    });
    tbody.innerHTML = rows.map((row) => {
      const gain = row.directionalR2 - row.nonDirectionalR2;
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
    }).join("");
  };

  [datasetSelect, methodSelect, searchInput].forEach((input) => input.addEventListener("input", render));
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
  if (page === "database") {
    renderDatasets();
    renderExternalDatabaseInventory();
    setupResultsTable();
  }
  if (page === "repos") {
    renderRepos();
    renderRepoInventory();
  }
}

document.addEventListener("DOMContentLoaded", init);
