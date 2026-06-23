export const zoneSpirale = {
  id: "spirale",
  nom: "La Spirale",
  resume:
    "La Spirale est un espace situé au-delà des profondeurs de Valombre. L’air y est respirable, mais ne porte presque aucune odeur. Une lumière pâle éclaire le paysage sans que l’on puisse en identifier la origine, et les distances sont difficiles à estimer. Malgré cet environnement, une communauté humaine s’y est installée depuis plusieurs générations.",
  details: [
    "Une lumière laiteuse aux reflets violets couvre le paysage en permanence. Elle ne varie ni avec les heures ni avec les déplacements.",
    "Les sons portent mal. Une voix proche reste audible, mais les bruits lointains semblent s’éteindre avant d’atteindre celui qui les écoute.",
    "Les odeurs naturelles sont presque absentes. Le feu, la nourriture et les plantes ne dégagent un parfum que lorsqu’ils ont été préparés d’une manière particulière.",
    "Le paysage est composé de plaines pâles, de reliefs rocheux et de structures isolées. Certaines masses de pierre restent suspendues loin au-dessus du sol.",
  ],
  emplacements: [
    {
      id: "plateforme_arrivee_spirale",
      nom: "Plateforme d’Arrivée",
      resume:
        "Un ancien escalier débouche sur une plateforme circulaire en pierre claire. Elle marque la limite entre le passage souterrain et les étendues ouvertes de la Spirale.",
      details: [
        "La plateforme est formée de larges dalles dont les jointures sont presque invisibles.",
        "L’escalier qui remonte vers Valombre compte une centaine de marches irrégulières taillées directement dans la roche.",
        "La lumière des lanternes fonctionne normalement, mais éclaire une zone moins large qu’elle ne le devrait.",
        "Depuis la plateforme, on distingue plusieurs groupes de cabanes ainsi que des formes sombres suspendues très loin au-dessus de l’horizon.",
      ],
      idsPnj: [],
    },
    {
      id: "village_des_oublies",
      nom: "Village des Oubliés",
      resume:
        "Une petite communauté humaine s’est établie à proximité de la plateforme. Le village rassemble quelques dizaines de cabanes construites autour d’une halle commune.",
      details: [
        "Les habitations sont faites de planches récupérées, de pierre pâle et de matériaux dont l’origine est difficile à reconnaître.",
        "Des feux brûlent devant plusieurs maisons. Les habitants y ajoutent des herbes et des huiles afin de produire des odeurs de bois, de soupe ou de savon.",
        "La halle commune sert de cuisine, de lieu de réunion et d’abri lorsque certaines parties de la plaine deviennent impraticables.",
        "Une petite cloche est installée au centre du village. Contrairement aux autres sons, son tintement reste clair et porte sur une grande distance.",
        "Des cordes couvertes de petites plaques gravées pendent sous les auvents et à l’intérieur des maisons.",
      ],
      idsPnj: [
        "pell_ancien_garde",
        "lia_enfant_nee_spirale",
        "marchand_orthen",
      ],
    },
    {
      id: "plaines_marche_spirale",
      nom: "Plaines de Marche",
      resume:
        "Une vaste étendue sépare le Village des constructions plus éloignées. Le terrain paraît presque plat, mais les repères changent lentement au cours du trajet.",
      details: [
        "Le sol est couvert d’une matière souple qui ressemble à de l’herbe pâle sans en avoir la texture.",
        "Des balises de pierre, de bois et de corde indiquent les routes utilisées par les habitants du Village.",
        "Certaines zones modifient légèrement le poids des objets ou la direction de leur chute.",
        "Une poussière cristalline traverse parfois les plaines en montant vers le ciel plutôt qu’en retombant sur le sol.",
        "Des silhouettes de bâtiments et de masses rocheuses apparaissent au loin, mais leur distance reste difficile à évaluer.",
      ],
      idsPnj: [],
    },
    {
      id: "cathedrale_soupirs",
      nom: "Cathédrale des Soupirs",
      resume:
        "Une grande construction de pierre claire se dresse au-delà des Plaines de Marche. Son vaste espace intérieur a été aménagé en bibliothèque et en lieu de travail.",
      details: [
        "La salle principale mesure une cinquantaine de pas de côté et ne possède ni colonnes ni fenêtres visibles.",
        "Des alvéoles creusées dans les murs contiennent des livres, des cartes, des échantillons et des instruments de mesure.",
        "Les documents sont regroupés par sujets : créatures, eau, gravité, végétation, architecture et phénomènes observés dans la Spirale.",
        "Un lutrin de pierre occupe le fond de la salle. Plusieurs dossiers et cahiers y sont laissés ouverts.",
        "L’endroit est silencieux et propre. Une légère odeur de papier sec et de linge frais y demeure malgré l’absence d’odeurs dans le reste de la Spirale.",
      ],
      idsPnj: [],
    },
    {
      id: "sanctuaire_sealine",
      nom: "Sanctuaire de Sealine",
      resume:
        "Un escalier dissimulé derrière l’une des alvéoles de la Cathédrale conduit à une chambre circulaire aménagée comme une habitation.",
      details: [
        "La pièce contient une table en bois, deux chaises, plusieurs étagères et un service à thé.",
        "Un petit feu brûle dans un foyer de pierre. Un panier est installé à proximité pour un chat.",
        "Le plafond reproduit un ciel de crépuscule dont la lumière change lentement sans jamais atteindre la nuit complète.",
        "Contrairement au reste de la Spirale, la chambre possède plusieurs odeurs distinctes : thé, papier, savon, bois et fumée.",
        "Les objets sont entretenus et régulièrement utilisés. La pièce ne ressemble ni à un tombeau ni à un lieu abandonné.",
      ],
      idsPnj: ["sealine_coren"],
    },
    {
      id: "limbes_inferieurs_spirale",
      nom: "Limbes Inférieurs",
      resume:
        "Plusieurs passages situés sous la Cathédrale conduisent vers des régions qui ne figurent que partiellement sur les cartes conservées dans la bibliothèque.",
      details: [
        "Les escaliers inférieurs sont plus étroits et plus irréguliers que ceux des autres parties de la Cathédrale.",
        "Les dernières cartes représentent cette région par de larges espaces laissés vides ou couverts de notes incomplètes.",
        "Des marques gravées près des accès demandent aux voyageurs de ne pas poursuivre sans raison.",
        "Depuis les passages les plus bas, on entend parfois un bruit lent et régulier dont l’origine reste impossible à situer.",
        "Aucune balise du Village ne se trouve au-delà des premiers escaliers.",
      ],
      idsPnj: [],
    },
  ],
};