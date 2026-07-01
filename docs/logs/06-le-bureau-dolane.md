# Le Bureau d'Olane

## Objectif de scène

Gagner la confiance d'Olane, partager les indices et obtenir son aide.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scène `s1_bureau_olane`, acte "Acte II — La Découverte du Verrou".
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
Le bureau d'Olane est petit, modeste, encombré de dossiers annotés. Une tasse de café d'orge fume sur le coin du bureau.

« Je sais pourquoi vous êtes là. Vous avez trouvé quelque chose. Ou vous soupçonnez quelque chose. Dans les deux cas, je veux l'entendre. »

[Informations visibles]
- Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée.
- Gagner la confiance d'Olane, partager les indices et obtenir son aide.
- Les flux détournés

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scène continue : Flux arcaniques détournés vers la Tour sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Tombes comme système actif ; Dossier Coren, S. - 12-VAEL ; Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments.
- Conséquences visibles : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Identité de tous les loyalistes.
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
Nera tente une action concrète : partager les indices (S-01, runes, cachet de Caldris), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : demander ce qu'elle sait sur la Tour, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
transformer les preuves en alliance institutionnelle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
demander ce qu'elle sait sur la Tour

#### 5. État de campagne

- Indices obtenus : Tombes comme système actif ; Dossier Coren, S. - 12-VAEL ; Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments.
- Conséquences visibles : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
Le bureau d'Olane est petit, modeste, encombré de dossiers annotés. Une tasse de café d'orge fume sur le coin du bureau.

« Je sais pourquoi vous êtes là. Vous avez trouvé quelque chose. Ou vous soupçonnez quelque chose. Dans les deux cas, je veux l'entendre. »

[Informations visibles]
- Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée.
- Gagner la confiance d'Olane, partager les indices et obtenir son aide.
- L'isolement d'Olane

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scène continue : Olane isolée sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Dossier Coren, S. - 12-VAEL ; Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour ; Olane isolée
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments.
- Conséquences visibles : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Identité de tous les loyalistes.
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
Nera tente une action concrète : partager les indices (S-01, runes, cachet de Caldris), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : demander ce qu'elle sait sur la Tour, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
transformer les preuves en alliance institutionnelle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
demander une couverture institutionnelle

#### 5. État de campagne

- Indices obtenus : Dossier Coren, S. - 12-VAEL ; Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour ; Olane isolée
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments.
- Conséquences visibles : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
Le bureau d'Olane est petit, modeste, encombré de dossiers annotés. Une tasse de café d'orge fume sur le coin du bureau.

« Je sais pourquoi vous êtes là. Vous avez trouvé quelque chose. Ou vous soupçonnez quelque chose. Dans les deux cas, je veux l'entendre. »

[Informations visibles]
- Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée.
- Gagner la confiance d'Olane, partager les indices et obtenir son aide.
- Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves.

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
La scène continue : La Tour devient cible d'enquête sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour ; Olane isolée ; La Tour devient cible d'enquête
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments.
- Conséquences visibles : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Identité de tous les loyalistes.
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
Nera tente une action concrète : partager les indices (S-01, runes, cachet de Caldris), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : demander ce qu'elle sait sur la Tour, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
transformer les preuves en alliance institutionnelle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
proposer de rassembler des preuves publiques

#### 5. État de campagne

- Indices obtenus : Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour ; Olane isolée ; La Tour devient cible d'enquête
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments.
- Conséquences visibles : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Piste concrète choisie : continuer la scène

### Boucle 4

#### 1. MJ Valombre

[Scène]
Le bureau d'Olane est petit, modeste, encombré de dossiers annotés. Une tasse de café d'orge fume sur le coin du bureau.

« Je sais pourquoi vous êtes là. Vous avez trouvé quelque chose. Ou vous soupçonnez quelque chose. Dans les deux cas, je veux l'entendre. »

[Informations visibles]
- Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée.
- Gagner la confiance d'Olane, partager les indices et obtenir son aide.
- Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves.

[Actions possibles évidentes]
- partager les indices (S-01, runes, cachet de Caldris)
- demander ce qu'elle sait sur la Tour
- demander une couverture institutionnelle
- proposer de rassembler des preuves publiques

[Résolution]
Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.

[État de campagne]
- Indices obtenus : Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour ; Olane isolée ; La Tour devient cible d'enquête
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.
- Conséquences visibles : Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane ; Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Prochaine piste choisie par les PJ : Vers `s1_retour_cimetiere` : mesurer l'urgence réelle aux tombes.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Identité de tous les loyalistes.
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
Nera tente une action concrète : partager les indices (S-01, runes, cachet de Caldris), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : demander ce qu'elle sait sur la Tour, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
transformer les preuves en alliance institutionnelle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s1_retour_cimetiere` : mesurer l'urgence réelle aux tombes.

#### 5. État de campagne

- Indices obtenus : Protocole S-01 ; Lien Thade - Nyx - Sealine ; Flux arcaniques détournés vers la Tour ; Olane isolée ; La Tour devient cible d'enquête
- Indices ratés, refusés ou perdus : Contenu des pages arrachées ; Architecture complète de la Spirale ; Emplacement des os prélevés ; Interprétation complète de la Larme ; Liste complète des responsabilités internes
- Décisions des PJ : Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.
- Conséquences visibles : Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives. ; Les PJ copient le dossier S-01 et cherchent Olane pour interpréter les éléments. ; Conséquence intermédiaire jouée dans Le Bureau d'Olane ; Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt ; sealine_coren ; maera_olane
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.
- Piste concrète choisie : Vers `s1_retour_cimetiere` : mesurer l'urgence réelle aux tombes.


## Indices obtenus

- Flux arcaniques détournés vers la Tour
- Olane isolée
- La Tour devient cible d'enquête

## Indices ratés, refusés ou perdus

- Identité de tous les loyalistes
- Plan complet de Thade

## Décisions des PJ

- Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.

## Conséquences visibles

- Les PJ protègent Olane, ne publient pas tout trop tôt et retournent vérifier le sceau.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- maera_olane

## Factions affectées

- Le Plan de Thade
- Le Sceau qui cède
- La Cité sous pression
- Les Factions de la Crise

## Fronts ou horloges modifiés

- front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Des salles sont scellées pour « travaux ». Des cours sont annulés. Les protections ordinaires de l'Université deviennent instables.
- front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 1). Commissions, expertises et conflits de compétence. Les responsables déplacent des preuves. Les dangers avancent sans réponse coordonnée.

## Transition choisie par les PJ

Vers `s1_retour_cimetiere` : mesurer l'urgence réelle aux tombes.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Identité de tous les loyalistes.
- Indice raté/refusé/perdu pendant la simulation : Plan complet de Thade.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
