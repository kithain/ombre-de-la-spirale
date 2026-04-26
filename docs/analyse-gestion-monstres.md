# Analyse exhaustive — Gestion des monstres & créatures

*Généré le 4 mars 2026 — Mis à jour le 4 mars 2026 — Base de code L'Ombre de la Spirale v1.0.0*

> **État** : Rework Phase 5 terminé. Toutes les anomalies critiques et majeures sont corrigées.

---

## 1. Schéma de données (`pnjTemplate.js`)

### Champs canoniques (gérés par `creerPnj()`)

| Champ | Type | Valeur par défaut | Notes |
|---|---|---|---|
| `id` | string | `""` | kebab-case |
| `nom` | string | `""` | |
| `classe` | string | `""` | vide pour créature sans classe |
| `niveau` | number\|null | `null` | null = créature à DV raciaux |
| `taille` | string | `"Moyen"` | 9 catégories |
| `type` | string | `"Humanoïde (Humain)"` | format "Type (sous-type)" |
| `alignement` | string | `"N"` | code 2 lettres |
| `fp` | number\|string | `1` | peut être fraction `"1/4"` |
| `environnement` | string | `""` | texte libre héritage |
| `biome` | string | `""` | biome structuré D&D 3.5 |
| `residence` | string | `""` | ID lieu |
| `lieuxRencontre` | string[] | `[]` | IDs lieux |
| `organisation` | string | `"Solitaire"` | |
| `ini` | string | `"+0"` | |
| `sens` | string | `""` | texte libre (parsé en tableau dans l'éditeur) |
| `ca` | `{total, contact, pris_au_depourvu}` | `{10,10,10}` | parseCA gère string/number/objet |
| `pv` | number | `1` | |
| `dv` | string | `"1d8"` | format "XdY+Z" |
| `js` | `{vig, ref, vol}` | `{"+0","+0","+0"}` | strings signées |
| `rm` | string\|null | `null` | "RM 16" |
| `rd` | string\|null | `null` | "5/Magie" |
| `vit` | string | `"9 m"` | |
| `bba` | string | `"+0"` | string signée |
| `lutte` | string | `"+0"` | string signée |
| `attaque` | string | `""` | texte libre |
| `att_outrance` | string | `""` | texte libre |
| `espace` | string | `"1,5 m"` | |
| `allonge` | string | `"1,5 m"` | |
| `att_spe` | string[] | `[]` | texte libre |
| `qual_spe` | string[] | `[]` | texte libre |
| `carac` | `{for,dex,con,int,sag,cha}` | `{10×6}` | null accepté (Con mort-vivant) |
| `competences` | string | `""` | texte libre (pas structuré) |
| `dons` | string | `""` | CSV texte libre |
| `tactiques` | string | `""` | |
| `butin` | string | `""` | |
| `est_ennemi` | boolean | `false` | |
| `antagoniste` | boolean | `false` | |
| `role` | string | `""` | |
| `image` | string\|null | `null` | |
| `meta_mj` | `{reference_livre, contexte_scenario}` | null | |
| `fiche_combat` | `{sorts, actions_spe, dons_tactiques, resume_tactique}` | null | |
| `bonus_actifs` | `Bonus[]` | `[]` | |
| `sorts_prepares` | object | `{}` | par niveau |
| `ogas` | `{occupation, objectif, attitude, enjeu}` | `{""×4}` | |

### Champs extra-canoniques (préservés, non normalisés)

| Champ | Présence | Usage |
|---|---|---|
| `details` | string[] | archétypes FP1–10 uniquement |
| `disposition` | string | `"hostile"`, `"neutre"`, etc. — non dans CLES_CANONIQUES |
| `category` | string | injecté par `npcRegistry.js` |
| `source` | string | injecté par `npcRegistry.js` |
| `color` | string | classe Tailwind, injecté |
| `isMonster` | boolean | injecté pour les archétypes bestiary |
| `classes` | `{classe, niveau}[]` | ✅ Maintenant dans CLES_CANONIQUES + creerPnj() |
| `disposition` | string | ✅ Maintenant dans CLES_CANONIQUES + creerPnj() |
| `modeEntite` | `"pnj"\|"creature"\|null` | ✅ Maintenant dans CLES_CANONIQUES + creerPnj() |

---

## 2. Couche Domaine D&D 3.5

### `calculsDnD35.js` — Tables et fonctions

**Tables de progression :**
- `PROGRESSION_CLASSES` — 22 classes (11 PHB + 5 PNJ DMG + 6 prestige) avec `bba`/`js`/`dv`
- `PROGRESSION_TYPES` — **16 types** de créatures (Aberration → Vermine + **Esprit** incorporel) avec `dv`/`bba`/`js`/`ptComp`/`caracNulles`/`notes`
- `BONUS_PV_ARTIFICIEL` — 9 tailles, bonus fixe (Moyen = +20, Grand = +30…)
- `ESPACE_ALLONGE` — 9 tailles, espace + allonge `{haut, long}`
- `DEGATS_NATURELS` — progression 9 niveaux + baseAttaque pour 11 types (morsure, griffe, coup, corne, dard, tentacule, sabot, queue, aile, pilon, écrasement)
- `MODIFICATEURS_TAILLE` — 9 tailles pour CA/attaque (table distincte de lutte)

**Fonctions primitives :**
- `calculerModificateur`, `formaterModificateur`
- `calculerBBA`, `calculerJSBase`
- `calculerPVEstimes`, `formaterDV`
- `calculerInitiative`, `calculerCAContact`, `calculerCAPrisAuDepourvu`
- `calculerAttaqueCAC`, `calculerAttaqueDist`
- `formaterAttaquesIteratives`
- `obtenirModTaille`

**Fonctions créatures :**
- `extraireTypeBase` — "Mort-vivant (Incorporel)" → "Mort-vivant"
- `extraireSousTypes` — → `["Incorporel"]`
- `parserDV` — "4d12+6" → `{nombre: 4, type: 12, bonus: 6}`
- `calculerPVMoyens` — pour DV raciaux (max au 1er, moyenne ensuite)
- `calculerDonsAttendus` — 1 + ⌊(DV−1)/3⌋
- `calculerPointsCompetencesCreature(typeBase, nombreDV, modInt)` — règle × 4 au 1er DV
- `obtenirDegatsNaturels(typeAttaque, taille)` — lookup dans `DEGATS_NATURELS`

**Fonction principale créature :**
```
calculerStatistiquesCreature(creature) → {
  typeBase, sousTypes, progression,
  modificateurs, modTaille,
  bba, bbaFormatte, attaquesIteratives, lutte, lutteFormattee,
  jsBase, jsTotal, jsTotalFormatte,
  dvParse, pvMoyens, bonusPVFixe,
  donsAttendus, pointsCompetences,
  initiative, caContact, caPrisAuDepourvu,
  attaqueCAC, attaqueDist,
  avertissements { _creature_dv_type, _creature_carac_*, _creature_incorporel_for,
                   _creature_animal_int, _creature_pv, _creature_espace,
                   _creature_allonge, _creature_artificiel_pv }
  typeConnu
}
```

### `bonusDnD35.js`

- **19 types** : Altération, Armure, Armure naturelle, Bouclier, Chance, Circonstance, Compétence, Esquive, Intuition, Moral, Naturel, Parade, Profane, Racial, Résistance, Sacré, Synergie, Taille, Divers
- Types cumulables : Esquive + Synergie + Divers
- `creerBonus`, `resoudreBonusCumules`, `resoudreBonusPourCible`
- `calculerCADepuisBonus` — CA structurée depuis bonus typés
- `calculerBonusLutte` — table lutte **distincte** de la table CA
- `construireBonusCA` — factory des bonus CA standards

### `validationPersonnage.js`

**Niveau 1 — `validerChamp` (temps réel) :** `nom`, `pv`, `niveau`, `ca`, `carac`, `alignement`, `taille`, `classe`, `disposition`

**Niveau 2 — `validerCoherence` (avertissements) :**
- Taille non standard
- Classe non reconnue
- `TYPES_SANS_CLASSE` (Vermine, Vase, Créature artificielle, Animal) avec classe → avertissement
- Alignement par classe (Moine loyal, Paladin LB, Barbare non-loyal, Druide neutre, Barde non-loyal)
- Taille vs espace occupé
- CA contact ≤ CA total, CA dépourvu ≤ CA total
- Caractéristiques nulles obligatoires par type (Con mort-vivant/artificielle, Int vase/vermine)
- Animal Int > 2
- Incorporel/Intangible avec Force

**Niveau 3 — `validerPersonnage` (avant sauvegarde) :**
- Fusionne avertissements de `calculerStatistiquesCreature()`
- Vérifie BBA saisi vs SRD calculé
- Vérifie JS saisi vs SRD calculé (Vig/Ref/Vol séparément)
- Vérifie nombre de dons vs `donsAttendus`
- Comptage informatif des compétences vs `pointsCompetences`
- Vérifie traits de type manquants dans `qual_spe` via `obtenirTraitsType()`

### `constantesDnD35.js` (48 KB)

**Listes pour UI :**
- `TYPES_CREATURE` (16 types) — **inclut "Esprit (Incorporel)"** absent de `PROGRESSION_TYPES`
- `SOUS_TYPES_CREATURE` (26 sous-types)
- `COMPETENCES` (41, avec `carac` + `formation`)
- `DONS_GENERAUX` (80+), `DONS_METAMAGIE` (9), `DONS_CREATION` (8)
- `QUALITES_SPECIALES_COMMUNES` (48), `ATTAQUES_SPECIALES_COMMUNES` (29)
- `BIOMES_DND35` (6 groupes, ~37 biomes)
- `VALEURS_FP` (25 valeurs : 1/8 → 20)

**Fonctions intelligentes :**
- `obtenirAptitudesClasse(classe, niveau)` — aptitudes attendues avec déduplication
- `obtenirTraitsRaciaux(typeCreature)` — traits du sous-type racial
- `obtenirTraitsType(typeCreature)` — traits type + raciaux combinés
- `verifierPrerequis(nomDon, personnage, bba)` — vérification BBA/carac/dons/classe
- `calculerEmplacementsDons(classe, niveau, estHumain)`
- `calculerPointsCompetences(classe, niveau, modInt)`

**Données structurées :**
- `APTITUDES_CLASSES` — 11 classes avec aptitudes par niveau
- `TRAITS_RACIAUX` — 7 races (Humain, Elfe, Nain, Halfelin, Gnome, Demi-elfe, Demi-orque, Reptilien, Gobelinoïde)
- `TRAITS_TYPES_CREATURE` — **15 types** avec listes complètes qualités/attaques automatiques
- `PREREQUIS_DONS` — prérequis pour ~40 dons courants
- `POINTS_COMPETENCES_PAR_CLASSE` — 14 classes

---

## 3. Couche Données

### Sources et pipeline d'ingestion

```
pnjPrincipaux (pnj_principaux/)     → creerPnj() → enrichirEtNormaliser()
pnjEnnemis (02_pnj_ennemis.js)      → creerPnj() → enrichirEtNormaliser()
bestiaryData35FR (03–12_archetype)  → creerPnj() [.map()] → enrichirEtNormaliser()
                                              ↓
                                        normaliserPnj()
```

**✅ Corrigé :** Les archétypes FP1–10 passent maintenant par `creerPnj()` dans `personnages/index.js` avant toute normalisation. Un fallback conserve l'entrée brute en cas d'erreur.

### Contenu des données

| Fichier | Contenu | Taille |
|---|---|---|
| `pnj_principaux/` | PNJ nommés de la campagne | 6 fichiers |
| `02_pnj_ennemis.js` | Adversaires nommés (Troll, etc.) | 23 KB |
| `03_archetype_fp1.js` | Archétypes FP 1/8 à 1 | 26 KB |
| `04–12_archetype_fpX.js` | Archétypes FP 2 à 10 | ~144 KB total |

**Catégories registre :** "allies", "ennemis", "monstres", "neutres"
**Catégorie bestiary :** toujours `"monstres"` + `isMonster: true`

### `normaliserPnj.js`

- Migration `lieu` → `residence`
- Migration `environnement` libre → `biome` (longest-match) + `residence` (lookup lieux)
- Garantit `lieuxRencontre` est un Array
- **Ne garantit pas les autres champs canoniques** (pas de valeurs par défaut complètes)

---

## 4. Interface — Viewer

### Sections d'affichage (`src/composants/pnj/sections/`)

| Composant | Champs affichés |
|---|---|
| `GrilleStatsPnj` | CA (3 valeurs), PV, Init, Niv/FP, RM, RD |
| `AttributsPnj` | BBA, Lutte, Espace, Allonge |
| `CombatPnj` | attaque, att_outrance |
| `CapacitesPnj` | att_spe[], qual_spe[] |
| `JetsSauvegardePnj` | JS vig/ref/vol |
| `InfoTypePnj` | type, environnement, organisation, reference_livre |
| `CompetencesPnj` | compétences (texte) |
| `TactiquePnj` | tactiques, fiche_combat |
| `OgasPnj` | ogas |
| `BuffsPnj` | bonus_actifs |
| `OccurrencesPnj` | liaisons scènes/lieux |
| `CartePnjMinimale` | nom, fp, type, disposition, image, category badge |

### `GrilleStatsPnj` — logique d'affichage
```jsx
// Condition "Niveau ou FP" → affiche "Niv" si niveau présent, sinon "FP"
{pnj.niveau ? analyserFp(pnj.niveau) : (fp ?? "–")}
```

---

## 5. Interface — Éditeur

### `EditeurPersonnage.jsx` (1210 lignes, ~50 KB)

**Sections de l'éditeur :**
1. **Identité** : Nom, Image (+ upload), Classe(s)/Niveau (multiclassage), FP, Taille, Type (SelecteurTypeCreature), Alignement, Disposition, Rôle, Environnement (biome + résidence + lieux rencontre)
2. **Stats combat** : PV + DV + Init + Vitesse, CA (3), Espace/Allonge, Attaque + Att. outrance, JS (3)
3. **Caractéristiques** : 6 stats + modificateurs calculés
4. **Capacités** : traits type (teal), aptitudes auto classe/race (purple), att_spe ListeEditable + ComboboxFiltrable SRD, qual_spe ListeEditable + ComboboxFiltrable SRD
5. **Compétences & Dons** : EditeurCompetences + EditeurDons
6. + BBA/Lutte, Sens, Buffs, Sorts, OGAS, Meta MJ, Tactiques

**Calculs actifs dans l'éditeur :**
```javascript
// Détection mode (brouillon.modeEntite || auto depuis classe+type)
const estCreature = useMemo(() => { ... }, [brouillon.modeEntite, brouillon.classe, brouillon.type]);
// Mode PNJ — logique de classes
const stats = useMemo(() => calculerStatistiques(brouillon), [brouillon]);
// Mode Créature — DV raciaux SRD
const statsCreature = useMemo(() => estCreature ? calculerStatistiquesCreature(brouillon) : null, ...);
// Parse DV raciaux pour éditeur structuré
const dvParse = useMemo(() => estCreature ? parserDV(brouillon.dv) : null, ...);
```

**`BoutonAutoRemplir` — deux modes :**
- Mode PNJ : PV estimés, DV, Init, JS, CA contact/dépourvu
- Mode Créature : PV moyens, BBA, Lutte, Init, JS, CA contact/dépourvu, Espace

### Composants éditeur spécialisés

| Composant | Rôle |
|---|---|
| `SelecteurTypeCreature` | Dropdown Type + Sous-type → string "Type (st)" |
| `BoutonAutoRemplir` | ✅ Auto-remplir PV/DV/Init/JS/CA (PNJ) + PV/BBA/Lutte/Init/JS/CA/Espace (Créature) |
| `ValeurCalculee` | Badge "Calculé: X [Appliquer]" |
| `EditeurCompetences` | Compétences avec mod carac calculé |
| `EditeurDons` | Dons avec vérification prérequis via `verifierPrerequis()` |
| `SectionBuffs` | Gestion `bonus_actifs[]` |
| `SectionSorts` | Sorts préparés avec `calculerEmplacementsSorts()` |
| `SectionApparitions` | Multi-tags `lieuxRencontre` |

---

## 6. Hooks et Contextes

### `utiliserEditeurPersonnage.js` (~43 lignes)
- Compose `utiliserEditeurGenerique`
- Valide avec `validerPersonnage` + `validerChampUnique`
- Expose `avertissements` via `useMemo` (recalcul à chaque modification du brouillon)

### `utiliserEditeurGenerique.js`
- Undo/redo via `useRef` (historique ≤ 50), `peutAnnuler`/`peutRefaire` en state
- `modifierChampImbrique("ca.contact", val)` — profondeur arbitraire
- `diff` minimal → seuls les champs modifiés sont envoyés à l'API

### `utiliserPnj.js`
- Filtre par catégorie, biome, FP, recherche Fuse.js
- `filtrerParPlageFp(liste, plage)` ✅ corrigé : utilise `analyserFp((pnj.niveau !== null && pnj.niveau !== undefined) ? pnj.niveau : pnj.fp)` — niveau 0 géré

---

## 7. Tests (150/150 passent)

| Suite | Tests | Couverture |
|---|---|---|
| `bonusDnD35.test.js` | 26 | Cumul typé, CA structurée, lutte |
| `calculsDnD35.test.js` | 90 | BBA, JS, PV, itératives, DV, PROGRESSION_TYPES (16 types), DEGATS_NATURELS, BONUS_PV_ARTIFICIEL, ESPACE_ALLONGE, ptComp, calculerStatsGlobal |
| `validationPersonnage.test.js` | 34 | Champ, cohérence, alignement/classe, sous-types, format DV |

**Pas de tests sur :** `normaliserPnj`, `npcRegistry`, `constantesDnD35`, composants React, hooks

---

## 8. Anomalies & Lacunes identifiées

| # | Niveau | Problème | Localisation |
|---|---|---|---|
| 1 | ~~Critique~~ | ✅ **CORRIGÉ** `BoutonAutoRemplir` et `calculerStatistiquesCreature()` branchés dans l'éditeur — switch mode PNJ/Créature + éditeur DV raciaux | `EditeurPersonnage.jsx` |
| 2 | ~~Critique~~ | ✅ **CORRIGÉ** `validerCarac()` préserve les `null` légitimes (Con mort-vivant, Int vase) | `pnjTemplate.js:96-99` |
| 3 | ~~Majeur~~ | ✅ **CORRIGÉ** `"Esprit (Incorporel)"` ajouté à `PROGRESSION_TYPES` | `calculsDnD35.js` |
| 4 | ~~Majeur~~ | ✅ **CORRIGÉ** Archétypes FP1–10 passent par `creerPnj()` via `.map()` dans `personnages/index.js` | `personnages/index.js` |
| 5 | ~~Majeur~~ | ✅ **CORRIGÉ** `filtrerParPlageFp()` utilise `!== null && !== undefined` — niveau 0 géré | `utilitairesPnj.js:124-127` |
| 6 | ~~Modéré~~ | ✅ **RÉSOLU** `BoutonAutoRemplir` mode Créature utilise `bbaFormatte`/`jsTotalFormatte` — strings garantis | `BoutonAutoRemplir.jsx` |
| 7–8 | ~~Modéré~~ | ✅ **CORRIGÉ** Dons et compétences : split `/[,;]/` — `;` supporté comme séparateur alternatif | `constantesDnD35.js:1121`, `validationPersonnage.js:338,367` |
| 9 | ~~Mineur~~ | ✅ **CORRIGÉ** `"dv"` ajouté à `champsAValider` + `case "dv"` dans `validerChamp()` (regex `XdY[+Z]`) | `validationPersonnage.js` |
| 10-12 | ~~Mineur~~ | ✅ **CORRIGÉ** `classes[]`, `disposition`, `modeEntite` ajoutés à `CLES_CANONIQUES` et `creerPnj()` | `pnjTemplate.js:14` |

---

## 9. Cartographie des dépendances

```
constantesDnD35.js ←── validationPersonnage.js ←── utiliserEditeurPersonnage.js
calculsDnD35.js    ←── validationPersonnage.js ←── EditeurPersonnage.jsx
bonusDnD35.js      ←── calculsDnD35.js
                   ←── EditeurPersonnage.jsx (via SectionBuffs)

pnjTemplate.js ←── 02_pnj_ennemis.js
               ←── 03-12_archetype_fpX.js [✅ via .map(creerPnj) dans personnages/index.js]

npcRegistry.js ←── personnages/index.js
               ←── normaliserPnj.js
               ←── [hooks: utiliserPnj, liaisonsDonnees]

EditeurPersonnage.jsx ─── calculerStatistiques()          ← mode PNJ (classes)
                      ─── calculerStatistiquesCreature()  ← mode Créature (DV raciaux) ✅
                      ─── calculerStatsGlobal()           ← orchestrateur (API externe) ✅
```

---

## 10. Recommandations pour le rework

### ✅ Toutes les priorités 1 et 2 implémentées

| # | Statut | Action |
|---|---|---|
| 1 | ✅ | `calculerStatistiquesCreature()` + switch mode + DV editor dans `EditeurPersonnage.jsx` |
| 2 | ✅ | `validerCarac()` préserve `null` |
| 3 | ✅ | "Esprit" ajouté à `PROGRESSION_TYPES` |
| 4 | ✅ | Archétypes FP1–10 via `creerPnj()` |
| 5 | ✅ | `bba`/`lutte`/`js` — conversion via `bbaFormatte`/`jsTotalFormatte` |
| 6 | ✅ | `filtrerParPlageFp()` corrigé |
| 7-8 | ✅ | Dons et compétences : split `/[,;]/` |
| 9 | ✅ | Validation format DV |
| 10-12 | ✅ | `classes[]`, `disposition`, `modeEntite` dans CLES_CANONIQUES |

### Reste (priorité basse, non bloquant)
- **`competences` texte libre** — structuration en objet au format `{nom, rang, mod}[]` serait idéale mais représente un refactoring important des données existantes
- **`sens` string/tableau** — le parsing bidirectionnel actuel fonctionne en pratique
- **Hybride DV raciaux + niveaux de classe** — cas non géré (pas requis actuellement)
- **Estimation/validation du FP** — calcul complexe, non demandé

---

*Fin de l'analyse exhaustive*
