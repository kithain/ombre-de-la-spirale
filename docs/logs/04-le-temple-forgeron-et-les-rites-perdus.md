# Le Temple-Forgeron et les Rites Perdus

## Objectif de scène

Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scene `s1_temple_forgeron`, acte "Acte II — La Découverte du Verrou".
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
Thorgar recoit les PJ au Temple-Forgeron, mefiant mais marque par la mort de Jaren.

[Informations visibles]
Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi. ; Les PJ doivent comprendre que les tombes sont un système d'ancrage actif. ; Rites d'Edhrek-Murn

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thorgar passe de gardien hostile a allie prudent

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
- Bug : La scene ne precise pas le cout materiel exact d'une restauration partielle des rites.
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
Nera propose une action concrete liee a la scene : gagner la confiance de Thorgar (Diplomatie) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : lui demander de montrer les gestes rituels tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
negociation rituelle avec Thorgar. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
lui demander de montrer les gestes rituels

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 2

#### 1. MJ Valombre

[Scène]
Kael reconnait la faute morale faite aux morts ; Nera cherche le sens pratique des gestes et des failles.

[Informations visibles]
Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi. ; Les PJ doivent comprendre que les tombes sont un système d'ancrage actif. ; Runes d'ancrage

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La dimension religieuse de la crise devient centrale

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
- Bug : La scene ne precise pas le cout materiel exact d'une restauration partielle des rites.
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
Nera propose une action concrete liee a la scene : gagner la confiance de Thorgar (Diplomatie) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : lui demander de montrer les gestes rituels tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
negociation rituelle avec Thorgar. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
comparer les runes des os avec les runes des rites

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
Thorgar montre les gestes d'Edhrek-Murn et comprend avec eux que les rites maintiennent quelque chose d'actif.

[Informations visibles]
Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi. ; Les PJ doivent comprendre que les tombes sont un système d'ancrage actif. ; Les tombes forment un systeme actif

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La dimension religieuse de la crise devient centrale

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
- Bug : La scene ne precise pas le cout materiel exact d'une restauration partielle des rites.
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
Nera propose une action concrete liee a la scene : gagner la confiance de Thorgar (Diplomatie) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : lui demander de montrer les gestes rituels tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
negociation rituelle avec Thorgar. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
demander qui d'autre connaît ces rites

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
Les PJ demandent comment restaurer les rites et acceptent de chercher les os avant que d'autres tombes cedent.

[Informations visibles]
Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi. ; Les PJ doivent comprendre que les tombes sont un système d'ancrage actif. ; Restaurer les rites peut ralentir le sceau

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La dimension religieuse de la crise devient centrale

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : Vers `s1_archives_scellees` : chercher la trace medicale et administrative du protocole S-01.

[Rapport de test]
- Bug : La scene ne precise pas le cout materiel exact d'une restauration partielle des rites.
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
Nera propose une action concrete liee a la scene : gagner la confiance de Thorgar (Diplomatie) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : lui demander de montrer les gestes rituels tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
negociation rituelle avec Thorgar. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s1_archives_scellees` : chercher la trace medicale et administrative du protocole S-01.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : Vers `s1_archives_scellees` : chercher la trace medicale et administrative du protocole S-01.


## Indices obtenus

- Rites d'Edhrek-Murn
- Runes d'ancrage
- Les tombes forment un systeme actif
- Restaurer les rites peut ralentir le sceau

## Indices ratés, refusés ou perdus

- Architecture complete de la Spirale
- Emplacement des os deja preleves

## Décisions des PJ

- Traiter Thorgar comme un allie potentiel
- Chercher les archives pour confirmer S-01 et les prelevements
- Tenter de restaurer les rites si les os sont retrouves

## Conséquences visibles

- Thorgar passe de gardien hostile a allie prudent
- La dimension religieuse de la crise devient centrale

## PNJ affectés

- Thorgar

## Factions affectées

- Communaute Naine
- Universite Arcanique

## Fronts ou horloges modifiés

- Aucun effet de front automatique source pour cette scene, ou effet volontairement narratif.

État retenu pour la campagne :
- front_sceau_qui_cede : stable, restauration possible mais impossible sans os

## Transition choisie par les PJ

Vers `s1_archives_scellees` : chercher la trace medicale et administrative du protocole S-01.

## Manques ou incohérences détectés

- La scene ne precise pas le cout materiel exact d'une restauration partielle des rites.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
