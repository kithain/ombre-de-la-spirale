import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine et fusionne des classes CSS avec Tailwind
 * @param {...any} entrees - Classes CSS à combiner
 * @returns {string} Classes CSS combinées et fusionnées
 */
export function combinerClasses(...entrees) {
  return twMerge(clsx(entrees));
}

// Alias court pour faciliter l'utilisation
export const cc = combinerClasses;
