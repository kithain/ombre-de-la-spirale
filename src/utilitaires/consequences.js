/**
 * Centralisation des conséquences.
 *
 * Agrège les conséquences depuis toutes les sources disponibles :
 * - Scènes : transitions (réussite/échec/résumé), effetsFronts
 * - Scénarios : événements mondiaux (chronologie inévitable, conséquences d'échecs)
 * - Fronts : menaces (conséquence de remplissage, annulation), étapes d'horloge
 *
 * Le MJ peut ainsi voir "ce qui arrive si les PJ ignorent / échouent / réussissent"
 * depuis n'importe quel point d'entrée (scène, front, scénario).
 */

import { scenariosData } from "../data/scenarios/scenarios";
import { frontsData } from "../data/scenarios/fronts";
import { effetsFrontsParScene } from "../data/scenarios/effetsFronts";
import { sceneId } from "./sceneUtils";

const nomFrontParId = new Map(frontsData.map((f) => [f.id, f.nom]));

// ─── Types de conséquences ────────────────────────────────

/**
 * @typedef {Object} Consequence
 * @property {string} source - "scene" | "scenario" | "front"
 * @property {string} sourceId - ID de la source
 * @property {string} sourceNom - Nom lisible de la source
 * @property {"reussite"|"echec"|"ignorer"|"remplissage"|"annulation"|"inevitable"} type
 * @property {string} description - Texte de la conséquence
 */

// ─── Consequences pour une scène ──────────────────────────

/**
 * Récupère toutes les conséquences liées à une scène :
 * transitions (réussite/échec) + effets de fronts.
 */
export function consequencesScene(scene) {
  if (!scene) return [];

  const id = sceneId(scene);
  const resultats = [];

  // Transitions
  if (scene.transitions) {
    const t = scene.transitions;
    if (t.resume) {
      resultats.push({
        source: "scene",
        sourceId: id,
        sourceNom: scene.titre,
        type: "transition",
        description: t.resume,
      });
    }
    if (t.reussite) {
      resultats.push({
        source: "scene",
        sourceId: id,
        sourceNom: scene.titre,
        type: "reussite",
        description: t.reussite,
      });
    }
    if (t.echec) {
      resultats.push({
        source: "scene",
        sourceId: id,
        sourceNom: scene.titre,
        type: "echec",
        description: t.echec,
      });
    }
  }

  // Effets de fronts
  const effets = effetsFrontsParScene[id] || [];
  for (const effet of effets) {
    resultats.push({
      source: "front",
      sourceId: effet.frontId,
      sourceNom: nomFrontParId.get(effet.frontId) || effet.frontId,
      type: "declencheur",
      description: `${effet.effet} — ${effet.consequence}`,
      declencheur: effet.declencheur,
      horlogeId: effet.horlogeId,
    });
  }

  return resultats;
}

// ─── Consequences pour un scénario ────────────────────────

/**
 * Récupère les conséquences globales d'un scénario :
 * événements mondiaux (chronologie inévitable + conséquences d'échecs).
 */
export function consequencesScenario(idScenario) {
  const scenario = scenariosData?.find((s) => s.id === idScenario);
  if (!scenario?.evenements_mondiaux) return [];

  const resultats = [];
  const ev = scenario.evenements_mondiaux;

  if (ev.chronologie_inevitable) {
    for (const evt of ev.chronologie_inevitable) {
      resultats.push({
        source: "scenario",
        sourceId: scenario.id,
        sourceNom: scenario.titre,
        type: "inevitable",
        description: evt,
      });
    }
  }

  if (ev.consequences_echecs) {
    for (const evt of ev.consequences_echecs) {
      resultats.push({
        source: "scenario",
        sourceId: scenario.id,
        sourceNom: scenario.titre,
        type: "echec",
        description: evt,
      });
    }
  }

  return resultats;
}

// ─── Consequences pour un front ───────────────────────────

/**
 * Récupère les conséquences liées à un front :
 * conséquence de remplissage, annulation, et étapes d'horloge.
 */
export function consequencesFront(idFront) {
  const front = frontsData?.find((f) => f.id === idFront);
  if (!front) return [];

  const resultats = [];

  for (const menace of front.menaces || []) {
    if (menace.conséquenceRemplissage) {
      resultats.push({
        source: "front",
        sourceId: front.id,
        sourceNom: front.nom,
        type: "remplissage",
        description: menace.conséquenceRemplissage,
        horlogeId: menace.id,
        horlogeNom: menace.nom,
      });
    }
    if (menace.annulation) {
      resultats.push({
        source: "front",
        sourceId: front.id,
        sourceNom: front.nom,
        type: "annulation",
        description: menace.annulation,
        horlogeId: menace.id,
        horlogeNom: menace.nom,
      });
    }

    // Étapes d'horloge
    if (menace.horloge?.etapes) {
      for (let i = 0; i < menace.horloge.etapes.length; i++) {
        const etape = menace.horloge.etapes[i];
        if (etape.indice) {
          resultats.push({
            source: "front",
            sourceId: front.id,
            sourceNom: front.nom,
            type: "etape",
            description: etape.indice,
            horlogeId: menace.id,
            horlogeNom: menace.nom,
            segment: i + 1,
            etapeTitre: etape.titre,
          });
        }
      }
    }
  }

  return resultats;
}

// ─── Agrégation globale ───────────────────────────────────

/**
 * Récupère toutes les conséquences pour un point d'entrée donné.
 * Si idScene est fourni, récupère les conséquences de la scène + du scénario parent.
 * Si idFront est fourni, récupère les conséquences du front.
 * Si idScenario est fourni seul, récupère les conséquences du scénario.
 *
 * @param {{idScene?: string, idFront?: string, idScenario?: string}} params
 * @returns {Consequence[]}
 */
export function consequencesGlobales({ idScene, idFront, idScenario } = {}) {
  const resultats = [];

  if (idScene) {
    // Trouver la scène et son scénario parent
    for (const scenario of scenariosData || []) {
      for (const acte of scenario.actes || []) {
        const scene = (acte.scenes || []).find((s) => sceneId(s) === idScene);
        if (scene) {
          resultats.push(...consequencesScene(scene));
          resultats.push(...consequencesScenario(scenario.id));
          break;
        }
      }
    }
  }

  if (idFront) {
    resultats.push(...consequencesFront(idFront));
  }

  if (idScenario && !idScene) {
    resultats.push(...consequencesScenario(idScenario));
  }

  return resultats;
}

// ─── Filtrage par type ────────────────────────────────────

/**
 * Filtre les conséquences par type.
 * @param {Consequence[]} consequences
 * @param {string} type - "reussite" | "echec" | "inevitable" | "remplissage" | "annulation" | "etape" | "declencheur" | "transition"
 * @returns {Consequence[]}
 */
export function filtrerParType(consequences, type) {
  return consequences.filter((c) => c.type === type);
}

/**
 * Groupe les conséquences par source.
 * @param {Consequence[]} consequences
 * @returns {Map<string, Consequence[]>}
 */
export function grouperParSource(consequences) {
  const groupes = new Map();
  for (const c of consequences) {
    const cle = `${c.source}:${c.sourceId}`;
    if (!groupes.has(cle)) groupes.set(cle, []);
    groupes.get(cle).push(c);
  }
  return groupes;
}
