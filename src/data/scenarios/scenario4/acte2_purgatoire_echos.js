/**
 * Scénario 4 - Acte 2 : Le Purgatoire des Échos
 * Village des Perdus & Couloirs Aberrants
 *
 * NOTE : cet acte fusionne l'ancien acte2_purgatoire_echos (volet social)
 * et l'ancien acte2_ecosysteme_aberrant (volet horreur/exploration) pour
 * créer un acte cohérent de 5 scènes alternant social, horreur et puzzle.
 */

export const acte2 = {
  title: "ACTE 2 : LE PURGATOIRE DES ÉCHOS",
  stake:
    "Trouver un guide parmi les âmes oubliées, traverser les couloirs vivants de la Spirale et survivre aux échos de ses propres regrets.",
  location: "Village des Perdus & Couloirs Aberrants.",
  scenes: [
    {
      title: "Scène 1 : Le Village des Oubliés",
      type: "Social",
      image: "./images/scenes/village_oublies.jpg",
      locationId: "spirale_village",
      npcIds: ["ancien_du_village"],
      description: {
        resume:
          "Rencontre avec une communauté hétéroclite de créatures bloquées ici depuis des générations.",
        visuel:
          "Des cabanes faites de bric et de broc, accrochées à un énorme rocher flottant. Humains, gobelins, et créatures inconnues vivent ensemble. Les visages sont étrangement jeunes, mais les yeux sont ceux de gens qui ont oublié combien d'hivers ils ont vécus.",
        audio: "Chuchotements, bruits de vie quotidienne au ralenti.",
        odeur: "Cuisine étrange, fumée d'herbes inconnues.",
        lumiere: "Feux de camp aux flammes multicolores, sans chaleur.",
      },
      narration: {
        declencheur: "Arrivée au village après les îles flottantes.",
        texte_a_lire:
          "Ils vous regardent avec pitié, pas avec peur. Ici, le temps n'a pas de sens. Certains sont là depuis des décennies, peut-être des siècles. Une vieille femme aux yeux laiteux s'avance : « Nouveaux venus ? La Spirale vous a recrachés. C'est rare. N'espérez pas repartir. Mangez, dormez. Oubliez. C'est plus facile quand on oublie. »",
        contexte_mj:
          "Les habitants ont perdu l'espoir. Ils peuvent aider, mais ne croient plus à la sortie. Insister sur l'apathie : ils ne demandent rien, ne refusent rien. Ils existent.",
        objectif: "Trouver quelqu'un qui connaît le chemin vers les profondeurs.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 14) : Convaincre l'Ancien de parler malgré son fatalisme.",
          "Psychologie (DD 12) : Comprendre que leur apathie est une protection mentale, pas une indifférence.",
          "Renseignements (DD 13) : Repérer un habitant récent qui n'a pas encore 'oublié'.",
        ],
        indices: [
          "Un guide nommé 'Le Passeur' tient un étal au Marché des Souvenirs.",
          "Un marchand bleu, Xareth, fréquente parfois le Marché. Il déteste Thade.",
          "Un ancien voyageur de Valombre serait mort ici il y a 'longtemps' (deux ans en réalité).",
        ],
        recompenses: "Repos sûr, ravitaillement modeste, route vers le Marché.",
      },
      transitions: {
        success: "Direction le Marché des Souvenirs.",
        fail:
          "Les PJ avancent à l'aveugle ; ils trouveront le Marché plus tard, mais épuisés.",
      },
    },
    {
      title: "Scène 2 : Le Marché des Souvenirs",
      type: "Social / Commerce",
      image: "./images/scenes/marche_souvenirs.jpg",
      locationId: "spirale_marche",
      npcIds: ["le_passeur", "xareth_mercane"],
      description: {
        resume:
          "Bazar onirique où l'on troque émotions, années de vie et souvenirs contre services et objets impossibles.",
        visuel:
          "Un bazar à ciel ouvert installé sur une dalle de marbre flottante. Des étals présentent des fioles d'émotions en suspension, des cristaux contenant des souvenirs, des feuilles d'oubli. Au centre, le Passeur, silhouette encapuchonnée immobile. À l'écart, l'échoppe flottante d'un être à la peau bleue, Xareth, un Mercane.",
        audio: "Tintement d'objets magiques, rires et pleurs en écho décalé.",
        odeur: "Encens onirique, parfums d'enfance.",
        lumiere: "Tamisée, dorée près de Xareth, bleutée près du Passeur.",
      },
      narration: {
        declencheur: "Arrivée au marché.",
        texte_a_lire:
          "Le Passeur ne se retourne pas quand vous approchez. Sa voix sort de sous la capuche comme l'écho d'un puits : « Je connais le chemin vers le bas. Mais l'or n'a pas cours ici. Je veux un souvenir heureux. Donnez-le moi, et je vous guide. »\n\nÀ quelques pas, Xareth, marchand mercane à la peau bleu nuit, lève la main vers vous. Il sourit : « Voyageurs ! Le Passeur est honnête, mais limité. Moi, je vends ce qui se cache plus bas. Et j'ai un mot pour le nom de Coren, si ça vous intéresse. »",
        contexte_mj:
          "Deux PNJ utiles. Le Passeur est neutre, fonctionnel. Xareth est un exilé qui hait Thade (raisons floues : Thade aurait acheté quelque chose à Xareth, puis l'aurait piégé). Xareth peut donner des informations stratégiques sur la Cathédrale et sur la nature de la Spirale, mais il négocie tout. Le prix d'un souvenir = perte mécanique (XP, Volonté temporaire, ou un point permanent de Sagesse).",
        objectif:
          "Obtenir un guide ET, si possible, des informations sur la Cathédrale des Soupirs.",
      },
      mecaniques: {
        defis: [
          "Sacrifice (Passeur) : Accepter de perdre un souvenir heureux (perte de 100 XP OU -1 Volonté pour la suite du scénario).",
          "Diplomatie (DD 16) : Négocier avec Xareth pour réduire les prix de ses informations.",
          "Psychologie (DD 18) : Comprendre que Xareth a une vendetta personnelle contre Thade.",
          "Négociation (DD 18) : Réduire le prix demandé par le Passeur (offrir un service au lieu d'un souvenir).",
        ],
        indices: [
          "Le Passeur indique la route vers la Cathédrale des Soupirs (descente longue).",
          "Xareth confirme : Thade n'est jamais entré ici en personne. Il opère à distance via le Cristal de la mine.",
          "Xareth peut être recroisé au Scénario 5 si bien traité (allié potentiel).",
        ],
        recompenses:
          "Guide vers l'Acte 3 (Passeur). Informations rares et 1 objet magique mineur (Xareth, contre paiement).",
      },
      transitions: {
        success: "Le groupe avance avec un guide et des informations.",
        fail:
          "Le groupe doit trouver le chemin seul (désavantage aux jets de Survie de l'acte).",
      },
    },
    {
      title: "Scène 3 : Les Couloirs Vivants",
      type: "Horreur / Combat",
      image: "./images/scenes/couloirs_chair.jpg",
      locationId: "spirale_couloirs_chair",
      npcIds: ["gibbering_mouther_colossal"],
      description: {
        resume:
          "Couloirs où la pierre devient chair vivante, gardés par une abomination chuchotante.",
        visuel:
          "Le marbre lisse se mue progressivement en chair pulsante. Des yeux apparaissent dans les murs, vous suivent. Des bouches minuscules s'ouvrent dans le sol et murmurent vos peurs les plus intimes. Au bout du couloir, une masse colossale de chair, de bouches et d'yeux : un Gibbering Mouther de taille démesurée, fusion de victimes oubliées.",
        audio: "Murmures incessants qui prononcent vos noms, gargouillements humides.",
        odeur: "Chair, bile, sucre brûlé.",
        lumiere: "Lueur organique malsaine, rougeâtre, qui pulse au rythme d'un cœur.",
      },
      narration: {
        declencheur: "Entrée dans les couloirs après le Marché.",
        texte_a_lire:
          "Vos pieds glissent. Le sol n'est plus de la pierre. Les murs respirent. Les bouches au sol murmurent, et vous reconnaissez votre propre voix dans certaines, prononçant des choses que vous n'avez jamais dites tout haut. Au fond du couloir, une masse de chair de la taille d'une charrette se redresse. Elle a pris les visages de tous ceux qu'elle a digérés.",
        contexte_mj:
          "Combat d'horreur. Le Mouther parle aux PJ avec leurs propres voix intimes, ce qui peut servir à révéler des secrets entre joueurs (RP). Murmures = effet de Confusion. Le feu est très efficace (vulnérabilité). Si les PJ fuient, ils peuvent contourner par un puits latéral (Acrobaties DD 14).",
        objectif: "Vaincre ou contourner le Gibbering Mouther.",
      },
      mecaniques: {
        defis: [
          "Combat : Gibbering Mouther Colossal (FP 10).",
          "Murmures : Volonté (DD 16) chaque round ou Confusion (1 round).",
          "Terrain glissant : Acrobaties (DD 12) pour charger.",
          "Vulnérable au feu : dégâts ×1,5 par sort/arme de feu.",
          "Option : Acrobaties (DD 14) pour contourner par le puits latéral.",
        ],
        indices: [
          "Les yeux dans les murs sont des points d'observation de la créature.",
          "Le feu désactive les bouches qui murmurent.",
          "Les visages digérés sont ceux d'anciens habitants du Village.",
        ],
        recompenses:
          "XP, fragments de chair durcie (composants de sort), accès à la Salle des Miroirs.",
      },
      transitions: {
        success: "Mouther vaincu, couloir traversé.",
        fail: "Fuite par le puits, mais blessures et perte d'équipement mineure.",
      },
    },
    {
      title: "Scène 4 : Le Miroir des Regrets",
      type: "Puzzle / Psychologique",
      image: "./images/scenes/miroir_regret.jpg",
      locationId: "spirale_salle_miroirs",
      npcIds: [],
      description: {
        resume:
          "Une salle close où la sortie n'apparaît qu'à ceux qui ont avoué une faiblesse à voix haute.",
        visuel:
          "Une salle hexagonale tapissée de miroirs argentés. Chaque reflet ne bouge pas en même temps que l'original : il vous dévisage avec mépris, attend que vous fléchissiez. Au centre, une porte sans poignée, gravée d'une seule phrase : « Donnez ce que vous cachez. »",
        audio:
          "Silence oppressant, ponctué par l'écho de pensées qui ne sont pas les vôtres.",
        odeur: "Aucune. L'air lui-même semble vide, stérile.",
        lumiere: "Argentée, froide, sans source visible.",
      },
      narration: {
        declencheur: "Entrée dans la salle après les couloirs.",
        texte_a_lire:
          "La porte derrière vous se ferme sans bruit. Vos reflets se tournent vers vous, et seulement vers vous, ignorant vos compagnons. Vous sentez une pression psychique grandir, comme si la salle elle-même tentait de vous expulser. La phrase gravée pulse faiblement : « Donnez ce que vous cachez. »",
        contexte_mj:
          "Puzzle psychologique. Chaque PJ doit avouer à voix haute (au reflet, donc au groupe) un regret, une honte ou une faiblesse sincère. Encourager le RP profond. Le bluff est détecté par le reflet (test très difficile). Si un PJ refuse, son reflet sort du miroir et l'attaque (clone aux mêmes stats, mais sans sorts utilisés). Une fois tous les aveux faits (ou clones vaincus), la porte s'ouvre.",
        objectif: "Avouer une vérité sincère ou vaincre son propre reflet.",
      },
      mecaniques: {
        defis: [
          "Roleplay : avouer un regret/faiblesse sincère.",
          "Bluff (DD 22) : mentir au reflet (très difficile, le reflet connaît le PJ).",
          "Combat alternatif : duel contre son propre reflet (stats identiques, sans sorts déjà préparés).",
          "Psychologie (DD 14) : comprendre la nature exacte du test (sincérité, pas culpabilité).",
        ],
        indices: [
          "Le reflet sait tout ce que le PJ sait, mais pas ce qu'il refoule consciemment.",
          "La Spirale teste la valeur des intrus avant de les laisser descendre plus profond.",
          "Avouer renforce le groupe pour la suite (bonus narratif aux jets de Volonté à l'Acte 3).",
        ],
        recompenses:
          "Passage vers les profondeurs, développement de personnage, bonus narratif aux Volontés de l'Acte 3.",
      },
      transitions: {
        success: "Aveux faits, la porte s'ouvre.",
        fail: "Combats contre les reflets, blessures, mais passage forcé.",
      },
    },
    {
      title: "Scène 5 : La Peste Originelle",
      type: "Danger Environnemental / Transition",
      image: "./images/scenes/zone_magie_sauvage.jpg",
      locationId: "spirale_peste",
      npcIds: [],
      description: {
        resume:
          "Traversée d'une zone de magie sauvage qui tente de réécrire les corps des intrus.",
        visuel:
          "L'air ondule comme de l'eau chaude. La réalité se déforme par taches : un bras de PJ devient transparent, puis revient. Des motifs lumineux s'allument sous la peau. Au loin, perchée sur une falaise improbable, la Cathédrale des Soupirs brille d'une lumière stable, presque rassurante.",
        audio: "Bourdonnement statique haute fréquence.",
        odeur: "Métal chaud, ozone, sucre fondu.",
        lumiere: "Éclairs de couleurs impossibles (hors du spectre visible).",
      },
      narration: {
        declencheur: "Sortie de la salle des miroirs.",
        texte_a_lire:
          "Vous débouchez sur un plateau qui n'aurait pas dû exister. L'air vibre. Le sang bat dans vos veines à un rythme qui n'est plus le vôtre. Sur votre peau, des motifs lumineux apparaissent, comme si la Spirale écrivait son nom sur vous. Au loin, une cathédrale de cristal, étrangement intacte, vous attire comme un phare.",
        contexte_mj:
          "Zone de danger environnemental. Jets de Vigueur réguliers pour résister à la mutation. La Cathédrale stabilise la zone autour d'elle : plus on s'en approche, plus le DD baisse. Bonne occasion pour décrire des mutations temporaires (yeux supplémentaires, voix dédoublée) qui se résorbent à l'arrivée.",
        objectif:
          "Atteindre la Cathédrale des Soupirs avant que la mutation ne devienne permanente.",
      },
      mecaniques: {
        defis: [
          "Vigueur (DD 15) : Résister à la mutation (échec = -1 Constitution OU -1 Charisme temporaire).",
          "Arcanes (DD 14) : Se protéger magiquement (annule un échec).",
          "Survie (DD 13) : Trouver le chemin le plus court vers la Cathédrale.",
        ],
        indices: [
          "La Cathédrale stabilise la zone (DD baisse de 2 par étape parcourue vers elle).",
          "Les motifs lumineux sous la peau sont la signature personnelle de la Spirale (ils ne disparaîtront jamais complètement).",
          "Certains habitants du Village portaient les mêmes motifs, plus avancés.",
        ],
        recompenses:
          "Arrivée à la Cathédrale. Marquage permanent (cosmétique narratif, exploitable au Sc.5).",
      },
      transitions: {
        success: "Arrivée à la Cathédrale des Soupirs (Acte 3).",
        fail: "Arrivée affaiblie, avec malus temporaires aux jets de l'Acte 3.",
      },
    },
  ],
};
