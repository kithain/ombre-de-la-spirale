```text
_______________________________________________________________________________
        --==  O M B R E   D E   L A   S P I R A L E  ==--
           [ W I K I   D E   C A M P A G N E D&D 3.5 ]
_______________________________________________________________________________

DATE....: 2025-2026                    PLATFORM: WEB / REACT JS
TYPE....: CAMPAIGN WIKI ENGINE         DESIGN..: KITHAIN 
DEMO....: https://kithain.github.io/ombre-de-la-spirale/
_______________________________________________________________________________


## Concept

**Ombre de la Spirale** est un wiki de campagne interactif pour Donjons & Dragons 3.5, centré sur l'univers de Val-d'Ombre et de son antagoniste, Thade Coren. Cette application permet d'organiser et naviguer facilement entre les différents éléments de l'univers :

- **Organiser** l'univers, les personnages, les lieux et les événements
- **Naviguer** facilement entre les concepts grâce aux liens croisés
- **Consulter** rapidement les données en pleine session de jeu
- **Explorer** un monde riche et complexe

## Univers

La campagne se déroule à **Val-d'Ombre**, une cité industrielle et gothique accrochée à flanc de montagne. L'histoire suit l'opposition progressive entre deux figures emblématiques :

- **Thade Coren** : Magister archiviste qui voit la superstition comme un obstacle à la connaissance.
- **Thorgar Barbe-de-Fer** : Grand Maître de la Guilde des Mineurs et Haut Clerc du Temple-Forgeron, gardien des traditions ancestrales

Leur conflit incarne la lutte entre la science et la tradition, déchirant Val-d'Ombre.

### Lieux Principaux

- **Val-d'Ombre** : La cité des brumes et du métal
- **La Spirale** : Structure souterraine mystérieuse et vivante
- **La Mine d'Argent** : Poumon économique de la ville
- **Le Temple-Forgeron** : Centre spirituel nain

### Factions

- **La Guilde des Mineurs** : Gardiens des traditions naines
- **La Guilde des Mages** : Chercheurs de savoir et de pouvoir
- **Le Conseil** : Autorité politique fragile

## Fonctionnalités

### Navigation
- Interface SPA (Single Page Application) avec React Router
- Navigation intuitive entre les sections

### Sections
- **Univers** : Géographie, histoire et cosmologie
- **Factions** : Organisations et groupes politiques
- **Antagoniste** : Profil détaillé de Thade Coren et ses objectifs
- **Scénarios** : Structure de la campagne en 5 scénarios

### Design
- Interface responsive avec TailwindCSS
- Design moderne et épuré
- Icônes Lucide React pour une meilleure UX

## Stack Technique

- **Frontend** : React 19.2.0 avec Vite 7.2.4
- **Styling** : TailwindCSS 3.4.18
- **Routing** : React Router DOM 7.6.0
- **Internationalisation** : i18next 25.7.3
- **Icons** : Lucide React 0.554.0
- **Utilities** : clsx, tailwind-merge, fuse.js

## Installation

```bash
# Cloner le repository
git clone https://github.com/kithain/ombre-de-la-spirale.git

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## Déploiement

```bash
# Build pour production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## Structure du Projet

```
src/
├── components/          # Composants React
│   ├── npcs/          # Personnages non-joueurs
│   ├── scenes/        # Scènes et vues
│   └── sections/      # Sections principales
├── data/              # Données de la campagne
│   ├── personnages/    # PNJ et bestiaire
│   ├── scenarios/     # Scénarios
│   └── universe/      # Univers et lore
├── hooks/             # Hooks personnalisés
├── locales/           # Fichiers de traduction
└── utils/             # Utilitaires
```

## Utilisation

1. **Navigation** : Utilisez le menu principal pour explorer les différentes sections
2. **Recherche** : Trouvez rapidement des informations avec la fonction de recherche
3. **Liens** : Cliquez sur les liens entre les éléments pour naviguer dans l'univers
4. **Langue** : Basculez entre Français et Anglais avec le sélecteur de langue

## Scénarios

La campagne est structurée en 5 scénarios principaux :

1. **Les Profanations** : Introduction à la nécromancie à Val-d'Ombre
2. **La Mine Maudite** : Exploration des profondeurs et premières révélations
3. **Le Cœur de la Spirale** : Confrontation avec la nature de la Spirale
4. **Le Chute de Thade** : Transformation de l'antagoniste
5. **L'Éternité** : Résolution de la campagne

## Contribuer

Ce projet est un wiki de campagne personnel. Les contributions sont les bienvenues pour :

- Correction de bugs
- Traduction et localisation

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

**Kithain** - *Maître du Jeu absent*

---

<div align="center">
**
 _   _                _                  
| |_| |__   __ _   __| | ___    ___ ___  _ __ ___ _ __      
| __| '_ \ / _` | / _` |/ _ \  / __/ _ \| '__/ _ \ '_ \     
| |_| | | | (_| || (_| |  __/ | (_| (_) | | |  __/ | | |    
 \__|_| |_|\__,_| \__,_|\___|  \___\___/|_|  \___|_| |_|

**

*(c) 2025 KITHAIN*

</div>
