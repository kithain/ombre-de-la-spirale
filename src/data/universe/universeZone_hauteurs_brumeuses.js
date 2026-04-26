export const zoneHauteursBrumeuses = {
  id: "hauteurs_brumeuses",
  name: "Hauteurs Brumeuses",
  summary:
    "Plateaux supérieurs plongés dans la brume, domaine des nobles et des industriels.",
  details: [
    "Ambiance : Brume froide, jardins suspendus, balcons dominant la ville.",
    "Tension : Décalage extrême entre le confort des hauteurs et la misère du bas.",
    "Focus : Lieu des décisions politiques et des complots à grande échelle.",
    "Opportunités : Infiltration, espionnage, renversement d'alliances.",
  ],
  locations: [
    {
      id: "hauteurs_brumeuses_quartier",
      name: "Quartier des Nobles",
      summary: "Manoirs murés, allées silencieuses et gardes blasés.",
      details: [
        "Ambiance : Silence feutré, parfums coûteux, lumière tamisée par la brume.",
        "Tests : Discrétion / Bluff pour se faire passer pour des invités.",
        "Danger : Gardes privés, mages de cour.",
        "Usage : Rencontres diplomatiques, chantages, soirées qui peuvent tourner au massacre.",
      ],
      npcIds: ["bourgmestre"],
    },
    {
      id: "manoir_bourgmestre",
      name: "Manoir du Bourgmestre",
      summary: "Résidence officielle, mélange de luxe fatigué et de paranoïa.",
      details: [
        "Ambiance : Couloirs chargés de portraits sévères, pièces de réception rarement utilisées.",
        "Tests : Investigation pour trouver des archives cachées sur la gestion de la ville.",
        "Danger : Espions infiltrés, gardes loyaux au Conseil plutôt qu'au Bourgmestre.",
        "Loot : Documents compromettants, lettres codées mentionnant la Spirale.",
      ],
      npcIds: ["secretaire_bourgmestre"],
    },
    {
      id: "balcons_brumeux",
      name: "Balcons du Brumeux",
      summary:
        "Passerelles dominant le vide, idéales pour rencontres secrètes et chutes spectaculaires.",
      details: [
        "Ambiance : Brume épaisse, vent glacé, vue plongeante sur le Cimetière et la Mine.",
        "Tests : Acrobatie / Discrétion lors de filatures en hauteur.",
        "Danger : Assassins, agents de Thade, créatures volantes invoquées.",
        "Usage : Scènes dramatiques de confrontation, de trahison ou de sacrifice.",
      ],
      npcIds: ["assassin_masque"],
    },
    {
      id: "manoir_van_kel",
      name: "Manoir Van Kel",
      summary: "Le luxe d'autrefois s'étouffe sous une épaisse couche de poussière.",
      details: [
        "Ambiance : Air raréfié et odeur de moisi, rideaux de velours décolorés, meubles drapés de draps blancs.",
        "Tests : Discretion / Détection magie",
        "Danger : ",
        "Usage : ",
      ],
      npcIds: ["ilse_nyx", "bleme_fp3"],
    },
  ],
};
