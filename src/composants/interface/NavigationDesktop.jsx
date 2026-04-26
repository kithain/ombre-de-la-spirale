import { memo } from "react";
import { NavLink } from "react-router-dom";
import { cc } from "../../utilitaires/combinerClasses";
import BarreRecherche from "./BarreRecherche";
import ResultatsRecherche from "./ResultatsRecherche";

/**
 * Composant NavigationDesktop - Barre de recherche et navigation desktop
 * @param {object} proprietes - Props du composant
 * @param {Array} proprietes.elementsNavigation - Éléments de navigation
 * @param {string} proprietes.terme - Terme de recherche
 * @param {Function} proprietes.definirTerme - Setter du terme
 * @param {Array} proprietes.resultats - Résultats de recherche
 * @param {Function} proprietes.effacer - Effacer la recherche
 */
const NavigationDesktop = memo(function NavigationDesktop({ elementsNavigation, terme, definirTerme, resultats, effacer }) {
  return (
    <div className="hidden lg:flex items-center gap-3">
      <div className="relative w-64">
        <BarreRecherche
          valeur={terme}
          auChangement={definirTerme}
          placeholder="Rechercher (PNJ, lieux, scénarios...)"
        />
        {terme.trim().length >= 2 && resultats.length > 0 && (
          <ResultatsRecherche
            resultats={resultats}
            auClic={effacer}
            className="max-h-72"
          />
        )}
      </div>

      <nav className="flex items-center gap-1">
        {elementsNavigation.map(({ vers, etiquette, icone }) => {
          const ComposantIcone = icone;
          return (
            <NavLink
              key={vers}
              to={vers}
              className={({ isActive }) =>
                cc(
                  "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200",
                  "text-content-secondary hover:text-accent-light",
                  "before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-px before:bg-accent before:transition-all before:duration-300",
                  "hover:before:w-full",
                  isActive &&
                    "text-accent-light before:w-full before:bg-accent shadow-glow",
                )
              }
            >
              <ComposantIcone size={16} />
              <span className="tracking-wide">{etiquette}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
});

export default NavigationDesktop;
