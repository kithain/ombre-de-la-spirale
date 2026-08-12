import { build } from "esbuild";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");
const OUT_BASE_NAME = "Obsidian_Ombre_de_la_Spirale";
const MARKER_FILE = ".generated-by-codex-obsidian-export";
const TEMP_DIR = path.join(ROOT, ".codex", "tmp_obsidian_export");

const SKIP_KEYS = new Set(["icone", "couleur"]);
const noteTargets = new Set();
const mediaTargets = new Set();
const generatedNotes = [];

const maps = {
  scenarios: new Map(),
  scenes: new Map(),
  pnj: new Map(),
  factions: new Map(),
  fronts: new Map(),
  layers: new Map(),
  zones: new Map(),
  locations: new Map(),
  revelations: new Map(),
  patients: new Map(),
};

const dataMaps = {
  pnjById: new Map(),
  factionByName: new Map(),
  frontById: new Map(),
  zoneById: new Map(),
  locationById: new Map(),
  sceneById: new Map(),
};

function pad2(value) {
  return String(value).padStart(2, "0");
}

function exists(filePath) {
  return fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);
}

function toPosix(relPath) {
  return relPath.split(path.sep).join("/");
}

function withoutMd(relPath) {
  return toPosix(relPath).replace(/\.md$/i, "");
}

function cleanSegment(value, fallback = "Sans titre", maxLength = 80) {
  let text = String(value || fallback)
    .split("")
    .map((char) => (char.charCodeAt(0) < 32 || '<>:"/\\|?*'.includes(char) ? " " : char))
    .join("")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) text = fallback;
  text = text.replace(/[. ]+$/g, "");
  if (!text) text = fallback;
  if (text.length > maxLength) text = text.slice(0, maxLength).replace(/\s+\S*$/g, "").trim();

  const reserved = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
  if (reserved.test(text)) text = `${text}-note`;
  return text;
}

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function factionMemberIds(faction) {
  return unique([
    ...asArray(faction.idsPnj),
    ...asArray(faction.membres_cles).map((member) => member.id),
    ...asArray(faction.hierarchie).map((entry) => entry.idPnj),
  ]);
}

function resolvePnjFactionName(pnj, factionsData = []) {
  const explicitFaction = asArray(factionsData).find((faction) => factionMemberIds(faction).includes(pnj.id));
  if (explicitFaction?.nom) return explicitFaction.nom;

  const raw = String(pnj.faction || "").trim();
  const normalized = normalizeSearch(raw);
  if (!raw) return "Sans faction";
  if (normalized.includes("universit")) return "Université Arcanique";
  if (normalized.includes("conseil")) return "Le Conseil de Valombre";
  if (normalized.includes("guilde marchande") || normalized.includes("marchand")) return "La Guilde Marchande";
  if (normalized.includes("caldris")) return "Caldris, Marche Extérieure";
  if (
    normalized.includes("naine") ||
    normalized.includes("nain") ||
    normalized.includes("terrasses") ||
    normalized.includes("mine") ||
    normalized.includes("temple-forgeron")
  ) {
    return "Communauté Naine";
  }
  if (normalized.includes("nyx") || normalized.includes("resistance")) return "Ordre de Nyx / Résistance";
  if (normalized.includes("syndicat")) return "Le Syndicat des Brumes";
  if (normalized.includes("saint-aldric") || normalized.includes("clerge")) return "Le Clergé de Saint-Aldric";
  if (normalized.includes("spirale")) return "La Spirale";
  return raw;
}

function resolveLocationZoneName(location) {
  if (location.zoneId) {
    return dataMaps.zoneById.get(location.zoneId)?.nom || location.zoneNom || location.zoneId;
  }
  return "Autres lieux";
}

function uniqueRelPath(relPath, used = noteTargets) {
  const parsed = path.posix.parse(toPosix(relPath));
  let candidate = toPosix(relPath);
  let count = 2;
  while (used.has(withoutMd(candidate)) || used.has(candidate)) {
    candidate = path.posix.join(parsed.dir, `${parsed.name} - ${count}${parsed.ext}`);
    count += 1;
  }
  return candidate;
}

function displayName(value) {
  const raw = String(value || "").trim();
  return raw.split(",")[0].trim() || raw;
}

function humanizeKey(key) {
  const labels = {
    difficulte: "Difficulté",
    difficultes_cles: "Difficultés clés",
  };
  if (labels[key]) return labels[key];

  return String(key)
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase());
}

function yamlValue(value) {
  if (value == null) return "null";
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(String(value));
}

function frontmatter(fields) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const item of value) lines.push(`  - ${yamlValue(item)}`);
    } else {
      lines.push(`${key}: ${yamlValue(value)}`);
    }
  }
  lines.push("---", "");
  return `${lines.join("\n")}\n`;
}

function normalizeText(value) {
  return String(value ?? "").replace(/\r\n/g, "\n").trim();
}

function inline(value) {
  return normalizeText(value).replace(/\n+/g, "<br>");
}

function tableCell(value) {
  const text = inline(value).replace(/\[\[([^\]|#]+)(#[^\]|]+)?\|[^\]]+\]\]/g, (_, target, headingPart = "") => {
    return `[[${target}${headingPart}]]`;
  });
  return text.replace(/\|/g, "\\|");
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function compact(values) {
  return values.filter((value) => value != null && value !== "");
}

function unique(values) {
  return [...new Set(compact(values))];
}

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function shouldSkip(key, value) {
  return SKIP_KEYS.has(key) || typeof value === "function" || value === undefined || value === null;
}

function wiki(relPath, alias) {
  const target = withoutMd(relPath);
  const safeAlias = String(alias || path.posix.basename(target)).replace(/\|/g, "/");
  return `[[${target}|${safeAlias}]]`;
}

function embed(relPath) {
  return `![[${toPosix(relPath)}]]`;
}

function linkScenario(id, alias) {
  const rel = maps.scenarios.get(id);
  return rel ? wiki(rel, alias) : inline(alias || id);
}

function linkScene(id, alias) {
  const rel = maps.scenes.get(id);
  return rel ? wiki(rel, alias || dataMaps.sceneById.get(id)?.scene?.titre || id) : inline(alias || id);
}

function linkPnj(id, alias) {
  const rel = maps.pnj.get(id);
  const pnj = dataMaps.pnjById.get(id);
  return rel ? wiki(rel, alias || displayName(pnj?.nom) || id) : inline(alias || id);
}

function linkFaction(name, alias) {
  const rel = maps.factions.get(name);
  return rel ? wiki(rel, alias || name) : inline(alias || name);
}

function linkFront(idOrName, alias) {
  const byId = maps.fronts.get(idOrName);
  const front = dataMaps.frontById.get(idOrName);
  if (byId) return wiki(byId, alias || front?.nom || idOrName);

  for (const [id, rel] of maps.fronts.entries()) {
    const candidate = dataMaps.frontById.get(id);
    if (candidate?.nom === idOrName) return wiki(rel, alias || idOrName);
  }
  return inline(alias || idOrName);
}

function linkLocation(id, alias) {
  const rel = maps.locations.get(id) || maps.zones.get(id);
  const item = dataMaps.locationById.get(id) || dataMaps.zoneById.get(id);
  return rel ? wiki(rel, alias || item?.nom || id) : inline(alias || id);
}

function linkPatient(code, alias) {
  const rel = maps.patients.get(code);
  return rel ? wiki(rel, alias || code) : inline(alias || code);
}

function pnjLinks(ids) {
  const links = unique(asArray(ids)).map((id) => linkPnj(id));
  return links.length ? links.join(", ") : "_Aucun._";
}

function paragraph(value) {
  const text = normalizeText(value);
  return text ? `${text}\n\n` : "";
}

function bulletList(values) {
  const items = asArray(values).filter((item) => item != null && item !== "");
  if (!items.length) return "_Aucun._\n\n";
  return `${items.map((item) => `- ${inline(item)}`).join("\n")}\n\n`;
}

function heading(level, title) {
  return `${"#".repeat(Math.min(level, 6))} ${title}\n\n`;
}

function renderValue(value, level = 2) {
  if (value == null || typeof value === "function") return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return paragraph(value);
  }

  if (Array.isArray(value)) {
    if (!value.length) return "_Aucun._\n\n";
    if (value.every((item) => item == null || ["string", "number", "boolean"].includes(typeof item))) {
      return bulletList(value);
    }

    return value
      .map((item, index) => {
        if (!isPlainObject(item)) return `- ${inline(item)}\n`;
        const title = item.titre || item.nom || item.id || item.code || `Element ${index + 1}`;
        return `${heading(level, title)}${renderObject(item, level + 1, new Set(["titre", "nom"]))}`;
      })
      .join("");
  }

  if (isPlainObject(value)) return renderObject(value, level);
  return paragraph(value);
}

function renderObject(obj, level = 2, skip = new Set()) {
  const primitiveLines = [];
  let sections = "";

  for (const [key, value] of Object.entries(obj || {})) {
    if (skip.has(key) || shouldSkip(key, value)) continue;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      primitiveLines.push(`- **${humanizeKey(key)}**: ${inline(value)}`);
    } else if (Array.isArray(value) && value.every((item) => item == null || ["string", "number", "boolean"].includes(typeof item))) {
      sections += `${heading(level, humanizeKey(key))}${bulletList(value)}`;
    } else {
      sections += `${heading(level, humanizeKey(key))}${renderValue(value, level + 1)}`;
    }
  }

  return `${primitiveLines.length ? `${primitiveLines.join("\n")}\n\n` : ""}${sections}`;
}

function renderRemaining(obj, handled, level = 2) {
  const rest = {};
  for (const [key, value] of Object.entries(obj || {})) {
    if (handled.has(key) || shouldSkip(key, value)) continue;
    rest[key] = value;
  }
  return Object.keys(rest).length ? renderObject(rest, level) : "";
}

async function writeVaultFile(vaultDir, relPath, content, isNote = true) {
  const fullPath = path.join(vaultDir, relPath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, content.endsWith("\n") ? content : `${content}\n`, "utf8");
  if (isNote && relPath.endsWith(".md")) {
    generatedNotes.push({ relPath: toPosix(relPath), content });
    noteTargets.add(withoutMd(relPath));
  }
}

async function copyFileToVault(vaultDir, sourcePath, relPath) {
  const fullPath = path.join(vaultDir, relPath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.copyFile(sourcePath, fullPath);
  mediaTargets.add(toPosix(relPath));
}

async function loadData() {
  await fs.rm(TEMP_DIR, { recursive: true, force: true });
  await fs.mkdir(TEMP_DIR, { recursive: true });

  const entryPath = path.join(TEMP_DIR, "entry.mjs");
  const bundlePath = path.join(TEMP_DIR, "bundle.mjs");
  const entry = `
import { scenariosData } from "../../src/data/scenarios/scenarios.js";
import { frontsData, couchesCampagneData } from "../../src/data/scenarios/fronts.js";
import { effetsFrontsParScene } from "../../src/data/scenarios/effetsFronts.js";
import { etatCampagneInitial } from "../../src/data/scenarios/etatCampagne.js";
import { registrePatientsElianVoss, suiviPatientsElianInitial } from "../../src/data/scenarios/artefactsPatientsElian.js";
import { tousLesPnj } from "../../src/data/npcRegistry.js";
import { factionsData } from "../../src/data/personnages/factions.js";
import { universeData } from "../../src/data/universe/universe.js";

export default {
  scenariosData,
  frontsData,
  couchesCampagneData,
  effetsFrontsParScene,
  etatCampagneInitial,
  registrePatientsElianVoss,
  suiviPatientsElianInitial,
  tousLesPnj,
  factionsData,
  universeData
};
`;

  await fs.writeFile(entryPath, entry, "utf8");
  await build({
    entryPoints: [entryPath],
    bundle: true,
    platform: "node",
    format: "esm",
    outfile: bundlePath,
    external: ["lucide-react", "react", "react-dom"],
    logLevel: "silent",
  });

  const imported = await import(`${pathToFileURL(bundlePath).href}?t=${Date.now()}`);
  return imported.default;
}

async function prepareVaultDir() {
  let vaultDir = path.join(ROOT, OUT_BASE_NAME);
  if (await exists(vaultDir)) {
    const marker = path.join(vaultDir, MARKER_FILE);
    if (await exists(marker)) {
      await fs.rm(vaultDir, { recursive: true, force: true });
    } else {
      const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "").replace("T", "_");
      vaultDir = path.join(ROOT, `${OUT_BASE_NAME}_${stamp}`);
    }
  }
  await fs.mkdir(vaultDir, { recursive: true });
  await fs.writeFile(path.join(vaultDir, MARKER_FILE), "Generated by scripts/export_obsidian.mjs\n", "utf8");
  return vaultDir;
}

function collectSceneRecords(scenariosData) {
  const records = [];
  for (const [scenarioIndex, scenario] of scenariosData.entries()) {
    let order = 1;
    for (const [actIndex, acte] of asArray(scenario.actes).entries()) {
      for (const [sceneIndex, scene] of asArray(acte.scenes).entries()) {
        const id = scene.id || `${scenario.id}_scene_${order}`;
        scene.id = id;
        const record = { scenario, scenarioIndex, acte, actIndex, scene, sceneIndex, order };
        records.push(record);
        dataMaps.sceneById.set(id, record);
        order += 1;
      }
    }
  }
  return records;
}

function collectLocations(data, sceneRecords) {
  for (const zone of asArray(data.universeData?.zones)) {
    if (!zone?.id) continue;
    dataMaps.zoneById.set(zone.id, zone);

    for (const emplacement of asArray(zone.emplacements)) {
      if (!emplacement?.id) continue;
      dataMaps.locationById.set(emplacement.id, {
        ...emplacement,
        zoneId: zone.id,
        zoneNom: zone.nom,
        source: "univers",
      });
    }
  }

  for (const scenario of asArray(data.scenariosData)) {
    for (const lieu of asArray(scenario.vue_ensemble?.lieux_cles)) {
      if (!lieu?.id) continue;
      const existing = dataMaps.locationById.get(lieu.id);
      dataMaps.locationById.set(lieu.id, {
        ...(existing || {}),
        id: lieu.id,
        nom: existing?.nom || lieu.nom || lieu.id,
        resume: existing?.resume || lieu.role || lieu.resume || "",
        roleScenario: lieu.role || existing?.roleScenario || "",
        scenarioIds: unique([...(existing?.scenarioIds || []), scenario.id]),
        source: existing?.source || "scenario",
      });
    }
  }

  for (const { scenario, scene } of sceneRecords) {
    if (!scene.idLieu) continue;
    const existing = dataMaps.locationById.get(scene.idLieu);
    dataMaps.locationById.set(scene.idLieu, {
      ...(existing || {}),
      id: scene.idLieu,
      nom: existing?.nom || scene.idLieu,
      resume: existing?.resume || `Lieu reference par la scene ${scene.titre}.`,
      sceneIds: unique([...(existing?.sceneIds || []), scene.id]),
      scenarioIds: unique([...(existing?.scenarioIds || []), scenario.id]),
      source: existing?.source || "scene",
    });
  }
}

function registerPaths(data, sceneRecords) {
  for (const [index, scenario] of asArray(data.scenariosData).entries()) {
    const rel = uniqueRelPath(path.posix.join("Scenarios", `Scenario ${index + 1} - ${cleanSegment(scenario.titre, scenario.id, 60)}.md`));
    maps.scenarios.set(scenario.id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const record of sceneRecords) {
    const scenarioFolder = path.posix.join(
      "Scenarios",
      `Scenario ${record.scenarioIndex + 1} - ${cleanSegment(record.scenario.titre, record.scenario.id, 60)}`,
      "Scenes",
    );
    const rel = uniqueRelPath(path.posix.join(scenarioFolder, `${pad2(record.order)} - ${cleanSegment(record.scene.titre, record.scene.id, 70)}.md`));
    maps.scenes.set(record.scene.id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const pnj of asArray(data.tousLesPnj)) {
    if (!pnj?.id) continue;
    dataMaps.pnjById.set(pnj.id, pnj);
    const factionFolder = cleanSegment(resolvePnjFactionName(pnj, data.factionsData), "Sans faction", 70);
    const rel = uniqueRelPath(path.posix.join("PNJ", factionFolder, `${cleanSegment(displayName(pnj.nom), pnj.id, 70)}.md`));
    maps.pnj.set(pnj.id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const faction of asArray(data.factionsData)) {
    if (!faction?.nom) continue;
    dataMaps.factionByName.set(faction.nom, faction);
    const rel = uniqueRelPath(path.posix.join("Factions", `${cleanSegment(faction.nom, "Faction", 75)}.md`));
    maps.factions.set(faction.nom, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const front of asArray(data.frontsData)) {
    if (!front?.id) continue;
    dataMaps.frontById.set(front.id, front);
    const rel = uniqueRelPath(path.posix.join("Fronts", `${cleanSegment(front.nom, front.id, 75)}.md`));
    maps.fronts.set(front.id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const [index, layer] of asArray(data.couchesCampagneData).entries()) {
    const id = layer.id || `couche_${index + 1}`;
    const rel = uniqueRelPath(path.posix.join("Fronts", "Couches", `${cleanSegment(layer.nom || layer.titre || id, id, 75)}.md`));
    maps.layers.set(id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const zone of dataMaps.zoneById.values()) {
    const rel = uniqueRelPath(path.posix.join("Univers", "Zones", `${cleanSegment(zone.nom, zone.id, 75)}.md`));
    maps.zones.set(zone.id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const location of dataMaps.locationById.values()) {
    const zoneFolder = cleanSegment(resolveLocationZoneName(location), "Autres lieux", 70);
    const rel = uniqueRelPath(path.posix.join("Univers", "Lieux", zoneFolder, `${cleanSegment(location.nom, location.id, 75)}.md`));
    maps.locations.set(location.id, rel);
    noteTargets.add(withoutMd(rel));
  }

  for (const scenario of asArray(data.scenariosData)) {
    for (const revelation of asArray(scenario.revelations_indispensables)) {
      if (!revelation?.id) continue;
      const key = `${scenario.id}:${revelation.id}`;
      const rel = uniqueRelPath(path.posix.join("Revelations", cleanSegment(scenario.titre, scenario.id, 55), `${cleanSegment(revelation.titre, revelation.id, 75)}.md`));
      maps.revelations.set(key, rel);
      noteTargets.add(withoutMd(rel));
    }
  }

  for (const patient of asArray(data.registrePatientsElianVoss?.lignes)) {
    if (!patient?.code) continue;
    const rel = uniqueRelPath(path.posix.join("Campagne", "Patients", `${cleanSegment(`${patient.code} - ${patient.patient}`, patient.code, 75)}.md`));
    maps.patients.set(patient.code, rel);
    noteTargets.add(withoutMd(rel));
  }
}

function collectPnjAppearances(sceneRecords, scenariosData, factionsData) {
  const appearances = new Map();
  const add = (id, item) => {
    if (!id) return;
    const list = appearances.get(id) || [];
    list.push(item);
    appearances.set(id, list);
  };

  for (const record of sceneRecords) {
    for (const id of unique([...asArray(record.scene.idsPnj), ...asArray(record.scene.idsPnjImpliques)])) {
      add(id, { type: "scene", record });
    }
  }

  for (const scenario of asArray(scenariosData)) {
    for (const pnj of asArray(scenario.vue_ensemble?.pnj_cles)) {
      add(pnj.id, { type: "scenario", scenario, role: pnj.role });
    }
  }

  for (const faction of asArray(factionsData)) {
    for (const id of unique([...asArray(faction.idsPnj), ...asArray(faction.membres_cles).map((m) => m.id), ...asArray(faction.hierarchie).map((h) => h.idPnj)])) {
      add(id, { type: "faction", faction });
    }
  }

  return appearances;
}

function collectLocationAppearances(sceneRecords, scenariosData) {
  const appearances = new Map();
  const add = (id, item) => {
    if (!id) return;
    const list = appearances.get(id) || [];
    list.push(item);
    appearances.set(id, list);
  };

  for (const record of sceneRecords) {
    if (record.scene.idLieu) add(record.scene.idLieu, { type: "scene", record });
  }
  for (const scenario of asArray(scenariosData)) {
    for (const lieu of asArray(scenario.vue_ensemble?.lieux_cles)) {
      add(lieu.id, { type: "scenario", scenario, role: lieu.role });
    }
  }
  return appearances;
}

async function copyPnjImages(vaultDir, pnjList) {
  const imageMap = new Map();
  const usedMedia = new Set();
  for (const pnj of asArray(pnjList)) {
    if (!pnj?.image) continue;
    const normalized = String(pnj.image).replace(/^\/+/, "");
    const source = path.join(ROOT, "public", normalized);
    if (!(await exists(source))) continue;

    const baseName = cleanSegment(path.basename(normalized), "image", 90);
    let rel = path.posix.join("Images", "PNJ", baseName);
    rel = uniqueRelPath(rel, usedMedia);
    usedMedia.add(rel);
    await copyFileToVault(vaultDir, source, rel);
    imageMap.set(pnj.id, rel);
  }
  return imageMap;
}

function renderScenarioNote(scenario, _index) {
  const sceneRecords = asArray(scenario.actes).flatMap((acte) => asArray(acte.scenes).map((scene) => dataMaps.sceneById.get(scene.id)).filter(Boolean));
  const handled = new Set(["id", "titre", "niveau", "synopsis", "vue_ensemble", "revelations_indispensables", "fronts_actifs", "actes"]);
  let md = frontmatter({ type: "scenario", id: scenario.id, niveau: scenario.niveau });
  md += `# ${scenario.titre}\n\n`;
  if (scenario.niveau) md += `**Niveau:** ${inline(scenario.niveau)}\n\n`;
  if (scenario.synopsis) md += `## Synopsis\n\n${paragraph(scenario.synopsis)}`;

  const overview = scenario.vue_ensemble || {};
  if (overview.ton) md += `## Ton\n\n${paragraph(overview.ton)}`;
  if (overview.question_dramatique) md += `## Question dramatique\n\n${paragraph(overview.question_dramatique)}`;
  if (overview.themes?.length) md += `## Themes\n\n${bulletList(overview.themes)}`;

  if (overview.pnj_cles?.length) {
    md += "## PNJ cles\n\n";
    for (const pnj of overview.pnj_cles) {
      md += `- ${linkPnj(pnj.id, pnj.nom)}${pnj.role ? ` - ${inline(pnj.role)}` : ""}\n`;
    }
    md += "\n";
  }

  if (overview.lieux_cles?.length) {
    md += "## Lieux cles\n\n";
    for (const lieu of overview.lieux_cles) {
      md += `- ${linkLocation(lieu.id, lieu.nom)}${lieu.role ? ` - ${inline(lieu.role)}` : ""}\n`;
    }
    md += "\n";
  }

  if (sceneRecords.length) {
    md += "## Scenes\n\n";
    for (const record of sceneRecords) {
      md += `- ${pad2(record.order)}. ${linkScene(record.scene.id, record.scene.titre)} (${inline(record.acte.titre || record.scene.acte || "Acte")})\n`;
    }
    md += "\n";
  }

  if (scenario.revelations_indispensables?.length) {
    md += "## Revelations indispensables\n\n";
    for (const revelation of scenario.revelations_indispensables) {
      const rel = maps.revelations.get(`${scenario.id}:${revelation.id}`);
      md += `- ${rel ? wiki(rel, revelation.titre) : inline(revelation.titre)}\n`;
    }
    md += "\n";
  }

  if (scenario.fronts_actifs?.length) {
    md += "## Fronts actifs dans ce scenario\n\n";
    for (const front of scenario.fronts_actifs) {
      md += `- ${linkFront(front.id_front, front.nom)}${front.etat_initial ? ` - ${inline(front.etat_initial)}` : ""}\n`;
    }
    md += "\n";
  }

  if (overview.ce_que_les_pj_savent?.length) md += `## Ce que les PJ savent\n\n${bulletList(overview.ce_que_les_pj_savent)}`;
  if (overview.ce_que_les_pj_doivent_decouvrir?.length) md += `## Ce que les PJ doivent decouvrir\n\n${bulletList(overview.ce_que_les_pj_doivent_decouvrir)}`;
  if (overview.structure || overview.structure_narrative) md += `## Structure\n\n${renderValue(overview.structure || overview.structure_narrative, 3)}`;

  md += renderRemaining(scenario, handled, 2);
  md += `\n---\n\nRetour: ${wiki("00 - Accueil.md", "Accueil")} | ${wiki("Scenarios/Index scenarios.md", "Index scenarios")}\n`;
  return md;
}

function renderSceneNote(record, sceneRecords, effetsFrontsParScene) {
  const { scenario, acte, scene, order } = record;
  const allScenarioScenes = sceneRecords.filter((item) => item.scenario.id === scenario.id);
  const currentIndex = allScenarioScenes.findIndex((item) => item.scene.id === scene.id);
  const previous = currentIndex > 0 ? allScenarioScenes[currentIndex - 1] : null;
  const next = currentIndex < allScenarioScenes.length - 1 ? allScenarioScenes[currentIndex + 1] : null;
  const pnjIds = unique([...asArray(scene.idsPnj), ...asArray(scene.idsPnjImpliques)]);
  const effects = asArray(effetsFrontsParScene?.[scene.id]);
  const handled = new Set([
    "id",
    "titre",
    "type",
    "resume_mj",
    "idLieu",
    "idsPnj",
    "idsPnjImpliques",
    "texte_a_lire",
    "objectif",
    "contexte_mj",
    "defis",
    "indices",
    "transitions",
    "navigation",
  ]);

  let md = frontmatter({
    type: "scene",
    id: scene.id,
    scenario: scenario.id,
    acte: acte.titre || scene.acte,
    ordre: order,
  });
  md += `# ${scene.titre}\n\n`;
  md += `**Scenario:** ${linkScenario(scenario.id, scenario.titre)}\n\n`;
  if (acte.titre || scene.acte) md += `**Acte:** ${inline(acte.titre || scene.acte)}\n\n`;
  if (scene.type) md += `**Type:** ${inline(scene.type)}\n\n`;
  if (scene.idLieu) md += `**Lieu:** ${linkLocation(scene.idLieu)}\n\n`;
  if (pnjIds.length) md += `**PNJ:** ${pnjLinks(pnjIds)}\n\n`;
  md += `**Navigation:** ${previous ? linkScene(previous.scene.id, "Scene precedente") : "_Debut du scenario_"} | ${next ? linkScene(next.scene.id, "Scene suivante") : "_Fin du scenario_"}\n\n`;

  if (scene.resume_mj) md += `## Resume MJ\n\n${paragraph(scene.resume_mj)}`;
  if (scene.objectif) md += `## Objectif\n\n${paragraph(scene.objectif)}`;
  if (scene.texte_a_lire) md += `## Texte a lire\n\n${paragraph(scene.texte_a_lire)}`;
  if (scene.contexte_mj) md += `## Contexte MJ\n\n${renderValue(scene.contexte_mj, 3)}`;

  if (scene.defis?.length) {
    md += "## Defis\n\n";
    md += "| Compétence | Difficulté D100 | Réussite | Échec |\n|---|---|---|---|\n";
    for (const def of scene.defis) {
      md += `| ${tableCell(def.competence || def.jet || "")} | ${tableCell(def.difficulte || "")} | ${tableCell(def.reussite || "")} | ${tableCell(def.echec || "")} |\n`;
    }
    md += "\n";
  }

  if (scene.indices?.length) {
    md += "## Indices\n\n";
    for (const indice of scene.indices) {
      md += `### ${indice.indice || indice.titre || "Indice"}\n\n${renderObject(indice, 4, new Set(["indice", "titre"]))}`;
    }
  }

  if (effects.length) {
    md += "## Effets de fronts\n\n";
    for (const effect of effects) {
      md += `- **${linkFront(effect.frontId)}** (${inline(effect.horlogeId || "")}) : ${inline(effect.effet || "")}`;
      if (effect.declencheur) md += ` — ${inline(effect.declencheur)}`;
      if (effect.consequence) md += `<br>${inline(effect.consequence)}`;
      md += "\n";
    }
    md += "\n";
  }

  if (scene.navigation) {
    md += "## Navigation MJ\n\n";
    if (scene.navigation.sorties_jouables?.length) {
      md += "### Sorties jouables\n\n";
      for (const sortie of scene.navigation.sorties_jouables) {
        const destination = sortie.sceneId ? linkScene(sortie.sceneId) : "_Sans destination_";
        md += `- **Vers ${destination}**: ${inline(sortie.condition || sortie.type || "")}`;
        if (sortie.moteur) md += `<br>${inline(sortie.moteur)}`;
        if (sortie.accroche_mj) md += `<br>Accroche MJ: ${inline(sortie.accroche_mj)}`;
        md += "\n";
      }
      md += "\n";
    }
    md += renderRemaining(scene.navigation, new Set(["sorties_jouables"]), 3);
  }

  if (scene.transitions) md += `## Transitions\n\n${renderValue(scene.transitions, 3)}`;
  md += renderRemaining(scene, handled, 2);
  md += `\n---\n\nRetour: ${linkScenario(scenario.id, scenario.titre)} | ${wiki("Scenarios/Index scenes.md", "Index scenes")}\n`;
  return md;
}

function renderPnjNote(pnj, appearances, imageRel) {
  const handled = new Set([
    "id",
    "nom",
    "role",
    "categorie",
    "image",
    "faction",
    "race",
    "description",
    "notes",
    "interpretation",
    "impulsion",
    "degats",
    "armure",
    "vie",
    "etiquettes",
    "actionsMJ",
    "antagoniste",
    "disposition",
    "origine",
    "couleur",
    "usageNarratif",
  ]);
  let md = frontmatter({
    type: "pnj",
    id: pnj.id,
    categorie: pnj.categorie,
    faction: pnj.faction,
    antagoniste: pnj.antagoniste === true,
  });
  md += `# ${pnj.nom}\n\n`;
  if (imageRel) md += `${embed(imageRel)}\n\n`;
  if (pnj.role) md += `**Rôle :** ${inline(pnj.role)}\n\n`;
  if (pnj.race) md += `**Race :** ${inline(pnj.race)}\n\n`;
  if (pnj.faction) md += `**Faction :** ${linkFaction(pnj.faction)}\n\n`;
  if (pnj.categorie) md += `**Catégorie :** ${inline(pnj.categorie)}\n\n`;
  if (pnj.impulsion) md += `## Impulsion\n\n${paragraph(pnj.impulsion)}`;
  if (pnj.description) md += `## Description\n\n${paragraph(pnj.description)}`;

  if (pnj.interpretation) {
    md += "## Interprétation\n\n";
    if (pnj.interpretation.accroche) md += `- **Accroche :** ${inline(pnj.interpretation.accroche)}\n`;
    if (pnj.interpretation.objectif) md += `- **Objectif :** ${inline(pnj.interpretation.objectif)}\n`;
    if (pnj.interpretation.attitude) md += `- **Attitude :** ${inline(pnj.interpretation.attitude)}\n`;
    md += "\n";
  }

  if (pnj.actionsMJ?.length) md += `## Actions MJ\n\n${bulletList(pnj.actionsMJ)}`;
  if (pnj.etiquettes?.length) md += `## Étiquettes\n\n${bulletList(pnj.etiquettes)}`;

  md += "## Jeu / combat\n\n";
  if (pnj.degats) md += `- **Dégâts :** ${pnj.degats.valeur ?? "Non combattant"}${pnj.degats.description ? ` (${inline(pnj.degats.description)})` : ""}\n`;
  if (pnj.armure) md += `- **Armure :** ${pnj.armure.valeur ?? 0}${pnj.armure.description ? ` (${inline(pnj.armure.description)})` : ""}\n`;
  if (pnj.vie) {
    const labelsVie = {
      serieuse: "sérieuse",
      critique: "critique",
      brise: "brisée",
      mortelle: "mortelle",
      en_danger: "en danger",
      hors_jeu: "hors jeu",
    };
    const vie =
      pnj.vie.type === "points"
        ? `${pnj.vie.points ?? pnj.vie.max}/${pnj.vie.max}`
        : asArray(pnj.vie.cases).map((etat) => labelsVie[etat] ?? etat).join(", ");
    md += `- **Vie :** ${inline(vie)}\n`;
  }
  md += "\n";

  const items = asArray(appearances.get(pnj.id));
  if (items.length) {
    md += "## Liens utiles\n\n";
    const scenarios = unique(items.filter((item) => item.type === "scenario").map((item) => item.scenario.id));
    const scenes = unique(items.filter((item) => item.type === "scene").map((item) => item.record.scene.id));
    const factions = unique(items.filter((item) => item.type === "faction").map((item) => item.faction.nom));
    if (scenarios.length) md += `- **Scénarios :** ${scenarios.map((id) => linkScenario(id)).join(", ")}\n`;
    if (scenes.length) md += `- **Scènes :** ${scenes.map((id) => linkScene(id)).join(", ")}\n`;
    if (factions.length) md += `- **Factions :** ${factions.map((name) => linkFaction(name)).join(", ")}\n`;
    md += "\n";
  }

  if (pnj.notes) md += `## Notes\n\n${paragraph(pnj.notes)}`;
  md += renderRemaining(pnj, handled, 2);
  md += `\n---\n\nRetour: ${wiki("PNJ/Index PNJ.md", "Index PNJ")}\n`;
  return md;
}

function renderFactionNote(faction) {
  const handled = new Set(["nom", "type", "description", "idsPnj", "membres_cles", "hierarchie", "objectifs", "alliances", "forces_militaires"]);
  let md = frontmatter({ type: "faction", nom: faction.nom, categorie: faction.type });
  md += `# ${faction.nom}\n\n`;
  if (faction.type) md += `**Type:** ${inline(faction.type)}\n\n`;
  if (faction.description) md += `## Description\n\n${paragraph(faction.description)}`;

  if (faction.objectifs) md += `## Objectifs\n\n${renderValue(faction.objectifs, 3)}`;
  if (faction.membres_cles?.length || faction.idsPnj?.length) {
    md += "## Membres cles\n\n";
    const ids = unique([...asArray(faction.idsPnj), ...asArray(faction.membres_cles).map((m) => m.id)]);
    for (const id of ids) {
      const member = asArray(faction.membres_cles).find((item) => item.id === id);
      md += `- ${linkPnj(id, member?.nom)}${member?.role ? ` - ${inline(member.role)}` : ""}\n`;
    }
    md += "\n";
  }

  if (faction.hierarchie?.length) {
    md += "## Hierarchie\n\n";
    for (const item of faction.hierarchie) {
      md += `- **${inline(item.role)}**`;
      if (item.idPnj) md += `: ${linkPnj(item.idPnj)}`;
      if (item.notes) md += ` - ${inline(item.notes)}`;
      md += "\n";
    }
    md += "\n";
  }

  if (faction.alliances?.length) {
    md += "## Alliances et rivalites\n\n";
    for (const alliance of faction.alliances) {
      md += `- **${inline(alliance.type || "lien")}** avec ${linkFaction(alliance.faction)}: ${inline(alliance.description || "")}\n`;
    }
    md += "\n";
  }

  if (faction.forces_militaires) md += `## Forces et faiblesses\n\n${renderValue(faction.forces_militaires, 3)}`;
  md += renderRemaining(faction, handled, 2);
  md += `\n---\n\nRetour: ${wiki("Factions/Index factions.md", "Index factions")}\n`;
  return md;
}

function renderFrontNote(front, sceneRecords) {
  const handled = new Set(["id", "nom", "type", "enjeu", "description", "questionDramatique", "forcesActives", "signesVisibles", "scenesJouables", "leviersPJ", "menaces"]);
  let md = frontmatter({ type: "front", id: front.id, categorie: front.type });
  md += `# ${front.nom}\n\n`;
  if (front.type) md += `**Type:** ${inline(front.type)}\n\n`;
  if (front.enjeu) md += `## Enjeu\n\n${paragraph(front.enjeu)}`;
  if (front.description) md += `## Description\n\n${paragraph(front.description)}`;
  if (front.questionDramatique) md += `## Question dramatique\n\n${paragraph(front.questionDramatique)}`;

  if (front.forcesActives?.length) {
    md += "## Forces actives\n\n";
    for (const force of front.forcesActives) {
      md += `### ${force.nom}\n\n`;
      if (force.idsPnj?.length) md += `**PNJ:** ${pnjLinks(force.idsPnj)}\n\n`;
      if (force.role) md += paragraph(force.role);
    }
  }

  if (front.signesVisibles?.length) md += `## Signes visibles\n\n${bulletList(front.signesVisibles)}`;
  if (front.scenesJouables) md += `## Scenes jouables\n\n${renderValue(front.scenesJouables, 3)}`;
  if (front.leviersPJ?.length) md += `## Leviers PJ\n\n${bulletList(front.leviersPJ)}`;

  const linkedScenes = sceneRecords.filter((record) => {
    const text = JSON.stringify(record.scene);
    return text.includes(front.id) || text.includes(front.nom);
  });
  if (linkedScenes.length) {
    md += "## Scenes liees\n\n";
    for (const record of linkedScenes) md += `- ${linkScene(record.scene.id, record.scene.titre)} (${linkScenario(record.scenario.id, record.scenario.titre)})\n`;
    md += "\n";
  }

  if (front.menaces?.length) {
    md += "## Menaces\n\n";
    for (const menace of front.menaces) {
      md += `### ${menace.nom}\n\n`;
      if (menace.idsPnj?.length) md += `**PNJ:** ${pnjLinks(menace.idsPnj)}\n\n`;
      md += renderObject(menace, 4, new Set(["nom", "idsPnj"]));
    }
  }

  md += renderRemaining(front, handled, 2);
  md += `\n---\n\nRetour: ${wiki("Fronts/Index fronts.md", "Index fronts")}\n`;
  return md;
}

function renderLayerNote(layer, id) {
  let md = frontmatter({ type: "couche", id });
  md += `# ${layer.nom || layer.titre || id}\n\n`;
  md += renderObject(layer, 2, new Set(["nom", "titre"]));
  md += `\n---\n\nRetour: ${wiki("Fronts/Index fronts.md", "Index fronts")}\n`;
  return md;
}

function renderZoneNote(zone) {
  const handled = new Set(["id", "nom", "resume", "details", "emplacements"]);
  let md = frontmatter({ type: "zone", id: zone.id });
  md += `# ${zone.nom}\n\n`;
  if (zone.resume) md += paragraph(zone.resume);
  if (zone.details?.length) md += `## Details\n\n${bulletList(zone.details)}`;
  if (zone.emplacements?.length) {
    md += "## Lieux\n\n";
    for (const location of zone.emplacements) md += `- ${linkLocation(location.id, location.nom)}\n`;
    md += "\n";
  }
  md += renderRemaining(zone, handled, 2);
  md += `\n---\n\nRetour: ${wiki("Univers/Index univers.md", "Index univers")}\n`;
  return md;
}

function renderLocationNote(location, appearances) {
  const handled = new Set(["id", "nom", "resume", "details", "idsPnj", "zoneId", "zoneNom", "sceneIds", "scenarioIds", "roleScenario", "source"]);
  let md = frontmatter({ type: "lieu", id: location.id, zone: location.zoneId || location.zoneNom });
  md += `# ${location.nom}\n\n`;
  if (location.zoneId) md += `**Zone:** ${wiki(maps.zones.get(location.zoneId), location.zoneNom)}\n\n`;
  if (location.resume) md += paragraph(location.resume);
  if (location.roleScenario) md += `## Role en scenario\n\n${paragraph(location.roleScenario)}`;
  if (location.details?.length) md += `## Details\n\n${bulletList(location.details)}`;
  if (location.idsPnj?.length) md += `## PNJ presents\n\n${pnjLinks(location.idsPnj)}\n\n`;

  const items = asArray(appearances.get(location.id));
  if (items.length) {
    md += "## Apparitions\n\n";
    const scenarios = unique(items.filter((item) => item.type === "scenario").map((item) => item.scenario.id));
    const scenes = unique(items.filter((item) => item.type === "scene").map((item) => item.record.scene.id));
    if (scenarios.length) md += `- **Scenarios:** ${scenarios.map((id) => linkScenario(id)).join(", ")}\n`;
    if (scenes.length) md += `- **Scenes:** ${scenes.map((id) => linkScene(id)).join(", ")}\n`;
    md += "\n";
  }

  md += renderRemaining(location, handled, 2);
  md += `\n---\n\nRetour: ${wiki("Univers/Index univers.md", "Index univers")}\n`;
  return md;
}

function renderRevelationNote(scenario, revelation) {
  const handled = new Set(["id", "titre", "resume", "sources", "declencheur", "plan_b", "consequence_si_ratee"]);
  let md = frontmatter({ type: "revelation", id: revelation.id, scenario: scenario.id });
  md += `# ${revelation.titre}\n\n`;
  md += `**Scenario:** ${linkScenario(scenario.id, scenario.titre)}\n\n`;
  if (revelation.resume) md += `## Resume\n\n${paragraph(revelation.resume)}`;
  if (revelation.sources?.length) md += `## Sources\n\n${bulletList(revelation.sources)}`;
  if (revelation.declencheur) md += `## Declencheur\n\n${paragraph(revelation.declencheur)}`;
  if (revelation.plan_b) md += `## Plan B\n\n${paragraph(revelation.plan_b)}`;
  if (revelation.consequence_si_ratee) md += `## Consequence si ratee\n\n${paragraph(revelation.consequence_si_ratee)}`;
  md += renderRemaining(revelation, handled, 2);
  md += `\n---\n\nRetour: ${linkScenario(scenario.id, scenario.titre)} | ${wiki("Revelations/Index revelations.md", "Index revelations")}\n`;
  return md;
}

function renderPatientNote(patient, suivi) {
  let md = frontmatter({ type: "patient", code: patient.code, statut: suivi?.statutInitial, priorite: suivi?.prioriteInitiale });
  md += `# ${patient.patient}\n\n`;
  md += `**Code:** ${inline(patient.code)}\n\n`;
  md += `**Origine:** ${inline(patient.origine)}\n\n`;
  md += `**Admission:** ${inline(patient.admission)}\n\n`;
  md += `**Priorite initiale:** ${inline(suivi?.prioriteInitiale || "")}\n\n`;
  md += `**Statut initial:** ${inline(suivi?.statutInitial || "")}\n\n`;
  md += `## Indication\n\n${paragraph(patient.indication)}`;
  md += `## Dosage\n\n${paragraph(patient.dosage)}`;
  md += `## Resultat\n\n${paragraph(patient.resultat)}`;
  md += `## Localisation / piste\n\n${paragraph(patient.localisation)}`;
  md += `\n---\n\nRetour: ${wiki("Campagne/Registre des patients - Elian Voss.md", "Registre des patients")}\n`;
  return md;
}

function renderCampaignStateNote(etat) {
  let md = frontmatter({ type: "suivi_campagne", version: etat.version });
  md += "# Suivi de campagne\n\n";

  if (etat.indices?.length) {
    md += "## Indices\n\n";
    md += "| Indice | Scenario | Scene | Statut | Resume |\n|---|---|---|---|---|\n";
    for (const indice of etat.indices) {
      md += `| ${tableCell(indice.nom)} | ${tableCell(linkScenario(indice.scenarioId))} | ${tableCell(linkScene(indice.sceneId))} | ${tableCell(indice.statutInitial)} | ${tableCell(indice.resume)} |\n`;
    }
    md += "\n";
  }

  if (etat.preuves?.length) {
    md += "## Preuves\n\n";
    md += "| Preuve | Scene | Statut | Usage |\n|---|---|---|---|\n";
    for (const preuve of etat.preuves) {
      md += `| ${tableCell(preuve.nom)} | ${tableCell(linkScene(preuve.sceneId))} | ${tableCell(preuve.statutInitial)} | ${tableCell(preuve.usage)} |\n`;
    }
    md += "\n";
  }

  if (etat.allies?.length) {
    md += "## Allies et contacts\n\n";
    for (const ally of etat.allies) {
      md += `- ${linkPnj(ally.id, ally.nom)} - **${inline(ally.statutInitial)}**: ${inline(ally.role)}\n`;
    }
    md += "\n";
  }

  if (etat.fronts?.length) {
    md += "## Fronts\n\n";
    for (const front of etat.fronts) {
      md += `- ${linkFront(front.id, front.nom)} - ${front.segmentInitial}/${front.max}, **${inline(front.statutInitial)}**: ${inline(front.resume)}\n`;
    }
    md += "\n";
  }

  if (etat.victimes?.length) {
    md += "## Victimes\n\n";
    md += "| Compteur | Valeur initiale |\n|---|---:|\n";
    for (const victime of etat.victimes) md += `| ${tableCell(victime.nom)} | ${tableCell(victime.valeurInitiale)} |\n`;
    md += "\n";
  }

  if (etat.choix?.length) {
    md += "## Choix\n\n";
    for (const choix of etat.choix) {
      md += `### ${choix.nom}\n\n`;
      md += `Valeur initiale: **${inline(choix.valeurInitiale)}**\n\n`;
      if (choix.options?.length) md += bulletList(choix.options.map((option) => `${option.id} - ${option.nom}`));
    }
  }

  md += `\n---\n\nRetour: ${wiki("00 - Accueil.md", "Accueil")}\n`;
  return md;
}

function renderPatientRegistryNote(registre, suiviPatients) {
  const suiviByName = new Map(asArray(suiviPatients).map((item) => [item.nom, item]));
  let md = frontmatter({ type: "registre", id: registre.id, scene: registre.scene });
  md += `# ${registre.titre}\n\n`;
  if (registre.scene) md += `**Scene:** ${linkScene(registre.scene)}\n\n`;
  if (registre.type) md += `**Type:** ${inline(registre.type)}\n\n`;
  if (registre.resume) md += `## Resume\n\n${paragraph(registre.resume)}`;
  if (registre.procedureSuivi) md += `## Procedure de suivi\n\n${renderValue(registre.procedureSuivi, 3)}`;

  md += "## Patients\n\n";
  md += "| Code | Patient | Priorite | Statut | Origine | Localisation |\n|---|---|---|---|---|---|\n";
  for (const patient of asArray(registre.lignes)) {
    const suivi = suiviByName.get(patient.patient);
    md += `| ${tableCell(patient.code)} | ${tableCell(linkPatient(patient.code, patient.patient))} | ${tableCell(suivi?.prioriteInitiale || "")} | ${tableCell(suivi?.statutInitial || "")} | ${tableCell(patient.origine)} | ${tableCell(patient.localisation)} |\n`;
  }
  md += `\n---\n\nRetour: ${wiki("Campagne/Suivi de campagne.md", "Suivi de campagne")}\n`;
  return md;
}

function renderUniverseOverview(universeData) {
  const handled = new Set(["id", "titre", "introduction", "contexte", "sections", "themes", "zones"]);
  let md = frontmatter({ type: "univers", id: universeData.id });
  md += `# ${universeData.titre || "Univers"}\n\n`;
  if (universeData.introduction) md += `## Introduction\n\n${paragraph(universeData.introduction)}`;
  if (universeData.contexte) md += `## Contexte\n\n${paragraph(universeData.contexte)}`;
  if (universeData.sections?.length) md += `## Sections\n\n${renderValue(universeData.sections, 3)}`;
  if (universeData.themes?.length) md += `## Themes\n\n${renderValue(universeData.themes, 3)}`;
  md += renderRemaining(universeData, handled, 2);
  md += `\n---\n\nRetour: ${wiki("Univers/Index univers.md", "Index univers")}\n`;
  return md;
}

function renderIndex(title, entries, back = "00 - Accueil.md") {
  let md = frontmatter({ type: "index" });
  md += `# ${title}\n\n`;
  for (const entry of entries) md += `- ${entry}\n`;
  md += `\n---\n\nRetour: ${wiki(back, "Accueil")}\n`;
  return md;
}

function renderPnjIndex(pnjList, factionsData) {
  const groups = new Map();
  for (const pnj of asArray(pnjList)) {
    const factionName = resolvePnjFactionName(pnj, factionsData);
    const list = groups.get(factionName) || [];
    list.push(pnj);
    groups.set(factionName, list);
  }

  let md = frontmatter({ type: "index" });
  md += "# Index PNJ\n\n";
  for (const factionName of [...groups.keys()].sort((a, b) => a.localeCompare(b, "fr"))) {
    const list = groups.get(factionName).sort((a, b) => displayName(a.nom).localeCompare(displayName(b.nom), "fr"));
    md += `## ${factionName}\n\n`;
    if (maps.factions.has(factionName)) md += `Faction: ${linkFaction(factionName)}\n\n`;
    for (const pnj of list) {
      md += `- ${linkPnj(pnj.id, displayName(pnj.nom))}`;
      if (pnj.role) md += ` - ${inline(pnj.role)}`;
      md += "\n";
    }
    md += "\n";
  }
  md += `---\n\nRetour: ${wiki("00 - Accueil.md", "Accueil")}\n`;
  return md;
}

function renderUniverseIndex(universeData) {
  let md = frontmatter({ type: "index" });
  md += "# Index univers\n\n";
  md += `- ${wiki("Univers/Valombre.md", "Valombre")}\n\n`;

  md += "## Zones et lieux\n\n";
  for (const zone of asArray(universeData.zones)) {
    md += `### ${zone.nom}\n\n`;
    md += `- ${wiki(maps.zones.get(zone.id), `Vue zone - ${zone.nom}`)}\n`;
    const locations = [...dataMaps.locationById.values()]
      .filter((location) => location.zoneId === zone.id)
      .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
    for (const location of locations) {
      md += `- ${wiki(maps.locations.get(location.id), location.nom)}\n`;
    }
    md += "\n";
  }

  const orphanLocations = [...dataMaps.locationById.values()]
    .filter((location) => !location.zoneId)
    .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
  if (orphanLocations.length) {
    md += "## Autres lieux\n\n";
    for (const location of orphanLocations) md += `- ${wiki(maps.locations.get(location.id), location.nom)}\n`;
    md += "\n";
  }

  md += `---\n\nRetour: ${wiki("00 - Accueil.md", "Accueil")}\n`;
  return md;
}

async function importExistingMarkdown(vaultDir) {
  const docsDir = path.join(ROOT, "Docs");
  if (!(await exists(docsDir))) return [];

  const imported = [];
  async function walk(dir) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        const relative = toPosix(path.relative(docsDir, full));
        const rel = uniqueRelPath(path.posix.join("Documents importes", relative));
        const body = await fs.readFile(full, "utf8");
        const content = `${frontmatter({ type: "document_importe", source: `Docs/${relative}` })}# ${path.posix.basename(relative, ".md")}\n\n${body}\n`;
        await writeVaultFile(vaultDir, rel, content);
        imported.push(rel);
      }
    }
  }
  await walk(docsDir);
  return imported;
}

function verifyLinks() {
  const unresolved = [];
  const pattern = /!?\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  for (const note of generatedNotes) {
    let match;
    while ((match = pattern.exec(note.content))) {
      const target = match[1].trim();
      if (target.includes("://")) continue;
      const normalized = target.replace(/\\/g, "/").replace(/\.md$/i, "");
      const isMedia = /\.[a-z0-9]{2,5}$/i.test(target);
      if (isMedia) {
        if (!mediaTargets.has(target.replace(/\\/g, "/"))) unresolved.push(`${note.relPath} -> ${target}`);
      } else if (!noteTargets.has(normalized)) {
        unresolved.push(`${note.relPath} -> ${target}`);
      }
    }
  }
  return unresolved;
}

async function main() {
  const data = await loadData();
  const sceneRecords = collectSceneRecords(data.scenariosData);
  collectLocations(data, sceneRecords);
  registerPaths(data, sceneRecords);

  const vaultDir = await prepareVaultDir();
  const pnjAppearances = collectPnjAppearances(sceneRecords, data.scenariosData, data.factionsData);
  const locationAppearances = collectLocationAppearances(sceneRecords, data.scenariosData);
  const imageMap = await copyPnjImages(vaultDir, data.tousLesPnj);

  await writeVaultFile(vaultDir, ".obsidian/app.json", JSON.stringify({ alwaysUpdateLinks: true, newFileLocation: "folder", newFileFolderPath: "Inbox" }, null, 2), false);
  await writeVaultFile(vaultDir, ".obsidian/appearance.json", JSON.stringify({ theme: "obsidian" }, null, 2), false);

  const importedDocs = await importExistingMarkdown(vaultDir);

  for (const [index, scenario] of asArray(data.scenariosData).entries()) {
    await writeVaultFile(vaultDir, maps.scenarios.get(scenario.id), renderScenarioNote(scenario, index));
  }

  for (const record of sceneRecords) {
    await writeVaultFile(vaultDir, maps.scenes.get(record.scene.id), renderSceneNote(record, sceneRecords, data.effetsFrontsParScene));
  }

  for (const pnj of asArray(data.tousLesPnj)) {
    await writeVaultFile(vaultDir, maps.pnj.get(pnj.id), renderPnjNote(pnj, pnjAppearances, imageMap.get(pnj.id)));
  }

  for (const faction of asArray(data.factionsData)) {
    await writeVaultFile(vaultDir, maps.factions.get(faction.nom), renderFactionNote(faction));
  }

  for (const front of asArray(data.frontsData)) {
    await writeVaultFile(vaultDir, maps.fronts.get(front.id), renderFrontNote(front, sceneRecords));
  }

  for (const [index, layer] of asArray(data.couchesCampagneData).entries()) {
    const id = layer.id || `couche_${index + 1}`;
    await writeVaultFile(vaultDir, maps.layers.get(id), renderLayerNote(layer, id));
  }

  for (const zone of dataMaps.zoneById.values()) {
    await writeVaultFile(vaultDir, maps.zones.get(zone.id), renderZoneNote(zone));
  }

  for (const location of dataMaps.locationById.values()) {
    await writeVaultFile(vaultDir, maps.locations.get(location.id), renderLocationNote(location, locationAppearances));
  }

  for (const scenario of asArray(data.scenariosData)) {
    for (const revelation of asArray(scenario.revelations_indispensables)) {
      await writeVaultFile(vaultDir, maps.revelations.get(`${scenario.id}:${revelation.id}`), renderRevelationNote(scenario, revelation));
    }
  }

  const suiviByName = new Map(asArray(data.suiviPatientsElianInitial).map((item) => [item.nom, item]));
  for (const patient of asArray(data.registrePatientsElianVoss?.lignes)) {
    await writeVaultFile(vaultDir, maps.patients.get(patient.code), renderPatientNote(patient, suiviByName.get(patient.patient)));
  }

  await writeVaultFile(vaultDir, "Campagne/Suivi de campagne.md", renderCampaignStateNote(data.etatCampagneInitial));
  await writeVaultFile(vaultDir, "Campagne/Registre des patients - Elian Voss.md", renderPatientRegistryNote(data.registrePatientsElianVoss, data.suiviPatientsElianInitial));
  await writeVaultFile(vaultDir, "Univers/Valombre.md", renderUniverseOverview(data.universeData));

  await writeVaultFile(
    vaultDir,
    "Scenarios/Index scenarios.md",
    renderIndex(
      "Index scenarios",
      asArray(data.scenariosData).map((scenario) => linkScenario(scenario.id, scenario.titre)),
    ),
  );

  await writeVaultFile(
    vaultDir,
    "Scenarios/Index scenes.md",
    renderIndex(
      "Index scenes",
      sceneRecords.map((record) => `${linkScene(record.scene.id, record.scene.titre)} - ${linkScenario(record.scenario.id, record.scenario.titre)}`),
    ),
  );

  await writeVaultFile(
    vaultDir,
    "PNJ/Index PNJ.md",
    renderPnjIndex(data.tousLesPnj, data.factionsData),
  );

  await writeVaultFile(
    vaultDir,
    "Factions/Index factions.md",
    renderIndex(
      "Index factions",
      asArray(data.factionsData).map((faction) => linkFaction(faction.nom)),
    ),
  );

  await writeVaultFile(
    vaultDir,
    "Fronts/Index fronts.md",
    renderIndex(
      "Index fronts",
      [
        ...asArray(data.frontsData).map((front) => linkFront(front.id, front.nom)),
        ...asArray(data.couchesCampagneData).map((layer, index) => {
          const id = layer.id || `couche_${index + 1}`;
          return wiki(maps.layers.get(id), layer.nom || layer.titre || id);
        }),
      ],
    ),
  );

  await writeVaultFile(
    vaultDir,
    "Univers/Index univers.md",
    renderUniverseIndex(data.universeData),
  );

  await writeVaultFile(
    vaultDir,
    "Revelations/Index revelations.md",
    renderIndex(
      "Index revelations",
      asArray(data.scenariosData).flatMap((scenario) =>
        asArray(scenario.revelations_indispensables).map((revelation) => wiki(maps.revelations.get(`${scenario.id}:${revelation.id}`), `${scenario.titre} - ${revelation.titre}`)),
      ),
    ),
  );

  await writeVaultFile(
    vaultDir,
    "Documents importes/Index documents importes.md",
    renderIndex(
      "Index documents importes",
      importedDocs.length ? importedDocs.map((rel) => wiki(rel, path.posix.basename(rel, ".md"))) : ["_Aucun document Markdown importe._"],
    ),
  );

  await writeVaultFile(
    vaultDir,
    "00 - Accueil.md",
    `${frontmatter({ type: "accueil" })}# Ombre de la Spirale - Vault Obsidian\n\n` +
      "## Entrees principales\n\n" +
      `- ${wiki("Scenarios/Index scenarios.md", "Scenarios")}\n` +
      `- ${wiki("Scenarios/Index scenes.md", "Scenes")}\n` +
      `- ${wiki("PNJ/Index PNJ.md", "PNJ")}\n` +
      `- ${wiki("Factions/Index factions.md", "Factions")}\n` +
      `- ${wiki("Fronts/Index fronts.md", "Fronts")}\n` +
      `- ${wiki("Univers/Index univers.md", "Univers et lieux")}\n` +
      `- ${wiki("Revelations/Index revelations.md", "Revelations")}\n` +
      `- ${wiki("Campagne/Suivi de campagne.md", "Suivi de campagne")}\n` +
      `- ${wiki("Campagne/Registre des patients - Elian Voss.md", "Registre des patients")}\n` +
      `- ${wiki("Documents importes/Index documents importes.md", "Documents importes")}\n\n` +
      "## Statistiques\n\n" +
      `- Scenarios: ${asArray(data.scenariosData).length}\n` +
      `- Scenes: ${sceneRecords.length}\n` +
      `- PNJ: ${asArray(data.tousLesPnj).length}\n` +
      `- Factions: ${asArray(data.factionsData).length}\n` +
      `- Fronts: ${asArray(data.frontsData).length}\n` +
      `- Zones: ${dataMaps.zoneById.size}\n` +
      `- Lieux: ${dataMaps.locationById.size}\n` +
      `- Patients: ${asArray(data.registrePatientsElianVoss?.lignes).length}\n\n` +
      "Ce dossier est genere depuis les donnees du projet. Pour le regenerer, lancer `node scripts/export_obsidian.mjs` depuis la racine du projet.\n",
  );

  const unresolved = verifyLinks();
  const summary = {
    vaultDir,
    notes: generatedNotes.length,
    images: mediaTargets.size,
    scenarios: asArray(data.scenariosData).length,
    scenes: sceneRecords.length,
    pnj: asArray(data.tousLesPnj).length,
    factions: asArray(data.factionsData).length,
    fronts: asArray(data.frontsData).length,
    zones: dataMaps.zoneById.size,
    lieux: dataMaps.locationById.size,
    patients: asArray(data.registrePatientsElianVoss?.lignes).length,
    importedDocs: importedDocs.length,
    unresolvedLinks: unresolved.length,
  };

  if (unresolved.length) {
    await writeVaultFile(vaultDir, "Rapport liens non resolus.md", `${frontmatter({ type: "rapport" })}# Rapport liens non resolus\n\n${bulletList(unresolved)}`);
  }

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
