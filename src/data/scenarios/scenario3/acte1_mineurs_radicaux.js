/**
 * Scénario 3 - Acte 1 : Les Mineurs Radicaux
 * Quartier des Mineurs
 */

export const acte1 = {
  title: "ACTE 1 : LES MINEURS RADICAUX",
  stake:
    "Infiltrer le mouvement de grève pour identifier les meneurs, tout en naviguant entre les ordres de Thade et la réalité du terrain.",
  location: "Quartier des Mineurs.",
  scenes: [
    {
      title: "Scène 1 : Quartier Instable",
      type: "Social",
      image: "./images/scenes/barricades_mineurs.jpg",
      locationId: "quartier_des_mineurs_place",
      npcIds: ["thade_coren", "meneur_greviste"],
      description: {
        resume:
          "Thade envoie les PJ comme médiateurs neutres. Officieusement, il demande d'identifier les meneurs radicaux.",
        visuel:
          "Les rues sont bloquées par des charrettes renversées. Des slogans anti-conseil couvrent les murs. L'ambiance est explosive.",
        audio: "Cris, chants de grève, bruits de verre brisé au loin.",
        odeur: "Fumée de brasero et tension palpable.",
        lumiere: "Lumière du jour voilée par la fumée des pneus brûlés.",
      },
      narration: {
        declencheur: "Arrivée aux barricades.",
        texte_a_lire:
          "Thade a été clair : « Ces radicaux menacent la stabilité de la ville. Je veux des noms. » Mais sur le terrain, la réalité est différente. Les mineurs ne sont pas des terroristes, ce sont des pères de famille affamés. Ils vous regardent avec méfiance. « Encore des envoyés du Conseil ? Dégagez, ou on vous sort par la force ! »",
        contexte_mj:
          "Les PJ doivent gagner la confiance des mineurs pour approcher les chefs, tout en jouant le jeu de Thade.",
        objectif: "Entrer dans le QG des grévistes.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 15) : Prouver sa neutralité.",
          "Bluff (DD 18) : Se faire passer pour des sympathisants.",
        ],
        indices: ["Les mineurs parlent de 'disparitions' parmi leurs chefs."],
        recompenses: "Accès au cercle intérieur de la grève.",
      },
      transitions: {
        success: "Rencontre avec Mara (Scène 2).",
        fail: "Les PJ doivent s'infiltrer discrètement ou user de force non-létale.",
      },
    },
    {
      title: "Scène 2 : Entre deux Feux",
      type: "Social / Tension",
      image: "./images/scenes/mara_taverne.jpg",
      locationId: "taverne_fumees_rouges",
      npcIds: ["mara_aubergiste", "thorgar_pretre_nain"],
      description: {
        resume:
          "Thorgar contacte les PJ : les meneurs de la grève sont retrouvés morts. Il demande de protéger Mara, la dernière voix influente.",
        visuel:
          "L'arrière-salle de la taverne. Thorgar soigne un mineur blessé. Mara nettoie nerveusement le comptoir.",
        audio: "Chuchotements inquiets.",
        odeur: "Alcool fort et antiseptique.",
        lumiere: "Sombre, volets clos.",
      },
      narration: {
        declencheur: "Rencontre avec Thorgar.",
        texte_a_lire:
          "Thorgar vous tire à l'écart. « Ce n'est pas une grève, c'est une exécution. Trois chefs de section retrouvés égorgés ce matin. Thade dit que c'est des règlements de compte internes. Mensonges ! Il nettoie le terrain. Mara est la prochaine. Elle sait tenir les têtes brûlées, si elle tombe, c'est la guerre civile. Protégez-la. »",
        contexte_mj:
          "Le double jeu devient dangereux. Thade veut les noms pour les tuer. Thorgar veut protéger les noms pour la paix.",
        objectif: "Organiser la protection de Mara.",
      },
      mecaniques: {
        defis: [
          "Perception (DD 16) : Repérer les espions de Thade dans la salle commune.",
          "Stratégie (DD 14) : Mettre en place un périmètre de sécurité.",
        ],
        indices: [
          "Les morts portent des traces de magie indétectable pour le commun des mortels.",
        ],
        recompenses: "Confiance totale de Thorgar.",
      },
      transitions: {
        success: "Fin de l'Acte 1. Explosion au loin (Début Acte 2).",
      },
    },
  ],
};
