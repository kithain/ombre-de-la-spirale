# Le Choix

## Objectif de scène

Choisir le camp des PJ : servir Thade, le confronter, ou protéger le sceau avec la Résistance.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scene `s1_choix`, acte "Acte III — Le Tournant".
- src/data/scenarios/effetsFronts.js : effets de fronts lies a la scene.
- src/data/scenarios/fronts.js : fronts, horloges et consequences globales.
- src/data/personnages/pnj.js et fichiers specialises : PNJ lies par `idsPnj`.
- src/data/personnages/factions.js : factions affectees.
- src/data/universe/universeZones.js : lieu lie par `idLieu` quand disponible.
- .agents/MJ Valombre.toml, .agents/PJ Valombre 1.toml, .agents/PJ Valombre 2.toml : protocole de simulation.

## Nombre de boucles

5 boucles complètes.

## Log complet boucle par boucle

### Boucle 1

#### 1. MJ Valombre

[Scène]
Mara et Thorgar exposent la situation dans une salle de filtration neutre.

[Informations visibles]
Les PJ ont assez d'indices pour comprendre : Thade prélève les ossements des Thanes pour ouvrir le seuil de la Spirale. Il le fait pour Sealine. Le sceau cède. Ils doivent choisir : rapporter leurs découvertes à Thade, le confronter, ou rejoindre la Résistance et protéger le sceau. Ce choix définit la suite de la campagne. ; Les PJ doivent comprendre que Thade prélève les os pour ouvrir le seuil et qu'ils doivent choisir leur camp. ; Thade preleve les os pour ouvrir le seuil

[Actions possibles évidentes]
- écouter Mara et Thorgar exposer la situation
- débattre entre PJ des options
- choisir : Résistance, Thade, confrontation directe, ou troisième voie
- éventuellement demander du temps (avec conséquences)

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Thade devient adversaire actif

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
- Bug : Le choix peut partir vers plusieurs branches ; le test retient la branche Resistance pour poursuivre toute la campagne.
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
Nera propose une action concrete liee a la scene : écouter Mara et Thorgar exposer la situation en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : débattre entre PJ des options tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
dilemme de camp. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
débattre entre PJ des options

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
Nera defend l'alliance clandestine et le controle des egouts ; Kael exige une voie qui protege les tombes et les innocents.

[Informations visibles]
Les PJ ont assez d'indices pour comprendre : Thade prélève les ossements des Thanes pour ouvrir le seuil de la Spirale. Il le fait pour Sealine. Le sceau cède. Ils doivent choisir : rapporter leurs découvertes à Thade, le confronter, ou rejoindre la Résistance et protéger le sceau. Ce choix définit la suite de la campagne. ; Les PJ doivent comprendre que Thade prélève les os pour ouvrir le seuil et qu'ils doivent choisir leur camp. ; Restaurer les rites suppose de recuperer les os

[Actions possibles évidentes]
- écouter Mara et Thorgar exposer la situation
- débattre entre PJ des options
- choisir : Résistance, Thade, confrontation directe, ou troisième voie
- éventuellement demander du temps (avec conséquences)

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. Les PJ ont des ennemis a l'Universite

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
- Bug : Le choix peut partir vers plusieurs branches ; le test retient la branche Resistance pour poursuivre toute la campagne.
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
Nera propose une action concrete liee a la scene : écouter Mara et Thorgar exposer la situation en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : débattre entre PJ des options tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
dilemme de camp. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
choisir : Résistance, Thade, confrontation directe, ou troisième voie

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
Les PJ debattent : rapporter a Thade, le confronter, rejoindre la Resistance, ou tenter une voie mixte.

[Informations visibles]
Les PJ ont assez d'indices pour comprendre : Thade prélève les ossements des Thanes pour ouvrir le seuil de la Spirale. Il le fait pour Sealine. Le sceau cède. Ils doivent choisir : rapporter leurs découvertes à Thade, le confronter, ou rejoindre la Résistance et protéger le sceau. Ce choix définit la suite de la campagne. ; Les PJ doivent comprendre que Thade prélève les os pour ouvrir le seuil et qu'ils doivent choisir leur camp. ; La Resistance offre egouts et reseau

[Actions possibles évidentes]
- écouter Mara et Thorgar exposer la situation
- débattre entre PJ des options
- choisir : Résistance, Thade, confrontation directe, ou troisième voie
- éventuellement demander du temps (avec conséquences)

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La Resistance engage ses passages

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
- Bug : Le choix peut partir vers plusieurs branches ; le test retient la branche Resistance pour poursuivre toute la campagne.
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
Nera propose une action concrete liee a la scene : écouter Mara et Thorgar exposer la situation en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche une solution droite qui ne bloque pas l'enquete. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : débattre entre PJ des options tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
dilemme de camp. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
éventuellement demander du temps (avec conséquences)

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
Ils choisissent de proteger le sceau avec la Resistance tout en gardant Olane comme relais institutionnel.

[Informations visibles]
Les PJ ont assez d'indices pour comprendre : Thade prélève les ossements des Thanes pour ouvrir le seuil de la Spirale. Il le fait pour Sealine. Le sceau cède. Ils doivent choisir : rapporter leurs découvertes à Thade, le confronter, ou rejoindre la Résistance et protéger le sceau. Ce choix définit la suite de la campagne. ; Les PJ doivent comprendre que Thade prélève les os pour ouvrir le seuil et qu'ils doivent choisir leur camp. ; Le choix des PJ determine le scenario 2

[Actions possibles évidentes]
- écouter Mara et Thorgar exposer la situation
- débattre entre PJ des options
- choisir : Résistance, Thade, confrontation directe, ou troisième voie
- éventuellement demander du temps (avec conséquences)

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La Resistance engage ses passages

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
- Bug : Le choix peut partir vers plusieurs branches ; le test retient la branche Resistance pour poursuivre toute la campagne.
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
Nera propose une action concrete liee a la scene : écouter Mara et Thorgar exposer la situation en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael protege les innocents et pose la limite morale de la scene. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : débattre entre PJ des options tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
dilemme de camp. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
éventuellement demander du temps (avec conséquences)

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : continuer la scene

### Boucle 5

#### 1. MJ Valombre

[Scène]
Le prochain mouvement est formule : intercepter les caisses, calmer la cite et exposer Thade par preuves.

[Informations visibles]
Les PJ ont assez d'indices pour comprendre : Thade prélève les ossements des Thanes pour ouvrir le seuil de la Spirale. Il le fait pour Sealine. Le sceau cède. Ils doivent choisir : rapporter leurs découvertes à Thade, le confronter, ou rejoindre la Résistance et protéger le sceau. Ce choix définit la suite de la campagne. ; Les PJ doivent comprendre que Thade prélève les os pour ouvrir le seuil et qu'ils doivent choisir leur camp. ; Le choix des PJ determine le scenario 2

[Actions possibles évidentes]
- écouter Mara et Thorgar exposer la situation
- débattre entre PJ des options
- choisir : Résistance, Thade, confrontation directe, ou troisième voie
- éventuellement demander du temps (avec conséquences)

[Résolution]
La scene ne se conclut pas encore : les reactions des PNJ et des factions repondent aux actions precedentes. La Resistance engage ses passages

[État de campagne]
- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Prochaine piste choisie par les PJ : Vers `s2_emeute_place` : intervenir publiquement pendant que les factions exploitent la peur.

[Rapport de test]
- Bug : Le choix peut partir vers plusieurs branches ; le test retient la branche Resistance pour poursuivre toute la campagne.
- Dette technique : Les jets sont simules faute de fiches mecaniques completes pour Nera et Kael.
- Amélioration UX : Mettre en avant les indices manipulables et les secrets MJ separes des informations visibles.
- Amélioration narrative : La scene tient mieux quand les PNJ reagissent avant toute transition.

Vous avez formule votre prochain mouvement ; comment vous organisez-vous pour la transition ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera teste une approche discrete sans utiliser d'information qu'elle ne possede pas. Elle reste attentive a ce que la scene montre vraiment, sans deduire les secrets non reveles.

Dialogue :
"Je veux voir ce qui ne colle pas avant qu'on nous explique ce que nous sommes censes croire."

Questions au MJ :
Qu'est-ce que Nera peut observer concretement depuis sa position actuelle : trace, serrure, issue, temoin nerveux ou objet de valeur narrative ?

Action :
Nera propose une action concrete liee a la scene : écouter Mara et Thorgar exposer la situation en privilegient discretion, timing et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael evalue le risque tactique avant que le groupe ne s'engage davantage. Il ne conteste pas l'efficacite de Nera, mais veut eviter que le groupe ajoute une injustice a la crise.

Dialogue :
"Nous avancerons, mais pas au prix des gens que cette affaire broie deja."

Questions au MJ :
Qui est immediatement en danger, qui detient l'autorite locale, et quelle action evite le plus de torts maintenant ?

Action :
Kael propose une action concrete : débattre entre PJ des options tout en gardant une voie de dialogue ouverte.

#### 4. Coordination des PJ

Intention commune :
dilemme de camp. Les PJ cherchent a obtenir l'indice principal sans forcer une solution unique.

Désaccord éventuel :
Nera favorise la ruse et l'observation indirecte ; Kael demande que l'action reste defendable moralement. Le desaccord modifie la methode, pas l'objectif commun.

Piste concrète choisie :
Vers `s2_emeute_place` : intervenir publiquement pendant que les factions exploitent la peur.

#### 5. État de campagne

- Indices obtenus : Profanations au Cimetière des Terrasses ; Tombes des Sept Thanes ciblees ; Conseil indifférent ; Clans nains mefiants envers l'Universite
- Indices ratés, refusés ou perdus : Contenu exact du coffret plombe ; Nature exacte des fragments disparus ; Preuve directe d'implication de Thade ou de l'Universite ; Identite complete du commanditaire
- Décisions des PJ : Accepter la mission initiale sans confiance aveugle ; Partir de nuit vers les Terrasses ; Respecter l'autorite de Thorgar sur les tombes ; Ne pas tout remettre a Thade sans copie
- Conséquences visibles : Thade a recrute les PJ ; Les PJ gardent un doute sur leur mandataire ; Thorgar accepte une cooperation tendue ; Jaren comprend qu'il est observe
- PNJ affectés : Thade Coren ; Thorgar ; Jaren Velt ; Thade Coren hors champ
- Factions affectées : Universite Arcanique ; Communaute Naine ; Conseil de Valombre ; Syndicat des Brumes potentiel
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : 1/6 ; front_sceau_qui_cede / menace_profanation_thanes : 1/6 ; front_plan_thade / menace_retour_sealine : 1/6 confirme, doublon de libelle signale ; front_plan_thade / menace_retour_sealine : 2/6
- Piste concrète choisie : Vers `s2_emeute_place` : intervenir publiquement pendant que les factions exploitent la peur.


## Indices obtenus

- Thade preleve les os pour ouvrir le seuil
- Restaurer les rites suppose de recuperer les os
- La Resistance offre egouts et reseau
- Le choix des PJ determine le scenario 2

## Indices ratés, refusés ou perdus

- Reaction immediate de Thade au changement de camp
- Position officielle du Conseil

## Décisions des PJ

- Rejoindre la Resistance
- Proteer le sceau avec Thorgar
- Garder Olane comme alliee institutionnelle
- Ne plus transmettre les decouvertes a Thade

## Conséquences visibles

- Thade devient adversaire actif
- Les PJ ont des ennemis a l'Universite
- La Resistance engage ses passages

## PNJ affectés

- Mara
- Thorgar
- Olane hors champ
- Thade hors champ

## Factions affectées

- Resistance
- Communaute Naine
- Universite Arcanique

## Fronts ou horloges modifiés

- Aucun effet de front automatique source pour cette scene, ou effet volontairement narratif.

État retenu pour la campagne :
- Tous les fronts heritent du choix : depart S2 avec Resistance alliee et Universite hostile

## Transition choisie par les PJ

Vers `s2_emeute_place` : intervenir publiquement pendant que les factions exploitent la peur.

## Manques ou incohérences détectés

- Le choix peut partir vers plusieurs branches ; le test retient la branche Resistance pour poursuivre toute la campagne.

## Recommandations

### Bug

- Corriger toute divergence d'ID, de lieu ou de secret signalee dans les manques ci-dessus.

### Dette technique

- Ajouter un etat de campagne machine-readable pour les indices, les fronts, les PNJ allies et le decompte des victimes.

### Amélioration UX

- Separrer clairement les informations visibles PJ, les notes MJ et les secrets de campagne dans l'interface.

### Amélioration narrative

- Prevoir pour chaque scene une relance de PNJ ou de front qui conserve l'agence des PJ sans bloquer la progression.
