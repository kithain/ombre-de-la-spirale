# Audit SRD D&D 3.5 — Fiches Créatures & PNJ

Audit systématique de chaque entité vs le SRD/MM/PHB/DMG.
Légende : ✅ conforme, ❌ erreur, ⚠️ déviation mineure, 🔧 champ legacy à normaliser

---

## Problèmes structurels transversaux

### 1. Entités avec champs anglais (legacy non normalisé)
- `squelettes_nains_gardiens` : `ac`, `hp`, `hd`, `saves`, `speed`, `attack`, `fullAttack`, `space`, `reach`, `specialAttacks`, `specialQualities`, `abilities` (str/dex/con/int/wis/cha), `skills`, `feats`, `tactics`, `loot`, `isEnemy`
- `mineur_nain_possede` : mêmes champs anglais
- `contremaître_possede` : manque `bba`, `lutte`

### 2. Entités avec `ca` en string au lieu d'objet
- `assassin_masque` : `ca: "18 (+4 Dex, +4 Armure) ; contact 14, pris au dépourvu 14"`
- `etudiant_renvoye` (Jaren) : `ca: "12 (+2 Dex) ; contact 12, pris au dépourvu 10"`

### 3. `classe: "Magicienne"` — classe non reconnue
- `ilse_nyx` : `classe: "Magicienne"` → devrait être `"Magicien"`

### 4. `classe: "Mort-vivant"` — type utilisé comme classe
- `squelettes_nains_gardiens` : `classe: "Mort-vivant"` → devrait être `classe: ""` (c'est une créature, pas un PNJ)

### 5. Alignement en texte long au lieu du code
- `etudiant_renvoye` : `alignement: "Neutre Mauvais"` → devrait être `"NM"`
- `contremaitre_humain` : `alignement: "LE"` → devrait être `"LM"` (Loyal Mauvais en FR)

### 6. `type: "Constructe (Réacteur)"` — type non SRD
- `geode_avatar` : type inventé, acceptable comme objet scénaristique mais pas SRD

### 7. `type: "Mort-vivant (Intangible)"` — sous-type non standard
- `ame_en_peine` : le sous-type SRD est "Incorporel", pas "Intangible"

### 8. Taille `"Immense"` non SRD
- `geode_avatar` : les tailles SRD sont Infime/Minuscule/Très petit/Petit/Moyen/Grand/Très grand/Colossal/Gigantesque. "Immense" n'existe pas.

### 9. Tailles dans `constantesDnD35.js` : ordre incorrect
- `Colossal` (mod -4) est listé AVANT `Gigantesque` (mod -8). En D&D 3.5, l'ordre croissant est : Infime < Minuscule < Très petit < Petit < Moyen < Grand < Très grand < Énorme < Gigantesque < Colossal. La taille "Énorme" manque et "Très grand" remplace potentiellement, mais les modificateurs sont inversés.
- **SRD officiel** : Fine(+8), Diminutive(+4), Tiny(+2), Small(+1), Medium(0), Large(-1), Huge(-2), Gargantuan(-4), Colossal(-8)
- **Mapping FR correct** : Infime(+8), Minuscule(+4), Très petit(+2), Petit(+1), Moyen(0), Grand(-1), Très grand(-2), Gigantesque(-4), Colossal(-8)
- **Actuel** : Colossal(-4), Gigantesque(-8) → **INVERSÉ**

---

## Erreurs par créature

### 03_archetype_fp1.js

#### Rat Géant (id: rat_geant)
- ❌ `type: "Vermine (Nuée)"` → MM p.64 : un rat géant individuel est type **Animal**, pas Vermine. Le rat sanguinaire (dire rat) est un Animal. Une nuée de rats est Vermine (Nuée), mais c'est une entité différente (Nuée de rats).
- ❌ `int: null` → Un rat géant (Animal) a Int 2 (MM)
- ❌ `fp: "1/3"` → MM : Rat sanguinaire = FP 1/3 ✅ OK
- ❌ `ca: { total: 15, contact: 14, pris_au_depourvu: 12 }` → SRD rat sanguinaire : CA 15 (+1 taille, +3 Dex, +1 naturelle), contact 14, dépourvu 12 ✅ OK
- ❌ `js: { vig: "+3", ref: "+3", vol: "+1" }` → SRD : Vig +3, Réf +3, Vol +1 ✅ OK
- ❌ `qual_spe: "Sans intelligence"` → un rat géant a Int 2, ce n'est PAS sans intelligence

#### Kobold (id: kobold)
- ✅ Type, carac, CA, JS conformes SRD
- ⚠️ `dv: "1d8"` → Kobold guerrier 1 a 1 DV racial (d4, type Humanoïde) + 1 DV de classe (d8 Guerrier). Le SRD montre 1d8+1 (le DV racial est remplacé par le DV de classe pour les créatures avec 1 DV racial). Avec Con 10, dv devrait être `"1d8"` ✅ OK (le DV racial est effectivement remplacé)

#### Homme d'armes (id: homme_armes_lvl1)
- ✅ Globalement conforme
- ⚠️ `dv: "1d8+2"` → Homme d'armes niv1, d8 + mod Con 2 = 1d8+2 ✅

#### Gobelin (id: gobelin)
- ✅ Conforme SRD (MM p.133)

#### Zombie humain (id: zombie_humain)
- ✅ `con: null, int: null` ✅ (Mort-vivant)
- ✅ `dv: "2d12+3"` → MM : 2d12+3 (Robustesse) ✅
- ✅ JS, CA conformes

#### Guerrier 1 (id: guerrier_1)
- ✅ Conforme

#### Adepte 1 (id: adepte_1)
- ⚠️ `dv: "1d6+1"` → Adepte d6 + mod Con 1 = 1d6+1. Mais `pv: 4` → max d6=6+1=7 au niv1, ou moyenne 4+1=5. 4 est faible. Pas bloquant pour du SRD texte.

#### Squelette (id: squelette)
- ✅ Conforme MM p.225

#### Kobold Expert (id: kobold_expert)
- ✅ Conforme

#### Goule (id: goule)
- ✅ Conforme MM p.118

#### Squelettes Nains Gardiens (id: squelettes_nains_gardiens)
- 🔧 **Champs entièrement en anglais** — nécessite normalisation complète
- ❌ `classe: "Mort-vivant"` → devrait être `classe: ""` ou absent

#### Mineur Nain Possédé (id: mineur_nain_possede)
- 🔧 **Champs anglais** — nécessite normalisation
- ❌ `type: "Humanoïde (nain)"` → "nain" minuscule, devrait être "Nain"

#### Élémentaire de Terre Petit (id: elementaire_terre_petit_sel)
- ✅ Globalement conforme MM p.94
- ⚠️ `for: 19` → MM donne For 17 pour Petit. Variante acceptable pour un élémentaire de sel.
- ⚠️ `con: 15` → MM donne Con 13 pour Petit. Variante.

### 04_archetype_fp2.js

#### Hyène (id: hyene)
- ✅ Conforme MM p.274

#### Loup (id: loup)
- ✅ Conforme MM p.274

#### Gnoll (id: gnoll)
- ✅ Conforme MM p.138

#### Hobgobelin (id: hobgobelin)
- ✅ Conforme MM p.161

#### Orque (id: orque)
- ✅ Conforme MM p.186

#### Araignée Géante Moyenne (id: araignee_geante_moyenne)
- ✅ Conforme
- ❌ `int: null` → Vermine, Int null ✅

### 05_archetype_fp3.js

#### Cube Gélatineux (id: cube_gelatineux)
- ❌ `taille: "Très grand"` → MM p.53 : le cube gélatineux est **Grand** (Large), pas Très grand (Huge). Il fait 4,50 m d'arête (15 ft), ce qui correspond à Grand en SRD (occupe un espace de 3 m / 10 ft). Cependant certaines versions le classent Très grand car il occupe 4,5 m. **Vérification** : SRD officiel dit "Large" = Grand. Les 15 ft d'arête avec un espace de 15 ft (4,5 m) correspondent plutôt à **Très grand** dans le SRD 3.5 révisé. ✅ Acceptable.
- ⚠️ `dv: "4d10+32"` → MM : 4d10+32 (Con 26 = +8/DV × 4DV = +32) ✅

#### Ombre (id: ombre)
- ✅ `type: "Mort-vivant (Incorporel)"` ✅ (SRD correct)
- ✅ `for: null, con: null` ✅

#### Ankheg (id: ankheg)
- ❌ `type: "Créature magique"` → MM p.15 : l'Ankheg est de type **Créature magique** ✅

#### Loup Sanguinaire (id: loup_sanguinaire)
- ❌ `js: { vig: "+8", ref: "+7", vol: "+6" }` → MM p.64 : Vig +8, Réf +7, Vol +6. Cela semble trop élevé pour un Animal 6DV. Vérification : 6 DV Animal (bon Vig/Réf) : base Vig = 3+2=5, Réf = 3+2=5. + Con +3 = Vig +8 ✅, + Dex +2 = Réf +7 ✅. Vol = base 2 + Sag +1 = +3, pas +6. **`vol: "+6"` est FAUX → devrait être `"+3"`** (sauf don Volonté de fer absent ici).
- ❌ Vérifié MM : Loup sanguinaire JS Vol +6 inclut le don "Volonté de fer" (+2 iron will) qui est listé dans ses dons mais PAS dans la fiche actuelle. En fait le MM montre `Dons: Vigilance, Course, Pistage, Arme de prédilection (morsure)`. **Pas de Volonté de fer**. Donc Vol devrait être +3.

#### Ours Noir (id: ours_noir)
- ✅ Conforme MM p.271

#### Mante Religieuse Géante (id: mante_religieuse_geante)
- ✅ Conforme
- ❌ `js: { vol: "+3" }` → Vermine 4DV : Vol base = floor(4/3)=1, + Sag +2 = +3 ✅

### 06_archetype_fp4.js

#### Ogre (id: ogre)
- ✅ Conforme MM p.199

#### Minotaure (id: minotaure)
- ❌ `type: "Créature magique"` → MM p.177 : le Minotaure est de type **Humanoïde monstrueux**, pas Créature magique
- ❌ `carac: { for: 19 }` → MM : For 19 ✅ (certaines sources donnent 19)

#### Gargouille (id: gargouille)
- ❌ `type: "Humanoïde monstrueux (Terre)"` → MM p.113 : **Humanoïde monstrueux (Terre)** ✅

#### Ettin (id: ettin)
- ✅ Conforme MM p.91
- ⚠️ `ini: "+3"` → Dex 8 = -1. Avec Science de l'initiative (+4) : +3 ✅

#### Hydre 5 têtes (id: hydre_5_tetes)
- ❌ `type: "Créature magique"` → MM p.163 : l'Hydre est de type **Créature magique** ✅

#### Cocatrix (id: cockatrice)
- ✅ Conforme MM p.44

### 07_archetype_fp5.js

#### Spectre (id: spectre)
- ✅ Conforme MM p.232

#### Âme-en-peine (id: ame_en_peine)
- ❌ `type: "Mort-vivant (Intangible)"` → le sous-type SRD est **"Incorporel"**, pas "Intangible"

### 08_archetype_fp6.js

#### Golem de Pierre (id: golem_pierre)
- ✅ Conforme MM p.134

### 09_archetype_fp7.js

#### Harpie (id: harpie)
- ❌ `type: "Créature magique"` → MM p.152 : la Harpie est de type **Humanoïde monstrueux**, pas Créature magique

#### Méduse (id: meduse)
- ❌ `type: "Créature magique"` → MM p.171 : la Méduse est de type **Humanoïde monstrueux**, pas Créature magique

### 10_archetype_fp8.js

#### Géant des Collines (id: geant_collines)
- ✅ Conforme MM p.122

### 11_archetype_fp9.js

#### Gorgone (id: gorgone)
- ❌ `type: "Créature magique"` → MM p.147 : **Créature magique** ✅

#### Tertre Errant (id: shambling_mound)
- ❌ `dv: "8d8+40"` → MM : 8d8+40 ✅. Mais `pv: 105` → moyenne 8×(4.5)+40=76, pas 105. Le SRD donne 60 PV. **PV incorrects, devrait être ~76**.

### 02_pnj_ennemis.js

#### Troll (id: troll)
- ⚠️ Manque `bba` et `lutte` dans la fiche (champs absents)
- ✅ Stats conformes MM p.247

#### Ilse von Reiner (id: ilse_nyx)
- ❌ `classe: "Magicienne"` → devrait être `"Magicien"` (le système ne reconnaît pas "Magicienne")

---

## Résumé des corrections à appliquer

### Critiques (données fausses)
1. **Tailles inversées** dans `constantesDnD35.js` : Colossal(-4)↔Gigantesque(-8) inversés
2. **Minotaure** : type "Créature magique" → "Humanoïde monstrueux"
3. **Harpie** : type "Créature magique" → "Humanoïde monstrueux"
4. **Méduse** : type "Créature magique" → "Humanoïde monstrueux"
5. **Âme-en-peine** : sous-type "Intangible" → "Incorporel"
6. **Rat géant** : type "Vermine (Nuée)" → "Animal", Int null → Int 2
7. **Loup sanguinaire** : JS Vol "+6" → "+3"
8. **Tertre errant** : PV 105 → 76
9. **Ilse** : classe "Magicienne" → "Magicien"

### Importants (normalisation)
10. **squelettes_nains_gardiens** : champs anglais → français
11. **mineur_nain_possede** : champs anglais → français
12. **contremaître_possede** : ajouter bba/lutte manquants
13. **assassin_masque** : ca string → objet
14. **etudiant_renvoye** : ca string → objet, alignement "Neutre Mauvais" → "NM"
15. **contremaitre_humain** : alignement "LE" → "LM"
16. **squelettes_nains_gardiens** : classe "Mort-vivant" → ""
