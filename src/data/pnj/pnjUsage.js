// Usage tactique par PNJ pour la vue Antagoniste
export const pnjUsage = {
  thade_coren: {
    bookReference: "Bestiaire : Dossier 'Thade Coren' (Chap. Manipulations & Spirale)",
    scenarioContext:
      "Acte 2-3 : infiltration au Conclave, ensuite confrontation finale dans la Spirale (cercle des miroirs). Focus sur les sorts de contrôle pour déstabiliser les PJ avant de négocier.",
    spells: [
      {
        name: "Rayon affaiblissant",
        details: "+9 / DD 16 Str, -2 Str/Con pendant 1 tour, 4/j. Permet de fragiliser la cible principale avant l'assaut."
      },
      {
        name: "Corde animée",
        details: "Prépare un piège pour restreindre un seul PJ : +12 toucher, DD 15 Force, idéal pour neutraliser un tank temporairement."
      },
      {
        name: "Brume de dissimulation",
        details: "Prépare sa retraite ou se repositionner derrière un masque magique ; déclenchée après avoir lancé rayon ou immobilisation."
      }
    ],
    feats: [
      {
        name: "Science de l'initiative",
        details: "Donne une fenêtre pour activer un sort dès le tour 1 et imposer son plan tactique."
      },
      {
        name: "Incantation réflexe",
        details: "Permet de lancer un sort de réaction (rayon ou téléportation mineure) quand un PJ s'approche trop."
      }
    ],
    tacticSummary:
      "Démarre par des contrôles (corde animée, immobilisation), enchaîne avec rayon affaiblissant, puis se met en retrait pour converser/négocier. Garde une brume active pour fuir vers les étages supérieurs si mis en difficulté."
  },
  thorgar_pretre_nain: {
    bookReference: "Bestiaire : Portrait 'Thorgar, prêtre du Temple-Forgeron'",
    scenarioContext:
      "Acte 1-2 : support de la ligne de front dans le Temple. Utilise ses bénédictions pour renforcer les gardes et ses pouvoirs contre morts-vivants dans les catacombes.",
    spells: [
      {
        name: "Bénédiction",
        details: "+1 d'attaque et de sauvegardes pour les alliés proches (3/j). Lance dès l'engagement pour couvrir les gardes."
      },
      {
        name: "Canalisation d'énergie (positif)",
        details: "5/j, 2d6 PV; priorise les gardes blessés puis lui-même si menacé par mort-vivant."
      }
    ],
    feats: [
      {
        name: "Robustesse",
        details: "Permet de rester au contact et d'absorber les dégâts lors des charges ennemies."
      }
    ],
    tacticSummary:
      "Se place en première ligne pour canaliser/ soigner les alliés. S'il est menacé par morts-vivants, utilise canalisation pour les affaiblir ; refuse de fuir tant que reliques sont protégées."
  },
  sujet_zero: {
    bookReference: "Bestiaire : 'Sujet Zéro' (Annexe Spirale - laboratoire)",
    scenarioContext:
      "Acte 4 : combat d'anéantissement dans les laboratoires. Se concentre sur des attaques brutes et sa régénération, avec des pics de rage pour punir les soins.",
    spells: [],
    specialActions: [
      {
        name: "Rage contrôlée",
        details: "+2 dégâts pendant 5 tours, déclenchée quand il perd >30% PV avant de changer de cible."
      },
      {
        name: "Prise puissante",
        details: "+4 sur lutte, cherche à immobiliser le lanceur de sorts ou le guérisseur."
      }
    ],
    feats: [
      {
        name: "Science du critique",
        details: "Optimise les attaques de griffe en concentration sur le lanceur de sorts le plus vulnérable."
      },
      {
        name: "Attaque en puissance",
        details: "Souhaite des frappes maximales sur les tanks blessés."
      }
    ],
    tacticSummary:
      "Fonce sur la cible la plus bruyante, utilise sa régénération pour rester au contact ; si la régénération est stoppée, tente de fuir vers Thade."
  },
  assassin_masque: {
    bookReference: "Bestiaire urbain : 'Assassin Masqué' (Ruelles / Ombres)",
    scenarioContext:
      "Acte 1-3 : embuscade dans les toits. Préfère frapper isolément avant que les gardes se regroupent.",
    spells: [],
    specialActions: [
      {
        name: "Attaque sournoise",
        details: "+3d6 dès qu'il frappe un ennemi en dehors du combat."
      },
      {
        name: "Poison enduit",
        details: "Application sur dague (Vig DD 15), utilisé sur ses premières attaques pour maximiser la victime engagée."
      }
    ],
    feats: [
      {
        name: "Tir de précision",
        details: "Ouverture sur la cible isolée (dague ou arbalète)."
      },
      {
        name: "Science de l'initiative",
        details: "Permet d'agir avant la majorité de la troupe et de choisir sa cible."
      }
    ],
    tacticSummary:
      "Frappe depuis les ombres, vise les cibles isolées, peut négocier ou s'enfuir si surpris."
  },
  etudiant_renvoye: {
    bookReference: "Scénario 1 – Acte 1, Scène 3 : Les Mercenaires Érudits",
    scenarioContext:
      "Escouade d'étudiants déchus opérant dans le cimetière. Ils cherchent à prélever des ossements pour la fraternité Nyx.",
    spells: [
      {
        name: "Rayon de givre",
        details: "+2 toucher, 1d3 froid ; utilisé pour ralentir un PJ menaçant pendant que le groupe se repositionne."
      }
    ],
    specialActions: [
      {
        name: "Tactique de groupe",
        details: "+1 aux jets d'attaque s'ils sont adjacents à un allié ; ils restent groupés derrière les tombes."
      }
    ],
    feats: [
      {
        name: "Science de l'initiative",
        details: "Ils agissent tôt pour lancer un sort mineur ou prendre l'avantage de position."
      }
    ],
    tacticSummary:
      "Commencent groupés derrière des tombes (couvert). Un lance un sort mineur pour couvrir la fuite avec le sac d'os, les autres font écran. Se rendent rapidement si isolés ou menacés."
  },
  durnik_guilde_mineurs: {
    bookReference: "Bestiaire : Dossier 'Durnik, chef des mineurs' (Actes 2-3)",
    scenarioContext:
      "Acte 2 : surveille les accès aux tunnels supérieurs. Utilise son terrain pour créer des goulots d'étranglement et protéger les mineurs.",
    spells: [],
    specialActions: [
      {
        name: "Cri d'alarme",
        details: "1/j, effectue un test de Volonté DD 14 pour retirer les PJ du support moral (-1 moral, secoué 1d4 tours)."
      }
    ],
    feats: [
      {
        name: "Attaque en puissance",
        details: "Maximise les dégâts avec sa hache pour punir les intrus."
      },
      {
        name: "Robustesse",
        details: "Reste au contact même quand les tunnels s'effondrent."
      }
    ],
    tacticSummary:
      "Se place devant les berges minées, frappe en première ligne, puis recule derrière des arcs de pierres. Fait reculer les PJ quand deux gardes tombent."
  },
  capitaine_garde_temple: {
    bookReference: "Bestiaire : 'Capitaine de la garde du Temple' (Quartier du Savoir)",
    scenarioContext:
      "Acte 1 : défend l'accès au Temple-Forgeron. Coordonne les gardes et use de ses ordres pour encadrer les civils.",
    spells: [],
    specialActions: [
      {
        name: "Ordre de tir",
        details: "+1 aux jets d’attaque des gardes à 9 m pendant 1 tour (1/j)."
      }
    ],
    feats: [
      {
        name: "Science de l'initiative",
        details: "Initie les charges coordonnées avant que les PJ ne s'organisent."
      },
      {
        name: "Robustesse",
        details: "Absorbe les attaques pendant qu'il protège un passage."
      }
    ],
    tacticSummary:
      "Reste en formation serrée, couvre la retraite des civils et force les PJ à passer par les gardes. Plie si l'autorité du Temple l'exige."
  },
  marchand_fou_mercane: {
    bookReference: "Bestiaire : 'Marchand Fou' (Spirale – Couloirs de Chair)",
    scenarioContext:
      "Acte 4 : apparait en négociateur instable dans les couloirs de la Spirale, prêt à sacrifier des objets contre des informations.",
    spells: [
      {
        name: "Porte dimensionnelle (inné)",
        details: "1/j pour s'échapper ou faire traverser un allié, déclenché après avoir vendu un objet."
      },
      {
        name: "Invisibilité (inné)",
        details: "2/j pour s'éclipser après une transaction ou un échec tactique."
      }
    ],
    specialActions: [
      {
        name: "Détection de la magie",
        details: "Continu, repère les PJ essayant de mentir ou de dissimuler un objet précieux."
      }
    ],
    feats: [
      {
        name: "Science de l'initiative",
        details: "Avance les négociations avant que la troupe ne se concentre."
      },
      {
        name: "Volonté de fer",
        details: "Résiste aux menaces mentales ou aux tentatives de lui faire abandonner un marché."
      }
    ],
    tacticSummary:
      "Négocie, propose des deals, puis se rend invisible ou franchit une porte dimensionnelle si la situation tourne au combat."
  },
  lysa_exploratrice_perdue: {
    bookReference: "Bestiaire : 'Lysa, exploratrice perdue' (Spirale – Premier cercle)",
    scenarioContext:
      "Acte 3 : guide les PJ puis doit se défendre contre des chasseurs. Préfère éviter le combat direct.",
    spells: [],
    specialActions: [
      {
        name: "Attaque sournoise",
        details: "+2d6 quand elle frappe depuis la cachette ou après une évasion."
      }
    ],
    feats: [
      {
        name: "Tir de précision",
        details: "Finit les créatures blessées à distance."
      },
      {
        name: "Esquive",
        details: "Reste hors de portée avec des déplacements précis."
      }
    ],
    tacticSummary:
      "Observe d'abord, coopère quand on partage ressources, puis frappe en retrait en visant les ouvertures ; fuit si la situation dégénère."
  },
  inevitable_contremetre: {
    bookReference: "Bestiaire : 'Inévitable Contremètre' (Spirale – Salle des Engrenages)",
    scenarioContext:
      "Acte 4 : surveille l'accès mécanique de la Spirale. Alterne sabots et rayon de stase pour neutraliser les lanceurs de sorts.",
    spells: [],
    specialActions: [
      {
        name: "Rayon de Stase",
        details: "+9, inflige 1d6 froid + ralentissement (Vol DD 17 pour annuler) ; priorise les lanceurs de sorts."
      }
    ],
    feats: [
      {
        name: "Robustesse",
        details: "Supporte les attaques magiques lorsque son champ anti-magie est actif."
      },
      {
        name: "Science de l'initiative",
        details: "Agit avant les cantrips ennemis."
      }
    ],
    tacticSummary:
      "Bloque les couloirs avec son marteau de gravité, déclenche son champ anti-magie localisé, puis vise les lanceurs avec le rayon de stase ; peut négocier si l'anomalie de Thade est clairement démontrée."
  },
  gardien_cimetiere: {
    bookReference: "Bestiaire : 'Gardien du Cimetière' (Terrasse du Cimetière)",
    scenarioContext:
      "Acte 2 : protège les sépultures contre les profanateurs et les morts-vivants ; sert d'allié mais peut repousser les PJ si la peur s'installe.",
    spells: [],
    specialActions: [
      {
        name: "Bannissement Mineur des Morts-Vivants",
        details: "1/j, NLS 4, agit comme une dissipation ciblée pour repousser les morts-vivants autour de lui."
      }
    ],
    feats: [
      {
        name: "Robustesse",
        details: "Soutient la ligne quand les morts-vivants attaquent en masse."
      },
      {
        name: "Vigilance",
        details: "Maintient les PJ en sécurité avec une perception accrue de la peur et de la trahison."
      }
    ],
    tacticSummary:
      "Privilégie la prévention : avertit avant d’attaquer, soutient les PJ contre les profanations, puis se replie dans le mausolée si submergé."
  }
};
