import { memo } from "react";
import { NavLink } from "react-router-dom";
import { cc } from "../../utilitaires/combinerClasses";
import BarreRecherche from "./BarreRecherche";
import ResultatsRecherche from "./ResultatsRecherche";

/**
 * Composant NavigationMobile - Menu déroulant mobile avec recherche et navigation
 * @param {object} proprietes - Props du composant
 * @param {Array} proprietes.elementsNavigation - Éléments de navigation
 * @param {string} proprietes.terme - Terme de recherche
 * @param {Function} proprietes.definirTerme - Setter du terme
 * @param {Array} proprietes.resultats - Résultats de recherche
 * @param {Function} proprietes.effacer - Effacer la recherche
 * @param {Function} proprietes.fermerMenu - Fermer le menu mobile
 */
const NavigationMobile = memo(function NavigationMobile({ elementsNavigation, terme, definirTerme, resultats, effacer, fermerMenu }) {
  return (
    <div className="lg:hidden border-t border-surface-border bg-surface-raised/95 backdrop-blur-md animate-slide-down">
      {/* Recherche mobile */}
      <div className="px-3 py-3 border-b border-surface-border">
        <div className="relative">
          <BarreRecherche
            valeur={terme}
            auChangement={definirTerme}
            placeholder="Rechercher..."
          />
          {terme.trim().length >= 2 && resultats.length > 0 && (
            <ResultatsRecherche
              resultats={resultats}
              auClic={() => {
                effacer();
                fermerMenu();
              }}
              className="max-h-60"
              afficherDescription={false}
            />
          )}
        </div>
      </div>

      {/* Navigation mobile */}
      <nav className="flex flex-col p-3 gap-1">
        {elementsNavigation.map(({ vers, etiquette, icone }) => {
          const ComposantIcone = icone;
          return (
            <NavLink
              key={vers}
              to={vers}
              onClick={fermerMenu}
              className={({ isActive }) =>
                cc(
                  "relative flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200",
                  "text-content-secondary hover:text-accent-light",
                  "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-6 before:border-l-2 before:border-accent before:transition-all before:duration-200",
                  "hover:before:w-1 hover:bg-surface/50",
                  isActive &&
                    "text-accent-light before:w-1 bg-surface/50",
                )
              }
            >
              <ComposantIcone size={18} />
              <span className="tracking-wide">{etiquette}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
});

export default NavigationMobile;
