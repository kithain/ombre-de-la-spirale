/**
 * Routes API — Images (upload)
 *
 * POST /api/images/upload — Uploader une image dans /public/images/monstres/
 *   Body: multipart/form-data avec champ "image"
 *   Retourne: { ok: true, chemin: "/images/monstres/nom-fichier.jpg" }
 *
 * Garde-fous :
 * - Taille max : 5 Mo (refus avec 413 au-delà)
 * - Extensions autorisées : .jpg/.jpeg/.png/.webp/.gif/.svg
 * - Slug obligatoire (fallback "image-<timestamp>" si nom vide après slugify)
 * - Anti path-traversal : on vérifie que le chemin final reste dans IMAGES_DIR
 * - Écriture atomique via fichier temporaire + rename
 */
import { Router } from "express";
import { writeFile, rename, mkdir, unlink } from "node:fs/promises";
import { join, resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const IMAGES_DIR = resolve(__dirname, "..", "..", "public", "images", "monstres");

/** Taille max d'un upload (octets). */
const TAILLE_MAX = 5 * 1024 * 1024; // 5 Mo

/** Extensions autorisées (lowercase, avec point). */
const EXTENSIONS_AUTORISEES = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);

export const routesImages = Router();

/**
 * Middleware maison pour parser le multipart/form-data sans dépendance externe.
 * Lit le body brut et extrait le fichier image.
 */
function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let tailleTotale = 0;
    let depasse = false;

    req.on("data", (chunk) => {
      tailleTotale += chunk.length;
      if (tailleTotale > TAILLE_MAX) {
        depasse = true;
        // On consomme silencieusement le reste du flux pour libérer la socket,
        // puis on rejette à la fin.
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (depasse) {
        const err = new Error(`Fichier trop volumineux (max ${Math.round(TAILLE_MAX / 1024 / 1024)} Mo).`);
        err.code = "PAYLOAD_TOO_LARGE";
        return reject(err);
      }
      const buffer = Buffer.concat(chunks);
      const contentType = req.headers["content-type"] || "";
      const boundaryMatch = contentType.match(/boundary=(.+)/);
      if (!boundaryMatch) return reject(new Error("Boundary introuvable"));

      const boundary = boundaryMatch[1];
      const boundaryBuffer = Buffer.from(`--${boundary}`);

      // Trouver les parties
      const parts = [];
      let start = buffer.indexOf(boundaryBuffer);
      while (start !== -1) {
        const end = buffer.indexOf(boundaryBuffer, start + boundaryBuffer.length);
        if (end === -1) break;
        parts.push(buffer.slice(start + boundaryBuffer.length, end));
        start = end;
      }

      for (const part of parts) {
        const headerEnd = part.indexOf("\r\n\r\n");
        if (headerEnd === -1) continue;
        const header = part.slice(0, headerEnd).toString("utf-8");
        if (!header.includes('name="image"')) continue;

        const filenameMatch = header.match(/filename="([^"]+)"/);
        const filename = filenameMatch ? filenameMatch[1] : "upload.jpg";
        const fileData = part.slice(headerEnd + 4, part.length - 2); // -2 pour \r\n final

        return resolve({ filename, data: fileData });
      }

      reject(new Error("Aucun champ 'image' trouvé dans le formulaire"));
    });
    req.on("error", reject);
  });
}

/**
 * Slugifie un nom de fichier pour le rendre URL-safe
 */
function slugify(text) {
  const slug = text
    .toLowerCase()
    .replace(/\.[^.]+$/, "") // retirer l'extension
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // retirer les accents
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
  // Fallback : si slugify produit une chaîne vide (nom 100 % non-ASCII ou
  // fait uniquement de séparateurs), on génère un nom unique horodaté.
  return slug || `image-${Date.now()}`;
}

/**
 * Vérifie qu'un chemin résolu reste à l'intérieur du répertoire autorisé.
 * Empêche les path-traversal via filename forgé (ex: "../etc/passwd").
 */
function estDansRepertoire(cheminAbsolu, repertoireAutorise) {
  const racine = resolve(repertoireAutorise) + sep;
  const cible = resolve(cheminAbsolu);
  return cible === resolve(repertoireAutorise) || cible.startsWith(racine);
}

// ─── POST /api/images/upload ─────────────────────────────────────
routesImages.post("/upload", async (req, res) => {
  let cheminTmp = null;
  try {
    // Pré-check du Content-Length pour rejeter tôt si possible
    const contentLength = Number(req.headers["content-length"] || 0);
    if (contentLength > TAILLE_MAX) {
      return res.status(413).json({
        error: `Fichier trop volumineux (max ${Math.round(TAILLE_MAX / 1024 / 1024)} Mo).`,
      });
    }

    // Créer le dossier si nécessaire
    if (!existsSync(IMAGES_DIR)) {
      await mkdir(IMAGES_DIR, { recursive: true });
    }

    let donnees;
    try {
      donnees = await parseMultipart(req);
    } catch (err) {
      if (err.code === "PAYLOAD_TOO_LARGE") {
        return res.status(413).json({ error: err.message });
      }
      return res.status(400).json({ error: err.message });
    }
    const { filename, data } = donnees;

    if (!data || data.length === 0) {
      return res.status(400).json({ error: "Fichier vide." });
    }
    if (data.length > TAILLE_MAX) {
      return res.status(413).json({
        error: `Fichier trop volumineux (max ${Math.round(TAILLE_MAX / 1024 / 1024)} Mo).`,
      });
    }

    // Validation extension (whitelist stricte)
    const ext = (extname(filename) || "").toLowerCase();
    if (!EXTENSIONS_AUTORISEES.has(ext)) {
      return res.status(400).json({
        error: `Extension "${ext || "(aucune)"}" non autorisée. Autorisées : ${[...EXTENSIONS_AUTORISEES].join(", ")}.`,
      });
    }

    const slug = slugify(filename);
    const nomFinal = `${slug}${ext}`;
    const cheminAbsolu = join(IMAGES_DIR, nomFinal);

    // Anti path-traversal : double-check après résolution
    if (!estDansRepertoire(cheminAbsolu, IMAGES_DIR)) {
      return res.status(400).json({ error: "Nom de fichier invalide (sortie du répertoire cible)." });
    }

    // Écriture atomique : tmp puis rename
    cheminTmp = `${cheminAbsolu}.tmp.${process.pid}.${Date.now()}`;
    await writeFile(cheminTmp, data);
    await rename(cheminTmp, cheminAbsolu);
    cheminTmp = null;

    const cheminRelatif = `/images/monstres/${nomFinal}`;
    console.log(`[images] Upload: ${nomFinal} (${data.length} octets)`);
    res.json({ ok: true, chemin: cheminRelatif });
  } catch (e) {
    console.error("[images] Upload erreur:", e);
    if (cheminTmp) await unlink(cheminTmp).catch(() => {});
    res.status(500).json({ error: e.message });
  }
});
