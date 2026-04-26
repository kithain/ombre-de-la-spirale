/**
 * Scénario 5 - Acte 1 : La Résistance de l'Ombre
 * Souterrains et Rues de Valombre
 */

export const acte1 = {
  title: "ACTE 1 : LA RÉSISTANCE DE L'OMBRE",
  stake: "Retrouver la résistance et briser le siège de la Tour.",
  location: "Souterrains et Rues de Valombre.",
  scenes: [
    {
      title: "Scène 1 : Les Rats de la Guilde",
      type: "Social / Planification",
      image: "./images/scenes/resistance_egouts.jpg",
      locationId: "cachette_resistance",
      npcIds: ["mara_resistance"],
      description: {
        resume: "Retrouvailles avec Mara. Planification de l'assaut final.",
        visuel:
          "Les égouts sont devenus une ville souterraine. Mara, cicatrisée, dirige les opérations sur une carte de la ville.",
        audio: "Bruit de forge lointain, chuchotements.",
        odeur: "Huile, sueur, espoir.",
        lumiere: "Torches.",
      },
      narration: {
        declencheur: "Arrivée au QG.",
        texte_a_lire:
          "Mara tape sur la table. « Ils sont revenus ! Thade pense avoir gagné, mais il a oublié un détail : vous. La ville est sous un dôme, mais nous avons trouvé une faille. Si nous frappons la Tour maintenant, pendant son rituel d'apothéose, nous pouvons tout arrêter. Mais Thorgar a été capturé. Il va être sacrifié sur la Place des Exécutions pour alimenter le cristal. »",
        contexte_mj:
          "Double objectif : libérer Thorgar (pour ses pouvoirs divins) et percer vers la Tour.",
        objectif: "Préparer l'assaut.",
      },
      mecaniques: {
        defis: ["Stratégie (DD 16) : Coordonner les attaques de diversion."],
        indices: ["L'exécution est prévue à midi pile."],
        recompenses: "Soutien des troupes de Mara.",
      },
      transitions: {
        success: "Départ pour la Place.",
      },
    },
    {
      title: "Scène 2 : La Place des Exécutions",
      type: "Combat Héroïque",
      image: "./images/scenes/sauvetage_thorgar.jpg",
      locationId: "place_executions",
      npcIds: ["thorgar_prisonnier", "bourreau_zombie"],
      description: {
        resume: "Diversion et libération de Thorgar.",
        visuel:
          "Thorgar sur l'échafaud. Le bourreau lève sa hache. La foule de zombies regarde.",
        audio: "Grondement de la foule morte.",
        odeur: "Charogne.",
        lumiere: "Soleil noir.",
      },
      narration: {
        declencheur: "Arrivée sur la place.",
        texte_a_lire:
          "Vous n'avez pas le temps pour la subtilité. Vous chargez. Mara et ses hommes occupent les gardes. Vous, vous foncez sur l'échafaud.",
        contexte_mj:
          "Combat contre le temps. 3 rounds avant que la hache ne tombe.",
        objectif: "Sauver Thorgar.",
      },
      mecaniques: {
        defis: [
          "Combat : Bourreau (Guerrier 8) + 10 Zombies.",
          "Chrono : 3 rounds.",
        ],
        indices: ["Le bourreau est lent mais frappe fort."],
        recompenses: "Thorgar libéré (soins, bénédictions).",
      },
      transitions: {
        success: "Thorgar rejoint le groupe.",
        fail: "Thorgar meurt (malus moral, pas de soins).",
      },
    },
    {
      title: "Scène 3 : Les Portes de la Tour",
      type: "Combat de Masse",
      image: "./images/scenes/assaut_tour.jpg",
      locationId: "tour_arcanique_entree",
      npcIds: ["coquilles_vides"],
      description: {
        resume: "Percée à travers les lignes de défense.",
        visuel:
          "La Tour est entourée d'une armée de 'Coquilles' (zombies en armure arcanique).",
        audio: "Choc des armées.",
        odeur: "Ozone et sang.",
        lumiere: "Éclairs violets de la Tour.",
      },
      narration: {
        declencheur: "Approche de la Tour.",
        texte_a_lire:
          "La résistance ouvre une brèche. « Allez-y ! » hurle Mara. « On les retient ! » Devant vous, les portes de la Tour, gardées par l'élite de Thade.",
        contexte_mj: "Les PJ doivent entrer seuls. La résistance reste dehors.",
        objectif: "Entrer dans la Tour.",
      },
      mecaniques: {
        defis: [
          "Combat : 4 Gardes d'Élite (Guerrier 6) avec équipement magique.",
        ],
        indices: [
          "Les gardes sont liés à la Tour. Si la Tour tombe, ils tombent.",
        ],
        recompenses: "Entrée dans l'Acte 2.",
      },
      transitions: {
        success: "Entrée dans la Tour.",
      },
    },
  ],
};
