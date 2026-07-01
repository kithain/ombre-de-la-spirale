import { useMemo } from "react";
import { Shield, Link2 } from "lucide-react";
import { trouverFrontsLiesPnj } from "../../utilitaires/liaisonsDonnees";

function BadgeFront({ front, type }) {
  const couleurBadge = type === "direct"
    ? "border-accent/40 bg-accent/10 text-accent-light"
    : "border-surface-border bg-surface/40 text-content-secondary";

  return (
    <div className={`flex items-center gap-2 text-xs px-2.5 py-1.5 border ${couleurBadge}`}>
      <span className="font-medium">{front.nom}</span>
      <span className="text-[10px] uppercase tracking-wider opacity-60">
        {type === "direct" ? "direct" : "via scène"}
      </span>
    </div>
  );
}

function FrontsLiesPnj({ pnjId }) {
  const { frontsDirects, frontsViaScenes } = useMemo(
    () => (pnjId ? trouverFrontsLiesPnj(pnjId) : { frontsDirects: [], frontsViaScenes: [] }),
    [pnjId],
  );

  if (frontsDirects.length === 0 && frontsViaScenes.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-content-subtle tracking-wider opacity-80">
        <Shield size={14} />
        <span>Fronts liés</span>
      </div>
      <div className="space-y-1.5">
        {frontsDirects.map((front) => (
          <BadgeFront key={`d-${front.id}`} front={front} type="direct" />
        ))}
        {frontsViaScenes.map((front) => (
          <div key={`i-${front.id}`} className="space-y-0.5">
            <BadgeFront front={front} type="indirect" />
            {front.scenes.length > 0 && (
              <div className="flex items-center gap-1 text-[10px] text-content-subtle pl-2.5">
                <Link2 size={10} className="opacity-50" />
                <span>{front.scenes.join(", ")}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrontsLiesPnj;
