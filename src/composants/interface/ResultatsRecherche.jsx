import { Link } from "react-router-dom";

/**
 * Composant ResultatsRecherche - Dropdown de résultats de recherche
 * Factorisé pour être utilisé en desktop et mobile
 * @param {object} proprietes - Props du composant
 * @param {Array} proprietes.resultats - Liste des résultats de recherche
 * @param {Function} proprietes.auClic - Callback lors du clic sur un résultat
 * @param {string} proprietes.className - Classes CSS additionnelles
 * @param {boolean} proprietes.afficherDescription - Afficher la description (desktop uniquement)
 */
function ResultatsRecherche({ resultats, auClic, className = "", afficherDescription = true }) {
  if (!resultats || resultats.length === 0) return null;

  return (
    <div className={`absolute mt-2 w-full bg-surface border border-surface-border shadow-xl z-20 overflow-auto animate-slide-down ${className}`}>
      <ul className="divide-y divide-surface-border">
        {resultats.map((element, idx) => (
          <li key={`${element.type}-${idx}`}>
            <Link
              to={element.chemin}
              onClick={auClic}
              className="flex flex-col gap-1 px-3 py-2 hover:bg-surface-raised transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-accent">
                {element.type}
              </span>
              <span className="text-sm text-content">
                {element.titre}
              </span>
              {afficherDescription && element.description && (
                <span className="text-xs text-content-muted line-clamp-2">
                  {element.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultatsRecherche;
