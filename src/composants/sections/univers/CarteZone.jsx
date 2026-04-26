import { memo, useMemo } from "react";
import { MapPin, Users } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";
import {
  ICONES_ZONES,
  COULEURS_ZONES,
  ACCENTS_ZONES,
} from "../../../utilitaires/constantes";
import { obtenirPnjPourLieu } from "../../../utilitaires/liaisonsDonnees";

const CarteZone = memo(function CarteZone({ zone, estSelectionnee, auClic }) {
  const Icone = ICONES_ZONES[zone.id] || MapPin;
  const classeCouleur =
    COULEURS_ZONES[zone.id] ||
    "from-surface/40 to-surface/60 border-surface-border";
  const classeAccent = ACCENTS_ZONES[zone.id] || "text-accent-light";

  const nombreLieux = zone.locations?.length || 0;
  const nombrePnj = useMemo(() => (zone.locations || []).reduce((acc, loc) => {
    return acc + obtenirPnjPourLieu(loc).length;
  }, 0), [zone.locations]);

  return (
    <button
      onClick={() => auClic(zone.id)}
      className={cc(
        "w-full text-left border transition-all duration-200 overflow-hidden group",
        "bg-gradient-to-br",
        classeCouleur,
        estSelectionnee
          ? "ring-2 ring-accent-light ring-offset-2 ring-offset-surface scale-[1.02]"
          : "hover:scale-[1.01] hover:brightness-110",
      )}
    >
      <div className="p-4 flex items-center gap-3">
        <div
          className={cc(
            "p-2 bg-black/20 border border-white/10",
            estSelectionnee && "bg-black/30",
          )}
        >
          <Icone className={cc("w-5 h-5", classeAccent)} />
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className={cc(
              "font-serif font-semibold truncate",
              estSelectionnee ? "text-white" : "text-content-primary",
            )}
          >
            {zone.name}
          </h4>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1 text-xs text-content-muted">
              <MapPin className="w-3 h-3" />
              <span>
                {nombreLieux} lieu{nombreLieux > 1 ? "x" : ""}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-content-muted">
              <Users className="w-3 h-3" />
              <span>{nombrePnj} PNJ</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
});

export default CarteZone;
