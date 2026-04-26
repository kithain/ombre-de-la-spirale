import { Search } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";
/**
 * Composant BarreRecherche - Champ de recherche stylisé
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.valeur - Valeur actuelle de la recherche
 * @param {Function} proprietes.auChangement - Callback lors du changement
 * @param {string} proprietes.placeholder - Texte de placeholder
 * @param {string} proprietes.nomClasse - Classes CSS additionnelles
 */
function BarreRecherche({ valeur, auChangement, placeholder = "Rechercher...", nomClasse = "" }) {

  return (
    <div
      className={cc(
        "relative flex items-center gap-3 px-4 py-2.5 transition-all duration-200",
        "bg-gradient-to-b from-surface to-surface-raised",
        "border border-surface-border",
        "focus-within:border-accent-dark/70 focus-within:shadow-glow",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent before:pointer-events-none",
        nomClasse,
      )}
    >
      <Search
        size={16}
        className="text-content-subtle flex-shrink-0"
        aria-hidden="true"
      />
      <input
        type="search"
        value={valeur}
        onChange={(e) => auChangement(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full text-sm text-content placeholder:text-content-subtle/70 tracking-wide"
        aria-label={placeholder}
      />
      {/* Coins décoratifs */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent-dark/30" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-accent-dark/30" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-accent-dark/30" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent-dark/30" />
    </div>
  );
}


export default BarreRecherche;
