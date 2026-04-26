/**
 * Scénario 5 - Acte 3 : L'Apothéose du Vide
 * Sommet de la Tour Arcanique
 */

export const acte3 = {
  title: "ACTE 3 : L'APOTHÉOSE DU VIDE",
  stake: "Vaincre Thade Coren et refermer la Spirale définitivement.",
  location: "Sommet de la Tour Arcanique.",
  scenes: [
    {
      title: "Scène 1 : Le Trône de Sang",
      type: "Cinématique",
      image: "./images/scenes/throne_sang.jpg",
      locationId: "tour_sommet",
      npcIds: ["thade_coren_dieu"],
      description: {
        resume: "Thade attend au sommet, surplombant le vortex.",
        visuel:
          "Le toit de la Tour n'existe plus. C'est une plateforme flottant dans le vortex de la Spirale. Thade flotte au centre, nimbé de lumière noire.",
        audio: "Le chant de l'univers qui se déchire.",
        odeur: "Vide.",
        lumiere: "Étoiles noires.",
      },
      narration: {
        declencheur: "Arrivée au sommet.",
        texte_a_lire:
          "Thade ouvre les yeux. Ils contiennent des galaxies. « Enfin. Les témoins de ma naissance. Vous avez été utiles, en m'apportant l'énergie de la mine, en éliminant mes rivaux. Maintenant, soyez utiles une dernière fois : mourrez pour nourrir mon ascension. »",
        contexte_mj: "Le boss final commence.",
        objectif: "Survivre au premier assaut.",
      },
      mecaniques: {
        defis: [],
        indices: [
          "Le Cristal chargé (Scénario 2) que vous portez réagit à Thade.",
        ],
        recompenses: "Initiative.",
      },
      transitions: {
        success: "Combat.",
      },
    },
    {
      title: "Scène 2 : Le Combat des Deux Mondes",
      type: "Boss Final",
      image: "./images/scenes/combat_final.jpg",
      locationId: "tour_sommet_vortex",
      npcIds: ["thade_coren_dieu"],
      description: {
        resume:
          "Duel final contre Thade. Le décor alterne entre réalité et vide.",
        visuel:
          "Thade manipule la réalité. Un round vous êtes sur la tour, le suivant dans le vide.",
        audio: "Tonnerre dimensionnel.",
        odeur: "Ozone.",
        lumiere: "Stroboscopique.",
      },
      narration: {
        declencheur: "Combat.",
        texte_a_lire:
          "Thade n'est plus un mage. Il est la Spirale. Il change le terrain à volonté.",
        contexte_mj:
          "Thade a 3 phases. 1: Mage (Sorts). 2: Avatar (Corps à corps, dégâts de zone). 3: Vide (Intangible, doit être attaqué avec le Cristal ou volonté).",
        objectif: "Vaincre Thade.",
      },
      mecaniques: {
        defis: [
          "Combat : Thade Coren (Archimage / Avatar du Vide).",
          "Environnement : Changement de terrain chaque round.",
        ],
        indices: [
          "Utilisez le Cristal Saturé du Scénario 2 pour briser son bouclier en phase 3.",
        ],
        recompenses: "Thade est vaincu.",
      },
      transitions: {
        success: "Thade s'effondre.",
      },
    },
    {
      title: "Scène 3 : L'Effondrement du Vortex",
      type: "Action / Sacrifice",
      image: "./images/scenes/effondrement_vortex.jpg",
      locationId: "tour_sommet_destruction",
      npcIds: [],
      description: {
        resume: "Thade tente d'entraîner la ville. Il faut briser le Cristal.",
        visuel:
          "Le vortex devient instable. Il aspire tout. Thade rit en se désintégrant.",
        audio: "Hurlement d'agonie de la réalité.",
        odeur: "Néant.",
        lumiere: "Noir total.",
      },
      narration: {
        declencheur: "Défaite de Thade.",
        texte_a_lire:
          "« Si je tombe, tout tombe ! » Le vortex s'élargit. Il va avaler Valombre. Le Cristal dans votre sac brûle. Vous comprenez : il est le lien. Si vous le brisez dans le vortex, l'explosion refermera la faille. Mais l'onde de choc sera dévastatrice.",
        contexte_mj:
          "Dernier acte héroïque. Briser le cristal inflige des dégâts massifs (ou mort possible).",
        objectif: "Briser le Cristal.",
      },
      mecaniques: {
        defis: ["Courage (Volonté DD 24).", "Action : Détruire le Cristal."],
        indices: ["C'est la seule façon."],
        recompenses: "Le vortex se ferme.",
      },
      transitions: {
        success: "Explosion blanche.",
      },
    },
    {
      title: "Scène 4 : L'Aube Grise",
      type: "Épilogue",
      image: "./images/scenes/epilogue_fin.jpg",
      locationId: "ruines_tour",
      npcIds: ["mara_dirigeante"],
      description: {
        resume: "Épilogue. Thade est vaincu. La ville est libre.",
        visuel:
          "Vous vous réveillez dans les décombres de la Tour. Le soleil (le vrai) se lève. Mara et Thorgar vous trouvent.",
        audio: "Oiseaux. Vent calme.",
        odeur: "Matin frais.",
        lumiere: "Dorée.",
      },
      narration: {
        declencheur: "Réveil.",
        texte_a_lire:
          "C'est fini. Le dôme est parti. La Spirale est close. Valombre est en ruine, mais libre. On vous appelle 'Les Gardiens du Vide'. Mara vous sourit : « Il y a tant à reconstruire. »",
        contexte_mj: "Fin de la campagne.",
        objectif: "Savourer la victoire.",
      },
      mecaniques: {
        defis: [],
        indices: [
          "Une lueur violette persiste au fond des yeux d'un des PJ...",
        ],
        recompenses: "Fin.",
      },
      transitions: {
        success: "Crédits.",
      },
    },
  ],
};
