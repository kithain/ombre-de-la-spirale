# Le Conseil en Crise

## Objectif de scène

Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.

## Sources consultées

- src/data/scenarios/scenario2_masques_nyx.js : scène `s2_conseil_crise`, acte "Acte I — La Crise s'Étend".
- src/data/scenarios/effetsFronts.js : effets de fronts par scène.
- src/data/scenarios/fronts.js : horloges et conséquences globales.
- src/data/personnages/pnj.js et registres spécialisés : PNJ liés à la scène.
- src/data/personnages/factions.js : factions et objectifs.
- src/data/universe/universeZones.js : lieux liés par `idLieu`.
- .agents/MJ Valombre.toml, .agents/PJ Valombre 1.toml, .agents/PJ Valombre 2.toml : contraintes d'incarnation.

## Nombre de boucles

4 boucles complètes.

## Log complet boucle par boucle

### Boucle 1

#### 1. MJ Valombre

[Scène]
La salle du Conseil est voûtée, éclairée par des lampes d'ambre. Avel Ronce est assis derrière la table surélevée, l'ordre du jour sous les doigts. Hessa Brunefer se tient à sa droite, les bras croisés. L'Émissaire Maelric de Caldris est à gauche, pâle, un carnet à la main.

Avel Ronce ouvre la session : « Le Conseil doit répondre aux tensions récentes et aux inquiétudes de nos partenaires extérieurs. »

Hessa Brunefer parle la première : « Les Terrasses ne seront pas placées sous tutelle. Les clans ne paieront pas pour les actes d'un étranger. »

Maelric pose une carte sur la table : « Valombre n'est plus atteignable par les routes normales. Si le Conseil ne prouve pas qu'il contrôle la situation, Caldris imposera la quarantaine dans dix jours. »

Avel Ronce regarde ses notes. « Nous allons examiner ces questions en commission. »

[Informations visibles]
- Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien.
- Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.
- L'ultimatum de Caldris

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scène continue : Le Conseil cherche un coupable simple sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : La Résistance offre une voie hors Université ; Champion de la Bannière Pure ; Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau. ; Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique.
- Conséquences visibles : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Vote définitif contre la répression.
- Dette technique : Les DD sont simulés faute de fiche mécanique complète pour Nera et Kael.
- Amélioration UX : Les informations visibles, notes MJ et secrets doivent rester séparés.
- Amélioration narrative : La boucle garde une conséquence visible sans forcer une solution unique.

Que faites-vous maintenant, et quelle piste voulez-vous vérifier avant d'aller plus loin ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera reste mobile, observatrice et méfiante. Elle ne déduit rien des secrets non découverts ; elle travaille à partir de ce qui vient d'être vu ou dit.

Dialogue :
"Je veux une preuve qui survive à la version officielle."

Questions au MJ :
Quelles failles, issues, traces, objets ou contradictions Nera peut-elle examiner sans s'exposer inutilement ?

Action :
Nera tente une action concrète : observer les débats et identifier les factions, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : présenter des preuves si les PJ en ont, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
éviter une réponse institutionnelle aveugle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
présenter des preuves si les PJ en ont

#### 5. État de campagne

- Indices obtenus : La Résistance offre une voie hors Université ; Champion de la Bannière Pure ; Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau. ; Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique.
- Conséquences visibles : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
La salle du Conseil est voûtée, éclairée par des lampes d'ambre. Avel Ronce est assis derrière la table surélevée, l'ordre du jour sous les doigts. Hessa Brunefer se tient à sa droite, les bras croisés. L'Émissaire Maelric de Caldris est à gauche, pâle, un carnet à la main.

Avel Ronce ouvre la session : « Le Conseil doit répondre aux tensions récentes et aux inquiétudes de nos partenaires extérieurs. »

Hessa Brunefer parle la première : « Les Terrasses ne seront pas placées sous tutelle. Les clans ne paieront pas pour les actes d'un étranger. »

Maelric pose une carte sur la table : « Valombre n'est plus atteignable par les routes normales. Si le Conseil ne prouve pas qu'il contrôle la situation, Caldris imposera la quarantaine dans dix jours. »

Avel Ronce regarde ses notes. « Nous allons examiner ces questions en commission. »

[Informations visibles]
- Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien.
- Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.
- Les irrégularités de Thade

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scène continue : Olane peut encore parler sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Champion de la Bannière Pure ; Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple ; Olane peut encore parler
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau. ; Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique.
- Conséquences visibles : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Vote définitif contre la répression.
- Dette technique : Les DD sont simulés faute de fiche mécanique complète pour Nera et Kael.
- Amélioration UX : Les informations visibles, notes MJ et secrets doivent rester séparés.
- Amélioration narrative : La boucle garde une conséquence visible sans forcer une solution unique.

Que faites-vous maintenant, et quelle piste voulez-vous vérifier avant d'aller plus loin ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera reste mobile, observatrice et méfiante. Elle ne déduit rien des secrets non découverts ; elle travaille à partir de ce qui vient d'être vu ou dit.

Dialogue :
"Je veux une preuve qui survive à la version officielle."

Questions au MJ :
Quelles failles, issues, traces, objets ou contradictions Nera peut-elle examiner sans s'exposer inutilement ?

Action :
Nera tente une action concrète : observer les débats et identifier les factions, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : présenter des preuves si les PJ en ont, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
éviter une réponse institutionnelle aveugle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
négocier avec les conseillers

#### 5. État de campagne

- Indices obtenus : Champion de la Bannière Pure ; Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple ; Olane peut encore parler
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau. ; Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique.
- Conséquences visibles : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
La salle du Conseil est voûtée, éclairée par des lampes d'ambre. Avel Ronce est assis derrière la table surélevée, l'ordre du jour sous les doigts. Hessa Brunefer se tient à sa droite, les bras croisés. L'Émissaire Maelric de Caldris est à gauche, pâle, un carnet à la main.

Avel Ronce ouvre la session : « Le Conseil doit répondre aux tensions récentes et aux inquiétudes de nos partenaires extérieurs. »

Hessa Brunefer parle la première : « Les Terrasses ne seront pas placées sous tutelle. Les clans ne paieront pas pour les actes d'un étranger. »

Maelric pose une carte sur la table : « Valombre n'est plus atteignable par les routes normales. Si le Conseil ne prouve pas qu'il contrôle la situation, Caldris imposera la quarantaine dans dix jours. »

Avel Ronce regarde ses notes. « Nous allons examiner ces questions en commission. »

[Informations visibles]
- Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien.
- Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.
- Les PJ doivent comprendre que le Conseil est paralysé et que la pression extérieure (Caldris) est réelle.

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
La scène continue : Hessa défend les clans sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple ; Olane peut encore parler ; Hessa défend les clans
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau. ; Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique.
- Conséquences visibles : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Vote définitif contre la répression.
- Dette technique : Les DD sont simulés faute de fiche mécanique complète pour Nera et Kael.
- Amélioration UX : Les informations visibles, notes MJ et secrets doivent rester séparés.
- Amélioration narrative : La boucle garde une conséquence visible sans forcer une solution unique.

Que faites-vous maintenant, et quelle piste voulez-vous vérifier avant d'aller plus loin ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera reste mobile, observatrice et méfiante. Elle ne déduit rien des secrets non découverts ; elle travaille à partir de ce qui vient d'être vu ou dit.

Dialogue :
"Je veux une preuve qui survive à la version officielle."

Questions au MJ :
Quelles failles, issues, traces, objets ou contradictions Nera peut-elle examiner sans s'exposer inutilement ?

Action :
Nera tente une action concrète : observer les débats et identifier les factions, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : présenter des preuves si les PJ en ont, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
éviter une réponse institutionnelle aveugle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
décider quelle piste suivre après le Conseil

#### 5. État de campagne

- Indices obtenus : Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple ; Olane peut encore parler ; Hessa défend les clans
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau. ; Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique.
- Conséquences visibles : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Piste concrète choisie : continuer la scène

### Boucle 4

#### 1. MJ Valombre

[Scène]
La salle du Conseil est voûtée, éclairée par des lampes d'ambre. Avel Ronce est assis derrière la table surélevée, l'ordre du jour sous les doigts. Hessa Brunefer se tient à sa droite, les bras croisés. L'Émissaire Maelric de Caldris est à gauche, pâle, un carnet à la main.

Avel Ronce ouvre la session : « Le Conseil doit répondre aux tensions récentes et aux inquiétudes de nos partenaires extérieurs. »

Hessa Brunefer parle la première : « Les Terrasses ne seront pas placées sous tutelle. Les clans ne paieront pas pour les actes d'un étranger. »

Maelric pose une carte sur la table : « Valombre n'est plus atteignable par les routes normales. Si le Conseil ne prouve pas qu'il contrôle la situation, Caldris imposera la quarantaine dans dix jours. »

Avel Ronce regarde ses notes. « Nous allons examiner ces questions en commission. »

[Informations visibles]
- Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien.
- Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.
- Les PJ doivent savoir que le Conseil est paralysé et que la loi martiale est envisagée.

[Actions possibles évidentes]
- observer les débats et identifier les factions
- présenter des preuves si les PJ en ont
- négocier avec les conseillers
- décider quelle piste suivre après le Conseil

[Résolution]
Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.

[État de campagne]
- Indices obtenus : Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple ; Olane peut encore parler ; Hessa défend les clans
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.
- Conséquences visibles : Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise ; Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Prochaine piste choisie par les PJ : Vers `s2_endeuilles_edran` : comprendre les relais clandestins avant qu'ils ne servent de prétexte.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Vote définitif contre la répression.
- Dette technique : Les DD sont simulés faute de fiche mécanique complète pour Nera et Kael.
- Amélioration UX : Les informations visibles, notes MJ et secrets doivent rester séparés.
- Amélioration narrative : La boucle garde une conséquence visible sans forcer une solution unique.

Vous avez formulé votre prochain mouvement ; comment vous organisez-vous avant la transition ?

#### 2. PJ Valombre 1 - Nera Ombrefil

Réaction :
Nera reste mobile, observatrice et méfiante. Elle ne déduit rien des secrets non découverts ; elle travaille à partir de ce qui vient d'être vu ou dit.

Dialogue :
"Je veux une preuve qui survive à la version officielle."

Questions au MJ :
Quelles failles, issues, traces, objets ou contradictions Nera peut-elle examiner sans s'exposer inutilement ?

Action :
Nera tente une action concrète : observer les débats et identifier les factions, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : présenter des preuves si les PJ en ont, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
éviter une réponse institutionnelle aveugle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s2_endeuilles_edran` : comprendre les relais clandestins avant qu'ils ne servent de prétexte.

#### 5. État de campagne

- Indices obtenus : Garde divisée ; Rumeurs de soutien logistique ; Le Conseil cherche un coupable simple ; Olane peut encore parler ; Hessa défend les clans
- Indices ratés, refusés ou perdus : Toutes les caches de la Résistance ; Réaction immédiate de Thade ; Vote officiel définitif du Conseil ; Financeurs exacts du Champion ; Preuve publique suffisante
- Décisions des PJ : Les PJ demandent à Thorgar de préparer les rites et cherchent une piste souterraine. ; Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.
- Conséquences visibles : Les PJ s'allient prudemment avec Mara et acceptent l'aide de Sniv et du Collecteur. ; Les PJ rejoignent la Résistance, gardent Olane comme relais, et protègent le sceau avec Thorgar. ; Les PJ protègent les nains, calment partiellement la foule et cherchent une preuve politique. ; Conséquence intermédiaire jouée dans Le Conseil en Crise ; Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.
- PNJ affectés : champion_banniere_pure ; patrouille_mixte_conseil ; avel_ronce ; hessa_brunefer ; envoye_caldris
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 3). La dalle se déplace. Les anneaux du Puits vibrent. Des fissures apparaissent. Chaque perturbation se transmet aux autres tombes. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 1). Elian reçoit des patients « stabilisés ». Edran absorbe les familles isolées. Le Champion tient ses premiers discours. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 3). Le Champion impose un choix : pour ou contre Nyx. Edran introduit des rites interdits. Elian commence à effacer ses traces. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Pour rassurer la population, le Conseil désigne Nyx, les clans ou l'Université. Les informations qui compliquent ce récit sont écartées.
- Piste concrète choisie : Vers `s2_endeuilles_edran` : comprendre les relais clandestins avant qu'ils ne servent de prétexte.


## Indices obtenus

- Le Conseil cherche un coupable simple
- Olane peut encore parler
- Hessa défend les clans

## Indices ratés, refusés ou perdus

- Vote définitif contre la répression
- Mandat direct contre Thade

## Décisions des PJ

- Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.

## Conséquences visibles

- Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- avel_ronce
- hessa_brunefer
- envoye_caldris
- patrouille_mixte_conseil
- maera_olane

## Factions affectées

- Le Plan de Thade
- Les Factions de la Crise
- Le Sceau qui cède
- La Cité sous pression

## Fronts ou horloges modifiés

- Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.

## Transition choisie par les PJ

Vers `s2_endeuilles_edran` : comprendre les relais clandestins avant qu'ils ne servent de prétexte.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Vote définitif contre la répression.
- Indice raté/refusé/perdu pendant la simulation : Mandat direct contre Thade.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
