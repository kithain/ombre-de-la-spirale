export const zoneVieilleVille = {
  id: "vieille_ville",
  nom: "Vieille Ville",
  resume:
    "La Vieille Ville est le quartier le plus ancien, le plus pauvre et le plus mal réputé de Valombre. Ses ruelles étroites sont bordées de maisons délabrées, d’ateliers modestes, de logements surpeuplés et de commerces qui survivent au jour le jour. La garde y intervient rarement sans raison précise, laissant aux habitants, aux bandes locales et aux réseaux clandestins le soin de régler leurs affaires.",
  details: [
    "Les maisons sont serrées les unes contre les autres. Leurs façades penchent au-dessus des rues et plusieurs étages sont maintenus par des poutres ajoutées au fil des années.",
    "Les pavés sont irréguliers, les caniveaux souvent bouchés et les rues restent humides longtemps après la pluie.",
    "La plupart des habitants sont des ouvriers, des journaliers, des artisans pauvres, des malades ou des personnes qui ne trouvent plus leur place dans les autres quartiers.",
    "Les vols, les trafics et les règlements de comptes sont fréquents, mais la violence reste généralement discrète afin de ne pas attirer la garde.",
  ],
  emplacements: [
    {
      id: "auberge_pic_brise",
      nom: "Auberge « Le Pic Brisé »",
      resume:
        "Grande auberge sombre située près d’un carrefour fréquenté. Elle accueille les voyageurs peu fortunés, les ouvriers de passage et ceux qui préfèrent ne pas être remarqués.",
      details: [
        "La salle commune est basse, bruyante et enfumée. Un grand foyer de pierre fournit plus de lumière que de chaleur.",
        "Les tables portent les marques de couteaux, de chopes renversées et de nombreuses réparations.",
        "Les chambres sont petites, mal isolées et fermées par des serrures inégales. Les plus abordables donnent sur la cour des cuisines.",
        "Brand connaît les habitués, les dettes et les disputes du quartier, mais évite de transmettre une information qui pourrait lui attirer des ennuis.",
      ],
      idsPnj: ["aubergiste_pic_brise"],
    },
    {
      id: "chambre_jaren_auberge",
      nom: "Chambre 12 — Auberge du Pic Brisé",
      resume:
        "Petite chambre louée à bas prix au premier étage de l’auberge. Elle sert aux voyageurs qui ne peuvent pas payer les établissements des quartiers plus riches.",
      details: [
        "La pièce contient un lit étroit, un bureau bancal, une chaise et une armoire dont la porte ferme mal.",
        "Le plâtre est fissuré et une tache d’humidité couvre une partie du plafond.",
        "La fenêtre donne sur une ruelle sombre où les voix et les disputes remontent jusque tard dans la nuit.",
        "Les murs sont assez fins pour entendre les portes, les pas et les conversations du couloir.",
      ],
      idsPnj: [],
    },
    {
      id: "boutique_tibbet",
      nom: "Cordonnerie Tibbet",
      resume:
        "Petite cordonnerie installée dans un local étroit. Tibbet répare surtout les bottes des ouvriers et les chaussures que leurs propriétaires ne peuvent pas remplacer.",
      details: [
        "L’atelier sent le cuir humide, la cire et la colle chauffée.",
        "Des chaussures usées attendent sur des étagères, souvent accompagnées d’un mot promettant un paiement plus tard.",
        "Les outils sont suspendus au-dessus d’un établi éclairé par une unique lampe.",
        "Tibbet travaille généralement dans le fond de la boutique et surveille peu la porte, car il n’y a presque rien à voler.",
      ],
      idsPnj: [],
    },
    {
      id: "apothicairerie_ursula",
      nom: "Apothicairerie d’Ursula",
      resume:
        "Petite boutique de remèdes fréquentée par ceux qui ne peuvent pas consulter les médecins de l’Université. Ursula y vend des préparations simples et soigne parfois sans demander de paiement.",
      details: [
        "Les étagères sont chargées de bocaux réutilisés, de sachets d’herbes et de fioles portant des étiquettes écrites à la main.",
        "Une table près du poêle sert à la fois de comptoir, de bureau et d’espace de consultation.",
        "L’arrière-boutique contient des réserves modestes, du matériel de soin et plusieurs caisses fermées.",
        "Un escalier étroit conduit à une cave aménagée en salle de travail, avec une table métallique, un évier et des armoires verrouillées.",
      ],
      idsPnj: ["ursula_fraternite"],
    },
    {
      id: "egouts_laboratoire",
      nom: "Ancienne Chambre de Pompage",
      resume:
        "Une salle abandonnée des égouts, occupée sans autorisation et utilisée pour entreposer du matériel à l’écart des rues.",
      details: [
        "Le sol est couvert de vase, d’eau stagnante et de planches posées pour éviter les zones les plus profondes.",
        "Les anciennes pompes sont rouillées et plusieurs conduites ont été démontées.",
        "Des tables grossières, des étagères et des caisses occupent le centre de la salle.",
        "Le passage principal rejoint les égouts, tandis qu’un conduit secondaire permet de ressortir dans une cave de la Vieille Ville.",
      ],
      idsPnj: [
        "le_collecteur",
        "contremaite_egouts",
        "hommes_main_pegre",
      ],
    },
    {
      id: "maison_des_retours",
      nom: "Maison des Retours",
      resume:
        "Clinique clandestine cachée derrière une blanchisserie. Elle accueille les malades, les blessés et ceux que les établissements officiels refusent ou ne peuvent pas prendre en charge.",
      details: [
        "Les lits sont alignés contre les murs et séparés par des rideaux faits de vieux draps.",
        "Les couvertures sont usées, les bassines dépareillées et le matériel médical souvent réparé plusieurs fois.",
        "Une cuisine commune permet de préparer de la soupe, de faire bouillir l’eau et de nettoyer les instruments.",
        "L’entrée est dissimulée derrière les réserves de linge afin d’éviter les contrôles et les visiteurs indésirables.",
      ],
      idsPnj: [
        "ursula_fraternite",
        "mara_dirigeante",
        "le_collecteur",
        "hommes_main_pegre",
      ],
    },
    {
      id: "quartier_des_malades",
      nom: "Quartier des Malades",
      resume:
        "Un ensemble d’immeubles délabrés où vivent les familles trop pauvres pour quitter la Vieille Ville et les personnes incapables de travailler régulièrement.",
      details: [
        "Plusieurs familles partagent les mêmes cuisines, les mêmes points d’eau et parfois les mêmes chambres.",
        "Les couloirs sont sombres, mal aérés et encombrés de meubles récupérés.",
        "Les habitants s’organisent pour préparer les repas, surveiller les enfants et transporter les malades.",
        "Les médecins officiels y viennent rarement. Les herboristes, les guérisseurs et les vendeurs de faux remèdes y trouvent en revanche de nombreux clients.",
      ],
      idsPnj: ["ursula_fraternite"],
    },
    {
      id: "cave_des_endeuilles",
      nom: "Cave des Endeuillés",
      resume:
        "Grande cave aménagée sous un immeuble presque abandonné. Elle sert de lieu de réunion à des habitants qui ne disposent d’aucun autre endroit où se retrouver.",
      details: [
        "Des chaises dépareillées sont disposées autour d’une table couverte de cire.",
        "Des portraits, des bougies et des objets ayant appartenu aux morts occupent plusieurs niches.",
        "Les murs sont humides et l’eau traverse parfois le plafond pendant les fortes pluies.",
        "La porte donnant sur la rue est dissimulée derrière un escalier extérieur effondré.",
      ],
      idsPnj: ["edran_morn", "champion_banniere_pure"],
    },
    {
      id: "refuge_ancienne_nyx",
      nom: "Atelier Abandonné",
      resume:
        "Ancien atelier fermé au fond d’une cour où plusieurs logements ont été condamnés. Les voisins évitent les lieux, mais savent que la porte n’est pas toujours restée fermée.",
      details: [
        "La pièce principale contient des établis, des armoires et des étagères couvertes de poussière.",
        "Les fenêtres sont condamnées avec des planches récupérées et la porte possède plusieurs serrures ajoutées à des époques différentes.",
        "Une petite pièce arrière contient un poêle, une table et deux couchettes sommaires.",
        "Une armoire lourde bloque une ancienne porte donnant sur le bâtiment voisin.",
      ],
      idsPnj: [],
    },
    {
      id: "vieille_ville_ruelles",
      nom: "Ruelles Basses",
      resume:
        "Un réseau de passages sombres reliant les logements, les ateliers, les cours intérieures et les quartiers voisins. Les habitants les utilisent pour éviter les grandes rues et les patrouilles.",
      details: [
        "Certaines ruelles sont si étroites que deux personnes peuvent difficilement s’y croiser.",
        "Les enseignes, les escaliers extérieurs, le linge et les bâtiments penchés cachent une grande partie du ciel.",
        "Des coupe-bourses, des guetteurs et des vendeurs clandestins occupent les passages les moins fréquentés.",
        "La garde emprunte rarement les ruelles sans connaître son itinéraire ou sans être accompagnée par quelqu’un du quartier.",
      ],
      idsPnj: [],
    },
  ],
};
