# Le Temple-Forgeron et les Rites Perdus

## Objectif de scène

Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scène `s1_temple_forgeron`, acte "Acte II — La Découverte du Verrou".
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
Le Temple-Forgeron de Moradin est creusé dans la roche. Le martèlement de l'enclume accompagne les prières. Thorgar vous attend dans la chapelle souterraine, sous la forge.

« Je vais vous dire ce que je sais. Mais je ne sais pas grand-chose. Mes maîtres m'ont transmis les gestes. Pas le sens. Les gestes maintiennent quelque chose. Les gestes oublés laissent quelque chose passer. »

[Informations visibles]
- Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi.
- Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.
- Les gestes d'Edhrek-Murn

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scène continue : Rites d'Edhrek-Murn sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Rune de Dissection à Distance ; Parfum de lavande ; Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Architecture complète de la Spirale.
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
Nera tente une action concrète : gagner la confiance de Thorgar (Diplomatie), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : lui demander de montrer les gestes rituels, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
gagner la confiance rituelle de Thorgar. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
lui demander de montrer les gestes rituels

#### 5. État de campagne

- Indices obtenus : Rune de Dissection à Distance ; Parfum de lavande ; Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
Le Temple-Forgeron de Moradin est creusé dans la roche. Le martèlement de l'enclume accompagne les prières. Thorgar vous attend dans la chapelle souterraine, sous la forge.

« Je vais vous dire ce que je sais. Mais je ne sais pas grand-chose. Mes maîtres m'ont transmis les gestes. Pas le sens. Les gestes maintiennent quelque chose. Les gestes oublés laissent quelque chose passer. »

[Informations visibles]
- Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi.
- Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.
- Les runes dans l'os

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scène continue : Runes d'ancrage sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Parfum de lavande ; Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn ; Runes d'ancrage
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Architecture complète de la Spirale.
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
Nera tente une action concrète : gagner la confiance de Thorgar (Diplomatie), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : lui demander de montrer les gestes rituels, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
gagner la confiance rituelle de Thorgar. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
comparer les runes des os avec les runes des rites

#### 5. État de campagne

- Indices obtenus : Parfum de lavande ; Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn ; Runes d'ancrage
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
Le Temple-Forgeron de Moradin est creusé dans la roche. Le martèlement de l'enclume accompagne les prières. Thorgar vous attend dans la chapelle souterraine, sous la forge.

« Je vais vous dire ce que je sais. Mais je ne sais pas grand-chose. Mes maîtres m'ont transmis les gestes. Pas le sens. Les gestes maintiennent quelque chose. Les gestes oublés laissent quelque chose passer. »

[Informations visibles]
- Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi.
- Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.
- Les PJ doivent comprendre que les tombes sont un système d'ancrage actif.

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
La scène continue : Tombes comme système actif sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn ; Runes d'ancrage ; Tombes comme système actif
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Architecture complète de la Spirale.
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
Nera tente une action concrète : gagner la confiance de Thorgar (Diplomatie), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : lui demander de montrer les gestes rituels, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
gagner la confiance rituelle de Thorgar. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
demander qui d'autre connaît ces rites

#### 5. État de campagne

- Indices obtenus : Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn ; Runes d'ancrage ; Tombes comme système actif
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Piste concrète choisie : continuer la scène

### Boucle 4

#### 1. MJ Valombre

[Scène]
Le Temple-Forgeron de Moradin est creusé dans la roche. Le martèlement de l'enclume accompagne les prières. Thorgar vous attend dans la chapelle souterraine, sous la forge.

« Je vais vous dire ce que je sais. Mais je ne sais pas grand-chose. Mes maîtres m'ont transmis les gestes. Pas le sens. Les gestes maintiennent quelque chose. Les gestes oublés laissent quelque chose passer. »

[Informations visibles]
- Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi.
- Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.
- Les PJ doivent comprendre que les tombes sont un système d'ancrage actif.

[Actions possibles évidentes]
- gagner la confiance de Thorgar (Diplomatie)
- lui demander de montrer les gestes rituels
- comparer les runes des os avec les runes des rites
- demander qui d'autre connaît ces rites

[Résolution]
Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.

[État de campagne]
- Indices obtenus : Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn ; Runes d'ancrage ; Tombes comme système actif
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Prochaine piste choisie par les PJ : Vers `s1_archives_scellees` : chercher la trace S-01 et le lien entre Thade, Nyx et Sealine.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Architecture complète de la Spirale.
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
Nera tente une action concrète : gagner la confiance de Thorgar (Diplomatie), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : lui demander de montrer les gestes rituels, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
gagner la confiance rituelle de Thorgar. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s1_archives_scellees` : chercher la trace S-01 et le lien entre Thade, Nyx et Sealine.

#### 5. État de campagne

- Indices obtenus : Pages arrachées ; Jaren était un témoin dangereux ; Rites d'Edhrek-Murn ; Runes d'ancrage ; Tombes comme système actif
- Indices ratés, refusés ou perdus : Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes ; Auteur prouvable du sort ; Contenu des pages arrachées
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt. ; Conséquence intermédiaire jouée dans Le Temple-Forgeron et les Rites Perdus ; Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant. ; Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.
- Piste concrète choisie : Vers `s1_archives_scellees` : chercher la trace S-01 et le lien entre Thade, Nyx et Sealine.


## Indices obtenus

- Rites d'Edhrek-Murn
- Runes d'ancrage
- Tombes comme système actif

## Indices ratés, refusés ou perdus

- Architecture complète de la Spirale
- Emplacement des os prélevés

## Décisions des PJ

- Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.

## Conséquences visibles

- Les PJ traitent Thorgar comme un allié potentiel et décident de chercher les os et les archives.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- thorgar_pretre_nain

## Factions affectées

- Le Plan de Thade
- Le Sceau qui cède
- La Cité sous pression
- Les Factions de la Crise

## Fronts ou horloges modifiés

- Aucun effet de front automatique pour cette scène ou avancement volontairement narratif.

## Transition choisie par les PJ

Vers `s1_archives_scellees` : chercher la trace S-01 et le lien entre Thade, Nyx et Sealine.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Architecture complète de la Spirale.
- Indice raté/refusé/perdu pendant la simulation : Emplacement des os prélevés.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
