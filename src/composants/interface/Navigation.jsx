import { memo } from "react";
import { NavLink } from "react-router-dom";
import { cc } from "../../utilitaires/combinerClasses";
import BarreRecherche from "./BarreRecherche";
import ResultatsRecherche from "./ResultatsRecherche";

/**
 * Navigation unifiée - Desktop et Mobile
 * @param {object} props
 * @param {Array} props.elements - Éléments de navigation {vers, etiquette, icone}
 * @param {string} props.terme - Terme de recherche
 * @param {Function} props.auChangementTerme - Setter du terme
 * @param {Array} props.resultats - Résultats de recherche
 * @param {Function} props.effacer - Effacer la recherche
 * @param {boolean} props.estMobile - Mode mobile
 * @param {Function} props.auClic - Callback au clic sur un item (mobile)
 */
const Navigation = memo(function Navigation({
  elements,
  terme,
  auChangementTerme,
  resultats,
  effacer,
  estMobile = false,
  auClic,
}) {
  const navClasses = estMobile
    ? "flex flex-col p-3 gap-1"
    : "hidden lg:flex items-center gap-3";

  const linkClasses = ({ isActive }) =>
    estMobile
      ? cc(
          "relative flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200",
          "text-content-secondary hover:text-accent-light",
          "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-6 before:border-l-2 before:border-accent before:transition-all before:duration-200",
          "hover:before:w-1 hover:bg-surface/50",
          isActive && "text-accent-light before:w-1 bg-surface/50"
        )
      : cc(
          "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200",
          "text-content-secondary hover:text-accent-light",
          "before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-px before:bg-accent before:transition-all before:duration-300",
          "hover:before:w-full",
          isActive && "text-accent-light before:w-full before:bg-accent shadow-glow"
        );

  const gererClicResultat = () => {
    effacer();
    auClic?.();
  };

  const renderLink = ({ vers, etiquette, icone: Icone }) => (
    <NavLink
      key={vers}
      to={vers}
      onClick={auClic}
      className={linkClasses}
    >
      <Icone size={estMobile ? 18 : 16} />
      <span className="tracking-wide">{etiquette}</span>
    </NavLink>
  );

  if (estMobile) {
    return (
      <div className="lg:hidden border-t border-surface-border bg-surface-raised/95 backdrop-blur-md animate-slide-down">
        <div className="px-3 py-3 border-b border-surface-border">
          <div className="relative">
            <BarreRecherche
              valeur={terme}
              auChangement={auChangementTerme}
              placeholder="Rechercher..."
            />
            {terme.trim().length >= 2 && resultats.length > 0 && (
              <ResultatsRecherche
                resultats={resultats}
                auClic={gererClicResultat}
                className="max-h-60"
                afficherDescription={false}
              />
            )}
          </div>
        </div>
        <nav className={navClasses}>{elements.map(renderLink)}</nav>
      </div>
    );
  }

  return (
    <div className={navClasses}>
      <div className="relative w-64">
        <BarreRecherche
          valeur={terme}
          auChangement={auChangementTerme}
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
      <nav className="flex items-center gap-1">{elements.map(renderLink)}</nav>
    </div>
  );
});

export default Navigation;
