/**
 * Scénario 4 - Acte 3 : La Cathédrale des Soupirs
 * Centre Névralgique Ancien
 */

export const acte3 = {
  title: "ACTE 3 : LA CATHÉDRALE DES SOUPIRS",
  stake: "Comprendre le passé de Thade et s'harmoniser avec la Spirale.",
  location: "Cathédrale de Cristal.",
  scenes: [
    {
      title: "Scène 1 : Les Archives de Cristal",
      type: "Investigation / Lore",
      image: "./images/scenes/archives_cristal.jpg",
      locationId: "cathedrale_archives",
      npcIds: ["echo_thade"],
      description: {
        resume: "Vision des actions passées de Thade.",
        visuel:
          "Des colonnes de cristal contenant des mémoires. Une image fantomatique de Thade jeune.",
        audio: "La voix de Thade, jeune et idéaliste.",
        odeur: "Poussière.",
        lumiere: "Bleutée.",
      },
      narration: {
        declencheur: "Toucher un cristal.",
        texte_a_lire:
          "Vous voyez Thade, il y a des années. Il ne voulait pas le pouvoir pour lui. Il voulait sauver sa femme, malade. Il a pactisé avec la Spirale pour la guérir. Mais la Spirale a pris son âme en échange.",
        contexte_mj: "Humanisation du méchant. Comprendre ses motivations.",
        objectif: "Apprendre le point faible de Thade.",
      },
      mecaniques: {
        defis: ["Investigation (DD 14) : Trouver le bon cristal."],
        indices: [
          "Thade est lié au Cœur Mécanique. Si on le détruit, il perd son immortalité.",
        ],
        recompenses: "Information cruciale pour le final.",
      },
      transitions: {
        success: "Vers le Rituel.",
      },
    },
    {
      title: "Scène 2 : Le Rituel d'Accordage",
      type: "Rituel",
      image: "./images/scenes/rituel_accordage.jpg",
      locationId: "cathedrale_autel",
      npcIds: [],
      description: {
        resume:
          "Les PJ doivent s'harmoniser pour ne pas être rejetés par le Cœur.",
        visuel: "Un autel vibrant. Il faut entrer en résonance avec lui.",
        audio: "Chant harmonique.",
        odeur: "Encens pur.",
        lumiere: "Dorée.",
      },
      narration: {
        declencheur: "Devant l'autel.",
        texte_a_lire:
          "Pour descendre plus bas, vous devez vibrer à la même fréquence que la Spirale. Sinon, le Cœur vous désintégrera.",
        contexte_mj: "Skill challenge magique/musical.",
        objectif: "Réussir l'harmonisation.",
      },
      mecaniques: {
        defis: [
          "Représentation (Musique) ou Arcanes (DD 16).",
          "Concentration (DD 14).",
        ],
        indices: ["Suivez le rythme du battement de cœur."],
        recompenses: "Passage sécurisé vers l'Acte 4.",
      },
      transitions: {
        success: "Harmonisation réussie.",
        fail: "Harmonisation douloureuse (dégâts).",
      },
    },
    {
      title: "Scène 3 : L'Assaut des Ombres Planaires",
      type: "Combat",
      image: "./images/scenes/assaut_ombres_cathedrale.jpg",
      locationId: "cathedrale_nef",
      npcIds: ["ombres_traqueuses"],
      description: {
        resume: "Défense pendant le rituel.",
        visuel: "Des ombres surgissent des murs pour interrompre le rituel.",
        audio: "Sifflements.",
        odeur: "Froid.",
        lumiere: "Ténèbres envahissantes.",
      },
      narration: {
        declencheur: "Pendant le rituel.",
        texte_a_lire:
          "La Spirale se défend. Ses anticorps, des ombres traqueuses, vous attaquent.",
        contexte_mj: "Protéger celui qui fait le rituel.",
        objectif: "Tenir bon jusqu'à la fin de l'harmonisation.",
      },
      mecaniques: {
        defis: ["Combat : 4 Ombres Traqueuses (FP 4).", "Défense de zone."],
        indices: ["La lumière de l'autel les repousse."],
        recompenses: "Accès au Cœur.",
      },
      transitions: {
        success: "Fin de l'Acte 3.",
      },
    },
  ],
};
