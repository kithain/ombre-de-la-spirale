/**
 * Scénario 3 - Acte 7 : La Descente dans l'Abîme
 * Souterrains profonds
 */

export const acte7 = {
  title: "ACTE 7 : LA DESCENTE DANS L'ABÎME",
  stake: "Fuir Valombre en plongeant dans la Spirale.",
  location: "Égouts, Cimetière, Entrée Spirale.",
  scenes: [
    {
      title: "Scène 1 : Le Passage Secret",
      type: "Urgence",
      image: "./images/scenes/egouts_temple.jpg",
      locationId: "egouts_sous_temple",
      npcIds: ["durnik_chef_mineur", "thorgar_pretre_nain"],
      description: {
        resume: "Guidage des survivants dans les égouts instables",
        visuel: "Égouts anciens, eau monte, structure s'effondre.",
        audio: "Eau, effondrements, pleurs.",
        odeur: "Égouts, humidité, peur.",
        lumiere: "Torches vacillantes.",
      },
      narration: {
        declencheur: "Descente égouts.",
        texte_a_lire:
          "Durnik : 'Passage vers cimetière, puis Spirale.' 50 nains survivants.",
        contexte_mj:
          "Skill challenge. Choix difficiles, réfugiés perdus si échecs.",
        objectif: "Guider survivants au cimetière.",
      },
      mecaniques: {
        defis: [
          "Skill Challenge 5/3",
          "Athlétisme, Connaissance Souterrains, Diplomatie",
        ],
        indices: ["Égouts instables", "Zombies errent", "Cimetière proche"],
        recompenses: "Survivants selon succès.",
      },
      transitions: {
        success: "Majorité survit.",
        fail: "Lourdes pertes.",
      },
    },
    {
      title: "Scène 2 : Le Cimetière",
      type: "Combat",
      image: "./images/scenes/cimetiere_maudit.jpg",
      locationId: "cimetiere_valombre",
      npcIds: ["morts_vivants_anciens"],
      description: {
        resume: "Percée dans le cimetière infesté de morts-vivants",
        visuel: "Brume épaisse, tombes brisées, hordes morts-vivants.",
        audio: "Grognements, cliquetis, vent.",
        odeur: "Terre, décomposition.",
        lumiere: "Lune rouge à travers dôme.",
      },
      narration: {
        declencheur: "Sortie égouts.",
        texte_a_lire:
          "Le cimetière est un enfer. Des morts-vivants partout. Thorgar : 'L'entrée Spirale est là !'",
        contexte_mj: "Combat désespéré. Passage vers Spirale.",
        objectif: "Atteindre l'entrée Spirale.",
      },
      mecaniques: {
        defis: [
          "Combat : 20+ morts-vivants (skill challenge + combat)",
          "Thorgar : canalisation divine (1/j) protège groupe",
          "Explosifs restants : zone dégâts",
        ],
        indices: [
          "Entrée Spirale = seul espoir",
          "Anciens morts-vivants plus forts",
          "Thorgar peut tenir 1 round",
        ],
        recompenses: "Passage Spirale ouvert.",
      },
      transitions: {
        success: "Passent dans Spirale.",
        fail: "Capturés ou morts.",
      },
    },
    {
      title: "Scène 3 : Le Seuil",
      type: "Transition",
      image: "./images/scenes/entree_spirale.jpg",
      locationId: "entree_spirale",
      npcIds: [],
      description: {
        resume: "Passage dans la Spirale",
        visuel: "Fissure pulsante, énergie, passage instable.",
        audio: "Bourdonnement, vent, écho.",
        odeur: "Énergie, autre monde.",
        lumiere: "Lueur violette aveuglante.",
      },
      narration: {
        declencheur: "Entrée Spirale.",
        texte_a_lire:
          "La Spirale vous aspire. Thade : 'Bienvenue dans mon royaume.'",
        contexte_mj: "Transition vers Scénario 4. Fin de Valombre.",
        objectif: "Entrer dans la Spirale.",
      },
      mecaniques: {
        defis: [
          "Volonté DD 15 : résister à folie",
          "Vigueur DD 14 : résister énergie",
        ],
        indices: [
          "Spirale instable",
          "Thade contrôle entrée",
          "Scénario 4 commence",
        ],
        recompenses: "Passage Spirale, fin scénario.",
      },
      transitions: {
        success: "Entrent dans Spirale.",
        fail: "Désorientés mais entrent.",
      },
    },
  ],
};
