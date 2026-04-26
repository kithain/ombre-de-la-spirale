/**
 * Hook utiliserEditeurLieu
 *
 * Spécialisation de utiliserEditeurGenerique pour les lieux de l'univers.
 * Pas de validation spécifique (les lieux n'ont pas de règles D&D 3.5).
 *
 * Partage toute la logique de base (undo/redo, diff, sauvegarde)
 * via utiliserEditeurGenerique.
 */
import { utiliserEditeurGenerique } from "./utiliserEditeurGenerique";
import { ETATS_SAUVEGARDE } from "./helpersEditeur";

/**
 * @param {object|null} _lieuInitial - Inutilisé (conservé pour compatibilité d'API)
 * @param {object} options
 * @param {function} [options.surSauvegarde] - Callback async recevant (diff, brouillonComplet)
 * @returns {object} API de l'éditeur lieu
 */
export function utiliserEditeurLieu(_lieuInitial = null, options = {}) {
  return utiliserEditeurGenerique({
    surSauvegarde: options.surSauvegarde,
    labelEntite: "Lieu",
  });
}

export { ETATS_SAUVEGARDE };
