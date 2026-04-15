#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const explorerRoot = path.resolve(scriptDir, "..");
const repoRoot = path.resolve(explorerRoot, "..");
const sourceRoot = path.join(repoRoot, "arXiv-2604.08105v1");
const bookRoot = path.join(explorerRoot, "knowledge-base");
const outputRoot = path.join(bookRoot, "annotated");
const imageRoot = path.join(bookRoot, "_static", "images");

const sourceFiles = [
  { id: "main", label: "Main manuscript", path: path.join(sourceRoot, "main.tex") },
  { id: "supplement", label: "Supplementary information", path: path.join(sourceRoot, "supplement.tex") }
];

function stripLatexInline(text) {
  return text
    .replace(/%.*$/gm, "")
    .replace(/\\rho/g, "rho")
    .replace(/\\phi/g, "phi")
    .replace(/\\tau/g, "tau")
    .replace(/\\alpha/g, "alpha")
    .replace(/\\sigma/g, "sigma")
    .replace(/\\mathbf\{([^{}]*)\}/g, "$1")
    .replace(/\\mathcal\{([^{}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^{}]*)\}/g, "$1")
    .replace(/\\propto/g, "propto")
    .replace(/\\times/g, "x")
    .replace(/\\in/g, "in")
    .replace(/\\sum/g, "sum")
    .replace(/\\sqrt/g, "sqrt")
    .replace(/\\cos/g, "cos")
    .replace(/\\pi/g, "pi")
    .replace(/\\cdot/g, "dot")
    .replace(/\\leq/g, "<=")
    .replace(/\\geq/g, ">=")
    .replace(/\\sim/g, "~")
    .replace(/\\label\{([^}]+)\}/g, " (label: $1)")
    .replace(/~?\\cite[t|p]?\{([^}]+)\}/g, " (citation: $1)")
    .replace(/~?\\ref\{([^}]+)\}/g, " (ref: $1)")
    .replace(/\\autoref\{([^}]+)\}/g, "ref: $1")
    .replace(/\\emph\{([^{}]*)\}/g, "$1")
    .replace(/\\textit\{([^{}]*)\}/g, "$1")
    .replace(/\\textbf\{([^{}]*)\}/g, "$1")
    .replace(/\\texttt\{([^{}]*)\}/g, "`$1`")
    .replace(/\\left|\\right/g, "")
    .replace(/\\,/g, " ")
    .replace(/\\[a-zA-Z]+\*?(?:\[[^\]]*\])?\{([^{}]*)\}/g, "$1")
    .replace(/\\[a-zA-Z]+\*?/g, "")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function headingTitle(line) {
  const match = line.match(/^\\(section|subsection|subsubsection|paragraph)\*?(?:\[[^\]]*\])?\{(.+)\}/);
  if (!match) return "";
  return stripLatexInline(match[2]);
}

function sectionLevel(line) {
  if (/^\\section\*?/.test(line)) return 2;
  if (/^\\subsection\*?/.test(line)) return 3;
  if (/^\\subsubsection\*?/.test(line)) return 4;
  if (/^\\paragraph/.test(line)) return 5;
  return 0;
}

function slugify(title) {
  return title
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70) || "section";
}

function readNumberedLines(filePath) {
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((text, index) => ({ n: index + 1, text }));
}

function extractMainRanges(lines) {
  const firstSectionIndex = lines.findIndex((line) => /^\\section\{Introduction\}/.test(line.text));
  const documentIndex = lines.findIndex((line) => /^\\begin\{document\}/.test(line.text));
  const bibliographyIndex = lines.findIndex((line) => /^\\bibliographystyle/.test(line.text));
  const topSections = lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => /^\\section\*?(?:\[[^\]]*\])?\{/.test(line.text));

  const ranges = [{
    title: "Front Matter and Abstract",
    source: "main",
    start: documentIndex + 1,
    end: firstSectionIndex - 1
  }];

  topSections.forEach(({ line, index }, sectionIndex) => {
    const next = topSections[sectionIndex + 1]?.index ?? bibliographyIndex;
    ranges.push({
      title: headingTitle(line.text),
      source: "main",
      start: index,
      end: next - 1
    });
  });

  if (bibliographyIndex !== -1) {
    ranges.push({
      title: "Bibliography Hooks",
      source: "main",
      start: bibliographyIndex,
      end: lines.length - 1
    });
  }

  return ranges;
}

function extractSupplementRanges(lines) {
  const topSections = lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => /^\\section\*?(?:\[[^\]]*\])?\{/.test(line.text));

  return topSections.map(({ line, index }, sectionIndex) => {
    const next = topSections[sectionIndex + 1]?.index ?? lines.length;
    return {
      title: `Supplement: ${headingTitle(line.text)}`,
      source: "supplement",
      start: index,
      end: next - 1
    };
  });
}

function collectRanges() {
  const main = readNumberedLines(sourceFiles[0].path);
  const supplement = readNumberedLines(sourceFiles[1].path);
  return [
    ...extractMainRanges(main),
    ...extractSupplementRanges(supplement)
  ].map((range, index) => ({
    ...range,
    index,
    file: `${String(index).padStart(2, "0")}-${slugify(range.title)}.md`
  }));
}

function makeBlocks(lines) {
  const blocks = [];
  let current = [];

  const flush = () => {
    if (!current.length) return;
    blocks.push({ type: "paragraph", lines: current });
    current = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.text.trim();

    if (!trimmed) {
      flush();
      continue;
    }

    if (/^\\(section|subsection|subsubsection|paragraph)\*?/.test(trimmed)) {
      flush();
      blocks.push({ type: "heading", lines: [line] });
      continue;
    }

    const begin = trimmed.match(/^\\begin\{([^}]+)\}/);
    if (begin) {
      flush();
      const env = begin[1];
      const envLines = [line];
      while (i + 1 < lines.length) {
        i += 1;
        envLines.push(lines[i]);
        if (new RegExp(`^\\\\end\\{${env.replace("*", "\\*")}\\}`).test(lines[i].text.trim())) break;
      }
      blocks.push({ type: env.includes("figure") ? "figure" : env.includes("table") ? "table" : "environment", env, lines: envLines });
      continue;
    }

    if (trimmed === "\\[" || trimmed.startsWith("\\[")) {
      flush();
      const mathLines = [line];
      while (i + 1 < lines.length) {
        if (lines[i].text.includes("\\]")) break;
        i += 1;
        mathLines.push(lines[i]);
        if (lines[i].text.includes("\\]")) break;
      }
      blocks.push({ type: "display-math", lines: mathLines });
      continue;
    }

    current.push(line);
  }

  flush();
  return blocks;
}

function lineRange(block) {
  return `${block.lines[0].n}-${block.lines[block.lines.length - 1].n}`;
}

function rawSource(block) {
  return block.lines.map((line) => `${String(line.n).padStart(4, " ")} | ${line.text}`).join("\n");
}

function readableText(block) {
  const raw = block.lines.map((line) => line.text).join(" ");
  if (block.type === "figure" || block.type === "table") {
    const captionMatch = raw.match(/\\caption\{([\s\S]+?)\}\s*\\label|\caption\{([\s\S]+?)\}/);
    return stripLatexInline(captionMatch?.[1] || captionMatch?.[2] || "");
  }
  if (block.type === "environment" || block.type === "display-math") return "";
  return stripLatexInline(raw);
}

function figureImages(block) {
  const raw = block.lines.map((line) => line.text).join("\n");
  return Array.from(raw.matchAll(/\{([^{}]+\.png)\}/g), (match) => match[1])
    .filter((file) => existsSync(path.join(imageRoot, file)));
}

function sectionLens(title) {
  const lower = title.toLowerCase();
  if (lower.includes("front matter")) {
    return [
      "Read this as the contract for the whole paper: title, authorship, affiliations, and the compressed claim in the abstract.",
      "The abstract already contains the causal chain used throughout the manuscript: anisotropy creates direction-dependent mechanics; standard topology forgets direction; direction-aware filtrations restore that information.",
      "When reading later sections, check that every dataset, descriptor, and result actually supports the claims made here."
    ];
  }
  if (lower.includes("introduction")) {
    return [
      "This section builds the motivation from materials science toward topology: porous geometry matters, density laws are insufficient, and classical TDA has a directional blind spot.",
      "Track the escalation of the argument: applications -> failure of simple density scaling -> promise of TDA -> isotropy problem -> proposed direction-aware fix.",
      "The key reader question is whether the proposed descriptors solve a real modeling obstruction rather than simply adding more features."
    ];
  }
  if (lower === "dataset") {
    return [
      "This is the experimental design section. It defines where the geometry comes from, how anisotropy is controlled, and how mechanical targets are computed.",
      "The dataset choices are not incidental: RTP isolates controlled anisotropy, TD tests generalization under statistical isotropy, and ATTD tests a transformed anisotropic setting.",
      "Every later performance claim depends on the target-generation and anisotropy definitions introduced here."
    ];
  }
  if (lower.includes("background") || lower.includes("methods")) {
    return [
      "This section gives the mathematical mechanism: how a voxel structure becomes a scalar or vector field, and how PH/ECP descriptors are extracted.",
      "Separate the non-directional baseline from the direction-aware modification. The comparison is only meaningful if the downstream learning model is kept comparable.",
      "The central technical issue is where the loading direction enters the pipeline: before topology is computed, not merely after features are produced."
    ];
  }
  if (lower.includes("results")) {
    return [
      "This section is the empirical test of the paper's thesis. Read every reported score as a comparison between direction-agnostic topology, direction-aware topology, and voxel CNN baselines.",
      "The important pattern is not a single best number but the relationship between anisotropy and the gain from direction-aware descriptors.",
      "Use the tables and figures to distinguish strong-anisotropy wins, weak-anisotropy parity, and cases where descriptor families behave differently."
    ];
  }
  if (lower.includes("summary")) {
    return [
      "This section compresses the paper back into its main claim and explains what should be taken forward.",
      "The key interpretive point is that direction-aware topology is presented as a reusable representation strategy, not as a one-off model trick.",
      "Notice which claims are framed as established by the experiments and which remain future-facing."
    ];
  }
  if (lower.includes("declarations")) {
    return [
      "These lines define authorship, competing-interest, and publication metadata rather than technical content.",
      "For reproducibility, declarations matter because they identify responsibility and potential conflicts around the study.",
      "They should be preserved in a faithful companion even though they do not affect the mathematical argument."
    ];
  }
  if (lower.includes("supplement")) {
    return [
      "This supplementary section fills in implementation detail or additional evidence that the main text compresses.",
      "Read it as support for reproducibility: generation procedures, additional RTPxyz results, and fold-level performance tables.",
      "Where the main text states a result, the supplement often exposes the variation or construction detail behind it."
    ];
  }
  return [
    "This page preserves the manuscript source and annotates the role of each block in the paper's argument.",
    "Use the source line numbers to map each explanation back to the original LaTeX.",
    "The remarks focus on meaning, assumptions, and how the block connects to the rest of the explorer."
  ];
}

function blockCommentary(block, pageTitle) {
  const text = `${block.lines.map((line) => line.text).join(" ")} ${pageTitle}`.toLowerCase();
  const notes = [];

  if (block.type === "heading") {
    notes.push(`This heading opens a new logical unit: **${headingTitle(block.lines[0].text) || pageTitle}**.`);
    notes.push("Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.");
  }
  if (block.type === "figure") {
    notes.push("This figure is evidential, not decorative: it gives visual grounding for the structures, descriptors, or performance pattern discussed around it.");
    notes.push("Read the caption carefully because it usually encodes the variables and comparisons that make the visual scientifically meaningful.");
  }
  if (block.type === "table") {
    notes.push("This table is a quantitative claim surface. Compare rows by dataset, descriptor family, directional status, and error metric rather than reading only the best score.");
    notes.push("The main inferential question is whether directional information improves prediction under the same learning setup.");
  }
  if (block.type === "environment" || block.type === "display-math" || /\\begin\{equation/.test(text)) {
    notes.push("This mathematical block defines part of the computational object used later in the pipeline.");
    notes.push("Track the variables here: later descriptors and model inputs inherit these definitions.");
  }
  if (/porous|void|solid|microstructure|voxel/.test(text)) {
    notes.push("This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.");
  }
  if (/young|modulus|stiffness|elastic|compression|uniaxial/.test(text)) {
    notes.push("This connects geometry to the target variable: directional Young's modulus under a specified loading axis.");
  }
  if (/gibson|ashby|density|porosity/.test(text)) {
    notes.push("This is the density-baseline motivation: porosity alone is treated as insufficient for predicting stiffness across complex porous morphologies.");
  }
  if (/topological data analysis|persistent homology|persistence|euler|tda/.test(text)) {
    notes.push("This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.");
  }
  if (/direction|axis|anisotrop|rotation|reflection|symmetry|hard|easy/.test(text)) {
    notes.push("This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.");
  }
  if (/random trigonometric phase|rtp|fourier|wavevector|trigonometric|phase/.test(text)) {
    notes.push("This defines the RTP construction, where anisotropy is controlled in Fourier space before thresholding into a porous structure.");
  }
  if (/threshold|indicator|binary|percolat|all material voxels/.test(text)) {
    notes.push("This explains how continuous fields become admissible binary materials and why connectivity/percolation filters are needed for mechanical tests.");
  }
  if (/voronoi|zeolit|diamond|cubic|spline|topologically diverse/.test(text)) {
    notes.push("This broadens the study beyond RTP by adding structurally diverse families that test whether the descriptor idea generalizes.");
  }
  if (/attd|transformed|elongat/.test(text)) {
    notes.push("This constructs anisotropy by transforming otherwise diverse structures, giving a bridge between controlled RTP anisotropy and heterogeneous real-looking morphologies.");
  }
  if (/sigma|anisotropy measure|covariance|spectral/.test(text)) {
    notes.push("This supplies the scalar anisotropy summaries used to interpret when directional descriptors should matter most.");
  }
  if (/fftmad|homogenization|fourier|numerical/.test(text)) {
    notes.push("This is the target-generation mechanism: the paper uses FFT-based homogenization rather than treating stiffness labels as empirical annotations.");
  }
  if (/cone/.test(text)) {
    notes.push("The cone construction is the simplest place where direction enters the filtration: neighborhoods are sampled relative to a chosen axis.");
  }
  if (/principal component|pc1|multifiltration|vector field/.test(text)) {
    notes.push("The principal-component construction adds local orientation information and supports multiparameter Euler-characteristic descriptors.");
  }
  if (/catboost|boost|cnn|densenet|neural/.test(text)) {
    notes.push("This sets the learning comparison: compact topological descriptors with gradient boosting versus voxel-level convolutional models.");
  }
  if (/r\^2|coefficient of determination|mae|mean absolute error|predictive accuracy|performance gain|r2 gain/.test(text)) {
    notes.push("This is a performance-interpretation block. Watch both $R^2$ and MAE because they answer different questions about explained variance and absolute error.");
  }
  if (/\bcode\b|\bdata availability\b|\brepository\b|\bgithub\b/.test(text)) {
    notes.push("This is part of the reproducibility surface: it points from the paper to the code/data artifacts indexed elsewhere in this explorer.");
  }

  const fallback = {
    introduction: "In the introduction, this block either motivates the problem, identifies a gap, or previews the proposed contribution.",
    dataset: "In the dataset section, this block defines the experimental material on which all later descriptor comparisons depend.",
    methods: "In the methods section, this block contributes to the pipeline that maps structure and direction into machine-learning features.",
    results: "In the results section, this block should be read as evidence for or against the claimed value of direction-aware descriptors.",
    supplement: "In the supplement, this block provides extra construction detail or result granularity that supports the main text."
  };
  const lowerTitle = pageTitle.toLowerCase();
  const fallbackNote = Object.entries(fallback).find(([key]) => lowerTitle.includes(key))?.[1]
    || "This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.";
  notes.push(fallbackNote);

  return Array.from(new Set(notes)).slice(0, 5);
}

function sourceFileLabel(id) {
  return sourceFiles.find((file) => file.id === id)?.label || id;
}

function markdownForBlock(block, pageTitle) {
  const range = lineRange(block);
  const text = readableText(block);
  const lines = [];

  if (block.type === "heading") {
    const level = Math.min(5, Math.max(3, sectionLevel(block.lines[0].text) + 1));
    lines.push(`${"#".repeat(level)} ${headingTitle(block.lines[0].text) || "Untitled Heading"}`);
    lines.push("");
  }

  lines.push(`::::{admonition} Source lines ${range}`);
  lines.push(":class: note");
  lines.push("");
  lines.push("```latex");
  lines.push(rawSource(block));
  lines.push("```");
  lines.push("");

  if (text) {
    lines.push("**Readable text**");
    lines.push("");
    lines.push(`> ${text}`);
    lines.push("");
  }

  const images = block.type === "figure" ? figureImages(block) : [];
  if (images.length) {
    lines.push("**Figure assets carried into the book**");
    lines.push("");
    images.forEach((image) => {
      lines.push(`![${image}](../_static/images/${image})`);
      lines.push("");
    });
  }

  lines.push("**Commentary and remarks**");
  lines.push("");
  blockCommentary(block, pageTitle).forEach((note) => lines.push(`- ${note}`));
  lines.push("::::");
  lines.push("");
  return lines.join("\n");
}

function pageMarkdown(range, linesBySource) {
  const sourceLines = linesBySource.get(range.source).slice(range.start, range.end + 1);
  const blocks = makeBlocks(sourceLines);
  const firstLine = sourceLines[0]?.n ?? 0;
  const lastLine = sourceLines[sourceLines.length - 1]?.n ?? 0;
  const md = [];

  md.push(`# ${range.title}`);
  md.push("");
  md.push("```{admonition} Coverage");
  md.push(":class: important");
  md.push(`This page annotates **${sourceFileLabel(range.source)}**, source lines **${firstLine}-${lastLine}**. The original LaTeX source is reproduced in line-numbered blocks, followed by commentary explaining the role, assumptions, and interpretation of each block.`);
  md.push("```");
  md.push("");
  md.push("## Reading Lens");
  md.push("");
  sectionLens(range.title).forEach((note) => md.push(`- ${note}`));
  md.push("");
  md.push("## Annotated Source");
  md.push("");
  blocks.forEach((block) => md.push(markdownForBlock(block, range.title)));
  return `${md.join("\n")}\n`;
}

function indexMarkdown(ranges) {
  const md = [];
  md.push("# Annotated Paper");
  md.push("");
  md.push("This part of the knowledge base is a line-numbered reading companion for the manuscript and supplement. It is intentionally not a short summary: every paper section is reproduced from the LaTeX source in reading order and annotated with comments, mathematical remarks, modeling assumptions, and interpretation checks.");
  md.push("");
  md.push("```{admonition} How to read this part");
  md.push(":class: tip");
  md.push("Use the source line numbers to move between the published paper source and the explanation. The commentary blocks are written to answer: what is this line doing, why does it matter, what assumptions enter here, and how does it connect to the rest of the paper explorer?");
  md.push("```");
  md.push("");
  md.push("## Coverage Map");
  md.push("");
  ranges.forEach((range) => {
    md.push(`- [${range.title}](${range.file})`);
  });
  md.push("");
  return `${md.join("\n")}\n`;
}

function main() {
  mkdirSync(outputRoot, { recursive: true });
  const linesBySource = new Map(sourceFiles.map((source) => [source.id, readNumberedLines(source.path)]));
  const ranges = collectRanges();

  writeFileSync(path.join(outputRoot, "index.md"), indexMarkdown(ranges));
  ranges.forEach((range) => {
    writeFileSync(path.join(outputRoot, range.file), pageMarkdown(range, linesBySource));
  });

  writeFileSync(
    path.join(outputRoot, "manifest.json"),
    `${JSON.stringify({
      schemaVersion: 1,
      generatedFrom: sourceFiles.map((source) => path.relative(repoRoot, source.path)),
      pages: ranges.map((range) => ({
        title: range.title,
        file: `annotated/${range.file}`,
        source: range.source,
        sourceLines: [
          linesBySource.get(range.source)[range.start]?.n ?? null,
          linesBySource.get(range.source)[range.end]?.n ?? null
        ]
      }))
    }, null, 2)}\n`
  );

  console.log(`Generated annotated paper: ${ranges.length} page(s) in ${path.relative(repoRoot, outputRoot)}.`);
}

main();
