// PNJ liés au Conseil, au Clergé et au commerce de Valombre

export const pnjConseilEtCiteData = [
{
    "id": "envoye_caldris",
    "usageNarratif": "scene",
    "nom": "Émissaire Maelric de Caldris",
    "role": "Émissaire officiel de Caldris. Il vient avertir Valombre que le royaume voisin imposera une quarantaine si la cité ne prouve pas qu'elle contrôle encore la Spirale.",
    "categorie": "neutres",
    "image": "/images/PNJ/Emissaire de Caldris.png",
    "interpretation": {
      "accroche": "Il prend des notes pendant qu'on lui parle, puis demande une preuve courte et vérifiable.",
      "objectif": "Empêcher la crise de Valombre de toucher Caldris, quitte à isoler la cité.",
      "attitude": "Courtois, froid et sincèrement inquiet. Il écoute les récits, mais ne croit qu'aux preuves qu'il peut transmettre."
    },
    "disposition": "neutre",
    "impulsion": "Obtenir une preuve claire avant d'autoriser Caldris à agir.",
    "degats": {
      "valeur": 1,
      "description": "Rapière cérémonielle, mandat, pression diplomatique",
      "tags": [
        "proche",
        "social",
        "autorité"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Protection politique, pas martiale"
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
      "émissaire",
      "ultimatum",
      "caldris",
      "froid",
      "pierres-du-traite"
    ],
    "actionsMJ": [
      "Exiger une preuve courte sous délai",
      "Bloquer une route légalement",
      "Faire passer la prudence pour de la culpabilité",
      "Produire une carte extérieure où Valombre n'est plus atteignable depuis des semaines"
    ],
    "description": "Homme jeune au visage pâle, cheveux noirs soigneusement coiffés et manteau diplomatique sombre. Il porte une sacoche de cuir remplie de cartes, de mandats et de rapports. Son nez a parfois encore une trace de sang séché depuis son passage par les Pierres du Traité.",
    "notes": "Arrivé via les Pierres du Traité, un dispositif rituel datant du traité entre Caldris et Valombre. Le passage ne fonctionne que pour des porteurs assermentés, munis d'un mandat officiel et accompagnés d'un mage de frontière. Les émissaires arrivent pâles, saignants du nez, avec des souvenirs incomplets du trajet. Ils peuvent entrer, mais pas ouvrir la route aux marchands, aux armées ou aux réfugiés. Pivot de la menace « La Révélation par étapes » (Front 6) et de la menace « L'Émissaire Maelric » (Front 3).",
    "race": "humain",
    "faction": "Caldris",
    "antagoniste": false
  },

{
    "id": "patrouille_mixte_conseil",
    "usageNarratif": "scene",
    "nom": "Patrouille Mixte du Conseil",
    "role": "Patrouille envoyée par le Conseil pour rétablir l'ordre. Elle contrôle les rues, saisit les preuves et arrête les suspects au nom de la sécurité.",
    "image": "/images/PNJ/Patrouille mixte du conseil.png",
    "interpretation": {
      "accroche": "Elle ferme une rue en quelques gestes : boucliers devant, hallebardes levées, officier au centre.",
      "objectif": "Appliquer les ordres du Conseil et briser la résistance artisanale",
      "attitude": "Disciplinée, méthodique et peu sensible aux explications improvisées. Elle suit les ordres tant qu'ils semblent légaux."
    },
    "impulsion": "Maintenir l'ordre public même quand l'ordre devient injuste.",
    "degats": {
      "valeur": 2,
      "description": "Hallebardes, mandats, arrestations coordonnées",
      "tags": [
        "groupe",
        "proche",
        "autorité"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Boucliers, procédures et supériorité numérique"
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
      "conseil",
      "patrouille",
      "loi",
      "pression"
    ],
    "actionsMJ": [
      "Transformer une scène en contrôle d'identité",
      "Confisquer une preuve au nom de la sécurité",
      "Obéir à un mandat contestable"
    ],
    "description": "Groupe de gardes en armures complètes, casques fermés, boucliers et hallebardes. Leur équipement mélange les couleurs du Conseil et celles des corps de garde locaux. Ils avancent serrés, avec un officier ou un sergent qui donne les ordres.",
    "notes": "",
    "race": "groupe humanoïde",
    "faction": "Conseil de Valombre",
    "categorie": "ennemis",
    "disposition": "hostile",
    "antagoniste": false
  },

{
    "id": "yselle_vaurin",
    "usageNarratif": "scene",
    "nom": "Yselle Vaurin, première syndique",
    "role": "Première syndique de la Guilde Marchande. Elle arbitre les litiges commerciaux et protège l'influence de la Guilde auprès du Conseil.",
    "categorie": "neutres",
    "image": "/images/PNJ/Yselle-vaurin.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Examine toujours le sceau, la signature ou le registre posé devant elle avant de regarder son interlocuteur.",
      "objectif": "Maintenir les marchés ouverts, faire respecter les contrats et préserver l’influence de la Guilde auprès du Conseil.",
      "attitude": "Courtoise et attentive, mais peu sensible aux discours vagues. Elle préfère les chiffres, les noms et les engagements clairement formulés."
    },
    "disposition": "neutre",
    "impulsion": "Transformer chaque conflit en un accord dont la Guilde peut garantir les termes.",
    "degats": {
      "valeur": 0,
      "description": "Autorité marchande et gardes de la Guilde",
      "tags": [
        "non-combattante",
        "social",
        "autorite"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Protection institutionnelle de la Guilde"
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
      "marchande",
      "syndique",
      "negociatrice",
      "influente"
    ],
    "actionsMJ": [
      "Demander qui garantit une promesse ou un paiement",
      "Suspendre un crédit jusqu’à ce qu’un litige soit réglé",
      "Proposer un compromis avantageux mais contraignant"
    ],
    "description": "Femme blonde, élégante, vêtue d'une veste bleue et d'une robe claire de grande qualité. Elle travaille près d'une fenêtre donnant sur la ville, avec des registres, des contrats et une plume toujours prêts. Son maintien est droit, son sourire rare.",
    "notes": "Yselle distingue les intérêts de la Guilde de ceux des maisons marchandes. Elle peut s’opposer à un négociant puissant si ses pratiques menacent la confiance dans les contrats.",
    "race": "humaine",
    "faction": "La Guilde Marchande"
  },

{
    "id": "odran_bellec",
    "usageNarratif": "scene",
    "nom": "Odran Bellec, maître du Beffroi",
    "role": "Maître du Beffroi de la Marchande. Il surveille l'horloge, les cloches, les poids officiels et les horaires des marchés.",
    "categorie": "neutres",
    "image": "/images/PNJ/Odran Bellec.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Interrompt parfois une phrase pour écouter le mécanisme de l’horloge et compter silencieusement les battements.",
      "objectif": "Maintenir l’horloge, les cloches et les mesures officielles assez fiables pour que personne ne puisse contester les échanges.",
      "attitude": "Méticuleux, littéral et rarement pressé. Il devient plus loquace dès qu’une conversation concerne un mécanisme, une heure ou une mesure."
    },
    "disposition": "neutre",
    "impulsion": "Faire respecter les heures, les poids et les mesures officielles.",
    "degats": {
      "valeur": 1,
      "description": "Clé de mécanicien en fer",
      "tags": [
        "proche",
        "improvise",
        "defensif"
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
      "beffroi",
      "horloger",
      "mesures",
      "meticuleux"
    ],
    "actionsMJ": [
      "Comparer un objet à un poids ou à une mesure officielle",
      "Signaler une incohérence dans un horaire ou un registre",
      "Faire sonner une cloche pour ouvrir, fermer ou interrompre un marché"
    ],
    "description": "Homme aux cheveux gris, veste sombre et tablier de travail rempli de petites poches. Il garde souvent une clef, un poids ou un outil d'horloger entre les doigts. Ses mains portent des traces d'huile malgré leur propreté générale.",
    "notes": "Odran conserve les anciens registres du Beffroi. Il peut vérifier l’heure d’un événement public, la fermeture d’une halle ou l’utilisation officielle d’une cloche.",
    "race": "humain",
    "faction": "La Guilde Marchande"
  },

{
    "id": "geraud_veyre",
    "usageNarratif": "levier",
    "nom": "Géraud Veyre, prévôt de Saint-Aldric",
    "role": "Prévôt de la cathédrale Saint-Aldric. Il dirige les cérémonies importantes et représente le clergé dans les affaires publiques.",
    "categorie": "neutres",
    "image": "/images/PNJ/Geraud Veyre.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Prend quelques secondes de silence avant de répondre à toute question qui engage une promesse, un jugement ou la réputation d’une personne.",
      "objectif": "Préserver l’autorité du clergé sur les rites et empêcher que la cathédrale ne devienne un simple décor des décisions du Conseil.",
      "attitude": "Formel et mesuré. Il écoute sans interrompre, mais distingue strictement les confidences privées des déclarations faites devant témoins."
    },
    "disposition": "neutre",
    "impulsion": "Protéger l'autorité du clergé et le sérieux des serments publics.",
    "degats": {
      "valeur": 1,
      "description": "Bâton cérémoniel et autorité du chapitre",
      "tags": [
        "proche",
        "social",
        "autorite",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Respect attaché à sa fonction"
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
      "pretre",
      "prevot",
      "serments",
      "institution"
    ],
    "actionsMJ": [
      "Demander qu’un engagement soit répété devant témoins",
      "Opposer les usages du chapitre à une décision précipitée",
      "Accorder une audience privée sans promettre son soutien"
    ],
    "description": "Homme âgé à la barbe courte et blanche, vêtu de robes grises bordées de bleu sombre. Il porte une chaîne d'argent ornée du livre et de l'épée de Saint-Aldric. Son visage est calme, presque triste, mais sa voix reste ferme.",
    "notes": "Géraud n’est pas hostile au Conseil, mais il refuse que les prêtres soient traités comme des fonctionnaires municipaux. Il accorde une grande importance aux précédents et aux formulations exactes des serments.",
    "race": "humain",
    "faction": "Le Clergé de Saint-Aldric"
  },

{
    "id": "alix_marne",
    "usageNarratif": "levier",
    "nom": "Sœur Alix Marne, hospitalière",
    "role": "Hospitalière du Clergé de Saint-Aldric. Elle visite les malades, distribue les aumônes et connaît les familles pauvres de plusieurs quartiers.",
    "categorie": "allies",
    "image": "/images/PNJ/Soeur Alix Marne.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Confie régulièrement un panier, une couverture ou une liste de courses à la personne disponible la plus proche sans lui demander son rang.",
      "objectif": "Faire parvenir les réserves du clergé aux familles qui en ont réellement besoin avant qu’elles ne soient absorbées par les cérémonies et l’administration.",
      "attitude": "Chaleureuse, directe et difficile à impressionner. Elle remercie les bonnes intentions, mais juge surtout les gens sur l’aide concrète qu’ils apportent."
    },
    "disposition": "amical",
    "impulsion": "Mettre une aide utile entre les mains de quelqu’un avant que les institutions aient terminé d’en discuter.",
    "degats": {
      "valeur": 0,
      "description": "Ciseaux médicaux, eau chaude et appel aux voisins",
      "tags": [
        "non-combattante",
        "soin",
        "improvise"
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
      "hospitaliere",
      "aumones",
      "soignante",
      "quartiers"
    ],
    "actionsMJ": [
      "Donner une tâche concrète à quelqu’un qui propose son aide",
      "Connaître une famille, un malade ou un logement oublié des registres",
      "Refuser un don accompagné de conditions humiliantes"
    ],
    "description": "Femme robuste d'une quarantaine d'années, visage doux mais énergique. Elle porte une robe religieuse simple, un tablier clair et une coiffe blanche. Une sacoche de soins, quelques listes et des bandages l'accompagnent presque toujours.",
    "notes": "Alix connaît les cuisines communes, les logements pauvres et les petites chapelles de plusieurs quartiers. Elle entretient de bonnes relations avec les guérisseurs qui soignent sans demander immédiatement de paiement.",
    "race": "humaine",
    "faction": "Le Clergé de Saint-Aldric"
  },

{
    "id": "avel_ronce",
    "usageNarratif": "scene",
    "nom": "Avel Ronce, Bourgmestre de Valombre",
    "role": "Bourgmestre de Valombre et président du Conseil. Il veut maintenir l'ordre, mais ses hésitations et ses procédures ralentissent les décisions urgentes.",
    "categorie": "neutres",
    "image": "/images/PNJ/Avel Ronce.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Tapote l'ordre du jour du bout des doigts et renvoie chaque urgence à « la commission compétente ».",
      "objectif": "Maintenir l'ordre public et sa propre légitimité en évitant toute décision qui l'exposerait personnellement.",
      "attitude": "Courtois et mesuré, sincèrement attaché à la cité, mais incapable de trancher tant qu'une procédure peut encore le couvrir. Se durcit dès qu'on l'accuse d'inaction."
    },
    "disposition": "neutre",
    "impulsion": "Produire du consensus plutôt qu'une décision, et se protéger derrière la procédure.",
    "degats": {
      "valeur": null,
      "description": "Non combattant ; agit par décrets, gardes civiques et budgets",
      "tags": [
        "autorite",
        "institutionnel"
      ]
    },
    "armure": {
      "valeur": 2,
      "description": "Garde civique, immunité de fonction et appareil administratif"
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
      "conseil",
      "bourgmestre",
      "procedurier",
      "indecis",
      "institution"
    ],
    "actionsMJ": [
      "Enterrer une urgence sous une commission ou un conflit de compétence",
      "Chercher un coupable commode pour rassurer la population et les marchés",
      "Voter une mesure d'exception qui donne une apparence d'action",
      "Offrir aux PJ un appui officiel en échange d'une preuve présentable"
    ],
    "description": "Homme vieillissant, barbe grise, robe de fonction sombre et lourde chaîne d'office sur la poitrine. Il s'assoit derrière un bureau couvert de dossiers et de sceaux. Sa posture est digne, mais son regard trahit souvent la fatigue.",
    "notes": "Avel Ronce n'est pas corrompu : il est dépassé. Il peut devenir un allié décisif si les PJ lui apportent une vérité simple et présentable qui le couvre politiquement. Pivot de la menace « Le Conseil, la Machine à Retarder » (Front 4).",
    "race": "humain",
    "faction": "Conseil de Valombre"
  },

{
    "id": "armurier_garrek",
    "usageNarratif": "levier",
    "nom": "Garrek Masque, armurier de la Vieille Ville",
    "role": "Armurier de la Vieille Ville. Il vend des armes et armures d'occasion, souvent réparées, rachetées ou obtenues sans poser de questions.",
    "categorie": "neutres",
    "image": "/images/PNJ/Garrek Masque.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Garrek accueille chaque client avec un sourire un peu trop large et évalue immédiatement ce qu'il porte et ce qu'il pourrait payer.",
      "objectif": "Faire du profit sans attirer les ennuis. Maintenir son échoppe ouverte malgré le quartier.",
      "attitude": "Affable, commerçant, un peu filou. Ne pose pas de questions sur l'origine des objets qu'on lui vend."
    },
    "disposition": "neutre",
    "impulsion": "Transformer tout ce qui entre par la porte en monnaie ou en marchandise.",
    "degats": {
      "valeur": 1,
      "description": "Gourdine sous le comptoir",
      "tags": ["proche", "non-letal", "défensif"]
    },
    "armure": {
      "valeur": 1,
      "description": "Cuir clouté usagé"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["armurier", "occasion", "abordable", "vieille-ville", "troc"],
    "actionsMJ": [
      "Proposer une armure réparée à moitié prix, sans mentionner les défauts cachés",
      "Racheter l'équipement d'un aventurier mort pour une somme modique",
      "Accepter un troc si l'objet proposé a une valeur revente"
    ],
    "description": "Homme sec, mal rasé, cheveux noirs en désordre et chemise ouverte sous un gilet de cuir. Son échoppe est sombre, pleine de casques cabossés, de lames réparées et d'armures pendues aux murs. Il sourit trop vite pour être complètement rassurant.",
    "notes": "Garrek vend des cuirs cloutés, des cottes de mailles réparées, des armes d'occasion et des boucliers refaits. Qualité moyenne, prix abordables. Il rachète tout ce qu'on lui apporte sans poser de questions. Certaines pièces ont des défauts cachés (fissures, soudures fragiles). Il accepte le troc et fait crédit aux habitués du quartier.",
    "race": "humain",
    "faction": "Vieille Ville"
  },

{
    "id": "herboriste_fendrel",
    "usageNarratif": "levier",
    "nom": "Fendrel, herboriste de la Vieille Ville",
    "role": "Herboriste de la Vieille Ville. Il vend des remèdes bon marché et reconnaît les maladies courantes du quartier.",
    "categorie": "allies",
    "image": "/images/PNJ/Fendrel.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Fendrel parle à ses plantes en les coupant, comme si chacune méritait un avertissement avant de finir en tisane.",
      "objectif": "Gagner assez pour manger et garder son échoppe ouverte. Aider quand il peut, pas plus.",
      "attitude": "Calme, un peu las. Connaît son métier sans en faire un art. Préfère les clients qui savent ce qu'ils veulent."
    },
    "disposition": "amical",
    "impulsion": "Soigner le symptôme, pas la cause, et facturer juste assez.",
    "degats": {
      "valeur": 0,
      "description": "Ciseaux de jardin, bouilloire bouillante",
      "tags": ["proche", "improvise", "non-letal"]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["herboriste", "remèdes", "bon-marché", "vieille-ville", "tisanes"],
    "actionsMJ": [
      "Proposer un remède qui soulage sans guérir vraiment",
      "Reconnaître un symptôme que l'apothicaire aurait identifié plus vite",
      "Vendre une herbe rare qu'il n'a pas eu le temps d'identifier"
    ],
    "description": "Vieil homme voûté, barbe blanche clairsemée, vêtements verts et bruns tachés par les plantes. Son échoppe est remplie de pots, de feuilles séchées, de racines, de bocaux et de petits outils de coupe. Il sent la menthe, la terre humide et le vinaigre.",
    "notes": "Fendrel vend des tisanes, des cataplasmes, des herbes séchées et des remèdes de base à prix très bas. Il soigne les petits maux du quartier. Ses préparations sont moins efficaces que celles d'Ursula, mais abordables pour les PJ qui ont peu de moyens. Il connaît les plantes de la région et peut identifier des échantillons. Il ne vend rien d'illicite mais ne pose pas de questions sur l'usage prévu.",
    "race": "humain",
    "faction": "Vieille Ville"
  },

{
    "id": "marchande_marenne",
    "usageNarratif": "levier",
    "nom": "Marenne Doulcet, marchande d'étoffes et d'importations",
    "role": "Marchande d'étoffes et d'objets importés. Ses stocks montrent vite si les routes commerciales fonctionnent encore ou non.",
    "categorie": "neutres",
    "image": "/images/PNJ/Marenne Doulcet.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Marenne accueille chaque client en le regardant de haut en bas pour évaluer ce qu'il peut se permettre, puis ajuste son sourire en conséquence.",
      "objectif": "Maintenir son réseau d'importations malgré le déphasage qui coupe les routes. Trouver des substituts avant que les stocks ne s'épuisent.",
      "attitude": "Polie, élégante, calculatrice. Sait écouter. Vend aussi des informations avec la même courtoisie que ses étoffes."
    },
    "disposition": "neutre",
    "impulsion": "Transformer chaque conversation en une transaction utile.",
    "degats": {
      "valeur": 0,
      "description": "Ciseaux de couturière, aiguilles à broder",
      "tags": ["proche", "improvise", "non-letal"]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["marchande", "luxe", "importations", "hauteurs", "étoffes", "bijoux"],
    "actionsMJ": [
      "Proposer un objet de luxe qui attire l'attention dans le mauvais quartier",
      "Révéler une information commerciale qui a une valeur politique",
      "Mentionner que certaines cargaisons n'arrivent plus depuis des semaines"
    ],
    "description": "Femme élégante aux cheveux sombres, vêtue de tissus coûteux et de bijoux discrets. Elle tient une boutique chaude et parfumée, remplie d'étoffes, de coffrets, de rubans, de parfums et de petits objets importés. Elle sourit comme une négociante qui a déjà fixé son prix.",
    "notes": "Marenne vend des étoffes de qualité, des bijoux, des épices, du parfum, des objets d'art et des produits importés de Caldris ou des cités lointaines. Ses prix sont élevés. Elle accepte les commandes spéciales pour les clients de confiance. Depuis le déphasage, certains de ses stocks ne se renouvellent plus et elle cherche des sources alternatives. Elle est bien informée sur le commerce de la cité et peut vendre des rumeurs sur les maisons marchandes, les retards de cargaison et les tensions entre guildes.",
    "race": "humaine",
    "faction": "La Guilde Marchande"
  },

{
    "id": "marchande_devotion",
    "usageNarratif": "levier",
    "nom": "Pernelle Veyre, marchande d'objets de dévotion",
    "role": "Marchande d'objets de dévotion sur le parvis de la cathédrale. Elle vend cierges, médailles, rubans bénis et petites amulettes.",
    "categorie": "allies",
    "image": "/images/PNJ/Pernelle Veyre.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Pernelle fait le signe de l'autel avant chaque vente, même pour une bougie, comme si chaque transaction était un petit acte de foi.",
      "objectif": "Servir la cathédrale et ses fidèles tout en gagnant sa vie. Maintenir la qualité de ses produits religieux.",
      "attitude": "Chaleureuse, simple, un peu superstitieuse. Connaît les saints, les prières et les usages du clergé. Méfiante envers ceux qui achètent des objets sacrés sans dévotion."
    },
    "disposition": "amical",
    "impulsion": "Protéger chaque client avec un cierge et une prière, même s'il n'en a pas demandé.",
    "degats": {
      "valeur": 0,
      "description": "Bâton de marche, cierge enflammé",
      "tags": ["proche", "improvise", "non-letal"]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["dévotion", "cierges", "amulettes", "centre-civique", "religieux"],
    "actionsMJ": [
      "Proposer un cierge à un saint spécifique selon le problème du PJ",
      "Refuser de vendre un objet sacré à quelqu'un qui ne respecte pas le rite",
      "Mentionner que le clergé a béint un stock d'eau lustrale pour une cérémonie à venir"
    ],
    "description": "Femme souriante d'une cinquantaine d'années, joues rondes, châle sombre et tablier taché de cire. Son étal est couvert de cierges, de médailles, de rubans, de petites fioles et d'images pieuses. Elle a toujours de la cire sur les doigts.",
    "notes": "Pernelle vend des cierges (de 1 sous à 1 écu selon la taille et le saint), des médailles de Saint-Aldric, des amulettes bénies (effet mineur : confiance, apaisement), de l'eau lustrale en petits flacons, des rubans aux couleurs de la cathédrale et des prières écrites sur parchemin. Elle ne vend rien de puissant au sens magique, mais ses objets sont authentiquement bénis par le clergé. Elle connaît les horaires des offices, les noms des prêtres et les intentions de prière affichées à la cathédrale. Elle est apparentée à Géraud Veyre, le prêtre de Saint-Aldric.",
    "race": "humaine",
    "faction": "Clergé de Saint-Aldric"
  },

{
    "id": "colporteur_vaneck",
    "usageNarratif": "levier",
    "nom": "Vaneck, colporteur de la Place de la Fondation",
    "role": "Colporteur de la Place de la Fondation. Il vend torches, cordes, rations, couvertures et petits outils aux voyageurs.",
    "categorie": "neutres",
    "image": "/images/PNJ/Vaneck.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Vaneck détaille le contenu de son chariot à voix haute, même quand personne ne l'écoute, comme s'il répétait ses prix pour ne pas les oublier.",
      "objectif": "Vendre assez pour manger et dormir à l'auberge. Acheter en gros ce que les autres revendent au détail.",
      "attitude": "Bavard, commerçant, sans prétention. Connaît les prix du marché et ne se laisse pas avoir. Sympathique mais ne fait pas crédit."
    },
    "disposition": "neutre",
    "impulsion": "Tout ce qui n'est pas vendu aujourd'hui sera vendu demain à un autre.",
    "degats": {
      "valeur": 1,
      "description": "Bâton ferré, manivelle de chariot",
      "tags": ["proche", "brutal", "improvise"]
    },
    "armure": {
      "valeur": 0,
      "description": "Veste de cuir usée"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["colporteur", "provisions", "place-fondation", "ambulant", "bon-marché"],
    "actionsMJ": [
      "Proposer un lot de torches et de rations pour la route à un prix correct",
      "Mentionner qu'un autre marchand a demandé exactement les mêmes provisions la veille",
      "Vendre un outil bon marché qui cassera au pire moment"
    ],
    "description": "Homme rond et jovial, barbe courte, veste de cuir pleine de poches et chariot bâché à portée de main. Son étal change chaque matin : torches, cordes, sacs, rations, gourdes, couvertures et outils bon marché pendent partout autour de lui.",
    "notes": "Vaneck vend des rations de voyage, des cordes, des torches, des briquets, des couvertures, des gourdes, des outils simples (couteaux, piolets, lampes à huile), du silex et des petits objets utilitaires. Ses prix sont corrects et ses produits de qualité variable. Il rachète les objets d'aventuriers en bon état. Il connaît les rumeurs de la place, les horaires des caravanes et les prix du marché. C'est le marchand de base pour les PJ qui ont besoin de provisions sans chercher de qualité particulière.",
    "race": "humain",
    "faction": "La Guilde Marchande"
  },
];
