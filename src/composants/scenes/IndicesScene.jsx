import { Search } from "lucide-react";
import SectionScene from "./SectionScene";

/**
 * Composant IndicesScene - Affiche les indices d'une scène.
 * Accepte soit un tableau de chaînes, soit un tableau d'objets
 * { indice, localisation, detection, information, usage }.
 */
function IndicesScene({ indices }) {
  if (!Array.isArray(indices) || indices.length === 0) return null;

  return (
    <SectionScene titre="Indices" nomClasse="bg-surface-raised/40">
      <ul className="space-y-2 text-sm">
        {indices.map((indice, i) => {
          if (typeof indice === "string") {
            return (
              <li key={i} className="flex gap-2 text-content-muted">
                <Search className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-purple-400" />
                <span className="whitespace-pre-line">{indice}</span>
              </li>
            );
          }
          return (
            <li
              key={i}
              className="border-l-2 border-purple-500/40 pl-3 py-1 bg-surface/40"
            >
              <div className="flex items-baseline gap-2">
                <Search className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <strong className="text-content-secondary">{indice.indice}</strong>
              </div>
              <div className="mt-1 space-y-0.5 text-xs text-content-muted ml-5">
                {indice.localisation && (
                  <p>
                    <strong className="text-content-secondary">Localisation : </strong>
                    {indice.localisation}
                  </p>
                )}
                {indice.detection && (
                  <p>
                    <strong className="text-content-secondary">Détection : </strong>
                    {indice.detection}
                  </p>
                )}
                {indice.information && (
                  <p>
                    <strong className="text-content-secondary">Info : </strong>
                    {indice.information}
                  </p>
                )}
                {indice.usage && (
                  <p>
                    <strong className="text-amber-300">Usage : </strong>
                    <span className="text-content-muted">{indice.usage}</span>
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </SectionScene>
  );
}

export default IndicesScene;
