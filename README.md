# L'Ombre de la Spirale

Wiki interactif pour la campagne de jeu de rôle **L'Ombre de la Spirale** (D&D 3.5).

🔗 **[Voir le site](https://kithain.github.io/ombre-de-la-spirale/)**

## Fonctionnalités

- **Univers** — Zones, lieux et PNJ de Val d'Ombre avec fiches détaillées
- **Factions** — Organisations et groupes d'influence
- **Antagoniste** — Évolution et phases de la menace principale
- **Scénarios** — 5 scénarios complets avec actes et scènes détaillées
- **Recherche** — Recherche fuzzy globale (Fuse.js)
- **Navigation** — Liens croisés entre PNJ, lieux et scènes

## Stack technique

| Outil | Version |
|-------|---------|
| React | 19 |
| Vite | 7 |
| Tailwind CSS | 3.4 |
| React Router | 7 |
| Fuse.js | 6.6 |
| Lucide React | icons |

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvre [http://localhost:5173](http://localhost:5173)

## Build production

```bash
npm run build
```

Les fichiers sont générés dans `dist/`.

## Déploiement

Déploiement automatique sur GitHub Pages via GitHub Actions à chaque push sur `main`.

```bash
npm run deploy
```

## Structure

```
src/
├── components/
│   ├── sections/     # Vues principales (Universe, Factions, Antagonist, Scenarios)
│   └── ui/           # Composants réutilisables (Card, Tag, Button, SearchBar...)
├── data/             # Données de la campagne (zones, scénarios, PNJ, factions)
├── hooks/            # Hooks React (useLocalStorage, useSearch)
└── utils/            # Utilitaires (recherche, liens, constantes)
```

## Licence

Projet personnel — Contenu de campagne original.
