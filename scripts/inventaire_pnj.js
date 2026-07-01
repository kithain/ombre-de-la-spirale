/**
 * Inventaire des PNJ : croise scènes, fronts, lieux.
 * Usage : node scripts/inventaire_pnj.js
 * Lit les fichiers source directement (pas d'import ESM).
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const srcDir = join(rootDir, 'src');

// ─── Helpers ──────────────────────────────────────────────

function lireFichier(relPath) {
  return readFileSync(join(srcDir, relPath), 'utf-8');
}

function extraireIdsDeTableau(content, champ) {
  const ids = [];
  const regex = new RegExp(`"?${champ}"?\\s*:\\s*\\[([^\\]]*)\\]`, 'g');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const inner = match[1];
    const idRegex = /"([^"]+)"/g;
    let idMatch;
    while ((idMatch = idRegex.exec(inner)) !== null) {
      ids.push(idMatch[1]);
    }
  }
  return ids;
}

function extraireTousIds(content, regex) {
  const ids = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    ids.push(match[1]);
  }
  return [...new Set(ids)];
}

// ─── 1. Tous les PNJ ──────────────────────────────────────

const pnjDir = join(srcDir, 'data', 'personnages');
const fichiersPnj = readdirSync(pnjDir).filter(f => f.startsWith('pnj') && f.endsWith('.js') && f !== 'pnj.js' && f !== 'pnjTemplate.js');
const tousLesPnj = [];

for (const fichier of fichiersPnj) {
  const content = lireFichier(join('data', 'personnages', fichier));
  const idRegex = /"?id"?\s*:\s*"([^"]+)"/g;
  const nomRegex = /"?nom"?\s*:\s*"([^"]+)"/g;
  const ids = extraireTousIds(content, idRegex);
  const noms = extraireTousIds(content, nomRegex);
  for (let i = 0; i < ids.length; i++) {
    tousLesPnj.push({ id: ids[i], nom: noms[i] || ids[i] });
  }
}

// ─── 2. PNJ dans les scènes ───────────────────────────────

const scenarioDir = join(srcDir, 'data', 'scenarios');
const fichiersScenario = readdirSync(scenarioDir).filter(f => f.startsWith('scenario') && f.endsWith('.js') && f !== 'scenarios.js');

const pnjDansScenesDirectes = new Set();
const pnjDansScenesImpliques = new Set();

for (const fichier of fichiersScenario) {
  const content = lireFichier(join('data', 'scenarios', fichier));
  const directs = extraireIdsDeTableau(content, 'idsPnj');
  const impliques = extraireIdsDeTableau(content, 'idsPnjImpliques');
  for (const id of directs) pnjDansScenesDirectes.add(id);
  for (const id of impliques) pnjDansScenesImpliques.add(id);
}

// ─── 3. PNJ dans les fronts ───────────────────────────────

const frontsContent = lireFichier('data/scenarios/fronts.js');
const pnjDansFronts = new Set(extraireIdsDeTableau(frontsContent, 'idsPnj'));

// ─── 4. PNJ dans les lieux ────────────────────────────────

const universeDir = join(srcDir, 'data', 'universe');
const fichiersUniverse = readdirSync(universeDir).filter(f => f.startsWith('universeZone_') && f.endsWith('.js'));
const pnjDansLieux = new Set();

for (const fichier of fichiersUniverse) {
  const content = lireFichier(join('data', 'universe', fichier));
  const ids = extraireIdsDeTableau(content, 'idsPnj');
  for (const id of ids) pnjDansLieux.add(id);
}

// ─── 5. PNJ liés via effetsFronts ─────────────────────────

const effetsContent = lireFichier('data/scenarios/effetsFronts.js');
const effetsCles = new Set();
const cléRegex = /^\s*(s\d_\w+)\s*:\s*\[/gm;
let cléMatch;
while ((cléMatch = cléRegex.exec(effetsContent)) !== null) {
  const reste = effetsContent.slice(cléMatch.index);
  const videRegex = new RegExp(`${cléMatch[1]}:\\s*\\[\\s*\\]`);
  if (!videRegex.test(reste.slice(0, 500))) {
    effetsCles.add(cléMatch[1]);
  }
}

const pnjParSceneId = new Map();
for (const fichier of fichiersScenario) {
  const content = lireFichier(join('data', 'scenarios', fichier));
  const sceneRegex = /"?id"?\s*:\s*"(s\d_[^"]+)"/g;
  let sceneMatch;
  while ((sceneMatch = sceneRegex.exec(content)) !== null) {
    const sceneId = sceneMatch[1];
    const chunk = content.slice(sceneMatch.index, sceneMatch.index + 3000);
    const ids = extraireIdsDeTableau(chunk, 'idsPnj');
    const idsImpl = extraireIdsDeTableau(chunk, 'idsPnjImpliques');
    pnjParSceneId.set(sceneId, [...ids, ...idsImpl]);
  }
}

const pnjViaEffetsFronts = new Set();
for (const sceneId of effetsCles) {
  const ids = pnjParSceneId.get(sceneId) || [];
  for (const id of ids) pnjViaEffetsFronts.add(id);
}

// ─── 6. Génération ────────────────────────────────────────

const sansSceneDirecte = [];
const sansSceneDuTout = [];
const sansFrontDirect = [];
const sansFrontDuTout = [];
const sansLieu = [];
const propositions = [];

for (const pnj of tousLesPnj) {
  const id = pnj.id;
  const aSceneDirecte = pnjDansScenesDirectes.has(id);
  const aSceneImpliquee = pnjDansScenesImpliques.has(id);
  const aScene = aSceneDirecte || aSceneImpliquee;
  const aFrontDirect = pnjDansFronts.has(id);
  const aFrontViaScene = pnjViaEffetsFronts.has(id) && !aFrontDirect;
  const aFront = aFrontDirect || aFrontViaScene;
  const aLieu = pnjDansLieux.has(id);

  if (!aSceneDirecte) sansSceneDirecte.push(id);
  if (!aScene) sansSceneDuTout.push(id);
  if (!aFrontDirect) sansFrontDirect.push(id);
  if (!aFront) sansFrontDuTout.push(id);
  if (!aLieu) sansLieu.push(id);

  let niveau;
  let justification;
  if (aScene) {
    niveau = "scene";
    justification = aSceneDirecte ? "Présent dans au moins une scène" : "Impliqué dans au moins une scène";
  } else if (aFront || aLieu) {
    niveau = "levier";
    const parts = [];
    if (aFrontDirect) parts.push("front direct");
    if (aFrontViaScene) parts.push("front via scène");
    if (aLieu) parts.push("lieu");
    justification = parts.join(", ");
  } else {
    niveau = "contexte";
    justification = "Pas de scène, front ou lieu";
  }

  propositions.push({ id, nom: pnj.nom, niveau, justification });
}

// ─── Affichage ────────────────────────────────────────────

console.log("═══════════════════════════════════════════════════════════");
console.log("  INVENTAIRE PNJ — Valombre");
console.log("═══════════════════════════════════════════════════════════");
console.log(`  Total PNJ : ${tousLesPnj.length}`);
console.log();

console.log("── 1. PNJ sans scène directe (pas dans idsPnj) ──────────────");
console.log(`  ${sansSceneDirecte.length} PNJ : ${sansSceneDirecte.join(", ") || "aucun"}`);
console.log();

console.log("── 2. PNJ sans scène du tout (ni direct ni impliqué) ────────");
console.log(`  ${sansSceneDuTout.length} PNJ : ${sansSceneDuTout.join(", ") || "aucun"}`);
console.log();

console.log("── 3. PNJ sans front direct ────────────────────────────────");
console.log(`  ${sansFrontDirect.length} PNJ : ${sansFrontDirect.join(", ") || "aucun"}`);
console.log();

console.log("── 4. PNJ sans front du tout (ni direct ni via scène) ──────");
console.log(`  ${sansFrontDuTout.length} PNJ : ${sansFrontDuTout.join(", ") || "aucun"}`);
console.log();

console.log("── 5. PNJ sans lieu ────────────────────────────────────────");
console.log(`  ${sansLieu.length} PNJ : ${sansLieu.join(", ") || "aucun"}`);
console.log();

console.log("── 6. Propositions usageNarratif ───────────────────────────");
const parNiveau = { scene: [], levier: [], contexte: [] };
for (const p of propositions) parNiveau[p.niveau].push(p);
console.log(`  scene (${parNiveau.scene.length}) : ${parNiveau.scene.map(p => p.id).join(", ")}`);
console.log();
console.log(`  levier (${parNiveau.levier.length}) :`);
for (const p of parNiveau.levier) {
  console.log(`    ${p.id} — ${p.justification}`);
}
console.log();
console.log(`  contexte (${parNiveau.contexte.length}) : ${parNiveau.contexte.map(p => p.id).join(", ")}`);
console.log();

console.log("── 7. PNJ sans rien (ni scène, ni front, ni lieu) ──────────");
const sansRien = propositions.filter(p => p.niveau === "contexte");
if (sansRien.length === 0) {
  console.log("  Aucun — tous les PNJ ont au moins un lien.");
} else {
  for (const p of sansRien) {
    console.log(`  ${p.id} (${p.nom}) — ${p.justification}`);
  }
}
console.log();
console.log("═══════════════════════════════════════════════════════════");
