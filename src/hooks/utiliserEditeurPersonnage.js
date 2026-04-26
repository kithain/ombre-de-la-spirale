/**
 * Hook utiliserEditeurPersonnage
 *
 * Spécialisation de utiliserEditeurGenerique pour les PNJ/monstres D&D 3.5.
 * Ajoute :
 * - Validation temps réel par champ (validerChampUnique)
 * - Validation complète avant sauvegarde (validerPersonnage)
 * - Avertissements de cohérence croisée (alignement, type, etc.)
 */
import { useMemo } from "react";
import { validerPersonnage, validerChampUnique } from "../utilitaires/validationPersonnage";
import { utiliserEditeurGenerique } from "./utiliserEditeurGenerique";
import { ETATS_SAUVEGARDE, calculerDiff } from "./helpersEditeur";

/**
 * @param {object} _personnageInitial - Inutilisé (conservé pour compatibilité d'API), charger() est appelé manuellement
 * @param {object} options
 * @param {function} [options.surSauvegarde] - Callback async recevant (diff, brouillonComplet)
 * @returns {object} API de l'éditeur PNJ
 */
export function utiliserEditeurPersonnage(_personnageInitial, options = {}) {
  const editeur = utiliserEditeurGenerique({
    surSauvegarde: options.surSauvegarde,
    valider: validerPersonnage,
    validerChamp: validerChampUnique,
    labelEntite: "Personnage",
  });

  // Résultat de validation complet, mémoïsé une seule fois.
  // Évite le double appel à validerPersonnage (ici + sauvegarder).
  // Le résultat est réutilisé pour les avertissements ET la validation au save.
  const validationComplete = useMemo(() => {
    if (!editeur.brouillon) return null;
    return validerPersonnage(editeur.brouillon);
  }, [editeur.brouillon]);

  const avertissements = validationComplete?.avertissements || {};

  return {
    ...editeur,
    avertissements,
    validationComplete,
  };
}

export { ETATS_SAUVEGARDE, calculerDiff };
