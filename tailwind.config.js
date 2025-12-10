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
        // Palette principale - Forge(acier/charbon)
        surface: {
          DEFAULT: "#101215",   // Fond principal
          raised: "#161a20",    // Surfaces élevées
          overlay: "#1c222a",   // Overlays/modals
          border: "#2c323d",    // Bordures
        },
        // Texte avec contrastes WCAG AA/AAA
        content: {
          DEFAULT: "#d1cdc5",    // Texte principal, légèrement adouci
          secondary: "#b3ada4",  // Texte secondaire
          muted: "#959088",      // Texte discret
          subtle: "#7a756e",      // Texte très discret, pour les placeholders etc.
        },
        // Accent - Braises / cuivre
        accent: {
          DEFAULT: "#d3542a",
          light: "#f27f4c",
          dark: "#9c2f16",
          muted: "#6b2618",
          surface: "rgba(211, 84, 42, 0.16)",
        },
        // Tags sémantiques - palette forge (contraste 4.5:1+)
        tag: {
          combat: { bg: "rgba(211, 84, 42, 0.18)", text: "#f5bda5", border: "#c2412d" },       // braise
          social: { bg: "rgba(37, 99, 235, 0.16)", text: "#b8caff", border: "#1d4ed8" },        // bleu acier
          exploration: { bg: "rgba(22, 163, 74, 0.16)", text: "#b8f2c2", border: "#15803d" },   // vert mousse
          ambiance: { bg: "rgba(120, 113, 108, 0.18)", text: "#e3dedb", border: "#57534e" },     // brume/acier
          indice: { bg: "rgba(234, 179, 8, 0.18)", text: "#fbe7a2", border: "#b45309" },         // laiton/doré
          boss: { bg: "rgba(185, 28, 28, 0.22)", text: "#f5b5b5", border: "#991b1b" },           // rouge sombre
          tension: { bg: "rgba(249, 115, 22, 0.18)", text: "#ffd3a8", border: "#c2410c" },       // cuivre vif
          magie: { bg: "rgba(147, 51, 234, 0.16)", text: "#e6c9ff", border: "#7e22ce" },         // pourpre arcanique
          twist: { bg: "rgba(236, 72, 153, 0.16)", text: "#f6c1de", border: "#be185d" },         // rose intrigant
          preparation: { bg: "rgba(6, 182, 212, 0.16)", text: "#bff2f8", border: "#0e7490" },    // azur tempéré
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.9rem", { lineHeight: "1.5" }],  // ~14.4px
        sm: ["0.98rem", { lineHeight: "1.55" }], // ~15.7px
        base: ["1rem", { lineHeight: "1.6" }],   // 16px (multiplied by html 17px base)
      },
      boxShadow: {
        glow: "0 0 20px rgba(211, 84, 42, 0.18)",
        "glow-strong": "0 0 30px rgba(211, 84, 42, 0.26)",
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
