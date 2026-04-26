/**
 * Scénario 3 - Acte 6 : La Chute du Temple
 * Temple-Forgeron
 */

export const acte6 = {
  title: "ACTE 6 : LA CHUTE DU TEMPLE",
  stake: "Tenter de stopper le rituel de Thade avant de fuir.",
  location: "Tour Arcanique et Hauteurs de Valombre.",
  scenes: [
    {
      title: "Scène 1 : La Ville Morte",
      type: "Exploration",
      image: "./images/scenes/ville_necropole.jpg",
      locationId: "rues_valombre_necropole",
      npcIds: [],
      description: {
        resume: "Traversée de la ville transformée en nécropole",
        visuel: "Brume violette, cadavres se relevant, bâtiments s'effondrant.",
        audio: "Silence de mort, grognements, effondrements.",
        odeur: "Décomposition, brume acide.",
        lumiere: "Crépuscule éternel sous dôme violet.",
      },
      narration: {
        declencheur: "Départ vers la Tour.",
        texte_a_lire:
          "Valombre agonise. Durnik : 'Si nous stoppons le rituel, le dôme tombera peut-être.'",
        contexte_mj:
          "Traversée atmosphérique. Skill challenge pour atteindre la Tour.",
        objectif: "Atteindre la Tour Arcanique.",
      },
      mecaniques: {
        defis: [
          "Skill Challenge : 5 succès avant 3 échecs",
          "Acrobaties, Athlétisme, Discrétion, Survie",
        ],
        indices: [
          "Brume dense près Tour",
          "Survivants supplient aide",
          "Tour gardée",
        ],
        recompenses: "Arrivée Tour selon état.",
      },
      transitions: {
        success: "Arrivent en bon état.",
        fail: "Arrivent épuisés.",
      },
    },
    {
      title: "Scène 2 : L'Ascension",
      type: "Infiltration",
      image: "./images/scenes/tour_arcanique_interieur.jpg",
      locationId: "tour_arcanique_escaliers",
      npcIds: ["gardes_morts_vivants"],
      description: {
        resume: "Ascension de la Tour remplie de morts-vivants",
        visuel: "Couloirs déserts, cadavres mages, escaliers spirale.",
        audio: "Incantations lointaines, bourdonnement.",
        odeur: "Sang, ozone, mort.",
        lumiere: "Lueur violette pulsante.",
      },
      narration: {
        declencheur: "Entrée Tour.",
        texte_a_lire:
          "La Tour est un tombeau vivant. Des mages morts patrouillent.",
        contexte_mj:
          "Infiltration verticale. Les PJ doivent atteindre le sommet.",
        objectif: "Atteindre le sommet de la Tour.",
      },
      mecaniques: {
        defis: [
          "Combats : 3 étages avec 4-6 morts-vivants chacun",
          "Discrétion DD 16 : éviter certains combats",
          "Connaissances (Arcanes) DD 15 : comprendre le rituel",
        ],
        indices: [
          "Rituel au sommet",
          "Thade canalise Spirale",
          "Destruction = libération",
        ],
        recompenses: "Information sur le rituel, progression vers sommet.",
      },
      transitions: {
        success: "Atteignent le sommet.",
        fail: "Blessés, retardés.",
      },
    },
    {
      title: "Scène 3 : Le Cœur de l'Ascension",
      type: "Boss final",
      image: "./images/scenes/thade_ascension.jpg",
      locationId: "tour_arcanique_sommet",
      npcIds: ["thade_coren_liche"],
      description: {
        resume: "Affrontement final avec Thade en pleine transformation",
        visuel: "Thade mi-homme mi-liche, entouré d'énergie spirale.",
        audio: "Incantations, éclairs, voix déformée.",
        odeur: "Nécromancie, brûlé, pouvoir.",
        lumiere: "Éclairs violets, aura noire.",
      },
      narration: {
        declencheur: "Arrivée au sommet.",
        texte_a_lire: "Thade : 'Vous êtes en retard. L'Ascension a commencé.'",
        contexte_mj:
          "Boss final. Thade se transforme en liche pendant le combat.",
        objectif: "Arrêter Thade et détruire le rituel.",
      },
      mecaniques: {
        defis: [
          "Combat : Thade (Magicien 10) se transforme progressivement en liche",
          "Phase 1 : Magicien 10 avec sorts de contrôle",
          "Phase 2 : Mi-liche (RD 10/contondant, immunité mort froid)",
          "Phase 3 : Liche complète (RD 15, aura de peur)",
          "Rituel : Chaque round, dôme se renforce. Détruire cristal central = arrêter rituel",
        ],
        indices: [
          "Cristal = cœur rituel",
          "Thade vulnérable pendant transformation",
          "Destruction cristal = libération",
        ],
        recompenses: "Victoire, sauvegarde de Valombre, XP majeur.",
      },
      transitions: {
        success: "Thade vaincu, ville sauvée.",
        fail: "Thade réussit, ville perdue.",
      },
    },
    {
      title: "Scène 4 : L'Effondrement",
      type: "Évasion",
      image: "./images/scenes/effondrement_tour.jpg",
      locationId: "tour_arcanique_effondrement",
      npcIds: [],
      description: {
        resume: "Fuite de la Tour qui s'effondre",
        visuel: "Tour s'effondre, dôme se fissure, éclaircies.",
        audio: "Explosions, craquements, cris de libération.",
        odeur: "Air frais, poussière, fin de la corruption.",
        lumire: "Lumière du jour, fissures dans dôme.",
      },
      narration: {
        declencheur: "Défaite de Thade.",
        texte_a_lire:
          "La Tour s'effondre. Le dôme se fissure. La lumière revient.",
        contexte_mj:
          "Course-poursuite verticale. Les PJ doivent fuir la Tour qui s'effondre.",
        objectif: "Échapper à la Tour en ruines.",
      },
      mecaniques: {
        defis: [
          "Athlétisme DD 14 : descendre rapidement",
          "Acrobaties DD 16 : éviter débris",
          "Vigueur DD 12 : résister à la poussière",
        ],
        indices: [
          "Passage secret sous Temple = sortie sûre",
          "Dôme se fissure = espoir",
        ],
        recompenses: "Évasion, fin de la menace.",
      },
      transitions: {
        success: "Échappent sains et saufs.",
        fail: "Blessés mais vivants.",
      },
    },
    {
      title: "Scène 5 : L'Aube de la Libération",
      type: "Épilogue",
      image: "./images/scenes/valombre_liberee.jpg",
      locationId: "valombre_reconstruction",
      npcIds: ["durnik_chef_mineur", "thorgar_pretre_nain"],
      description: {
        resume: "Valombre se relève après la chute de Thade",
        visuel: "Ville endommagée mais libre. Survivants sortent.",
        audio: "Cris de joie, travaux de reconstruction.",
        odeur: "Air frais, espoir, bois coupé.",
        lumire: "Soleil levant sur les ruines.",
      },
      narration: {
        declencheur: "Sortie des égouts/ruines.",
        texte_a_lire:
          "Le soleil se lève sur Valombre. La ville est dévastée mais libre. Durnik : 'Vous l'avez fait. Vous nous avez sauvés.'",
        contexte_mj:
          "Conclusion. Les PJ sont des héros. La ville doit reconstruire.",
        objectif: "Célébrer la victoire et préparer l'avenir.",
      },
      mecaniques: {
        defis: ["Aucun. Scène de conclusion et récompenses."],
        indices: [
          "Thade vaincu mais pas détruit",
          "Spirale toujours active",
          "Prochain scénario",
        ],
        recompenses:
          "Héroïs de Valombre, récompenses majeures, passage au niveau 10.",
      },
      transitions: {
        success: "Fin du Scénario 3. Vers le Scénario 4.",
        fail: "Fin du Scénario 3. Vers le Scénario 4.",
      },
    },
  ],
};
