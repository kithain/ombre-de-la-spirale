# L'Assaut de la Tour

## Objectif de scène

Atteindre le seuil du sommet en minimisant les victimes.

## Sources consultées

- src/data/scenarios/scenario2_masques_nyx.js : scène `s2_assaut_tour`, acte "Acte III — La Confrontation".
- src/data/scenarios/effetsFronts.js : effets de fronts par scène.
- src/data/scenarios/fronts.js : horloges et conséquences globales.
- src/data/personnages/pnj.js et registres spécialisés : PNJ liés à la scène.
- src/data/personnages/factions.js : factions et objectifs.
- src/data/universe/universeZones.js : lieux liés par `idLieu`.
- .agents/MJ Valombre.toml, .agents/PJ Valombre 1.toml, .agents/PJ Valombre 2.toml : contraintes d'incarnation.

## Nombre de boucles

5 boucles complètes.

## Log complet boucle par boucle

### Boucle 1

#### 1. MJ Valombre

[Scène]
La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.

Au troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.

[Informations visibles]
- Les PJ montent la Tour Arcanique. Chaque étage est modifié : piliers de cristal, runes, objets en lévitation. Des étudiants charmés, des gardes piégés, des créatures planaires séduites par Thade. Chaque rencontre a une option non-létale. Le décompte des victimes compte pour l'épilogue.
- Atteindre le seuil du sommet en minimisant les victimes.
- L'ardoise du 6e étage

[Actions possibles évidentes]
- infiltrer la Tour (Discrétion, force, ou négociation avec les gardes)
- convaincre ou neutraliser le Magi-Tuteur
- monter les étages vers le Laboratoire de Verre
- éventuellement utiliser le Champion comme force d'assaut

[Résolution]
La scène continue : Tour comme dispositif rituel sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Schéma de la Larme de Vael ; Annotation de Sealine ; Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Contrôle complet de tous les étages.
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
Nera tente une action concrète : infiltrer la Tour (Discrétion, force, ou négociation avec les gardes), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : convaincre ou neutraliser le Magi-Tuteur, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
monter sans transformer les victimes en pertes acceptables. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
convaincre ou neutraliser le Magi-Tuteur

#### 5. État de campagne

- Indices obtenus : Schéma de la Larme de Vael ; Annotation de Sealine ; Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Piste concrète choisie : continuer la scène

### Boucle 2

#### 1. MJ Valombre

[Scène]
La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.

Au troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.

[Informations visibles]
- Les PJ montent la Tour Arcanique. Chaque étage est modifié : piliers de cristal, runes, objets en lévitation. Des étudiants charmés, des gardes piégés, des créatures planaires séduites par Thade. Chaque rencontre a une option non-létale. Le décompte des victimes compte pour l'épilogue.
- Atteindre le seuil du sommet en minimisant les victimes.
- Les PJ doivent atteindre le 7e étage et savoir que le sommet contient le vortex.

[Actions possibles évidentes]
- infiltrer la Tour (Discrétion, force, ou négociation avec les gardes)
- convaincre ou neutraliser le Magi-Tuteur
- monter les étages vers le Laboratoire de Verre
- éventuellement utiliser le Champion comme force d'assaut

[Résolution]
La scène continue : Magi-Tuteur loyal retourné sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Annotation de Sealine ; Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Contrôle complet de tous les étages.
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
Nera tente une action concrète : infiltrer la Tour (Discrétion, force, ou négociation avec les gardes), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : convaincre ou neutraliser le Magi-Tuteur, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
monter sans transformer les victimes en pertes acceptables. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
monter les étages vers le Laboratoire de Verre

#### 5. État de campagne

- Indices obtenus : Annotation de Sealine ; Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Piste concrète choisie : continuer la scène

### Boucle 3

#### 1. MJ Valombre

[Scène]
La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.

Au troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.

[Informations visibles]
- Les PJ montent la Tour Arcanique. Chaque étage est modifié : piliers de cristal, runes, objets en lévitation. Des étudiants charmés, des gardes piégés, des créatures planaires séduites par Thade. Chaque rencontre a une option non-létale. Le décompte des victimes compte pour l'épilogue.
- Atteindre le seuil du sommet en minimisant les victimes.
- Les PJ doivent atteindre le Laboratoire de Verre au sommet de la Tour, idéalement avec le Magi-Tuteur comme guide.

[Actions possibles évidentes]
- infiltrer la Tour (Discrétion, force, ou négociation avec les gardes)
- convaincre ou neutraliser le Magi-Tuteur
- monter les étages vers le Laboratoire de Verre
- éventuellement utiliser le Champion comme force d'assaut

[Résolution]
La scène continue : Décompte des victimes faible sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Annotation de Sealine ; Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Contrôle complet de tous les étages.
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
Nera tente une action concrète : infiltrer la Tour (Discrétion, force, ou négociation avec les gardes), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : convaincre ou neutraliser le Magi-Tuteur, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
monter sans transformer les victimes en pertes acceptables. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
éventuellement utiliser le Champion comme force d'assaut

#### 5. État de campagne

- Indices obtenus : Annotation de Sealine ; Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Piste concrète choisie : continuer la scène

### Boucle 4

#### 1. MJ Valombre

[Scène]
La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.

Au troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.

[Informations visibles]
- Les PJ montent la Tour Arcanique. Chaque étage est modifié : piliers de cristal, runes, objets en lévitation. Des étudiants charmés, des gardes piégés, des créatures planaires séduites par Thade. Chaque rencontre a une option non-létale. Le décompte des victimes compte pour l'épilogue.
- Atteindre le seuil du sommet en minimisant les victimes.
- Les PJ doivent atteindre le Laboratoire de Verre au sommet de la Tour, idéalement avec le Magi-Tuteur comme guide.

[Actions possibles évidentes]
- infiltrer la Tour (Discrétion, force, ou négociation avec les gardes)
- convaincre ou neutraliser le Magi-Tuteur
- monter les étages vers le Laboratoire de Verre
- éventuellement utiliser le Champion comme force d'assaut

[Résolution]
La scène continue : Décompte des victimes faible sans résoudre trop tôt l'ensemble de la situation.

[État de campagne]
- Indices obtenus : Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné ; Décompte des victimes faible
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Prochaine piste choisie par les PJ : la scène se poursuit

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Contrôle complet de tous les étages.
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
Nera tente une action concrète : infiltrer la Tour (Discrétion, force, ou négociation avec les gardes), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : convaincre ou neutraliser le Magi-Tuteur, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
monter sans transformer les victimes en pertes acceptables. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
éventuellement utiliser le Champion comme force d'assaut

#### 5. État de campagne

- Indices obtenus : Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné ; Décompte des victimes faible
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ reviennent avec marques et témoignages au lieu de s'épuiser sur la route. ; Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients.
- Conséquences visibles : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Piste concrète choisie : continuer la scène

### Boucle 5

#### 1. MJ Valombre

[Scène]
La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.

Au troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.

[Informations visibles]
- Les PJ montent la Tour Arcanique. Chaque étage est modifié : piliers de cristal, runes, objets en lévitation. Des étudiants charmés, des gardes piégés, des créatures planaires séduites par Thade. Chaque rencontre a une option non-létale. Le décompte des victimes compte pour l'épilogue.
- Atteindre le seuil du sommet en minimisant les victimes.
- Les PJ doivent atteindre le Laboratoire de Verre au sommet de la Tour, idéalement avec le Magi-Tuteur comme guide.

[Actions possibles évidentes]
- infiltrer la Tour (Discrétion, force, ou négociation avec les gardes)
- convaincre ou neutraliser le Magi-Tuteur
- monter les étages vers le Laboratoire de Verre
- éventuellement utiliser le Champion comme force d'assaut

[Résolution]
Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.

[État de campagne]
- Indices obtenus : Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné ; Décompte des victimes faible
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.
- Conséquences visibles : Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour ; Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Prochaine piste choisie par les PJ : Vers `s2_laboratoire_verre` : comprendre le corps de Thade et les cahiers.

[Rapport de test]
- Bug : Indice raté/refusé/perdu pendant la simulation : Contrôle complet de tous les étages.
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
Nera tente une action concrète : infiltrer la Tour (Discrétion, force, ou négociation avec les gardes), avec discrétion et conservation des preuves.

#### 3. PJ Valombre 2 - Ser Kael Dorn

Réaction :
Kael cherche la voie droite qui protège les innocents sans rendre le groupe passif. Il accepte la prudence de Nera, mais surveille son coût moral.

Dialogue :
"Nous avançons, mais nous n'ajouterons pas une injustice à celle que nous cherchons à arrêter."

Questions au MJ :
Qui risque d'être blessé ou accusé à tort si les PJ agissent trop vite ou trop fort ?

Action :
Kael tente une action concrète : convaincre ou neutraliser le Magi-Tuteur, en privilégiant protection, dialogue et présence dissuasive.

#### 4. Coordination des PJ

Intention commune :
monter sans transformer les victimes en pertes acceptables. Les PJ cherchent l'indice principal sans conclure avant que les conséquences et réactions importantes soient jouées.

Désaccord éventuel :
Nera privilégie l'efficacité discrète ; Kael exige une méthode défendable devant les victimes et les alliés. Le désaccord ajuste la méthode, pas la piste.

Piste concrète choisie :
Vers `s2_laboratoire_verre` : comprendre le corps de Thade et les cahiers.

#### 5. État de campagne

- Indices obtenus : Registre des 50 patients d'Elian ; Elian comme témoin retournable ; Tour comme dispositif rituel ; Magi-Tuteur loyal retourné ; Décompte des victimes faible
- Indices ratés, refusés ou perdus : Consensus public complet ; Tous les ouvrages consultés ; Tous les responsables des accès ; Tous les patients immédiatement localisés ; Échantillons déjà déplacés
- Décisions des PJ : Les PJ protègent les ouvriers, gardent les preuves et portent le dossier au Conseil. ; Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.
- Conséquences visibles : Les PJ obtiennent un mandat limité et évitent une répression générale. ; Les PJ copient le registre des 142 consultations et suivent la piste d'Elian. ; Les PJ retournent Elian, emportent le schéma de la Larme et copient le registre des 50 patients. ; Conséquence intermédiaire jouée dans L'Assaut de la Tour ; Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.
- PNJ affectés : elian_voss ; etudiants_charmes ; gardes_pieges ; creature_spirale_cooptee ; magi_tuteur_loyal
- Factions affectées : Le Plan de Thade ; Le Sceau qui cède ; La Cité sous pression ; Les Factions de la Crise
- Fronts ou horloges modifiés : front_dephasage / menace_dephasage_revelation : +1 segment (étape 3). Les stocks s'accumulent. La ville produit pour un extérieur qui ne reçoit plus. Le déphasage a un coût économique que les institutions cachent. ; front_cite_sous_pression / menace_derive_institutionnelle : +1 segment (segment 4). Le Conseil vote la loi martiale. Les Terrasses sont placées sous surveillance. La garde ferme les accès. La machine à retarder devient une machine à réprimer. ; front_factions_crise / menace_radicalisation_cercles : +1 segment (segment 4). Le Champion gagne une légitimité publique. La foule voit ses peurs confirmées par le Conseil. La radicalisation s'accélère. ; front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. ; front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.
- Piste concrète choisie : Vers `s2_laboratoire_verre` : comprendre le corps de Thade et les cahiers.


## Indices obtenus

- Tour comme dispositif rituel
- Magi-Tuteur loyal retourné
- Décompte des victimes faible

## Indices ratés, refusés ou perdus

- Contrôle complet de tous les étages
- Arrêt immédiat du rituel

## Décisions des PJ

- Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.

## Conséquences visibles

- Les PJ libèrent plutôt qu'ils ne tuent, épargnent le Magi-Tuteur et tiennent un faible décompte de victimes.
- Les PNJ et factions listés ci-dessous réagissent dans le cadre visible de la scène.

## PNJ affectés

- etudiants_charmes
- gardes_pieges
- creature_spirale_cooptee
- magi_tuteur_loyal

## Factions affectées

- Le Plan de Thade
- Les Factions de la Crise
- Le Sceau qui cède
- La Cité sous pression

## Fronts ou horloges modifiés

- front_plan_thade / menace_loyalistes_tour : +1 segment (segment 4). Les accès sont verrouillés. Les communications filtrées. Les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter.
- front_factions_crise / menace_syndicat_instrumentalisation : +1 segment (segment 5). Une milice se forme. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Chaque faction est prête à frapper.

## Transition choisie par les PJ

Vers `s2_laboratoire_verre` : comprendre le corps de Thade et les cahiers.

## Manques ou incohérences détectés

- Indice raté/refusé/perdu pendant la simulation : Contrôle complet de tous les étages.
- Indice raté/refusé/perdu pendant la simulation : Arrêt immédiat du rituel.

## Recommandations

### Bug

- Corriger les incohérences d'ID, de lieu ou de secret signalées ci-dessus.

### Dette technique

- Ajouter un état de campagne sérialisé pour les indices, fronts, alliés, patients et victimes de la Tour.

### Amélioration UX

- Séparer strictement les informations visibles PJ, les notes MJ et les secrets.

### Amélioration narrative

- Ajouter à chaque scène une relance explicite de PNJ ou de front si les PJ hésitent.
