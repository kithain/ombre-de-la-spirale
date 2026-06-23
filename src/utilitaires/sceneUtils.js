/**
 * Retourne l'ID stable d'une scène.
 * Fallback sur le titre si aucun ID n'est défini (compatibilité ascendante).
 */
export function sceneId(scene) {
  return scene?.id || scene?.titre || "";
}

/**
 * Clé localStorage pour les notes d'une scène.
 */
export function cleNoteScene(scene) {
  return `scene-note-${sceneId(scene)}`;
}

/**
 * Clé localStorage pour les favoris d'une scène.
 */
export function cleFavoriScene(scene) {
  return `scene-fav-${sceneId(scene)}`;
}

/**
 * Migration localStorage : convertit les anciennes clés basées sur le titre
 * vers les nouvelles clés basées sur l'ID stable.
 * À appeler une fois au démarrage de l'application.
 */
export function migrerClesScenes(scenarios) {
  if (!scenarios || !Array.isArray(scenarios)) return;

  let migrations = 0;

  for (const scenario of scenarios) {
    for (const acte of scenario.actes || []) {
      for (const scene of acte.scenes || []) {
        if (!scene.id || scene.id === scene.titre) continue;

        // Migrer les notes
        const ancienneCleNote = `scene-note-${scene.titre}`;
        const nouvelleCleNote = `scene-note-${scene.id}`;
        if (localStorage.getItem(ancienneCleNote) !== null && localStorage.getItem(nouvelleCleNote) === null) {
          localStorage.setItem(nouvelleCleNote, localStorage.getItem(ancienneCleNote));
          localStorage.removeItem(ancienneCleNote);
          migrations++;
        }

        // Migrer les favoris
        const ancienneCleFav = `scene-fav-${scene.titre}`;
        const nouvelleCleFav = `scene-fav-${scene.id}`;
        if (localStorage.getItem(ancienneCleFav) !== null && localStorage.getItem(nouvelleCleFav) === null) {
          localStorage.setItem(nouvelleCleFav, localStorage.getItem(ancienneCleFav));
          localStorage.removeItem(ancienneCleFav);
          migrations++;
        }
      }
    }
  }

  if (migrations > 0 && typeof console !== "undefined") {
    console.log(`[migration] ${migrations} clé(s) localStorage scène migrée(s) titre → id`);
  }
}
