/**
 * Utilitaires pour la gestion des quêtes annexes et des PNJ
 * Utilise le registre NPC comme source unique de données
 */

import { tousLesPnj } from "./npcRegistry";

/**
 * Récupère tous les PNJ qui ont des quêtes annexes
 */
export function obtenirPnjAvecQuetes() {
  return tousLesPnj.filter((pnj) => pnj.quetesAnnexes?.length > 0);
}

/**
 * Filtre les PNJ par type (allié/ennemi/tous) parmi ceux qui ont des quêtes annexes
 */
export function filtrerPnjParType(type) {
  const pnjAvecQuetes = obtenirPnjAvecQuetes();

  if (type === "tous") return pnjAvecQuetes;

  return pnjAvecQuetes.filter((pnj) => {
    if (type === "allié") {
      return (
        pnj.category === "allies" ||
        (!pnj.est_ennemi && !pnj.antagoniste && pnj.category !== "monstres")
      );
    }
    if (type === "ennemi") {
      return (
        pnj.category === "ennemis" ||
        pnj.est_ennemi ||
        pnj.antagoniste
      );
    }
    return false;
  });
}

/**
 * Filtre les PNJ avec quêtes par numéro de scénario
 */
export function filtrerPnjParScenario(numeroScenario) {
  const pnjAvecQuetes = obtenirPnjAvecQuetes();
  if (!numeroScenario || numeroScenario === "tous") return pnjAvecQuetes;

  return pnjAvecQuetes.filter((pnj) =>
    pnj.quetesAnnexes.some((q) => q.scenario === Number(numeroScenario)),
  );
}

/**
 * Récupère toutes les quêtes annexes à plat, avec référence au PNJ
 */
export function obtenirToutesLesQuetes() {
  return obtenirPnjAvecQuetes().flatMap((pnj) =>
    (pnj.quetesAnnexes || []).map((quete) => ({
      ...quete,
      pnjId: pnj.id,
      pnjNom: pnj.nom,
      pnjCategorie: pnj.category,
    })),
  );
}

/**
 * Compte les quêtes par difficulté (single-pass)
 */
export function compterQuetesParDifficulte() {
  const quetes = obtenirToutesLesQuetes();
  return quetes.reduce(
    (acc, q) => {
      switch (q.difficulte) {
        case "Facile":          acc.facile++; break;
        case "Moyenne":         acc.moyenne++; break;
        case "Difficile":       acc.difficile++; break;
        case "Très difficile":  acc.tresDifficile++; break;
      }
      return acc;
    },
    { facile: 0, moyenne: 0, difficile: 0, tresDifficile: 0 },
  );
}

/**
 * Obtient les scénarios uniques qui contiennent des quêtes annexes
 */
export function obtenirScenariosAvecQuetes() {
  const quetes = obtenirToutesLesQuetes();
  const scenarios = new Set(quetes.map((q) => q.scenario).filter(Boolean));
  return [...scenarios].sort((a, b) => a - b);
}
