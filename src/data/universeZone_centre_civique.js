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
      npcs: [
        {
          id: "bourgmestre",
          name: "Bourgmestre de Val-d'Ombre",
          role: "Dirigeant officiel dépassé par les événements.",
          isEnemy: false,
          details: [
            "Motivation : Maintenir une façade d'ordre et protéger la ville.",
            "Attitude : Courtois mais influençable, cherche des alliés fiables.",
            "Usage : Peut soutenir ou accuser les PJ selon les preuves et pressions."
          ]
        }
      ]
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
      npcs: [
        {
          id: "capitaine_garde_urbaine",
          name: "Capitaine de la Garde Urbaine",
          role: "Chef militaire chargé du maintien de l'ordre.",
          isEnemy: true,
          details: [
            "Motivation : Garder la ville sous contrôle, quel qu'en soit le prix.",
            "Attitude : Soupçonneux, voit les PJ comme des fauteurs de troubles potentiels.",
            "Combat : Redoutable stratège avec de nombreux soldats sous ses ordres.",
            "Spoiler : Instrumentalisé par Thade lors de la Nuit des Longs Couteaux."
          ]
        }
      ]
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
      npcs: []
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
      npcs: [
        {
          id: "geolier_principal",
          name: "Maître Joran, geôlier principal",
          role: "Responsable de la prison, fidèle au Conseil.",
          isEnemy: true,
          details: [
            "Motivation : Garder ses prisonniers enfermés coûte que coûte.",
            "Attitude : Cruel avec les faibles, servile avec les puissants.",
            "Combat : Préfère déléguer, mais connaît tous les pièges et passages de la prison.",
            "Spoiler : Détient des prisonniers clés liés à la résistance naine."
          ]
        }
      ]
    }
  ]
};
