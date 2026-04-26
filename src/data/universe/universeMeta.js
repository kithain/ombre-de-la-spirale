export const universeMeta = {
  id: "valombre_setting",
  title: "VALOMBRE",
  intro:
    "Une cité minière construite sur une faille arcanique. Les clans nains extraient le minerai pendant que l'Université exploite la puissance arcanique des lieux.",
  context:
    "Tensions extrêmes entre la Guilde des Mineurs (nains) et le Conseil Arcane (humains) suite aux récents accidents dans les niveaux inférieurs.",

  sections: [
    {
      title: "Environnement de Jeu",
      icon: "settings", // Plus technique que "cloud"
      content: [
        "Cité verticale : étages reliés par des monte-charges à vapeur et des passerelles.",
        "Climat : Froid constant, visibilité réduite par les vapeurs de forge et la poussière de charbon.",
        "Loi : La Garde assure l'ordre en surface, mais les profondeurs sont gérées par les syndicats nains.",
      ],
    },
    {
      title: "La Spirale (Anomalie Géologique)",
      icon: "warning",
      content: [
        "Structure cylindrique d'origine inconnue forée dans la montagne.",
        "Propriétés : Distorsion de l'espace-temps. Les boussoles et la magie de détection y sont instables.",
        "Usage : L'Université y puise de l'énergie brute via des collecteurs de mana.",
      ],
    },
    {
      title: "Forces en Présence",
      icon: "groups",
      content: [
        "Clans Nains : Veulent sécuriser les mines et stopper les expériences dangereuses.",
        "L'Université : Cherche à stabiliser la Spirale pour garantir l'autonomie énergétique de la ville.",
        "Professeur Thade : Utilise les fonds universitaires pour tester la viabilité de 'greffes arcaniques' sur des sujets vivants.",
      ],
    },
    {
      title: "Enjeux du Scénario",
      icon: "priority_high",
      content: [
        "La Spirale s'étend : les niveaux de mine les plus proches commencent à muter.",
        "Instabilité politique : Si les nains ferment les accès, l'Université s'effondre économiquement.",
        "Le Secret : Les disparitions d'étudiants (Jaren, Ilse) sont liées à des tests de fusion avec l'architecture de la Spirale.",
      ],
    },
  ],

  // Thèmes transformés en mécaniques de jeu ou piliers narratifs
  gameplayPillars: [
    {
      name: "Cynisme Académique",
      desc: "La science passe avant la morale. Les PNJ de l'Université sont froids et pragmatiques.",
    },
    {
      name: "Verticalité tactique",
      desc: "L'environnement joue sur la hauteur (chutes, escaliers, passerelles fragiles).",
    },
    {
      name: "Tension inter-clans",
      desc: "Chaque action des PJ peut faire basculer l'opinion des Nains ou des Mages.",
    },
  ],
};
