import { Dices } from "lucide-react";
import SectionScene from "./SectionScene";

/**
 * Composant DefisScene - Affiche les défis de compétence d'une scène.
 * Accepte soit un tableau de chaînes (ancien format), soit un tableau d'objets
 * { competence, dd, reussite, echec, conditions }.
 *
 * @param {Array} proprietes.defis - Tableau de défis
 */
function DefisScene({ defis }) {
  if (!Array.isArray(defis) || defis.length === 0) return null;

  return (
    <SectionScene titre="Défis de compétence" nomClasse="bg-surface-raised/40">
      <ul className="space-y-2 text-sm">
        {defis.map((defi, i) => {
          if (typeof defi === "string") {
            return (
              <li key={i} className="flex gap-2 text-content-muted">
                <Dices className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="whitespace-pre-line">{defi}</span>
              </li>
            );
          }
          return (
            <li
              key={i}
              className="border-l-2 border-blue-500/40 pl-3 py-1 bg-surface/40"
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold text-content-secondary inline-flex items-center gap-1">
                  <Dices className="w-3.5 h-3.5 text-blue-400" />
                  {defi.competence || "Compétence"}
                </span>
                {defi.dd != null && (
                  <span className="text-xs font-mono uppercase px-1.5 py-0.5 bg-blue-900/30 border border-blue-700/40 text-blue-300">
                    DD {defi.dd}
                  </span>
                )}
              </div>
              <div className="mt-1 space-y-0.5 text-xs text-content-muted">
                {defi.reussite && (
                  <p>
                    <strong className="text-green-400">Réussite : </strong>
                    <span className="text-content-muted">{defi.reussite}</span>
                  </p>
                )}
                {defi.echec && (
                  <p>
                    <strong className="text-red-400">Échec : </strong>
                    <span className="text-content-muted">{defi.echec}</span>
                  </p>
                )}
                {defi.conditions && (
                  <p>
                    <strong className="text-amber-300">Conditions : </strong>
                    <span className="text-content-muted">{defi.conditions}</span>
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

export default DefisScene;
