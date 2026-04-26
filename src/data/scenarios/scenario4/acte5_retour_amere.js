/**
 * Scénario 4 - Acte 5 : Le Retour Amère
 * Ruines de Valombre
 */

export const acte5 = {
  title: "ACTE 5 : LE RETOUR AMÈRE",
  stake: "Retourner à Valombre et constater l'étendue des dégâts.",
  location: "Ruines de Valombre.",
  scenes: [
    {
      title: "Scène 1 : Le Passage du Seuil",
      type: "Cinématique",
      image: "./images/scenes/vision_futur_sombre.jpg",
      locationId: "portail_dimensionnel",
      npcIds: [],
      description: {
        resume: "Vision fugitive du futur de Valombre dans le portail.",
        visuel:
          "Le tunnel de lumière vous montre ce qui vous attend. Une ville sous un dôme noir.",
        audio: "Le vent hurle.",
        odeur: "Ozone.",
        lumiere: "Éblouissante.",
      },
      narration: {
        declencheur: "Traversée du portail.",
        texte_a_lire:
          "Vous voyez la ville. Elle a changé. Le ciel est noir. Thade a gagné.",
        contexte_mj: "Préparation psychologique au choc.",
        objectif: "Traverser.",
      },
      mecaniques: {
        defis: [],
        indices: [
          "Le dôme semble impénétrable de l'extérieur, mais vous arrivez de l'intérieur (via la Spirale).",
        ],
        recompenses: "Retour au plan matériel.",
      },
      transitions: {
        success: "Arrivée.",
      },
    },
    {
      title: "Scène 2 : Le Réveil dans les Ruines",
      type: "Exploration / Horreur",
      image: "./images/scenes/valombre_ruines.jpg",
      locationId: "ruines_temple",
      npcIds: [],
      description: {
        resume: "Retour à la surface. La ville est méconnaissable.",
        visuel:
          "Vous émergez dans les ruines du Temple. Il est désert. Poussière et silence.",
        audio: "Rien.",
        odeur: "Vieux sang.",
        lumiere: "Grise.",
      },
      narration: {
        declencheur: "Sortie du portail.",
        texte_a_lire:
          "Le Temple-Forgeron est tombé. Les barricades sont brisées. Il n'y a personne.",
        contexte_mj: "Ambiance post-apocalyptique.",
        objectif: "Trouver des survivants.",
      },
      mecaniques: {
        defis: ["Pistage (DD 14) : Trouver des traces."],
        indices: ["Des signes de résistance récente dans les égouts."],
        recompenses: "Piste vers Mara.",
      },
      transitions: {
        success: "Vers les égouts.",
      },
    },
    {
      title: "Scène 3 : Le Bilan du Temps",
      type: "Révélation",
      image: "./images/scenes/resistance_egouts.jpg",
      locationId: "cachette_resistance",
      npcIds: ["mara_resistance"],
      description: {
        resume: "Les PJ apprennent qu'un mois s'est écoulé.",
        visuel: "Mara a vieilli, cicatrices. Elle pleure en vous voyant.",
        audio: "Pleurs de joie.",
        odeur: "Soupe maigre.",
        lumiere: "Bougie.",
      },
      narration: {
        declencheur: "Retrouvailles.",
        texte_a_lire:
          "« Vous êtes revenus ! On vous croyait morts depuis un mois ! Thade a tout pris. »",
        contexte_mj:
          "Le temps passe différemment dans la Spirale. Choc pour les PJ.",
        objectif: "Accepter la nouvelle réalité.",
      },
      mecaniques: {
        defis: [],
        indices: ["Thade prépare un rituel final à la Tour."],
        recompenses: "Fin du Scénario 4. Transition vers le final.",
      },
      transitions: {
        success: "Fin du Scénario.",
      },
    },
  ],
};
