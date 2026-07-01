// PNJ liés à la Spirale et au Village des Oubliés

export const pnjSpiraleData = [
{
    "id": "sealine_coren",
    "usageNarratif": "scene",
    "nom": "Sealine Vael, la Dame des Soupirs",
    "role": "Mage de soin de l'Ordre de Nyx et amante de Thade, devenue pivot émotionnel de la trilogie. Lors de la catastrophe de Nyx, elle servit d'ancre vivante et referma la brèche sur elle-même pour sauver le quartier. Depuis, elle est piégée au-delà du seuil, ni tout à fait morte ni vivante.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_sealine_coren.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Sealine apparaît dans un calme impossible, comme si la Spirale avait suspendu le temps autour de sa voix.",
      "objectif": "Que Thade s'arrête par choix, pas par défaite. Que la Larme reste scellée et la brèche refermée. Qu'il accepte sa mort au lieu d'en faire payer le prix à Valombre.",
      "attitude": "Précise, calme, un peu d'humour. Parle comme quelqu'un qui pense sans interruption depuis qu'elle est de l'autre côté du seuil. Derrière chaque mot, l'amour pour Thade et le refus de le laisser se détruire pour elle."
    },
    "disposition": "amical",
    "impulsion": "Empêcher Thade de se sacrifier — et le monde avec lui — pour la ramener.",
    "degats": {
      "valeur": 1,
      "description": "Contact planaire, froid de vérité, trouble intérieur",
      "tags": [
        "magique",
        "intime",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Incorporelle seulement dans certaines conditions"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "vérité",
      "gardienne",
      "spirale",
      "non-combattante"
    ],
    "actionsMJ": [
      "Révéler ce qui s'est vraiment passé lors de la catastrophe de Nyx",
      "Montrer le coût humain de rouvrir le seuil",
      "Offrir une issue morale plus difficile qu'une victoire militaire"
    ],
    "description": "Sealine est la vérité vivante au-delà du seuil. Elle porte à la fois l'amour de Thade, la mémoire de la catastrophe de Nyx et le refus que son retour serve d'excuse à la destruction de Valombre.",
    "notes": "",
    "race": "humaine, ancienne mage de l'Ordre de Nyx, piégée au-delà du seuil",
    "faction": "Ordre de Nyx (origine) / Spirale"
  },

{
    "id": "marchand_orthen",
    "usageNarratif": "levier",
    "nom": "Orthen, marchand du Village des Oubliés",
    "role": "Premier contact des PJ dans le Village. Normalité rassurante dans un endroit qui ne l'est pas.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_marchand_orthen.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Orthen leur pose une question sur Valombre avant même de parler de prix.",
      "objectif": "Continuer à vivre. Avoir des nouvelles du monde.",
      "attitude": "Curieux et accueillant, un peu mélancolique. Pose beaucoup de questions sur 'là-haut'."
    },
    "disposition": "amical",
    "impulsion": "Maintenir un lien avec le monde d'en haut.",
    "degats": {
      "valeur": 0,
      "description": "Bâton défensif, appel aux gardiens",
      "tags": [
        "proche",
        "défensif"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "village",
      "mémoire",
      "accueil",
      "spirale"
    ],
    "actionsMJ": [
      "Poser une question simple qui révèle un gouffre temporel",
      "Troquer une route contre des nouvelles",
      "Humaniser la Spirale"
    ],
    "description": "Orthen donne au Village des Oubliés une normalité humaine. Il sert de premier contact, de guide social et de rappel que la Spirale contient aussi des vies ordinaires.",
    "notes": "",
    "race": "humain",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },

{
    "id": "lia_enfant_nee_spirale",
    "usageNarratif": "levier",
    "nom": "Lia",
    "role": "Incarnation de ce que la Spirale fait aux innocents. Pas de l'horreur : de la normalité décalée.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_lia_enfant_nee_spirale.jpg",
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Lia les observe avec une curiosité tranquille, comme s'ils étaient les êtres étranges de son monde.",
      "objectif": "Comprendre le monde 'd'en haut' dont les adultes parlent.",
      "attitude": "Curieuse, directe, sans filtre. Pas effrayée : c'est son monde normal."
    },
    "disposition": "amical",
    "impulsion": "Comprendre le monde impossible d'en haut.",
    "degats": {
      "valeur": 0,
      "description": "Aucun, mais ses perceptions attirent l'attention",
      "tags": [
        "innocent",
        "planaire"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "en_danger",
        "hors_jeu"
      ]
    },
    "etiquettes": [
      "enfant",
      "spirale",
      "oracle",
      "innocente"
    ],
    "actionsMJ": [
      "Décrire les flux invisibles comme des couleurs",
      "Répéter une phrase de Sealine sans la comprendre",
      "Mettre les PJ face à ce qu'ils appellent normal"
    ],
    "description": "Lia montre la Spirale sans horreur spectaculaire. Son innocence, ses perceptions décalées et ses questions simples rendent le monde d'en haut aussi étrange que celui d'en bas.",
    "notes": "",
    "race": "humaine née planaire",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },

{
    "id": "pell_ancien_garde",
    "usageNarratif": "levier",
    "nom": "Pell, ancien garde de Valombre",
    "role": "Gardien résigné du Village. Ne sait plus quel roi règne, mais sait encore se battre.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_pell_ancien_garde.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Pell se place naturellement entre eux et les habitants du Village.",
      "objectif": "Protéger les habitants. Peut-être un jour retrouver Valombre.",
      "attitude": "Résigné, méthodique. Un sursaut de vie quand les PJ parlent du monde d'en haut."
    },
    "disposition": "neutre",
    "impulsion": "Protéger le Village même si son identité s'efface.",
    "degats": {
      "valeur": 2,
      "description": "Épée rouillée, garde ancienne, défense de ligne",
      "tags": [
        "proche",
        "défensif"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Vieille armure entretenue"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "garde",
      "oublié",
      "protecteur",
      "mélancolique"
    ],
    "actionsMJ": [
      "Reconnaître un symbole qu'il ne peut plus dater",
      "Se placer entre les PJ et les civils",
      "Oublier un nom au pire moment"
    ],
    "description": "Pell est la protection fatiguée du Village des Oubliés. Ancien soldat détaché de son époque, il défend les habitants tout en perdant peu à peu ses repères sur Valombre.",
    "notes": "",
    "race": "humain",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },

{
    "id": "creature_spirale_cooptee",
    "usageNarratif": "scene",
    "nom": "La Présence Cooptée",
    "role": "Ce qui franchit le seuil affaibli et s'installe dans les galeries inférieures. Sans intention humaine mais dotée d'effets cohérents et croissants, la Spirale réécrit peu à peu les distances, les lois physiques et les êtres qu'elle absorbe. Elle n'attaque pas : elle assimile.",
    "categorie": "monstres",
    "image": "/images/PNJ/pnj_creature_spirale_cooptee.jpg",
    "antagoniste": true,
    "interpretation": {
      "accroche": "Précède son apparition par un silence qui aspire les sons et une lumière qui éclaire moins loin qu'elle ne devrait.",
      "objectif": "Occuper le vide laissé par le sceau et étendre la géométrie de la Spirale à tout ce qu'elle touche.",
      "attitude": "Sans malveillance ni pitié. Indifférente comme une marée. Ne négocie pas, ne menace pas : elle est simplement en train d'arriver."
    },
    "disposition": "hostile",
    "impulsion": "Étendre la Spirale et assimiler ce qui reste piégé dans les galeries.",
    "degats": {
      "valeur": 3,
      "description": "Distorsion planaire, froid de vérité, déplacement des distances",
      "tags": [
        "magique",
        "loin",
        "ignore-armure",
        "zone"
      ]
    },
    "armure": {
      "valeur": 2,
      "description": "Incorporelle et diffuse ; les coups ordinaires la traversent"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "perturbee",
        "repoussee",
        "contenue",
        "dissipee"
      ]
    },
    "etiquettes": [
      "spirale",
      "planaire",
      "environnemental",
      "incorporel",
      "sans-intention"
    ],
    "actionsMJ": [
      "Allonger un trajet déjà parcouru et rendre les cartes contradictoires",
      "Inverser localement le poids, le son ou l'orientation",
      "Absorber une section de galerie avec ses outils, ses structures et ceux qui s'y trouvent",
      "Coopter une présence ou un être croisé pour étendre son emprise"
    ],
    "description": "Pas une forme, mais un endroit qui a cessé d'obéir. Couloirs qui rejoignent ce qu'ils ne devraient pas toucher, ciel laiteux au fond d'une mine, échos d'une voix presque familière. On ne la combat pas : on la contient ou on la fuit.",
    "notes": "Force environnementale, pas un adversaire à abattre. Ses « cases de vie » représentent des paliers de confinement plutôt que des blessures. Liée à Sealine Vael, prisonnière au-delà du seuil. Pivot de la menace « La Spirale en Expansion » (Front 5) et de la menace « Le Glissement de l'Ancrage » (Front 6). Le déphasage de Valombre est l'expression surface de ce que la Présence fait en profondeur : la Spirale n'a pas envahi, elle a glissé l'ancrage de la cité entière.",
    "race": "manifestation planaire de la Spirale",
    "faction": "La Spirale"
  },
];
