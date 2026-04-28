/**
 * PNJ Scénario 5 : L'Aube de Sang
 * Personnages liés à la Tour des Mages et au final
 */

export const pnjScenario5Raw = [
  {
    id: "archimage_defecteur",
    nom: "Archimage Défecteur",
    classe: "Magicien",
    niveau: 9,
    taille: "Moyen",
    type: "Humanoïde (Humain)",
    alignement: "N",
    fp: 9,
    environnement: "Quartier du Savoir – Tour des Mages (cachette)",
    organisation: "Solitaire",
    ini: "+2",
    sens: "Vision dans le noir (sort), Détection +10",
    ca: { total: 18, contact: 12, pris_au_depourvu: 16 },
    pv: 45,
    dv: "9d4+18",
    js: { vig: "+5", ref: "+5", vol: "+9" },
    vit: "9 m",
    attaque: "Bâton de force +5 (1d6+1)",
    att_outrance: "Bâton de force +5 (1d6+1)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spe: ["Sorts de Magicien NLS 9"],
    qual_spe: ["Contre-mesures anti-nécromancie", "Portails Rapides"],
    carac: { for: 8, dex: 14, con: 14, int: 19, sag: 14, cha: 10 },
    competences:
      "Art de la magie +16, Connaissances (arcanes) +16, Connaissances (plans) +14, Décryptage +12",
    dons: "Ecole Renforcée (Abjuration), Extension d'effet, Magie de Guerre, Incantation silencieuse, Incantation de combat",
    tactiques:
      "Reste invisible, observe, et n'intervient que pour saboter un rituel ou fuir via un portail.",
    butin: "Parchemin de Dissipation Suprême, Clé de contournement des protections de la Tour.",
    disposition: "neutre",
    est_ennemi: false,
    role: "Ancien maître du Conseil, tente de saboter Thade de l'intérieur.",
    details: [
      "Motivation : Stopper Thade avant la fusion avec la Spirale.",
      "Attitude : Paranoïaque, exige des preuves de loyauté.",
      "Pouvoir : Portails rapides, contre-mesures anti-nécromancie.",
      "Usage : Peut fournir des clés de contournement dans la Tour.",
    ],
    ogas: {
      occupation:
        "Se cache dans la Tour des Mages et observe les agissements de Thade",
      objectif: "Stopper Thade avant qu'il ne fusionne avec la Spirale",
      attitude:
        "Paranoïaque et méfiant, exige des preuves de loyauté avant d'aider",
      enjeu:
        "Risque d'être découvert et éliminé par Thade ; peut empêcher la catastrophe finale",
    },
    quetesAnnexes: [
      {
        id: "archimage_protections",
        titre: "Les Protections de la Tour",
        description: "L'Archimage connaît les faiblesses des protections magiques de la Tour. Il fournira les clés de contournement si les PJ lui rapportent un cristal de focalisation volé par Thade.",
        statut: "disponible",
        recompenses: "500 XP, Clés de contournement de la Tour, Parchemin de Dissipation Suprême",
        conditions: "Avoir prouvé sa loyauté à l'Archimage (3 preuves contre Thade)",
        difficulte: "Très difficile",
        scenario: 5,
      },
      {
        id: "archimage_sabotage",
        titre: "Le Sabotage du Rituel",
        description: "L'Archimage a identifié un composant essentiel du rituel de fusion de Thade. Si les PJ le détruisent avant le rituel final, cela affaiblira considérablement Thade.",
        statut: "disponible",
        recompenses: "600 XP, Affaiblissement de Thade au combat final (-2 à tous ses jets), Gratitude de l'Archimage",
        conditions: "Avoir terminé 'Les Protections de la Tour'",
        difficulte: "Très difficile",
        scenario: 5,
      },
    ],
  },
];
