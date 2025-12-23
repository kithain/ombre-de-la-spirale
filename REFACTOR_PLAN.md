# Plan de Refactorisation - L'Ombre de la Spirale

## 🎯 Objectifs
- Réduire la complexité des composants
- Améliorer la maintenabilité
- Simplifier l'architecture
- Optimiser les performances

## 📋 Étapes de Migration

### Phase 1: Préparation (Jour 1)
1. **Backup du code existant**
   ```bash
   git checkout -b refactor-simplification
   git add .
   git commit -m "Backup avant refactorisation"
   ```

2. **Créer la nouvelle structure**
   ```
   src/features/
   ├── universe/
   ├── npcs/
   ├── scenarios/
   └── search/
   ```

3. **Installer les dépendances manquantes**
   ```bash
   npm install  # Vérifier que tout est à jour
   ```

### Phase 2: Data Layer (Jour 2)
1. **Créer le point d'entrée unifié**
   - `src/data/index.js` ✅ (déjà fait)
   - Centraliser tous les exports

2. **Simplifier les services**
   - Refactoriser `NpcService.js`
   - Supprimer le worker web inutile
   - Unifier les index de recherche

### Phase 3: Refactorisation des Composants (Jour 3-4)
1. **AntagonistView** (Priorité haute)
   - Remplacer le fichier de 742 lignes ✅ (déjà fait)
   - Extraire `NpcCard` ✅ (déjà fait)
   - Utiliser le hook `useNpcs` ✅ (déjà fait)

2. **UniverseView**
   - Extraire `LocationCard`
   - Simplifier la gestion des zones

3. **ScenariosView**
   - Découper en sous-composants
   - Optimiser le rendu des scènes

### Phase 4: Hooks et Utils (Jour 4)
1. **Créer les hooks spécialisés**
   - `useNpcs` ✅ (déjà fait)
   - `useSearch` ✅ (déjà fait)
   - `useUniverse`
   - `useScenarios`

2. **Simplifier les utilitaires**
   - Fusionner `dataLinks` et `searchUtils`
   - Nettoyer les fonctions dupliquées

### Phase 5: Nettoyage (Jour 5)
1. **Supprimer les fichiers obsolètes**
   - `src/services/NpcService.js` (après migration)
   - `src/workers/search.worker.js`
   - Composants monolithiques remplacés

2. **Mettre à jour les imports**
   - Modifier tous les imports vers la nouvelle structure
   - Tester chaque route

3. **Optimisation finale**
   - Supprimer les dépendances inutilisées
   - Optimiser les imports dynamiques
   - Nettoyer le CSS

## 🔄 Fichiers à Supprimer
```
src/services/NpcService.js          # Remplacé par hooks
src/workers/search.worker.js        # Worker inutile
src/components/sections/AntagonistView.jsx  # Refactorisé
src/utils/searchUtils.js            # Simplifié dans useSearch
```

## 📊 Bénéfices Attendus
- **-60%** de lignes de code dans AntagonistView (742 → ~300)
- **-40%** de complexité cyclomatique
- **+30%** de performance (suppression worker)
- **Maintenabilité** accrue avec séparation des responsabilités

## ⚠️ Risques et Mitigations
1. **Rupture de fonctionnalités**
   - Tester chaque route après modification
   - Garder l'ancien code en branche de secours

2. **Régressions visuelles**
   - Comparer les rendus avant/après
   - Tests manuels sur tous les navigateurs

3. **Perte de données**
   - Ne modifier que le code, pas les fichiers JSON
   - Backup des fichiers de données

## ✅ Validation
Pour chaque étape :
- [ ] L'application se lance sans erreur
- [ ] Toutes les routes fonctionnent
- [ ] La recherche fonctionne
- [ ] Les liens profonds fonctionnent
- [ ] Pas de régression visuelle

## 🚀 Déploiement
Une fois la validation terminée :
```bash
npm run build
npm run deploy
```

---
*Refactorisation progressive pour plus de stabilité*
