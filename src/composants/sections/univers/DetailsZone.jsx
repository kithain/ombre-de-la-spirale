import {
  Sparkles,
  AlertTriangle,
  Target,
  Gift,
  MapPin,
  Pencil,
} from "lucide-react";
import Carte from "../../interface/Carte";
import { cc } from "../../../utilitaires/combinerClasses";
import { ICONES_ZONES } from "../../../utilitaires/constantes";
import { utiliserEditeurZoneContexte } from "../../../contextes/ContexteEditeurZoneBase";

const ICONES_DETAILS = {
  ambiance: {
    icone: Sparkles,
    couleur: "text-purple-400",
    fond: "bg-purple-900/20 border-purple-800/30",
  },
  tension: {
    icone: AlertTriangle,
    couleur: "text-red-400",
    fond: "bg-red-900/20 border-red-800/30",
  },
  focus: {
    icone: Target,
    couleur: "text-blue-400",
    fond: "bg-blue-900/20 border-blue-800/30",
  },
  opportunités: {
    icone: Gift,
    couleur: "text-green-400",
    fond: "bg-green-900/20 border-green-800/30",
  },
  default: {
    icone: MapPin,
    couleur: "text-content-muted",
    fond: "bg-surface/50 border-surface-border",
  },
};

function analyserDetail(detail) {
  const match = detail.match(/^(\w+)\s*:\s*(.+)$/i);
  if (match) {
    const cle = match[1].toLowerCase();
    const valeur = match[2];
    const config = ICONES_DETAILS[cle] || ICONES_DETAILS.default;
    return { etiquette: match[1], valeur, ...config };
  }
  return { etiquette: null, valeur: detail, ...ICONES_DETAILS.default };
}

function DetailsZone({ zone }) {
  const { ouvrirEditeurZone } = utiliserEditeurZoneContexte();

  if (!zone) return null;

  const Icone = ICONES_ZONES[zone.id] || MapPin;
  const detailsAnalyses = (zone.details || []).map(analyserDetail);

  return (
    <Carte className="h-full">
      <div className="flex items-start gap-4 mb-6 pb-4 border-b border-surface-border">
        <div className="p-3 bg-gradient-to-br from-accent-surface to-accent-dark/30 border border-accent-muted">
          <Icone className="w-8 h-8 text-accent-light" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-2xl font-serif text-accent-light">{zone.name}</h2>
            <button
              type="button"
              onClick={() => ouvrirEditeurZone(zone.id)}
              className="btn-forge flex items-center gap-1.5 text-content text-xs !px-2.5 !py-1 flex-shrink-0"
              title="Éditer cette zone"
            >
              <Pencil size={12} />
              Éditer
            </button>
          </div>
          <p className="text-content-secondary mt-1">{zone.summary}</p>
        </div>
      </div>

      {detailsAnalyses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {detailsAnalyses.map((detail, idx) => {
            const IconeDetail = detail.icone;
            return (
              <div key={idx} className={cc("p-4 border", detail.fond)}>
                <div className="flex items-center gap-2 mb-2">
                  <IconeDetail className={cc("w-4 h-4", detail.couleur)} />
                  {detail.etiquette && (
                    <span className={cc("text-sm font-medium", detail.couleur)}>
                      {detail.etiquette}
                    </span>
                  )}
                </div>
                <p className="text-sm text-content-secondary">
                  {detail.valeur}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </Carte>
  );
}


export default DetailsZone;
