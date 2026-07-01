import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Clapperboard } from "lucide-react";
import { trouverOccurrencesPnj } from "../../utilitaires/liaisonsDonnees";

function ApparitionsPnj({ pnjId }) {
  const occurrences = useMemo(
    () => (pnjId ? trouverOccurrencesPnj(pnjId) : []),
    [pnjId],
  );

  if (occurrences.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-content-subtle tracking-wider opacity-80">
        <Clapperboard size={14} />
        <span>Apparaît dans {occurrences.length} scène{occurrences.length > 1 ? "s" : ""}</span>
      </div>
      <div className="space-y-1.5">
        {occurrences.map((occ, i) => (
          <Link
            key={`${occ.idScene}-${i}`}
            to={`/scenarios?scenario=${occ.idScenario}&scene=${occ.idScene}`}
            className="flex items-center gap-2 text-xs bg-surface/40 border border-surface-border px-2.5 py-1.5 hover:border-accent-muted transition-colors group"
          >
            <span className="text-content-subtle font-mono flex-shrink-0">
              {occ.numeroActe}.{occ.numeroScene}
            </span>
            <span className="text-content-secondary group-hover:text-accent-light transition-colors">
              {occ.titreScene}
            </span>
            <span className="text-content-subtle text-[10px] ml-auto flex-shrink-0">
              {occ.titreScenario}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ApparitionsPnj;
