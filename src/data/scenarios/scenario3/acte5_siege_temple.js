/**
 * Scénario 3 - Acte 5 : Le Siège du Temple
 * Temple-Forgeron
 */

export const acte5 = {
  title: "ACTE 5 : LE SIÈGE DU TEMPLE",
  stake: "Tenir le Temple-Forgeron contre l'armée des morts.",
  location: "Temple-Forgeron de Moradin.",
  scenes: [
    {
      title: "Scène 1 : L'Aube du Siège",
      type: "Préparation",
      image: "./images/scenes/assault_temple.jpg",
      locationId: "temple_moradin_enceinte",
      npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur"],
      description: {
        resume: "Préparation stratégique avant le siège",
        visuel:
          "L'aube se lève sur le Temple. Une armée de morts-vivants l'entoure.",
        audio: "Prières, fortifications, ordres tactiques.",
        odeur: "Encens, métal, sueur.",
        lumiere: "Aube grise sous la brume nécromantique.",
      },
      narration: {
        declencheur: "L'aube après l'arrivée.",
        texte_a_lire:
          "Durnik : 'Nous avons 200 combattants. Contre ça...' Il désigne l'armée de morts. 'Dites-moi comment nous survivons.'",
        contexte_mj:
          "Planification stratégique. Les choix influencent les scènes suivantes.",
        objectif: "Organiser la défense.",
      },
      mecaniques: {
        defis: [
          "Connaissance (Guerre) DD 14",
          "Tactique DD 16",
          "Placer pièges si explosifs",
        ],
        indices: [
          "Feu efficace",
          "Thorgar peut canaliser énergie",
          "Égouts = issue secours",
        ],
        recompenses: "Bonus tactiques selon plan.",
      },
      transitions: {
        success: "Défenses prêtes.",
        fail: "Défenses mal organisées.",
      },
    },
    {
      title: "Scène 2 : La Première Vague",
      type: "Combat",
      image: "./images/scenes/assaut_zombies.jpg",
      locationId: "temple_moradin_remparts",
      npcIds: ["hordes_zombies"],
      description: {
        resume: "Première vague de zombies attaque les remparts",
        visuel: "Centaines de zombies chargent les murs.",
        audio: "Grondement, cris, chocs.",
        odeur: "Décomposition, fumée.",
        lumiere: "Jour sombre, brume.",
      },
      narration: {
        declencheur: "L'assaut commence.",
        texte_a_lire:
          "Une vague de zombies déferle. Durnik : 'Tenez les remparts !'",
        contexte_mj: "3 vagues de 10-15 zombies. Système simplifié.",
        objectif: "Repousser la première vague.",
      },
      mecaniques: {
        defis: [
          "Combat : 3 vagues zombies",
          "Explosifs : Timing DD 14",
          "Canalisation Thorgar",
        ],
        indices: ["Attaques zone efficaces", "Deuxième vague sera pire"],
        recompenses: "Survie, moral maintenu.",
      },
      transitions: {
        success: "Vague repoussée.",
        fail: "Zombies percent défenses.",
      },
    },
    {
      title: "Scène 3 : Le Traître",
      type: "Intrigue",
      image: "./images/scenes/traitre_temple.jpg",
      locationId: "temple_forgeron_interieur",
      npcIds: ["galen_traitre"],
      description: {
        resume: "Galen sabote les défenses pour Thade",
        visuel: "Explosion. Glyphes s'éteignent. Galen sabote.",
        audio: "Explosion, alarme.",
        odeur: "Ozone, trahison.",
        lumiere: "Glyphes s'éteignent.",
      },
      narration: {
        declencheur: "Sabotage entre vagues.",
        texte_a_lire:
          "Galen : 'Thade m'a promis la vie éternelle.' Il invoque des spectres.",
        contexte_mj: "Combat contre traître (Clerc 5) + 3 Spectres.",
        objectif: "Neutraliser Galen.",
      },
      mecaniques: {
        defis: [
          "Combat Galen + Spectres",
          "Religion DD 14 : réactiver glyphes",
        ],
        indices: ["Médaillon Thade", "Cristal noir affaiblit morts-vivants"],
        recompenses: "Glyphes restaurés, cristal, infos.",
      },
      transitions: {
        success: "Galen vaincu.",
        fail: "Glyphes détruits.",
      },
    },
    {
      title: "Scène 4 : L'Assaut des Ombres",
      type: "Boss",
      image: "./images/scenes/assaut_ombres.jpg",
      locationId: "temple_moradin_parvis",
      npcIds: ["ombres", "beliers_osseux"],
      description: {
        resume: "Ombres et béliers osseux attaquent le Temple",
        visuel:
          "Des Ombres traversent les murs. Béliers osseux géants frappent portes.",
        audio: "Hurlements, fracas.",
        odeur: "Froid, mort.",
        lumiere: "Ténèbres surnaturelles.",
      },
      narration: {
        declencheur: "Assaut final.",
        texte_a_lire:
          "Des Ombres et des béliers osseux attaquent. Thorgar : 'Nous tiendrons !'",
        contexte_mj: "Boss multiple : 3 Béliers + 4 Ombres.",
        objectif: "Détruire béliers, repousser les ombres.",
      },
      mecaniques: {
        defis: [
          "Combat Béliers FP6 + Ombres FP3",
          "Explosifs détruisent bélier",
          "Canalisation x2 dégâts",
        ],
        indices: ["Crâne = point faible", "Les Ombres drainent la Force"],
        recompenses: "Victoire, respect nains.",
      },
      transitions: {
        success: "Temple tient.",
        fail: "Portes tombent, évacuation.",
      },
    },
    {
      title: "Scène 5 : Le Dôme",
      type: "Révélation",
      image: "./images/scenes/dome_violet.jpg",
      locationId: "temple_forgeron_remparts",
      npcIds: ["thade_coren_projection"],
      description: {
        resume: "Thade enferme Valombre sous un dôme violet",
        visuel: "Dôme violet enferme la ville. Projection Thade.",
        audio: "Bourdonnement, voix Thade.",
        odeur: "Ozone, nécromancie.",
        lumiere: "Lueur violette.",
      },
      narration: {
        declencheur: "Après victoire.",
        texte_a_lire:
          "Thade : 'Bravo. Mais vous êtes piégés. Valombre est ma nécropole.'",
        contexte_mj: "Dôme impénétrable. Seule issue : Spirale.",
        objectif: "Comprendre qu'ils doivent fuir.",
      },
      mecaniques: {
        defis: [
          "Arcanes DD 18 : analyser dôme",
          "Volonté DD 14 : pas désespoir",
        ],
        indices: ["Durnik : passage sous Temple", "Spirale = seul espoir"],
        recompenses: "Connaissance passage secret.",
      },
      transitions: {
        success: "Décident contre-attaque Tour.",
        fail: "Fuient immédiatement.",
      },
    },
  ],
};
