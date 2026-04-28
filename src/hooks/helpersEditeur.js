/**
 * Helpers partagés entre les hooks d'édition (utiliserEditeurPersonnage, utiliserEditeurLieu).
 *
 * Responsabilité unique : opérations de clonage, comparaison et diff
 * sur des structures JSON sérialisables (sans fonctions ni références circulaires).
 */
import { clonerProfond } from "../utilitaires/clonerProfond";
export { clonerProfond };

/** États possibles de la sauvegarde */
export const ETATS_SAUVEGARDE = Object.freeze({
  INACTIF: "inactif",
  EN_COURS: "enCours",
  SUCCES: "succes",
  ERREUR: "erreur",
});

/** Taille max de l'historique undo/redo */
export const MAX_HISTORIQUE = 50;


/**
 * Comparaison profonde simplifiée pour structures JSON.
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
export function estIdentique(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return a === b;
  if (typeof a !== typeof b) return false;
  if (typeof a !== "object") return false;

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((val, i) => estIdentique(val, b[i]));
  }

  const clesA = Object.keys(a);
  const clesB = Object.keys(b);
  if (clesA.length !== clesB.length) return false;
  return clesA.every((cle) => estIdentique(a[cle], b[cle]));
}

/**
 * Pousse un nouvel état dans l'historique undo/redo de façon synchrone.
 * Tronque le futur si on est en milieu d'historique (après un undo).
 * À appeler AVANT d'appeler definirBrouillon pour garantir la cohérence.
 *
 * @param {object} nouvelEtat - État à enregistrer (sera cloné profondément)
 * @param {{ current: Array }} historiqueRef - Ref contenant le tableau d'historique
 * @param {{ current: number }} indexHistRef  - Ref contenant l'index courant
 * @returns {number} Taille de l'historique après insertion (pour calcul de peutAnnuler)
 */
export function pousserDansHistorique(nouvelEtat, historiqueRef, indexHistRef) {
  const hist = historiqueRef.current.slice(0, indexHistRef.current + 1);
  hist.push(clonerProfond(nouvelEtat));
  if (hist.length > MAX_HISTORIQUE) hist.splice(0, hist.length - MAX_HISTORIQUE);
  historiqueRef.current = hist;
  indexHistRef.current = hist.length - 1;
  return hist.length;
}

/**
 * Calcule le diff entre l'original et le brouillon.
 * Retourne un objet ne contenant que les champs modifiés.
 * @param {object} original
 * @param {object} brouillon
 * @returns {object}
 */
export function calculerDiff(original, brouillon) {
  if (!original || !brouillon) return {};

  const diff = {};
  const toutesLesCles = new Set([
    ...Object.keys(original),
    ...Object.keys(brouillon),
  ]);

  for (const cle of toutesLesCles) {
    if (!estIdentique(original[cle], brouillon[cle])) {
      diff[cle] = clonerProfond(brouillon[cle]);
    }
  }

  return diff;
}
