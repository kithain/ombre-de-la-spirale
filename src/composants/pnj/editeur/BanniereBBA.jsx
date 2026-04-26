import { memo } from "react";
import { Calculator } from "lucide-react";
import { formaterModificateur } from "../../../utilitaires/calculsDnD35";

/**
 * BanniereBBA — Bandeau récapitulatif BBA / attaques / dons attendus
 * @param {{ stats: object|null, statsCreature: object|null, estCreature: boolean }} props
 */
const BanniereBBA = memo(function BanniereBBA({ stats, statsCreature, estCreature }) {
  const bbaFormatte = estCreature ? statsCreature?.bbaFormatte : stats?.bbaFormatte;
  if (!bbaFormatte) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-4 p-3 bg-purple-900/10 border border-purple-800/20">
      <span className="text-xs text-purple-300">
        <Calculator size={12} className="inline mr-1" />
        BBA : <strong>{bbaFormatte}</strong>
      </span>
      {estCreature ? (
        <>
          <span className="text-xs text-purple-300">CAC : <strong>{formaterModificateur(statsCreature?.attaqueCAC ?? 0)}</strong></span>
          <span className="text-xs text-purple-300">Dist : <strong>{formaterModificateur(statsCreature?.attaqueDist ?? 0)}</strong></span>
          {statsCreature?.donsAttendus != null && (
            <span className="text-xs text-teal-300">Dons attendus : <strong>{statsCreature.donsAttendus}</strong></span>
          )}
          {statsCreature?.pointsCompetences > 0 && (
            <span className="text-xs text-teal-300">Pts compétence : <strong>{statsCreature.pointsCompetences}</strong></span>
          )}
        </>
      ) : (
        <>
          <span className="text-xs text-purple-300">CAC : <strong>{stats?.attaqueCAC}</strong></span>
          <span className="text-xs text-purple-300">Dist : <strong>{stats?.attaqueDist}</strong></span>
        </>
      )}
    </div>
  );
});

export default BanniereBBA;
