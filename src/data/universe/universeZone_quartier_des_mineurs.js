export const zoneQuartierDesMineurs = {
  id: "quartier_des_mineurs",
  nom: "Terrasses Naines",
  resume:
    "Les Terrasses Naines occupent le flanc Est de Valombre, entre les quartiers humains et l’entrée de la Mine d’Argent. Les maisons, les ateliers et les salles communes sont disposés sur une succession de gradins reliés par des escaliers de pierre. Le quartier est principalement habité par les familles de mineurs, de forgerons et d’artisans nains, qui administrent encore leurs affaires selon les règles de leurs clans et de leurs guildes.",
  details: [
    "Les bâtiments sont construits en granit sombre. Certains s’appuient directement contre la colline, tandis que leurs pièces inférieures sont creusées dans la roche.",
    "Les rues sont courtes et souvent en pente. Des escaliers, des rampes et des passages couverts relient les différents niveaux du quartier.",
    "Des lanternes à huile lourde éclairent les façades. L’air porte presque toujours une odeur de charbon, de métal chauffé et de pierre humide.",
    "Les humains viennent y commercer ou traiter avec les guildes, mais restent peu nombreux en dehors des rues principales.",
  ],
  emplacements: [
    {
      id: "quartier_mineurs_valombre",
      nom: "Place des Terrasses",
      resume:
        "Carrefour principal du quartier nain, la Place des Terrasses relie les rues commerçantes, le Temple-Forgeron et la route qui mène à l’entrée de la mine.",
      details: [
        "La place est pavée de larges dalles de granit gris, usées par le passage des chariots et des générations de mineurs.",
        "Un grand brasero de fer occupe son centre. Il sert à la fois de point de rassemblement et de origine de chaleur pendant les mois froids.",
        "Des échoppes de nourriture, d’outillage et de vêtements de travail occupent les rez-de-chaussée qui entourent la place.",
        "Les annonces de la Guilde des Mineurs et les décisions concernant le quartier sont affichées sur un panneau de bois protégé par un auvent.",
      ],
      idsPnj: ["thorgar_pretre_nain", "durnik_chef_mineur", "brandin_forgeron"],
    },
    {
      id: "temple_forgeron",
      nom: "Temple-Forgeron de Moradin",
      resume:
        "Creusé dans la roche au-dessus de la place, le Temple-Forgeron est le principal lieu de culte des familles naines de Valombre. Les cérémonies religieuses y côtoient le travail quotidien de la forge.",
      details: [
        "La façade est encadrée par deux piliers de granit gravés de marteaux, d’enclumes et de runes familiales.",
        "La salle principale est organisée autour d’une grande forge dont le feu est entretenu jour et nuit.",
        "Des alcôves latérales accueillent les prières familiales, les serments de guilde et les plaques portant les noms des morts.",
        "Le martèlement de l’enclume accompagne une grande partie des offices. Pour les prêtres du temple, travailler le métal est une forme de prière.",
      ],
      idsPnj: ["thorgar_pretre_nain"],
    },
    {
      id: "forge_thorgar_refuge",
      nom: "Forge de Thorgar",
      resume:
        "Atelier aménagé dans une aile du Temple-Forgeron. Thorgar y fabrique et répare des objets destinés au culte, aux familles du quartier et aux mineurs.",
      details: [
        "La forge donne directement sur une rue latérale par une large ouverture que l’on ferme avec des volets métalliques.",
        "Des marteaux, des pinces et des moules sont rangés sur les murs, à côté de pièces en attente de réparation.",
        "Thorgar y travaille aussi bien des outils ordinaires que des plaques funéraires, des lampes votives et des objets consacrés.",
        "La chaleur de la forge, l’odeur du charbon et le bruit de l’enclume se répandent jusque dans la rue.",
      ],
      idsPnj: ["thorgar_pretre_nain"],
    },
    {
      id: "chapelle_souterraine_forge",
      nom: "Chapelle sous la Forge",
      resume:
        "Une petite chapelle creusée sous l’atelier de Thorgar accueille les prières qui ne sont pas destinées à être prononcées dans la grande salle du temple.",
      details: [
        "On y accède par un escalier étroit dissimulé derrière une lourde porte de bois.",
        "La pièce possède un plafond bas, un autel en pierre brute et une ancienne statue de Moradin.",
        "Des niches creusées dans les murs accueillent des bougies, de petites plaques gravées et des offrandes laissées par les familles.",
        "La chapelle est surtout utilisée pour les veillées, les prières privées et les rites accomplis en présence de quelques proches.",
      ],
      idsPnj: ["thorgar_pretre_nain"],
    },
    {
      id: "marteau_etain_taverne",
      nom: "Le Marteau d’Étain",
      resume:
        "Taverne naine située près de la Place des Terrasses. Mineurs, artisans et chefs de guilde s’y retrouvent après leur travail.",
      details: [
        "La salle est basse, construite en bois sombre et meublée de longues tables communes.",
        "La maison sert une bière noire et épaisse, accompagnée de pain dense, de viande fumée et de légumes conservés au vinaigre.",
        "Un tableau près du comptoir indique les horaires des équipes, les galeries ouvertes et les noms des mineurs recherchés pour certains travaux.",
        "Les conversations restent généralement discrètes. Les étrangers sont servis correctement, mais doivent rarement s’attendre à être intégrés spontanément aux discussions.",
      ],
      idsPnj: ["durnik_chef_mineur", "grodrin_serveur", "brogar_eclaireur"],
    },
    {
      id: "entree_mine_valombre",
      nom: "Entrée de la Mine",
      resume:
        "Un poste de garde et une cage de descente marquent l’entrée de la Mine d’Argent. Tous les mineurs, les chargements et les visiteurs passent par ce point.",
      details: [
        "La cage est suspendue à un treuil à vapeur installé dans une haute charpente renforcée de métal.",
        "Des rails relient la plateforme de chargement aux entrepôts et aux ateliers du quartier.",
        "Un registre consigne les équipes qui descendent, leur niveau de travail et l’heure prévue de leur retour.",
        "L’accès est surveillé en permanence. Les personnes étrangères à la mine doivent être accompagnées ou disposer d’une autorisation de la Guilde.",
      ],
      idsPnj: ["garde_portail_mine", "torm_garde_mine"],
    },
    {
      id: "egouts_terrasses",
      nom: "Égouts des Terrasses",
      resume:
        "Ancien réseau de drainage creusé sous le quartier. Ses conduits recueillent les eaux de pluie, les infiltrations de la colline et les rejets des ateliers.",
      details: [
        "Les galeries principales sont voûtées et assez hautes pour qu’un nain puisse s’y déplacer debout.",
        "Certaines parties sont presque sèches, tandis que les niveaux inférieurs restent couverts d’une eau froide et sombre.",
        "Des grilles, des vannes et des bassins permettent de détourner l’eau avant qu’elle n’atteigne les galeries de la mine.",
        "Plusieurs accès de maintenance débouchent dans les caves, les ateliers et les rues basses du quartier.",
      ],
      idsPnj: ["sniv_kobold"],
    },
    {
      id: "qg_resistance",
      nom: "Ancienne Salle de Filtration",
      resume:
        "Une salle inutilisée du réseau d’égouts, autrefois destinée à filtrer l’eau avant son passage sous les Terrasses.",
      details: [
        "La pièce est sèche, voûtée et plus vaste que les conduits qui l’entourent.",
        "Trois bassins de pierre occupent une moitié de la salle. Ils sont vides depuis que le réseau a été détourné.",
        "D’anciennes étagères, des tables de travail et plusieurs crochets métalliques sont encore fixés aux murs.",
        "La salle possède plusieurs issues et se trouve assez loin des conduits actifs pour que les bruits y soient peu entendus.",
      ],
      idsPnj: ["mara_dirigeante", "durnik_chef_mineur", "sniv_kobold"],
    },
    {
      id: "egouts_pres_place",
      nom: "Grille d’Aération de la Place",
      resume:
        "Une large grille relie les égouts à la bordure de la Place des Terrasses. Elle apporte un peu d’air et de lumière aux galeries inférieures.",
      details: [
        "La grille est installée au niveau du sol, contre le soubassement d’un bâtiment donnant sur la place.",
        "Depuis les égouts, on distingue les jambes des passants et l’on entend clairement les conversations proches.",
        "La lumière traverse les barreaux pendant la journée, mais n’éclaire qu’une petite partie du conduit.",
        "Les fixations sont anciennes et couvertes de rouille, bien que les barreaux restent solidement ancrés dans la pierre.",
      ],
      idsPnj: ["sniv_kobold"],
    },
    {
      id: "archives_financieres",
      nom: "Comptoir de Change des Terrasses",
      resume:
        "Etablissement où les mineurs, les marchands et les guildes échangent monnaies, lettres de crédit et parts sur les cargaisons de minerai.",
      details: [
        "La salle publique est protégée par un comptoir de bois épais et une grille de fer.",
        "Les cours du minerai et des principales monnaies sont inscrits chaque matin sur une ardoise.",
        "Une arrière-salle sert à conserver les registres, les contrats, les reconnaissances de dette et les coffres des clients.",
        "Les transactions importantes sont inscrites dans plusieurs livres séparés selon qu’elles concernent les salaires, les marchandises ou les prêts.",
      ],
      idsPnj: ["voldrin_changeur"],
    },
  ],
};

