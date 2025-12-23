import { createPnj } from "./pnjTemplate";

// PNJ principaux : personnages à multiples interactions (quête, commerce, romance, intrigue)
const pnjPrincipauxRaw = [
  {
    id: "thade_coren",
    name: "Thade Coren",
    size: "Moyen",
    type: "Humanoïde (humain)",
    alignment: "LN",
    fp: 8,
    environment: "Val-d'Ombre (Université, Conclave) puis Spirale",
    organization: "Solitaire (manipulateur)",
    initiative: "+2",
    senses: "Perception +8",
    ac: { total: 20, touch: 13, flatFooted: 18 },
    hp: 68,
    hd: "10d4+30",
    saves: { fort: "+7", ref: "+6", will: "+11" },
    speed: "9 m",
    attack: "bâton ferré +7 (1d6+1 contondant)",
    fullAttack: "bâton ferré +7 (1d6+1) ou rayon affaiblissant +9 à distance",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: [
      "Sorts de magicien/ensorceleur (NLS 10) : contrôle, nécromancie, entrave",
      "Rayon affaiblissant 4/jour",
    ],
    specialQualities: [
      "Préparation : +2 DD pour les sorts de contrôle lancés sur cibles affaiblies",
      "Résistance mentale (contre Charme) +2",
    ],
    abilities: { str: 10, dex: 14, con: 14, int: 20, wis: 12, cha: 16 },
    skills:
      "Concentration +15, Diplomatie +12, Intimidation +11, Connaissance (arcane) +17, Connaissance (plans) +12, Psychologie +10",
    feats: "Volonté de fer, Science de l'initiative, Incantation silencieuse, Incantation réflexe, Robustesse",
    tactics:
      "Commence par entraver (corde animée, immobilisation), place des rayons affaiblissants, puis négocie si avantage. En fuite, utilise brume de dissimulation et dimensions mineures.",
    loot: "Bâton ferré, notes nécromantiques, cristal mouchard, anneau de protection +1",
    isEnemy: false,
    antagonist: true,
    role: "Antagoniste principal, double jeu : mécène puis manipulateur.",
    details: [
      "Motivation : Fusionner avec la Spirale pour atteindre l'immortalité.",
      "Masque : Froid, académique, se présente comme un allié rationnel.",
      "Spoiler : Manipule les PJ dès les premiers scénarios en orientant leurs enquêtes.",
      "Combat : Dans le final, utilise la Tour comme catalyseur d'énergie nécromantique."
    ],
    tactical: {
      bookReference: "Bestiaire : Dossier 'Thade Coren' (Chap. Manipulations & Spirale)",
      scenarioContext:
        "Acte 2-3 : infiltration au Conclave, ensuite confrontation finale dans la Spirale (cercle des miroirs). Focus sur les sorts de contrôle pour déstabiliser les PJ avant de négocier.",
      spells: [
        {
          name: "Rayon affaiblissant",
          details: "+9 / DD 16 Str, -2 Str/Con pendant 1 tour, 4/j. Permet de fragiliser la cible principale avant l'assaut.",
        },
        {
          name: "Corde animée",
          details: "Prépare un piège pour restreindre un seul PJ : +12 toucher, DD 15 Force, idéal pour neutraliser un tank temporairement.",
        },
        {
          name: "Brume de dissimulation",
          details: "Prépare sa retraite ou se repositionner derrière un masque magique ; déclenchée après avoir lancé rayon ou immobilisation.",
        },
      ],
      tacticFeats: [
        {
          name: "Science de l'initiative",
          details: "Donne une fenêtre pour activer un sort dès le tour 1 et imposer son plan tactique.",
        },
        {
          name: "Incantation réflexe",
          details: "Permet de lancer un sort de réaction (rayon ou téléportation mineure) quand un PJ s'approche trop.",
        },
      ],
      tacticSummary:
        "Démarre par des contrôles (corde animée, immobilisation), enchaîne avec rayon affaiblissant, puis se met en retrait pour converser/négocier. Garde une brume active pour fuir vers les étages supérieurs si mis en difficulté.",
    },
  },
  {
    id: "thorgar_pretre_nain",
    name: "Thorgar, prêtre du Temple-Forgeron",
    size: "Moyen",
    type: "Humanoïde (nain)",
    alignment: "LB",
    fp: 5,
    environment: "Quartier du Savoir / Temple-Forgeron",
    organization: "Solitaire ou avec 1-2 acolytes",
    initiative: "-1",
    senses: "Vision dans le noir 18 m, Perception +8",
    ac: { total: 19, touch: 9, flatFooted: 19 },
    hp: 52,
    hd: "6d8+24",
    saves: { fort: "+9", ref: "+1", will: "+8" },
    speed: "6 m (armure)",
    attack: "marteau de guerre +9 (1d8+3 contondant)",
    fullAttack: "marteau de guerre +9 (1d8+3)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: [
      "Canalisation d'énergie 5/jour (2d6 positif)",
      "Spécialité : bénédiction contre morts-vivants (+1 JS et jets d'attaque contre morts-vivants)",
    ],
    specialQualities: [
      "Résistance naine (+2 JS poison, sorts, effets magiques)",
      "Détection des passages secrets pierreux",
    ],
    abilities: { str: 14, dex: 8, con: 18, int: 12, wis: 16, cha: 12 },
    skills: "Connaissance (religion) +10, Premiers secours +9, Diplomatie +6, Intimidation +6",
    feats: "Robustesse, Science de l'initiative (sacré), Incantation statique",
    tactics:
      "Ouvre avec bénédiction/armes magiques, se place en première ligne, canalise pour soutenir. Refuse de fuir tant que des reliques sont menacées.",
    loot: "Marteau de guerre gravé, reliques bénites, anneau d'acier runique (+1 CA naturelle)",
    isEnemy: false,
    role: "Allié moral, pilier du Temple.",
    details: [
      "Motivation : Protéger la mémoire des morts, empêcher l'ouverture de la Spirale et sauver les civils.",
      "Attitude : Grave, inflexible sur les questions sacrées, mais reconnaissant envers les PJ.",
      "Usage : Point d'ancrage moral, soins, informations secrètes. Déclenche le 'Dilemme de Thorgar'.",
      "Lien : Premier à parler de la 'maladie' de la montagne."
    ],
    tactical: {
      bookReference: "Bestiaire : Portrait 'Thorgar, prêtre du Temple-Forgeron'",
      scenarioContext:
        "Acte 1-2 : support de la ligne de front dans le Temple. Utilise ses bénédictions pour renforcer les gardes et ses pouvoirs contre morts-vivants dans les catacombes.",
      spells: [
        {
          name: "Bénédiction",
          details: "+1 d'attaque et de sauvegardes pour les alliés proches (3/j). Lance dès l'engagement pour couvrir les gardes.",
        },
        {
          name: "Canalisation d'énergie (positif)",
          details: "5/j, 2d6 PV; priorise les gardes blessés puis lui-même si menacé par mort-vivant.",
        },
      ],
      tacticFeats: [
        {
          name: "Robustesse",
          details: "Permet de rester au contact et d'absorber les dégâts lors des charges ennemies.",
        },
      ],
      tacticSummary:
        "Se place en première ligne pour canaliser/ soigner les alliés. S'il est menacé par morts-vivants, utilise canalisation pour les affaiblir ; refuse de fuir tant que reliques sont protégées.",
    },
  },
  {
    id: "aubergiste_pic_brise",
    name: "Brand, aubergiste du Pic Brisé",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "NB",
    fp: 2,
    environment: "Vieille Ville – Auberge du Pic Brisé",
    organization: "Solitaire (avec personnel 1-2)",
    initiative: "+1",
    senses: "Détection +5",
    ac: { total: 14, touch: 11, flatFooted: 13 },
    hp: 18,
    hd: "3d8+3",
    saves: { fort: "+3", ref: "+2", will: "+2" },
    speed: "9 m",
    attack: "Matraque +4 (1d6+1 non létal)",
    fullAttack: "Matraque +4 (1d6+1 non létal)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: [],
    specialQualities: [
      "Contacts étendus en ville (+4 Estimation/Collecte d'infos sur rumeurs locales)",
    ],
    abilities: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 12 },
    skills: "Diplomatie +6, Psychologie +5, Détection +5, Estimation +6",
    feats: "Arme de Prédilection (matraque), Vigilance",
    tactics:
      "Tente d’apaiser, ne se bat qu’en légitime défense ; connaît les issues de l’auberge.",
    loot: "Clés des chambres, petite caisse de pièces, liste de clients.",
    isEnemy: false,
    role: "Hôte bien informé qui entend toutes les conversations.",
    details: [
      "Motivation : Protéger sa réputation et éviter les ennuis avec la garde.",
      "Attitude : Jovial en public, prudent en privé ; observe beaucoup.",
      "Usage : Source de rumeurs, point de contact pour guider les PJ vers leurs premières pistes."
    ],
  },
  {
    id: "etudiant_universite",
    name: "Althis, apprenti archiviste",
    size: "Moyen",
    type: "Humanoïde (humain)",
    alignment: "NB",
    fp: 1,
    environment: "Université de Magie de Val-d'Ombre – Cour centrale",
    organization: "Solitaire (parfois avec 1-2 condisciples)",
    initiative: "+1",
    senses: "Perception +4",
    ac: { total: 12, touch: 11, flatFooted: 11 },
    hp: 9,
    hd: "2d8",
    saves: { fort: "+1", ref: "+1", will: "+3" },
    speed: "9 m",
    attack: "bâton runique +1 (1d6 non létal)",
    fullAttack: "bâton runique +1 (1d6 non létal)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: [],
    specialQualities: [
      "Mémoire prodigieuse (+2 Collecte d'infos sur l'Université)",
      "Badge discret de la Fraternité Nyx (permet d'accéder aux couloirs étudiants la nuit)"
    ],
    abilities: { str: 10, dex: 12, con: 12, int: 14, wis: 12, cha: 11 },
    skills: "Diplomatie +6, Collecte d'infos +7, Connaissance (arcane) +9, Psychologie +4",
    feats: "Science de l'initiative, Don de négociateur",
    tactics:
      "Évite toute violence. Préfère parlementer, partager des rumeurs ou accompagner les PJ jusqu'au bureau de Thade si convaincu.",
    loot: "Clé de dortoir en argent, carnet de rumeurs griffonnées, badge de Nyx (preuve implicante).",
    isEnemy: false,
    role: "Étudiant inquiet qui sert de premier point de contact avec l'Université.",
    tactical: {
      bookReference: "Scénario 1 – Acte 2, Scène 1 : La Fraternité Dissoute",
      scenarioContext:
        "Althis craint encore la Fraternité Nyx mais sait que Thade cache des secrets. Il accepte d'aider les PJ si ceux-ci restent discrets.",
      spells: [],
      specialActions: [
        {
          name: "Guide improvisé",
          details:
            "Peut accorder un bonus circonstanciel de +2 aux tests de Diplomatie ou de Collecte d'infos à l'Université s'il accompagne les PJ."
        },
        {
          name: "Rumeurs étouffées",
          details:
            "Sur un test de Diplomatie DD 15 réussi par les PJ, Althis partage des rumeurs ciblant directement Thade Coren."
        }
      ],
      tacticFeats: [
        {
          name: "Science de l'initiative",
          details: "Toujours le premier à parler pour éviter que la garde universitaire ne s'en mêle."
        }
      ],
      tacticSummary:
        "Tente de calmer toute tension et oriente les PJ vers le bureau de Thade après les avoir mis en garde contre la surveillance du Conseil."
    },
  },
  {
    id: "durnik_chef_mineur",
    name: "Durnik, chef de la Guilde des Mineurs",
    size: "Moyen",
    type: "Humanoïde (humain)",
    alignment: "NB",
    fp: 4,
    environment: "Quartier des Mineurs, tunnels supérieurs",
    organization: "Avec 2-4 gardes de mine",
    initiative: "+1",
    senses: "Perception +5",
    ac: { total: 17, touch: 11, flatFooted: 16 },
    hp: 42,
    hd: "5d10+15",
    saves: { fort: "+8", ref: "+2", will: "+4" },
    speed: "9 m",
    attack: "hache de mine +8 (1d10+4 tranchant)",
    fullAttack: "hache de mine +8/+3 (1d10+4)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Cri d'alarme 1/j (Intimidation de masse, test VS Volonté DD 14 : secoué 1d4 rd)"],
    specialQualities: ["Résistance à la fatigue (tests Con pour marches forcées +4)"],
    abilities: { str: 16, dex: 12, con: 16, int: 10, wis: 12, cha: 12 },
    skills: "Escalade +9, Survie +7, Intimidation +8, Artisanat (mines) +9",
    feats: "Attaque en puissance, Science de l'initiative, Robustesse",
    tactics:
      "Se place en avant dans les tunnels minés, fait reculer les PJ s'ils menacent les mineurs ; accepte de négocier si preuve de complot.",
    loot: "Hache lourde runique, carnet de codes des tunnels, pierre de tonnerre",
    isEnemy: false,
    role: "Chef de guilde, ouvre ou ferme l'accès aux mines.",
    details: [
      "Motivation : Protéger les mineurs de la 'pierre malade' et des décisions du Conseil.",
      "Attitude : Bourru mais honnête. Respecte les PJ qui prennent des risques pour les siens.",
      "Utilisation : Donneur de quêtes pour les scénarios liés à la Mine et à la Spirale.",
      "Test social : Difficile à convaincre si les PJ sont trop proches des Mages ou du Conseil.",
      "Au Pont Secret : Résolu à mourir pour gagner du temps lors de l'évacuation (sacrifice héroïque)."
    ],
    tactical: {
      bookReference: "Bestiaire : Dossier 'Durnik, chef des mineurs' (Actes 2-3)",
      scenarioContext:
        "Acte 2 : surveille les accès aux tunnels supérieurs. Utilise son terrain pour créer des goulots d'étranglement et protéger les mineurs.",
      spells: [],
      specialActions: [
        {
          name: "Cri d'alarme",
          details: "1/j, effectue un test de Volonté DD 14 pour retirer les PJ du support moral (-1 moral, secoué 1d4 tours).",
        },
      ],
      tacticFeats: [
        {
          name: "Attaque en puissance",
          details: "Maximise les dégâts avec sa hache pour punir les intrus.",
        },
        {
          name: "Robustesse",
          details: "Reste au contact même quand les tunnels s'effondrent.",
        },
      ],
      tacticSummary:
        "Se place devant les berges minées, frappe en première ligne, puis recule derrière des arcs de pierres. Fait reculer les PJ quand deux gardes tombent.",
    },
  },
  {
    id: "capitaine_garde_temple",
    name: "Capitaine de la garde du Temple",
    size: "Moyen",
    type: "Humanoïde (humain)",
    alignment: "LN",
    fp: 4,
    environment: "Temple-Forgeron et environs",
    organization: "Escouade (capitaine + 3-6 gardes)",
    initiative: "+1",
    senses: "Perception +6",
    ac: { total: 18, touch: 11, flatFooted: 17 },
    hp: 40,
    hd: "5d10+10",
    saves: { fort: "+6", ref: "+3", will: "+2" },
    speed: "6 m (armure)",
    attack: "épée longue +8 (1d8+3 tranchant)",
    fullAttack: "épée longue +8/+3 (1d8+3)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Ordre de tir (les gardes alliés gagnent +1 attaquer pour 1 tour)"],
    specialQualities: ["Bonus de commandement (+1 moral aux gardes à 9 m)"],
    abilities: { str: 15, dex: 12, con: 14, int: 10, wis: 12, cha: 12 },
    skills: "Perception +6, Intimidation +7, Profession (soldat) +8",
    feats: "Science de l'initiative, Robustesse, Arme de prédilection (épée longue)",
    tactics:
      "Forme les gardes en ligne, couvre la retraite des civils, négocie si l'autorité du Temple est invoquée.",
    loot: "Épée longue gravée, plastron bleu nuit, sceau du Temple",
    isEnemy: false,
    role: "Officier pragmatique, pivot entre temple et civils.",
    details: [
      "Motivation : Maintenir l'ordre et éviter une guerre civile ouverte.",
      "Attitude : Suspicion envers les PJ impliqués dans trop d'incidents.",
      "Combat : Peut devenir un ennemi direct si les PJ se rangent ouvertement contre le Conseil.",
      "Spoiler : Manipulé par des ordres falsifiés provenant de la faction de Thade."
    ],
    tactical: {
      bookReference: "Bestiaire : 'Capitaine de la garde du Temple' (Quartier du Savoir)",
      scenarioContext:
        "Acte 1 : défend l'accès au Temple-Forgeron. Coordonne les gardes et use de ses ordres pour encadrer les civils.",
      spells: [],
      specialActions: [
        {
          name: "Ordre de tir",
          details: "+1 aux jets d’attaque des gardes à 9 m pendant 1 tour (1/j).",
        },
      ],
      tacticFeats: [
        {
          name: "Science de l'initiative",
          details: "Initie les charges coordonnées avant que les PJ ne s'organisent.",
        },
        {
          name: "Robustesse",
          details: "Absorbe les attaques pendant qu'il protège un passage.",
        },
      ],
      tacticSummary:
        "Reste en formation serrée, couvre la retraite des civils et force les PJ à passer par les gardes. Plie si l'autorité du Temple l'exige.",
    },
  },
  {
    id: "marchand_fou_mercane",
    name: "Le Marchand Fou (Mercane exilé)",
    size: "Moyen",
    type: "Extérieur (loyal)",
    alignment: "LN",
    fp: 6,
    environment: "Spirale – Couloirs de Chair",
    organization: "Solitaire",
    initiative: "+2",
    senses: "Vision dans le noir 18 m, Perception +10",
    ac: { total: 19, touch: 12, flatFooted: 17 },
    hp: 52,
    hd: "7d8+21",
    saves: { fort: "+6", ref: "+5", will: "+9" },
    speed: "9 m",
    attack: "dague +8 (1d4+2)",
    fullAttack: "dague +8/+3 (1d4+2)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Sorts innés (NLS 7) : porte dimensionnelle 1/j, invisibilité 2/j, détection de la magie à volonté"],
    specialQualities: ["Résistance à la magie 18", "Immunité au poison", "Sens marchand (+4 Estimation)"],
    abilities: { str: 10, dex: 14, con: 16, int: 18, wis: 12, cha: 16 },
    skills: "Estimation +14, Bluff +12, Diplomatie +12, Psychologie +10, Connaissance (plans) +11",
    feats: "Science de l'initiative, Négociateur, Volonté de fer",
    tactics:
      "Négocie d'abord, se rend invisible si menacé, tente la fuite dimensionnelle. Vend information contre vitalité.",
    loot: "Trousse de marchandises exotiques, anneau de discrétion mineure",
    isEnemy: false,
    role: "Marchand opportuniste, prête à des marchés étranges.",
    tactical: {
      bookReference: "Bestiaire : 'Marchand Fou' (Spirale – Couloirs de Chair)",
      scenarioContext:
        "Acte 4 : apparait en négociateur instable dans les couloirs de la Spirale, prêt à sacrifier des objets contre des informations.",
      spells: [
        {
          name: "Porte dimensionnelle (inné)",
          details: "1/j pour s'échapper ou faire traverser un allié, déclenché après avoir vendu un objet.",
        },
        {
          name: "Invisibilité (inné)",
          details: "2/j pour s'éclipser après une transaction ou un échec tactique.",
        },
      ],
      specialActions: [
        {
          name: "Détection de la magie",
          details: "Continu, repère les PJ essayant de mentir ou de dissimuler un objet précieux.",
        },
      ],
      tacticFeats: [
        {
          name: "Science de l'initiative",
          details: "Avance les négociations avant que la troupe ne se concentre.",
        },
        {
          name: "Volonté de fer",
          details: "Résiste aux menaces mentales ou aux tentatives de lui faire abandonner un marché.",
        },
      ],
      tacticSummary:
        "Négocie, propose des deals, puis se rend invisible ou franchit une porte dimensionnelle si la situation tourne au combat.",
    },
  },
  {
    id: "lysa_exploratrice_perdue",
    name: "Lysa, exploratrice perdue",
    size: "Moyen",
    type: "Humanoïde (humain)",
    alignment: "NB",
    fp: 3,
    environment: "Spirale – Premier cercle",
    organization: "Solitaire (survivante)",
    initiative: "+3",
    senses: "Perception +7",
    ac: { total: 17, touch: 13, flatFooted: 14 },
    hp: 28,
    hd: "4d8+8",
    saves: { fort: "+4", ref: "+6", will: "+2" },
    speed: "9 m",
    attack: "épée courte +7 (1d6+2)",
    fullAttack: "épée courte +7 (1d6+2)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Attaque sournoise +2d6"],
    specialQualities: ["Évasion", "Esquive instinctive"],
    abilities: { str: 12, dex: 16, con: 14, int: 12, wis: 10, cha: 10 },
    skills: "Discrétion +10, Perception +7, Survie +7, Acrobatie +9",
    feats: "Arme de prédilection (épée courte), Tir de précision, Esquive",
    tactics:
      "Observe avant d'agir ; coopère si on partage eau/soins. Évite le combat direct, cherche les issues.",
    loot: "Carte déformée de la Spirale, rations maigres",
    isEnemy: false,
    role: "Guide de circonstance, possible alliée ou romance survie.",
    tactical: {
      bookReference: "Bestiaire : 'Lysa, exploratrice perdue' (Spirale – Premier cercle)",
      scenarioContext:
        "Acte 3 : guide les PJ puis doit se défendre contre des chasseurs. Préfère éviter le combat direct.",
      spells: [],
      specialActions: [
        {
          name: "Attaque sournoise",
          details: "+2d6 quand elle frappe depuis la cachette ou après une évasion.",
        },
      ],
      tacticFeats: [
        {
          name: "Tir de précision",
          details: "Finit les créatures blessées à distance.",
        },
        {
          name: "Esquive",
          details: "Reste hors de portée avec des déplacements précis.",
        },
      ],
      tacticSummary:
        "Observe d'abord, coopère quand on partage ressources, puis frappe en retrait en visant les ouvertures ; fuit si la situation dégénère.",
    },
  },
  {
    id: "inevitable_contremetre",
    name: "Inévitable Contremètre",
    size: "Moyen",
    type: "Extérieur (Loi, Artéfact)",
    alignment: "LN",
    fp: 6,
    environment: "Spirale – Salle des Engrenages",
    organization: "Solitaire ou patrouille (1-2)",
    initiative: "+1",
    senses: "Vision dans le noir 18 m, Perception Aveugle 6 m",
    ac: { total: 22, touch: 11, flatFooted: 21 },
    hp: 68,
    hd: "9d8+27",
    saves: { fort: "+8", ref: "+4", will: "+9" },
    speed: "6 m ; vol stationnaire 3 m (manoeuvre parfaite)",
    attack: "Marteau de Gravité +12 (1d8+4 contondant, Réf. DD 17 annule Ralentissement)",
    fullAttack:
      "Marteau de Gravité +12 (1d8+4 contondant) et Rayon de Stase +9 (1d6 froid, Vol. DD 17 annule Ralentissement)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Rayon de Stase (Ralentissement 1 tour, Volonté DD 17 annule)"],
    specialQualities: [
      "Champ Anti-magie Localisé (rayon 1,5 m, 3 tours/jour)",
      "RD 5/chaotique",
      "Immunité (Artéfact) : poison, sommeil, maladie",
      "Conviction de Loi (+2 JS contre enchantements)",
    ],
    abilities: { str: 18, dex: 12, con: 16, int: 12, wis: 14, cha: 12 },
    skills: "Détection +14, Psychologie +12, Connaissance (ingénierie) +10",
    feats: "Robustesse, Science de l'Initiative, Vigilance",
    tactics:
      "Neutralise les lanceurs, négocie si preuve de l'anomalie de Thade ; peut basculer d'allié à ennemi.",
    loot: "Clé de recalibrage, noyau d'énergie régulé.",
    isEnemy: false,
    role: "Gardien neutre des mécanismes de la Spirale, potentiel allié si convaincu.",
    tactical: {
      bookReference: "Bestiaire : 'Inévitable Contremètre' (Spirale – Salle des Engrenages)",
      scenarioContext:
        "Acte 4 : surveille l'accès mécanique de la Spirale. Alterne sabots et rayon de stase pour neutraliser les lanceurs de sorts.",
      spells: [],
      specialActions: [
        {
          name: "Rayon de Stase",
          details: "+9, inflige 1d6 froid + ralentissement (Vol DD 17 pour annuler) ; priorise les lanceurs de sorts.",
        },
      ],
      tacticFeats: [
        {
          name: "Robustesse",
          details: "Supporte les attaques magiques lorsque son champ anti-magie est actif.",
        },
        {
          name: "Science de l'initiative",
          details: "Agit avant les cantrips ennemis.",
        },
      ],
      tacticSummary:
        "Bloque les couloirs avec son marteau de gravité, déclenche son champ anti-magie localisé, puis vise les lanceurs avec le rayon de stase ; peut négocier si l'anomalie de Thade est clairement démontrée.",
    },
  },
  {
    id: "gardien_cimetiere",
    name: "Gardien du Cimetière",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "NB",
    fp: 3,
    environment: "Cimetière en terrasse",
    organization: "Solitaire",
    initiative: "+1",
    senses: "Détection +7",
    ac: { total: 16, touch: 11, flatFooted: 15 },
    hp: 32,
    hd: "4d8+12",
    saves: { fort: "+6", ref: "+2", will: "+2" },
    speed: "9 m",
    attack: "Bâton Ferré +6 (1d6+2 non létal)",
    fullAttack: "Bâton Ferré +6 (1d6+2 non létal)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Bannissement Mineur des Morts-Vivants (1/j, NLS 4, comme Dissipation ciblée)"],
    specialQualities: [
      "Bonus +2 JS contre la peur dans le cimetière",
      "Détection des Perturbations du Sol Sacré",
    ],
    abilities: { str: 14, dex: 12, con: 16, int: 10, wis: 12, cha: 10 },
    skills: "Survie +8, Détection +7, Connaissance (religion) +6",
    feats: "Robustesse, Vigilance, Arme de Prédilection (bâton)",
    tactics:
      "Avertit avant d’attaquer, soutient les PJ contre profanateurs ; se replie dans le mausolée si submergé.",
    loot: "Clés du mausolée, amulette bénie (+1 JS contre peur).",
    isEnemy: false,
    role: "Protecteur bienveillant du cimetière, ressource pour informations ou bénédictions.",
    tactical: {
      bookReference: "Bestiaire : 'Gardien du Cimetière' (Terrasse du Cimetière)",
      scenarioContext:
        "Acte 2 : protège les sépultures contre les profanateurs et les morts-vivants ; sert d'allié mais peut repousser les PJ si la peur s'installe.",
      spells: [],
      specialActions: [
        {
          name: "Bannissement Mineur des Morts-Vivants",
          details: "1/j, NLS 4, agit comme une dissipation ciblée pour repousser les morts-vivants autour de lui.",
        },
      ],
      tacticFeats: [
        {
          name: "Robustesse",
          details: "Soutient la ligne quand les morts-vivants attaquent en masse.",
        },
        {
          name: "Vigilance",
          details: "Maintient les PJ en sécurité avec une perception accrue de la peur et de la trahison.",
        },
      ],
      tacticSummary:
        "Privilégie la prévention : avertit avant d’attaquer, soutient les PJ contre les profanations, puis se replie dans le mausolée si submergé.",
    },
  },
  {
    id: "archimage_defecteur",
    name: "Archimage Défecteur",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "N",
    fp: 9,
    environment: "Quartier du Savoir – Tour des Mages (cachette)",
    organization: "Solitaire",
    initiative: "+2",
    senses: "Vision dans le noir (sort), Détection +10",
    ac: { total: 18, touch: 12, flatFooted: 16 },
    hp: 45,
    hd: "9d4+18",
    saves: { fort: "+5", ref: "+5", will: "+9" },
    speed: "9 m",
    attack: "Bâton de force +5 (1d6+1)",
    fullAttack: "Bâton de force +5 (1d6+1)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Sorts de Magicien NLS 9"],
    specialQualities: ["Contre-mesures anti-nécromancie", "Portails Rapides"],
    abilities: { str: 8, dex: 14, con: 14, int: 19, wis: 14, cha: 10 },
    skills: "Art de la magie +16, Connaissances (arcanes) +16, Connaissances (plans) +14, Décryptage +12",
    feats: "Ecole Renforcée (Abjuration), Extension d'effet, Magie de Guerre",
    tactics: "Reste invisible, observe, et n'intervient que pour saboter un rituel ou fuir via un portail.",
    loot: "Parchemin de Dissipation Suprême, Clé de contournement des protections de la Tour.",
    isEnemy: false,
    role: "Ancien maître du Conseil, tente de saboter Thade de l'intérieur.",
    details: [
      "Motivation : Stopper Thade avant la fusion avec la Spirale.",
      "Attitude : Paranoïaque, exige des preuves de loyauté.",
      "Pouvoir : Portails rapides, contre-mesures anti-nécromancie.",
      "Usage : Peut fournir des clés de contournement dans la Tour."
    ],
  }
];

export const pnjPrincipaux = pnjPrincipauxRaw.map((npc) => createPnj(npc));
