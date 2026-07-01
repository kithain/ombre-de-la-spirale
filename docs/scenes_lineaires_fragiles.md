# Scènes Linéaires ou Fragiles — Diagnostic

Ce document identifie les scènes dont la structure reste trop linéaire ou dont la navigation est fragile, avec des recommandations d'amélioration.

---

## Critères de diagnostic

- **Linéaire** : la scène n'a qu'une seule sortie jouable, ou toutes les sorties mènent à la même scène suivante.
- **Fragile** : la scène dépend d'un seul PNJ, d'un seul jet, ou d'un seul indice pour fonctionner. Si les PJ le manquent, la scène s'effondre ou perd son sens.
- **Robuste** : la scène a plusieurs sorties vers des scènes différentes, des PNJ alternatifs, et un fallback clair.

---

## Scènes linéaires

### s2_vers_s3_escalier_du_sommet — Linéaire par conception
- **Diagnostic** : Scène de transition pure. Toutes les sorties mènent à `s3_vortex` (sauf demi-tour vers `s2_laboratoire_verre`).
- **Justification** : C'est un escalier. Il n'y a pas d'alternative narrative — les PJ doivent monter au sommet.
- **Recommandation** : Acceptable. La linéarité est narrative, pas structurelle. Le choix réside dans les conditions de départ (préparé ou non), pas dans la destination.

### s3_monde_apres — Linéaire par conception
- **Diagnostic** : Scène finale. Narration pure. Toutes les sorties mènent à `fin_campagne`.
- **Justification** : C'est l'épilogue. Il n'y a pas de suite.
- **Recommandation** : Acceptable. La variabilité vient du choix fait en `s3_conversation_trois` et du décompte des victimes, pas de la navigation.

### s1_choix — Linéaire par conception
- **Diagnostic** : Toutes les sorties mènent à `s2_emeute_place`.
- **Justification** : C'est la transition inter-scénarios. Le Scénario 2 commence dans tous les cas.
- **Recommandation** : Acceptable. La variabilité vient de l'état des PJ (libres, recherchés, captifs), pas de la destination.

---

## Scènes fragiles

### s2_reserve_interdite — Fragile (dépendance Olane)
- **Diagnostic** : L'accès à la Réserve dépend d'Olane. Si les PJ n'ont pas Olane (tuée, perdue, ignorée), l'accès est bloqué.
- **Atténuation** : Le fallback indique que les PJ peuvent trouver Voss directement. Mais ils manquent alors les 142 séances et la théorie des seuils.
- **Recommandation** : Ajouter un PNJ alternatif qui peut accéder à la Réserve (par exemple, un employé de l'Université corrompu par Mara, ou un étudiant de la Résistance). Ou permettre un accès par effraction (avec des conséquences sous la loi martiale).

### s2_laboratoire_voss — Fragile (dépendance Voss)
- **Diagnostic** : Le témoignage de Voss est qualifié d'irremplaçable dans le fallback. Si Voss est mort, absent, ou refus de parler, les PJ manquent un témoignage clé.
- **Atténuation** : Les preuves matérielles (schéma, bocaux, cachet) sont présentes même sans Voss. Olane peut interpréter le schéma.
- **Recommandation** : Le schéma et les bocaux sont suffisants pour avancer. Le témoignage de Voss enrichit mais n'est pas strictement indispensable. Clarifier dans le fallback que les preuves matérielles suffisent pour la Tour.

### s3_vortex — Fragile (dépendance vérités)
- **Diagnostic** : Le combat est conçu pour être gagné par les vérités (Persuasion DD 18). Si les PJ n'ont pas accumulé de vérités, le combat est plus long et plus dangereux.
- **Atténuation** : Thade révèle l'information manquante dans ses répliques (phase 1, round 3). Le Magi-Tuteur peut témoigner. Le combat par la force est possible.
- **Recommandation** : Bien atténué. Le fallback est solide. Le combat par la force est un choix valide, pas un échec.

### s3_conversation_trois — Fragile (dépendance Sealine)
- **Diagnostic** : Si les PJ attaquent Sealine, elle se retire. Les options deviennent moins claires.
- **Atténuation** : Le Magi-Tuteur peut expliquer. Art de la magie DD 18 pour analyser le vortex.
- **Recommandation** : Bien atténué. L'encadré MJ "Que faire si les PJ attaquent Sealine" couvre ce cas.

---

## Scènes robustes (référence)

Ces scènes ont une navigation multiple, des PNJ alternatifs, et des fallbacks clairs :

- **s2_dephasage_visible** : 6 sorties vers 4 scènes différentes. PNJ alternatifs (Olane, Thorgar). Découverte par rumeurs, Olane, ou exploration.
- **s2_conseil_sous_pression** : 6 sorties vers 3 scènes différentes. PNJ alternatifs (Mara, Yselle). Urgence front si ignoré.
- **s2_entrepots_pleins** : 6 sorties vers 3 scènes différentes. PNJ alternatifs (Yselle, Odran). Découverte par Yselle, Odran, ou exploration.
- **s2_laboratoire_verre** : 6 sorties, toutes vers `s2_vers_s3_escalier_du_sommet` mais avec des conditions différentes (corps détruit, cahiers lus, échec, Magi-Tuteur vivant). La variabilité est dans les conditions, pas les destinations.

---

## Synthèse

| Scène | Type | Linéaire ? | Fragile ? | Atténué ? |
|-------|------|-----------|----------|----------|
| s2_vers_s3_escalier_du_sommet | Transition | Oui (par conception) | Non | N/A |
| s3_monde_apres | Épilogue | Oui (par conception) | Non | N/A |
| s1_choix | Transition | Oui (par conception) | Non | N/A |
| s2_reserve_interdite | Investigation | Non | Oui (Olane) | Partiellement |
| s2_laboratoire_voss | Révélation | Non | Oui (Voss) | Partiellement |
| s3_vortex | Boss | Non | Oui (vérités) | Oui |
| s3_conversation_trois | Dilemme | Non | Oui (Sealine) | Oui |

**Conclusion** : Aucune scène n'est linéaire de manière problématique. Les scènes linéaires le sont par conception (transitions, épilogue). Les scènes fragiles ont toutes des atténuations, plus ou moins complètes. La priorité d'amélioration est `s2_reserve_interdite` (ajouter un PNJ alternatif pour l'accès).
