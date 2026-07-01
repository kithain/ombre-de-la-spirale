# Première Descente aux Terrasses

## Objectif de scène

Examiner les tombes profanées, identifier la méthode des prélèvements et évaluer l'étendue des dégâts.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scene `s1_premiere_descente`, acte "Acte I — L'Engagement".
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
Arrivee nocturne aux grilles : Nera observe les ombres, Kael se presente a Thorgar avec respect.

[Informations visibles]
Les PJ examinent les tombes profanées. Thorgar les accueille avec réserve. Les dalles portent des traces de prélèvement. Jaren Velt, étudiant de l'Université, est présent pour 'assister' — en réalité pour surveiller. ; Les PJ doivent comprendre que les profanations ciblent les Thanes et que les outils viennent de l'Université. ; Ciselets d'Universite utilises sous les dalles

[Actions possibles évidentes]
- examiner les dalles et les outils
- parler à Thorgar
- observer Jaren et son carnet
- demander à voir le Mausolée

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thorgar accepte une cooperation tendue

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue
- PNJ affectés : Thade Coren ; Thorgar
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : Les effets de fronts donnent deux fois un segment 1 au Plan de Thade entre scene 1 et scene 2.
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
Nera propose une action concrete liee a la scene : examiner les dalles et les outils en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : parler à Thorgar tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
enquete prudente au Cimetiere des Terrasses. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
parler à Thorgar

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue
- PNJ affectés : Thade Coren ; Thorgar
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6
- Piste concrète choisie : continuer la scene

### Boucle 2

#### 1. MJ Valombre

[Scène]
Thorgar teste leur franchise et montre les tombes touchees sans leur faire confiance entierement.

[Informations visibles]
Les PJ examinent les tombes profanées. Thorgar les accueille avec réserve. Les dalles portent des traces de prélèvement. Jaren Velt, étudiant de l'Université, est présent pour 'assister' — en réalité pour surveiller. ; Les PJ doivent comprendre que les profanations ciblent les Thanes et que les outils viennent de l'Université. ; Runes dans l'os des tombes touchees

[Actions possibles évidentes]
- examiner les dalles et les outils
- parler à Thorgar
- observer Jaren et son carnet
- demander à voir le Mausolée

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Jaren comprend qu'il est observe

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : Les effets de fronts donnent deux fois un segment 1 au Plan de Thade entre scene 1 et scene 2.
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
Nera propose une action concrete liee a la scene : examiner les dalles et les outils en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : parler à Thorgar tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
enquete prudente au Cimetiere des Terrasses. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
observer Jaren et son carnet

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6
- Piste concrète choisie : continuer la scene

### Boucle 3

#### 1. MJ Valombre

[Scène]
Nera examine les passages sous les dalles ; Kael protege la scene et interroge Jaren sans l'accuser.

[Informations visibles]
Les PJ examinent les tombes profanées. Thorgar les accueille avec réserve. Les dalles portent des traces de prélèvement. Jaren Velt, étudiant de l'Université, est présent pour 'assister' — en réalité pour surveiller. ; Les PJ doivent comprendre que les profanations ciblent les Thanes et que les outils viennent de l'Université. ; Froid anormal du Mausolee

[Actions possibles évidentes]
- examiner les dalles et les outils
- parler à Thorgar
- observer Jaren et son carnet
- demander à voir le Mausolée

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Le Cimetière devient une scene de crise active

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : Les effets de fronts donnent deux fois un segment 1 au Plan de Thade entre scene 1 et scene 2.
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
Nera propose une action concrete liee a la scene : examiner les dalles et les outils en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : parler à Thorgar tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
enquete prudente au Cimetiere des Terrasses. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
demander à voir le Mausolée

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale
- Piste concrète choisie : continuer la scene

### Boucle 4

#### 1. MJ Valombre

[Scène]
Les PJ repartent avec des indices materiels et choisissent de garder une copie de leurs notes avant tout rapport a Thade.

[Informations visibles]
Les PJ examinent les tombes profanées. Thorgar les accueille avec réserve. Les dalles portent des traces de prélèvement. Jaren Velt, étudiant de l'Université, est présent pour 'assister' — en réalité pour surveiller. ; Les PJ doivent comprendre que les profanations ciblent les Thanes et que les outils viennent de l'Université. ; Notes de Jaren avec cachet de Caldris

[Actions possibles évidentes]
- examiner les dalles et les outils
- parler à Thorgar
- observer Jaren et son carnet
- demander à voir le Mausolée

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Le Cimetière devient une scene de crise active

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale
- Prochaine piste choisie par les PJ : Vers `s1_mort_jaren` : surveiller Jaren et comparer les notes avant de retourner a Thade.

[Rapport de test]
- Bug : Les effets de fronts donnent deux fois un segment 1 au Plan de Thade entre scene 1 et scene 2.
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
Nera propose une action concrete liee a la scene : examiner les dalles et les outils en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : parler à Thorgar tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
enquete prudente au Cimetiere des Terrasses. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s1_mort_jaren` : surveiller Jaren et comparer les notes avant de retourner a Thade.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale
- Piste concrète choisie : Vers `s1_mort_jaren` : surveiller Jaren et comparer les notes avant de retourner a Thade.


## Indices obtenus

- Ciselets d'Universite utilises sous les dalles
- Runes dans l'os des tombes touchees
- Froid anormal du Mausolee
- Notes de Jaren avec cachet de Caldris

## Indices ratés, refusés ou perdus

- Identite complete du commanditaire
- Sens complet des runes d'ancrage
- Role exact de Jaren

## Décisions des PJ

- Respecter l'autorite de Thorgar sur les tombes
- Ne pas tout remettre a Thade sans copie
- Suivre Jaren comme temoin potentiel

## Conséquences visibles

- Thorgar accepte une cooperation tendue
- Jaren comprend qu'il est observe
- Le Cimetière devient une scene de crise active

## PNJ affectés

- Thorgar
- Jaren Velt

## Factions affectées

- Communaute Naine
- Universite Arcanique

## Fronts ou horloges modifiés

- front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1) - Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus.
- front_plan_thade / menace_retour_sealine : +1 segment (segment 1) - Des fragments d'os convergent vers la Tour.

État retenu pour la campagne :
- front_sceau_qui_cede / menace_profanation_thanes : 1/6
- front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale

## Transition choisie par les PJ

Vers `s1_mort_jaren` : surveiller Jaren et comparer les notes avant de retourner a Thade.

## Manques ou incohérences détectés

- Les effets de fronts donnent deux fois un segment 1 au Plan de Thade entre scene 1 et scene 2.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
