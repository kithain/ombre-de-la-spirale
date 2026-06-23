/**
 * Index paresseux pour les liaisons Scénario ↔ PNJ ↔ Lieux.
 *
 * Responsabilité unique : construction des 3 index
 * (occurrences PNJ, PNJ par lieu, occurrences lieu).
 *
 * Les modules consommateurs appellent les getters sans connaître
 * l'implémentation.
 *
 * @module utilitaires/indexScenario
 */
import { scenariosData } from "../data/scenarios/scenarios";
import { sceneId } from "./sceneUtils";

// ─── État interne ────────────────────────────────────────────────────────────
let _indexOccurrencesPnj = null;
let _indexPnjParLieu = null;
let _indexOccurrencesLieu = null;

/**
 * Construit les 3 index en un seul passage sur les scénarios.
 * Complexité : O(S×A×Sc) où S=scénarios, A=actes, Sc=scènes.
 */
function construireIndexOccurrences() {
  const parPnj = new Map();
  const parLieu = new Map();
  const parLieuScene = new Map();

  for (const scenario of scenariosData || []) {
    if (!scenario?.actes) continue;
    for (const [indexActe, acte] of scenario.actes.entries()) {
      if (!acte?.scenes) continue;
      for (const [indexScene, scene] of acte.scenes.entries()) {
        const occurrence = {
          idScenario: scenario.id,
          titreScenario: scenario.titre,
          titreActe: acte.titre,
          numeroActe: indexActe + 1,
          numeroScene: indexScene + 1,
          titreScene: scene.titre,
          idScene: sceneId(scene),
        };

        // Index par PNJ
        if (Array.isArray(scene.idsPnj)) {
          for (const pnjId of scene.idsPnj) {
            if (!parPnj.has(pnjId)) parPnj.set(pnjId, []);
            parPnj.get(pnjId).push(occurrence);
          }
        }

        // Index par lieu (PNJ visités dans chaque lieu)
        if (scene.idLieu) {
          const idLieu = String(scene.idLieu);

          if (!parLieu.has(idLieu)) parLieu.set(idLieu, new Map());
          const cartePnj = parLieu.get(idLieu);
          for (const pnjId of scene.idsPnj || []) {
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
