import { MapPin, User } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";
import { utiliserModalePnj } from "../../contextes/ContexteModalePnj";
import { utiliserModaleLieu } from "../../contextes/ContexteModaleLieu";

/**
 * Obtient les classes CSS de couleur pour un PNJ selon sa source
 */
const obtenirClassesCouleurPnj = (source, pnj) => {
  // Si c'est un monstre du bestiaire avec estEnnemi: true, utiliser le rouge
  if (source === "bestiary" && pnj && pnj.est_ennemi) {
    return "border-red-500/60 text-red-400 bg-red-500/10 hover:border-red-400 hover:text-red-300";
  }

  switch (source) {
    case "principaux":
      return "border-blue-500/60 text-blue-400 bg-blue-500/10 hover:border-blue-400 hover:text-blue-300";
    case "ennemis":
      return "border-red-500/60 text-red-400 bg-red-500/10 hover:border-red-400 hover:text-red-300";
    case "bestiary":
      return "border-purple-500/60 text-purple-400 bg-purple-500/10 hover:border-purple-400 hover:text-purple-300";
    default:
      return "border-surface-border text-content-muted bg-surface-raised/30";
  }
};

/**
 * Composant LiensScene - Affiche les liens vers lieux et PNJ d'une scène
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.lieuLie - Lieu lié à la scène
 * @param {Array} proprietes.pnjLies - PNJ liés à la scène
 */
function LiensScene({ lieuLie, pnjLies = [] }) {
  const { ouvrirFichePnj } = utiliserModalePnj();
  const { ouvrirFicheLieu } = utiliserModaleLieu();

  if (!lieuLie && (!pnjLies || pnjLies.length === 0)) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      {lieuLie && (
        <button
          type="button"
          onClick={() => ouvrirFicheLieu(lieuLie.lieu.id)}
          className="inline-flex items-center gap-1 px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface transition-colors cursor-pointer"
        >
          <MapPin className="w-4 h-4" />
          {lieuLie.lieu.name}
        </button>
      )}
      {pnjLies.map((pnj, idx) =>
        pnj.id ? (
          <button
            key={`${pnj.id}-${idx}`}
            type="button"
            title={pnj.id}
            onClick={() => ouvrirFichePnj(pnj.id)}
            className={cc(
              "inline-flex items-center gap-1 px-2 py-1 border transition-colors cursor-pointer",
              obtenirClassesCouleurPnj(pnj.source, pnj),
            )}
          >
            <User className="w-4 h-4" />
            {pnj.nom}
          </button>
        ) : (
          <span
            key={`${pnj.nom}-${idx}`}
            className={cc(
              "inline-flex items-center gap-1 px-2 py-1 border",
              obtenirClassesCouleurPnj(pnj.source, pnj),
            )}
          >
            <User className="w-4 h-4" />
            {pnj.nom}
          </span>
        ),
      )}
    </div>
  );
}

export default LiensScene;
