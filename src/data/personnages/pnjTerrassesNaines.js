// PNJ liés aux Terrasses Naines et à la Guilde des Mineurs

export const pnjTerrassesNainesData = [
{
    "id": "thorgar_pretre_nain",
    "usageNarratif": "scene",
    "nom": "Thorgar, Haut Clerc du Temple-Forgeron",
    "role": "Ancre morale de Valombre. Gardien des rites funéraires nains, sincère, courageux, conscient qu'il ne possède qu'une part de la vérité.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_thorgar_pretre_nain.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Thorgar termine un geste rituel avant de lever les yeux vers eux.",
      "objectif": "Préserver la sainteté des morts et protéger les vivants, même quand les deux sont incompatibles.",
      "attitude": "Grave et inflexible sur les questions sacrées, mais reconnaissant envers ceux qui aident. Porte une fatigue croissante."
    },
    "disposition": "amical",
    "impulsion": "Tenir les rites même quand la foi tremble.",
    "degats": {
      "valeur": 2,
      "description": "Marteau consacré et renvoi des morts",
      "tags": [
        "proche",
        "sacre",
        "anti-mort-vivant"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Armure de prêtre-forgeron"
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
      "clerc",
      "rite",
      "morts-nommes",
      "inflexible"
    ],
    "actionsMJ": [
      "Exiger qu'un mort soit nommé avant d'agir",
      "Opposer le devoir sacré à l'efficacité",
      "Tenir une ligne que personne d'autre ne veut tenir"
    ],
    "description": "Thorgar sert de repère moral aux Terrasses. Il protège les rites funéraires nains, nomme les morts et rappelle aux PJ que sauver la cité ne justifie pas toujours de piétiner ce qu'elle a juré d'honorer.",
    "notes": "",
    "race": "nain",
    "faction": "Communauté Naine"
  },

{
    "id": "durnik_chef_mineur",
    "usageNarratif": "levier",
    "nom": "Durnik, chef de la Guilde des Mineurs",
    "role": "Chef de guilde pragmatique. Ouvre ou ferme l'accès aux mines.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_durnik_chef_mineur.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Durnik les jauge comme il jaugerait une galerie instable : en silence, avant de décider si elle tiendra.",
      "objectif": "Protéger ses hommes et empêcher quiconque de rouvrir la fissure sans précautions.",
      "attitude": "Bourru, honnête. Méprisant envers les mages qui parlent sans agir."
    },
    "disposition": "neutre",
    "impulsion": "Fermer les accès dangereux jusqu'à ce qu'on mérite sa confiance.",
    "degats": {
      "valeur": 2,
      "description": "Hache de mine, éboulement contrôlé, terrain souterrain",
      "tags": [
        "proche",
        "brutal",
        "terrain"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Armure de mine et endurance naine"
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
      "mineur",
      "gardien",
      "bourru",
      "terrain"
    ],
    "actionsMJ": [
      "Bloquer une route tant qu'un risque n'est pas assumé",
      "Faire payer l'arrogance des mages",
      "Offrir un passage sûr contre une promesse claire"
    ],
    "description": "Durnik contrôle l'accès réel aux mines et aux mineurs. Il n'aime ni les promesses vagues ni les mages pressés, mais il respecte les gens qui assument clairement les risques souterrains.",
    "notes": "",
    "race": "nain",
    "faction": "Communauté Naine",
    "antagoniste": false
  },

{
    "id": "garde_portail_mine",
    "usageNarratif": "levier",
    "nom": "Escouade de Gardes du Portail",
    "role": "Soldats épuisés chargés de verrouiller l'accès.",
    "image": "/images/PNJ/pnj_garde_portail_mine.jpg",
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, l'escouade garde les mains près des armes et les yeux sur les autorisations.",
      "objectif": "Obéir aux ordres du Conseil tout en évitant un massacre",
      "attitude": "Nerveux et soupçonneux, craignent l'espionnage"
    },
    "impulsion": "Verrouiller l'accès et éviter d'être responsables du désastre.",
    "degats": {
      "valeur": 2,
      "description": "Lances, arbalètes, herses et barricades",
      "tags": [
        "groupe",
        "défensif",
        "proche"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Poste fortifié"
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
      "portail",
      "mine",
      "épuisés",
      "soupçonneux"
    ],
    "actionsMJ": [
      "Exiger une autorisation impossible",
      "Laisser passer quelqu'un contre garantie personnelle",
      "Déclencher l'alarme par peur"
    ],
    "description": "L'escouade du portail verrouille l'accès aux profondeurs. Elle n'est pas cruelle, mais sa peur, sa fatigue et ses ordres peuvent transformer la mine en frontière presque impossible à franchir.",
    "notes": "",
    "race": "groupe humanoïde",
    "faction": "Conseil / Terrasses Naines",
    "categorie": "ennemis",
    "disposition": "neutre",
    "antagoniste": false
  },

{
    "id": "kessak_mineur",
    "usageNarratif": "levier",
    "nom": "Kessak, mineur de la Galerie 5",
    "role": "Jeune mineur récemment affecté aux galeries supérieures après la fermeture des niveaux profonds. Il supporte mal les tâches de surface et cherche surtout à retrouver une équipe régulière.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_kessak_mineur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Essuie régulièrement la poussière de ses mains sur son pantalon, même lorsqu'elles sont propres.",
      "objectif": "Être réaffecté à une équipe de fond et montrer qu'il est capable de tenir une galerie sans supervision.",
      "attitude": "Volontaire, un peu susceptible quand on le traite comme un débutant. Devient rapidement bavard lorsqu'on parle du travail de la mine."
    },
    "disposition": "neutre",
    "impulsion": "Prouver qu'il est un véritable mineur et pas seulement le plus jeune de l'équipe.",
    "degats": {
      "valeur": 1,
      "description": "Hache de mine, pierre de taille",
      "tags": [
        "proche",
        "brutal",
        "improvise"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Vêtements de travail renforcés"
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
      "mineur",
      "jeune",
      "volontaire",
      "observateur"
    ],
    "actionsMJ": [
      "Se plaindre des travaux de surface auxquels il a été affecté",
      "Mentionner un bruit ou un courant d'air inhabituel comme un détail de travail",
      "Reconnaître un outil ou un équipement abandonné dans les galeries"
    ],
    "description": "Kessak sert à donner un visage jeune et concret aux équipes de mineurs. Il parle des galeries comme d'un lieu de travail avant d'y voir un mystère ou une menace.",
    "notes": "Kessak peut avoir remarqué quelque chose d'étrange dans les niveaux profonds, mais il ne l'interprète pas comme un phénomène surnaturel.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },

{
    "id": "brandin_forgeron",
    "usageNarratif": "levier",
    "nom": "Brandin, forgeron des Terrasses",
    "role": "Forgeron indépendant spécialisé dans la réparation des outils de mine et des objets domestiques. Son atelier est plus modeste que celui du Temple-Forgeron, mais son travail est fiable.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_brandin_forgeron.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Fait sonner les pièces métalliques du bout de l'ongle avant de donner son avis.",
      "objectif": "Obtenir suffisamment de commandes régulières pour engager un apprenti.",
      "attitude": "Direct et appliqué. Peu impressionné par les titres, mais toujours disposé à discuter avec quelqu'un qui connaît son métier."
    },
    "disposition": "neutre",
    "impulsion": "Laisser la qualité de son travail parler à sa place.",
    "degats": {
      "valeur": 2,
      "description": "Marteau de forge, tenailles",
      "tags": [
        "proche",
        "brutal",
        "outils"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Tablier de cuir renforcé"
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
      "forgeron",
      "artisan",
      "meticuleux",
      "independant"
    ],
    "actionsMJ": [
      "Examiner un objet endommagé avant de parler de son prix",
      "Proposer une réparation simple contre un service raisonnable",
      "Prêter un outil en exigeant qu'il soit rendu propre et affûté"
    ],
    "description": "Brandin peuple les Terrasses comme artisan indépendant. Il permet d'obtenir réparations, avis sur le métal et présence quotidienne sans transformer chaque échange en intrigue majeure.",
    "notes": "Brandin respecte Thorgar comme forgeron, mais n'aime pas que chaque artisan des Terrasses soit comparé au Temple.",
    "race": "nain",
    "faction": "Communauté Naine"
  },

{
    "id": "voldrin_changeur",
    "usageNarratif": "levier",
    "nom": "Voldrin, comptable du Comptoir",
    "role": "Comptable chargé des registres du Comptoir de Change des Terrasses. Il vérifie les pesées, les avances de salaire et les transactions de la Guilde.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_voldrin_changeur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Replace machinalement les objets parallèlement au bord de son bureau.",
      "objectif": "Clore chaque journée sans erreur entre les pièces reçues, les reçus délivrés et les sommes inscrites.",
      "attitude": "Formel et peu démonstratif. Se montre serviable dès qu'une demande est formulée clairement."
    },
    "disposition": "neutre",
    "impulsion": "Transformer chaque échange en une opération compréhensible et vérifiable.",
    "degats": {
      "valeur": 0,
      "description": "Coupe-papier",
      "tags": [
        "proche",
        "improvise",
        "non-letal"
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
      "comptable",
      "registres",
      "methodique",
      "guilde"
    ],
    "actionsMJ": [
      "Retrouver un paiement à partir d'une date ou d'un montant précis",
      "Demander quel clan ou quelle institution garantit une transaction",
      "Signaler calmement une incohérence dans un registre"
    ],
    "description": "Voldrin donne accès aux registres économiques des Terrasses. Il sert surtout à vérifier des paiements, des garanties, des dates et les traces administratives laissées par les mouvements de la Guilde.",
    "notes": "Voldrin n'est pas incorruptible par principe : il veut surtout qu'une personne identifiable assume officiellement chaque arrangement.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },

{
    "id": "grodrin_serveur",
    "usageNarratif": "levier",
    "nom": "Grodrin, serveur du Marteau d'Étain",
    "role": "Serveur expérimenté du Marteau d'Étain. Il connaît les habitudes des clients réguliers, sait qui s'assoit avec qui et intervient avant que les discussions ne deviennent des disputes.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_grodrin_serveur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Pose les chopes exactement au même endroit devant chaque habitué.",
      "objectif": "Faire tourner la salle sans verre cassé, compte impayé ni bagarre inutile.",
      "attitude": "Peu bavard pendant le service, mais pas mystérieux. Son humour sec apparaît lorsque la salle se calme."
    },
    "disposition": "neutre",
    "impulsion": "Garder les chopes pleines et les querelles assez petites pour rester verbales.",
    "degats": {
      "valeur": 1,
      "description": "Poing, plateau en bois",
      "tags": [
        "proche",
        "non-letal",
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
      "serveur",
      "taverne",
      "habitudes",
      "calme"
    ],
    "actionsMJ": [
      "Interrompre une conversation tendue en apportant une commande",
      "Indiquer discrètement quel habitué connaît le sujet recherché",
      "Se souvenir de ce qu'une personne commande, mais pas nécessairement de ce qu'elle raconte"
    ],
    "description": "Grodrin rend le Marteau d'Étain vivant et lisible. Il connaît les habitudes de salle, les clients réguliers et les petites tensions avant qu'elles ne deviennent des bagarres.",
    "notes": "Grodrin peut fournir des renseignements simples sur les allées et venues, mais il n'est ni informateur professionnel ni marchand de secrets.",
    "race": "nain",
    "faction": "Communauté Naine / Marteau d'Étain"
  },

{
    "id": "brogar_eclaireur",
    "usageNarratif": "levier",
    "nom": "Brogar, ancien arpenteur des mines",
    "role": "Mineur retraité qui relevait autrefois les distances, les pentes et les anciennes galeries. Il passe encore régulièrement au Marteau d'Étain pour commenter les nouveaux plans.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_brogar_eclaireur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Sort de sa poche un morceau de craie dès que quelqu'un décrit un trajet.",
      "objectif": "Rester utile aux équipes actuelles sans avoir à reprendre un poste régulier.",
      "attitude": "Familier et volontiers critique. Corrige les imprécisions avec plaisir, mais ne cherche pas à rabaisser ses interlocuteurs."
    },
    "disposition": "amical",
    "impulsion": "Comparer les nouveaux chemins avec ceux qu'il a connus autrefois.",
    "degats": {
      "valeur": 1,
      "description": "Canne ferrée de mineur",
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
      "mineur",
      "retraite",
      "arpenteur",
      "cartes"
    ],
    "actionsMJ": [
      "Corriger le nom ou la distance d'une ancienne galerie",
      "Tracer un itinéraire approximatif à la craie sur une table",
      "Expliquer pourquoi un passage a été abandonné pour une raison parfaitement ordinaire"
    ],
    "description": "Brogar fournit une mémoire pratique des galeries. Il peut commenter un plan, reconnaître une pente ou donner un avis de terrain sans devenir un guide permanent.",
    "notes": "Brogar connaît les anciennes galeries, mais ses informations datent parfois de plusieurs décennies.",
    "race": "nain",
    "faction": "Communauté Naine"
  },

{
    "id": "torm_garde_mine",
    "usageNarratif": "levier",
    "nom": "Torm, gardien de l'Entrée",
    "role": "Garde nain affecté au contrôle de la cage de descente. Il vérifie les équipes, les lampes, le matériel et les autorisations avant chaque départ.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_torm_garde_mine.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Vérifie systématiquement la mèche des lampes pendant qu'on lui parle.",
      "objectif": "Terminer son service sans laisser descendre quelqu'un de mal équipé ou inscrit sur la mauvaise équipe.",
      "attitude": "Professionnel et patient avec les erreurs honnêtes. Devient inflexible dès qu'une personne plaisante avec les règles de sécurité."
    },
    "disposition": "neutre",
    "impulsion": "Vérifier les noms, les lampes et les autorisations, toujours dans le même ordre.",
    "degats": {
      "valeur": 2,
      "description": "Hache de garde, poignard de ceinture",
      "tags": [
        "proche",
        "brutal",
        "discipline"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Cotte de garde et casque de mine"
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
      "mine",
      "securite",
      "methodique"
    ],
    "actionsMJ": [
      "Rendre une autorisation en indiquant précisément ce qui manque",
      "Inspecter l'équipement d'un visiteur avant de discuter de son accès",
      "Trouver un accompagnateur officiel pour quelqu'un qui s'est montré respectueux"
    ],
    "description": "Torm rend l'entrée de la mine concrète et procédurale. Il vérifie les noms, les lampes et les autorisations, rappelant que descendre est un acte encadré avant d'être une aventure.",
    "notes": "Torm ne cherche pas à empêcher les PJ de passer. Il cherche à ne pas être tenu responsable s'ils descendent sans préparation.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },

{
    "id": "hessa_brunefer",
    "usageNarratif": "scene",
    "nom": "Hessa Brunefer, Déléguée des Terrasses",
    "role": "Voix des clans nains devant le Conseil de Valombre. Elle défend les droits, les coutumes et les galeries des Terrasses contre les empiétements de la cité haute. Lucide sur la fragilité de la position naine, elle négocie pied à pied pour que les siens ne soient ni sacrifiés ni placés sous tutelle.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_hessa_brunefer.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Rappelle d'une phrase sèche quel article de quelle charte protège les Terrasses avant de répondre.",
      "objectif": "Préserver l'autonomie des clans et l'accès aux galeries, et obtenir que Valombre traite les nains en partenaires plutôt qu'en sujets.",
      "attitude": "Directe, méfiante envers les promesses humaines, loyale envers ceux qui tiennent parole. Patiente en négociation, intraitable sur les coutumes funéraires et minières."
    },
    "disposition": "neutre",
    "impulsion": "Faire respecter les droits des Terrasses sans déclencher une rupture qui condamnerait les siens.",
    "degats": {
      "valeur": 2,
      "description": "Hache de cérémonie et autorité reconnue sur les clans",
      "tags": [
        "proche",
        "autorite"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Maille naine et statut diplomatique"
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
      "naine",
      "deleguee",
      "terrasses",
      "negociatrice",
      "gardienne-des-coutumes"
    ],
    "actionsMJ": [
      "Opposer une charte ou une coutume ancienne à une décision du Conseil",
      "Menacer de fermer un accès commercial pour faire plier la cité haute",
      "Demander aux PJ une garantie concrète avant d'engager les clans",
      "Révéler ce que les nains savent — ou ont oublié — des tombes des Thanes"
    ],
    "description": "Naine au port grave, barbe tressée de fils d'argent marquant son rang. Porte les couleurs de son clan sous une étole de délégation. Parle lentement, pèse chaque mot.",
    "notes": "Hessa peut basculer en alliée précieuse si les PJ respectent les coutumes des Terrasses, ou se replier sur la défense des seuls clans si Valombre les trahit. Liée aux menaces « La Réputation de Valombre » (Front 3) et « Le Conseil, la Machine à Retarder » (Front 4).",
    "race": "naine",
    "faction": "Terrasses naines / Clans"
  },

{
    "id": "armurier_dvalin",
    "usageNarratif": "levier",
    "nom": "Dvalin Forgefer, armurier des Terrasses",
    "role": "Armurier nain installé près de la Place des Terrasses. Il fabrique et vend armures, armes et boucliers de qualité supérieure, mais ses prix sont élevés. Travaux sur commande uniquement pour les pièces complexes.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_armurier_dvalin.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Dvalin examine toujours une arme ou une armure qu'on lui présente avant de regarder son interlocuteur. Il teste le tranchant, pèse la lame, fait sonner le métal.",
      "objectif": "Maintenir la réputation de son armurerie et ne jamais vendre une pièce qui pourrait casser au mauvais moment.",
      "attitude": "Sérieux, professionnel, peu bavard. Respecte les clients qui connaissent le métal. Méfiant envers ceux qui marchandent."
    },
    "disposition": "neutre",
    "impulsion": "Ne livrer que du travail dont il répondrait personnellement.",
    "degats": {
      "valeur": 2,
      "description": "Marteau d'atelier, tenailles chauffées",
      "tags": ["proche", "brutal", "outils"]
    },
    "armure": {
      "valeur": 2,
      "description": "Tablier de cuir épais et gantelets de forge"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["armurier", "nain", "qualite", "cher", "sur-commande"],
    "actionsMJ": [
      "Refuser une réparation si le métal est trop corrompu",
      "Proposer une pièce de qualité supérieure à un prix qui fait hésiter",
      "Accepter un paiement en minerai brut plutôt qu'en monnaie"
    ],
    "description": "Nain massif aux mains couvertes de brûlures anciennes. Il porte un tablier de cuir noirci et travaille entouré de pièces finies suspendues aux murs. Son armurerie sent l'huile de protection et le charbon.",
    "notes": "Dvalin vend des armures de plates, des boucliers de qualité naine et des armes en acier forgé. Ses prix sont 30 à 50% plus élevés que la norme, mais ses pièces ne se brisent pas. Il accepte les commandes spéciales si le client fournit les matériaux. Il ne fait pas de crédit.",
    "race": "nain",
    "faction": "Communauté Naine"
  },
];
