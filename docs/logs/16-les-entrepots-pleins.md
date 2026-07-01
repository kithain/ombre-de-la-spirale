# Les Entrepôts Pleins

## Objectif de scène

Comprendre pourquoi les convois ne partent plus et ce que cache Yselle.

## Sources consultées

- src/data/scenarios/scenario2_masques_nyx.js : scène `s2_entrepots_pleins`, acte "Acte I — La Crise s'Étend".
- src/data/scenarios/effetsFronts.js : effets de fronts par scène.
- src/data/scenarios/fronts.js : horloges et conséquences globales.
- src/data/personnages/pnj.js et registres spécialisés : PNJ liés à la scène.
- src/data/personnages/factions.js : factions et objectifs.
- src/data/universe/universeZones.js : lieux liés par `idLieu`.
- .agents/MJ Valombre.toml, .agents/PJ Valombre 1.toml, .agents/PJ Valombre 2.toml : contraintes d'incarnation.

## Nombre de boucles

3 boucles complètes.

## Log complet boucle par boucle

### Boucle 1

#### 1. MJ Valombre

[Scène]
Les entrepôts de la Guilde Marchande sont pleins. Des caisses de minerai empilées jusqu'au plafond. Des chariots chargés qui attendent dans l'allée. Yselle Vaurin vous regarde, les mains croisées sur son registre. « Les convois sont prêts. Les contrats sont signés. Mais les transporteurs reviennent. Ils ne le disent pas comme ça — ils disent que les routes sont instables. »

[Informations visibles]
- Les entrepôts de la Guilde Marchande sont pleins. Le minerai continue d'arriver des Terrasses, mais les convois ne partent plus. Les lettres de crédit sont payées, les contrats sont honorés, mais les cargaisons restent. Yselle Vaurin tente de maintenir les apparences. Les comptables de la Guilde notent que les mêmes maisons d'achat passent commande pour des convois qui ne quittent jamais la ville.
- Comprendre pourquoi les convois ne partent plus et ce que cache Yselle.
- Registres de la Guilde

[Actions possibles évidentes]
- aller aux quais et examiner les entrepôts
- parler à Yselle Vaurin (Guilde Marchande)
- parler à Odran Bellec (registres d'expédition)
- obtenir l'aveu que les convois ne partent pas

[Résolution]
La scène continue : Stocks de minerai bloqués sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Trace administrative du déphasage ; Route qui boucle ; Cartes contradictoires ; Valombre ne sort plus normalement ; Stocks de minerai bloqués
- Indices ratés, refusés ou perdus : Étendue exacte du voile ; Cause exacte de la répétition ; Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte
- Décisions des PJ : Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade. ; Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route.
- Conséquences visibles : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Conséquence intermédiaire jouée dans Les Entrepôts Pleins
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 2). Les lettres se répètent. Le temps de transit entre Valombre et l'extérieur se décale. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative. ; front_sceau_qui_cede / menace_abandon_mine : +1 segment (segment 4). Les routes deviennent non fiables. L'isolement est perceptible. Les commerçants nains notent que les convois ne reviennent pas — ou reviennent vides. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Complicité exacte des grandes maisons.
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
Nera tente une action concrète : aller aux quais et examiner les entrepôts, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : parler à Yselle Vaurin (Guilde Marchande), en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
relier le déphasage à la crise matérielle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
parler à Yselle Vaurin (Guilde Marchande)

#### 5. État de campagne

- Indices obtenus : Trace administrative du déphasage ; Route qui boucle ; Cartes contradictoires ; Valombre ne sort plus normalement ; Stocks de minerai bloqués
- Indices ratés, refusés ou perdus : Étendue exacte du voile ; Cause exacte de la répétition ; Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte
- Décisions des PJ : Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade. ; Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route.
- Conséquences visibles : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Conséquence intermédiaire jouée dans Les Entrepôts Pleins
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 2). Les lettres se répètent. Le temps de transit entre Valombre et l'extérieur se décale. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative. ; front_sceau_qui_cede / menace_abandon_mine : +1 segment (segment 4). Les routes deviennent non fiables. L'isolement est perceptible. Les commerçants nains notent que les convois ne reviennent pas — ou reviennent vides. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
Les entrepôts de la Guilde Marchande sont pleins. Des caisses de minerai empilées jusqu'au plafond. Des chariots chargés qui attendent dans l'allée. Yselle Vaurin vous regarde, les mains croisées sur son registre. « Les convois sont prêts. Les contrats sont signés. Mais les transporteurs reviennent. Ils ne le disent pas comme ça — ils disent que les routes sont instables. »

[Informations visibles]
- Les entrepôts de la Guilde Marchande sont pleins. Le minerai continue d'arriver des Terrasses, mais les convois ne partent plus. Les lettres de crédit sont payées, les contrats sont honorés, mais les cargaisons restent. Yselle Vaurin tente de maintenir les apparences. Les comptables de la Guilde notent que les mêmes maisons d'achat passent commande pour des convois qui ne quittent jamais la ville.
- Comprendre pourquoi les convois ne partent plus et ce que cache Yselle.
- L'aveu de Yselle

[Actions possibles évidentes]
- aller aux quais et examiner les entrepôts
- parler à Yselle Vaurin (Guilde Marchande)
- parler à Odran Bellec (registres d'expédition)
- obtenir l'aveu que les convois ne partent pas

[Résolution]
La scène continue : Lettres de crédit bizarres sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Route qui boucle ; Cartes contradictoires ; Valombre ne sort plus normalement ; Stocks de minerai bloqués ; Lettres de crédit bizarres
- Indices ratés, refusés ou perdus : Étendue exacte du voile ; Cause exacte de la répétition ; Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte
- Décisions des PJ : Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade. ; Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route.
- Conséquences visibles : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Conséquence intermédiaire jouée dans Les Entrepôts Pleins
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 2). Les lettres se répètent. Le temps de transit entre Valombre et l'extérieur se décale. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative. ; front_sceau_qui_cede / menace_abandon_mine : +1 segment (segment 4). Les routes deviennent non fiables. L'isolement est perceptible. Les commerçants nains notent que les convois ne reviennent pas — ou reviennent vides. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Complicité exacte des grandes maisons.
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
Nera tente une action concrète : aller aux quais et examiner les entrepôts, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : parler à Yselle Vaurin (Guilde Marchande), en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
relier le déphasage à la crise matérielle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
parler à Odran Bellec (registres d'expédition)

#### 5. État de campagne

- Indices obtenus : Route qui boucle ; Cartes contradictoires ; Valombre ne sort plus normalement ; Stocks de minerai bloqués ; Lettres de crédit bizarres
- Indices ratés, refusés ou perdus : Étendue exacte du voile ; Cause exacte de la répétition ; Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte
- Décisions des PJ : Les PJ obtiennent un délai, mais pas encore un mandat complet contre Thade. ; Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route.
- Conséquences visibles : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Conséquence intermédiaire jouée dans Les Entrepôts Pleins
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 2). Les lettres se répètent. Le temps de transit entre Valombre et l'extérieur se décale. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative. ; front_sceau_qui_cede / menace_abandon_mine : +1 segment (segment 4). Les routes deviennent non fiables. L'isolement est perceptible. Les commerçants nains notent que les convois ne reviennent pas — ou reviennent vides. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
Les entrepôts de la Guilde Marchande sont pleins. Des caisses de minerai empilées jusqu'au plafond. Des chariots chargés qui attendent dans l'allée. Yselle Vaurin vous regarde, les mains croisées sur son registre. « Les convois sont prêts. Les contrats sont signés. Mais les transporteurs reviennent. Ils ne le disent pas comme ça — ils disent que les routes sont instables. »

[Informations visibles]
- Les entrepôts de la Guilde Marchande sont pleins. Le minerai continue d'arriver des Terrasses, mais les convois ne partent plus. Les lettres de crédit sont payées, les contrats sont honorés, mais les cargaisons restent. Yselle Vaurin tente de maintenir les apparences. Les comptables de la Guilde notent que les mêmes maisons d'achat passent commande pour des convois qui ne quittent jamais la ville.
- Comprendre pourquoi les convois ne partent plus et ce que cache Yselle.
- Les convois ne partent pas. Les institutions le savent et le cachent.

[Actions possibles évidentes]
- aller aux quais et examiner les entrepôts
- parler à Yselle Vaurin (Guilde Marchande)
- parler à Odran Bellec (registres d'expédition)
- obtenir l'aveu que les convois ne partent pas

[Résolution]
Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.

[État de campagne]
- Indices obtenus : Cartes contradictoires ; Valombre ne sort plus normalement ; Stocks de minerai bloqués ; Lettres de crédit bizarres ; Guilde Marchande masque la crise
- Indices ratés, refusés ou perdus : Étendue exacte du voile ; Cause exacte de la répétition ; Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Conséquence intermédiaire jouée dans Les Entrepôts Pleins ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 2). Les lettres se répètent. Le temps de transit entre Valombre et l'extérieur se décale. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative. ; front_sceau_qui_cede / menace_abandon_mine : +1 segment (segment 4). Les routes deviennent non fiables. L'isolement est perceptible. Les commerçants nains notent que les convois ne reviennent pas — ou reviennent vides. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.
- Prochaine piste choisie par les PJ : Vers `s2_conseil_sous_pression` : forcer une décision avec preuves croisées.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Complicité exacte des grandes maisons.
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
Nera tente une action concrète : aller aux quais et examiner les entrepôts, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : parler à Yselle Vaurin (Guilde Marchande), en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
relier le déphasage à la crise matérielle. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s2_conseil_sous_pression` : forcer une décision avec preuves croisées.

#### 5. État de campagne

- Indices obtenus : Cartes contradictoires ; Valombre ne sort plus normalement ; Stocks de minerai bloqués ; Lettres de crédit bizarres ; Guilde Marchande masque la crise
- Indices ratés, refusés ou perdus : Étendue exacte du voile ; Cause exacte de la répétition ; Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Conséquence intermédiaire jouée dans Les Entrepôts Pleins ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 2). Les lettres se répètent. Le temps de transit entre Valombre et l'extérieur se décale. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative. ; front_sceau_qui_cede / menace_abandon_mine : +1 segment (segment 4). Les routes deviennent non fiables. L'isolement est perceptible. Les commerçants nains notent que les convois ne reviennent pas — ou reviennent vides. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.
- Piste concrète choisie : Vers `s2_conseil_sous_pression` : forcer une décision avec preuves croisées.


## Indices obtenus

- Stocks de minerai bloqués
- Lettres de crédit bizarres
- Guilde Marchande masque la crise

## Indices ratés, refusés ou perdus

- Complicité exacte des grandes maisons
- Réaction complète de Caldris

## Décisions des PJ

- Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.

## Conséquences visibles

- Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- yselle_vaurin
- odran_bellec

## Factions affectées

- Le Plan de Thade
- Les Factions de la Crise
- Le Sceau qui cède
- La Cité sous pression

## Fronts ou horloges modifiés

- front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode.
- front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent.

## Transition choisie par les PJ

Vers `s2_conseil_sous_pression` : forcer une décision avec preuves croisées.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Complicité exacte des grandes maisons.
- Indice raté/refusé/perdu pendant la simulation : Réaction complète de Caldris.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
