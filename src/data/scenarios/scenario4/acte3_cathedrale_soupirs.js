/**
 * Scénario 4 - Acte 3 : Les Vestiges Oubliés
 * Cathédrale des Soupirs & Sanctuaire des Premiers Gardiens
 *
 * NOTE : cet acte remplace l'ancien acte3_cathedrale_soupirs et acte3_laboratoire_interdit.
 * Thade n'est JAMAIS entré dans la Spirale en personne — il l'exploite à distance via le
 * Cristal de la mine. Cet acte est donc une exploration archéo-mystique qui révèle :
 *   - la véritable nature de la Spirale (antérieure à Valombre, scellée par les nains) ;
 *   - le passé de Thade (sa femme malade, son pacte) ;
 *   - le lien avec les profanations du Sc.1 (les os des Thanes étaient des sceaux) ;
 *   - comment réellement vaincre Thade (briser son ancre, le Cristal).
 */

export const acte3 = {
  title: "ACTE 3 : LES VESTIGES OUBLIÉS",
  stake:
    "Découvrir la vraie nature de la Spirale, le pacte secret de Thade, et le lien oublié entre Valombre et cette prison plane.",
  location: "Cathédrale des Soupirs & Sanctuaire des Premiers Gardiens.",
  scenes: [
    {
      title: "Scène 1 : Le Seuil de la Cathédrale",
      type: "Exploration / Ambiance",
      image: "./images/scenes/cathedrale_seuil.jpg",
      locationId: "cathedrale_parvis",
      npcIds: [],
      description: {
        resume:
          "Approche d'une cathédrale de cristal qui ne devrait pas exister, gardée par un silence sacré.",
        visuel:
          "Une cathédrale taillée dans un cristal laiteux, hautes flèches qui défient la gravité de la Spirale. Des vitraux figurent des scènes inconnues : des nains en armures anciennes scellant un puits de lumière noire ; une femme alitée entourée de mages ; un homme jeune, reconnaissable malgré tout — Thade — agenouillé devant un cristal. Les portes sont entrouvertes.",
        audio:
          "Aucun bruit. Pas même un écho. Le silence est si dense qu'on entend son propre cœur.",
        odeur:
          "Pierre froide, encens éteint depuis des siècles, mais encore présent.",
        lumiere:
          "Une lumière laiteuse émane des murs eux-mêmes. Pas d'ombres portées.",
      },
      narration: {
        declencheur: "Arrivée à la Cathédrale.",
        texte_a_lire:
          "La Peste s'arrête nette à dix pas du parvis. Les motifs sous votre peau cessent de pulser. La Cathédrale n'est pas un piège : c'est un refuge construit par quelqu'un qui connaissait la Spirale assez bien pour s'en protéger. Sur le tympan, gravée en runes naines très anciennes, une inscription : « Ici reposent les Premiers Gardiens. Que leur silence soit notre rempart. »",
        contexte_mj:
          "Moment de répit après la Peste. Insister sur le caractère SACRÉ et ANCIEN du lieu. Les vitraux racontent l'histoire que les PJ vont reconstituer : ce n'est pas l'œuvre de Thade, mais des nains de Valombre, il y a très longtemps. La femme alitée et le jeune Thade sont un indice qui ne sera compris qu'à la Scène 3.",
        objectif:
          "Pénétrer dans la Cathédrale et commencer à comprendre.",
      },
      mecaniques: {
        defis: [
          "Connaissances (Histoire) DD 14 : Les runes sont du nain ancien, antérieur à la fondation officielle de Valombre.",
          "Connaissances (Religion) DD 13 : Le mot 'Premiers Gardiens' évoque une caste pré-cléricale de nains-prêtres-soldats.",
          "Perception (DD 12) : Reconnaître un visage sur un vitrail — Thade jeune, et une femme inconnue.",
        ],
        indices: [
          "La Cathédrale a été bâtie DEPUIS l'intérieur de la Spirale, mais avec des techniques naines.",
          "Les vitraux racontent une chronologie : nains anciens → femme malade → Thade jeune.",
          "Aucun signe de Thade adulte ni de son influence ici.",
        ],
        recompenses: "Repos sûr possible (1 nuit). Récupération de sorts et soins.",
      },
      transitions: {
        success: "Entrée dans la nef principale.",
      },
    },
    {
      title: "Scène 2 : Les Archives de Cristal",
      type: "Investigation / Lore",
      image: "./images/scenes/archives_cristal.jpg",
      locationId: "cathedrale_archives",
      npcIds: ["echo_thade"],
      description: {
        resume:
          "Salle où des colonnes de cristal contiennent les souvenirs des Premiers Gardiens et la jeunesse de Thade.",
        visuel:
          "Une nef latérale tapissée de hautes colonnes de cristal transparent. Chacune contient une scène figée, comme un insecte dans l'ambre. Au toucher, la scène s'anime brièvement dans l'esprit du PJ. Au centre, un cristal plus récent, fissuré, montre la silhouette d'un homme jeune agenouillé.",
        audio:
          "Quand on touche un cristal, la voix de l'époque concernée résonne dans la tête du PJ.",
        odeur: "Poussière de minéral, métal froid.",
        lumiere: "Bleutée, douce, intermittente selon les visions activées.",
      },
      narration: {
        declencheur: "Toucher un premier cristal.",
        texte_a_lire:
          "Vous posez la main sur la première colonne. Une vision vous traverse, brève et nette comme un souvenir d'enfance : des centaines de nains en armure, agenouillés autour d'un puits de lumière noire qui pleure dans le sol de leur cité. Un Grand Thane lève sa hache, tranche son propre poignet, laisse couler son sang dans le puits. Le puits se referme partiellement. Une voix nain ancien murmure : « Ce que nos os contiennent, la Spirale ne peut le dévorer. »\n\nUne autre colonne. Une jeune femme est alitée, le visage marqué par une maladie qui creuse ses joues. Un homme jeune, beau, encore plein d'espoir, lui tient la main : Thade Coren. Il pleure. À côté de lui, un vieux mage murmure : « Aucun sort ne peut plus rien. Sauf, peut-être, une chose. Mais ce serait... » Il n'achève pas. Thade lève les yeux : « Dites-moi. »",
        contexte_mj:
          "Moment de révélation MAJEUR. Distribuer les visions une par une selon ce que les PJ touchent. Au moins 4 colonnes prioritaires : (1) le scellement par les Thanes, (2) la maladie de la femme de Thade, (3) le pacte de Thade avec le Cristal, (4) la mort de la femme malgré le pacte. Encourager les joueurs à recouper les indices entre eux. L'écho de Thade jeune (PNJ fantomatique) peut apparaître brièvement, sans interagir : il est figé dans son moment.",
        objectif:
          "Reconstituer l'histoire complète : qui a scellé la Spirale, qui est Thade vraiment, et pourquoi il fait ce qu'il fait.",
      },
      mecaniques: {
        defis: [
          "Connaissances (Arcanes) DD 15 : Comprendre que les os des Thanes étaient des SCEAUX MAGIQUES, pas des reliques (lien direct avec Sc.1 — les profanations affaiblissaient les sceaux).",
          "Connaissances (Histoire) DD 16 : Reconstituer la chronologie : Spirale antérieure aux nains → scellement par sacrifice de sang → Valombre construite par-dessus.",
          "Psychologie DD 14 : La douleur de Thade jeune est sincère. Sa chute commence par l'amour, pas l'ambition.",
          "Investigation DD 14 : Trouver un cristal caché qui montre Thade FAÇONNANT le Cristal de la mine — son ancre planaire actuelle.",
        ],
        indices: [
          "La Spirale n'est PAS une création naine ; les nains l'ont SCELLÉE en construisant Valombre par-dessus.",
          "Les os des Thanes contenaient les sceaux. Les profanations du Sc.1 (Jaren) étaient un VOL DE SCEAUX commandité par Thade.",
          "La femme de Thade est morte malgré le pacte. La Spirale a pris son âme en échange d'une guérison qui n'a jamais été tenue.",
          "Thade n'est jamais entré dans la Spirale. Il l'utilise à distance via le Cristal qu'il a façonné comme ancre.",
          "Briser le Cristal = couper Thade de sa source de pouvoir.",
        ],
        recompenses:
          "Compréhension complète de l'antagoniste. Bonus narratif pour le combat final (les PJ savent où frapper).",
      },
      transitions: {
        success: "Vers le Sanctuaire des Premiers Gardiens.",
        fail:
          "Visions partielles ; les PJ devront recoller les morceaux à la Scène 4.",
      },
    },
    {
      title: "Scène 3 : Le Sanctuaire des Premiers Gardiens",
      type: "Social / Combat évitable",
      image: "./images/scenes/sanctuaire_gardiens.jpg",
      locationId: "cathedrale_sanctuaire",
      npcIds: ["thane_gardien_ancien"],
      description: {
        resume:
          "Un mausolée où les esprits des nains qui ont scellé la Spirale veillent encore. Hostiles ou alliés selon l'approche.",
        visuel:
          "Une crypte circulaire descendant en spirale. Des sarcophages de pierre alignés, gravés de noms naines : THARGAD, BORIN-LE-MUET, KESSA-AUX-MARTEAUX, DURIN PREMIER. Sur chaque dalle, une silhouette spectrale en armure ancienne, immobile. Au centre, sur un piédestal, un livre ouvert : le Codex des Sceaux.",
        audio:
          "Une respiration collective, lente, comme celle de gens qui dorment depuis des siècles. Quand un PJ s'approche, les respirations s'accélèrent.",
        odeur: "Pierre, fer rouillé, et une note de bière éventée.",
        lumiere:
          "Une seule torche éternelle au centre. Les spectres sont éclairés à contre-jour.",
      },
      narration: {
        declencheur: "Descente dans le sanctuaire.",
        texte_a_lire:
          "Les silhouettes lèvent la tête une à une. Un Thane spectral se redresse, pose la main sur le pommeau de sa hache fantôme, et parle dans un nain si ancien que vous ne devriez pas le comprendre — pourtant, vous le comprenez : « Vous portez l'odeur de l'extérieur. Et l'odeur du Voleur de Sceaux. Êtes-vous ses serviteurs, ou ceux qui le défont ? »",
        contexte_mj:
          "Scène CRUCIALE. Les Premiers Gardiens sont des ESPRITS-SCEAUX, pas des morts-vivants hostiles. Ils ont senti, à travers les siècles, qu'on profanait leurs tombes (Sc.1) et qu'on volait leurs sceaux. Si les PJ se présentent en ennemis de Thade et montrent qu'ils comprennent (indices Scène 2), les Gardiens deviennent des alliés narratifs majeurs. Sinon, combat difficile (8 Spectres élites).",
        objectif:
          "Convaincre les Premiers Gardiens que les PJ sont les défaiseurs du Voleur, pas ses serviteurs.",
      },
      mecaniques: {
        defis: [
          "Diplomatie DD 18 : Convaincre le Thane spectral. Bonus +4 si les PJ montrent qu'ils ont compris les visions de la Scène 2.",
          "Connaissances (Histoire) DD 14 : Saluer le Thane par son nom (lu sur les sarcophages) et dans le bon protocole.",
          "Combat alternatif : 1 Thane Spectral (FP 9) + 4 Gardiens Spectraux (FP 5).",
          "Bluff DD 25 : Mentir aux Gardiens (très difficile, ils sentent la duplicité).",
        ],
        indices: [
          "Les Gardiens connaissent la phrase exacte du Codex pour briser un Cristal-Ancre.",
          "Ils peuvent confier UN seul d'entre eux comme allié spectral pour le retour à Valombre (Sc.5).",
          "Le Codex contient le nom du Cristal de Thade : 'Larme de Sealine' (le nom de sa femme).",
        ],
        recompenses:
          "Allié spectral (un Thane mineur qui escortera les PJ au combat final, +1 attaque par tour). Phrase de brisure du Cristal. Bénédiction des Premiers Gardiens (résistance temporaire à la nécromancie).",
      },
      transitions: {
        success:
          "Les Gardiens accordent leur soutien. Vers la confrontation avec l'écho final.",
        fail:
          "Combat. Les PJ peuvent obtenir le Codex de force, mais perdent l'allié spectral.",
      },
    },
    {
      title: "Scène 4 : L'Écho du Vide",
      type: "Social / Révélation",
      image: "./images/scenes/echo_vide.jpg",
      locationId: "cathedrale_choeur",
      npcIds: ["echo_sealine"],
      description: {
        resume:
          "Dans le chœur de la Cathédrale, un fragment d'âme parle à travers les vitraux. C'est ce qu'il reste de Sealine, la femme de Thade.",
        visuel:
          "Le chœur est dominé par un vitrail unique : une jeune femme aux cheveux longs, sereine. À mesure que les PJ approchent, le vitrail s'illumine et l'image bouge légèrement, comme un portrait qui respire.",
        audio:
          "Une voix douce, féminine, qui semble venir de partout et de nulle part.",
        odeur:
          "Un parfum léger : lavande, comme celui que Thade laisse derrière lui à Valombre.",
        lumiere: "Le vitrail diffuse une lumière chaude, dorée.",
      },
      narration: {
        declencheur: "Approche du vitrail principal.",
        texte_a_lire:
          "La femme du vitrail tourne lentement la tête vers vous. Elle sourit, mais ses yeux sont vides. Sa voix est un souffle : « Vous l'avez vu, n'est-ce pas ? Mon Thade. Avant. Quand il pleurait pour moi. La Spirale ne m'a jamais guérie. Elle a pris ce qu'il a donné, et m'a gardée ici, en pièces. Une voix sur un vitrail. Un parfum dans son air. Il croit me ramener en vidant Valombre. Il se ment. Je ne reviendrai pas. Mais lui, il peut encore arrêter. Brisez la Larme. Pas pour moi — pour lui. »",
        contexte_mj:
          "Moment d'humanisation FINALE de l'antagoniste. Sealine n'est ni hostile ni totalement consciente. Elle est un fragment, comme un disque rayé qui rejoue les mêmes émotions. Elle peut répondre à 2-3 questions courtes (si les PJ pensent à demander). Elle confirme les indices de la Scène 2 et donne une dernière révélation : Thade lui-même ne sait pas qu'elle est encore là, sous forme d'écho. C'est une carte que les PJ peuvent jouer au Sc.5.",
        objectif:
          "Comprendre les enjeux émotionnels de Thade et obtenir un levier pour le confronter.",
      },
      mecaniques: {
        defis: [
          "Diplomatie DD 12 : Obtenir une réponse à une question.",
          "Psychologie DD 13 : Comprendre que Sealine est un écho, pas une âme libre.",
          "Volonté DD 14 : Ne pas être affecté par la mélancolie ambiante (échec = -1 à toutes les actions pour la prochaine heure).",
        ],
        indices: [
          "Thade ignore que Sealine existe encore comme écho. Lui dire pourrait le briser.",
          "La 'Larme' = le Cristal de Thade.",
          "Sealine peut être 'libérée' (dissipée) au Sc.5 par un acte de compassion, ce qui privera Thade de sa motivation.",
        ],
        recompenses:
          "Levier émotionnel utilisable au combat final. XP narratif majeur.",
      },
      transitions: {
        success: "Vers l'autel et le rituel.",
      },
    },
    {
      title: "Scène 5 : Le Rituel d'Accordage",
      type: "Rituel / Combat de soutien",
      image: "./images/scenes/rituel_accordage.jpg",
      locationId: "cathedrale_autel",
      npcIds: ["ombres_traqueuses"],
      description: {
        resume:
          "Pour descendre vers le Cœur Mécanique sans être désintégrés, les PJ doivent s'harmoniser à la Spirale. Pendant le rituel, les anticorps de la Spirale les attaquent.",
        visuel:
          "Un autel circulaire au centre de la Cathédrale. Sur ses bords, le Codex des Sceaux ouvert à la page d'accordage. La pierre vibre doucement. À mesure que le rituel commence, des fissures sombres apparaissent dans les vitraux, et des Ombres Traqueuses s'en extraient.",
        audio:
          "Un chant harmonique grave, qui monte progressivement. Sifflements des Ombres en contrepoint.",
        odeur:
          "Encens pur, qui se charge progressivement d'ozone à mesure que les Ombres approchent.",
        lumiere:
          "Dorée à l'autel, ténèbres rampantes en périphérie.",
      },
      narration: {
        declencheur: "Activation de l'autel avec le Codex.",
        texte_a_lire:
          "Le Codex pulse sous votre main. La pierre de l'autel répond. Pour descendre vers le Cœur sans être broyés, vous devez vibrer à la fréquence de la Spirale. Sinon, le Cœur vous rejettera. Mais à mesure que le chant s'élève, des fissures apparaissent dans les vitraux. La Spirale a senti l'intrusion. Ses anticorps arrivent.",
        contexte_mj:
          "Skill challenge musical/magique avec combat parallèle. UN PJ tient l'accordage (jets répétés), les autres protègent. Si l'allié spectral du Thane est présent (Scène 3), il combat en allié.",
        objectif:
          "Réussir l'harmonisation avant que les Ombres ne brisent le rituel.",
      },
      mecaniques: {
        defis: [
          "Représentation (Musique) ou Arcanes DD 16 : 3 succès consécutifs pour réussir l'accordage.",
          "Concentration DD 14 : maintenir le rituel quand le PJ accordeur subit des dégâts.",
          "Combat : 4 Ombres Traqueuses (FP 4) + 2 vagues de renfort si le rituel dure plus de 5 rounds.",
          "Allié spectral (si présent) : agit en initiative séparée, neutralise 1 Ombre par round.",
        ],
        indices: [
          "Suivez le rythme du battement de cœur lent de la Cathédrale (visuel : la lumière de l'autel pulse).",
          "La lumière dorée de l'autel repousse les Ombres dans un rayon de 3 m.",
          "Si Sealine a parlé aux PJ, son écho peut chanter avec eux (bonus +2 au rituel).",
        ],
        recompenses:
          "Passage sécurisé vers le Cœur Mécanique (Acte 4). Pas de dégâts d'accordage.",
      },
      transitions: {
        success: "Harmonisation réussie. Fin de l'Acte 3.",
        fail:
          "Harmonisation douloureuse : 2d6 dégâts à chaque PJ, mais passage forcé.",
      },
    },
  ],
};
