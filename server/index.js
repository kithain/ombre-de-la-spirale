/**
 * Serveur Express — Mode Édition
 *
 * Expose les routes API pour modifier les fichiers source sur disque.
 * Port par défaut : 3001
 */
import express from "express";
import cors from "cors";
import { routesLieux } from "./routes/lieux.js";
import { routesPnj } from "./routes/pnj.js";
import { routesScenarios } from "./routes/scenarios.js";
import { routesImages } from "./routes/images.js";
import { routesZones } from "./routes/zones.js";

const app = express();
const PORT = Number(process.env.API_PORT) || 3001;
// Bind par défaut sur loopback : les routes mutent les fichiers source,
// le serveur ne doit PAS être exposé sur le réseau. Override possible via
// API_HOST si l'utilisateur sait ce qu'il fait.
const HOST = process.env.API_HOST || "127.0.0.1";

// CORS restreint aux origines de dev locales (Vite : 5173 viewer, 5174 éditeur).
// Le proxy Vite (vite.config.js) reroute /api → http://localhost:3001 sans
// déclencher de CORS, mais on accepte aussi les appels directs depuis les
// pages servies par Vite (ex: scripts manuels).
app.use(
  cors({
    origin: (origine, cb) => {
      if (!origine) return cb(null, true); // requêtes server-to-server / curl
      const autorise = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origine);
      cb(autorise ? null : new Error(`Origine refusée : ${origine}`), autorise);
    },
  }),
);
app.use(express.json({ limit: "2mb" }));

// Routes API
app.use("/api/lieux", routesLieux);
app.use("/api/pnj", routesPnj);
app.use("/api/scenarios", routesScenarios);
app.use("/api/images", routesImages);
app.use("/api/zones", routesZones);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", mode: "editeur" });
});

// 404 JSON par défaut (au lieu du HTML d'Express)
app.use((req, res) => {
  res.status(404).json({ error: `Route inconnue : ${req.method} ${req.path}` });
});

// Gestionnaire d'erreurs centralisé : convertit toute exception non capturée
// en réponse JSON, et journalise côté serveur.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error(`[server] erreur non gérée sur ${req.method} ${req.path} :`, err);
  if (res.headersSent) return;
  // Erreur de parse JSON Express (corps malformé)
  if (err?.type === "entity.parse.failed") {
    return res.status(400).json({ error: "JSON invalide dans le corps de la requête." });
  }
  if (err?.type === "entity.too.large") {
    return res.status(413).json({ error: "Corps de requête trop volumineux." });
  }
  res.status(500).json({ error: err?.message || "Erreur serveur." });
});

// Filets de sécurité au niveau process : on log mais on ne quitte pas, sinon
// l'éditeur perdrait toutes les sessions ouvertes.
process.on("unhandledRejection", (raison) => {
  console.error("[server] unhandledRejection :", raison);
});
process.on("uncaughtException", (err) => {
  console.error("[server] uncaughtException :", err);
});

app.listen(PORT, HOST, () => {
  console.log(`[server] Mode Édition actif — http://${HOST}:${PORT}`);
  console.log(`[server] Routes : /api/lieux, /api/pnj, /api/scenarios, /api/images, /api/zones, /api/health`);
  if (HOST !== "127.0.0.1" && HOST !== "localhost") {
    console.warn(
      `[server] ⚠ Bind sur ${HOST} — les routes d'écriture sont accessibles ` +
      `depuis le réseau. À n'utiliser que sur un environnement de confiance.`,
    );
  }
});
