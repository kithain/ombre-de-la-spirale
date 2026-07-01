# Le Bureau d'Olane

## Objectif de scène

Gagner la confiance d'Olane, partager les indices et obtenir son aide.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scene `s1_bureau_olane`, acte "Acte II — La Découverte du Verrou".
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
Olane recoit les PJ dans un bureau encombre de chiffres, deja isolee par ses pairs.

[Informations visibles]
Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée. ; Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves. ; Flux arcaniques detournes vers la Tour

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Olane devient alliee

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
- Bug : Les pouvoirs exacts d'Olane comme rectrice/conseillere varient selon les sources.
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
Nera propose une action concrete liee a la scene : partager les indices (S-01, runes, cachet de Caldris) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : demander ce qu'elle sait sur la Tour tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
alliance institutionnelle fragile. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
demander ce qu'elle sait sur la Tour

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
Nera verifie que personne n'ecoute ; Kael expose les preuves sans transformer Olane en subordonnee.

[Informations visibles]
Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée. ; Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves. ; Olane isolee par l'Universite

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. L'Universite se crispe autour des acces sensibles

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
- Bug : Les pouvoirs exacts d'Olane comme rectrice/conseillere varient selon les sources.
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
Nera propose une action concrete liee a la scene : partager les indices (S-01, runes, cachet de Caldris) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : demander ce qu'elle sait sur la Tour tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
alliance institutionnelle fragile. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
demander une couverture institutionnelle

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
Olane confirme que des flux arcaniques sont detournes vers la Tour et que ses acces sont restreints.

[Informations visibles]
Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée. ; Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves. ; Preuves utilisables si formalisees

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thade peut apprendre que les PJ ne sont plus dociles

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
- Bug : Les pouvoirs exacts d'Olane comme rectrice/conseillere varient selon les sources.
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
Nera propose une action concrete liee a la scene : partager les indices (S-01, runes, cachet de Caldris) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : demander ce qu'elle sait sur la Tour tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
alliance institutionnelle fragile. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
proposer de rassembler des preuves publiques

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
Les PJ choisissent de proteger Olane et de suivre les os par les egouts et le Cimetière.

[Informations visibles]
Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée. ; Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves. ; La Tour devient cible d'enquete

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thade peut apprendre que les PJ ne sont plus dociles

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : Vers `s1_retour_cimetiere` : verifier l'etat du sceau et les nouvelles profanations.

[Rapport de test]
- Bug : Les pouvoirs exacts d'Olane comme rectrice/conseillere varient selon les sources.
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
Nera propose une action concrete liee a la scene : partager les indices (S-01, runes, cachet de Caldris) en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : demander ce qu'elle sait sur la Tour tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
alliance institutionnelle fragile. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s1_retour_cimetiere` : verifier l'etat du sceau et les nouvelles profanations.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : Vers `s1_retour_cimetiere` : verifier l'etat du sceau et les nouvelles profanations.


## Indices obtenus

- Flux arcaniques detournes vers la Tour
- Olane isolee par l'Universite
- Preuves utilisables si formalisees
- La Tour devient cible d'enquete

## Indices ratés, refusés ou perdus

- Identite de tous les loyalistes de la Tour
- Plan complet de Thade

## Décisions des PJ

- Soutenir Olane
- Ne pas exposer publiquement les preuves trop tot
- Retourner au Cimetière pour evaluer l'urgence

## Conséquences visibles

- Olane devient alliee
- L'Universite se crispe autour des acces sensibles
- Thade peut apprendre que les PJ ne sont plus dociles

## PNJ affectés

- Maera Olane
- Thade Coren hors champ

## Factions affectées

- Universite Arcanique
- Conseil de Valombre

## Fronts ou horloges modifiés

- front_plan_thade / menace_retour_sealine : +1 segment (segment 2) - Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables.
- front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1) - Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.

État retenu pour la campagne :
- front_cite_sous_pression : 1/6
- front_plan_thade : maintenu a 2/6 car Olane est protegee

## Transition choisie par les PJ

Vers `s1_retour_cimetiere` : verifier l'etat du sceau et les nouvelles profanations.

## Manques ou incohérences détectés

- Les pouvoirs exacts d'Olane comme rectrice/conseillere varient selon les sources.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
