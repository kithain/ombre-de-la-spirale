/**
 * Routes API — Images (upload)
 *
 * POST /api/images/upload — Uploader une image dans /public/images/monstres/
 *   Body: multipart/form-data avec champ "image"
 *   Retourne: { ok: true, chemin: "/images/monstres/nom-fichier.jpg" }
 */
import { Router } from "express";
import { writeFile, mkdir } from "node:fs/promises";
import { join, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const IMAGES_DIR = resolve(__dirname, "..", "..", "public", "images", "monstres");

export const routesImages = Router();

/**
 * Middleware maison pour parser le multipart/form-data sans dépendance externe.
 * Lit le body brut et extrait le fichier image.
 */
function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
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
  return text
    .toLowerCase()
    .replace(/\.[^.]+$/, "") // retirer l'extension
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // retirer les accents
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// ─── POST /api/images/upload ─────────────────────────────────────
routesImages.post("/upload", async (req, res) => {
  try {
    // Créer le dossier si nécessaire
    if (!existsSync(IMAGES_DIR)) {
      await mkdir(IMAGES_DIR, { recursive: true });
    }

    const { filename, data } = await parseMultipart(req);
    const ext = extname(filename).toLowerCase() || ".jpg";
    const slug = slugify(filename);
    const nomFinal = `${slug}${ext}`;
    const cheminAbsolu = join(IMAGES_DIR, nomFinal);

    await writeFile(cheminAbsolu, data);

    const cheminRelatif = `/images/monstres/${nomFinal}`;
    console.log(`[images] Upload: ${nomFinal} (${data.length} octets)`);
    res.json({ ok: true, chemin: cheminRelatif });
  } catch (e) {
    console.error("[images] Upload erreur:", e);
    res.status(500).json({ error: e.message });
  }
});
