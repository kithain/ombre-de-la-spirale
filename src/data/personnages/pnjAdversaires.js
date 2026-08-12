// Adversaires et menaces indépendantes

export const pnjAdversairesData = [
{
    "id": "elian_voss",
    "usageNarratif": "scene",
    "nom": "Elian Voss",
    "role": "Médecin de l'Ordre de Nyx qui travaille sur le sérum S-01. Il sauve certains patients, mais accepte d'en sacrifier d'autres si cela fait avancer ses recherches.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Elian Voss.png",
    "interpretation": {
      "accroche": "Il ferme un dossier avant de parler, comme si la conversation était une interruption gênante.",
      "objectif": "Conserver ses notes, ses patients et ses protocoles, même si les PJ découvrent ce qu'ils lui ont coûté.",
      "attitude": "Calme, froid et poli. Il parle de ses victimes comme de cas médicaux et demande toujours quelle meilleure solution les autres auraient eue."
    },
    "disposition": "tendu",
    "impulsion": "Prouver que ses méthodes sauvent plus de vies qu'elles n'en détruisent.",
    "degats": {
      "valeur": 1,
      "description": "Fiole instable, crise contrôlée, scalpel",
      "tags": [
        "alchimique",
        "proche",
        "instable"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Sorties préparées"
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
      "médecin",
      "masque",
      "sérum",
      "sans-limite"
    ],
    "actionsMJ": [
      "Présenter un crime comme une décision médicale",
      "Mettre un patient vivant entre les PJ et la vérité",
      "Faire disparaître un registre compromettant"
    ],
    "description": "Homme au crâne rasé, au visage pâle et fermé. Il porte une robe noire simple, boutonnée haut, avec des gants sombres. Son bureau est couvert de fioles, de carnets, de scalpels et de dossiers soigneusement empilés. Il garde toujours un instrument ou une plume à portée de main.",
    "notes": "",
    "race": "humain",
    "faction": "Ordre de Nyx - Masques",
    "antagoniste": false
  },

{
    "id": "champion_banniere_pure",
    "usageNarratif": "scene",
    "nom": "Champion de la Bannière Pure",
    "role": "Commandant caldrisien envoyé pour reprendre le contrôle de Valombre. Il pense que la cité est déjà contaminée par la Spirale et qu'une purge brutale vaut mieux qu'une catastrophe plus grande.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Champion.png",
    "interpretation": {
      "accroche": "Il arrive entouré de soldats, sous une grande bannière blanche frappée d'une croix noire. Il parle peu, regarde les gens en face et laisse les silences peser.",
      "objectif": "Imposer l'autorité de Caldris sur Valombre avant que la Spirale ne déborde sur les routes du royaume.",
      "attitude": "Froid, discipliné et sûr de son devoir. Il peut respecter le courage d'un adversaire, mais il ne tolère ni les excuses ni les demi-vérités."
    },
    "disposition": "hostile",
    "impulsion": "Écraser toute trace de la Spirale avant qu'elle ne contamine Caldris.",
    "degats": {
      "valeur": 3,
      "description": "Épée de maître, duel, charge sous bannière",
      "tags": [
        "proche",
        "puissant",
        "honorable"
      ]
    },
    "armure": {
      "valeur": 2,
      "description": "Armure lourde et discipline sacrée"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "brise",
        "mortelle"
      ]
    },
    "etiquettes": [
      "champion",
      "purge",
      "duel",
      "caldris"
    ],
    "actionsMJ": [
      "Protéger des civils pour montrer qu'il n'est pas un monstre",
      "Proposer un duel loyal à un PJ qui lui tient tête",
      "Traiter une hésitation ou un mensonge comme une preuve de complicité"
    ],
    "description": "Homme grand, brun, au visage dur et soigneusement rasé. Il porte une armure noire lourde, décorée de motifs dorés et d'un large symbole en forme de croix sur le plastron. Une cape sombre tombe sur ses épaules. Il tient une épée longue à la garde ouvragée et se place toujours devant sa bannière blanche, comme s'il parlait au nom de tout Caldris.",
    "notes": "",
    "race": "humain",
    "faction": "Caldris",
    "antagoniste": false
  },
];
