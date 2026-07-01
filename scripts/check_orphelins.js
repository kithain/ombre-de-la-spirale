import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

let erreurs = 0;
let avertissements = 0;

// ─── Helpers ──────────────────────────────────────────────

function extraireTousIds(content, regex) {
  const ids = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    ids.push(match[1]);
  }
  return [...new Set(ids)];
}

function extraireIdsDeTableau(content, champ) {
  const ids = [];
  const regex = new RegExp(`${champ}:\\s*\\[([^\\]]*)\\]`, 'g');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const inner = match[1];
    const idRegex = /"([^"]+)"/g;
    let idMatch;
    while ((idMatch = idRegex.exec(inner)) !== null) {
      ids.push(idMatch[1]);
    }
  }
  return [...new Set(ids)];
}

function rapporterErreur(categorie, message) {
  console.error(`  [ERREUR] ${categorie}: ${message}`);
  erreurs++;
}

function rapporterAvertissement(categorie, message) {
  console.warn(`  [AVERT]  ${categorie}: ${message}`);
  avertissements++;
}

// ─── 1. PNJ : ids dans pnj.js ─────────────────────────────

function lireTousFichiersPnj() {
  const pnjDir = join(rootDir, 'src', 'data', 'personnages');
  const fichiers = readdirSync(pnjDir).filter(f => f.startsWith('pnj') && f.endsWith('.js') && f !== 'pnj.js' && f !== 'pnjTemplate.js');
  return fichiers.map(f => readFileSync(join(pnjDir, f), 'utf-8')).join('\n');
}

function extrairePnjIdsDePnjJs() {
  const content = lireTousFichiersPnj();
  return extraireTousIds(content, /"id":\s*"([^"]+)"/g);
}

function extraireImagesPnj() {
  const content = lireTousFichiersPnj();
  const images = [];
  const regex = /"image":\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    images.push(match[1]);
  }
  return images;
}

// ─── 2. PNJ : idsPnj dans les zones universe ──────────────

function extrairePnjIdsDesZones() {
  const universeDir = join(rootDir, 'src', 'data', 'universe');
  const files = readdirSync(universeDir).filter(f => f.startsWith('universeZone_') && f.endsWith('.js'));
  const allIds = new Set();
  const idsByZone = {};
  for (const file of files) {
    const content = readFileSync(join(universeDir, file), 'utf-8');
    const zoneName = file.replace('universeZone_', '').replace('.js', '');
    const ids = extraireIdsDeTableau(content, 'idsPnj');
    ids.forEach(id => allIds.add(id));
    if (ids.length > 0) idsByZone[zoneName] = ids;
  }
  return { allIds: [...allIds], idsByZone };
}

// ─── 3. Lieux : ids dans les zones universe ───────────────

function extraireLieuIdsDesZones() {
  const universeDir = join(rootDir, 'src', 'data', 'universe');
  const files = readdirSync(universeDir).filter(f => f.startsWith('universeZone_') && f.endsWith('.js'));
  const allIds = new Set();
  for (const file of files) {
    const content = readFileSync(join(universeDir, file), 'utf-8');
    const ids = extraireTousIds(content, /id:\s*"([^"]+)"/g);
    ids.forEach(id => allIds.add(id));
  }
  return [...allIds];
}

// ─── 4. Fronts : ids dans fronts.js ───────────────────────

function extraireFrontIds() {
  const frontsPath = join(rootDir, 'src', 'data', 'scenarios', 'fronts.js');
  const content = readFileSync(frontsPath, 'utf-8');
  return extraireTousIds(content, /id:\s*"(front_[^"]+)"/g);
}

// ─── 5b. Menaces : ids dans fronts.js ────────────────────

function extraireMenaceIds() {
  const frontsPath = join(rootDir, 'src', 'data', 'scenarios', 'fronts.js');
  const content = readFileSync(frontsPath, 'utf-8');
  return extraireTousIds(content, /id:\s*"(menace_[^"]+)"/g);
}

// ─── 5c. Scènes : ids stables dans les scénarios ──────────

function extraireSceneIdsDesScenarios() {
  const scenarioDir = join(rootDir, 'src', 'data', 'scenarios');
  const files = readdirSync(scenarioDir).filter(f => f.startsWith('scenario') && f.endsWith('.js'));
  const allIds = new Set();
  for (const file of files) {
    const content = readFileSync(join(scenarioDir, file), 'utf-8');
    extraireTousIds(content, /id:\s*"(s\d+_[^"]+)"/g).forEach(id => allIds.add(id));
  }
  return [...allIds];
}

// ─── 5d. EffetsFronts : clés et références ────────────────

function extraireEffetsFronts() {
  const path = join(rootDir, 'src', 'data', 'scenarios', 'effetsFronts.js');
  const content = readFileSync(path, 'utf-8');

  // Clés = IDs de scène (lignes indentées suivies de : [)
  const sceneIds = [];
  const keyRegex = /^\s{2}(\w+):\s*\[/gm;
  let keyMatch;
  while ((keyMatch = keyRegex.exec(content)) !== null) {
    sceneIds.push(keyMatch[1]);
  }

  // frontId et horlogeId dans chaque entrée
  const frontIds = extraireTousIds(content, /frontId:\s*"([^"]+)"/g);
  const horlogeIds = extraireTousIds(content, /horlogeId:\s*"([^"]+)"/g);

  return { sceneIds, frontIds, horlogeIds };
}

// ─── 5e. Scènes : champs obligatoires ───────────────────

function extraireScenesAvecChamps() {
  const scenarioDir = join(rootDir, 'src', 'data', 'scenarios');
  const files = readdirSync(scenarioDir).filter(f => f.startsWith('scenario') && f.endsWith('.js'));
  const scenes = [];
  const champsRequis = ['titre', 'type', 'objectif', 'resume_mj'];
  for (const file of files) {
    const content = readFileSync(join(scenarioDir, file), 'utf-8');
    const sceneRegex = /id:\s*"(s\d+_[^"]+)"/g;
    let match;
    const scenePositions = [];
    while ((match = sceneRegex.exec(content)) !== null) {
      scenePositions.push({ id: match[1], start: match.index });
    }
    for (let i = 0; i < scenePositions.length; i++) {
      const { id, start } = scenePositions[i];
      const end = i + 1 < scenePositions.length ? scenePositions[i + 1].start : content.length;
      const block = content.slice(start, end);
      const champsManquants = champsRequis.filter(champ => {
        const champRegex = new RegExp(`${champ}:\\s*"([^"]+)"`);
        const m = block.match(champRegex);
        return !m || m[1].trim() === '';
      });

      const typeMatch = block.match(/type:\s*"([^"]+)"/);
      const type = typeMatch ? typeMatch[1] : null;

      const idLieuMatch = block.match(/idLieu:\s*"([^"]+)"/);
      const idLieu = idLieuMatch ? idLieuMatch[1] : null;

      const aTransitions = /transitions:\s*\{/.test(block);
      const aGuideMj = /guide_mj:\s*\{/.test(block);
      const aContexteMj = /contexte_mj:\s*[{"]/.test(block);
      const aDefis = /defis:\s*\[/.test(block);

      scenes.push({ id, file, champsManquants, type, idLieu, aTransitions, aGuideMj, aContexteMj, aDefis });
    }
  }
  return scenes;
}

// ─── 5. Scénarios : idsPnj, idLieu, id_front ──────────────

function extraireReferencesDesScenarios() {
  const scenarioDir = join(rootDir, 'src', 'data', 'scenarios');
  const files = readdirSync(scenarioDir).filter(f => f.startsWith('scenario') && f.endsWith('.js'));
  const refs = { pnj: [], lieux: [], fronts: [] };
  for (const file of files) {
    const content = readFileSync(join(scenarioDir, file), 'utf-8');
    extraireIdsDeTableau(content, 'idsPnj').forEach(id => refs.pnj.push({ id, file }));
    extraireTousIds(content, /idLieu:\s*"([^"]+)"/g).forEach(id => refs.lieux.push({ id, file }));
    extraireTousIds(content, /id_front:\s*"([^"]+)"/g).forEach(id => refs.fronts.push({ id, file }));
  }
  return refs;
}

// ─── Exécution ────────────────────────────────────────────

console.log('═══════════════════════════════════════════════════════');
console.log('  VALIDATION DES DONNÉES — L\'Ombre de la Spirale');
console.log('═══════════════════════════════════════════════════════\n');

// --- PNJ ---
const pnjIds = extrairePnjIdsDePnjJs();
const { allIds: zoneNpcIds, idsByZone } = extrairePnjIdsDesZones();
const refsScenarios = extraireReferencesDesScenarios();

console.log('── 1. PNJ : registre pnj.js ──────────────────────────');
console.log(`  PNJ définis dans pnj.js : ${pnjIds.length}`);

// PNJ orphelins dans les zones (référencés mais pas définis)
const pnjOrphelinsZones = zoneNpcIds.filter(id => !pnjIds.includes(id));
if (pnjOrphelinsZones.length > 0) {
  console.log('\n  PNJ orphelins (dans zones mais absents de pnj.js) :');
  for (const id of pnjOrphelinsZones) {
    const zones = Object.entries(idsByZone).filter(([, ids]) => ids.includes(id)).map(([z]) => z);
    rapporterErreur('PNJ zone', `"${id}" référencé dans: ${zones.join(', ')}`);
  }
} else {
  console.log('  ✓ Aucun PNJ orphelin dans les zones');
}

// PNJ orphelins dans les scénarios
const pnjOrphelinsScenarios = refsScenarios.pnj.filter(ref => !pnjIds.includes(ref.id));
if (pnjOrphelinsScenarios.length > 0) {
  console.log('\n  PNJ orphelins (dans scénarios mais absents de pnj.js) :');
  for (const ref of pnjOrphelinsScenarios) {
    rapporterErreur('PNJ scénario', `"${ref.id}" dans ${ref.file}`);
  }
} else {
  console.log('  ✓ Aucun PNJ orphelin dans les scénarios');
}

// --- Images PNJ ---
console.log('\n── 2. Images PNJ ────────────────────────────────────');
const imagesPnj = extraireImagesPnj();
const imagesManquantes = imagesPnj.filter(img => {
  const fullPath = join(rootDir, 'public', img);
  return !existsSync(fullPath);
});
if (imagesManquantes.length > 0) {
  console.log('  Images PNJ manquantes :');
  for (const img of imagesManquantes) {
    rapporterAvertissement('Image PNJ', `${img} non trouvé dans public/`);
  }
} else {
  console.log(`  ✓ Les ${imagesPnj.length} images PNJ sont présentes`);
}

// --- Lieux ---
console.log('\n── 3. Lieux : registre universe ─────────────────────');
const lieuIds = extraireLieuIdsDesZones();
console.log(`  Lieux définis dans les zones : ${lieuIds.length}`);

const lieuxOrphelins = refsScenarios.lieux.filter(ref => !lieuIds.includes(ref.id));
if (lieuxOrphelins.length > 0) {
  console.log('\n  Lieux orphelins (dans scénarios mais absents des zones) :');
  for (const ref of lieuxOrphelins) {
    rapporterErreur('Lieu scénario', `"${ref.id}" dans ${ref.file}`);
  }
} else {
  console.log('  ✓ Aucun lieu orphelin dans les scénarios');
}

// --- Fronts ---
console.log('\n── 4. Fronts : registre fronts.js ───────────────────');
const frontIds = extraireFrontIds();
console.log(`  Fronts définis dans fronts.js : ${frontIds.length}`);

const frontsOrphelins = refsScenarios.fronts.filter(ref => !frontIds.includes(ref.id));
if (frontsOrphelins.length > 0) {
  console.log('\n  Fronts orphelins (dans scénarios mais absents de fronts.js) :');
  for (const ref of frontsOrphelins) {
    rapporterErreur('Front scénario', `"${ref.id}" dans ${ref.file}`);
  }
} else {
  console.log('  ✓ Aucun front orphelin dans les scénarios');
}

// --- EffetsFronts ---
console.log('\n── 5. EffetsFronts : clés et références ────────────');
const effets = extraireEffetsFronts();
const menaceIds = extraireMenaceIds();
const sceneIdsScenarios = extraireSceneIdsDesScenarios();
console.log(`  Clés dans effetsFronts : ${effets.sceneIds.length}`);
console.log(`  Références frontId : ${effets.frontIds.length}`);
console.log(`  Références horlogeId : ${effets.horlogeIds.length}`);

// Clés effetsFronts → scènes réelles
const scenesEffetsOrphelines = effets.sceneIds.filter(id => !sceneIdsScenarios.includes(id));
if (scenesEffetsOrphelines.length > 0) {
  console.log('\n  Clés effetsFronts orphelines (scène inexistante) :');
  for (const id of scenesEffetsOrphelines) {
    rapporterErreur('EffetsFronts scène', `"${id}" non trouvée dans les scénarios`);
  }
} else {
  console.log('  ✓ Toutes les clés effetsFronts correspondent à des scènes');
}

// frontId dans effetsFronts → fronts.js
const frontsEffetsOrphelins = effets.frontIds.filter(id => !frontIds.includes(id));
if (frontsEffetsOrphelins.length > 0) {
  console.log('\n  frontId orphelins dans effetsFronts :');
  for (const id of [...new Set(frontsEffetsOrphelins)]) {
    rapporterErreur('EffetsFronts front', `"${id}" non trouvé dans fronts.js`);
  }
} else {
  console.log('  ✓ Tous les frontId dans effetsFronts existent dans fronts.js');
}

// horlogeId dans effetsFronts → menaces dans fronts.js
const horlogesEffetsOrphelines = effets.horlogeIds.filter(id => !menaceIds.includes(id));
if (horlogesEffetsOrphelines.length > 0) {
  console.log('\n  horlogeId orphelins dans effetsFronts :');
  for (const id of [...new Set(horlogesEffetsOrphelines)]) {
    rapporterErreur('EffetsFronts horloge', `"${id}" non trouvé dans fronts.js`);
  }
} else {
  console.log('  ✓ Tous les horlogeId dans effetsFronts existent dans fronts.js');
}

// --- Scènes : champs obligatoires ---
console.log('\n── 7. Scènes : champs obligatoires ─────────────────');
const scenesValidees = extraireScenesAvecChamps();
const scenesIncompletes = scenesValidees.filter(s => s.champsManquants.length > 0);
if (scenesIncompletes.length > 0) {
  for (const s of scenesIncompletes) {
    rapporterAvertissement('Scène champs', `"${s.id}" dans ${s.file} — manquants: ${s.champsManquants.join(', ')}`);
  }
} else {
  console.log(`  ✓ Les ${scenesValidees.length} scènes ont tous les champs obligatoires (titre, type, objectif, resume_mj)`);
}

// --- Scènes : validation de jouabilité ---
console.log('\n── 8. Scènes : jouabilité (lieu, transition, guide/contexte) ──');
const typesCritiques = ['boss', 'twist', 'choix', 'final', 'dilemme', 'Boss', 'Twist', 'Choix', 'Dilemme', 'Conclusion'];
let jouabiliteIssues = 0;

for (const s of scenesValidees) {
  // Check : chaque scène a un idLieu ou une justification
  if (!s.idLieu) {
    rapporterAvertissement('Scène lieu', `"${s.id}" — aucun idLieu défini`);
    jouabiliteIssues++;
  } else if (!lieuIds.includes(s.idLieu)) {
    rapporterErreur('Scène lieu', `"${s.id}" — idLieu "${s.idLieu}" non trouvé dans les zones universe`);
    jouabiliteIssues++;
  }

  // Check : chaque scène a une transition ou une issue
  if (!s.aTransitions) {
    rapporterAvertissement('Scène transition', `"${s.id}" — aucune transitions: {} définie`);
    jouabiliteIssues++;
  }

  // Check : les scènes de type critique (boss, twist, choix, final) ont un guide_mj ou contexte_mj
  if (s.type && typesCritiques.some(t => s.type.toLowerCase().includes(t.toLowerCase()))) {
    if (!s.aGuideMj && !s.aContexteMj) {
      rapporterAvertissement('Scène guide', `"${s.id}" (type=${s.type}) — ni guide_mj ni contexte_mj défini`);
      jouabiliteIssues++;
    }
  }
}

if (jouabiliteIssues === 0) {
  console.log(`  ✓ Toutes les scènes passent les checks de jouabilité`);
} else {
  console.log(`  ${jouabiliteIssues} problème(s) de jouabilité détecté(s)`);
}

// --- Détail par zone ---
console.log('\n── 9. Détail par zone universe ──────────────────────');
for (const [zone, ids] of Object.entries(idsByZone).sort()) {
  const bad = ids.filter(id => !pnjIds.includes(id));
  const status = bad.length > 0 ? `✗ ${bad.length} orphelin(s)` : '✓';
  console.log(`  ${zone}: ${ids.length} réf PNJ — ${status}`);
}

// --- Check soft : PNJ sans scène, front ni lieu ---
console.log('\n── 10. PNJ sans lien (scène, front, lieu) ───────────');
const pnjDansScenes = new Set(refsScenarios.pnj.map(r => r.id));
const pnjDansFronts = new Set(extraireIdsDeTableau(
  readFileSync(join(rootDir, 'src', 'data', 'scenarios', 'fronts.js'), 'utf-8'),
  'idsPnj'
));
const pnjDansZones = new Set(zoneNpcIds);
const pnjSansRien = pnjIds.filter(id =>
  !pnjDansScenes.has(id) && !pnjDansFronts.has(id) && !pnjDansZones.has(id)
);
if (pnjSansRien.length > 0) {
  for (const id of pnjSansRien) {
    rapporterAvertissement('PNJ isolé', `"${id}" — ni scène, ni front, ni lieu. PNJ d'improvisation possible.`);
  }
} else {
  console.log('  ✓ Tous les PNJ ont au moins un lien (scène, front ou lieu)');
}

// --- Résumé final ---
console.log('\n═══════════════════════════════════════════════════════');
console.log(`  RÉSUMÉ : ${erreurs} erreur(s), ${avertissements} avertissement(s)`);
console.log('═══════════════════════════════════════════════════════');

if (erreurs > 0) {
  process.exit(1);
}
