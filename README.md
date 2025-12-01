# Ombre de la Spirale

## Description
Ombre de la Spirale est un bloc-notes interactif pour ma campagne de JDR.
L’objectif est d’avoir toutes les informations cruciales et toutes les notes rapide­ment accessibles au même endroit.

## Fonctionnalités
*   **Gestion de mes notes de campagne** : Organisation et structuration des informations liées à la campagne : personnages, lieux, événements, objets, etc.
*   **Accès rapide** : Interface pensée pour permettre de retrouver en quelques clics les informations dont j’ai besoin en cours de partie.
*   **Personnalisable** : Possibilité d’adapter l’organisation, les catégories et le contenu à la spécificité de chaque campagne.

## Technologies Utilisées
Ce projet a été développé en utilisant les technologies suivantes :
*   **React**: Pour construire mon interface utilisateur.
*   **Vite**: Un outil de build rapide qui m'offre une expérience de développement très fluide.
*   **Tailwind CSS**: Un framework CSS utilitaire qui me permet de styliser l'application rapidement.
*   **JavaScript/ES6+**
*   **Autres bibliothèques/frameworks pertinents**: (par exemple, `eslint`, `postcss` pour le linting et le traitement CSS)

## Configuration et Installation

Pour lancer ce projet sur votre machine locale (si vous souhaitez le reproduire ou y contribuer) :

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/votre-nom-utilisateur/ombre-de-la-spirale.git
    cd ombre-de-la-spirale
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```
    _ou si vous utilisez yarn :_
    ```bash
    yarn install
    ```

## Comment Lancer le Projet

1.  **Démarrez le serveur de développement :**
    ```bash
    npm run dev
    ```
    _ou_
    ```bash
    yarn dev
    ```
    Cela ouvrira généralement l'application dans votre navigateur à l'adresse `http://localhost:5173` (ou un autre port).

2.  **Build pour la production :**
    Si vous souhaitez compiler l'application pour un déploiement :
    ```bash
    npm run build
    ```
    _ou_
    ```bash
    yarn build
    ```
    Cette commande créera les fichiers statiques prêts à être déployés.

## Structure du Projet
```
.
├── public/                # Mes assets statiques
├── src/                   # Mon code source
│   ├── assets/            # Images, icônes, etc.
│   ├── components/        # Mes composants React réutilisables (si applicable)
│   ├── App.jsx            # Mon composant principal de l'application
│   ├── index.css          # Mes styles CSS globaux
│   ├── main.jsx           # Le point d'entrée de mon application React
│   └── ...
├── .gitignore             # Les fichiers que j'ignore en versioning
├── index.html             # Mon fichier HTML principal
├── package.json           # Métadonnées et dépendances de mon projet
├── postcss.config.js      # Ma configuration PostCSS
├── tailwind.config.js     # Ma configuration Tailwind CSS
├── vite.config.js         # Ma configuration Vite
└── README.md              # Ce fichier
```