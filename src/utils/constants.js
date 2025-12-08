// TAG_VARIANTS - Couleurs accessibles WCAG AA (contraste 4.5:1+)
// Texte clair sur fond sombre avec bordures visibles
export const TAG_VARIANTS = {
  // Combat - Rouge vif accessible
  Combat: "bg-red-500/15 text-red-300 border-red-600",
  // Social - Bleu clair accessible
  Social: "bg-blue-500/15 text-blue-300 border-blue-500",
  // Exploration - Vert clair accessible
  Exploration: "bg-emerald-500/15 text-emerald-300 border-emerald-500",
  // Ambiance - Neutre accessible
  Ambiance: "bg-stone-500/15 text-stone-300 border-stone-500",
  // Indice - Ambre/doré accessible
  Indice: "bg-amber-500/15 text-amber-300 border-amber-500",
  // Boss - Rouge intense avec animation
  Boss: "bg-red-600/25 text-red-200 border-red-500 font-bold animate-pulse-slow",
  // Tension - Orange accessible
  Tension: "bg-orange-500/15 text-orange-300 border-orange-500",
  // Magie - Violet accessible
  Magie: "bg-purple-500/15 text-purple-300 border-purple-400",
  // Twist - Rose accessible
  Twist: "bg-pink-500/15 text-pink-300 border-pink-400",
  // Préparation - Cyan accessible
  Préparation: "bg-cyan-500/15 text-cyan-300 border-cyan-400",
};

// Variantes par défaut pour tags inconnus
export const TAG_DEFAULT = "bg-stone-500/15 text-stone-300 border-stone-500";
