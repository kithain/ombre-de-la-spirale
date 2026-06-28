import { Users, Swords, Ghost, Search, Heart } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";

const CONFIGURATION_CATEGORIE = {
  tous: { icone: Users, etiquette: "Tous", couleur: "bg-gray-600" },
  allies: { icone: Heart, etiquette: "Alliés", couleur: "bg-blue-600" },
  ennemis: { icone: Swords, etiquette: "Ennemis", couleur: "bg-red-600" },
  neutres: { icone: Users, etiquette: "Neutres", couleur: "bg-yellow-600" },
  monstres: { icone: Ghost, etiquette: "Monstres", couleur: "bg-purple-600" },
};

const CONFIGURATION_DISPOSITION = {
  tous: { etiquette: "Toutes", couleur: "bg-gray-500" },
  hostile: { etiquette: "Hostile", couleur: "bg-red-600" },
  tendu: { etiquette: "Tendu", couleur: "bg-orange-600" },
  neutre: { etiquette: "Neutre", couleur: "bg-yellow-600" },
  amical: { etiquette: "Amical", couleur: "bg-blue-600" },
  boss: { etiquette: "Boss", couleur: "bg-purple-600" },
};

/**
 * Composant FiltresAntagoniste - Barre de filtres PBTA simplifiée
 */
function FiltresAntagoniste({
  requeteRecherche,
  definirRequeteRecherche,
  categorie,
  definirCategorie,
  disposition,
  definirDisposition,
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
        {Object.entries(CONFIGURATION_CATEGORIE).map(([cle, configuration]) => {
          const Icone = configuration.icone;
          return (
            <button
              key={cle}
              onClick={() => definirCategorie(cle)}
              className={cc(
                "flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors",
                categorie === cle
                  ? `${configuration.couleur} text-white`
                  : "bg-surface-raised text-content-secondary hover:bg-surface",
              )}
            >
              <Icone size={14} />
              {configuration.etiquette}
            </button>
          );
        })}
      </div>

      {/* Dispositions */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(CONFIGURATION_DISPOSITION).map(([cle, configuration]) => (
          <button
            key={cle}
            onClick={() => definirDisposition(cle)}
            className={cc(
              "px-3 py-1.5 text-sm font-medium transition-colors",
              disposition === cle
                ? `${configuration.couleur} text-white`
                : "bg-surface-raised text-content-secondary hover:bg-surface",
            )}
          >
            {configuration.etiquette}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FiltresAntagoniste;
