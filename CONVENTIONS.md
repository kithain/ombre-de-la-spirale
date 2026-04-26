# Conventions du projet

## Nommage

- **Composants, hooks, fonctions, props** : français (`utiliserPnj`, `definirCategorie`, `estOuvert`)
- **Données JSON brutes (univers, scénarios, factions)** : anglais — ex: `scene.title`, `zone.name`, `faction.color`
- **Données PNJ** : 100 % français, snake_case sans accents, terminologie D&D 3.5 FR
  - Fonction canonique : `creerPnj()` dans `pnjTemplate.js`
  - Clés principales : `nom`, `classe`, `niveau`, `taille`, `alignement`, `fp`, `ini`, `sens`, `ca` (`total`/`contact`/`pris_au_depourvu`), `pv`, `dv`, `js` (`vig`/`ref`/`vol`), `vit`, `bba`, `lutte`, `attaque`, `att_outrance`, `att_spe`, `qual_spe`, `carac` (`for`/`dex`/`con`/`int`/`sag`/`cha`), `competences`, `dons`, `tactiques`, `butin`, `est_ennemi`
  - Bloc MJ : `meta_mj` (`reference_livre`, `contexte_scenario`)
  - Bloc combat : `fiche_combat` (`sorts`, `actions_spe`, `dons_tactiques`, `resume_tactique`)
  - Buffs : `bonus_actifs` (`nom`, `effet`, `duree`)
  - **Interdit** : clés anglaises (`name`, `hp`, `ac.touch`, `saves`, `abilities`, `isEnemy`…), termes Pathfinder (`BMO`, `DMD`, `CMB`, `CMD`)

## Imports

- **Pas de `import React from "react"`** sauf si `React.` est utilisé directement (ex: `React.StrictMode`, `React.Component`)
- Utiliser les imports nommés : `import { useState, useMemo } from "react"`

## Validation des props

- **Pas de `prop-types`** (déprécié en React 19)
- Utiliser **JSDoc** `@param` pour documenter les props de chaque composant

## Modales PNJ

- Le contexte `ContexteModalePnj` (dans `src/contextes/`) fournit `ouvrirFichePnj(idPnj)` et `fermerFichePnj()`
- Enveloppé autour de `<Outlet />` dans `Disposition.jsx` — disponible sur toutes les pages
- Ne **jamais** naviguer vers `/antagoniste?pnj=...` pour afficher une fiche PNJ depuis une autre page ; utiliser le contexte

## Hooks de données

- `utiliserLiensScene(scene)` — résout lieu + PNJ liés d'une scène
- `utiliserPnjLieu(lieu)` — résout résidents + visiteurs d'un lieu
- `utiliserPnj()` — accès au registre PNJ complet (filtres, compteurs, catégories)
- `utiliserRecherche()` — recherche globale Fuse.js
- `utiliserEtatPersistant(cle, valeurInitiale)` — état persisté dans localStorage

## Clés de liste React

- Utiliser un **identifiant stable** (`id`, `title`, `name`) comme `key`
- Éviter `key={index}` sauf pour les listes statiques de chaînes (ex: `details`, `defis`)

## Icônes

- Utiliser exclusivement **Lucide React** (`lucide-react`)
- Pas de SVG inline custom

## Structure des fichiers

```
src/
├── composants/
│   ├── interface/     # Composants UI réutilisables (Modale, Carte, Etiquette, etc.)
│   ├── pnj/           # Composants liés aux PNJ (CartePnjMinimale, ModaleDetailsPnj, sections/)
│   ├── scenes/        # Composants de rendu de scènes (Description, Narration, etc.)
│   └── sections/      # Pages et sections principales
│       ├── quetes/    # Page Scénarios Annexes
│       ├── scenarios/ # Page Scénarios
│       └── univers/   # Page Univers
├── contextes/         # React Contexts (ContexteModalePnj)
├── data/              # Données JSON et registre PNJ
├── hooks/             # Hooks personnalisés
└── utilitaires/       # Fonctions utilitaires pures
```
