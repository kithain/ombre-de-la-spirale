import { Users, Swords, Filter, Star, Search } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";

const CONFIG_TYPE = {
  tous: { icone: Users, etiquette: "Tous", couleur: "bg-gray-600" },
  allié: { icone: Users, etiquette: "Alliés", couleur: "bg-blue-600" },
  ennemi: { icone: Swords, etiquette: "Ennemis", couleur: "bg-red-600" },
};

/**
 * Composant FiltresQuetes - Barre de filtres pour les quêtes annexes
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.filtreType - Type de filtre actif
 * @param {Function} proprietes.definirFiltreType - Setter du filtre type
 * @param {string} proprietes.filtreScenario - Scénario filtre actif
 * @param {Function} proprietes.definirFiltreScenario - Setter du filtre scénario
 * @param {string} proprietes.requeteRecherche - Texte de recherche
 * @param {Function} proprietes.definirRequeteRecherche - Setter de la recherche
 * @param {number[]} proprietes.scenariosDisponibles - Numéros de scénarios disponibles
 */
function FiltresQuetes({
  filtreType,
  definirFiltreType,
  filtreScenario,
  definirFiltreScenario,
  requeteRecherche,
  definirRequeteRecherche,
  scenariosDisponibles,
}) {
  return (
    <div className="space-y-4 bg-surface/50 p-4 border border-surface-border">
      {/* Recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-content-subtle" />
        <input
          type="text"
          placeholder="Rechercher un PNJ ou une quête..."
          value={requeteRecherche}
          onChange={(e) => definirRequeteRecherche(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-surface border border-surface-border text-content text-sm focus:border-accent-dark outline-none"
        />
      </div>

      {/* Type de PNJ */}
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1.5 text-xs text-content-muted uppercase tracking-wider mr-2">
          <Filter size={12} />
          Type
        </span>
        {Object.entries(CONFIG_TYPE).map(([cle, config]) => {
          const Icone = config.icone;
          return (
            <button
              key={cle}
              onClick={() => definirFiltreType(cle)}
              className={cc(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors",
                filtreType === cle
                  ? `${config.couleur} text-white`
                  : "bg-surface-raised text-content-secondary hover:bg-surface",
              )}
            >
              <Icone size={14} />
              {config.etiquette}
            </button>
          );
        })}
      </div>

      {/* Scénario */}
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1.5 text-xs text-content-muted uppercase tracking-wider mr-2">
          <Star size={12} />
          Scénario
        </span>
        <button
          onClick={() => definirFiltreScenario("tous")}
          className={cc(
            "px-3 py-1.5 text-sm font-medium transition-colors",
            filtreScenario === "tous"
              ? "bg-gray-600 text-white"
              : "bg-surface-raised text-content-secondary hover:bg-surface",
          )}
        >
          Tous
        </button>
        {scenariosDisponibles.map((num) => (
          <button
            key={num}
            onClick={() => definirFiltreScenario(String(num))}
            className={cc(
              "px-3 py-1.5 text-sm font-medium transition-colors",
              filtreScenario === String(num)
                ? "bg-accent-dark text-white"
                : "bg-surface-raised text-content-secondary hover:bg-surface",
            )}
          >
            Scénario {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FiltresQuetes;
