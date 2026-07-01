// Adversaires et menaces indépendantes

export const pnjAdversairesData = [
{
    "id": "elian_voss",
    "usageNarratif": "scene",
    "nom": "Elian Voss",
    "role": "Masque de l'Ordre de Nyx, chercheur du sérum S-01 et trafiquant d'identités. Il obtient des résultats réels, puis justifie leur coût humain.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_elian_voss.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Elian range un instrument, ferme un dossier, puis leur parle comme s'ils arrivaient au mauvais moment d'une expérience nécessaire.",
      "objectif": "Prouver que sa méthode sauve plus de vies qu'elle n'en détruit, et conserver les protocoles S-01.",
      "attitude": "Froid, précis, presque courtois. Répond par des résultats et oblige ses interlocuteurs à assumer leurs propres morts."
    },
    "disposition": "tendu",
    "impulsion": "Sauver par le calcul, sacrifier les cas perdus.",
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
      "Présenter un crime comme une statistique",
      "Utiliser un patient comme argument moral",
      "Détruire un registre pour garder le protocole"
    ],
    "description": "Elian Voss porte la part froide et calculatrice de Nyx. Il obtient des résultats réels, mais traite les patients, les registres et les victimes comme des variables qu'il faut accepter ou effacer.",
    "notes": "",
    "race": "humain",
    "faction": "Ordre de Nyx - Masques",
    "antagoniste": false
  },

{
    "id": "champion_banniere_pure",
    "usageNarratif": "scene",
    "nom": "Champion de la Bannière Pure",
    "role": "Chevalier noir et ennemi miroir. Il croit accomplir l'ancien devoir extérieur en purifiant Valombre de la Spirale.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_champion_banniere_pure.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, le Champion se tient droit sous sa bannière, prêt à écouter un engagement mais pas une excuse.",
      "objectif": "Purger le verrou parce qu'il pense que ceux qui le tenaient avant lui ont échoué.",
      "attitude": "Digne, tranchant, jamais gratuitement cruel. Méprise les demi-vérités et respecte les engagements tenus devant témoins."
    },
    "disposition": "hostile",
    "impulsion": "Purger publiquement pour prouver que l'ancien devoir vit encore.",
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
      "Sauver des civils pour gagner la foule",
      "Défier un PJ devant témoins",
      "Transformer une nuance en trahison"
    ],
    "description": "Le Champion est un adversaire public et honorable, dangereux parce qu'il peut avoir raison sur certains constats. Il transforme les nuances en lâcheté et les demi-vérités en preuves de trahison.",
    "notes": "",
    "race": "humain",
    "faction": "Caldris",
    "antagoniste": false
  },
];
