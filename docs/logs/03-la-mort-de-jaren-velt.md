# La Mort de Jaren Velt

## Objectif de scène

Déterminer la cause de la mort, récupérer les notes et décider quoi faire.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scene `s1_mort_jaren`, acte "Acte I — L'Engagement".
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
Un messager appelle les PJ : Jaren est mort dans un couloir du Pavillon Nord.

[Informations visibles]
Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air. ; Les PJ doivent savoir que Jaren est mort, que ce n'est pas naturel et qu'une rune est sur sa nuque. ; Rune de Dissection a Distance

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La mort de Jaren refroidit les temoins

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : La scene ne donne pas de procedure claire pour securiser legalement les preuves dans l'Universite.
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
Nera propose une action concrete liee a la scene : examiner le corps (Médecine, Connaissances) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : fouiller le carnet de Jaren tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
scene de crime a l'Universite. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
fouiller le carnet de Jaren

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 2

#### 1. MJ Valombre

[Scène]
Nera fouille les angles morts et les pages arrachees ; Kael contient les etudiants paniques.

[Informations visibles]
Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air. ; Les PJ doivent savoir que Jaren est mort, que ce n'est pas naturel et qu'une rune est sur sa nuque. ; Parfum de lavande sur la scene

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. L'Universite commence a refermer les portes

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : La scene ne donne pas de procedure claire pour securiser legalement les preuves dans l'Universite.
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
Nera propose une action concrete liee a la scene : examiner le corps (Médecine, Connaissances) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : fouiller le carnet de Jaren tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
scene de crime a l'Universite. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
sentir le parfum de lavande

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 3

#### 1. MJ Valombre

[Scène]
Les traces de lavande et la rune de Dissection a Distance rendent le meurtre trop propre pour un accident.

[Informations visibles]
Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air. ; Les PJ doivent savoir que Jaren est mort, que ce n'est pas naturel et qu'une rune est sur sa nuque. ; Pages arrachees dans les notes de Jaren

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Nera et Kael se mefient ouvertement du mandat initial

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : encore en discussion dans la scene

[Rapport de test]
- Bug : La scene ne donne pas de procedure claire pour securiser legalement les preuves dans l'Universite.
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
Nera propose une action concrete liee a la scene : examiner le corps (Médecine, Connaissances) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : fouiller le carnet de Jaren tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
scene de crime a l'Universite. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
décider à qui rapporter la découverte

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 4

#### 1. MJ Valombre

[Scène]
Les PJ choisissent de proteger les preuves et de chercher un allié institutionnel au lieu d'accuser Thade sans preuve.

[Informations visibles]
Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air. ; Les PJ doivent savoir que Jaren est mort, que ce n'est pas naturel et qu'une rune est sur sa nuque. ; Jaren etait implique dans les prelevements

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Nera et Kael se mefient ouvertement du mandat initial

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : Vers `s1_temple_forgeron` : retourner vers Thorgar pour comprendre les runes et les rites.

[Rapport de test]
- Bug : La scene ne donne pas de procedure claire pour securiser legalement les preuves dans l'Universite.
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
Nera propose une action concrete liee a la scene : examiner le corps (Médecine, Connaissances) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : fouiller le carnet de Jaren tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
scene de crime a l'Universite. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s1_temple_forgeron` : retourner vers Thorgar pour comprendre les runes et les rites.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : Vers `s1_temple_forgeron` : retourner vers Thorgar pour comprendre les runes et les rites.


## Indices obtenus

- Rune de Dissection a Distance
- Parfum de lavande sur la scene
- Pages arrachees dans les notes de Jaren
- Jaren etait implique dans les prelevements

## Indices ratés, refusés ou perdus

- Auteur direct du sort
- Contenu des pages arrachees

## Décisions des PJ

- Ne pas accuser Thade publiquement
- Chercher une personne capable de proteger les preuves
- Conserver les notes restantes

## Conséquences visibles

- La mort de Jaren refroidit les temoins
- L'Universite commence a refermer les portes
- Nera et Kael se mefient ouvertement du mandat initial

## PNJ affectés

- Jaren Velt
- Thade Coren hors champ
- Etudiants de l'Universite

## Factions affectées

- Universite Arcanique
- Conseil de Valombre

## Fronts ou horloges modifiés

- front_plan_thade / menace_retour_sealine : +1 segment (segment 2) - Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.

État retenu pour la campagne :
- front_plan_thade / menace_retour_sealine : 2/6

## Transition choisie par les PJ

Vers `s1_temple_forgeron` : retourner vers Thorgar pour comprendre les runes et les rites.

## Manques ou incohérences détectés

- La scene ne donne pas de procedure claire pour securiser legalement les preuves dans l'Universite.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
