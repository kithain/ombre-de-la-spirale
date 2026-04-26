/**
 * Helpers serveur — Lecture / écriture des fichiers source JS.
 *
 * Stratégie :
 * - Lire le fichier comme texte
 * - Extraire le nom de variable et le corps de l'objet/tableau
 * - Parser le corps avec `new Function` (safe car fichiers locaux)
 * - Modifier l'objet en mémoire
 * - Re-sérialiser et réécrire le fichier
 */
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/** Chemin absolu vers src/data/universe */
export const UNIVERSE_DIR = resolve(__dirname, "..", "src", "data", "universe");

/** Chemin absolu vers src/data/personnages */
export const PERSONNAGES_DIR = resolve(__dirname, "..", "src", "data", "personnages");

/** Chemin absolu vers src/data/personnages/pnj_principaux */
export const PNJ_DIR = resolve(PERSONNAGES_DIR, "pnj_principaux");

// ─── Parsing générique ──────────────────────────────────────────────

/**
 * Lit un fichier JS qui exporte un seul `const` et retourne { nomVariable, data }.
 * Supporte `export const xxx = { ... };` et `export const xxx = [ ... ];`
 */
export async function lireFichierJS(cheminAbsolu) {
  const contenu = await readFile(cheminAbsolu, "utf-8");

  // Extraire : export const <nomVariable> = <corps>;
  const match = contenu.match(/export\s+const\s+(\w+)\s*=\s*([\s\S]+);?\s*$/);
  if (!match) {
    throw new Error(`Impossible de parser le fichier : ${cheminAbsolu}`);
  }

  const nomVariable = match[1];
  let corps = match[2].trim();
  // Retirer le ; final s'il existe
  if (corps.endsWith(";")) corps = corps.slice(0, -1).trim();

  // Parser le corps JS en objet
  const data = new Function(`return (${corps})`)();
  return { nomVariable, data, contenu };
}

/**
 * Extrait le commentaire JSDoc d'un fichier JS (s'il existe).
 */
export async function lireCommentaireFichier(cheminAbsolu) {
  const contenu = await readFile(cheminAbsolu, "utf-8");
  const match = contenu.match(/^\/\*\*([\s\S]*?)\*\//);
  if (!match) return null;
  // Nettoyer les lignes du commentaire
  return match[1]
    .split("\n")
    .map((l) => l.replace(/^\s*\*\s?/, "").trim())
    .filter(Boolean)
    .join("\n");
}

// ─── Zones / Lieux ──────────────────────────────────────────────────

/**
 * Liste tous les fichiers zone et retourne un Map<zoneId, { fichier, nomVariable, data }>
 */
export async function chargerToutesLesZones() {
  const fichiers = await readdir(UNIVERSE_DIR);
  const zones = new Map();

  for (const f of fichiers) {
    if (!f.startsWith("universeZone_") || !f.endsWith(".js")) continue;
    const chemin = join(UNIVERSE_DIR, f);
    try {
      const { nomVariable, data } = await lireFichierJS(chemin);
      zones.set(data.id, { fichier: chemin, nomVariable, data });
    } catch (e) {
      console.warn(`[helpers] Erreur lecture ${f}:`, e.message);
    }
  }
  return zones;
}

/**
 * Trouve le fichier zone contenant un lieu donné.
 * @returns {{ zone, fichier, nomVariable, indexLieu } | null}
 */
export async function trouverLieuDansZones(lieuId) {
  const zones = await chargerToutesLesZones();
  for (const [, entry] of zones) {
    const idx = (entry.data.locations || []).findIndex((l) => l.id === lieuId);
    if (idx !== -1) {
      return { ...entry, indexLieu: idx };
    }
  }
  return null;
}

// ─── PNJ ────────────────────────────────────────────────────────────

/** Mapping des fichiers PNJ — `repertoire` optionnel, défaut = PNJ_DIR */
const FICHIERS_PNJ = [
  // ── PNJ principaux (scénarisés) ──
  { fichier: "pnj_globaux.js", variable: "pnjGlobauxRaw" },
  // ── PNJ ennemis nommés ──
  { fichier: "02_pnj_ennemis.js", variable: "pnjEnnemisRaw", repertoire: PERSONNAGES_DIR },
  { fichier: "pnj_scenario1.js", variable: "pnjScenario1Raw" },
  { fichier: "pnj_scenario2.js", variable: "pnjScenario2Raw" },
  { fichier: "pnj_scenario3_4.js", variable: "pnjScenario3_4Raw" },
  { fichier: "pnj_scenario5.js", variable: "pnjScenario5Raw" },
  // ── Archétypes (bestiaire par FP) ──
  { fichier: "03_archetype_fp1.js", variable: "archetypeFp1", repertoire: PERSONNAGES_DIR },
  { fichier: "04_archetype_fp2.js", variable: "archetypeFp2", repertoire: PERSONNAGES_DIR },
  { fichier: "05_archetype_fp3.js", variable: "archetypeFp3", repertoire: PERSONNAGES_DIR },
  { fichier: "06_archetype_fp4.js", variable: "archetypeFp4", repertoire: PERSONNAGES_DIR },
  { fichier: "07_archetype_fp5.js", variable: "archetypeFp5", repertoire: PERSONNAGES_DIR },
  { fichier: "08_archetype_fp6.js", variable: "archetypeFp6", repertoire: PERSONNAGES_DIR },
  { fichier: "09_archetype_fp7.js", variable: "archetypeFp7", repertoire: PERSONNAGES_DIR },
  { fichier: "10_archetype_fp8.js", variable: "archetypeFp8", repertoire: PERSONNAGES_DIR },
  { fichier: "11_archetype_fp9.js", variable: "archetypeFp9", repertoire: PERSONNAGES_DIR },
  { fichier: "12_archetype_fp10.js", variable: "archetypeFp10", repertoire: PERSONNAGES_DIR },
];

/**
 * Charge tous les fichiers PNJ et retourne un Map<pnjId, { fichier, nomVariable, data, index }>
 */
export async function chargerTousLesPnj() {
  const index = new Map();

  for (const { fichier, variable, repertoire } of FICHIERS_PNJ) {
    const chemin = join(repertoire || PNJ_DIR, fichier);
    try {
      const { data } = await lireFichierJS(chemin);
      for (let i = 0; i < data.length; i++) {
        index.set(data[i].id, {
          fichier: chemin,
          nomVariable: variable,
          tableauComplet: data,
          indexDansTableau: i,
        });
      }
    } catch (e) {
      console.warn(`[helpers] Erreur lecture PNJ ${fichier}:`, e.message);
    }
  }
  return index;
}

/**
 * Trouve un PNJ par ID dans les fichiers source.
 * @returns {{ fichier, nomVariable, data: Array, indexDansTableau, pnj } | null}
 */
export async function trouverPnjDansFichiers(pnjId) {
  for (const { fichier, variable, repertoire } of FICHIERS_PNJ) {
    const chemin = join(repertoire || PNJ_DIR, fichier);
    try {
      const { data } = await lireFichierJS(chemin);
      const idx = data.findIndex((p) => p.id === pnjId);
      if (idx !== -1) {
        return {
          fichier: chemin,
          nomVariable: variable,
          data,
          indexDansTableau: idx,
          pnj: data[idx],
        };
      }
    } catch {
      continue;
    }
  }
  return null;
}

export { FICHIERS_PNJ };

// ─── Scénarios ────────────────────────────────────────────────────

/** Chemin absolu vers src/data/scenarios */
export const SCENARIOS_DIR = resolve(__dirname, "..", "src", "data", "scenarios");

/**
 * Retourne les fichiers acte*.js d'un scénario, triés dans l'ordre alphabétique.
 * Chaque acte est dans un fichier séparé (acte1_xxx.js, acte2_xxx.js…)
 * @param {number} scenarioId
 * @returns {Promise<Array<{fichier: string, variable: string}>>}
 */
export async function listerFichiersActes(scenarioId) {
  const dir = join(SCENARIOS_DIR, `scenario${scenarioId}`);
  if (!existsSync(dir)) throw new Error(`Répertoire scénario introuvable : ${dir}`);
  const fichiers = await readdir(dir);
  return fichiers
    .filter((f) => /^acte\d+.*\.js$/.test(f))
    .sort()
    .map((f) => ({
      fichier: join(dir, f),
      variable: f.match(/^(acte\d+)/)?.[1] ?? f.replace(".js", ""),
    }));
}
