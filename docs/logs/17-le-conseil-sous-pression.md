# Le Conseil sous Pression

## Objectif de scène

Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.

## Sources consultées

- src/data/scenarios/scenario2_masques_nyx.js : scène `s2_conseil_sous_pression`, acte "Acte I — La Crise s'Étend".
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
La salle du Conseil est pleine pour la seconde fois en peu de temps. Avel Ronce lit sa déclaration d'une voix plate — les mêmes mots, la même promesse. Hessa Brunefer se tient debout, les mains sur la table : « Les Terrasses ne sont pas le problème. » L'émissaire de Caldris attend son tour, un parchemin à la main. Dehors, la voix du Champion filtre par les fenêtres comme un bruit de fond.

[Informations visibles]
- Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent.
- Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.
- L'ultimatum de Caldris

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scène continue : Preuve de Caldris sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Valombre ne sort plus normalement ; Stocks de minerai bloqués ; Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Arrestation immédiate de Thade.
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
Nera tente une action concrète : présenter les preuves du déphasage au Conseil, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : négocier avec les conseillers, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
obtenir une action sans loi martiale totale. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
négocier avec les conseillers

#### 5. État de campagne

- Indices obtenus : Valombre ne sort plus normalement ; Stocks de minerai bloqués ; Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
La salle du Conseil est pleine pour la seconde fois en peu de temps. Avel Ronce lit sa déclaration d'une voix plate — les mêmes mots, la même promesse. Hessa Brunefer se tient debout, les mains sur la table : « Les Terrasses ne sont pas le problème. » L'émissaire de Caldris attend son tour, un parchemin à la main. Dehors, la voix du Champion filtre par les fenêtres comme un bruit de fond.

[Informations visibles]
- Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent.
- Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.
- L'aveu indirect de Yselle

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scène continue : Valombre déjà piégée sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Stocks de minerai bloqués ; Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris ; Valombre déjà piégée
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Arrestation immédiate de Thade.
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
Nera tente une action concrète : présenter les preuves du déphasage au Conseil, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : négocier avec les conseillers, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
obtenir une action sans loi martiale totale. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
décider quelle piste suivre (Réserve, Voss, assaut)

#### 5. État de campagne

- Indices obtenus : Stocks de minerai bloqués ; Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris ; Valombre déjà piégée
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
La salle du Conseil est pleine pour la seconde fois en peu de temps. Avel Ronce lit sa déclaration d'une voix plate — les mêmes mots, la même promesse. Hessa Brunefer se tient debout, les mains sur la table : « Les Terrasses ne sont pas le problème. » L'émissaire de Caldris attend son tour, un parchemin à la main. Dehors, la voix du Champion filtre par les fenêtres comme un bruit de fond.

[Informations visibles]
- Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent.
- Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.
- Le Conseil de Valombre est paralysé. Caldris menace d'un blocus. Le Champion monte la pression. Les PJ peuvent influencer le résultat.

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
La scène continue : Mandat limité contre la Tour sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris ; Valombre déjà piégée ; Mandat limité contre la Tour
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Arrestation immédiate de Thade.
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
Nera tente une action concrète : présenter les preuves du déphasage au Conseil, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : négocier avec les conseillers, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
obtenir une action sans loi martiale totale. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
éventuellement confronter le Champion avec les preuves

#### 5. État de campagne

- Indices obtenus : Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris ; Valombre déjà piégée ; Mandat limité contre la Tour
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ retournent Edran sans massacre et sécurisent les textes interdits. ; Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil.
- Conséquences visibles : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Piste concrète choisie : continuer la scène

### Boucle 4

#### 1. MJ Valombre

[Scène]
La salle du Conseil est pleine pour la seconde fois en peu de temps. Avel Ronce lit sa déclaration d'une voix plate — les mêmes mots, la même promesse. Hessa Brunefer se tient debout, les mains sur la table : « Les Terrasses ne sont pas le problème. » L'émissaire de Caldris attend son tour, un parchemin à la main. Dehors, la voix du Champion filtre par les fenêtres comme un bruit de fond.

[Informations visibles]
- Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent.
- Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.
- Les PJ doivent savoir que le Conseil peut voter la loi martiale et que Caldris menace d'un blocus.

[Actions possibles évidentes]
- présenter les preuves du déphasage au Conseil
- négocier avec les conseillers
- décider quelle piste suivre (Réserve, Voss, assaut)
- éventuellement confronter le Champion avec les preuves

[Résolution]
Les PJ obtiennent un mandat limité et évitent une répression générale.

[État de campagne]
- Indices obtenus : Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris ; Valombre déjà piégée ; Mandat limité contre la Tour
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale.
- Conséquences visibles : Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression ; Les PJ obtiennent un mandat limité et évitent une répression générale.
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Prochaine piste choisie par les PJ : Vers `s2_reserve_interdite` : trouver la preuve écrite de Thade.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Arrestation immédiate de Thade.
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
Nera tente une action concrète : présenter les preuves du déphasage au Conseil, avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : négocier avec les conseillers, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
obtenir une action sans loi martiale totale. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s2_reserve_interdite` : trouver la preuve écrite de Thade.

#### 5. État de campagne

- Indices obtenus : Lettres de crédit bizarres ; Guilde Marchande masque la crise ; Preuve de Caldris ; Valombre déjà piégée ; Mandat limité contre la Tour
- Indices ratés, refusés ou perdus : Point de rupture extérieur ; Moyen de sortie durable ; Limite géographique exacte ; Complicité exacte des grandes maisons ; Réaction complète de Caldris
- Décisions des PJ : Les PJ sauvent les habitants proches et relient les filaments au Puits de l'Abîme. ; Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale.
- Conséquences visibles : Les PJ gardent les lettres comme preuve et décident de tester une route extérieure. ; Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Conséquence intermédiaire jouée dans Le Conseil sous Pression ; Les PJ obtiennent un mandat limité et évitent une répression générale.
- PNJ affectés : hessa_brunefer ; envoye_caldris ; edran_morn ; odran_bellec ; yselle_vaurin
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 4). Les routes ramènent au même point. La ville ne laisse pas sortir. Le déphasage n'est plus une rumeur — c'est un fait vécu. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 3). Crise économique masquée. Stocks bloqués. Les institutions cachent la réalité pour éviter la panique. La confiance s'érode. ; front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.
- Piste concrète choisie : Vers `s2_reserve_interdite` : trouver la preuve écrite de Thade.


## Indices obtenus

- Preuve de Caldris
- Valombre déjà piégée
- Mandat limité contre la Tour

## Indices ratés, refusés ou perdus

- Arrestation immédiate de Thade
- Consensus public complet

## Décisions des PJ

- Les PJ obtiennent un mandat limité et évitent une répression générale.

## Conséquences visibles

- Les PJ obtiennent un mandat limité et évitent une répression générale.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- avel_ronce
- hessa_brunefer
- envoye_caldris
- champion_banniere_pure
- yselle_vaurin

## Factions affectées

- Le Plan de Thade
- Les Factions de la Crise
- Le Sceau qui cède
- La Cité sous pression

## Fronts ou horloges modifiés

- front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer.
- front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère.

## Transition choisie par les PJ

Vers `s2_reserve_interdite` : trouver la preuve écrite de Thade.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Arrestation immédiate de Thade.
- Indice raté/refusé/perdu pendant la simulation : Consensus public complet.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
