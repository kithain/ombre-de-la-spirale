import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: undefined,
      babel: {
        plugins: [],
      },
    }),
  ],
  base: "/ombre-de-la-spirale/",
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("/react-router") ||
              id.includes("/scheduler/")
            ) {
              return "vendor-react";
            }
            if (id.includes("fuse.js")) return "vendor-search";
            return "vendor";
          }
          if (id.includes("/src/data/scenarios/")) return "data-scenarios";
          if (
            id.includes("/src/data/personnages/") ||
            id.includes("/src/data/npcRegistry")
          ) {
            return "data-personnages";
          }
          if (id.includes("/src/data/universe/")) return "data-universe";
          return undefined;
        },
      },
    },
  },
});
