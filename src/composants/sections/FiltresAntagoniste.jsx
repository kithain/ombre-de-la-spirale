import { Users, Swords, Ghost, Search } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";

const CONFIG_CATEGORIE = {
  tous: { icone: Users, etiquette: "Tous", couleur: "bg-gray-600" },
  allies: { icone: Users, etiquette: "Alliés", couleur: "bg-blue-600" },
  ennemis: { icone: Swords, etiquette: "Ennemis", couleur: "bg-red-600" },
  monstres: { icone: Ghost, etiquette: "Monstres", couleur: "bg-purple-600" },
};

const CONFIG_FP = {
  tous: { etiquette: "Tous", couleur: "bg-gray-500" },
  inf1: { etiquette: "< 1", couleur: "bg-green-600" },
  "1-2": { etiquette: "1-2", couleur: "bg-blue-600" },
  "3-4": { etiquette: "3-4", couleur: "bg-yellow-600" },
  "5-6": { etiquette: "5-6", couleur: "bg-orange-600" },
  "7-9": { etiquette: "7-9", couleur: "bg-red-600" },
  "10+": { etiquette: "10+", couleur: "bg-purple-600" },
};

/**
 * Composant FiltresAntagoniste - Barre de filtres pour la page Antagoniste
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.requeteRecherche - Terme de recherche
 * @param {Function} proprietes.definirRequeteRecherche - Setter recherche
 * @param {string} proprietes.categorie - Catégorie active
 * @param {Function} proprietes.definirCategorie - Setter catégorie
 * @param {string} proprietes.filtreFp - Filtre FP actif
 * @param {Function} proprietes.definirFiltreFp - Setter filtre FP
 * @param {string} proprietes.fpSpecifique - FP spécifique saisi
 * @param {Function} proprietes.definirFpSpecifique - Setter FP spécifique
 */
function FiltresAntagoniste({
  requeteRecherche,
  definirRequeteRecherche,
  categorie,
  definirCategorie,
  filtreFp,
  definirFiltreFp,
  fpSpecifique,
  definirFpSpecifique,
}) {
  return (
    <div className="space-y-4 bg-surface/50 p-4 border border-surface-border">
      {/* Recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-content-subtle" />
        <input
          type="text"
          placeholder="Rechercher un PNJ..."
          value={requeteRecherche}
          onChange={(e) => definirRequeteRecherche(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-surface border border-surface-border text-content text-sm focus:border-accent-dark outline-none"
        />
      </div>

      {/* Catégories */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(CONFIG_CATEGORIE).map(([cle, config]) => {
          const Icone = config.icone;
          return (
            <button
              key={cle}
              onClick={() => definirCategorie(cle)}
              className={cc(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors",
                categorie === cle
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

      {/* Filtres FP */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(CONFIG_FP).map(([cle, config]) => (
          <button
            key={cle}
            onClick={() => {
              definirFiltreFp(cle);
              definirFpSpecifique("");
            }}
            className={cc(
              "px-3 py-1.5 text-sm font-medium transition-colors",
              filtreFp === cle && !fpSpecifique
                ? `${config.couleur} text-white`
                : "bg-surface-raised text-content-secondary hover:bg-surface",
            )}
          >
            {config.etiquette}
          </button>
        ))}
      </div>

      {/* FP Spécifique */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-content-secondary">
          FP spécifique :
        </label>
        <input
          type="text"
          placeholder="Ex: 5 ou 1/4"
          value={fpSpecifique}
          onChange={(e) => {
            definirFpSpecifique(e.target.value);
            definirFiltreFp("tous");
          }}
          className="w-32 px-3 py-1.5 bg-surface border border-surface-border text-content text-sm focus:border-accent-dark outline-none"
        />
      </div>
    </div>
  );
}

export default FiltresAntagoniste;
