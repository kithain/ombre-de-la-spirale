# 🎮 L'Ombre de la Spirale - Jeu Vidéo

## 🎯 Description

**L'Ombre de la Spirale** est maintenant un RPG narratif interactif basé sur votre campagne de JDR ! Vivez l'aventure à travers les yeux d'un aventurier dans la cité gothique de Val-d'Ombre.

## ✨ Fonctionnalités

### 🎭 Système de Personnage
- **4 classes jouables** : Guerrier, Mage, Roublard, Clerc
- Chaque classe a ses propres statistiques, compétences et équipement
- Système de points de vie, d'expérience et de niveau
- Inventaire et gestion de l'or

### 📖 Narration Interactive
- **Histoire ramifiée** avec des choix qui comptent
- Dialogues immersifs et descriptions atmosphériques
- Multiple fins possibles selon vos décisions
- Journal de jeu pour suivre votre progression

### ⚔️ Système de Combat
- **Combat au tour par tour** tactique
- Lancers de dés (d20) pour les attaques
- Gestion des points de vie en temps réel
- Ennemis variés avec leurs propres statistiques
- Potions et objets utilisables en combat

### 🎲 Tests de Compétences
- Tests basés sur vos statistiques (Force, Dextérité, Intelligence, etc.)
- Difficulté variable (DC) selon les situations
- Résultats affichés avec détails (jet + modificateur)
- Impact direct sur l'histoire

### 🎨 Interface Immersive
- **Design gothique et sombre** fidèle à l'univers
- Animations et effets visuels
- Interface intuitive et responsive
- Barre de vie dynamique
- Journal de combat détaillé

## 🎮 Comment Jouer

1. **Lancez le jeu** : `npm run dev`
2. **Menu principal** : Choisissez entre "Jouer" et "Wiki"
3. **Création de personnage** :
   - Sélectionnez votre classe
   - Donnez un nom à votre héros
   - Commencez l'aventure !
4. **Gameplay** :
   - Lisez les descriptions de scènes
   - Choisissez vos actions parmi les options proposées
   - **Combat** :
     - Cliquez sur un ennemi pour l'attaquer (attaque normale)
     - **Mage** : Cliquez sur un sort, puis sur un ennemi pour le cibler
     - **Boule de feu** : Lance immédiatement (tous les ennemis)
   - Gérez votre inventaire et vos ressources

## 📚 Contenu Disponible

### Version Alpha 0.1
- ✅ **Scénario 1 complet** : "Le Murmure des Os"
  - 5 actes narratifs
  - Multiples embranchements
  - Combats variés
  - Introduction de Thade Coren
  - Enquête au cimetière et dans les égouts

### À Venir
- 🔜 Scénario 2 : "L'Écho des Profondeurs"
- 🔜 Scénario 3 : "La Chute de Val-d'Ombre"
- 🔜 Scénario 4 : "Le Labyrinthe Vivant"
- 🔜 Scénario 5 : "L'Aube de Sang"
- 🔜 Système de sauvegarde
- 🔜 Musique et effets sonores
- 🔜 Plus d'objets et d'équipements
- 🔜 Système de réputation avec les factions

## 🎯 Classes de Personnage

### ⚔️ Guerrier
- **PV** : 20 | **FOR** : 16 | **DEX** : 12
- Spécialiste du combat rapproché
- Haute endurance et dégâts physiques
- **Capacités martiales** :
  - **Coup puissant** : +50% dégâts (CD: 3 tours)
  - **Second souffle** : Récupère 25% PV max (1x/combat)
  - **Posture défensive** : -50% dégâts reçus ce tour (CD: 4 tours)
- Équipement : Épée longue, Armure de plaques, Bouclier, Potion de soin

### ✨ Mage
- **PV** : 14 | **INT** : 16 | **SAG** : 14 | **MANA** : 3
- Maître des arts arcaniques
- Sorts puissants mais fragile
- **Sorts** :
  - **Projectile magique** (3d4+3) - Gratuit, infaillible
  - **Boule de feu** (3d6) - 1 mana, tous les ennemis
  - **Éclair** (4d6) - 1 mana, 1 ennemi
- Équipement : Bâton, Robe de mage, Grimoire, Potion de soin

### 🗡️ Roublard
- **PV** : 16 | **DEX** : 16 | **CHA** : 14
- Expert en discrétion et persuasion
- Polyvalent et agile
- **Capacités sournoises** :
  - **Attaque sournoise** : Dégâts x2 (1x/combat)
  - **Esquive acrobatique** : Évite toutes attaques ce tour (CD: 4 tours)
  - **Poison de lame** : 3 dégâts/tour x 3 tours (CD: 5 tours)
- Équipement : Dagues, Armure de cuir, Outils de voleur, Potion de soin

### 🛡️ Clerc
- **PV** : 18 | **SAG** : 16 | **CHA** : 14 | **MANA** : 3
- Guérisseur et protecteur
- Équilibre entre combat et soutien
- **Sorts divins** :
  - **Mot de guérison** (2d8+3) - Gratuit, se soigne
  - **Flamme sacrée** (2d8) - 1 mana, feu divin (1 ennemi)
  - **Esprit gardien** (1d6) - 1 mana, bouclier (réduit dégâts)
- Équipement : Masse d'armes, Cotte de mailles, Symbole sacré, 2x Potion de soin

## 🎲 Système de Jeu

### Tests de Compétences
```
Jet de dé (d20) + Modificateur de caractéristique ≥ Difficulté (DC)
Modificateur = (Caractéristique - 10) / 2 (arrondi inf.)
```

### Combat
```
Attaque : d20 + Bonus d'attaque vs Défense ennemie
Dégâts : d8 + Modificateur de Force
Initiative : Tour du joueur puis tour des ennemis
```

## 🌟 Conseils de Jeu

1. **Explorez toutes les options** : Certains choix révèlent des informations importantes
2. **Gérez vos ressources** : Les potions sont précieuses, utilisez-les au bon moment
3. **Attention aux tests de compétences** : Vos statistiques influencent vos chances de succès
4. **Observez les ennemis** : Notez leur défense et leurs PV pour planifier vos attaques
5. **Le contexte compte** : Certaines actions donnent des avantages en combat

## 🛠️ Technologies Utilisées

- **React** : Framework UI
- **Vite** : Build tool rapide
- **Tailwind CSS** : Styling moderne
- **Lucide React** : Icônes élégantes
- **JavaScript ES6+** : Logique de jeu

## 📝 Structure du Code

```
src/
├── Game.jsx           # Composant principal du jeu
├── GameEngine.jsx     # Données et logique de jeu
├── App.jsx            # Menu principal
├── CampaignWiki.jsx   # Wiki de la campagne
└── ...
```

## 🎨 Personnalisation

Le jeu est conçu pour être facilement extensible :
- Ajoutez de nouvelles scènes dans `GameEngine.jsx`
- Créez de nouvelles classes de personnages
- Ajoutez des objets et équipements
- Modifiez les statistiques et la difficulté

## 🐛 Bugs Connus

- Aucun système de sauvegarde pour le moment
- Certaines scènes sont des placeholders
- Pas d'animations de combat avancées

## 🤝 Contribution

Ce projet est basé sur votre campagne personnelle. N'hésitez pas à :
- Ajouter de nouveaux scénarios
- Créer de nouvelles classes
- Améliorer l'interface
- Ajouter des fonctionnalités

## 📜 Licence

Projet personnel basé sur la campagne "L'Ombre de la Spirale"

---

**Bon jeu et que la Spirale vous soit favorable !** 🌀
