import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const estEditeur = mode === "editeur";

  return {
    plugins: [
      react({
        jsxImportSource: undefined,
        babel: {
          plugins: [],
        },
      }),
    ],
    base: "./",
    server: estEditeur
      ? {
          port: 5174,
          proxy: {
            "/api": {
              target: "http://localhost:3001",
              changeOrigin: true,
            },
          },
        }
      : {
          port: 5173,
        },
  };
});
