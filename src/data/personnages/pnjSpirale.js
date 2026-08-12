// PNJ liés à la Spirale et au Village des Oubliés

export const pnjSpiraleData = [
{
    "id": "sealine_coren",
    "usageNarratif": "scene",
    "nom": "Sealine Vael, la Dame des Soupirs",
    "role": "Ancienne mage de soin de l'Ordre de Nyx. Elle est piégée au-delà du seuil depuis la catastrophe qui a détruit l'Ordre et brisé Thade.",
    "categorie": "allies",
    "image": "/images/PNJ/Sealine.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Elle apparaît dans une lumière violette, immobile, avec une voix douce qui ne tremble pas.",
      "objectif": "Empêcher Thade d'ouvrir le seuil et de faire payer sa perte à toute la ville.",
      "attitude": "Calme, lucide et triste sans être faible. Elle ne supplie pas : elle dit la vérité et laisse les PJ choisir."
    },
    "disposition": "amical",
    "impulsion": "Empêcher Thade de transformer son deuil en catastrophe pour Valombre.",
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
    "description": "Jeune femme aux longs cheveux sombres, vêtue d'une robe claire presque blanche. Sa silhouette paraît légèrement translucide, entourée d'une lumière violette. Son visage est calme, grave, presque immobile, comme si le temps ne passait plus autour d'elle.",
    "notes": "",
    "race": "humaine, ancienne mage de l'Ordre de Nyx, piégée au-delà du seuil",
    "faction": "Ordre de Nyx (origine) / Spirale"
  },

{
    "id": "marchand_orthen",
    "usageNarratif": "levier",
    "nom": "Orthen, marchand du Village des Oubliés",
    "role": "Marchand du Village des Oubliés. Il accueille les étrangers, échange des nouvelles et aide les PJ à comprendre la vie quotidienne dans la Spirale.",
    "categorie": "allies",
    "image": "/images/PNJ/Orthen.png",
    "interpretation": {
      "accroche": "Il demande des nouvelles de Valombre avant même de parler de prix.",
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
    "description": "Homme brun, barbe courte, chemise simple et foulard de travail. Il se tient derrière un comptoir modeste, dans une échoppe éclairée par une lumière violette venue de l'extérieur. Son sourire est sincère, mais son regard cherche toujours des nouvelles.",
    "notes": "",
    "race": "humain",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },

{
    "id": "lia_enfant_nee_spirale",
    "usageNarratif": "levier",
    "nom": "Lia",
    "role": "Enfant née dans le Village des Oubliés. Elle voit la Spirale comme quelque chose de normal et pose des questions qui dérangent les adultes.",
    "categorie": "allies",
    "image": "/images/PNJ/Lia.png",
    "interpretation": {
      "accroche": "Elle observe les PJ sans peur, comme s'ils étaient les créatures étranges de son monde.",
      "objectif": "Comprendre le monde 'd'en haut' dont les adultes parlent.",
      "attitude": "Curieuse, directe, sans filtre. Pas effrayée : c'est son monde normal."
    },
    "disposition": "amical",
    "impulsion": "Comprendre le monde d'en haut dont les adultes parlent.",
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
    "description": "Fillette aux cheveux bruns bouclés, vêtue d'une robe simple couleur lin. Elle se tient dans une lumière claire, avec la ville déformée derrière elle. Son visage est ouvert, curieux, sans peur devant ce que les adultes trouvent impossible.",
    "notes": "",
    "race": "humaine née planaire",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },

{
    "id": "pell_ancien_garde",
    "usageNarratif": "levier",
    "nom": "Pell, ancien garde de Valombre",
    "role": "Ancien garde de Valombre, aujourd'hui protecteur du Village des Oubliés. Il se souvient encore de son devoir, mais plus toujours de son époque.",
    "categorie": "allies",
    "image": "/images/PNJ/Pell.png",
    "interpretation": {
      "accroche": "Il se place entre les PJ et les habitants avant même de poser une question.",
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
    "description": "Homme robuste, barbe sombre, cheveux grisonnants et armure ancienne bien entretenue. Il porte une cape sombre et garde une main près de son arme. Son visage est fatigué, mais sa posture reste celle d'un soldat en faction.",
    "notes": "",
    "race": "humain",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },

{
    "id": "creature_spirale_cooptee",
    "usageNarratif": "scene",
    "nom": "La Présence Cooptée",
    "role": "Manifestation de la Spirale dans les galeries. Ce n'est pas une personne : c'est une présence qui déforme les lieux, les distances et les corps.",
    "categorie": "monstres",
    "image": "/images/PNJ/La présence Cooptée.png",
    "antagoniste": true,
    "interpretation": {
      "accroche": "Avant qu'elle apparaisse, les sons s'étouffent et la lumière semble éclairer moins loin.",
      "objectif": "Occuper le vide laissé par le sceau et étendre la géométrie de la Spirale à tout ce qu'elle touche.",
      "attitude": "Sans colère, sans parole et sans pitié. Elle ne négocie pas : elle avance, transforme et absorbe."
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
    "description": "Forme violette et lumineuse, comme une déchirure en spirale suspendue dans l'air. Autour d'elle, la pierre paraît liquide, les couloirs se tordent et des silhouettes floues semblent se superposer dans la lumière. Elle n'a ni visage ni corps stable.",
    "notes": "Force environnementale, pas un adversaire à abattre. Ses « cases de vie » représentent des paliers de confinement plutôt que des blessures. Liée à Sealine Vael, prisonnière au-delà du seuil. Pivot de la menace « La Spirale en Expansion » (Front 5) et de la menace « Le Glissement de l'Ancrage » (Front 6). Le déphasage de Valombre est l'expression surface de ce que la Présence fait en profondeur : la Spirale n'a pas envahi, elle a glissé l'ancrage de la cité entière.",
    "race": "manifestation planaire de la Spirale",
    "faction": "La Spirale"
  },
];
