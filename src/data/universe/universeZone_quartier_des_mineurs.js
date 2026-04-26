export const zoneQuartierDesMineurs = {
  id: "quartier_des_mineurs",
  name: "Quartier des Mineurs",
  summary:
    "Niveau du sol au pied de la falaise, quartier ouvrier nain où la tension sociale est permanente.",
  details: [
    "Ambiance : Bruyant, saturé de poussière et de jurons nains.",
    "Tension : Piquets de grève, charrettes renversées, familles prêtes à tout pour quitter la ville.",
    "Focus : Cœur du conflit social entre la Guilde des Mineurs, le Conseil et la Guilde des Mages.",
    "Opportunités : Recruter des alliés temporaires, provoquer des émeutes ou organiser des actions de sabotage.",
  ],
  locations: [
    {
      id: "quartier_des_mineurs_place",
      name: "Place Centrale du Quartier",
      summary:
        "Carrefour bruyant où se croisent mineurs, contremaîtres et familles épuisées.",
      details: [
        "Ambiance : Cris, odeur de sueur et de charbon, fumée des forges en arrière-plan.",
        "Tests : Diplomatie / Intimidation pour calmer ou enflammer la foule.",
        "Danger : Casseurs ou briseurs de grève manipulés par Thade.",
        "Opportunités : Lancer des rumeurs, organiser une manifestation, négocier avec les meneurs de grève.",
      ],
      npcIds: ["durnik_chef_mineur", "contremaitre_humain"],
    },
    {
      id: "quartier_artisan_patrouille",
      name: "Allée des Artisans",
      summary:
        "Rue principale bordée d'ateliers métallurgiques, devenue terrain de rafles improvisées.",
      details: [
        "Ambiance : Vapeur brûlante, marteaux arrêtés net, torches renversées.",
        "Tests : Discrétion / Acrobaties pour se faufiler entre les barrages de caisses.",
        "Danger : Patrouilles mixtes (gardes humains, automates de la Guilde), dénonciations forcées.",
        "Usage : Montrer la violence de la Loi Martiale et les arrestations ciblant les Nains.",
      ],
      npcIds: ["patrouille_mixte_conseil"],
    },
    {
      id: "entree_mine_valombre",
      name: "Entrée de la Mine",
      summary:
        "Palissade gardée et cage de descente massive, point de passage obligé entre la surface et les profondeurs.",
      details: [
        "Ambiance : Rugissement du treuil, fumée de torches, martèlement des boucliers des gardes.",
        "Tests : Diplomatie / Intimidation pour franchir le piquet de grève sans violence.",
        "Danger : Risque d'émeute, sabotage latent, surveillants prêts à déclencher l'alarme.",
        "Usage : Contrôle d'accès vers la Mine d'Argent, négociations entre Guildes et PJ.",
      ],
      npcIds: ["garde_portail_mine"],
    },
    {
      id: "forge_thorgar_refuge",
      name: "Forge-Refuge de Thorgar",
      summary:
        "Atelier latéral du Temple-Forgeron converti en sanctuaire provisoire pour les blessés et chefs nains.",
      details: [
        "Ambiance : Chaleur étouffante des fours, murmures de prières, odeur d'huile brûlée.",
        "Tests : Premiers secours / Artisanat (forge) pour stabiliser les défenses improvisées.",
        "Danger : Effondrement possible si les glyphes sont sabordés de l'intérieur.",
        "Usage : Lieu des décisions morales, confrontation directe avec Thorgar sur la stratégie.",
      ],
      npcIds: ["thorgar_pretre_nain"],
    },
    {
      id: "temple_forgeron",
      name: "Temple-Forgeron des Nains",
      summary:
        "Forteresse-temple creusée dans la roche, cœur spirituel et militaire des Nains.",
      details: [
        "Ambiance : Chant religieux sourd mêlé au martèlement des marteaux sur l'enclume sacrée.",
        "Tests : Religion / Histoire pour comprendre les runes de protection gravées dans la pierre.",
        "Danger : Pendant la Nuit des Longs Couteaux, assaillants morts-vivants et fanatiques de Thade.",
        "Loot : Reliques naines, armes bénies contre les morts-vivants, accès à des bénédictions temporaires.",
      ],
      npcIds: ["thorgar_pretre_nain", "capitaine_garde_temple"],
    },
    {
      id: "egouts_valombre",
      name: "Égouts de Valombre",
      summary:
        "Réseau ancien reliant quartiers pauvres, Temple-Forgeron et Cimetière.",
      details: [
        "Ambiance : Souterrains sombres, odeurs pestilentielles, eau stagnante.",
        "Tests : Survie / Perception pour éviter de se perdre ou tomber dans des fosses cachées.",
        "Danger : Rats géants, charognards, expériences ratées de nécromancie.",
        "Usage : Voie de fuite, terrain de guérilla naine et d'infiltration discrète.",
      ],
      npcIds: ["sniv_kobold"],
    },
    {
      id: "taverne_fumees_rouges",
      name: "Taverne des Fumées Rouges",
      summary:
        "Bouge enfumé fréquenté par contremaîtres, dockers et mercenaires sans contrat.",
      details: [
        "Ambiance : Fumée épaisse, tables collantes, rires gras et bagarres régulières.",
        "Tests : Perception / Intuition pour repérer les vrais informateurs parmi les ivrognes.",
        "Danger : Brutes locales, collecteurs de dettes.",
        "Opportunités : Recruter des mercenaires, régler des dettes, provoquer une diversion.",
      ],
      npcIds: ["tenancier_taverne"],
    },
  ],
};
