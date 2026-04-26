/**
 * Scénario 3 - Acte 2 : Le Sabotage
 * Galeries de la Mine
 */

export const acte2 = {
  title: "ACTE 2 : LE SABOTAGE",
  stake:
    "Enquêter sur l'explosion et survivre à la tentative d'élimination orchestrée par Thade.",
  location: "Galeries de la Mine.",
  scenes: [
    {
      title: "Scène 1 : L'Incident de la Galerie 4",
      type: "Action",
      image: "./images/scenes/explosion_mine.jpg",
      locationId: "mine_galerie_4",
      npcIds: [],
      description: {
        resume:
          "Une explosion retentit. Thade accuse les radicaux. Les PJ doivent se rendre sur place.",
        visuel:
          "Fumée noire sortant d'un puits d'aération. Sirènes d'alarme. Thade arrive, l'air grave.",
        audio: "Sirènes, toux, cris.",
        odeur: "Poudre noire.",
        lumiere: "Lumière rouge des lampes de secours.",
      },
      narration: {
        declencheur: "L'explosion.",
        texte_a_lire:
          "Thade ne perd pas de temps. « Voilà ce que vos amis radicaux ont fait ! Ils ont fait sauter la Galerie 4. Allez là-bas. Confirmez que c'est une bombe artisanale naine. J'ai besoin de preuves pour le Conseil. »",
        contexte_mj:
          "Thade envoie les PJ dans un piège. Il a fait sauter la galerie lui-même.",
        objectif: "Se rendre sur le lieu de l'explosion.",
      },
      mecaniques: {
        defis: ["Médecine (DD 14) : Aider les blessés en chemin."],
        indices: ["L'explosion a eu lieu dans une section vide."],
        recompenses: "Aucune.",
      },
      transitions: {
        success: "Arrivée sur le site.",
      },
    },
    {
      title: "Scène 2 : Enquête Sous Tension",
      type: "Investigation",
      image: "./images/scenes/decombres_mine.jpg",
      locationId: "mine_galerie_4",
      npcIds: [],
      description: {
        resume:
          "Les PJ explorent les décombres. Ils découvrent que la bombe n'était pas naine.",
        visuel:
          "Roche éclatée. Pas de traces de pioches, mais des traces de brûlures magiques.",
        audio: "Craquements de la roche.",
        odeur: "Soufre et ozone (pas de poudre noire).",
        lumiere: "Lampes torches.",
      },
      narration: {
        declencheur: "Fouille des décombres.",
        texte_a_lire:
          "Vous cherchez des résidus de poudre noire, typiques des explosifs miniers. Vous ne trouvez rien. Au contraire, la roche est vitrifiée. C'est un sort de 'Désintégration' scellé dans une rune. Seul un mage de haut niveau peut faire ça. Et... vous trouvez un fragment de tissu violet coincé sous un rocher.",
        contexte_mj: "Preuve accablante contre Thade. C'est un coup monté.",
        objectif: "Comprendre la trahison.",
      },
      mecaniques: {
        defis: [
          "Arcanes (DD 16) : Identifier la signature magique de l'explosion.",
          "Investigation (DD 14) : Trouver le fragment de tissu.",
        ],
        indices: ["Le tissu provient d'une robe de mage de l'Université."],
        recompenses: "Preuve matérielle.",
      },
      transitions: {
        success: "Retour vers Mara pour la prévenir.",
      },
    },
    {
      title: "Scène 3 : L'Embuscade des Purificateurs",
      type: "Combat",
      image: "./images/scenes/embuscade_nettoyeurs.jpg",
      locationId: "taverne_fumees_rouges",
      npcIds: ["mara_aubergiste", "mercenaire_mage"],
      description: {
        resume:
          "Les PJ retrouvent Mara. Des 'Nettoyeurs' de Thade attaquent pour éliminer tous les témoins.",
        visuel:
          "Les fenêtres de la taverne explosent. Des mages de guerre et des mercenaires entrent.",
        audio: "Bris de verre, boules de feu.",
        odeur: "Bois brûlé.",
        lumiere: "Les éclairs magiques illuminent la taverne.",
      },
      narration: {
        declencheur: "Discussion avec Mara.",
        texte_a_lire:
          "À peine avez-vous montré le tissu à Mara que la façade de la taverne explose. Des hommes en armures noires entrent. « Pas de témoins. Ordre de Coren. »",
        contexte_mj: "Le masque tombe. Thade veut nettoyer l'opposition.",
        objectif: "Survivre et sauver Mara.",
      },
      mecaniques: {
        defis: [
          "Combat : 2 Mages de guerre (Niv 3) + 4 Mercenaires.",
          "Protection : Mara ne doit pas mourir.",
        ],
        indices: [
          "Les assaillants portent le sceau des services secrets de l'Université.",
        ],
        recompenses: "Survie. Mara est maintenant une alliée indéfectible.",
      },
      transitions: {
        success: "Fuite vers le Conseil pour confronter Thade (Acte 3).",
      },
    },
  ],
};
