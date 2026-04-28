# Travail sur clé USB - Guide de configuration

## Fichiers essentiels à copier sur la clé USB

### Dossier principal (obligatoire)
- `src/` - Tout le code source et données
- `public/` - Assets statiques
- `package.json` - Dépendances du projet
- `vite.config.js` - Configuration Vite
- `tailwind.config.js` - Configuration Tailwind
- `postcss.config.js` - Configuration PostCSS
- `index.html` - Point d'entrée
- `.gitignore` - Pour éviter de copier node_modules

### Optionnels (si édition de PNJ nécessaire)
- `server/` - Serveur backend pour l'éditeur
- `scripts/` - Scripts de validation

### À ne PAS copier
- `node_modules/` - Sera réinstallé
- `dist/` - Dossier de build
- `.git/` - Métadonnées Git

## Programmes à installer sur le portable

### 1. Node.js (obligatoire)
- Version recommandée : 20.x LTS ou plus récent
- Téléchargement : https://nodejs.org/
- Vérifier l'installation : ouvrir CMD et taper `node --version`

### 2. Éditeur de code (recommandé)
- Visual Studio Code : https://code.visualstudio.com/
- Extensions utiles :
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - GitLens (si besoin)

## Lancement du projet

### Étapes sur le portable

1. **Brancher la clé USB et naviguer vers le dossier du projet**

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le projet**
   ```bash
   # Mode visualisation (lecture seule)
   npm run dev
   
   # Mode édition (avec serveur backend)
   npm run edit
   ```

4. **Arrêter le projet**
   ```bash
   npm run stop
   ```

## Adresses d'accès

- **Visualisation** : http://localhost:5173
- **Éditeur** : http://localhost:5173 (mode éditeur activé)
- **Serveur backend** : http://localhost:3001 (uniquement pour l'édition)

## Commandes utiles

```bash
# Vérifier que tout fonctionne
npm run test

# Build pour production
npm run build

# Preview du build
npm run preview

# Validation des PNJ
npm run validate:pnj
```

## Dépannage courant

### Problèmes fréquents
- **"node n'est pas reconnu"** : Redémarrer après installation de Node.js
- **"port déjà utilisé"** : Lancer `npm run stop` avant de relancer
- **"module not found"** : Supprimer `node_modules` et refaire `npm install`

### Sauvegarde du travail
- Commit Git régulièrement si connexion internet disponible
- Sinon, copier manuellement le dossier `src/` sur un autre support

## Configuration minimale requise

- **OS** : Windows 10/11, macOS 10.15+, ou Linux
- **RAM** : 4GB minimum (8GB recommandé)
- **Espace disque** : ~500MB pour le projet + dépendances
