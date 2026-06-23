# L'Ombre de la Spirale — Tableau de bord MJ

Application web interactive pour le Maître du Jeu de la campagne **L'Ombre de la Spirale** (Donjons & Dragons 3.5). Elle centralise tous les éléments de campagne : univers, factions, antagonistes, scénarios, fronts, horloges et outils de session.

**Site en ligne :** [kithain.github.io/ombre-de-la-spirale](https://kithain.github.io/ombre-de-la-spirale/)

---

## Fonctionnalités

### Univers
- Carte interactive des zones de Valombre
- Fiches détaillées des lieux (description, PNJ résidents, liens vers les scénarios)
- Index des PNJ avec registre centralisé (`npcRegistry`)

### Factions & Antagoniste
- Vue des factions avec relations et statuts
- Fiches PNJ complètes (stats, motivation, relations, image)
- Filtres par catégorie (principaux, ennemis, créatures)

### Scénarios & Fronts
- Trois scénarios structurés en actes et scènes
- Fronts de campagne avec horloges d'avancée interactives (cliquer pour cocher des segments)
- Effets de fronts structurés par scène (`effetsFronts`)
- Conséquences centralisées (remplissage, annulation, étapes, événements mondiaux)
- IDs stables pour les scènes avec migration localStorage automatique

### Session maintenant
- Vue tout-en-un pour le MJ en jeu
- Sélection scène active, PNJ présents, lieu lié
- Fronts et horloges modifiables en direct
- Effets et conséquences prêts à annoncer
- Notes rapides persistées

### Outils transverses
- Recherche globale (Fuse.js) sur tous les contenus
- Notes et favoris par scène (persistés en localStorage)
- Liens profonds `?scenario=ID&scene=ID` depuis les lieux vers les scènes
- Export/import des notes MJ (JSON)
- Validation automatique des données (`npm run check:data`)

---

## Stack technique

- **React 19** + **React Router 7**
- **Vite 7** (build & dev server)
- **TailwindCSS 3** (styling)
- **Lucide React** (icônes)
- **Fuse.js** (recherche floue)
- **ESLint 9** (linting)
- **gh-pages** (déploiement)

---

## Structure du projet

```
src/
├── composants/
│   ├── interface/          # Modale, Navigation, Recherche
│   ├── lieux/              # ModaleDetailsLieu
│   ├── pnj/                # FichePnj, CartePnjMinimale
│   ├── scenes/             # Composants par scène (HorlogeMenace, EffetsFronts, etc.)
│   ├── sections/
│   │   ├── univers/        # VueUnivers, CarteZone, DetailsLieux
│   │   ├── scenarios/      # VueScenarios, CarteFront, CarteScene, AccordeonActe
│   │   ├── session/        # VueSession (MVP "Session maintenant")
│   │   └── quetes/         # VueScenariosAnnexes
│   └── sections/           # VueFactions, VueAntagoniste
├── contextes/              # ContexteModalePnj, ContexteModaleLieu
├── data/
│   ├── personnages/        # pnj.js, factions.js
│   ├── scenarios/          # 3 scénarios, fronts.js, effetsFronts.js
│   ├── universe/           # Zones (8 fichiers), universeMeta
│   └── npcRegistry.js      # Registre centralisé des PNJ
├── hooks/                  # utiliserRecherche, utiliserLiensScene, utiliserEtatPersistant
├── utilitaires/            # sceneUtils, consequences, liaisonsDonnees, indexScenario
└── Disposition.jsx         # Layout principal + navigation
```

---

## Scripts npm

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualiser le build localement |
| `npm run lint` | Linter le projet avec ESLint |
| `npm run check:data` | Valider la cohérence des données (PNJ, lieux, fronts, images) |
| `npm run deploy` | Build + déploiement sur GitHub Pages |

---

## Validation des données

Le script `scripts/check_orphelins.js` vérifie :
- Les IDs PNJ (`idsPnj`) dans les zones universe et les scénarios contre le registre `pnj.js`
- L'existence des images PNJ dans `public/images/PNJ/`
- Les IDs de lieux (`idLieu`) référencés dans les scénarios
- Les IDs de fronts (`id_front`) référencés dans les scénarios

Le script échoue (`exit 1`) si des références orphelines sont trouvées.

---

## Déploiement

Le site est déployé automatiquement sur GitHub Pages via `npm run deploy` :
1. Build de production (`vite build`)
2. Publication du dossier `dist/` sur la branche `gh-pages`

**URL :** [https://kithain.github.io/ombre-de-la-spirale/](https://kithain.github.io/ombre-de-la-spirale/)

---

## Auteur

**Kithain** — [GitHub](https://github.com/kithain)

## Licence

MIT
