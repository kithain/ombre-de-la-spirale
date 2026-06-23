/**
 * Effets des fronts sur les scènes.
 *
 * Chaque entrée est rattachée à un ID de scène stable (voir sceneUtils.js).
 * Format :
 * {
 *   frontId: "front_plan_thade",
 *   horlogeId: "menace_retour_sealine",
 *   declencheur: "Si les PJ échouent à stabiliser l'ancrage",
 *   effet: "+1 segment",
 *   consequence: "Une zone proche devient instable"
 * }
 *
 * Source : docs/05_tableau_fronts_scenarios_scenes.md
 */

export const effetsFrontsParScene = {
  // ── Scénario 1 ──────────────────────────────────────────

  s1_bureau_thade: [
    {
      frontId: "front_plan_thade",
      horlogeId: "menace_retour_sealine",
      declencheur: "Dès la première séance. Thade envoie les PJ enquêter pendant qu'il continue de prélever.",
      effet: "+1 segment (segment 1)",
      consequence: "Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes.",
    },
  ],

  s1_premiere_descente: [
    {
      frontId: "front_sceau_qui_cede",
      horlogeId: "menace_profanation_thanes",
      declencheur: "Dès le début du S1. Le froid et les vibrations ne se limitent plus à une seule tombe.",
      effet: "+1 segment (segment 1)",
      consequence: "Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus.",
    },
    {
      frontId: "front_plan_thade",
      horlogeId: "menace_retour_sealine",
      declencheur: "Les PJ voient les outils d'Université sur les tombes — Thade prélève pendant qu'ils enquêtent.",
      effet: "+1 segment (segment 1)",
      consequence: "Des fragments d'os convergent vers la Tour.",
    },
  ],

  s1_mort_jaren: [],

  s1_temple_forgeron: [],

  s1_archives_scellees: [],

  s1_bureau_olane: [
    {
      frontId: "front_plan_thade",
      horlogeId: "menace_retour_sealine",
      declencheur: "Quand les PJ rencontrent Olane et qu'elle partage ses chiffres.",
      effet: "+1 segment (segment 2)",
      consequence: "Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables.",
    },
    {
      frontId: "front_cite_sous_pression",
      horlogeId: "menace_derive_institutionnelle",
      declencheur: "Quand le Conseil enterre la crise sous des commissions. Typiquement à la fin du S1 ou au début du S2.",
      effet: "+1 segment (segment 1)",
      consequence: "Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.",
    },
  ],

  s1_retour_cimetiere: [
    {
      frontId: "front_sceau_qui_cede",
      horlogeId: "menace_profanation_thanes",
      declencheur: "Quand la dalle centrale se déplace et que le Puits vibre.",
      effet: "+1 segment (segment 3)",
      consequence: "La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes.",
    },
  ],

  s1_rencontre_resistance: [],

  s1_choix: [],

  // ── Scénario 2 ──────────────────────────────────────────

  s2_emeute_place: [
    {
      frontId: "front_factions_crise",
      horlogeId: "menace_radicalisation_cercles",
      declencheur: "Dès le début du S2. Chaque faction prend confiance en son cadre.",
      effet: "+1 segment (segment 1)",
      consequence: "Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours.",
    },
    {
      frontId: "front_factions_crise",
      horlogeId: "menace_radicalisation_cercles",
      declencheur: "Quand le Champion impose un choix public.",
      effet: "+1 segment (segment 3)",
      consequence: "Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces.",
    },
    {
      frontId: "front_cite_sous_pression",
      horlogeId: "menace_derive_institutionnelle",
      declencheur: "Quand les débats se déplacent vers la désignation d'un coupable.",
      effet: "+1 segment (segment 3)",
      consequence: "Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.",
    },
  ],

  s2_endeuilles_edran: [
    {
      frontId: "front_factions_crise",
      horlogeId: "menace_endeuilles_radicalisation",
      declencheur: "Quand les PJ rencontrent Ursula ou entendent parler des patients disparus.",
      effet: "+1 segment (segment 2)",
      consequence: "Ursula reçoit des patients qu'elle ne reconnaît pas. Des familles cherchent un proche. Le Champion obtient une victoire publique.",
    },
  ],

  s2_dephasage_visible: [
    {
      frontId: "front_sceau_qui_cede",
      horlogeId: "menace_abandon_mine",
      declencheur: "Quand le poids, la chute, le son et l'orientation varient d'une galerie à l'autre.",
      effet: "+1 segment (segment 5)",
      consequence: "Le poids, la chute, le son varient. Des présences planaires franchissent les zones déformées. Les méthodes minières deviennent dangereuses.",
    },
    {
      frontId: "front_dephasage",
      horlogeId: "menace_dephasage_ancrage",
      declencheur: "Quand un PJ ou un éclaireur tente de quitter Valombre et revient sans s'en rendre compte.",
      effet: "+1 segment (segment 4)",
      consequence: "Une route ramène au même pont, à la même borne. Ceux qui partent reviennent. La cité n'est plus raccordée.",
    },
  ],

  s2_reserve_interdite: [],

  s2_laboratoire_elian: [],

  s2_assaut_tour: [
    {
      frontId: "front_plan_thade",
      horlogeId: "menace_loyalistes_tour",
      declencheur: "Quand Thade verrouille la Tour. Typiquement pendant l'Acte II ou III du S2.",
      effet: "+1 segment (segment 4)",
      consequence: "Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter.",
    },
    {
      frontId: "front_factions_crise",
      horlogeId: "menace_syndicat_instrumentalisation",
      declencheur: "Quand une milice se forme autour du Champion ou qu'Edran pratique un rite près des tombes.",
      effet: "+1 segment (segment 5)",
      consequence: "Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.",
    },
  ],

  s2_laboratoire_verre: [
    {
      frontId: "front_plan_thade",
      horlogeId: "menace_larme_vael",
      declencheur: "Quand le rituel commence à s'alimenter. Typiquement à la fin du S2 ou au début du S3.",
      effet: "+1 segment (segment 5)",
      consequence: "Les objets enchantés dérivent vers la Tour. Les sorts renvoient des échos contradictoires. Les mages ressentent une seconde pulsation.",
    },
  ],

  // ── Scénario 3 ──────────────────────────────────────────

  s3_vortex: [
    {
      frontId: "front_plan_thade",
      horlogeId: "menace_retour_sealine",
      declencheur: "Quand Thade accomplit le rituel. Automatique au début du S3 si les PJ n'ont pas arrêté Thade avant.",
      effet: "+1 segment (segment 6)",
      consequence: "Bourdonnement dans les Hauteurs. Ciel violet. Larme visible au cœur du vortex. Thade n'a plus besoin de dissimulation.",
    },
    {
      frontId: "front_sceau_qui_cede",
      horlogeId: "menace_profanation_thanes",
      declencheur: "Si les sept tombes sont suffisamment perturbées.",
      effet: "+1 segment (segment 6)",
      consequence: "Les sept tombes cessent d'agir comme un ensemble. Une lumière remonte du puits. Des sections complètes cessent d'appartenir à la mine.",
    },
  ],

  s3_conversation_trois: [],

  s3_monde_apres: [],
};

/**
 * Récupère les effets de fronts pour une scène donnée.
 * @param {string} idScene - ID stable de la scène
 * @returns {Array} Liste des effets de fronts
 */
export function obtenirEffetsFronts(idScene) {
  return effetsFrontsParScene[idScene] || [];
}
