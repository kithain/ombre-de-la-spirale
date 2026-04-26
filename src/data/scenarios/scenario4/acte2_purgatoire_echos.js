/**
 * Scénario 4 - Acte 2 : Le Purgatoire des Échos
 * Village des Perdus
 */

export const acte2 = {
  title: "ACTE 2 : LE PURGATOIRE DES ÉCHOS",
  stake:
    "Négocier avec les habitants pour trouver un guide et survivre à l'infection.",
  location: "Village des Perdus.",
  scenes: [
    {
      title: "Scène 1 : Le Village des Oubliés",
      type: "Social",
      image: "./images/scenes/village_oublies.jpg",
      locationId: "spirale_village",
      npcIds: ["ancien_du_village"],
      description: {
        resume:
          "Rencontre avec une communauté hétéroclite de créatures bloquées ici.",
        visuel:
          "Des cabanes faites de bric et de broc, accrochées à un énorme rocher flottant. Humains, gobelins, et créatures inconnues vivent ensemble.",
        audio: "Chuchotements, bruits de vie quotidienne au ralenti.",
        odeur: "Cuisine étrange.",
        lumiere: "Feux de camp multicolores.",
      },
      narration: {
        declencheur: "Arrivée au village.",
        texte_a_lire:
          "Ils vous regardent avec pitié. Ici, le temps n'a pas de sens. Certains sont là depuis des siècles. 'Nouveaux venus ? N'espérez pas repartir. Installez-vous.'",
        contexte_mj:
          "Les habitants ont perdu l'espoir. Ils peuvent aider, mais ne croient pas à la sortie.",
        objectif: "Trouver quelqu'un qui connaît le chemin.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 14) : Convaincre l'Ancien de parler.",
          "Psychologie (DD 12) : Comprendre leur apathie.",
        ],
        indices: ["Un guide nommé 'Le Passeur' vit au Marché des Souvenirs."],
        recompenses: "Repos sûr.",
      },
      transitions: {
        success: "Direction le Marché.",
      },
    },
    {
      title: "Scène 2 : Le Marché des Souvenirs",
      type: "Social / Commerce",
      image: "./images/scenes/marche_souvenirs.jpg",
      locationId: "spirale_marche",
      npcIds: ["le_passeur"],
      description: {
        resume: "Troc de souvenirs contre des services.",
        visuel:
          "Un bazar où l'on vend des émotions en bouteille et des souvenirs cristallisés.",
        audio: "Rires et pleurs en écho.",
        odeur: "Encens onirique.",
        lumiere: "Tamisée.",
      },
      narration: {
        declencheur: "Rencontre avec le Passeur.",
        texte_a_lire:
          "Le Passeur est une ombre encapuchonnée. 'Je connais le chemin vers le bas. Mais le prix est élevé. Je ne veux pas d'or. Je veux un souvenir heureux. Donnez-le moi, et je vous guide.'",
        contexte_mj:
          "Le prix est mécanique : perte d'XP ou malus temporaire à la Volonté pour représenter la perte de mémoire.",
        objectif: "Payer le prix pour obtenir le guide.",
      },
      mecaniques: {
        defis: [
          "Sacrifice : Accepter de perdre un souvenir (Perte de 100 XP ou -1 Volonté pour le scénario).",
          "Négociation (DD 18) : Réduire le prix.",
        ],
        indices: [
          "Le Passeur indique la route vers la Cathédrale des Soupirs.",
        ],
        recompenses: "Guide vers l'Acte 3.",
      },
      transitions: {
        success: "Le groupe avance.",
        fail: "Le groupe doit trouver le chemin seul (désavantage).",
      },
    },
    {
      title: "Scène 3 : La Peste Originelle",
      type: "Danger / Maladie",
      image: "./images/scenes/zone_magie_sauvage.jpg",
      locationId: "spirale_peste",
      npcIds: [],
      description: {
        resume: "Traversée d'une zone de magie sauvage infectieuse.",
        visuel:
          "L'air ondule. La réalité se déforme. Votre peau commence à briller.",
        audio: "Bourdonnement statique.",
        odeur: "Métal.",
        lumiere: "Éclairs de couleurs impossibles.",
      },
      narration: {
        declencheur: "Traversée de la zone tampon.",
        texte_a_lire:
          "Le sang dans vos veines devient chaud. Des motifs lumineux apparaissent sous votre peau. C'est la Peste de la Spirale. Elle tente de vous réécrire.",
        contexte_mj:
          "Zone de danger environnemental. Jets de Vigueur réguliers.",
        objectif: "Traverser vite avant d'être muté.",
      },
      mecaniques: {
        defis: [
          "Vigueur (DD 15) : Résister à la mutation (Dégâts Con ou Cha).",
          "Arcanes (DD 14) : Se protéger magiquement.",
        ],
        indices: ["La Cathédrale au loin semble stabiliser la zone."],
        recompenses: "Accès à l'Acte 3.",
      },
      transitions: {
        success: "Arrivée à la Cathédrale.",
      },
    },
  ],
};
