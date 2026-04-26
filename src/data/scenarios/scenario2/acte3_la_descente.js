/**
 * Scénario 2 - Acte 3 : La Descente
 * Mine d'Argent de Valombre
 */

export const acte3 = {
  title: "ACTE 3 : LA DESCENTE",
  stake:
    "Descendre au fond de la mine pour utiliser le cristal de confinement sur la source de l'anomalie.",
  location: "Mine d'Argent de Valombre.",
  scenes: [
    {
      title: "Scène 1 : Le Cristal de Confinement",
      type: "Social / Équipement",
      image: "./images/scenes/conference_spirale.jpg",
      locationId: "bureau_thade_coren",
      npcIds: ["thade_coren"],
      description: {
        resume:
          "Thade confie aux PJ un artefact présenté comme défensif pour sceller la fuite.",
        visuel:
          "Thade sort un cristal complexe d'un coffret plombé. Il est lourd, chaud, et parcouru d'éclairs internes.",
        audio: "Un léger sifflement quand on le touche.",
        odeur: "Métal chaud.",
        lumiere: "Pulsations rythmiques.",
      },
      narration: {
        declencheur: "Début de la mission.",
        texte_a_lire:
          "« Voici le Cristal de Confinement. C'est un chef-d'œuvre d'artificerie. Il est conçu pour absorber les surplus d'énergie nécrotique et colmater la brèche. Ne le perdez pas. Sans lui, descendre au niveau -8 serait du suicide. Et rappelez-vous : vous le faites pour la ville. »",
        contexte_mj:
          "Le cristal est en fait une 'éponge' à énergie pour charger l'arme de Thade. Il ne colmate rien, il draine.",
        objectif: "Prendre le cristal et partir pour la mine.",
      },
      mecaniques: {
        defis: [
          "Arcanes (DD 20) : Sentir que la structure du sort dans le cristal est... agressive, plus proche d'un siphon que d'un bouchon.",
        ],
        indices: [
          "Thade insiste : 'Il doit être saturé pour fonctionner. N'ayez pas peur de l'exposer à la source.'",
        ],
        recompenses: "Objet de quête : Cristal de Thade.",
      },
      transitions: { success: "Départ pour la mine." },
    },
    {
      title: "Scène 2 : La Mine Condamnée",
      type: "Exploration / Danger",
      image: "./images/scenes/entree_mine_interdite.jpg",
      locationId: "mine_argent_entree",
      npcIds: ["garde_mine"],
      description: {
        resume: "Descente dans une zone interdite de la mine. Les mineurs ont peur.",
        visuel:
          "Barrières 'ACCÈS INTERDIT'. Mineurs aux visages gris. Le monte-charge grince.",
        audio: "Le vent s'engouffre dans le puits avec un hurlement.",
        odeur: "Poussière et œuf pourri (soufre).",
        lumiere: "Lampes frontales vacillantes.",
      },
      narration: {
        declencheur: "Arrivée à la mine.",
        texte_a_lire:
          "Les niveaux supérieurs sont vides. Plus on descend, plus l'air est lourd. Au niveau -6, les parois suintent un liquide noir. Au niveau -7, la roche elle-même semble gémir. Vous entrez dans la zone interdite.",
        contexte_mj: "La corruption de la Spirale commence à affecter la réalité physique.",
        objectif: "Atteindre le fond sans succomber à la pression mentale.",
      },
      mecaniques: {
        defis: [
          "Vigueur (DD 12) : Résister aux nausées.",
          "Volonté (DD 12) : Résister aux hallucinations auditives.",
        ],
        indices: ["Des cadavres de rats mutants.", "Des outils de mineurs abandonnés précipitamment."],
        recompenses: "Ambiance et tension.",
      },
      transitions: { success: "Arrivée au niveau -8." },
    },
    {
      title: "Scène 3 : La Fissure du Niveau -8",
      type: "Action",
      image: "./images/scenes/breche_spirale.jpg",
      locationId: "mine_fond",
      npcIds: [],
      description: {
        resume:
          "Les PJ utilisent le cristal pour ouvrir un passage. Découverte de dispositifs anciens sabotés.",
        visuel:
          "Une faille violette déchire le fond de la mine. Autour, des runes naines anciennes ont été martelées (sabotées).",
        audio: "Le bourdonnement devient assourdissant.",
        odeur: "Ozone pur.",
        lumiere: "La faille éclaire tout en violet.",
      },
      narration: {
        declencheur: "Approche de la faille.",
        texte_a_lire:
          "C'est ici. La source. Le cristal de Thade s'affole, tirant votre bras vers la faille. Vous remarquez au sol des plaques de métal gravées de runes : des sceaux de confinement nains. Ils ont été détruits récemment, à coups de masse. Quelqu'un a *voulu* que ça s'ouvre.",
        contexte_mj:
          "Preuve du sabotage. En approchant le cristal, au lieu de fermer la faille, il l'élargit brutalement, aspirant les PJ à l'intérieur.",
        objectif: "Activer le cristal (croyant bien faire) et être aspiré.",
      },
      mecaniques: {
        defis: [
          "Investigation (DD 14) : Confirmer que le sabotage est humain et récent.",
          "Réflexes (DD 15) : Ne pas lâcher le cristal lors de l'aspiration.",
        ],
        indices: ["Le sabotage porte la marque d'outils magiques."],
        recompenses: "Passage vers l'Acte 4 (Le Premier Cercle).",
      },
      transitions: {
        success: "Les PJ sont aspirés dans la Spirale.",
        fail: "Idem, mais avec des dégâts de chute/choc.",
      },
    },
  ],
};
