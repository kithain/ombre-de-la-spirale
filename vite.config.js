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
});
