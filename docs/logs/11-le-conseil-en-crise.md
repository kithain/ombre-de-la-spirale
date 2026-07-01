# Le Conseil en Crise

## Objectif de scène

Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.

## Sources consultées

- src/data/scenarios/scenario2_masques_nyx.js : scene `s2_conseil_crise`, acte "Acte I — La Crise s'Étend".
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
Le Conseil veut une version simple : vandales, Nyx ou trouble nain.

[Informations visibles]
Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien. ; Les PJ doivent comprendre que le Conseil est paralysé et que la pression extérieure (Caldris) est réelle. ; Le Conseil cherche un coupable simple

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Le Conseil temporise

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
- Bug : Les conditions exactes du vote du Conseil ne sont pas mecaniquement formalisees.
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
Nera propose une action concrete liee a la scene : observer les débats et identifier les factions en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : présenter des preuves si les PJ en ont tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
audience politique tendue. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
présenter des preuves si les PJ en ont

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
Nera montre les contradictions de registres ; Kael plaide pour une protection des quartiers menaces.

[Informations visibles]
Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien. ; Les PJ doivent comprendre que le Conseil est paralysé et que la pression extérieure (Caldris) est réelle. ; Olane peut encore parler

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La pression publique continue

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
- Bug : Les conditions exactes du vote du Conseil ne sont pas mecaniquement formalisees.
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
Nera propose une action concrete liee a la scene : observer les débats et identifier les factions en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : présenter des preuves si les PJ en ont tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
audience politique tendue. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

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

### Boucle 3

#### 1. MJ Valombre

[Scène]
Olane appuie les PJ, mais Hessa exige des garanties pour les Terrasses.

[Informations visibles]
Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien. ; Les PJ doivent comprendre que le Conseil est paralysé et que la pression extérieure (Caldris) est réelle. ; Hessa defend les clans

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Les PJ gagnent peu de temps

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
- Bug : Les conditions exactes du vote du Conseil ne sont pas mecaniquement formalisees.
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
Nera propose une action concrete liee a la scene : observer les débats et identifier les factions en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : présenter des preuves si les PJ en ont tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
audience politique tendue. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
décider quelle piste suivre après le Conseil

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
Le Conseil differe la loi martiale complete, mais exige des preuves plus solides.

[Informations visibles]
Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien. ; Les PJ doivent comprendre que le Conseil est paralysé et que la pression extérieure (Caldris) est réelle. ; Une loi martiale partielle menace

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Les PJ gagnent peu de temps

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : Vers `s2_endeuilles_edran` : comprendre la branche clandestine avant qu'elle serve de pretexte.

[Rapport de test]
- Bug : Les conditions exactes du vote du Conseil ne sont pas mecaniquement formalisees.
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
Nera propose une action concrete liee a la scene : observer les débats et identifier les factions en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : présenter des preuves si les PJ en ont tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
audience politique tendue. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s2_endeuilles_edran` : comprendre la branche clandestine avant qu'elle serve de pretexte.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : Vers `s2_endeuilles_edran` : comprendre la branche clandestine avant qu'elle serve de pretexte.


## Indices obtenus

- Le Conseil cherche un coupable simple
- Olane peut encore parler
- Hessa defend les clans
- Une loi martiale partielle menace

## Indices ratés, refusés ou perdus

- Vote definitif contre la repression
- Mandat complet contre Thade

## Décisions des PJ

- Presenter des preuves sans tout reveler
- Chercher les Endeuilles
- Eviter que Nyx serve de bouc emissaire global

## Conséquences visibles

- Le Conseil temporise
- La pression publique continue
- Les PJ gagnent peu de temps

## PNJ affectés

- Avel Ronce
- Hessa Brunefer
- Maera Olane
- Patrouilles mixtes

## Factions affectées

- Conseil
- Universite
- Communaute Naine

## Fronts ou horloges modifiés

- Aucun effet de front automatique source pour cette scene, ou effet volontairement narratif.

État retenu pour la campagne :
- front_cite_sous_pression : 2/6

## Transition choisie par les PJ

Vers `s2_endeuilles_edran` : comprendre la branche clandestine avant qu'elle serve de pretexte.

## Manques ou incohérences détectés

- Les conditions exactes du vote du Conseil ne sont pas mecaniquement formalisees.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
