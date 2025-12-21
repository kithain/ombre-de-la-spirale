export const scenario1 = {
  id: 1,
  title: "SCÉNARIO 1 : LE MURMURE DES OS",
  level: "Niveaux 1-3",
  system: "D&D 3.5",
  synopsis:
    "Une série de profanations frappe le cimetière nain de Val-d'Ombre. Ce qui ressemble à du pillage cache les expériences interdites d'un étudiant, Jaren, manipulé par le Professeur Thade Coren. Les aventuriers sont engagés pour « nettoyer » le problème, ignorant qu'il utilise les PJ pour effacer ses traces.",
  acts: [
    {
      title: "ACTE 1 : L'INCIDENT DU CIMETIÈRE",
      stake: "Identifier que les profanations visent des composants spécifiques (OS de Thane) et non de l'or.",
      location: "L'Auberge du Pic Brisé & Le Cimetière des Terrasses.",
      scenes: [
        {
          title: "Scène 1 : L'Offre du Prêtre",
          type: "Social",
          locationId: "auberge_pic_brise",
          npcIds: ["thorgar_pretre_nain", "brand_aubergiste"],
          description: {
            sous_titre: "Ici, on respecte la bière et les ancêtres.",
            visuel:
              "Poutres basses en chêne noirci, fumée de pipe épaisse, éclats de voix graves. Un panneau « MAGIE INTERDITE » est cloué au mur.",
            audio: "Le choc des chopes, le crépitement du foyer, et un silence pesant à l'entrée des étrangers.",
            odeur: "Bière brune forte, viande rôtie et sueur de travail.",
            lumiere: "Tamisée par la fumée, foyer central ardent aux reflets orangés.",
          },
          narration: {
            declencheur: "Thorgar, un nain au regard d'acier, fait signe aux PJ de s'approcher de sa table isolée.",
            texte_a_lire:
              "« Le cimetière a été profané. La garde ne voit que des squelettes là où dorment nos pères, mais pour nous, c'est une insulte qui se lave dans le sang. Pas question de souiller le Livre des Rancunes avec des noms de vulgaires pillards ! Retrouvez-les, faites-leur payer et ramenez les restes de nos ancêtres. »",
            contexte_mj:
              "Thorgar est dégoûté. Pour lui, l'argent est secondaire face à l'affront fait aux nains. Il cherche des gens « discrets » et extérieurs à la ville.",
            objectif: "Accepter le contrat et obtenir des informations sur les tombes visées.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 15) : Négocier une avance ou une prime supplémentaire (50 po).",
              "Connaissances (Folklore) (DD 12) : Apprendre que les tombes visées sont celles de la lignée des Thanes (chefs de clan).",
            ],
            indices: ["Les tombes ne sont pas vidées de leur or, mais certains os sont prélevés avec une précision chirurgicale."],
            recompenses: "200 à 300 po (groupe) + Amulette de protection contre les morts-vivants (1 usage).",
          },
          transitions: {
            success: "Thorgar offre une avance et indique le chemin du cimetière.",
            fail: "Thorgar les engage par nécessité mais les fait surveiller par un mineur.",
          },
        },
        {
          title: "Scène 2 : Un Cimetière dans la Brume",
          type: "Investigation",
          locationId: "cimetiere_terrasse",
          npcIds: ["gardien_cimetiere"],
          description: {
            sous_titre: "Une nuit sans lune sur les terrasses funéraires.",
            visuel:
              "Une grille monumentale en fer forgé. Une silhouette massive (le Gardien) surveille l'entrée, arbalète au poing.",
            audio: "Grincement des chaînes et le cliquetis métallique du mécanisme d'arbalète.",
            odeur: "Terre humide et une pointe d'ozone (résidu arcanique).",
            lumiere: "Le halo jaune et vacillant d'une lanterne sourde.",
          },
          narration: {
            declencheur: "Les PJ s'approchent du portail principal.",
            texte_a_lire: "« N'essayez même pas. J'ai une ligne de vue dégagée. Donnez-moi une seule raison de ne pas vous clouer au portail. »",
            contexte_mj:
              "Le Gardien est épuisé et sur les nerfs. Si les PJ mentionnent Thorgar ou montrent le contrat, il s'adoucit, baisse son arme mais reste méfiant.",
            objectif: "Gagner l'accès et repérer la zone de la prochaine profanation.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 12) : Calmer le Gardien. Succès : Il offre des carreaux d'arbalète en argent (x5).",
              "Détection (DD 14) : Repérer des traces de pas légères (bottes de citadins) près de la crypte Nord.",
              "Art de la Magie (DD 15) : Identifier l'odeur d'ozone comme une trace de nécromancie de « conservation ».",
            ],
            indices: ["Le Gardien confirme : « Ils ont emporté le fémur gauche de l'ancien Thane. Pourquoi un fémur ? »"],
            recompenses: "Avantage tactique (Surprise) pour la scène suivante. Le Gardien peut prêter main-forte (Guerrier Niv 2).",
          },
          transitions: {
            success: "Les PJ se mettent en embuscade près de la crypte.",
            fail: "Le Gardien refuse l'entrée. Les PJ arrivent trop tard : le combat commence alors que les pilleurs s'enfuient.",
          },
        },
        {
          title: "Scène 3 : Les Pilleurs et l'Héritier",
          type: "Combat",
          locationId: "cimetiere_terrasse",
          npcIds: ["etudiant_renvoye", "brutes_cimetiere"],
          description: {
            sous_titre: "L'embuscade près de la crypte ouverte.",
            visuel:
              "Trois mercenaires creusent. Un jeune homme en robe d'étudiant examine un crâne à la lumière d'une lampe magique.",
            audio: "Bruit des pelles contre la pierre et rire nerveux de l'étudiant.",
            odeur: "Odeur chimique de sel d'alchimiste.",
            lumiere: "Lumière crue de la lampe-tempête au centre de la scène.",
          },
          narration: {
            declencheur: "L'assaut des PJ ou une maladresse.",
            texte_a_lire:
              "Le jeune homme sursaute : « Non ! Il nous manque encore la colonne vertébrale du Premier Forgeron ! Le Maître ne pardonnera pas un retard ! Tuez-les ! »",
            contexte_mj: "L'étudiant est Jaren. Il est fanatique mais lâche. Les mercenaires (brutes) font écran.",
            objectif: "Neutraliser les gardes et capturer Jaren vivant.",
          },
          mecaniques: {
            defis: [
              "Combat : 3 Brutes (Guerrier 1) et Jaren (Magicien 1 - Spécialisation Nécromancie).",
              "Intimidation (DD 13) : Faire fuir les mercenaires si Jaren est blessé.",
              "Magie Instable : Tout sort de zone a 20% de chance de réanimer un tas d'os (Squelette simple) qui attaque tout le monde.",
            ],
            indices: ["Jaren porte une broche de la Fraternité Nyx.", "Une liste de noms nains avec la mention « Compatible »."],
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
          locationId: "cimetiere_terrasse",
          npcIds: ["etudiant_renvoye", "gardien_cimetiere"],
          description: {
            sous_titre: "Un interrogatoire qui tourne au drame.",
            visuel: "Jaren tremble violemment. Ses yeux brillent d'une lueur arcanique instable.",
            audio: "Un bourdonnement haute fréquence qui fait siffler les oreilles.",
            odeur: "Ozone et brûlé.",
            lumiere: "Flashs intermittents provenant des veines du cou de Jaren.",
          },
          narration: {
            declencheur: "Les PJ posent une question sur « Le Maître ».",
            texte_a_lire:
              "Il ouvre la bouche pour répondre, veut négocier sa vie. Ses mains se plaquent sur ses tempes tandis qu'il hurle sans qu'aucun son ne sorte, avant de s'effondrer, l'esprit brisé.",
            contexte_mj:
              "Thade Coren a placé un « Sceau de Censure » sur son élève. La trahison déclenche une hémorragie cérébrale magique. Jaren meurt sur le coup.",
            objectif: "Comprendre que l'ennemi est au sein de l'Université.",
          },
          mecaniques: {
            defis: [
              "Art de la Magie (DD 16) : Identifier le sort comme une variante interdite de « Vœu de Silence ».",
              "Premiers Secours (DD 15) : Constater que la mort est d'origine magique et instantanée.",
              "Perception (DD 12) : Trouver sur le corps une invitation pour une conférence privée au nom du Professeur Thade Coren.",
            ],
            indices: ["La broche de la Fraternité Nyx est un laissez-passer pour les quartiers étudiants."],
            recompenses: "XP d'investigation. Gratitude de Thorgar pour la récupération des restes.",
          },
          transitions: {
            success: "Fin de l'Acte 1. Les PJ ont un nom (Coren) et une destination (l'Université).",
          },
        },
      ],
    },
    {
      title: "ACTE 2 : LA PISTE ARCANIQUE",
      stake: "Identifier le commanditaire et se faire manipuler par Thade Coren.",
      location: "Université de Magie de Val-d'Ombre.",
      scenes: [
        {
          title: "Scène 1 : La Fraternité Dissoute",
          type: "Investigation",
          locationId: "universite_arcane",
          npcIds: ["etudiant_bavard"],
          description: {
            sous_titre: "L'Université est un labyrinthe de pierre blanche et de secrets.",
            visuel:
              "Des tours vertigineuses reliées par des ponts de cristal, des étudiants en robes colorées discutant sous des arbres aux feuilles d'argent.",
            audio: "Le carillon régulier des cloches de cours, le murmure constant des débats philosophiques.",
            odeur: "Poussière de bibliothèque, encre fraîche et thé à la bergamote.",
            lumiere: "Une lumière zénithale, presque trop éclatante, ne laissant aucune place aux ombres.",
          },
          narration: {
            declencheur: "Les PJ présentent la broche de Nyx à un étudiant dans la cour.",
            texte_a_lire: `L'apprenti s'écarte, nerveux : « Cette chose... c'est la marque de la Fraternité Nyx. Ils ont été chassés par le Professeur Coren après leurs "expériences nocturnes". Jaren est devenu fou sur la fin. Si vous voulez des réponses, allez voir Coren... c'est le seul qui a eu le cran de les mettre dehors. »`,
            contexte_mj: "L'Université veut étouffer le scandale. Orienter les PJ vers Thade Coren comme figure d'autorité morale.",
            objectif: "Localiser le bureau de Thade Coren et recueillir les bruits de couloir.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 13) : Convaincre l'étudiant de parler davantage.",
              "Renseignements (DD 15) : Apprendre que Jaren était le protégé de Coren.",
            ],
            indices: [
              "Rumeurs : On raconte que Jaren n'a pas quitté les lieux en silence. Il hurlait que son expulsion était une « erreur monumentale » et que bientôt, même le Conseil des Mages devra se mettre à genoux devant son prochain maître.",
            ],
            recompenses: "Localisation du bureau de Thade.",
          },
          transitions: {
            success: "Rencontre avec Thade (Scène 2).",
            fail: "Les PJ sont escortés par la garde universitaire jusqu'au bureau de Coren pour « interrogatoire ».",
          },
        },
        {
          title: "Scène 2 : Le Professeur Bienveillant",
          type: "Social",
          locationId: "bureau_thade_coren",
          npcIds: ["thade_coren"],
          description: {
            sous_titre: "Le bureau d'un homme d'ordre et de loi magique.",
            visuel: "Murs tapissés de grimoires impeccables. Thade est assis derrière un bureau de chêne, élégant et calme.",
            audio: "Le grattement d'une plume de phénix et le tic-tac d'une horloge astronomique.",
            odeur: "Cire de bougie chaude et lavande séchée.",
            lumiere: "Tamisée par des vitraux illustrant les lois de la magie.",
          },
          narration: {
            declencheur: "Entrée dans le bureau.",
            texte_a_lire: `Thade soupire à la vue de la broche : « Jaren... Mon plus grand regret. Un génie corrompu par l'impatience. Ses propos sur le Conseil ? La démence d'un enfant qui cherche à se donner de l'importance. Mais s'il s'enfonce dans la nécromancie, il est une menace pour nous tous. Ramenez-moi ses notes pour que je puisse évaluer les dégâts. »`,
            contexte_mj:
              "Thade utilise la « folie » de Jaren comme couverture. Il veut récupérer les résultats des tests de Jaren (le Grand Œuvre) sans s'exposer.",
            objectif: "Accepter la mission officielle de traquer Jaren.",
          },
          mecaniques: {
            defis: [
              "Psychologie (DD 18) : Thade semble sincère, mais son détachement face aux menaces contre le Conseil est troublant.",
              "Négociation (DD 14) : Obtenir 100 po d'avance pour « frais d'enquête ».",
            ],
            indices: ["Thade possède une clé d'argent sur son bureau, identique à un symbole aperçu sur les croquis de Jaren."],
            recompenses: "Sauf-conduit de l'Université + 1 parchemin de Dissipation de la Magie.",
          },
          transitions: {
            success: "Vers le taudis de Jaren (Scène 3).",
          },
        },
        {
          title: "Scène 3 : La Descente aux Enfers",
          type: "Exploration",
          locationId: "vieille_ville_taudis_jaren",
          npcIds: [],
          description: {
            sous_titre: "La planque de Jaren donne accès aux souterrains de la ville.",
            visuel:
              "Une chambre délabrée. Les murs sont couverts de schémas de squelettes crayonnés au charbon. Un tapis cache une trappe vers les égouts.",
            audio: "Le sifflement du vent et le grondement lointain de l'eau souterraine.",
            odeur: "Moisissure et résidus alchimiques âcres.",
            lumiere: "Pénombre, seulement trouée par la lanterne des PJ.",
          },
          narration: {
            declencheur: "Fouille approfondie de la pièce.",
            texte_a_lire: `Au-dessus de la trappe, une dernière inscription au charbon : « LA SPIRALE CHANTE, ET JE DOIS LUI RÉPONDRE. » L'odeur d'ozone qui s'échappe de l'ouverture confirme qu'une magie puissante a été activée en bas très récemment.`,
            contexte_mj:
              "Jaren a fui. Il est déjà en train de préparer le terrain pour le « prochain maître » dans les fondations de la ville.",
            objectif: "S'enfoncer dans les égouts pour trouver le laboratoire.",
          },
          mecaniques: {
            defis: [
              "Fouille (DD 12) : Trouver un plan partiel des égouts menant au Manoir Van Kel.",
              "Art de la Magie (DD 14) : Identifier les schémas comme une tentative de créer un réceptacle pour une âme puissante.",
            ],
            indices: ["Une correspondance déchirée mentionnant que « les composants nains sont prêts pour l'ascension »."],
            recompenses: "Passage vers l'Acte 3 (bonus de +2 en Survie pour naviguer dans les égouts).",
          },
          transitions: {
            success: "Début de l'Acte 3 : Les Égouts et le Labyrinthe.",
          },
        },
      ],
    },
    {
      title: "ACTE 3 : LES ÉGOUTS ET LE LABYRINTHE",
      stake: "Survivre à l'environnement hostile et localiser l'entrée du repaire secret de Jaren.",
      location: "Égouts de Val-d'Ombre & Fondations du vieux manoir.",
      scenes: [
        {
          title: "Scène 1 : Le Kobold Témoin",
          type: "Social / Investigation",
          locationId: "egouts_croisement",
          npcIds: ["sniv_kobold"],
          description: {
            sous_titre: "Un habitant des profondeurs qui a tout vu.",
            visuel: "Des tunnels de briques suintantes. Deux petits yeux jaunes brillent de terreur dans un conduit de trop-plein.",
            audio: "Le clapotis de l'eau noire et le claquement de dents frénétique d'une petite créature.",
            odeur: "Soufre, eaux usées et odeur de viande avariée.",
            lumiere: "La lumière des PJ projette des ombres déformées sur les murs incurvés.",
          },
          narration: {
            declencheur: "Les PJ entendent des pleurs étouffés derrière une grille de fer.",
            texte_a_lire:
              "« Pas taper ! Sniv rien fait ! L'homme en robe violette est fou ! Il a pris les autres... il a pris mes frères pour “porter les os”. Il parle à une spirale qui brille et les frères ne reviennent jamais ! »",
            contexte_mj:
              "Sniv est l'un des rares survivants de sa tribu, utilisée comme main-d'œuvre par Jaren. Il peut servir de guide mais il est terrifié.",
            objectif: "Calmer Sniv pour obtenir des informations sur les pièges et l'entrée du manoir.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 12) : Calmer Sniv (lui offrir de la nourriture réduit le DD à 10).",
              "Intimidation (DD 15) : Le forcer à parler, mais il risque de s'enfuir à la première occasion.",
            ],
            indices: ["Sniv révèle : « L'homme attend son maître. Il dit que les murs vont tomber et que le Conseil va brûler. »"],
            recompenses: "Sniv montre un passage dérobé qui permet d'éviter un piège à fosse dans le couloir suivant.",
          },
          transitions: {
            success: "Sniv guide les PJ vers la porte du manoir (Scène 2).",
            fail: "Sniv s'enfuit dans les tuyaux. Les PJ doivent naviguer à l'aveugle (Survie DD 15) pour éviter de se perdre.",
          },
        },
        {
          title: "Scène 2 : La Porte du Manoir Englouti",
          type: "Combat / Investigation",
          locationId: "egouts_entree_manoir",
          npcIds: ["squelettes_nains_gardiens"],
          description: {
            sous_titre: "Une porte noble en fer forgé, incongrue au milieu des immondices.",
            visuel:
              "Une arche de pierre magnifique incrustée dans la paroi d'égout. Deux squelettes nains en armures de cérémonie bloquent le passage.",
            audio: "Le cliquetis sec des os contre le métal et un murmure arcanique venant de derrière la porte.",
            odeur: "L'air devient soudainement sec, froid et sent la poussière de tombe.",
            lumiere: "Une lueur violette instable filtre à travers le trou de la serrure.",
          },
          narration: {
            declencheur: "Les PJ arrivent à portée de vue de la porte.",
            texte_a_lire:
              "Les gardiens ne sont pas de simples morts-vivants. Sur leurs plastrons brisés, vous reconnaissez les sceaux des clans nains profanés dans l'acte 1. Ils lèvent leurs haches avec une lenteur rituelle. Derrière eux, la porte semble pulser comme un cœur malade.",
            contexte_mj:
              "C'est un combat symbolique. Les PJ voient ici le résultat direct des profanations. La porte est scellée magiquement et réagit à la broche de la Fraternité Nyx.",
            objectif: "Vaincre les gardiens et forcer ou déverrouiller l'entrée du laboratoire.",
          },
          mecaniques: {
            defis: [
              "Combat : 2 Squelettes de Guerriers Nains (RD 5/Contondant, CA 16).",
              "Savoir arcanique (DD 14) : Identifier le verrou magique comme étant lié à la signature de Thade Coren.",
            ],
            indices: ["L'un des squelettes porte une plaque avec le nom « Thane Durin » - celui dont Jaren cherchait le fémur."],
            recompenses: "Hache de maître (naine) + la broche de Nyx s'illumine, agissant comme une clé pour la porte.",
          },
          transitions: {
            success: "La porte s'ouvre sur un escalier montant vers le laboratoire (Acte 4).",
            fail: "Le combat dure trop longtemps. L'alarme est donnée et l'Acte 4 commence en alerte maximale.",
          },
        },
      ],
    },
    {
      title: "ACTE 4 : LE RITUEL DE LA SPIRALE",
      stake: "Arrêter l'activation de la Spirale et découvrir qui a pris la suite de Jaren.",
      location: "Laboratoire secret du Manoir Van Kel.",
      scenes: [
        {
          title: "Scène 1 : Le Sanctuaire d'Os",
          type: "Exploration",
          locationId: "manoir_labo",
          npcIds: ["kaela_la_nyx"],
          description: {
            sous_titre: "Le travail de Jaren continue, même sans lui.",
            visuel:
              "Une immense spirale d'os nains tournoie au centre. Une femme en robe de mage déchirée (Kaela) verse du sang sur les runes au sol.",
            audio:
              "Un bourdonnement grave. Kaela hurle : « Jaren était faible ! Il a laissé son esprit se briser, mais son œuvre lui survivra ! »",
            odeur: "Ozone et fer (sang).",
            lumiere: "Pulsations violettes aveuglantes.",
          },
          narration: {
            declencheur: "Entrée dans la salle.",
            texte_a_lire:
              "Kaela se tourne vers vous, les yeux injectés de sang. « Le Maître avait prévu la chute de Jaren. Il n'était qu'un pion pour tester la résistance des nains. Mais moi... moi je verrai le Conseil des Mages s'agenouiller devant son prochain maître ! »",
            contexte_mj:
              "Kaela est la véritable fanatique. Elle a récupéré les restes après la mort de Jaren dans l'acte 1 et a terminé l'assemblage.",
            objectif: "Vaincre Kaela et stopper la Spirale.",
          },
          mecaniques: {
            defis: [
              "Combat : Kaela (Magicienne Niv 3) et la Spirale d'os (qui attaque chaque tour).",
              "Art de la Magie (DD 15) : Comprendre que Kaela est liée à la Spirale : la blesser affaiblit le rituel.",
            ],
            indices: [
              "Kaela porte une lettre de Thade Coren : « Si Jaren échoue, terminez l'ancrage. Le Conseil ne doit rien soupçonner. »",
            ],
            recompenses: "Bourse de 150 po + dague rituelle en argent.",
          },
          transitions: {
            success: "Kaela tombe. La Spirale s'arrête net.",
          },
        },
        {
          title: "Scène 2 : Jaren le Maudit",
          type: "Boss",
          locationId: "manoir_labo",
          npcIds: ["jaren_apprenti"],
          description: {
            sous_titre: "Le combat final... ou presque.",
            visuel: "Jaren s'entoure d'un bouclier d'os flottants.",
            audio: "« Le Maître avait promis ! La puissance devait être mienne ! »",
            odeur: "Soufre.",
          },
          narration: {
            declencheur: "Le combat commence.",
            texte_a_lire: "Jaren crie : « Thade a dit que la Spirale m'obéirait ! Pourquoi elle me brûle ?! »",
            contexte_mj:
              "C'est l'indice crucial : Thade n'a pas juste « renvoyé » Jaren, il lui a donné le rituel sachant qu'il était défectueux.",
            objectif: "Vaincre Jaren (Nécromancien Niv 3).",
          },
          mecaniques: {
            defis: [
              "Esquiver les éclats d'os (Jets de Réflexes).",
              "Convaincre Jaren qu'il a été trahi (Diplomatie DD 20 en plein combat pour le stopper 1 tour).",
            ],
            recompenses: "Butin de boss.",
          },
          transitions: {
            success: "Jaren tombe à genoux, vaincu.",
          },
        },
        {
          title: "Scène 3 : Le Nettoyage de Thade",
          type: "Conclusion",
          locationId: "manoir_labo",
          npcIds: ["thade_coren"],
          description: {
            sous_titre: "L'architecte vient effacer les traces.",
            visuel:
              "Thade apparaît par téléportation. Il regarde le cadavre de Kaela avec la même indifférence que celui de Jaren.",
            audio: "Un silence pesant.",
            odeur: "Parfum de lavande.",
          },
          narration: {
            declencheur: "La mort de Kaela.",
            texte_a_lire:
              "« Quel gâchis de talent, soupire Thade. Jaren, puis elle... La jeunesse est si impatiente. Merci d'avoir réglé cette affaire “en interne”. L'Université vous est redevable. » Il ramasse le livre de rituel avant que vous ne puissiez réagir.",
            contexte_mj:
              "Thade utilise les PJ pour « nettoyer » ses élèves devenus gênants. Il récupère le fruit de leurs recherches (le Grand Œuvre) sans s'être sali les mains.",
            objectif: "Comprendre que les PJ ont été les instruments de Thade depuis le début.",
          },
          mecaniques: {
            defis: [
              "Psychologie (DD 15) : Comprendre que Thade a laissé les PJ trouver ce lieu pour qu'ils fassent le sale boulot à sa place.",
              "Intimidation (DD 18) : Le pousser à admettre son implication (il sourira simplement sans nier).",
            ],
            recompenses: "Prime promise + certitude d'avoir un ennemi puissant.",
          },
          transitions: {
            success: "Fin du scénario. Thade repart avec les secrets du rituel.",
          },
        },
      ],
    },
  ],
};