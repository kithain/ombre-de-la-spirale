# La Mort de Jaren Velt

## Objectif de scène

Déterminer la cause de la mort, récupérer les notes et décider quoi faire.

## Sources consultées

- src/data/scenarios/scenario1_sept_thanes.js : scène `s1_mort_jaren`, acte "Acte I — L'Engagement".
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
On vous trouve à l'aube. Jaren Velt est mort dans le couloir du troisième étage. Assis contre le mur, comme s'il s'était assoupi. Ses yeux sont ouverts. Son carnet est à ses côtés, ouvert à une page blanche. Aucune trace de sang, aucune trace de lutte.

L'air sent la lavande.

[Informations visibles]
- Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air.
- Déterminer la cause de la mort, récupérer les notes et décider quoi faire.
- La rune sur la nuque

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scène continue : Rune de Dissection à Distance sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Outils d'Université sur les tombes ; Runes dans l'os ; Froid du Mausolée ; Notes de Jaren ; Rune de Dissection à Distance
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Auteur prouvable du sort.
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
Nera tente une action concrète : examiner le corps (Médecine, Connaissances), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : fouiller le carnet de Jaren, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
protéger les preuves après un meurtre propre. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
fouiller le carnet de Jaren

#### 5. État de campagne

- Indices obtenus : Outils d'Université sur les tombes ; Runes dans l'os ; Froid du Mausolée ; Notes de Jaren ; Rune de Dissection à Distance
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
On vous trouve à l'aube. Jaren Velt est mort dans le couloir du troisième étage. Assis contre le mur, comme s'il s'était assoupi. Ses yeux sont ouverts. Son carnet est à ses côtés, ouvert à une page blanche. Aucune trace de sang, aucune trace de lutte.

L'air sent la lavande.

[Informations visibles]
- Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air.
- Déterminer la cause de la mort, récupérer les notes et décider quoi faire.
- Le parfum de lavande

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scène continue : Parfum de lavande sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Runes dans l'os ; Froid du Mausolée ; Notes de Jaren ; Rune de Dissection à Distance ; Parfum de lavande
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Auteur prouvable du sort.
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
Nera tente une action concrète : examiner le corps (Médecine, Connaissances), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : fouiller le carnet de Jaren, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
protéger les preuves après un meurtre propre. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
sentir le parfum de lavande

#### 5. État de campagne

- Indices obtenus : Runes dans l'os ; Froid du Mausolée ; Notes de Jaren ; Rune de Dissection à Distance ; Parfum de lavande
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
On vous trouve à l'aube. Jaren Velt est mort dans le couloir du troisième étage. Assis contre le mur, comme s'il s'était assoupi. Ses yeux sont ouverts. Son carnet est à ses côtés, ouvert à une page blanche. Aucune trace de sang, aucune trace de lutte.

L'air sent la lavande.

[Informations visibles]
- Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air.
- Déterminer la cause de la mort, récupérer les notes et décider quoi faire.
- Les pages arrachées

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
La scène continue : Pages arrachées sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Froid du Mausolée ; Notes de Jaren ; Rune de Dissection à Distance ; Parfum de lavande ; Pages arrachées
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Auteur prouvable du sort.
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
Nera tente une action concrète : examiner le corps (Médecine, Connaissances), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : fouiller le carnet de Jaren, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
protéger les preuves après un meurtre propre. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
décider à qui rapporter la découverte

#### 5. État de campagne

- Indices obtenus : Froid du Mausolée ; Notes de Jaren ; Rune de Dissection à Distance ; Parfum de lavande ; Pages arrachées
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Piste concrète choisie : continuer la scène

### Boucle 4

#### 1. MJ Valombre

[Scène]
On vous trouve à l'aube. Jaren Velt est mort dans le couloir du troisième étage. Assis contre le mur, comme s'il s'était assoupi. Ses yeux sont ouverts. Son carnet est à ses côtés, ouvert à une page blanche. Aucune trace de sang, aucune trace de lutte.

L'air sent la lavande.

[Informations visibles]
- Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air.
- Déterminer la cause de la mort, récupérer les notes et décider quoi faire.
- Les PJ doivent savoir que Jaren est mort, que ce n'est pas naturel et qu'une rune est sur sa nuque.

[Actions possibles évidentes]
- examiner le corps (Médecine, Connaissances)
- fouiller le carnet de Jaren
- sentir le parfum de lavande
- décider à qui rapporter la découverte

[Résolution]
Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.

[État de campagne]
- Indices obtenus : Notes de Jaren ; Rune de Dissection à Distance ; Parfum de lavande ; Pages arrachées ; Jaren était un témoin dangereux
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Prochaine piste choisie par les PJ : Vers `s1_temple_forgeron` : demander à Thorgar d'interpréter les runes et les rites.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Auteur prouvable du sort.
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
Nera tente une action concrète : examiner le corps (Médecine, Connaissances), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : fouiller le carnet de Jaren, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
protéger les preuves après un meurtre propre. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s1_temple_forgeron` : demander à Thorgar d'interpréter les runes et les rites.

#### 5. État de campagne

- Indices obtenus : Notes de Jaren ; Rune de Dissection à Distance ; Parfum de lavande ; Pages arrachées ; Jaren était un témoin dangereux
- Indices ratés, refusés ou perdus : Contenu exact du coffret ; Nature exacte des fragments disparus ; Commanditaire exact des profanations ; Sens complet des runes
- Décisions des PJ : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Conséquences visibles : Les PJ acceptent la mission, gardent le doute sur Thade et partent de nuit vers les Terrasses. ; Les PJ coopèrent avec Thorgar, gardent une copie des notes et surveillent Jaren. ; Conséquence intermédiaire jouée dans La Mort de Jaren Velt ; Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- PNJ affectés : thade_coren ; thorgar_pretre_nain ; jaren_velt
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. Les PJ voient les outils d'Université sur les tombes. ; front_sceau_qui_cede / menace_profanation_thanes : +1 segment (segment 1). Le froid s'étend. Les runes changent. Les lanternes funéraires s'éteignent. Les rites ordinaires ne suffisent plus. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 1). Des fragments d'os convergent vers la Tour. ; front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.
- Piste concrète choisie : Vers `s1_temple_forgeron` : demander à Thorgar d'interpréter les runes et les rites.


## Indices obtenus

- Rune de Dissection à Distance
- Parfum de lavande
- Pages arrachées
- Jaren était un témoin dangereux

## Indices ratés, refusés ou perdus

- Auteur prouvable du sort
- Contenu des pages arrachées

## Décisions des PJ

- Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.

## Conséquences visibles

- Les PJ conservent les notes restantes et cherchent un allié institutionnel au lieu d'accuser trop tôt.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- jaren_velt
- thade_coren

## Factions affectées

- Le Plan de Thade
- Le Sceau qui cède
- La Cité sous pression
- Les Factions de la Crise

## Fronts ou horloges modifiés

- front_plan_thade / menace_retour_sealine : +1 segment (segment 2). Thade n'a plus d'obstacle interne à l'Université. Les enquêtes sur S-01 sont enterrées avec Jaren. Les prélèvements continuent sans témoin gênant.

## Transition choisie par les PJ

Vers `s1_temple_forgeron` : demander à Thorgar d'interpréter les runes et les rites.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Auteur prouvable du sort.
- Indice raté/refusé/perdu pendant la simulation : Contenu des pages arrachées.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
