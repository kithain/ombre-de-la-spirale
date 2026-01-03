https://kithain.github.io/ombre-de-la-spirale/

# Wiki de Campagne - Ombre de la Spirale

## Concept

Ce projet est un **wiki de campagne interactif** conçu pour les maîtres de jeu et joueurs de jeux de rôle. L'idée est de créer une plateforme centralisée qui organise et présente toutes les informations d'une campagne de manière accessible et intuitive.

### Qu'est-ce qu'un wiki de campagne ?

Un wiki de campagne est un système d'information qui permet de :
- **Organiser** l'univers, les personnages, les lieux et les événements
- **Naviguer** facilement entre les différents éléments liés
- **Consulter** rapidement les informations pendant les parties
- **Partager** un univers cohérent avec tous les joueurs

### Fonctionnalités principales

#### 🌍 **Univers**
- Géographie et histoire du monde
- Lieux importants et leurs descriptions
- Systèmes de magie et règles spécifiques

#### 👥 **Personnages**
- **PNJ principaux** : Alliés et personnages récurrents
- **Antagonistes** : Ennemis et opposants majeurs
- **Bestiaire** : Créatures et monstres du monde
- **Factions** : Groupes et organisations

#### 📖 **Scénarios**
- Structure des aventures et campagnes
- Résumés des scènes clés
- Liens entre les différents scénarios

#### 🔍 **Navigation intuitive**
- Recherche rapide dans toutes les sections
- Liens croisés entre les éléments
- Interface adaptative mobile-first

### Architecture technique

#### Structure des données
```
src/data/
├── universe/     # Géographie, histoire, lieux
├── personnages/  # PNJ, ennemis, bestiaire, factions  
├── scenarios/    # Aventures et campagnes
└── index.js      # Point d'entrée unifié
```

#### Composants React
- **Views** : Interfaces principales pour chaque section
- **Components** : Éléments réutilisables (cartes, modales, etc.)
- **Hooks** : Logique partagée et état

#### Technologies
- **React 18** avec Vite pour la performance
- **TailwindCSS** pour le design responsive
- **React Router** pour la navigation
- **i18n** pour le support multilingue (français/anglais)

### Pourquoi cette approche ?

#### Problèmes résolus
- **Information dispersée** : Plus besoin de chercher dans plusieurs documents
- **Perte de cohérence** : Liens automatiques entre les éléments
- **Accessibilité** : Interface mobile pour consulter pendant les parties
- **Partage** : Tous les joueurs ont accès aux mêmes informations

#### Avantages
- **Centralisation** : Tout l'univers au même endroit
- **Interconnexion** : Navigation fluide entre les concepts
- **Évolutivité** : Facile à étendre avec de nouvelles sections
- **Performance** : Rapide et responsive sur tous appareils

### Démarrage rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build pour production
npm run build
```

### Organisation des sections

#### `/univers` - Le monde
- Cartes géographiques
- Histoire et chronologie
- Lieux importants
- Culture et sociétés

#### `/factions` - Les groupes
- Alliances et guildes
- Organisations secrètes
- Relations diplomatiques
- Hiérarchies internes

#### `/antagoniste` - Les ennemis
- Méchants principaux
- motivations et objectifs
- Réseaux et alliés
- Faiblesses et forces

#### `/scenarios` - Les aventures
- Campagnes complètes
- Scénarios individuels
- Résumés des sessions
- Indices et accroches

### Évolution future

- **Générateur** : Création automatique de fiches
- **Export** : PDF et autres formats
- **Multimédia** : Images, sons ???
