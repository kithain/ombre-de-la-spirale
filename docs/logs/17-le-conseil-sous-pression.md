# Le Conseil sous Pression

## Objectif de scène

Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.

## Sources consultées

- src/data/scenarios/scenario2_masques_nyx.js : scene `s2_conseil_sous_pression`, acte "Acte I — La Crise s'Étend".
- src/data/scenarios/effetsFronts.js : effets de fronts lies a la scene.
- src/data/scenarios/fronts.js : fronts, horloges et consequences globales.
- src/data/personnages/pnj.js et fichiers specialises : PNJ lies par `idsPnj`.
- src/data/personnages/factions.js : factions affectees.
- src/data/universe/universeZones.js : lieu lie par `idLieu` quand disponible.
- .agents/MJ Valombre.toml, .agents/PJ Valombre 1.toml, .agents/PJ Valombre 2.toml : protocole de simulation.

## Nombre de boucles

4 boucles complètes.

## Log complet boucle par boucle

### Boucle 1

#### 1. MJ Valombre

[Scène]
Les PJ apportent lettres, route bouclee, entrepots pleins et temoignages de dephasage.

[Informations visibles]
Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent. ; Le Conseil de Valombre est paralysé. Caldris menace d'un blocus. Le Champion monte la pression. Les PJ peuvent influencer le résultat. ; Preuve de Caldris

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Le Champion perd une partie du terrain politique

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : Les pouvoirs exacts du mandat limite contre la Tour restent a formaliser.
- Dette technique : Les jets sont simules faute de fiches mecaniques completes pour Nera et Kael.
- Amélioration UX : Mettre en avant les indices manipulables et les secrets MJ separes des informations visibles.
- Amélioration narrative : La scene tient mieux quand les PNJ reagissent avant toute transition.

Que faites-vous maintenant, et qu'essayez-vous de verifier avant d'aller plus loin ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera cherche les failles, les angles morts et ce que les puissants essaient de garder hors champ. Elle reste attentive a ce que la scene montre vraiment, sans deduire les secrets non reveles.

Dialogue :
"Je veux voir ce qui ne colle pas avant qu'on nous explique ce que nous sommes censes croire."

Questions au MJ :
Qu'est-ce que Nera peut observer concretement depuis sa position actuelle : trace, serrure, issue, temoin nerveux ou objet de valeur narrative ?

Action :
Nera propose une action concrete liee a la scene : présenter les preuves du déphasage au Conseil en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : négocier avec les conseillers tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
decision civique sous preuves. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
négocier avec les conseillers

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 2

#### 1. MJ Valombre

[Scène]
Nera demonte les recits pratiques ; Kael plaide contre une loi martiale aveugle.

[Informations visibles]
Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent. ; Le Conseil de Valombre est paralysé. Caldris menace d'un blocus. Le Champion monte la pression. Les PJ peuvent influencer le résultat. ; Le Conseil sait que Valombre est deja piegee

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Le Conseil n'est plus totalement aveugle

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : Les pouvoirs exacts du mandat limite contre la Tour restent a formaliser.
- Dette technique : Les jets sont simules faute de fiches mecaniques completes pour Nera et Kael.
- Amélioration UX : Mettre en avant les indices manipulables et les secrets MJ separes des informations visibles.
- Amélioration narrative : La scene tient mieux quand les PNJ reagissent avant toute transition.

Que faites-vous maintenant, et qu'essayez-vous de verifier avant d'aller plus loin ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera teste une approche discrete sans utiliser d'information qu'elle ne possede pas. Elle reste attentive a ce que la scene montre vraiment, sans deduire les secrets non reveles.

Dialogue :
"Je veux voir ce qui ne colle pas avant qu'on nous explique ce que nous sommes censes croire."

Questions au MJ :
Qu'est-ce que Nera peut observer concretement depuis sa position actuelle : trace, serrure, issue, temoin nerveux ou objet de valeur narrative ?

Action :
Nera propose une action concrete liee a la scene : présenter les preuves du déphasage au Conseil en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : négocier avec les conseillers tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
decision civique sous preuves. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
décider quelle piste suivre (Réserve, Voss, assaut)

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 3

#### 1. MJ Valombre

[Scène]
Maelric confirme que Caldris n'atteint plus Valombre par les routes ordinaires.

[Informations visibles]
Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent. ; Le Conseil de Valombre est paralysé. Caldris menace d'un blocus. Le Champion monte la pression. Les PJ peuvent influencer le résultat. ; Mandat limite pour agir contre la Tour

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thade accelerera s'il apprend le mandat

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : Les pouvoirs exacts du mandat limite contre la Tour restent a formaliser.
- Dette technique : Les jets sont simules faute de fiches mecaniques completes pour Nera et Kael.
- Amélioration UX : Mettre en avant les indices manipulables et les secrets MJ separes des informations visibles.
- Amélioration narrative : La scene tient mieux quand les PNJ reagissent avant toute transition.

Que faites-vous maintenant, et qu'essayez-vous de verifier avant d'aller plus loin ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera transforme les indices visibles en levier concret pour la suite. Elle reste attentive a ce que la scene montre vraiment, sans deduire les secrets non reveles.

Dialogue :
"Je veux voir ce qui ne colle pas avant qu'on nous explique ce que nous sommes censes croire."

Questions au MJ :
Qu'est-ce que Nera peut observer concretement depuis sa position actuelle : trace, serrure, issue, temoin nerveux ou objet de valeur narrative ?

Action :
Nera propose une action concrete liee a la scene : présenter les preuves du déphasage au Conseil en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : négocier avec les conseillers tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
decision civique sous preuves. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
éventuellement confronter le Champion avec les preuves

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 4

#### 1. MJ Valombre

[Scène]
Le Conseil autorise une action limitee contre la Tour et suspend la repression generale.

[Informations visibles]
Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent. ; Le Conseil de Valombre est paralysé. Caldris menace d'un blocus. Le Champion monte la pression. Les PJ peuvent influencer le résultat. ; Olane conserve un relais

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thade accelerera s'il apprend le mandat

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : Vers `s2_reserve_interdite` : obtenir la preuve ecrite des recherches de Thade.

[Rapport de test]
- Bug : Les pouvoirs exacts du mandat limite contre la Tour restent a formaliser.
- Dette technique : Les jets sont simules faute de fiches mecaniques completes pour Nera et Kael.
- Amélioration UX : Mettre en avant les indices manipulables et les secrets MJ separes des informations visibles.
- Amélioration narrative : La scene tient mieux quand les PNJ reagissent avant toute transition.

Vous avez formule votre prochain mouvement ; comment vous organisez-vous pour la transition ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera cherche les failles, les angles morts et ce que les puissants essaient de garder hors champ. Elle reste attentive a ce que la scene montre vraiment, sans deduire les secrets non reveles.

Dialogue :
"Je veux voir ce qui ne colle pas avant qu'on nous explique ce que nous sommes censes croire."

Questions au MJ :
Qu'est-ce que Nera peut observer concretement depuis sa position actuelle : trace, serrure, issue, temoin nerveux ou objet de valeur narrative ?

Action :
Nera propose une action concrete liee a la scene : présenter les preuves du déphasage au Conseil en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : négocier avec les conseillers tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
decision civique sous preuves. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s2_reserve_interdite` : obtenir la preuve ecrite des recherches de Thade.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : Vers `s2_reserve_interdite` : obtenir la preuve ecrite des recherches de Thade.


## Indices obtenus

- Preuve de Caldris
- Le Conseil sait que Valombre est deja piegee
- Mandat limite pour agir contre la Tour
- Olane conserve un relais

## Indices ratés, refusés ou perdus

- Consensus public complet
- Arrestation immediate de Thade

## Décisions des PJ

- Eviter la loi martiale totale
- Agir vite contre la Tour
- Utiliser les preuves sans livrer la Resistance

## Conséquences visibles

- Le Champion perd une partie du terrain politique
- Le Conseil n'est plus totalement aveugle
- Thade accelerera s'il apprend le mandat

## PNJ affectés

- Avel Ronce
- Hessa Brunefer
- Maelric
- Olane

## Factions affectées

- Conseil
- Caldris
- Universite
- Guilde Marchande

## Fronts ou horloges modifiés

- front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4) - Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer.
- front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4) - Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.

État retenu pour la campagne :
- front_cite_sous_pression : stabilise a 3/6
- front_dephasage / menace_dephasage_revelation : 5/6

## Transition choisie par les PJ

Vers `s2_reserve_interdite` : obtenir la preuve ecrite des recherches de Thade.

## Manques ou incohérences détectés

- Les pouvoirs exacts du mandat limite contre la Tour restent a formaliser.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
