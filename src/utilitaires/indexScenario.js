/**
 * Index paresseux pour les liaisons Scénario ↔ PNJ ↔ Lieux.
 *
 * Responsabilité unique : construction et invalidation des 3 index
 * (occurrences PNJ, PNJ par lieu, occurrences lieu).
 *
 * Les modules consommateurs (queries, mutations) appellent les getters
 * et `invaliderIndex()` sans connaître l'implémentation.
 *
 * @module utilitaires/indexScenario
 */
import { scenariosData } from "../data/scenarios/scenarios";

// ─── State interne ────────────────────────────────────────────────────────────
let _indexOccurrencesPnj = null;
let _indexPnjParLieu = null;
let _indexOccurrencesLieu = null;
let _toutesLesScenes = null;

/**
 * Construit les 3 index en un seul passage sur les scénarios.
 * Complexité : O(S×A×Sc) où S=scénarios, A=actes, Sc=scènes.
 */
function construireIndexOccurrences() {
  const parPnj = new Map();
  const parLieu = new Map();
  const parLieuScene = new Map();

  for (const scenario of scenariosData || []) {
    if (!scenario?.acts) continue;
    for (const [indexActe, acte] of scenario.acts.entries()) {
      if (!acte?.scenes) continue;
      for (const [indexScene, scene] of acte.scenes.entries()) {
        const occurrence = {
          idScenario: scenario.id,
          titreScenario: scenario.title,
          titreActe: acte.title,
          numeroActe: indexActe + 1,
          numeroScene: indexScene + 1,
          titreScene: scene.title,
        };

        // Index par PNJ
        if (Array.isArray(scene.npcIds)) {
          for (const pnjId of scene.npcIds) {
            if (!parPnj.has(pnjId)) parPnj.set(pnjId, []);
            parPnj.get(pnjId).push(occurrence);
          }
        }

        // Index par lieu (PNJ visités dans chaque lieu)
        if (scene.locationId) {
          const idLieu = String(scene.locationId);

          if (!parLieu.has(idLieu)) parLieu.set(idLieu, new Map());
          const cartePnj = parLieu.get(idLieu);
          for (const pnjId of scene.npcIds || []) {
            if (!cartePnj.has(pnjId)) cartePnj.set(pnjId, { pnjId, occurrences: [] });
            cartePnj.get(pnjId).occurrences.push(occurrence);
          }

          // Index scènes par lieu
          if (!parLieuScene.has(idLieu)) parLieuScene.set(idLieu, []);
          parLieuScene.get(idLieu).push(occurrence);
        }
      }
    }
  }

  _indexOccurrencesPnj = parPnj;
  _indexPnjParLieu = parLieu;
  _indexOccurrencesLieu = parLieuScene;
}

// ─── Getters paresseux ────────────────────────────────────────────────────────

export function obtenirIndexOccurrencesPnj() {
  if (!_indexOccurrencesPnj) construireIndexOccurrences();
  return _indexOccurrencesPnj;
}

export function obtenirIndexPnjParLieu() {
  if (!_indexPnjParLieu) construireIndexOccurrences();
  return _indexPnjParLieu;
}

export function obtenirIndexOccurrencesLieu() {
  if (!_indexOccurrencesLieu) construireIndexOccurrences();
  return _indexOccurrencesLieu;
}

/**
 * Retourne la liste plate de toutes les scènes (cache paresseux).
 * Chaque scène expose un `_ref` vers l'objet scène source (pour mutations).
 */
export function obtenirToutesLesScenes() {
  if (_toutesLesScenes) return _toutesLesScenes;
  const scenes = [];
  for (const scenario of scenariosData || []) {
    for (const [iActe, acte] of (scenario.acts || []).entries()) {
      for (const [iScene, scene] of (acte.scenes || []).entries()) {
        const numA = iActe + 1;
        const numS = iScene + 1;
        scenes.push({
          id: `${scenario.id}.${numA}.${numS}`,
          label: `${scenario.id}.${numA}.${numS} — ${scene.title || "Sans titre"}`,
          idScenario: scenario.id,
          titreScenario: scenario.title,
          numeroActe: numA,
          titreActe: acte.title,
          numeroScene: numS,
          titreScene: scene.title,
          npcIds: scene.npcIds || [],
          _ref: scene,
        });
      }
    }
  }
  _toutesLesScenes = scenes;
  return scenes;
}

// ─── Invalidation ─────────────────────────────────────────────────────────────

/**
 * Invalide les index PNJ et lieu (après mutation de npcIds ou locationId).
 * @param {"pnj"|"lieu"|"all"} [cible="all"]
 */
export function invaliderIndex(cible = "all") {
  if (cible === "pnj" || cible === "all") {
    _indexOccurrencesPnj = null;
    _indexPnjParLieu = null;
  }
  if (cible === "lieu" || cible === "all") {
    _indexOccurrencesLieu = null;
    _indexPnjParLieu = null;
  }
}

/** Invalide le cache de la liste des lieux du scénario. */
let _lieuxScenario = null;
export function obtenirCacheLieuxScenario() {
  return _lieuxScenario;
}
export function definirCacheLieuxScenario(valeur) {
  _lieuxScenario = valeur;
}
export function invaliderCacheLieux() {
  _lieuxScenario = null;
}
