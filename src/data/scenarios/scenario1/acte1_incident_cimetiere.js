/**
 * Scénario 1 - Acte 1 : L'Incident du Cimetière
 * L'Auberge du Pic Brisé & Le Cimetière des Terrasses
 */

export const acte1 = {
  title: "ACTE 1 : L'INCIDENT DU CIMETIÈRE",
  stake:
    "Identifier l'auteur des profanations du cimetière nain. avant une escalade de violence entre nains et humains.",
  location: "L'Auberge du Pic Brisé & Le Cimetière des Terrasses.",
  scenes: [
    {
      title: "Scène 1 : L'Offre du Prêtre",
      type: "Social",
      image: "./images/scenes/auberge_pic_brise.jpg",
      locationId: "auberge_pic_brise",
      npcIds: ["thorgar_pretre_nain", "aubergiste_pic_brise"],
      description: {
        resume:
          "Thorgar missionne les PJ pour enquêter sur des profanations de tombes naines récentes.",
        visuel:
          "Poutres basses en chêne noirci, fumée de pipe épaisse, éclats de voix graves. Un panneau « MAGIE INTERDITE » est cloué au mur.",
        audio:
          "Le choc des chopes, le crépitement du foyer, et un silence pesant à l'entrée des étrangers.",
        odeur: "Bière brune forte, viande rôtie et sueur de travail.",
        lumiere: "Tamisée par la fumée, foyer central ardent aux reflets orangés.",
      },
      narration: {
        declencheur:
          "Thorgar, le visage marqué par la fatigue, vous fait signe de vous asseoir.",
        texte_a_lire:
          "Thorgar nettoie distraitement une tache de bière sur la table. Il ne vous regarde pas directement. « On a ouvert les tombes des Thanes. La garde s'en moque, mais le clan est à bout de nerfs. Si je ne trouve pas des extérieurs pour régler ça discrètement, mes frères vont descendre dans la rue et brûler le quartier humain. Retrouvez les os. Le reste, je m'en fiche. »",
        contexte_mj:
          "Thorgar engage des humains (les PJ) parce qu'il sait que si un Nain s'en occupe, ça finira en lynchage public. Il est nerveux, surveille les autres tables du coin de l'œil et parle à voix basse.",
        objectif: "Accepter le contrat et obtenir des informations sur les tombes visées.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 15) : Négocier une avance ou une prime supplémentaire (50 po).",
          "Connaissances (Folklore) (DD 12) : Apprendre que les tombes visées sont celles des Thanes (chefs de clan).",
        ],
        indices: ["Les tombes ne sont pas vidées de leur or, mais seul certains os sont prélevés."],
        recompenses:
          "200 à 300 po (groupe) + Amulette de protection contre les morts-vivants (1 usage).",
      },
      transitions: {
        success:
          "Thorgar offre une avance et indique le chemin du cimetière et le nom du gardien.",
        fail:
          "Thorgar les engage par nécessité mais les fait surveiller par un mineur.",
      },
    },
    {
      title: "Scène 2 : Un Cimetière dans la Brume",
      type: "Social",
      image: "./images/scenes/gardien_cimetiere.jpg",
      locationId: "cimetiere_terrasse",
      npcIds: ["gardien_cimetiere"],
      description: {
        resume:
          "Les PJ négocient l'accès au cimetière avec le gardien et recueillent des informations sur les méthodes et la cible des profanateurs.",
        visuel:
          "Une grille monumentale en fer forgé. Une silhouette massive (le Gardien) surveille l'entrée, arbalète au poing.",
        audio:
          "Grincement des chaînes et le cliquetis métallique du mécanisme d'arbalète.",
        odeur: "un parfum de terre noire saturée d'eau et de pierre moisie.",
        lumiere: "Le halo jaune et vacillant d'une lanterne sourde.",
      },
      narration: {
        declencheur: "Les PJ s'approchent du portail principal.",
        texte_a_lire:
          "Un carreau d'arbalète vient se planter dans la terre, à un mètre de vos bottes. Une voix rauque émerge de l'obscurité : « Le prochain est pour vos genoux. Reculez. »",
        contexte_mj:
          "Le Gardien ne sort jamais totalement de l'ombre de sa guérite ; on ne voit que le reflet de sa lanterne sur la pointe de son arbalète. Jouez-le comme un homme au bout du rouleau qui voit des ennemis partout. Chaque geste brusque des PJ doit être ponctué par un grognement ou un doigt qui se crispe sur la détente.",
        objectif: "Gagner l'accès et repérer la zone de la prochaine profanation.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 12) : Calmer le Gardien. Succès : Il offre des carreaux d'arbalète en argent (x5).",
          "Détection (DD 14) : Repérer des traces de pas légères (bottes de citadins) près de la crypte Nord.",
          "Art de la Magie (DD 15) : Identifier l'odeur d'ozone comme une trace de nécromancie de « conservation ».",
        ],
        indices: [
          "Le Gardien confirme : « Ils ont emporté le fémur gauche de l'ancien Thane. Pourquoi un fémur ? »",
        ],
        recompenses:
          "Avantage tactique (Surprise) pour la scène suivante. Le Gardien peut prêter main-forte (Guerrier Niv 2).",
      },
      transitions: {
        success: "Les PJ se mettent en embuscade près de la crypte.",
        fail:
          "Le Gardien refuse l'entrée. Les PJ arrivent trop tard : le combat commence alors que les pilleurs s'enfuient.",
      },
    },
    {
      title: "Scène 3 : Les Pilleurs",
      type: "Combat",
      image: "./images/scenes/scene_3.jpg",
      locationId: "cimetiere_terrasse",
      npcIds: ["etudiant_renvoye", "homme_armes_lvl1", "squelette", "gardien_cimetiere"],
      description: {
        resume:
          "Les PJ interceptent un groupe de pilleurs en activité et découvrent que l'opération est dirigée par Jaren, un ancien étudiant en magie.",
        visuel:
          "Trois mercenaires creusent sous l'œil vigilant d'un jeune homme en robe d'étudiant. Celui-ci, qui semble diriger les opérations, examine un crâne à la lumière de sa lanterne",
        audio: "Bruit des pelles contre la pierre et rire nerveux de l'étudiant.",
        odeur:
          "Une odeur de terre grasse et d'humus trempé s'élève du trou fraîchement creusé.",
        lumiere: "Lumière crue de la lampe-tempête au centre de la scène.",
      },
      narration: {
        declencheur: "L'assaut des PJ ou une maladresse.",
        texte_a_lire:
          "L'étudiant lâche son crâne de surprise. Il bouscule l'un des mercenaires pour se mettre à couvert et hurle d'une voix suraiguë : « Protégez-moi ! Ils ne doivent pas voir ça ! »",
        contexte_mj:
          "Jaren incarne l'arrogance de l'étudiant gâté. Il aboie des ordres, mais se cache derrière ses mercenaires au moindre danger. Jouez le contraste entre les mercenaires, silencieux et efficaces, et Jaren qui devient de plus en plus hystérique. Il n'est pas courageux, s'il est acculé, il tentera d'acheter sa vie, abandonnant toute dignité.",
        objectif: "Neutraliser les gardes et capturer Jaren vivant.",
      },
      mecaniques: {
        defis: [
          "Combat : 3 Brutes (Guerrier 1) et Jaren (Magicien 1 - Spécialisation Nécromancie).",
          "Intimidation (DD 13) : Faire fuir les mercenaires si Jaren est blessé.",
          "Magie Instable : Tout sort de zone a 20% de chance de réanimer un tas d'os (Squelette simple) qui attaque tout le monde.",
        ],
        indices: [
          "Jaren porte une broche de la Fraternité Nyx.",
          "Une liste de noms nains avec la mention « Compatible ».",
        ],
        recompenses: "Bourse de 50 po + Baguette de Lecture de la Magie (5 charges).",
      },
      transitions: {
        success: "Jaren est capturé, prêt à parler.",
        fail: "Jaren s'enfuit dans les bois, laissant sa sacoche derrière lui.",
      },
    },
    {
      title: "Scène 4 : L'Autopsie du Crime",
      type: "Investigation",
      image: "./images/scenes/jaren_death.jpg",
      locationId: "cimetiere_terrasse",
      npcIds: ["etudiant_renvoye", "gardien_cimetiere"],
      description: {
        resume:
          "Jaren meurt sous l'effet d'un sceau magique avant de pouvoir témoigner, laissant des indices reliant l'affaire à l'Université.",
        visuel:
          "Jaren tremble violemment. Ses yeux brillent d'une lueur arcanique instable.",
        audio: "Un bourdonnement haute fréquence qui fait siffler les oreilles.",
        odeur: "Ozone et brûlé.",
        lumiere: "Flashs intermittents provenant des veines du cou de Jaren.",
      },
      narration: {
        declencheur: "Les PJ posent une question sur « Le Maître ».",
        texte_a_lire:
          "Dès que vous mentionnez son maître, Jaren se fige. Une veine noire pulse violemment sur sa tempe. Il n'a même pas le temps de crier : ses yeux se révulsent, du sang coule de son nez et il s'effondre comme une marionnette dont on a coupé les fils.",
        contexte_mj:
          "L'objectif est de choquer les joueurs. La mort de Jaren doit ressembler à une exécution. Décrivez la violence soudaine du sort, le corps qui lâche sous une pression invisible. Cela doit installer un climat de paranoïa.",
        objectif: "Comprendre que l'ennemi est au sein de l'Université.",
      },
      mecaniques: {
        defis: [
          "Art de la Magie (DD 16) : Identifier le sort comme une variante interdite de « Vœu de Silence ».",
          "Premiers Secours (DD 15) : Constater que la mort est d'origine magique et instantanée.",
          "Perception (DD 12) : Trouver sur le corps une invitation pour une conférence privée au nom du Professeur Thade Coren.",
        ],
        indices: ["La broche de la Fraternité Nyx est un laissez-passer pour les quartiers étudiants."],
        recompenses:
          "XP d'investigation. Gratitude de Thorgar pour la récupération des restes.",
      },
      transitions: { success: "Fin de l'Acte 1. Les PJ ont un nom (Coren) et une destination (l'Université)." },
    },
  ],
};
