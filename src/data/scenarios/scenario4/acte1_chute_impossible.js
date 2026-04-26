/**
 * Scénario 4 - Acte 1 : La Chute dans l'Impossible
 * Zone des Déchets et Périphérie de la Spirale
 */

export const acte1 = {
  title: "ACTE 1 : LA CHUTE DANS L'IMPOSSIBLE",
  stake: "Survivre à la chute et s'adapter aux lois aberrantes de la Spirale.",
  location: "Zone des Déchets et Périphérie de la Spirale.",
  scenes: [
    {
      title: "Scène 1 : La Chute Infinie",
      type: "Cinématique / Action",
      image: "./images/scenes/chute_spirale_infinie.jpg",
      locationId: "spirale_puits_entree",
      npcIds: ["thorgar_pretre_nain", "refugies_nains"],
      description: {
        resume: "Arrivée violente dans la prison planaire désactivée.",
        visuel:
          "Une chute interminable dans un puits sans fond, puis une inversion brutale de gravité. Le sol devient plafond.",
        audio: "Le hurlement du vent et les cris des compagnons.",
        odeur: "Ozone et poussière d'étoiles.",
        lumiere: "Lueurs violettes et bleues tourbillonnantes.",
      },
      narration: {
        declencheur: "Entrée dans la Spirale.",
        texte_a_lire:
          "La chute semble durer une éternité. Puis, le monde se retourne. Vous ne tombez plus, vous glissez sur l'air comme sur de la glace. L'impact n'est pas mortel, mais désorientant. Autour de vous, des débris d'architectures impossibles flottent dans le vide.",
        contexte_mj:
          "Les PJ doivent réussir des jets pour ne pas être séparés ou blessés à l'atterrissage.",
        objectif: "Se regrouper après la chute.",
      },
      mecaniques: {
        defis: [
          "Acrobaties (DD 15) : Atterrissage contrôlé.",
          "Volonté (DD 14) : Résister à la désorientation spatiale.",
        ],
        indices: ["La gravité ici est subjective."],
        recompenses: "Survie du groupe.",
      },
      transitions: {
        success: "Le groupe est réuni.",
        fail: "Le groupe est dispersé et subit des dégâts.",
      },
    },
    {
      title: "Scène 2 : La Salle de Gravité Variable",
      type: "Combat / Tactique",
      image: "./images/scenes/salle_gravite.jpg",
      locationId: "spirale_salle_gravite",
      npcIds: ["pilleurs_planaires"],
      description: {
        resume: "Combat tactique 3D contre des pilleurs planaires.",
        visuel:
          "Une immense salle cubique où le haut et le bas changent aléatoirement. Des mercenaires étranges avec des bottes magnétiques vous attaquent.",
        audio: "Bruits de bottes métalliques, lasers ou magie crépitante.",
        odeur: "Métal chaud.",
        lumiere: "Flashs lumineux des changements de gravité.",
      },
      narration: {
        declencheur: "Entrée dans la salle.",
        texte_a_lire:
          "Des pillards, piégés ici depuis longtemps, voient en vous une proie facile. 'De la viande fraîche !' hurlent-ils en marchant sur les murs.",
        contexte_mj:
          "La gravité change à chaque round (1d6 pour la direction). Les ennemis sont équipés pour ça.",
        objectif: "Vaincre les pilleurs et voler leur équipement de stabilité.",
      },
      mecaniques: {
        defis: [
          "Combat : Pilleurs Planaires (Guerriers niv 3 avec équipement spécial).",
          "Environnement : Gravité changeante (Acrobaties DD 12 pour ne pas tomber).",
        ],
        indices: ["Les pilleurs ont des cartes partielles de la zone."],
        recompenses: "Bottes de gravité (permettent de marcher sur les murs).",
      },
      transitions: {
        success: "Accès à la zone suivante.",
        fail: "Fuite désordonnée vers les îles.",
      },
    },
    {
      title: "Scène 3 : Les Îles Flottantes",
      type: "Exploration / Survie",
      image: "./images/scenes/iles_flottantes.jpg",
      locationId: "spirale_iles",
      npcIds: [],
      description: {
        resume:
          "Survie dans un environnement qui se désagrège. Indices sur les expéditions disparues.",
        visuel:
          "Des fragments de paysages (une forêt, une ruine, un lac) flottent dans le néant. Ils s'effritent lentement.",
        audio: "Craquements de la matière qui se dissout.",
        odeur: "Végétation pourrissante.",
        lumiere: "Crépusculaire.",
      },
      narration: {
        declencheur: "Arrivée sur les îles.",
        texte_a_lire:
          "Le sol sous vos pieds n'est pas stable. Ces îles sont des souvenirs de mondes absorbés par la Spirale, et elles sont en train de mourir. Vous trouvez les restes d'un campement.",
        contexte_mj:
          "Zone de plateforme et de recherche d'indices. Le temps est compté.",
        objectif: "Trouver le chemin vers le Purgatoire.",
      },
      mecaniques: {
        defis: [
          "Athlétisme (DD 14) : Sauter d'île en île.",
          "Investigation (DD 13) : Fouiller le campement.",
        ],
        indices: [
          "Journal d'expédition : 'Il y a un village plus bas, ils savent comment sortir.'",
        ],
        recompenses: "Ressources (vivres, cordes).",
      },
      transitions: {
        success: "Passage vers l'Acte 2.",
        fail: "Chute vers l'Acte 2 (dégâts).",
      },
    },
  ],
};
