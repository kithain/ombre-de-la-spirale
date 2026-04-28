/**
 * Écriture sécurisée des fichiers source.
 *
 * Trois garanties :
 * 1. **Verrouillage par chemin** — sérialise les écritures concurrentes sur un
 *    même fichier (les routes PUT/POST/DELETE peuvent arriver en parallèle).
 * 2. **Atomicité** — on écrit d'abord dans un fichier temporaire `<cible>.tmp.<pid>`
 *    puis on le renomme. Un crash en plein write ne corrompt jamais la source.
 * 3. **Roundtrip de validation** — on relit immédiatement le fichier produit et
 *    on vérifie qu'il parse correctement. En cas d'échec, on restaure la
 *    sauvegarde `.bak` et on lève l'erreur : le fichier source reste utilisable.
 */
import { writeFile, rename, copyFile, unlink, access } from "node:fs/promises";
import { lireFichierJS } from "./helpers.js";

/** @type {Map<string, Promise<void>>} File path → tail of the write queue. */
const verrous = new Map();

/**
 * Sérialise les écritures concurrentes sur un même chemin.
 * @template T
 * @param {string} chemin
 * @param {() => Promise<T>} tache
 * @returns {Promise<T>}
 */
async function avecVerrou(chemin, tache) {
  const precedent = verrous.get(chemin) || Promise.resolve();
  // La nouvelle queue : on attend la précédente puis on exécute la tâche.
  // On absorbe les rejets pour que la queue continue après une erreur.
  const courant = precedent.then(() => tache(), () => tache());
  verrous.set(chemin, courant);
  try {
    return await courant;
  } finally {
    // Nettoyage : si on est toujours la dernière entrée, on libère la clé.
    if (verrous.get(chemin) === courant) {
      verrous.delete(chemin);
    }
  }
}

/**
 * Écrit un fichier de manière atomique avec verrouillage et validation.
 *
 * @param {string} chemin - Chemin absolu du fichier cible.
 * @param {string} contenu - Code source JS à écrire.
 * @param {object} [options]
 * @param {boolean} [options.valider=true] - Relire et parser après écriture.
 * @returns {Promise<void>}
 */
export async function ecrireFichierSource(chemin, contenu, options = {}) {
  const { valider = true } = options;

  if (typeof contenu !== "string" || contenu.length === 0) {
    throw new Error(`Contenu invalide pour "${chemin}" (string non vide attendu).`);
  }

  await avecVerrou(chemin, async () => {
    const cheminTmp = `${chemin}.tmp.${process.pid}.${Date.now()}`;
    const cheminBak = `${chemin}.bak`;

    // 1. Écrire dans un fichier temporaire distinct
    await writeFile(cheminTmp, contenu, "utf-8");

    // 2. Sauvegarder l'ancienne version (si elle existe)
    let bakCree = false;
    try {
      await access(chemin);
      await copyFile(chemin, cheminBak);
      bakCree = true;
    } catch {
      // Le fichier n'existe pas encore → premier write, pas de backup.
    }

    // 3. Rename atomique (POSIX et NTFS garantissent l'atomicité du rename
    //    sur un même volume)
    try {
      await rename(cheminTmp, chemin);
    } catch (err) {
      // Tentative de nettoyage du tmp en cas d'échec
      await unlink(cheminTmp).catch(() => {});
      throw err;
    }

    // 4. Validation roundtrip : relire et parser
    if (valider) {
      try {
        await lireFichierJS(chemin);
      } catch (err) {
        // Le fichier produit est invalide → on restaure la sauvegarde
        if (bakCree) {
          await copyFile(cheminBak, chemin).catch((errRestore) => {
            console.error(`[ecritureSecurisee] ÉCHEC RESTAURATION ${chemin}:`, errRestore);
          });
        }
        throw new Error(
          `Fichier produit invalide après écriture (${chemin}) : ${err.message}. ` +
          (bakCree ? "Sauvegarde restaurée." : "Aucune sauvegarde disponible."),
        );
      }
    }

    // 5. Nettoyer la sauvegarde si tout s'est bien passé
    if (bakCree) {
      await unlink(cheminBak).catch(() => {});
    }
  });
}
