import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SectionPnj from "./SectionPnj";

function OccurrencesPnj({ occurrences }) {
  if (!occurrences || occurrences.length === 0) return null;

  return (
    <SectionPnj titre="Apparitions" icone={MapPin}>
      <div className="flex flex-wrap gap-2">
        {occurrences.map((occ) => (
          <Link
            key={`${occ.idScenario || occ.scenarioId}-${occ.numeroActe || occ.actNumber}-${occ.numeroScene || occ.sceneNumber}`}
            to={`/scenarios?scenario=${occ.idScenario || occ.scenarioId}&scene=${encodeURIComponent(occ.titreScene || occ.sceneTitle)}`}
            className="px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface/80 text-xs uppercase tracking-wide transition-colors"
            title={`${occ.titreScenario || occ.scenarioTitle} · ${occ.titreActe || occ.actTitle} · ${occ.titreScene || occ.sceneTitle}`}
          >
            {occ.idScenario || occ.scenarioId}.{occ.numeroActe || occ.actNumber}
            .{occ.numeroScene || occ.sceneNumber}
          </Link>
        ))}
      </div>
    </SectionPnj>
  );
}


export default OccurrencesPnj;
