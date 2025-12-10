/* eslint-env node */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale - fond sombre prune/indigo (chaleureux sans marron)
        surface: {
          DEFAULT: "#fdf7ed",   // Prune très sombre
          raised: "#fdf7ed",    // Indigo profond
          overlay: "#fdf7ed",   // Violet/indigo moyen
          border: "#fdf7ed",    // Bordure prune-fumé
        },
        // Texte avec contrastes WCAG AA/AAA - tons ivoire chauds
        content: {
          DEFAULT: "#fdf7ed",   // Ivoire chaud (21:1)
          secondary: "#f4e3d3", // Ivoire rosé (12:1)
          muted: "#d8c3b5",     // Beige rosé (7:1)
          subtle: "#b08c7a",    // Taupe rosé (4.6:1 AA sur fond #0e0a14)
        },
        // Accent doré/corail - thème fantasy chaleureux
        accent: {
          DEFAULT: "#f6b73c", // Doré chaud
          light: "#ffd277",   // Miel lumineux
          dark: "#d8921a",    // Ambre soutenu
          muted: "#8a5b1f",   // Bordures dorées
          surface: "rgba(246, 183, 60, 0.14)", // Fond doré léger
        },
        // Tags sémantiques - couleurs accessibles (contraste 4.5:1+)
        tag: {
          combat: { bg: "rgba(239, 68, 68, 0.15)", text: "#fca5a5", border: "#dc2626" },
          social: { bg: "rgba(59, 130, 246, 0.15)", text: "#93c5fd", border: "#2563eb" },
          exploration: { bg: "rgba(34, 197, 94, 0.15)", text: "#86efac", border: "#16a34a" },
          ambiance: { bg: "rgba(168, 162, 158, 0.15)", text: "#d6d3d1", border: "#78716c" },
          indice: { bg: "rgba(245, 158, 11, 0.15)", text: "#fcd34d", border: "#d97706" },
          boss: { bg: "rgba(185, 28, 28, 0.25)", text: "#fca5a5", border: "#ef4444" },
          tension: { bg: "rgba(249, 115, 22, 0.15)", text: "#fdba74", border: "#ea580c" },
          magie: { bg: "rgba(168, 85, 247, 0.15)", text: "#d8b4fe", border: "#9333ea" },
          twist: { bg: "rgba(236, 72, 153, 0.15)", text: "#f9a8d4", border: "#db2777" },
          preparation: { bg: "rgba(34, 211, 238, 0.15)", text: "#a5f3fc", border: "#06b6d4" },
        },
      },
      fontFamily: {
        serif: ["Crimson Text", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(245, 158, 11, 0.15)",
        "glow-strong": "0 0 30px rgba(245, 158, 11, 0.25)",
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
