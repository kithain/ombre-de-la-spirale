# 🏗️ Refactorisation du Code

## 📊 État Actuel

### ✅ Fait
- ✅ **Séparation des données de personnages** (`src/data/characters.js`)
- ✅ **Séparation des scènes communes** (`src/data/gameData.js`)
- ✅ **Structure de dossiers créée** pour les futurs scénarios

### 📁 Nouvelle Structure

```
src/
├── data/
│   ├── characters.js           # ✅ Classes de personnages (60 lignes)
│   ├── gameData.js             # ✅ Scènes communes (60 lignes)
│   └── scenarios/
│       ├── index.js            # ✅ Export combiné (placeholder)
│       ├── scenario1.js        # 🔜 À extraire (400+ lignes)
│       └── scenario2.js        # 🔜 Futur scénario
├── components/                 # 🔜 Composants React
│   ├── combat/
│   │   ├── CombatView.jsx     # 🔜 Interface de combat
│   │   ├── PlayerCard.jsx     # 🔜 Carte joueur
│   │   └── EnemyCard.jsx      # 🔜 Carte ennemi
│   ├── character/
│   │   ├── CharacterCreation.jsx  # 🔜 Création de personnage
│   │   └── CharacterSheet.jsx     # 🔜 Fiche de personnage
│   └── narrative/
│       ├── SceneView.jsx      # 🔜 Affichage de scène
│       └── ChoiceButton.jsx   # 🔜 Bouton de choix
├── Game.jsx                    # Logique principale (actuellement 1200+ lignes)
├── GameEngine.jsx              # Moteur de jeu (actuellement 450 lignes)
└── App.jsx                     # Menu principal
```

## 📉 Réduction de Taille

### Avant
- `GameEngine.jsx`: **559 lignes** (données + scènes)
- `Game.jsx`: **1200+ lignes** (tout le code)

### Après (étape 1)
- `GameEngine.jsx`: **450 lignes** (-109 lignes, -19%)
- `characters.js`: **60 lignes** (nouveau)
- `gameData.js`: **60 lignes** (nouveau)

### Objectif Final
- `GameEngine.jsx`: **50 lignes** (imports + exports)
- `Game.jsx`: **300 lignes** (logique pure)
- `scenario1.js`: **400 lignes** (scénario 1)
- Composants: **~100 lignes chacun**

## 🎯 Prochaines Étapes

### Phase 2 : Extraire le Scénario 1
```javascript
// src/data/scenarios/scenario1.js
export const SCENARIO_1 = {
  intro: { ... },
  scene_1_1: { ... },
  scene_1_2: { ... },
  // ... toutes les scènes du scénario 1
};
```

### Phase 3 : Composants de Combat
```javascript
// src/components/combat/CombatView.jsx
export const CombatView = ({ currentCombat, character, onAttack, onSpell }) => {
  return (
    <div className="combat-container">
      <PlayerCard character={character} />
      <EnemyList enemies={currentCombat.enemies} onSelect={onAttack} />
    </div>
  );
};
```

### Phase 4 : Composants de Narration
```javascript
// src/components/narrative/SceneView.jsx
export const SceneView = ({ scene, onChoice }) => {
  return (
    <div className="scene-container">
      <h2>{scene.title}</h2>
      <p>{scene.text}</p>
      <ChoiceList choices={scene.choices} onSelect={onChoice} />
    </div>
  );
};
```

## 💡 Avantages de la Refactorisation

### 📦 Modularité
- ✅ Fichiers plus petits et faciles à naviguer
- ✅ Séparation claire des responsabilités
- ✅ Réutilisabilité des composants

### 🔧 Maintenabilité
- ✅ Modifications isolées (un scénario ne casse pas les autres)
- ✅ Tests unitaires plus faciles
- ✅ Debugging simplifié

### 🚀 Scalabilité
- ✅ Ajout de nouveaux scénarios sans toucher au code existant
- ✅ Ajout de nouvelles classes de personnages facilement
- ✅ Extension du système de combat

### 👥 Collaboration
- ✅ Plusieurs personnes peuvent travailler sur différents fichiers
- ✅ Moins de conflits Git
- ✅ Code review plus facile

## 📝 Guide de Migration

### Pour ajouter un nouveau scénario :
1. Créer `src/data/scenarios/scenario2.js`
2. Exporter les scènes : `export const SCENARIO_2 = { ... }`
3. Importer dans `src/data/scenarios/index.js`
4. Fusionner dans `GAME_SCENES`

### Pour ajouter une nouvelle classe :
1. Ouvrir `src/data/characters.js`
2. Ajouter la classe dans `CHARACTER_CLASSES`
3. Définir stats, skills, equipment, abilities/spells

### Pour créer un nouveau composant :
1. Créer le fichier dans le bon dossier (`components/`)
2. Exporter le composant
3. Importer dans `Game.jsx`
4. Remplacer le code inline par le composant

## 🎉 Résultat

**Code plus propre, plus maintenable, plus scalable !**

- 📁 Fichiers < 500 lignes chacun
- 🔍 Navigation facile
- 🚀 Ajout de contenu simplifié
- 🐛 Debugging plus rapide
- 👥 Collaboration améliorée
