# Architecture — Module "Édition de PNJ/Créatures" (D&D 3.5)

> **L'Ombre de la Spirale** — Documentation technique v1.0  
> Single Source of Truth pour le refactoring du module d'édition de PNJ et de créatures.

---

## Table des matières

1. [Analyse du Modèle de Données](#1-analyse-du-modèle-de-données)
2. [Logique Métier — The 3.5 Engine](#2-logique-métier--the-35-engine)
3. [Architecture des Composants React](#3-architecture-des-composants-react)
4. [Gestion de l'État](#4-gestion-de-létat)
5. [Checklist de Refactoring](#5-checklist-de-refactoring)

---

## 1. Analyse du Modèle de Données

### 1.1 Principe de séparation

Le modèle distingue trois couches :

| Couche | Rôle | Persisté ? |
|--------|------|-----------|
| **Données brutes** (`EntiteBase`) | Ce que le MJ saisit ou importe | ✅ Oui |
| **Valeurs dérivées** (`StatsDerivees`) | Calculées à la volée par le moteur | ❌ Non (recalculées) |
| **Métadonnées registre** (`MetaRegistre`) | Source, catégorie, couleur UI | ✅ Oui |

> **Règle d'or** : ne jamais persister une valeur dérivée. Les fonctions `calculerStatistiques()` et `calculerStatistiquesCreature()` sont la seule source de vérité pour BBA, JS, CA contact, etc.

---

### 1.2 Interfaces TypeScript

#### Caractéristiques et sous-types fondamentaux

```typescript
/** Les 6 caractéristiques D&D 3.5 — null indique "absente" (Con mort-vivant, Int vase) */
interface Caracteristiques {
  for: number | null;
  dex: number | null;
  con: number | null; // null pour Mort-vivant, Créature artificielle, Esprit
  int: number | null; // null pour Vase, Vermine, Créature artificielle
  sag: number | null;
  cha: number | null;
}

/** Classe d'armure structurée (PHB p.135) */
interface ClasseArmure {
  total: number;
  contact: number;           // Ignore Armure, Bouclier, Armure naturelle
  pris_au_depourvu: number;  // Ignore Esquive + bonus Dex positif
}

/** Jets de sauvegarde formatés avec signe */
interface JetsSauvegarde {
  vig: string; // "+5", "-1"
  ref: string;
  vol: string;
}

/** Fiche roleplay OGAS */
interface Ogas {
  occupation: string;  // Ce que fait le PNJ à l'instant T
  objectif: string;    // Ce qu'il veut
  attitude: string;    // Comportement envers les PJ
  enjeu: string;       // Ce qu'il risque de perdre/gagner
}

/** Métadonnées MJ (hors fiche de jeu) */
interface MetaMj {
  reference_livre?: string;   // "Manuel des Monstres p.247"
  contexte_scenario?: string; // Rôle dans le scénario
}

/** Fiche de combat structurée */
interface FicheCombat {
  sorts: Array<{ nom: string; details: string }>;
  actions_spe: Array<{ nom: string; details: string }>;
  dons_tactiques: Array<{ nom: string; details: string }>;
  resume_tactique: string;
}

/** Multiclassage */
interface EntreeClasse {
  classe: string;
  niveau: number;
}
```

#### Interface principale `EntiteBase` (données persistées)

```typescript
/**
 * Représente un PNJ ou une créature D&D 3.5.
 * Clés canoniques : normalisées par creerPnj() depuis pnjTemplate.js.
 * Mode dual : "pnj" (classe) ou "creature" (DV raciaux).
 */
interface EntiteBase {
  // ── Identité ──────────────────────────────────────────────────
  id: string;
  nom: string;
  role: string;                    // Rôle narratif court
  image: string | null;

  // ── Classification D&D 3.5 ────────────────────────────────────
  taille: TailleEntite;            // "Moyen", "Grand", etc.
  type: string;                    // "Humanoïde (Humain)", "Mort-vivant (Incorporel)"
  alignement: CodeAlignement;      // "LB", "NM", "CM", "N", etc.
  fp: number | string;             // Facteur de Puissance ("1/2", 1, 5…)

  // ── Mode dual PNJ / Créature ─────────────────────────────────
  modeEntite: "pnj" | "creature" | null;  // null = auto-détecté

  // ── Mode PNJ (classe) ─────────────────────────────────────────
  classe: string;                  // Classe principale (ou "" si créature)
  niveau: number | null;
  classes: EntreeClasse[];         // Multiclassage

  // ── Mode Créature (DV raciaux) ───────────────────────────────
  dv: string;                      // "4d8+12", "6d12", "2d6-2"

  // ── Combat (données saisies) ──────────────────────────────────
  ini: string;                     // "+3"
  ca: ClasseArmure;
  pv: number;
  js: JetsSauvegarde;
  bba: string;                     // "+6" (valeur saisie, peut différer du calcul SRD)
  lutte: string;                   // "+8"
  attaque: string;                 // Description textuelle attaque simple
  att_outrance: string;            // Description textuelle attaque à outrance
  rm: string | null;               // "RM 16" ou null
  rd: string | null;               // "5/Magie" ou null
  vit: string;                     // "9 m"
  espace: string;                  // "1,5 m"
  allonge: string;                 // "1,5 m"
  att_spe: string[];               // ["Souffle (18 m, CD 18, 6d6 feu)"]
  qual_spe: string[];              // ["Vision dans le noir 18 m", "Immunité au feu"]

  // ── Caractéristiques brutes ───────────────────────────────────
  carac: Caracteristiques;

  // ── Compétences, Dons, Tactiques (texte libre) ───────────────
  competences: string;
  dons: string;
  tactiques: string;

  // ── Contexte / Lieu ───────────────────────────────────────────
  environnement: string;
  biome: string;
  residence: string;
  lieuxRencontre: string[];        // IDs des lieux du scénario
  organisation: string;            // "Solitaire", "Bande (5-12)"
  sens: string;

  // ── Buffs / Sorts ─────────────────────────────────────────────
  bonus_actifs: Bonus[];           // Buffs actifs (cf. bonusDnD35.ts)
  sorts_prepares: Record<string, unknown>;

  // ── Roleplay ──────────────────────────────────────────────────
  ogas: Ogas;
  meta_mj: MetaMj | null;
  fiche_combat: FicheCombat | null;
  butin: string;
  disposition: string;

  // ── Drapeaux ──────────────────────────────────────────────────
  est_ennemi: boolean;
  antagoniste: boolean;
}

type TailleEntite =
  | "Infime" | "Minuscule" | "Très petit" | "Petit"
  | "Moyen" | "Grand" | "Très grand" | "Colossal" | "Gigantesque";

type CodeAlignement =
  | "LB" | "LN" | "LM"
  | "NB" | "N"  | "NM"
  | "CB" | "CN" | "CM";
```

#### Interface `StatsDerivees` (calculées, jamais persistées)

```typescript
/** Modificateurs des 6 caractéristiques (floor((score - 10) / 2)) */
interface ModificateursCarac {
  for: number | null;
  dex: number | null;
  con: number | null;
  int: number | null;
  sag: number | null;
  cha: number | null;
}

/** Résultat du moteur de calcul (calculerStatistiques / calculerStatistiquesCreature) */
interface StatsDerivees {
  mode: "pnj" | "creature";

  // Modificateurs
  modificateurs: ModificateursCarac;
  modTaille: number;               // Modificateur CA/attaque selon taille

  // Attaque
  bba: number;                     // Valeur numérique brute
  bbaFormatte: string;             // "+6"
  attaquesIteratives: string;      // "+11/+6/+1"
  attaqueCAC: string;              // "+8" (BBA + modFor + modTaille)
  attaqueDist: string;             // "+9" (BBA + modDex + modTaille)
  lutte: number;
  lutteFormattee: string;

  // Défense
  caContact: number;
  caPrisAuDepourvu: number | null;

  // Jets de sauvegarde
  jsBase: JetsSauvegardeNumerique;
  jsTotal: JetsSauvegardeNumerique;
  jsTotalFormatte: JetsSauvegarde;

  // Points de vie
  dv: number | null;               // Type de dé (4, 6, 8, 10, 12)
  dvFormatte: string | null;       // "4d8+12"
  pvEstimes: number | null;        // PV moyens calculés

  // Divers
  initiative: string;
  bonusCompetences: Record<string, number>;
  classeConnue: boolean;           // Mode PNJ : classe reconnue dans PROGRESSION_CLASSES

  // Mode Créature uniquement
  typeBase?: string;               // "Mort-vivant"
  sousTypes?: string[];            // ["Incorporel"]
  progression?: ProgressionType;
  dvParse?: DVParse | null;
  pvMoyens?: number | null;
  bonusPVFixe?: number;            // Créatures artificielles : bonus par taille
  donsAttendus?: number;
  pointsCompetences?: number;
  avertissements?: Record<string, string>;
  typeConnu?: boolean;
}

interface JetsSauvegardeNumerique { vig: number; ref: number; vol: number; }
interface DVParse { nombre: number; type: number; bonus: number; }
```

#### Interface `Bonus` (moteur de cumul typé)

```typescript
/**
 * Bonus typé D&D 3.5 (bonusDnD35.ts).
 * Règle fondamentale : bonus de même type → seul le plus élevé s'applique.
 * Exceptions : Esquive, Synergie, Divers → cumul libre.
 */
interface Bonus {
  type: TypeBonus;
  valeur: number;   // Positif = bonus, négatif = malus (toujours cumulé)
  source: string;   // "Bénédiction de guerre", "Armure en cuir +1"
  cible: string;    // "ca", "attaque", "js_vig", "js_ref", "js_vol", "degats"
}

type TypeBonus =
  | "Altération" | "Armure" | "Armure naturelle" | "Bouclier"
  | "Chance" | "Circonstance" | "Compétence" | "Esquive"
  | "Intuition" | "Moral" | "Naturel" | "Parade" | "Profane"
  | "Racial" | "Résistance" | "Sacré" | "Synergie" | "Taille" | "Divers";
```

---

## 2. Logique Métier — The 3.5 Engine

### 2.1 Vue d'ensemble des modules utilitaires

```
src/utilitaires/
├── calculsDnD35.js        ← Moteur principal (modificateurs, BBA, JS, PV, etc.)
├── bonusDnD35.js          ← Moteur de cumul de bonus typés
├── validationPersonnage.js ← Validation à 3 niveaux (champ, cohérence, entité)
├── normaliserPnj.js       ← Normalisation des données brutes
├── utilitairesPnj.js      ← FP, badges catégorie, filtres
└── liaisonsDonnees.js     ← Index unifié lieux/PNJ/scénario
```

### 2.2 Fonctions de `calculsDnD35.js`

#### Fonctions atomiques

| Fonction | Signature | Règle SRD |
|----------|-----------|-----------|
| `calculerModificateur` | `(score: number \| null) → number \| null` | `floor((score - 10) / 2)` |
| `formaterModificateur` | `(mod: number \| null) → string` | `"+3"`, `"-1"`, `"—"` |
| `calculerBBA` | `(progression, niveau) → number` | Bon=niv, Moyen=¾niv, Faible=½niv |
| `calculerJSBase` | `(progression, niveau) → number` | Bon=½niv+2, Faible=⅓niv |
| `calculerPVEstimes` | `(dv, niveau, modCon) → number \| null` | Niv1=max, suivants=⌈dv/2⌉+1 |
| `calculerPVMoyens` | `(nombreDV, typeDV, bonus) → number` | Même règle, pour créatures |
| `calculerInitiative` | `(modDex) → string` | `= modDex` |
| `calculerCAContact` | `(modDex, modTaille) → number` | `10 + modDex + modTaille` |
| `calculerCAPrisAuDepourvu` | `(caTotal, modDex) → number` | `caTotal - max(modDex, 0)` |
| `calculerAttaqueCAC` | `(bba, modFor, modTaille) → string` | `BBA + modFor + modTaille` |
| `calculerAttaqueDist` | `(bba, modDex, modTaille) → string` | `BBA + modDex + modTaille` |
| `formaterAttaquesIteratives` | `(bba) → string` | `"+11/+6/+1"` (palier de 5) |
| `obtenirModTaille` | `(taille) → number` | Table PHB p.152 |
| `calculerDonsAttendus` | `(nombreDV) → number` | 1 + ⌊(DV-1)/3⌋ |
| `calculerPointsCompetencesCreature` | `(typeBase, nombreDV, modInt) → number` | (ptComp+modInt)×DV, ×4 au 1er |
| `obtenirDegatsNaturels` | `(typeAttaque, taille) → string \| null` | Table MM p.296 |
| `extraireTypeBase` | `(typeComplet) → string` | `"Mort-vivant (Incorporel)"→"Mort-vivant"` |
| `extraireSousTypes` | `(typeComplet) → string[]` | `["Incorporel"]` |
| `parserDV` | `(dvStr) → DVParse \| null` | `"4d8+12"→{nombre:4,type:8,bonus:12}` |
| `calculerPointsAchat` | `(carac) → {total, details, budget}` | Table PHB p.169 (budgets 25/28/32) |

#### Fonctions orchestratrices

```typescript
// Mode PNJ (classe connue dans PROGRESSION_CLASSES)
calculerStatistiques(personnage: EntiteBase): StatsDerivees | null

// Mode Créature (type connu dans PROGRESSION_TYPES, pas de classe)
calculerStatistiquesCreature(creature: EntiteBase): StatsDerivees | null

// Orchestrateur : auto-détecte le mode, délègue
calculerStatsGlobal(entite: EntiteBase): (StatsDerivees & { mode: "pnj"|"creature" }) | null
```

### 2.3 Tables de données (`PROGRESSION_CLASSES` / `PROGRESSION_TYPES`)

#### `PROGRESSION_CLASSES` — 26 classes (base + PNJ + prestige)

```typescript
// Structure interne (calculsDnD35.js)
interface ProgressionClasse {
  bba: "bon" | "moyen" | "faible";
  js: { vig: "bon" | "faible"; ref: "bon" | "faible"; vol: "bon" | "faible" };
  dv: 4 | 6 | 8 | 10 | 12;
}
// Exemples :
// "Guerrier"  → { bba:"bon",   js:{vig:"bon",ref:"faible",vol:"faible"}, dv:10 }
// "Roublard"  → { bba:"moyen", js:{vig:"faible",ref:"bon",vol:"faible"}, dv:6  }
// "Magicien"  → { bba:"faible",js:{vig:"faible",ref:"faible",vol:"bon"}, dv:4  }
```

#### `PROGRESSION_TYPES` — 16 types de créature (SRD / MM)

```typescript
interface ProgressionType {
  dv: number;                   // Type de dé de vie
  bba: "bon" | "moyen" | "faible";
  js: { vig: "bon"|"faible"; ref: "bon"|"faible"; vol: "bon"|"faible" };
  ptComp: number;               // Points de compétence par DV (0 = aucun)
  caracNulles: Array<"con"|"int"|"for">; // Caractéristiques obligatoirement null
  notes: string;                // Règle SRD résumée
}
// Exemples :
// "Dragon"      → { dv:12, bba:"bon",    js:{vig:"bon",ref:"bon",vol:"bon"},    ptComp:6, caracNulles:[] }
// "Mort-vivant" → { dv:12, bba:"faible", js:{vig:"faible",ref:"faible",vol:"bon"}, ptComp:4, caracNulles:["con"] }
// "Esprit"      → { dv:12, bba:"faible", js:{...vol:"bon"}, ptComp:4, caracNulles:["con","for"] }
// "Vase"        → { dv:10, bba:"moyen",  js:{...faibles}, ptComp:0, caracNulles:["int"] }
```

### 2.4 Moteur de bonus typés (`bonusDnD35.js`)

```typescript
// Créer un bonus validé (lève une erreur si type inconnu ou valeur non finie)
creerBonus(type: TypeBonus, valeur: number, source: string, cible?: string): Bonus

// Résoudre un tableau de bonus selon les règles de cumul D&D 3.5
resoudreBonusCumules(bonus: Bonus[]): { total: number; details: Bonus[]; ignores: Bonus[] }

// Filtrer par cible puis résoudre
resoudreBonusPourCible(bonus: Bonus[], cible: string): { total: number; details: Bonus[]; ignores: Bonus[] }

// Calculer CA totale / contact / dépourvu depuis des bonus typés
calculerCADepuisBonus(bonusCA: Bonus[]): { total: number; contact: number; pris_au_depourvu: number; ... }

// Construire les bonus CA depuis les données brutes du personnage
construireBonusCA(params: { modDex, modTaille, bonusArmure, bonusBouclier, armureNaturelle, bonusParade, bonusEsquive }): Bonus[]

// Calculer le bonus de lutte (BBA + modFor + modTaille lutte — différent de taille CA)
calculerBonusLutte(bba: number, modFor: number, taille: TailleEntite): number
```

**Règles de cumul (PHB p.21) :**
- Bonus de **même type** → seul le plus élevé s'applique
- **Esquive**, **Synergie**, **Divers** (sans type) → toujours cumulables
- **Malus** (valeurs négatives) → toujours cumulés

### 2.5 Validation (`validationPersonnage.js`)

Trois niveaux indépendants et composables :

```typescript
// Niveau 1 — Champ unique (temps réel, onChange)
validerChampUnique(champ: string, valeur: unknown): string | null

// Niveau 2 — Cohérence croisée (règles D&D 3.5 : alignement/classe, CA, type/carac)
// Retourne des avertissements non bloquants
validerCoherence(personnage: EntiteBase): Record<string, string>

// Niveau 3 — Validation complète (avant sauvegarde)
validerPersonnage(personnage: EntiteBase): {
  valide: boolean;
  erreurs: Record<string, string>;
  avertissements: Record<string, string>;
}
```

**Règles de cohérence vérifiées :**

| Règle | Source SRD |
|-------|-----------|
| Paladin → alignement LB obligatoire | PHB p.43 |
| Moine → alignement Loyal (LB/LN/LM) | PHB p.40 |
| Barbare → non Loyal | PHB p.25 |
| Druide → Neutre sur un axe au moins | PHB p.33 |
| Barde → non Loyal | PHB p.26 |
| Mort-vivant → pas de Constitution | MM p.317 |
| Vase/Vermine/Créature artificielle → Int null | MM p.309+ |
| Animal → Int ≤ 2 | MM p.312 |
| Incorporel → pas de Force | MM p.311 |
| CA contact ≤ CA totale | PHB p.136 |
| CA dépourvu ≤ CA totale | PHB p.136 |
| Espace occupé cohérent avec la taille | MM p.29 |
| DV raciaux → avertit si BBA/JS saisis divergent du calcul SRD | SRD |
| Dons attendus selon les DV (1 + ⌊(DV-1)/3⌋) | SRD |

---

## 3. Architecture des Composants React

### 3.1 Principe de découpage atomique

```
Atoms       → ChampTexte, ChampSelection, SelecteurMultiple, ValeurCalculee
Molecules   → CaracBlock, JetsSauvegardeRow, ClasseArmureRow, MulticlasseEditor
Organisms   → SectionIdentite, SectionCaracteristiques, SectionCombat, SectionSorts
Templates   → PanneauEdition (assemblage des sections + barre de sauvegarde)
Pages       → EditeurPersonnage (orchestrateur + logique contexte)
```

### 3.2 Structure de composants cible

```
src/composants/pnj/
│
├── editeur/                          ← Atoms et helpers d'édition
│   ├── champsFormulaire.jsx          ← ChampTexte, ChampSelection, SelecteurMultiple,
│   │                                    ChampTextArea, ListeEditable
│   ├── ValeurCalculee.jsx            ← Affiche une stat dérivée (lecture seule + badge)
│   ├── IndicateurDiff.jsx            ← Badge "modifié" (diff brouillon vs original)
│   ├── BarreEtatSauvegarde.jsx       ← Barre de statut : inactif/enCours/succès/erreur
│   ├── BoutonAutoRemplir.jsx         ← Remplit auto les stats depuis le moteur SRD
│   └── SelecteurTypeCreature.jsx     ← Switch PNJ ↔ Créature + sélecteur type
│
├── sections/                         ← Organisms (sections du formulaire)
│   ├── SectionIdentite.jsx           ← Nom, FP, alignement, type, taille, switch mode
│   ├── SectionCaracteristiques.jsx   ← Les 6 caracs + modificateurs calculés + pts achat
│   ├── SectionCombat.jsx             ← CA, PV, BBA, Lutte, Initiative, attaques
│   ├── SectionClasse.jsx             ← Multiclassage (mode PNJ)
│   ├── SectionDV.jsx                 ← Éditeur DV raciaux (mode Créature)
│   ├── SectionJetsSauvegarde.jsx     ← Vig/Ref/Vol + comparaison vs calcul SRD
│   ├── SectionCapacites.jsx          ← att_spe + qual_spe (ListeEditable)
│   ├── SectionCompetences.jsx        ← EditeurCompetences + info points SRD
│   ├── SectionDons.jsx               ← EditeurDons + compteur vs dons attendus
│   ├── SectionSorts.jsx              ← Sorts préparés par niveau, emplacements
│   ├── SectionBuffs.jsx              ← Buffs actifs (bonus typés)
│   ├── SectionLieu.jsx               ← Biome, résidence, lieux de rencontre
│   ├── SectionOgas.jsx               ← Fiche OGAS (occupation/objectif/attitude/enjeu)
│   └── SectionMetaMj.jsx             ← Notes MJ, référence livre, contexte scénario
│
├── affichage/                        ← Sections lecture seule (vue détail PNJ)
│   ├── GrilleStatsPnj.jsx
│   ├── JetsSauvegardePnj.jsx
│   ├── CombatPnj.jsx
│   ├── CapacitesPnj.jsx
│   ├── InfoTypePnj.jsx
│   ├── TactiquePnj.jsx
│   └── OgasPnj.jsx
│
├── EditeurPersonnage.jsx             ← Orchestrateur principal (pages)
├── ModaleDetailsPnj.jsx              ← Modale de consultation (lecture seule)
└── CartePnjMinimale.jsx              ← Carte compacte liste/grille
```

### 3.3 Contrats de composants clés

#### `SectionCaracteristiques`

```tsx
interface PropsSectionCaracteristiques {
  carac: Caracteristiques;
  stats: StatsDerivees | null;           // Pour les modificateurs calculés
  erreurs?: Record<string, string>;
  surModification: (carac: Caracteristiques) => void;
  readonly?: boolean;
}
// Affiche : score saisi + modificateur calculé + alerte caracNulle si type l'exige
```

#### `ValeurCalculee`

```tsx
interface PropsValeurCalculee {
  label: string;
  valeur: string | number | null;
  valeurOriginale?: string | number | null; // Pour le badge diff
  avertissement?: string;                   // Tooltip si diverge du SRD
  className?: string;
}
```

#### `BoutonAutoRemplir`

```tsx
interface PropsBoutonAutoRemplir {
  surClic: () => void;
  estCreature: boolean;
  stats: StatsDerivees | null;
  statsCreature: StatsDerivees | null;
  disabled?: boolean;
}
// Mode PNJ   : icône Wand2, remplit BBA, lutte, initiative, JS, CA contact/dépourvu
// Mode Créature : icône Swords, remplit PV moyens, BBA, lutte, espace/allonge SRD
```

### 3.4 Composants Molecule détaillés

#### `CaracBlock` (Molecule)

```tsx
// Affiche 1 caractéristique : score + modificateur + indicateur "null autorisé"
// La logique null (Con mort-vivant) doit être gérée ici, pas dans le parent
interface PropsCaracBlock {
  stat: keyof Caracteristiques;   // "for", "dex", etc.
  valeur: number | null;
  modificateur: number | null;    // Pré-calculé par le parent
  nullAutorise: boolean;           // Depuis PROGRESSION_TYPES[typeBase].caracNulles
  erreur?: string;
  surModification: (valeur: number | null) => void;
}
```

#### `ClasseArmureRow` (Molecule)

```tsx
// Affiche les 3 valeurs CA avec cohérence vérifiée
interface PropsClasseArmureRow {
  ca: ClasseArmure;
  caContact: number;               // Calculé par le moteur
  caPrisAuDepourvu: number | null;
  avertissement?: string;
  surModification: (ca: ClasseArmure) => void;
}
```

---

## 4. Gestion de l'État

### 4.1 Stratégie recommandée : State Local + Context (pattern actuel)

Le formulaire d'édition est complexe (~50 champs interdépendants). La stratégie à **trois niveaux** est la plus adaptée :

```
┌─────────────────────────────────────────────────────┐
│  ContexteEditeurPnj (Context)                        │
│  ┌────────────────────────────────────────────────┐  │
│  │  utiliserEditeurPersonnage (Hook générique)    │  │
│  │  • brouillon (useState)                        │  │
│  │  • historique undo/redo (useRef)               │  │
│  │  • etatSauvegarde (useState)                   │  │
│  │  • erreurs (useState)                          │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  EditeurPersonnage (Orchestrateur)                    │
│  ┌────────────────────────────────────────────────┐  │
│  │  stats = useMemo(calculerStatsGlobal, [brouillon]) │
│  │  ← recalcul uniquement si brouillon change     │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  SectionX (Organism)                                  │
│  ┌────────────────────────────────────────────────┐  │
│  │  Props : slice du brouillon + callback surMod  │  │
│  │  Pas d'état local (controlled components)      │  │
│  └────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### 4.2 Pattern `utiliserEditeurGenerique` (base partagée)

Le hook `utiliserEditeurGenerique` (`src/hooks/utiliserEditeurGenerique.js`) fournit le cycle de vie complet :

```typescript
interface OptionsEditeurGenerique<T> {
  surSauvegarde?: (diff: Partial<T>, brouillonComplet: T) => Promise<void>;
  valider?: (entite: T) => ValidationResult;
  validerChamp?: (champ: string, valeur: unknown) => string | null;
  labelEntite?: string;
}

interface APIEditeurGenerique<T> {
  // State
  brouillon: T | null;
  etatSauvegarde: EtatSauvegarde;
  messageSauvegarde: string;
  erreurs: Record<string, string>;
  peutAnnuler: boolean;
  peutRefaire: boolean;
  estActif: boolean;

  // Actions
  charger: (entite: T) => void;
  modifierChamp: (champ: string, valeur: unknown) => void;
  modifierChampImbrique: (chemin: string[], valeur: unknown) => void;
  sauvegarder: () => Promise<void>;
  reinitialiser: () => void;
  annuler: () => void;
  refaire: () => void;
  definirCallbackSauvegarde: (fn: SurSauvegardeCallback) => void;
}
```

**Points de conception critiques :**

- `brouillon` = `useState` (déclenche les re-renders UI)
- `brouillonRef` = `useRef` miroir (lecture synchrone dans les callbacks sans dépendance instable)
- `historiqueRef` + `indexHistRef` = `useRef` (undo/redo synchrone, **pas** de `useEffect`)
- `peutAnnuler` / `peutRefaire` = `useState` (doivent déclencher un re-render pour activer/désactiver les boutons)
- `surSauvegardeRef` = `useRef` (callback stable, jamais recréé)

### 4.3 Optimisation des re-renders

```tsx
// 1. Stats dérivées : mémoïsées globalement dans l'orchestrateur, passées en props
const stats = useMemo(
  () => calculerStatsGlobal(brouillon),
  [brouillon]
);

// 2. Callbacks de modification : stables via useCallback
const surModifCarac = useCallback(
  (carac: Caracteristiques) => modifierChamp("carac", carac),
  [modifierChamp] // modifierChamp est déjà stable (useCallback dans le hook)
);

// 3. Sections pures : React.memo sur les organisms
const SectionCaracteristiques = React.memo(({ carac, stats, surModification }) => { ... });

// 4. Ne JAMAIS passer l'objet `stats` entier comme dépendance de useCallback
// → passer uniquement la valeur scalaire dont le callback a besoin
const surAutoRemplir = useCallback(() => {
  modifierChamp("pv", stats?.pvEstimes ?? brouillon?.pv);
}, [modifierChamp, stats?.pvEstimes, brouillon?.pv]);
```

### 4.4 Flux de données

```
[Événement utilisateur]
        ↓
modifierChamp("carac.for", 18)
  → pousserDansHistorique(brouillon actuel)
  → _definirBrouillonState(nouveau brouillon cloné)
  → brouillonRef.current = nouveau brouillon
        ↓
[React re-render]
  → stats = useMemo(calculerStatsGlobal, [brouillon])  // recalcul SRD
  → erreurs = validerChampUnique("carac", newVal)      // validation temps réel
  → avertissements = validerPersonnage(brouillon).avertissements  // cohérence
        ↓
[Sauvegarde]
  → diff = calculerDiff(original, brouillon)  // envoie uniquement les champs modifiés
  → surSauvegardeRef.current(diff, brouillon)
```

### 4.5 Pourquoi pas Zustand/Jotai/Signals ?

| Solution | Avantage | Inconvénient pour ce cas |
|----------|----------|--------------------------|
| **useState + Context** (actuel) | Simple, testable, sans dépendance | Re-renders si le contexte est mal découpé |
| **Zustand** | Hors du React tree, sélecteurs fins | Overkill pour un formulaire modal unique |
| **Jotai (Atoms)** | Granularité atomique par champ | Complexifie l'undo/redo et le diff |
| **Signals (Preact)** | Zéro re-render inutile | Incompatible avec l'écosystème React strict |

**Conclusion** : Le pattern actuel (`useState` + `useRef` miroir + `useMemo` pour les stats) est optimal pour ce cas. L'axe d'amélioration principal est de **séparer le contexte** en deux : un contexte de données (`brouillon`) et un contexte d'UI (`etatSauvegarde`, `erreurs`) pour éviter que les erreurs temps réel re-rendent les sections de données.

---

## 5. Checklist de Refactoring

### 5.1 Moteur de calcul

- [ ] **Modificateur null vs 0** — `calculerModificateur(null)` doit retourner `null`, pas `0`. Un personnage sans Constitution (Mort-vivant) n'a pas de `+0` à Vigueur, il est simplement **immunisé**.
- [ ] **BBA multiclasse** — Le BBA total = somme des BBA de chaque classe. La formule `calculerBBA(progression, niveau)` traite une classe à la fois. L'orchestrateur doit sommer les BBA de `personnage.classes[]`.
- [ ] **JS multiclasse** — Même logique : sum des JS de base de chaque classe, puis ajouter le mod caractéristique une seule fois.
- [ ] **Attaques itératives** — Les itératives sont basées sur le BBA **total**, pas par classe (PHB p.138).
- [ ] **DV type vs classe** — En mode PNJ, le type de dé vient de `PROGRESSION_CLASSES[classe].dv`. En mode Créature, il vient de `PROGRESSION_TYPES[typeBase].dv`. Vérifier que la validation `_creature_dv_type` utilise la bonne source.
- [ ] **Dégâts d'armes naturelles** — `obtenirDegatsNaturels()` couvre morsure/griffe/coup/etc. mais les dégâts de choc (créatures sans attaque naturelle) sont absents — à ajouter.
- [ ] **Modificateur de taille pour la lutte** — Différent du modificateur de taille pour la CA (PHB p.155 vs p.152). `calculerBonusLutte` utilise sa propre table `MODIFICATEURS_LUTTE` — ne pas confondre avec `MODIFICATEURS_TAILLE`.
- [ ] **Points de compétence : premier DV ×4** — La règle SRD (×4 pour le premier niveau/DV) est correctement implémentée dans `calculerPointsCompetencesCreature`. Vérifier que `calculerStatistiques` (mode PNJ) applique aussi le ×4 au niveau 1 si l'UI l'affiche.

### 5.2 Cumul des types de bonus de CA

```
⚠️ POINT CRITIQUE — Erreur fréquente
```

| Scénario | Comportement attendu |
|----------|---------------------|
| Anneau de protection +2 + Anneau de protection +3 | Seul +3 s'applique (même type **Parade**) |
| Bouclier +2 + Mage armure (Armure +4) | Les deux s'appliquent (types différents) |
| Esquive +1 (don) + Esquive +2 (sort) | Les deux se cumulent (Esquive est cumulable) |
| -2 Affaibli + -2 Épuisé | Les deux se cumulent (malus toujours cumulés) |

La fonction `resoudreBonusCumules()` gère cela correctement. Ne jamais additionner naïvement les bonus CA — **toujours passer par le moteur**.

### 5.3 Pénalités d'armure (ACP — Armor Check Penalty)

- [ ] L'ACP s'applique aux compétences basées sur For/Dex/Con portant une armure lourde ou un bouclier (PHB p.123).
- [ ] Champs non encore modélisés dans `EntiteBase` : `armure.acp`, `bouclier.acp`.
- [ ] À ajouter comme champ optionnel et afficher dans `SectionCompetences` si l'ACP > 0.

### 5.4 Résistance à la Magie (RM)

- [ ] `rm` est stocké en `string | null` (`"RM 16"`). Parser la valeur numérique pour les comparaisons et avertissements.
- [ ] La RM doit être ≥ 11 pour être utile (en dessous, un lanceur de niveau 1 la surpasse facilement).
- [ ] Avertissement à ajouter : RM présente mais type de créature sans RM native dans le SRD.

### 5.5 Réduction des Dégâts (RD)

- [ ] `rd` est stocké en `string | null` (`"5/Magie"`, `"10/Argent et Bien"`).
- [ ] Ne pas valider le format de manière trop stricte (le SRD admet des RD composées : `"15/Argent ou Magie"`).
- [ ] RD et Résistance aux énergies (feu, froid, etc.) sont deux choses distinctes — modéliser séparément si nécessaire.

### 5.6 Multi-classage

- [ ] `classes: EntreeClasse[]` est le champ canonique pour le multiclassage.
- [ ] `classe` (string) = classe principale legacy. En mode multiclasse, ne lire que `classes[]`.
- [ ] Le niveau total = `classes.reduce((s, c) => s + c.niveau, 0)`.
- [ ] Les aptitudes de classe (`obtenirAptitudesClasse`) doivent être appelées pour **chaque** entrée de `classes[]`.
- [ ] BBA multi = somme des BBA individuels (plafonné selon la formule PHB p.57 pour les niveaux effectifs).

### 5.7 Mode Dual PNJ / Créature

- [ ] `modeEntite` est auto-détecté si `null` : classe non vide → `"pnj"`, type reconnu sans classe → `"creature"`.
- [ ] L'utilisateur peut forcer le mode via le switch en UI (stocké dans `modeEntite`).
- [ ] En mode `"creature"` : masquer la section classe, afficher la section DV raciaux.
- [ ] En mode `"pnj"` : masquer la section DV raciaux, afficher la section classe/multi-classage.
- [ ] `calculerStatsGlobal()` gère ce dispatch automatiquement.
- [ ] **Ne pas mélanger** les deux modes lors de la sauvegarde : un diff d'un champ `dv` en mode PNJ ne devrait pas déclencher un recalcul de créature.

### 5.8 Caractéristiques nulles

```
⚠️ POINT CRITIQUE — Régression fréquente
```

- [ ] `carac.con = null` est **valide** (Mort-vivant, Créature artificielle, Esprit). Ne jamais remplacer `null` par `10` ou `0` à la normalisation.
- [ ] `carac.int = null` est **valide** (Vase, Vermine, Créature artificielle).
- [ ] `carac.for = null` est **valide** (Esprit, Incorporels).
- [ ] `validerCarac()` dans `pnjTemplate.js` préserve explicitement `null` — ne pas modifier ce comportement.
- [ ] `calculerModificateur(null)` retourne `null` — vérifier que toutes les fonctions de calcul propagent ce `null` correctement sans le convertir.

### 5.9 Persistance et immutabilité

- [ ] L'original chargé dans l'éditeur doit être **gelé** (`Object.freeze(clonerProfond(entite))`).
- [ ] Le brouillon doit être un **clone profond** indépendant de l'original.
- [ ] Ne jamais muter directement le brouillon — toujours passer par `modifierChamp()` ou `modifierChampImbrique()`.
- [ ] Le diff (`calculerDiff`) doit être calculé sur les **données brutes** (pas les stats dérivées).
- [ ] `localStorage` : préfixe `pnj_edit_` pour les éditions persistées ; nettoyer les clés orphelines si un PNJ est supprimé.

### 5.10 Tests de non-régression prioritaires

| Cas à tester | Raison |
|---|---|
| Mort-vivant avec `con: null` → Vigueur basée sur Cha | Règle SRD spécifique, cassée facilement |
| BBA multiclasse Guerrier 5 / Magicien 5 → BBA +5 (pas +8) | Progression Moyen pour Magicien |
| CA contact d'un personnage encombrant | Doit ignorer Armure, Bouclier, Armure nat. |
| `resoudreBonusCumules` avec 2 bonus Armure | Seul le plus élevé retenu |
| `parserDV("6d8-3")` | Bonus négatif (créatures affaiblies) |
| Esprit avec `for: null` et `con: null` | Double caracNulle |
| `calculerDonsAttendus(1)` → 1, `(4)` → 2, `(7)` → 3 | Vérifier le plancher |
| Créature artificielle Grande → bonus PV +30 | Bonus taille, pas de Con |

---

## Annexe A — Correspondances taille → statistiques

| Taille | Mod CA/Att | Mod Lutte | Espace | DV artificielle PV |
|--------|-----------|-----------|--------|-------------------|
| Infime | +8 | -16 | 0,15 m | +0 |
| Minuscule | +4 | -12 | 0,30 m | +0 |
| Très petit | +2 | -8 | 0,75 m | +0 |
| Petit | +1 | -4 | 1,5 m | +10 |
| **Moyen** | **0** | **0** | **1,5 m** | **+20** |
| Grand | -1 | +4 | 3 m | +30 |
| Très grand | -2 | +8 | 4,5 m | +40 |
| Colossal | -4 | +12 | 9 m | +60 |
| Gigantesque | -8 | +16 | 18 m | +80 |

---

## Annexe B — Fichiers sources de référence

| Fichier | Rôle |
|---------|------|
| `src/utilitaires/calculsDnD35.js` | Moteur de calcul principal (modificateurs, BBA, JS, PV, créatures) |
| `src/utilitaires/bonusDnD35.js` | Moteur de cumul de bonus typés |
| `src/utilitaires/validationPersonnage.js` | Validation à 3 niveaux |
| `src/utilitaires/normaliserPnj.js` | Normalisation des données brutes |
| `src/data/personnages/pnjTemplate.js` | Schéma canonique + factory `creerPnj()` |
| `src/data/npcRegistry.js` | Registre global (index ID, index nom, CRUD) |
| `src/data/constantesDnD35.js` | Constantes officielles (alignements, tailles, classes, biomes) |
| `src/data/buffsDnD35.js` | Buffs prédéfinis avec type de bonus et cibles |
| `src/data/sortsDnD35.js` | Emplacements de sorts par classe et niveau |
| `src/hooks/utiliserEditeurGenerique.js` | Hook de cycle de vie (brouillon, undo/redo, diff, sauvegarde) |
| `src/hooks/utiliserEditeurPersonnage.js` | Spécialisation PNJ (validation D&D 3.5) |
| `src/hooks/helpersEditeur.js` | Helpers partagés (clonerProfond, calculerDiff, ETATS_SAUVEGARDE) |
| `src/composants/pnj/EditeurPersonnage.jsx` | Orchestrateur principal du formulaire |
| `src/composants/pnj/editeur/BoutonAutoRemplir.jsx` | Auto-remplissage SRD (mode PNJ + mode Créature) |
| `src/composants/pnj/editeur/ValeurCalculee.jsx` | Affichage stat dérivée avec badge diff |

---

*Document généré le 14 mars 2026 — L'Ombre de la Spirale v3*
