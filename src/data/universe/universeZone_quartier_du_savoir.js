export const zoneQuartierDuSavoir = {
  id: "quartier_du_savoir",
  name: "Quartier du Savoir",
  summary:
    "Quartier en terrasses dédié au savoir, aux bibliothèques et aux expériences secrètes.",
  details: [
    "Ambiance : De jour, agitation studieuse ; de nuit, complots en robe noire.",
    "Tension : Rivalités entre étudiants, professeurs et cabales secrètes.",
    "Focus : Point d'entrée idéal pour enquêter sur la Spirale et les expériences de nécromancie.",
    "Opportunités : Accès aux archives interdites, à des mentors ou à des ennemis puissants.",
  ],
  locations: [
    {
      id: "quartier_du_savoir_coeur",
      name: "Cœur du Quartier du Savoir",
      summary:
        "Terrasses de tours fines reliées par des passerelles couvertes.",
      details: [
        "Ambiance : Odeur d'encre, de parchemin et d'ozone magique.",
        "Tests : Connaissances / Investigation pour glaner des informations discrètes.",
        "Danger : Espions de Thade à l'affût de toute curiosité mal placée.",
        "Usage : Lieu de rencontres rapides avec différents érudits et étudiants.",
      ],
      npcIds: ["etudiante_cabale"],
    },
    {
      id: "tour_des_mages_toit",
      name: "Toit de la Tour des Mages",
      summary:
        "Plateforme d'affrontement final, balayée par les vents et les éclairs arcaniques.",
      details: [
        "Ambiance : Quatre pylônes alimentent un bouclier de force sur le boss, vue panoramique sur Valombre en ruine.",
        "Terrain : Risque de chute, éclairs, gravité instable lors de la fusion.",
        "Danger : Thade et ses défenses arcaniques au sommet de sa puissance.",
        "Climax : Lieu de la confrontation finale contre Thade et la Spirale.",
      ],
      npcIds: ["kaelen_vampire"],
    },
    {
      id: "valombre_sommet_tour_mage",
      name: "Sommet éventré de la Tour des Mages",
      summary:
        "Crête brisée où le tunnel de la Spirale éventre le toit, théâtre d'irruptions violentes.",
      details: [
        "Ambiance : Pluie de gravats, éclairs arcaniques, vue panoramique sur la ville en flammes.",
        "Tests : Acrobaties / Volonté pour rester debout sous les rafales magiques.",
        "Danger : Gardes d'élite, champs de force instables, arrivée possible de Thade.",
        "Usage : Transition entre la Spirale et l'affrontement final à la surface.",
      ],
      npcIds: [],
    },
    {
      id: "tour_des_mages",
      name: "Tour des Mages",
      summary:
        "Symbole de la Guilde des Mages, cœur du pouvoir magique de la ville.",
      details: [
        "Ambiance : Brume violette, éclairs arcaniques, silhouettes en robes observant la ville.",
        "Tests : Arcane / Politique pour naviguer entre les différentes factions de mages.",
        "Danger : Apprentis fanatisés, élémentaires liés, gardiens magiques.",
        "Climax : Devient théâtre du combat final contre Thade dans la campagne.",
      ],
      npcIds: ["thade_coren", "archimage_defecteur", "magi_tuteur_loyal"],
    },
    {
      id: "bureau_thade_coren",
      name: "Bureau de Thade Coren",
      summary:
        "Appartement panoramique où Thade orchestre la guerre : bibliothèques en peau, cartes arcaniques et relais vers la Spirale.",
      details: [
        "Ambiance : Parfums d'encens froid, instruments de mesure sifflants, vitraux irradiant une lueur violette.",
        "Tests : Investigation / Magie pour décoder les plans gravés sur les murs et détecter les glyphes de défense.",
        "Danger : Serviteurs spectraux, cristaux-judas reliés à la Spirale, pièges qui inversent la gravité.",
        "Usage : Pièce clé pour découvrir les complots de Thade, voler ses recherches ou affronter sa projection.",
      ],
      npcIds: ["thade_coren"],
    },
    {
      id: "universite_arcane",
      name: "Université Arcane et Bibliothèques",
      summary:
        "Complexe d'amphithéâtres, de salles de cours et d'archives interdites.",
      details: [
        "Ambiance : Chuchotements, pages tournées, chandelles vacillantes.",
        "Tests : Recherche / Investigation pour dénicher des informations sur la Spirale et la nécromancie.",
        "Danger : Bibliothécaires zélés, sorts de défense animant les livres et les étagères.",
        "Loot : Grimoires, parchemins de sorts, notes de recherches compromettantes.",
      ],
      // Nouveau système unifié : IDs vers pnjPrincipaux/pnjEnnemis
      npcIds: ["etudiant_universite", "bibliothecaire_interdits"],
    },
    {
      id: "place_marche_noir",
      name: "Place du Marché Noir",
      summary:
        "Place couverte à l'écart des patrouilles, dédiée aux transactions interdites.",
      details: [
        "Ambiance : Torches bleuâtres, voix basses, marchandises cachées sous des bâches.",
        "Tests : Négociation / Intimidation pour obtenir des objets rares sans se faire dépouiller.",
        "Danger : Voleurs, assassins, espions.",
        "Loot : Composants nécromantiques, artefacts de la Spirale, informations vendues au plus offrant.",
      ],
      npcIds: ["marchand_gris"],
    },
  ],
};
