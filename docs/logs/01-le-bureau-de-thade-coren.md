# Le Bureau de Thade Coren

## Objectif de scène

Accepter ou refuser la mission de Thade Coren : enquêter sur les profanations du Cimetière des Terrasses, comprendre que les tombes des Sept Thanes sont ciblées, et repartir avec une piste concrète sans révéler les secrets non découverts.

## Sources consultées

- `src/data/scenarios/scenario1_sept_thanes.js` : scène `s1_bureau_thade`, structure du scénario 1, fronts actifs initiaux.
- `src/data/scenarios/effetsFronts.js` : effets de fronts liés à `s1_bureau_thade`.
- `src/data/personnages/pnjUniversite.js` : fiche de Thade Coren.
- `src/data/personnages/factions.js` : Université Arcanique, Conseil de Valombre, Communauté Naine.
- `src/data/universe/universeZone_quartier_du_savoir.js` : lieu `bureau_thade_universite`.
- `.agents/MJ Valombre.toml`, `.agents/PJ Valombre 1.toml`, `.agents/PJ Valombre 2.toml` : contraintes de jeu des agents simulés.

## Nombre de boucles

5 boucles complètes.

## Log complet boucle par boucle

### Boucle 1

#### 1. MJ Valombre

[Scène]
Le dernier étage du Pavillon Nord est silencieux. La porte du bureau n'a ni plaque ni nom. Avant même qu'elle ne s'ouvre, Nera et Kael sentent la lavande, nette, presque trop propre. À l'intérieur : des livres rangés par couleur, un service à thé d'orge, une fenêtre qui donne sur les toits de l'Université et la Tour Arcanique au loin. Un coffret plombé repose sur une étagère à hauteur d'épaule.

Thade Coren se lève. Grand, mince, vêtu de gris, il a la politesse d'un homme qui ne gaspille ni ses mots ni les gestes des autres.

[Informations visibles]
Thade dit que des tombes du Cimetière des Terrasses ont été profanées. Les clans nains refusent de parler à l'Université. Le Conseil traite l'affaire comme du vandalisme. Thade insiste : ce n'est pas du vandalisme.

[Actions possibles évidentes]
Écouter l'offre, poser des questions sur les profanations, examiner discrètement le bureau, demander pourquoi le Conseil est tenu à l'écart.

[Résolution]
Thade propose du thé, puis pose sur le bureau un ordre de mission scellé et une bourse modeste. Le document accorde un accès officiel aux Terrasses et au Cimetière. Il demande une enquête discrète : ne pas affoler les clans, ne pas transformer cela en affaire politique.

[État de campagne]
- Indices obtenus : profanations au Cimetière des Terrasses ; le Conseil minimise ; les clans nains ne coopèrent pas avec l'Université ; Thade offre un mandat officiel.
- Indices ratés, refusés ou perdus : aucun à ce stade.
- Décisions des PJ : aucune décision finale.
- Conséquences visibles : ordre de mission et bourse visibles sur le bureau.
- PNJ affectés : Thade observe la première réaction des PJ.
- Factions affectées : Université impliquée comme mandataire ; Conseil présenté comme indifférent ; Communauté Naine présentée comme méfiante.
- Fronts ou horloges modifiés : aucun segment encore arbitré dans la fiction ; le front "Le Plan de Thade" est prêt à avancer si les PJ deviennent ses enquêteurs.
- Prochaine piste choisie par les PJ : à formuler.

[Rapport de test]
- Bug : aucun dans cette boucle.
- Dette technique : absence de fiches mécaniques PJ, donc les tests DD seront simulés narrativement.
- Amélioration UX : la scène gagnerait à afficher directement "ordre de mission" comme objet manipulable.
- Amélioration narrative : le coffret est bien placé comme tentation visuelle pour Nera.

Thade croise les mains. "Je peux vous donner accès au lieu. Ce que vous ferez de cet accès dépendra de votre jugement. Que voulez-vous savoir avant de répondre ?"

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera ne touche pas au thé tout de suite. Le bureau est trop propre, le parfum trop présent, et le coffret attire naturellement son regard. Elle se garde pourtant d'avoir l'air fascinée par l'étagère.

Dialogue :
"Quand quelqu'un demande la discrétion, c'est qu'il veut éviter une panique... ou éviter des témoins. Vous dites que ce n'est pas du vandalisme. Qu'est-ce qui vous fait penser ça ?"

Questions au MJ :
Le coffret plombé est-il assez proche pour que Nera voie s'il porte des marques, sans se lever ostensiblement ?

Action :
Nera accepte la tasse pour avoir une raison de bouger légèrement dans la pièce et d'observer le coffret du coin de l'oeil, sans y toucher.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael entend surtout les mots "tombes" et "clans nains". Il se raidit un peu : profaner des morts n'est pas une simple affaire d'accès administratif.

Dialogue :
"Des sépultures ont été profanées. Si nous intervenons, nous le ferons avec respect pour les morts et pour les clans. Pourquoi le Conseil n'a-t-il pas déjà envoyé une garde officielle ?"

Questions au MJ :
Kael veut savoir si Thade parle des tombes comme de lieux sacrés ou seulement comme de biens à protéger.

Action :
Kael écoute la réponse de Thade et cherche à juger sa sincérité, sans l'accuser.

#### 4. Coordination des PJ

Intention commune :
Nera et Kael veulent laisser Thade parler davantage avant d'accepter. Nera cherche une faille matérielle dans le bureau ; Kael cherche une faille morale dans le discours.

Désaccord éventuel :
Nera pense que la discrétion protège peut-être un commanditaire. Kael considère que la discrétion peut aussi éviter une flambée de tensions avec les clans nains.

Piste concrète choisie :
Interroger Thade sur ce qu'il sait réellement des profanations et observer son bureau sans geste hostile.

#### 5. État de campagne

- Indices obtenus : mandat officiel offert ; profanations non traitées comme simple vandalisme par Thade.
- Indices ratés, refusés ou perdus : aucun.
- Décisions des PJ : poursuivre l'entretien avant acceptation.
- Conséquences visibles : Thade mesure la prudence de Nera et la droiture de Kael.
- PNJ affectés : Thade reste cordial, mais comprend que les PJ ne sont pas entièrement dociles.
- Factions affectées : aucune modification active.
- Fronts ou horloges modifiés : aucun segment coché dans cette boucle.
- Piste concrète choisie : questions sur l'origine des soupçons et observation du coffret.

### Boucle 2

#### 1. MJ Valombre

[Scène]
Thade verse le thé d'orge. Il répond d'abord à Kael, comme s'il prenait soin de placer la question morale avant la question pratique.

[Informations visibles]
Il dit que le Conseil ne veut pas provoquer une crise entre l'Université et les clans nains. Il ajoute que le mot "vandalisme" est utile aux fonctionnaires : il donne une forme simple à une affaire qui ne l'est pas.

[Actions possibles évidentes]
Insister sur le Conseil, demander quelles tombes sont touchées, examiner le coffret, questionner Thade sur Nyx ou sur son intérêt personnel.

[Résolution]
Test simulé de Psychologie pour Kael : réussite. Kael perçoit que Thade parle de "patrimoine", de "matériel", d'"accès", mais évite les mots "sépulture", "rite" et "deuil" lorsqu'il décrit les faits. Ce n'est pas un mensonge évident : c'est un cadrage soigneusement choisi.

Observation discrète de Nera : réussite partielle. Sans se lever franchement, elle distingue sur le coffret des gravures régulières, mais pas assez pour les interpréter. Le plomb n'est pas décoratif ; il sert à conserver ou isoler quelque chose.

Thade remarque le regard de Nera sans le relever directement. Il reprend : "Trois tombes des Sept Thanes ont été touchées. Les dégâts sont précis. Trop précis."

[État de campagne]
- Indices obtenus : les tombes ciblées sont celles des Sept Thanes ; Thade choisit soigneusement ses mots ; le coffret plombé porte des gravures visibles mais non identifiées.
- Indices ratés, refusés ou perdus : contenu du coffret non identifié.
- Décisions des PJ : continuer l'interrogatoire.
- Conséquences visibles : Thade nomme les Sept Thanes ; il ne bloque pas les questions.
- PNJ affectés : Thade devient légèrement plus précis, sans perdre sa courtoisie.
- Factions affectées : Communauté Naine plus directement concernée.
- Fronts ou horloges modifiés : pas encore de segment coché ; pression du "Sceau qui cède" établie comme symptôme.
- Prochaine piste choisie par les PJ : approfondir la nature des tombes et du mandat.

[Rapport de test]
- Bug : aucun.
- Dette technique : les seuils de réussite sont dans la scène, mais pas les bonus PJ.
- Amélioration UX : prévoir une fiche "indices visibles sans jet" aiderait à arbitrer le coffret.
- Amélioration narrative : très bon effet de doute : Thade donne une vérité utile sans expliquer pourquoi elle l'intéresse.

Thade pose la main près de l'ordre de mission, pas dessus. "Voulez-vous une autorisation pour entrer comme enquêteurs, ou préférez-vous y aller comme intrus ?"

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera n'aime pas que Thade ait vu son intérêt pour le coffret, mais elle aime encore moins qu'il ait fait semblant de ne pas le voir.

Dialogue :
"Trois tombes, des dégâts précis, et vous nous parlez de matériel. Quel genre de matériel disparaît d'une tombe ? Des bijoux, des armes, des reliques ?"

Questions au MJ :
Nera veut savoir si le coffret semble protégé par serrure, glyphe ou simple poids du plomb.

Action :
Elle se penche vers l'ordre de mission comme si elle le lisait, puis tente d'obtenir un meilleur angle sur les marques du coffret.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael se méfie davantage. Les mots de Thade sont propres, mais trop propres pour parler de morts troublés.

Dialogue :
"Je prendrai l'autorisation si elle nous permet d'entrer sans humilier les gardiens nains. Mais je veux que ce soit clair : nous n'irons pas piétiner leurs rites pour servir une procédure universitaire."

Questions au MJ :
Kael demande si l'ordre de mission impose un rapport exclusif à Thade ou s'il permet de consulter les gardiens nains.

Action :
Il lit attentivement l'ordre de mission avant d'accepter quoi que ce soit.

#### 4. Coordination des PJ

Intention commune :
Les PJ veulent obtenir le mandat, mais seulement s'il ne les enferme pas dans une obéissance aveugle à Thade.

Désaccord éventuel :
Nera veut pousser sur le coffret et le "matériel" disparu. Kael veut verrouiller la liberté morale de parler aux nains avec respect.

Piste concrète choisie :
Faire préciser le contenu du mandat et demander ce qui a été pris ou abîmé dans les tombes.

#### 5. État de campagne

- Indices obtenus : Sept Thanes ciblés ; langage contrôlé de Thade ; coffret plombé anormal mais non compris.
- Indices ratés, refusés ou perdus : nature exacte des gravures du coffret.
- Décisions des PJ : acceptation probable, sous réserve d'indépendance.
- Conséquences visibles : l'entretien se tend subtilement ; Thade reste maître du cadre.
- PNJ affectés : Thade sait que Nera est observatrice et que Kael cherchera une ligne morale.
- Factions affectées : Université et Communauté Naine mises en tension.
- Fronts ou horloges modifiés : aucun segment coché.
- Piste concrète choisie : examiner le mandat et poser la question du "matériel".

### Boucle 3

#### 1. MJ Valombre

[Scène]
L'ordre de mission est bref. Il autorise les porteurs à enquêter au Cimetière des Terrasses, à consulter les gardiens locaux si ceux-ci acceptent, et à rapporter leurs observations à Thade Coren, mandataire universitaire. Il ne contient pas d'interdiction explicite de parler aux nains. Il ne contient pas non plus d'autorisation du Conseil.

[Informations visibles]
Thade répond à Nera : "Des fragments. Des traces. Rien qui ait une valeur marchande ordinaire." Il ne précise pas "os" spontanément.

[Actions possibles évidentes]
Demander s'il s'agit de restes humains ou nains, pousser sur l'absence d'autorisation du Conseil, inspecter le coffret plus directement, accepter la mission.

[Résolution]
Nera obtient un meilleur angle sur le coffret. Test simulé d'Investigation DD 13 : réussite. Elle ne voit pas le contenu, mais elle identifie les runes comme funéraires et conservatoires. Le coffret n'est pas un simple objet d'étude : il sert à préserver quelque chose lié aux morts. Elle ne peut pas savoir ce qu'il contient sans l'ouvrir ou sans magie.

Thade suit son regard cette fois. Il dit calmement : "L'Université conserve beaucoup de choses qui troublent les non-initiés. Je vous déconseille de confondre réserve académique et culpabilité."

À Kael, il ajoute : "Vous parlerez aux gardiens nains si vous pouvez les convaincre de vous parler. C'est même la raison pour laquelle je ne peux pas envoyer un assistant de mon département."

[État de campagne]
- Indices obtenus : mandat non exclusif mais centré sur Thade ; coffret marqué de runes funéraires de conservation ; disparition de "fragments" sans valeur marchande ordinaire.
- Indices ratés, refusés ou perdus : contenu exact du coffret ; lien exact entre coffret et profanations.
- Décisions des PJ : les PJ maintiennent leur indépendance verbale.
- Conséquences visibles : Thade recadre Nera avec courtoisie ; il accepte que les PJ parlent aux nains.
- PNJ affectés : Thade protège le coffret socialement, pas physiquement.
- Factions affectées : Université garde le contrôle du mandat ; Communauté Naine devient source nécessaire.
- Fronts ou horloges modifiés : aucun nouveau segment ; le front "Plan de Thade" est toujours en position de recruter les PJ.
- Prochaine piste choisie par les PJ : décider s'ils acceptent le mandat malgré le doute.

[Rapport de test]
- Bug : le texte de scène permet de révéler "fragments d'os" via le coffret, mais le bureau/lieu mentionne directement "os T-01 à T-04" dans les détails MJ ; danger si l'interface expose ce détail aux joueurs.
- Dette technique : distinguer clairement données MJ et données visibles dans l'outil.
- Amélioration UX : masquer les secrets du lieu dans les vues joueur.
- Amélioration narrative : la réaction de Thade au regard de Nera fonctionne bien pour préserver le secret tout en signalant la tension.

Thade laisse un silence. "Vous avez maintenant mes raisons publiques, mon mandat, et vos réserves. Que faites-vous de tout cela ?"

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera a son doute. Pas une preuve, mais assez pour ne pas remettre tout ce qu'elle trouvera dans les mains de Thade sans y penser.

Dialogue :
"Je confonds rarement réserve et culpabilité, maître Coren. Mais je note toujours qui choisit le vocabulaire."

Questions au MJ :
Nera demande si la bourse est déjà sur la table et si elle peut la peser ou l'ouvrir sans paraître impolie.

Action :
Elle prend l'ordre de mission pour le lire à son tour et vérifie le sceau, les limites et la formulation exacte du rapport demandé.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael est rassuré par la possibilité de parler aux gardiens, mais troublé par le coffret.

Dialogue :
"Nous irons voir les gardiens nains et nous écouterons leur version. Si elle contredit la vôtre, nous ne l'enterrerons pas."

Questions au MJ :
Kael veut savoir si Thade accepte explicitement qu'ils protègent les tombes avant de protéger l'image de l'Université.

Action :
Il pose la main sur l'ordre, mais attend la réponse de Thade avant de l'emporter.

#### 4. Coordination des PJ

Intention commune :
Accepter la mission pour obtenir l'accès officiel, mais garder une enquête indépendante et ne pas promettre de rapport exclusif.

Désaccord éventuel :
Nera voudrait fouiller plus loin le coffret si une occasion se présente. Kael refuse d'ouvrir ou voler un objet dans le bureau sans preuve plus solide.

Piste concrète choisie :
Prendre le mandat, aller au Cimetière, parler à Thorgar ou aux gardiens nains, et garder le doute sur Thade.

#### 5. État de campagne

- Indices obtenus : coffret à runes funéraires de conservation ; Thade évite certains mots ; mandat utilisable auprès des Terrasses.
- Indices ratés, refusés ou perdus : contenu du coffret ; implication exacte de Thade.
- Décisions des PJ : acceptation conditionnelle en cours.
- Conséquences visibles : tension de méthode entre Nera et Kael, mais coordination solide.
- PNJ affectés : Thade doit composer avec des enquêteurs moins dociles que prévu.
- Factions affectées : l'Université garde une façade de légitimité ; les nains deviennent le prochain interlocuteur.
- Fronts ou horloges modifiés : pas encore coché tant que la scène n'est pas sortie.
- Piste concrète choisie : accepter le mandat et partir vers les Terrasses.

### Boucle 4

#### 1. MJ Valombre

[Scène]
Thade ne sourit pas, mais son visage s'adoucit à peine quand Kael parle de protéger les tombes. Le geste est crédible, ou très bien maîtrisé.

[Informations visibles]
Il répond : "Protégez les tombes. Protégez les gardiens si la situation l'exige. L'image de l'Université survivra à quelques conversations inconfortables." Puis il ajoute : "Mais si vous remuez publiquement cette affaire sans preuves, le Conseil fermera les accès et les clans se refermeront. Vous aurez raison trop tôt, ce qui revient souvent à avoir tort."

[Actions possibles évidentes]
Accepter la mission, demander un contact au Cimetière, demander une avance, demander à partir de nuit, refuser.

[Résolution]
Nera vérifie la bourse : modeste, correcte, pas assez élevée pour acheter leur silence. Le sceau du mandat est authentique. Il nomme Thorgar, prêtre nain du Temple-Forgeron, comme gardien susceptible de contrôler l'accès aux tombes.

Thade propose une précision : "Si vous partez maintenant, vous arriverez avant la fermeture des grilles extérieures. Si vous attendez demain, vous aurez plus de lumière et plus de regards."

Conséquence visible : Thade laisse le mandat et la bourse à portée des PJ. Rien d'autre n'est fourni par les sources pour matérialiser des documents annexes.

[État de campagne]
- Indices obtenus : Thorgar identifié comme contact ; mandat authentique ; possibilité de départ immédiat ou de jour.
- Indices ratés, refusés ou perdus : contenu du coffret ; précision sur les conditions de port d'armes au Cimetière non fournie par les sources.
- Décisions des PJ : acceptation quasi certaine ; choix du moment de départ à déterminer.
- Conséquences visibles : un document sur les Terrasses arrive au bureau de Thade pendant l'entretien.
- PNJ affectés : Thade accepte la priorité donnée aux tombes et aux gardiens, tout en cadrant le risque politique.
- Factions affectées : Université conserve flux d'information ; Conseil évoqué comme possible verrou administratif.
- Fronts ou horloges modifiés : la scène approche du déclencheur "les PJ deviennent les yeux de Thade".
- Prochaine piste choisie par les PJ : décider départ immédiat ou attente.

[Rapport de test]
- Bug : aucun.
- Dette technique : le mandat existe, mais ses clauses exactes ne sont pas entièrement formalisées.
- Amélioration UX : indiquer dans la scène si le mandat couvre les armes, les horaires nocturnes et la relation aux gardiens nains.
- Amélioration narrative : le choix jour/nuit donne de l'agence sans forcer une solution unique.

Thade pousse l'ordre de mission vers eux. "Allez-vous descendre aux Terrasses ce soir, ou préférez-vous laisser la nuit travailler sans vous ?"

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera préfère la nuit. Moins de regards, plus d'ombres, et peut-être plus de vérité dans les choses que les gens essaient de cacher.

Dialogue :
"La nuit travaille toujours. La question, c'est pour qui. Je vote pour partir maintenant."

Questions au MJ :
Nera demande si l'ordre de mission leur permet d'être armés au Cimetière ou si cela risquerait de provoquer les gardiens.

Action :
Elle prend la bourse et l'ordre, puis propose de passer par un trajet discret vers les Terrasses pour observer les abords avant de se présenter.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael n'aime pas entrer de nuit dans un lieu funéraire, mais il aime encore moins laisser des profanateurs agir.

Dialogue :
"Nous irons ce soir. Mais nous nous présenterons au gardien avant d'approcher les tombes. Nous ne sommes pas des voleurs de sépultures."

Questions au MJ :
Kael demande si Thade peut fournir une phrase de présentation ou un signe qui évite que Thorgar les prenne pour des intrus.

Action :
Il prend le mandat officiellement et demande à Thade de préciser que leur mission inclut la protection des gardiens.

#### 4. Coordination des PJ

Intention commune :
Partir immédiatement vers les Terrasses, observer discrètement les abords, puis se présenter à Thorgar avant toute intrusion dans les tombes.

Désaccord éventuel :
Nera privilégie une approche discrète avant contact. Kael insiste pour ne pas violer les rites ni les accès nains.

Piste concrète choisie :
Approche hybride : Nera observe les grilles et les alentours ; Kael porte le mandat et ouvre le dialogue avec Thorgar.

#### 5. État de campagne

- Indices obtenus : contact Thorgar ; départ de nuit possible ; mandat authentique.
- Indices ratés, refusés ou perdus : contenu du coffret non découvert ; conditions exactes de port d'armes non précisées par les sources.
- Décisions des PJ : acceptation de la mission ; départ immédiat de nuit ; approche respectueuse envers Thorgar.
- Conséquences visibles : l'ordre de mission quitte le bureau avec les PJ ; Thade conserve le contrôle de ses dossiers.
- PNJ affectés : Thade obtient des enquêteurs extérieurs, mais pas entièrement soumis.
- Factions affectées : Université donne accès ; Communauté Naine sera sollicitée ; Conseil reste tenu à distance.
- Fronts ou horloges modifiés : déclenchement imminent de l'effet de scène `s1_bureau_thade`.
- Piste concrète choisie : se rendre au Cimetière des Terrasses ce soir.

### Boucle 5

#### 1. MJ Valombre

[Scène]
Thade ne produit pas de clause supplémentaire sur les armes : les sources consultées ne précisent pas si le mandat couvre explicitement ce point. Il répond seulement dans le cadre visible de la scène : "Les gardiens des Terrasses fixeront leurs usages. Mon mandat vous ouvre une porte, il ne vous dispense pas de respecter ceux qui la gardent."

[Informations visibles]
Il donne aussi le nom complet du contact : Thorgar, haut clerc du Temple-Forgeron, gardien des rites funéraires des Sept Thanes. Il ne le décrit pas comme un allié. Il dit seulement : "Il ne m'aime pas. Cela joue en sa faveur."

[Actions possibles évidentes]
Quitter le bureau, demander une dernière précision, tenter une manoeuvre sur le coffret, refuser de rendre compte à Thade.

[Résolution]
Les PJ acceptent la mission et prennent l'ordre. La scène atteint ses conditions de sortie : l'indice principal est obtenu, les PJ choisissent une piste concrète, Thade a réagi à leurs réserves, une conséquence visible est montrée, et le prochain mouvement est formulé par les PJ.

Effet de front appliqué : `front_plan_thade`, horloge `menace_retour_sealine`, +1 segment (segment 1). Dans la fiction visible, cela signifie que Thade a maintenant des enquêteurs extérieurs envoyés vers les tombes, pendant que les fragments d'os et les informations continuent de converger vers la Tour. Les PJ ne savent pas encore cela ; ils voient seulement que Thade garde le bureau et le coffret derrière eux.

Thade les raccompagne jusqu'à la porte. La lavande paraît plus forte dans le couloir qu'à leur arrivée. "Thorgar respecte la franchise. Pas l'empressement. Bonne chance."

[État de campagne]
- Indices obtenus : Thade envoie les PJ au Cimetière ; profanations ciblent les tombes des Sept Thanes ; mandat officiel ; Thorgar identifié ; choix de mots de Thade ; coffret plombé à runes funéraires de conservation.
- Indices ratés, refusés ou perdus : contenu du coffret ; nature exacte des fragments disparus ; portée exacte du mandat concernant les armes.
- Décisions des PJ : accepter la mission ; partir de nuit ; observer les abords puis parler à Thorgar avec respect ; ne pas promettre une confiance aveugle à Thade.
- Conséquences visibles : ordre de mission remis ; Thade conserve ses dossiers et le coffret ; le port d'armes reste soumis aux usages des gardiens, faute de précision sourcée.
- PNJ affectés : Thade a recruté les PJ comme enquêteurs ; il sait qu'ils sont prudents.
- Factions affectées : Université gagne deux agents extérieurs ; Communauté Naine devient prochain point de contact ; Conseil reste hors-jeu.
- Fronts ou horloges modifiés : Le Plan de Thade / `menace_retour_sealine` passe à 1 segment. Le Sceau qui cède reste à son état initial de scénario, non modifié par cette scène.
- Prochaine piste choisie par les PJ : `s1_premiere_descente` de nuit, avec approche hybride discrétion + présentation à Thorgar.

[Rapport de test]
- Bug : incohérence légère entre les sources de lieu : la scène situe le bureau au dernier étage du Pavillon Nord, tandis que la zone le situe "deux étages au-dessus de l'aile de Thaumaturgie". Les deux peuvent être réconciliés, mais ce n'est pas explicitement dit.
- Dette technique : les données de lieu incluent "coffret plombé (os T-01 à T-04)" dans un champ de détail qui pourrait être affiché trop largement.
- Amélioration UX : séparer strictement "visible PJ", "MJ seulement" et "secret de campagne" dans les fiches lieux.
- Amélioration narrative : la sortie de scène fonctionne mieux quand Thade rappelle que son mandat ouvre les portes administratives sans remplacer les usages des gardiens nains.

Thade referme la porte sans bruit. Les marches du colimaçon descendent vers l'Université, puis vers les Terrasses. Comment vous organisez-vous pendant le trajet jusqu'au Cimetière ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera descend l'escalier avec le sentiment d'avoir reçu une clef et une longe en même temps.

Dialogue :
"On garde le mandat, mais on ne garde pas ses conclusions. Je veux voir les grilles, les traces, les angles morts. Si Thorgar ne l'aime pas, il m'intéresse déjà."

Questions au MJ :
Nera demande si le trajet vers les Terrasses offre des toits, ruelles ou passages permettant d'approcher sans traverser les grandes artères universitaires.

Action :
Elle prépare une approche discrète des abords du Cimetière, sans franchir les limites sacrées avant que Kael ait parlé au gardien.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael range le mandat avec soin. Il pense aux tombes profanées avant de penser au commanditaire.

Dialogue :
"Nous écouterons Thorgar avant d'écouter les pierres. Si des morts ont été troublés, leur gardien parle en premier."

Questions au MJ :
Kael demande s'il peut repérer en chemin un symbole ou une formule de respect propre aux rites nains, sans prétendre les maîtriser.

Action :
Il prend la tête au moment de se présenter officiellement, mais laisse Nera observer les accès avant le contact.

#### 4. Coordination des PJ

Intention commune :
Rejoindre le Cimetière des Terrasses immédiatement. Nera reconnaît les abords ; Kael se présente à Thorgar avec le mandat et une posture respectueuse.

Désaccord éventuel :
Nera voudrait garder une marge d'infiltration si Thorgar refuse. Kael accepte seulement si aucune sépulture n'est violée et si l'urgence est manifeste.

Piste concrète choisie :
Transition vers `s1_premiere_descente` de nuit : observation extérieure, contact avec Thorgar, enquête sur les tombes profanées.

#### 5. État de campagne

- Indices obtenus : mission acceptée ; tombes des Sept Thanes ciblées ; Thorgar nommé ; doute sur Thade via langage et coffret.
- Indices ratés, refusés ou perdus : contenu du coffret ; preuve directe d'implication universitaire ; portée exacte du mandat concernant les armes.
- Décisions des PJ : accepter l'accès officiel sans confiance totale ; partir de nuit ; privilégier un contact respectueux avec le gardien.
- Conséquences visibles : les PJ quittent le bureau avec mandat et bourse.
- PNJ affectés : Thade a recruté les PJ et adapte son cadrage à leur prudence.
- Factions affectées : Université active ; Communauté Naine prochainement sollicitée ; Conseil contourné.
- Fronts ou horloges modifiés : `front_plan_thade / menace_retour_sealine` = 1/6. `front_sceau_qui_cede / menace_profanation_thanes` = état initial de scénario, pas d'avancement par cette scène.
- Piste concrète choisie : descendre aux Terrasses et rencontrer Thorgar.

## Indices obtenus

- Thade envoie les PJ au Cimetière des Terrasses.
- Les profanations ciblent les tombes des Sept Thanes.
- Les clans nains ne parlent pas à l'Université.
- Le Conseil traite l'affaire comme du vandalisme.
- L'ordre de mission donne un accès officiel aux Terrasses et au Cimetière.
- Thorgar, haut clerc du Temple-Forgeron, est le contact/gardien à rencontrer.
- Thade choisit soigneusement ses mots et évite certains termes funéraires ou rituels.
- Le coffret plombé porte des runes funéraires de conservation.

## Indices ratés, refusés ou perdus

- Contenu exact du coffret plombé.
- Nature exacte des "fragments" disparus.
- Portée exacte du mandat concernant les armes au Cimetière.
- Preuve directe que Thade est impliqué dans les profanations.

## Décisions des PJ

- Accepter la mission de Thade.
- Ne pas accorder une confiance aveugle à Thade.
- Partir vers le Cimetière de nuit.
- Observer les abords discrètement avec Nera.
- Se présenter à Thorgar avec respect par l'intermédiaire de Kael.
- Ne pas ouvrir ou voler le coffret faute de preuve suffisante.

## Conséquences visibles

- Les PJ obtiennent un mandat officiel et une bourse modeste.
- Thade conserve le coffret et ses dossiers.
- Thade sait que les PJ sont prudents et observateurs.
- Le Conseil reste tenu à distance.
- La Communauté Naine devient le prochain interlocuteur.

## PNJ affectés

- Thade Coren : recrute les PJ, mesure leur prudence, protège ses omissions sans rompre la courtoisie.
- Thorgar : nommé comme prochain contact, pas encore rencontré.

## Factions affectées

- Université Arcanique : fournit le mandat et conserve le cadre officiel de l'enquête.
- Communauté Naine : devient source essentielle via Thorgar.
- Conseil de Valombre : reste hors-jeu et continue de minimiser l'affaire.

## Fronts ou horloges modifiés

- `front_plan_thade` / `menace_retour_sealine` : +1 segment, segment 1. Les PJ deviennent des enquêteurs extérieurs envoyés par Thade ; cette information de front n'est pas connue des PJ dans son sens réel.
- `front_sceau_qui_cede` / `menace_profanation_thanes` : pas de nouveau segment appliqué par cette scène ; état initial maintenu.
- `front_cite_sous_pression` : pas de segment appliqué, mais l'indifférence du Conseil est établie.

## Transition choisie par les PJ

Vers `s1_premiere_descente` : Première Descente aux Terrasses, jouée de nuit. Approche hybride : reconnaissance discrète des abords par Nera, présentation officielle et respectueuse à Thorgar par Kael.

## Manques ou incohérences détectés

- Manque détecté : aucune fiche de caractéristiques ou bonus de compétences pour Nera et Kael ; les DD de scène existent, mais les résultats ont dû être simulés.
- Incohérence légère : le bureau de Thade est décrit dans la scène comme situé au dernier étage du Pavillon Nord ; la fiche de zone le situe comme bureau en angle deux étages au-dessus de l'aile de Thaumaturgie.
- Risque de fuite de secret : la fiche de lieu mentionne directement "coffret plombé sur l'étagère (os T-01 à T-04)" dans les détails. Si ce champ est visible hors vue MJ, il révèle trop tôt un secret majeur.
- Ambiguïté : le secret de scène indique que Thade sait qui profane les tombes, avec une formulation "ses propres agents ou les Endeuillés d'Edran Morn qu'il a indirectement encouragés". Pour l'arbitrage, il faudrait préciser la répartition exacte entre agents directs et relais indirects.

## Recommandations

### Bug

- Protéger le champ de lieu qui révèle "os T-01 à T-04" afin qu'il ne soit jamais affiché aux joueurs.
- Harmoniser la localisation du bureau de Thade entre scène et fiche de zone.

### Dette technique

- Ajouter des profils mécaniques minimaux pour Nera et Kael, ou définir une règle de simulation des DD.
- Ajouter un état de campagne sérialisé par front/horloge pour éviter les mises à jour manuelles divergentes.

### Amélioration UX

- Séparer les champs "Visible PJ", "MJ seulement" et "Secret de campagne" dans les fiches de lieux, PNJ et scènes.
- Afficher les objets manipulables de scène : ordre de mission, bourse, coffret.

### Amélioration narrative

- Préciser ce que Thade accepte de dire sur les "fragments" sans révéler les os.
- Donner une ou deux phrases de Thade sur Thorgar pour préparer la tension entre Université et Communauté Naine sans la résoudre.
