export const zoneCentreCivique = {
  id: "centre_civique",
  name: "Centre Civique",
  summary: "Cœur administratif de Val-d'Ombre, siège du pouvoir civil et judiciaire.",
  details: [
    "Ambiance : Places pavées, bâtiments officiels imposants, drapeaux flottant dans la brume.",
    "Tension : Décisions impopulaires, rassemblements qui dégénèrent, présence policière forte.",
    "Focus : Lieu des annonces, des procès et des conseils de crise.",
    "Opportunités : Plaidoyer politique, renversement d'alliances, actions spectaculaires en public."
  ],
  locations: [
    {
      id: "hotel_de_ville_valdombre",
      name: "Hôtel de Ville de Val-d'Ombre",
      summary: "Siège administratif et salle du Conseil, cœur des décisions politiques.",
      details: [
        "Ambiance : Couloirs tendus, odeur d'encre et de fumée de torches.",
        "Tests : Diplomatie / Intimidation pour influer sur les votes et discours.",
        "Dangers : Gardes du Conseil, mages assermentés, complots de Thade.",
        "Usage : Scènes de crise, déclarations de loi martiale, assassinats politiques."
      ],
      npcIds: ["bourgmestre"]
    },
    {
      id: "hotel_de_ville_conseil",
      name: "Salle du Conseil Sanglant",
      summary: "Salle ovale aux vitraux rouges où se réunissent les dirigeants lors des crises.",
      details: [
        "Ambiance : Cloche d'alarme, tables couvertes de cartes, odeur de sang séché.",
        "Tests : Diplomatie / Bluff pour survivre aux accusations croisées.",
        "Danger : Gardes du Conseil prêts à dégainer, mages de Thade dissimulés.",
        "Usage : Déclencher le massacre du Sommet et isoler les PJ politiquement."
      ],
      npcIds: ["bourgmestre"]
    },
    {
      id: "hotel_ville_place_conseil",
      name: "Hôtel de Ville et Place du Conseil",
      summary: "Esplanade officielle où se tiennent discours et rassemblements.",
      details: [
        "Ambiance : Statues austères, estrades pour les orateurs, foule potentiellement explosive.",
        "Tests : Discours / Intimidation pour orienter l'opinion publique.",
        "Ennemis : Gardes du Conseil, agitateurs payés, agents de Thade.",
        "Usage : Scènes de crise politique, déclarations de loi martiale, exécutions publiques."
      ],
      npcIds: ["capitaine_garde_urbaine"]
    },
    {
      id: "rues_valdombre_nuit",
      name: "Rues de Val-d'Ombre (nuit)",
      summary: "Réseau de ruelles plongées dans la brume, patrouillées par les forces du Conseil.",
      details: [
        "Ambiance : Brume lourde, lanternes sporadiques, cris étouffés.",
        "Dangers : Patrouilles mixtes (gardiens, golems de chair), embuscades.",
        "Tests : Discrétion / Survie urbaine pour éviter arrestations et rafles.",
        "Usage : Fuites nocturnes, purges, embuscades orchestrées par Thade."
      ],
      npcIds: []
    },
    {
      id: "rues_valdombre_brume",
      name: "Rues Brumeuses Réanimées",
      summary: "Artères noyées de brume violette où les cadavres se relèvent instantanément.",
      details: [
        "Ambiance : Cloches funèbres, silhouettes titubantes, parfums de chair brûlée.",
        "Tests : Survie / Perception pour anticiper les foyers de réanimation.",
        "Danger : Éveil simultané de zombies et de golems de chair.",
        "Usage : Mettre en scène l'Éveil de la Nécropole et les premières pertes massives."
      ],
      npcIds: ["capitaine_garde_urbaine"]
    },
    {
      id: "prison_conseil",
      name: "Prison du Conseil",
      summary: "Bloc de pierre sans fenêtres, symbole de la répression politique.",
      details: [
        "Ambiance : Couloirs étroits, odeur de sueur et de désinfectant, gravures de prières et d'insultes sur les murs.",
        "Tests : Évasion / Infiltration pour faire sortir ou entrer quelqu'un discrètement.",
        "Ennemis : Geôliers brutaux, interrogateurs, mages assermentés.",
        "Usage : Faux procès, interrogatoires politiques, évasions spectaculaires."
      ],
      npcIds: ["geolier_principal"]
    }
  ]
};
