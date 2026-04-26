/**
 * Scénario 5 - Acte 2 : L'Ascension des Miroirs
 * Intérieur de la Tour Arcanique
 */

export const acte2 = {
  title: "ACTE 2 : L'ASCENSION DES MIROIRS",
  stake: "Gravir la tour et déjouer les pièges dimensionnels de Thade.",
  location: "Intérieur de la Tour Arcanique.",
  scenes: [
    {
      title: "Scène 1 : Le Grand Escalier de Verre",
      type: "Combat / Environnement",
      image: "./images/scenes/escalier_verre.jpg",
      locationId: "tour_escalier",
      npcIds: ["echos_planaires"],
      description: {
        resume: "Ascension où la géométrie change. Combat contre des reflets.",
        visuel:
          "Un escalier en spirale sans fin. Les murs sont des miroirs. Vos reflets sortent des miroirs pour vous attaquer.",
        audio: "Bris de verre cristallin.",
        odeur: "Rien.",
        lumiere: "Reflets infinis.",
      },
      narration: {
        declencheur: "Début de l'ascension.",
        texte_a_lire:
          "L'escalier semble ne jamais finir. Dans les miroirs, vos reflets vous sourient... cruellement. Ils sortent de la glace, armes à la main. Ce sont des Échos Planaires, vos parts d'ombre.",
        contexte_mj:
          "Les ennemis ont les mêmes stats que les PJ (ou simplifiées).",
        objectif: "Vaincre ses propres démons.",
      },
      mecaniques: {
        defis: [
          "Combat : Doubles des PJ (ou Ombres avec capacités des PJ).",
          "Volonté (DD 16) : Discerner le vrai du faux.",
        ],
        indices: ["Les reflets sont gauchers (inversés)."],
        recompenses: "Passage au niveau suivant.",
      },
      transitions: {
        success: "Arrivée au laboratoire.",
      },
    },
    {
      title: "Scène 2 : Le Laboratoire de Cristal",
      type: "Choix Moral",
      image: "./images/scenes/labo_thade_final.jpg",
      locationId: "tour_labo",
      npcIds: ["corps_thade"],
      description: {
        resume: "Découverte du corps physique de Thade, vulnérable.",
        visuel:
          "Une salle remplie de cuves. Au centre, le corps d'origine de Thade, relié à des machines. Il est vide, son esprit est ailleurs.",
        audio: "Battement de cœur mécanique.",
        odeur: "Liquide conservateur.",
        lumiere: "Verte.",
      },
      narration: {
        declencheur: "Entrée dans le labo.",
        texte_a_lire:
          "Voici le corps mortel de Thade. Il l'a abandonné pour devenir une entité pure. Mais il est encore relié à lui. Des tubes pompent l'énergie vitale de prisonniers nains pour le maintenir 'frais' au cas où. Vous pouvez détruire le corps (ce qui affaiblira Thade là-haut) mais cela tuera les nains connectés (choc en retour). Ou débrancher les nains (les sauve, mais Thade reste à pleine puissance).",
        contexte_mj:
          "Choix difficile. Détruire le corps = Thade perd 50 PV max et sa Régénération. Sauver les nains = Alliés moraux, XP bonus.",
        objectif: "Choisir.",
      },
      mecaniques: {
        defis: [
          "Médecine (DD 18) : Comprendre le lien vital.",
          "Choix : Détruire (Facilite le boss) ou Sauver (Héroïsme).",
        ],
        indices: ["Le corps est une ancre. Sans lui, Thade est instable."],
        recompenses: "Avantage tactique ou moral.",
      },
      transitions: {
        success: "Vers la Salle des Cartes.",
      },
    },
    {
      title: "Scène 3 : La Salle des Cartes",
      type: "Puzzle / Tactique",
      image: "./images/scenes/salle_cartes.jpg",
      locationId: "tour_cartes",
      npcIds: ["gargouilles_sang"],
      description: {
        resume: "Puzzle pour lever le dôme sur la ville.",
        visuel:
          "Une carte holographique de la ville. Le dôme est projeté d'ici. Des gargouilles de sang gardent le projecteur.",
        audio: "Bourdonnement du projecteur.",
        odeur: "Sang.",
        lumiere: "Rouge.",
      },
      narration: {
        declencheur: "Arrivée salle des cartes.",
        texte_a_lire:
          "C'est d'ici que le dôme est maintenu. Si vous réalignez les lentilles, vous pouvez le dissiper. Mais les gardiens ne vous laisseront pas faire.",
        contexte_mj:
          "Combat tout en résolvant un puzzle. Un PJ doit manipuler les lentilles (3 actions) pendant que les autres défendent.",
        objectif: "Lever le dôme.",
      },
      mecaniques: {
        defis: [
          "Combat : 4 Gargouilles de Sang (Régénération).",
          "Ingénierie/Arcanes (DD 18) : Réaligner les lentilles.",
        ],
        indices: [
          "Le dôme tire son énergie du sommet. Couper le flux ici l'annule.",
        ],
        recompenses: "Le dôme tombe. La ville est libre (moral +++).",
      },
      transitions: {
        success: "Vers le sommet.",
      },
    },
    {
      title: "Scène 4 : Le Sacrilège d'Ilse",
      type: "Boss Mineur",
      image: "./images/scenes/ilse_monstre.jpg",
      locationId: "tour_antichambre",
      npcIds: ["ilse_transformee"],
      description: {
        resume: "Confrontation avec l'apprentie de Thade, monstrueuse.",
        visuel:
          "Ilse, l'apprentie du scénario 1. Elle a fusionné avec un démon. Elle garde la porte du toit.",
        audio: "Rire dément.",
        odeur: "Soufre.",
        lumiere: "Ténèbres.",
      },
      narration: {
        declencheur: "Devant la porte finale.",
        texte_a_lire:
          "« Vous ! Vous avez gâché mon rituel avec Jaren ! Le Maître m'a donné une seconde chance. Regardez ma puissance ! »",
        contexte_mj:
          "Ilse est un monstre tragique. Elle veut juste être reconnue.",
        objectif: "Vaincre Ilse.",
      },
      mecaniques: {
        defis: ["Combat : Ilse (Hybride Démon/Mage niv 9)."],
        indices: [
          "Elle est instable. La provoquer sur ses échecs la désavantage.",
        ],
        recompenses: "Accès au toit.",
      },
      transitions: {
        success: "Accès à l'Acte 3.",
      },
    },
  ],
};
