import {
  Mountain,
  BookOpen,
  Cloud,
  Building2,
  Landmark,
  Skull,
  Pickaxe,
  Hexagon,
  MapPin,
} from "lucide-react";

/**
 * Constantes de l'application
 * Variantes de couleurs pour les étiquettes et autres valeurs constantes
 */

// === Configuration visuelle des zones ===

export const ICONES_ZONES = {
  quartier_des_mineurs: Pickaxe,
  quartier_du_savoir: BookOpen,
  hauteurs_brumeuses: Cloud,
  vieille_ville: Building2,
  centre_civique: Landmark,
  cimetiere_et_seuil: Skull,
  profondeurs_mine: Mountain,
  spirale: Hexagon,
};

export const COULEURS_ZONES = {
  quartier_des_mineurs: "from-amber-900/40 to-amber-950/60 border-amber-700/50",
  quartier_du_savoir: "from-blue-900/40 to-blue-950/60 border-blue-700/50",
  hauteurs_brumeuses: "from-slate-800/40 to-slate-900/60 border-slate-600/50",
  vieille_ville: "from-stone-800/40 to-stone-900/60 border-stone-600/50",
  centre_civique: "from-emerald-900/40 to-emerald-950/60 border-emerald-700/50",
  cimetiere_et_seuil: "from-gray-800/40 to-gray-900/60 border-gray-600/50",
  profondeurs_mine: "from-zinc-800/40 to-zinc-900/60 border-zinc-600/50",
  spirale: "from-purple-900/40 to-purple-950/60 border-purple-700/50",
};

export const ACCENTS_ZONES = {
  quartier_des_mineurs: "text-amber-400",
  quartier_du_savoir: "text-blue-400",
  hauteurs_brumeuses: "text-slate-300",
  vieille_ville: "text-stone-300",
  centre_civique: "text-emerald-400",
  cimetiere_et_seuil: "text-gray-300",
  profondeurs_mine: "text-zinc-300",
  spirale: "text-purple-400",
};

export const ICONE_ZONE_DEFAUT = MapPin;

// VARIANTES_ETIQUETTES - Couleurs accessibles WCAG AA (contraste 4.5:1+)
// Texte clair sur fond sombre avec bordures visibles
export const VARIANTES_ETIQUETTES = {
  // Combat - Rouge vif accessible
  Combat: "bg-red-500/15 text-red-300 border-red-600",
  // Social - Bleu clair accessible
  Social: "bg-blue-500/15 text-blue-300 border-blue-500",
  // Allié - Vert doux accessible
  Allié: "bg-green-500/15 text-green-300 border-green-500",
  // Exploration - Vert clair accessible
  Exploration: "bg-emerald-500/15 text-emerald-300 border-emerald-500",
  // Investigation - Vert clair accessible
  Investigation: "bg-emerald-500/15 text-emerald-300 border-emerald-500",
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

  // Types de scènes supplémentaires
  // Action - Rouge orangé vif
  Action: "bg-orange-600/15 text-orange-200 border-orange-500",
  // Rencontre - Bleu doux
  Rencontre: "bg-sky-500/15 text-sky-300 border-sky-400",
  // Objectif - Vert forêt
  Objectif: "bg-green-600/15 text-green-300 border-green-500",
  // Observation - Gris bleuté
  Observation: "bg-slate-500/15 text-slate-300 border-slate-400",
  // Logistique - Brun
  Logistique: "bg-yellow-700/15 text-yellow-300 border-yellow-600",
  // Épique - Pourpre intense
  Épique: "bg-violet-600/15 text-violet-200 border-violet-500 font-bold",
  // Piège - Rouge sombre
  Piège: "bg-red-800/15 text-red-300 border-red-700",
  // Puzzle - Indigo
  Puzzle: "bg-indigo-500/15 text-indigo-300 border-indigo-400",
  // Dilemme - Rose foncé
  Dilemme: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400",
  // Mini-Boss - Rouge sanglant
  "Mini-Boss": "bg-red-700/20 text-red-200 border-red-500 font-bold",
  // Décor - Gris neutre
  Décor: "bg-gray-600/15 text-gray-300 border-gray-500",
  // Révélation - Violet clair
  Révélation: "bg-purple-400/15 text-purple-200 border-purple-400",
  // Transition - Bleu gris
  Transition: "bg-slate-600/15 text-slate-200 border-slate-500",
  // Cinématique - Noir et or
  Cinématique: "bg-gray-900/20 text-yellow-300 border-yellow-700/50",
  // Conclusion - Or blanc
  Conclusion: "bg-amber-200/20 text-amber-100 border-amber-300/50",
  // Découverte - Vert d'eau
  Découverte: "bg-teal-500/15 text-teal-300 border-teal-400",
  // Horreur - Violet sombre
  Horreur: "bg-purple-800/15 text-purple-300 border-purple-700",
};

// Variante par défaut pour tags inconnus
export const ETIQUETTE_PAR_DEFAUT =
  "bg-stone-500/15 text-stone-300 border-stone-500";
