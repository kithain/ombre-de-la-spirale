/**
 * Préfixe un chemin d'image avec le base path Vite.
 * Nécessaire car les chemins dans les données JS (/images/PNJ/...)
 * ne sont pas transformés par Vite lors du build.
 */
export function urlImage(chemin) {
  if (!chemin) return "";
  const base = import.meta.env.BASE_URL || "/";
  if (chemin.startsWith("http")) return chemin;
  if (chemin.startsWith("/")) return `${base.replace(/\/$/, "")}${chemin}`;
  return chemin;
}
