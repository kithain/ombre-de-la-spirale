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

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Routes API
app.use("/api/lieux", routesLieux);
app.use("/api/pnj", routesPnj);
app.use("/api/scenarios", routesScenarios);
app.use("/api/images", routesImages);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", mode: "editeur" });
});

app.listen(PORT, () => {
  console.log(`[server] Mode Édition actif — http://localhost:${PORT}`);
  console.log(`[server] Routes : /api/lieux, /api/pnj, /api/images, /api/health`);
});
