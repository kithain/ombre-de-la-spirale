/**
 * Scénario 3 - Acte 5 : Le Siège du Temple
 * Temple-Forgeron de Moradin
 *
 * NOTE : version étoffée des scènes auparavant trop minimalistes. Le siège
 * doit faire monter la tension graduellement (préparation → vague → trahison
 * → assaut → révélation du dôme), avec des choix tactiques réels qui
 * influencent l'Acte 6 (Fuite par l'Abîme).
 */

export const acte5 = {
  title: "ACTE 5 : LE SIÈGE DU TEMPLE",
  stake:
    "Tenir le Temple-Forgeron contre l'armée des morts, démasquer le traître intérieur, et survivre assez longtemps pour découvrir la vraie nature du piège de Thade.",
  location: "Temple-Forgeron de Moradin.",
  scenes: [
    {
      title: "Scène 1 : L'Aube du Siège",
      type: "Préparation / Stratégie",
      image: "./images/scenes/assault_temple.jpg",
      locationId: "temple_moradin_enceinte",
      npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur"],
      description: {
        resume:
          "Dernière heure de calme avant l'assaut. Les défenseurs s'organisent et les PJ doivent prendre des décisions tactiques qui pèseront sur tout le siège.",
        visuel:
          "L'aube grise filtre à travers la brume nécromantique du dôme. Sur les remparts circulaires du Temple, deux cents combattants finissent de poser des sacs de farine, des barriques d'huile et — si les PJ ont sauvé les explosifs au Sc.3 Acte 4 — des charges de poudre. Au pied de la grande forge centrale, Thorgar bénit les armes en silence ; Durnik dessine un plan tactique sur une dalle avec un morceau de charbon.",
        audio:
          "Prières naines lentes, marteaux qui clouent les volets de fortune, ordres murmurés. À l'horizon, un grondement bas qui monte régulièrement.",
        odeur:
          "Encens de Moradin, métal chauffé, sueur, et déjà — venue avec le vent — la première bouffée de charogne.",
        lumiere:
          "Aube grise déformée par le dôme violet. Les torches sur les remparts brûlent avec une flamme étrangement bleutée.",
      },
      narration: {
        declencheur: "L'aube après l'arrivée des PJ au Temple.",
        texte_a_lire:
          "Durnik vous fait signe d'approcher la dalle. Le plan du Temple y est dessiné. « Deux cents combattants. Trois portes. Un autel central. Une seule sortie de secours. » Il pointe l'horizon : « Eux, ils sont des milliers. Mais ils sont stupides. Lents. Et nous, nous sommes chez nous. Dites-moi ce qu'on fait. »\n\nThorgar lève les yeux : « J'ai assez d'énergie divine pour DEUX canalisations majeures dans la journée. Pas trois. Choisissez bien quand. »",
        contexte_mj:
          "Scène de planification. Les choix faits ici ont des conséquences MÉCANIQUES dans les scènes suivantes. Présenter aux joueurs un menu d'options tactiques : où placer les explosifs (porte ouest / cour intérieure / sortie de secours), quand garder les canalisations de Thorgar (vague initiale / trahison / assaut final), où placer les archers, qui fortifie l'autel. Chaque choix est une carte à jouer plus tard.",
        objectif:
          "Définir un plan de défense qui modifiera mécaniquement les scènes suivantes.",
      },
      mecaniques: {
        defis: [
          "Connaissances (Guerre/Tactique) DD 14 : choisir un plan cohérent (donne +2 aux jets de défense).",
          "Connaissances (Architecture/Ingénierie) DD 15 : placer correctement les explosifs (un emplacement par charge).",
          "Diplomatie DD 12 : remonter le moral des défenseurs (+1 PV temporaire à chaque combattant nain).",
          "Religion DD 13 : aider Thorgar à préparer ses canalisations (DD de résistance des morts-vivants +1 contre elles).",
        ],
        indices: [
          "Le feu est l'arme la plus efficace contre les zombies. Privilégier l'huile et les explosifs.",
          "L'autel de Moradin amplifie les sorts divins dans un rayon de 9 m.",
          "Les égouts sous le Temple constituent la seule sortie de secours — à protéger absolument.",
          "Si Mara a survécu au Sc.3 Acte 2, elle organise les civils en second rideau.",
        ],
        recompenses:
          "Bonus tactiques selon les choix : avantage à la première vague, ou à la trahison, ou à l'assaut final (au choix des joueurs).",
      },
      transitions: {
        success: "Les défenses sont prêtes à temps.",
        fail:
          "Plan désorganisé. Malus -2 à toutes les défenses du siège, mais le siège a tout de même lieu.",
      },
    },
    {
      title: "Scène 2 : La Première Vague",
      type: "Combat de Masse",
      image: "./images/scenes/assaut_zombies.jpg",
      locationId: "temple_moradin_remparts",
      npcIds: ["horde_zombies_premiere_vague"],
      description: {
        resume:
          "Premier assaut massif. Trois vagues de zombies arrivent en cadence, chacune testant un point différent des défenses.",
        visuel:
          "La brume s'écarte. Une marée de cadavres avance en silence, par files denses, sans cris ni hurlements. Aux premiers rangs, des nains exécutés que certains défenseurs reconnaissent — frères, voisins. Les boucliers tremblent sur les remparts.",
        audio:
          "Pas synchronisés des morts, choc des premières flèches sur les murs, prières naines qui montent en vague pour couvrir l'horreur de reconnaître les visages.",
        odeur: "Décomposition, sang séché, fumée d'huile chauffée.",
        lumiere: "Jour grisâtre. La brume nécromantique fait luire les yeux des zombies en violet.",
      },
      narration: {
        declencheur: "Quand l'avant-garde des zombies entre à portée d'arc.",
        texte_a_lire:
          "Durnik hurle : « TENEZ ! » Les arbalètes claquent. La première salve renverse une vingtaine de morts. Ils se relèvent. Une nouvelle salve. Ils continuent. Au pied du mur, déjà, ils empilent leurs propres cadavres pour faire une rampe.\n\nThorgar pose la main sur votre épaule : « C'est la première vague. Économisez vos forces. Le pire n'est pas encore là. »",
        contexte_mj:
          "Combat de masse simplifié en 3 vagues distinctes, chacune avec un OBJECTIF tactique clair :\n• Vague A (60 zombies) : test de la porte principale. Les explosifs sur la porte ouest, s'ils ont été placés là, peuvent emporter la vague.\n• Vague B (40 zombies + 4 zombies-bombes) : test de la cour intérieure. Les zombies-bombes explosent à l'impact.\n• Vague C (50 zombies + brume étouffante) : test des poumons des défenseurs. Volonté/Vigueur de masse.\nUne canalisation de Thorgar peut détruire 30 zombies. Choix tactique majeur.",
        objectif: "Repousser les trois vagues en gérant ressources et moral.",
      },
      mecaniques: {
        defis: [
          "Combat de masse (système simplifié) : jet de Tactique du commandant (DD 13) par vague, ajusté par les choix de la Scène 1.",
          "Vague A : si explosifs porte ouest = vague auto-vaincue ; sinon Combat DD 14 + 1d6 pertes défenseurs.",
          "Vague B : Réflexes DD 14 ou dégâts collatéraux des zombies-bombes (2d6).",
          "Vague C : Vigueur DD 13 ou état 'fatigué' (-1 attaque) jusqu'à fin de l'acte.",
          "Canalisation de Thorgar (1/2 disponibles) : annule une vague entière. Choix stratégique.",
          "Combats individuels possibles : un PJ peut sauter aux remparts (mêlée contre 4-6 zombies par tour).",
        ],
        indices: [
          "Reconnaître un visage parmi les zombies cause un test de Volonté DD 12 (échec = -1 attaque pour 1 round).",
          "La brume de la Vague C porte la voix de Thade qui chuchote des doutes — pure manipulation psychologique.",
          "Après la troisième vague, un calme suspect s'installe : Thade préparait autre chose.",
        ],
        recompenses:
          "Survie. Moral maintenu. Ressources consommées (huile, flèches, 1 canalisation possiblement).",
      },
      transitions: {
        success: "Les trois vagues sont repoussées. Calme suspect.",
        fail:
          "Une vague perce. Combat de mêlée sur la cour intérieure. Pertes lourdes parmi les défenseurs.",
      },
    },
    {
      title: "Scène 3 : Le Traître",
      type: "Intrigue / Combat ciblé",
      image: "./images/scenes/traitre_temple.jpg",
      locationId: "temple_forgeron_interieur",
      npcIds: ["galen_traitre"],
      description: {
        resume:
          "Pendant le calme entre vagues, des sabotages internes commencent. Un acolyte qu'on croyait fidèle révèle son vrai visage.",
        visuel:
          "Dans la chapelle latérale, les glyphes de protection que Thorgar a tracés à la craie sacrée commencent à pâlir. Une silhouette en robe de novice — Galen, jeune apprenti recueilli quelques jours plus tôt — efface méthodiquement un glyphe, en murmurant. Quand on l'interpelle, il sourit.",
        audio:
          "Frottement régulier de la craie qu'on efface. Puis une prière inversée prononcée à voix basse. Puis une explosion étouffée dans la cave.",
        odeur:
          "Encens vicié, ozone, et une note acide de magie qui se corrompt.",
        lumiere:
          "Les glyphes effacés laissent place à une lueur violette qui suinte du sol.",
      },
      narration: {
        declencheur:
          "Pendant la pause, Thorgar sent ses sorts faiblir et envoie les PJ vérifier la chapelle.",
        texte_a_lire:
          "Vous trouvez Galen, le jeune apprenti recueilli avec les autres réfugiés. Il vous sourit doucement, sans cesser d'effacer le dernier glyphe. « Je suis désolé. Vraiment. Vous étiez gentils avec moi. Mais Thade m'a promis que ma sœur reviendrait à la vie si j'effaçais ces signes. Vous comprenez, n'est-ce pas ? Vous feriez pareil. »\n\nIl lève les mains. Trois Spectres surgissent du sol fissuré derrière lui.",
        contexte_mj:
          "Galen n'est PAS un agent froid : c'est une victime de la manipulation de Thade, exactement comme Jaren au Sc.1. Les PJ peuvent tenter de le sauver (Diplomatie sous le feu). S'il est tué, ils découvrent une lettre de Thade dans sa poche promettant la résurrection. S'il est neutralisé non-mortellement, il révèle des informations sur la suite (l'assaut final, le dôme imminent).",
        objectif:
          "Neutraliser Galen, vaincre les Spectres, restaurer les glyphes.",
      },
      mecaniques: {
        defis: [
          "Combat : Galen (Clerc 5, sorts de contrôle) + 3 Spectres (FP 4).",
          "Diplomatie DD 18 (sous le feu) : Convaincre Galen que Thade ment. Réussite = il se rend, témoigne.",
          "Religion DD 14 : Réactiver les glyphes effacés (1 action par glyphe, 3 glyphes au total).",
          "Volonté DD 13 : Résister à l'aura de drain des Spectres.",
        ],
        indices: [
          "La lettre de Thade dans la poche de Galen confirme la méthode : il manipule par l'amour, pas par la force.",
          "Galen connaît un mot de passe utile (à divulguer s'il est sauvé) qui permet de récupérer un objet caché à la Scène 5.",
          "Le cristal noir que Galen portait au cou affaiblit les morts-vivants dans un rayon de 6 m (objet récupérable).",
        ],
        recompenses:
          "Glyphes restaurés. Cristal noir (-1 Constitution aux morts-vivants à proximité). Si Galen sauvé : témoignage utile + bonus moral.",
      },
      transitions: {
        success: "Galen neutralisé, glyphes en partie restaurés.",
        fail:
          "Les glyphes sont entièrement détruits. La protection divine du Temple est rompue (malus -2 contre la nécromancie pour la Scène 4).",
      },
    },
    {
      title: "Scène 4 : L'Assaut des Ombres",
      type: "Combat / Boss",
      image: "./images/scenes/assaut_ombres.jpg",
      locationId: "temple_moradin_parvis",
      npcIds: ["beliers_osseux", "ombres_silencieuses"],
      description: {
        resume:
          "Assaut final. Trois béliers osseux géants enfoncent les portes pendant que des Ombres traversent les murs.",
        visuel:
          "Une nouvelle marée monte de la brume, mais cette fois elle est différente. Au centre, trois constructions monstrueuses — des assemblages d'os de plusieurs cadavres soudés en formes de béliers cyclopéens — chargent vers les portes. De part et d'autre, des Ombres glissent à travers les murs comme à travers du brouillard, ignorant les défenses.",
        audio:
          "Le grondement métallique des béliers osseux qui frappent en cadence. Le sifflement glacial des Ombres. Les hurlements naines au moment où une Ombre touche un combattant.",
        odeur: "Os calcinés, glace sèche, peur sueur.",
        lumiere: "Ténèbres surnaturelles qui mangent la lumière des torches.",
      },
      narration: {
        declencheur: "Reprise de l'assaut après le sabotage de Galen.",
        texte_a_lire:
          "La porte ouest tremble sous le premier choc. Le bois sacré, vieux de huit siècles, fend en deux d'un seul coup. Au-dessus, sur les remparts, un combattant tombe à genoux et se vide de sa chair en quelques secondes : une Ombre vient de le toucher.\n\nThorgar lève le marteau et hurle : « MORADIN, ENTENDS-MOI ! » Sa voix porte. Sa peau commence à briller.",
        contexte_mj:
          "Combat-clé. 3 Béliers Osseux (FP 6 chacun) + 4 Ombres Silencieuses (FP 4) qui drainent la Force au contact. Si Thorgar a encore une canalisation et que les PJ lui couvrent 2 rounds, elle inflige un dégât massif (15d6 contre les morts-vivants dans 18 m). Les explosifs (s'ils sont à la porte ouest) peuvent neutraliser un bélier en 1 round. Le crâne de chaque bélier est son point faible (-3 CA mais frappe critique = destruction).",
        objectif: "Tenir les portes ; détruire les béliers ; survivre aux Ombres.",
      },
      mecaniques: {
        defis: [
          "Combat principal : 3 Béliers Osseux (FP 6) + 4 Ombres Silencieuses (FP 4, drain de Force au contact).",
          "Détruire un bélier : 80 PV chacun, RD 5/contondant, OU coup critique au crâne (CA -3).",
          "Explosifs cour intérieure ou porte ouest (selon Scène 1) : 6d6 dégâts à un bélier.",
          "Canalisation de Thorgar (si encore disponible) : 15d6 contre tous les morts-vivants dans 18 m, mais Thorgar tombe inconscient ensuite.",
          "Volonté DD 14 contre l'aura de peur cumulative des béliers (à chaque round, DD +1).",
          "Les Ombres ignorent l'armure et les murs. Seules la lumière magique et les armes magiques les blessent.",
        ],
        indices: [
          "Si la porte ouest cède, le siège passe en mêlée intérieure (DD +2 à toutes les défenses).",
          "Une Ombre ramenée à 0 PV se dissipe en hurlant un nom — celui d'un mineur exécuté à la place des Exécutions (Sc.3 Acte 4).",
          "Quand le dernier bélier tombe, un silence soudain s'installe : le pire n'était pas l'attaque.",
        ],
        recompenses:
          "Survie. Béliers détruits = trophées pour les nains (moral). Restes d'Ombres = composants pour des sorts.",
      },
      transitions: {
        success: "Les béliers sont détruits. Le silence revient. Trop vite.",
        fail:
          "Une porte cède. Combat intérieur, lourdes pertes. Évacuation accélérée vers l'Acte 6.",
      },
    },
    {
      title: "Scène 5 : Le Dôme et la Voix",
      type: "Révélation / Cinématique",
      image: "./images/scenes/dome_violet.jpg",
      locationId: "temple_forgeron_remparts",
      npcIds: ["thade_coren_projection"],
      description: {
        resume:
          "Au moment où le Temple semble tenir, Thade révèle son vrai plan : un dôme planaire qui scelle la ville. Personne ne sort. Le siège n'était qu'un théâtre.",
        visuel:
          "Le silence est absolu. Plus un seul mort-vivant en vue. Puis, dans le ciel, une lente coupole violette se déploie depuis la Tour Arcanique, comme un parapluie qui s'ouvre. Elle couvre toute la ville en quelques minutes. Au sommet du Temple, une projection de Thade apparaît, calme, immense.",
        audio:
          "Un bourdonnement profond, à la limite du subsonique, qui fait vibrer la pierre. La voix de Thade arrive dans la tête de chacun, sans passer par les oreilles.",
        odeur: "Ozone, lavande de son bureau, fer froid.",
        lumiere: "Le ciel devient violet. Le soleil disparaît.",
      },
      narration: {
        declencheur: "Après la défaite des béliers.",
        texte_a_lire:
          "Le silence dure trop longtemps. Et puis, vous le voyez : une voûte violette qui descend depuis la Tour, comme un couvercle. Elle passe sur les remparts, sur le Temple, sur vous — et ne vous touche pas. Elle scelle simplement le ciel.\n\nUne voix résonne dans votre tête, calme, presque douce : « Bravo. Vraiment. Vous avez tenu. Mais vous n'avez pas compris : il ne s'agissait pas de prendre le Temple. Il s'agissait de vous OCCUPER le temps que je referme la porte. Valombre est désormais une boîte. Personne ne sort. Personne n'entre. La ville m'appartient. Reposez-vous. Demain, je viendrai en personne. »\n\nThorgar, à genoux, regarde la voûte avec une horreur silencieuse. Durnik dit : « Il y a une autre porte. Sous le Temple. Personne d'autre ne le sait. Mais elle ne mène... qu'à un endroit. »",
        contexte_mj:
          "Révélation MAJEURE. Insister sur l'humiliation tactique : les PJ ont gagné le siège, mais ils ont perdu la guerre stratégique. Le dôme rend toute fuite par voie normale impossible. Durnik annonce le passage secret vers le cimetière (Acte 6 Scène 1) qui ne mène qu'à... la fissure de la Spirale. C'est un choix sans choix : entrer dans le piège planaire de Thade. Pas de combat. Pure narration.",
        objectif:
          "Comprendre la nature du piège et accepter la seule issue restante : la Spirale.",
      },
      mecaniques: {
        defis: [
          "Connaissances (Arcanes) DD 18 : analyser le dôme. C'est un sort de scellement planaire, alimenté par un Cristal-Ancre (la 'Larme' que Thade a chargée au Sc.2).",
          "Volonté DD 14 : ne pas céder au désespoir. Échec = -1 à toutes les actions de l'Acte 6.",
          "Diplomatie DD 12 : remonter le moral des survivants pour qu'ils acceptent de plonger dans la Spirale.",
          "Psychologie DD 16 : sentir, dans le ton de Thade, qu'il ne ment pas — mais qu'il est aussi plus fatigué qu'il ne le montre.",
        ],
        indices: [
          "Le dôme tire son énergie depuis la Tour, qui elle-même tire son énergie depuis la mine (Cristal du Sc.2).",
          "Briser le Cristal = effondrer le dôme. Mais le Cristal n'est pas accessible depuis Valombre.",
          "Durnik connaît le passage des Premiers Mineurs vers le cimetière. C'est la seule sortie. Et elle ne mène qu'à la fissure de la Spirale.",
          "La Spirale est un piège... mais c'est aussi le seul endroit d'où l'on peut atteindre le Cristal de Thade.",
        ],
        recompenses:
          "Connaissance complète du piège. Plan d'évasion par les égouts. Acte 6 débloqué.",
      },
      transitions: {
        success: "Décision d'évacuer par le passage secret. Vers l'Acte 6.",
        fail:
          "Désespoir. Évacuation chaotique, Durnik blessé en couvrant la sortie.",
      },
    },
  ],
};
