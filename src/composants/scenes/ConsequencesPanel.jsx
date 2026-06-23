import { useMemo } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingDown,
  Info,
} from "lucide-react";
import {
  consequencesFront,
  consequencesScenario,
} from "../../utilitaires/consequences";

const CONFIG_TYPE = {
  remplissage: {
    icone: AlertTriangle,
    couleur: "text-red-400",
    bordure: "border-red-900/40",
    fond: "bg-red-950/20",
    etiquette: "Si l'horloge se remplit",
  },
  annulation: {
    icone: CheckCircle2,
    couleur: "text-emerald-400",
    bordure: "border-emerald-900/40",
    fond: "bg-emerald-950/10",
    etiquette: "Comment annuler",
  },
  etape: {
    icone: Clock,
    couleur: "text-amber-400",
    bordure: "border-amber-900/30",
    fond: "bg-amber-950/10",
    etiquette: "Étape",
  },
  inevitable: {
    icone: TrendingDown,
    couleur: "text-orange-400",
    bordure: "border-orange-900/40",
    fond: "bg-orange-950/10",
    etiquette: "Inévitable",
  },
  echec: {
    icone: XCircle,
    couleur: "text-red-400",
    bordure: "border-red-900/40",
    fond: "bg-red-950/10",
    etiquette: "Si échec",
  },
  reussite: {
    icone: CheckCircle2,
    couleur: "text-emerald-400",
    bordure: "border-emerald-900/40",
    fond: "bg-emerald-950/10",
    etiquette: "Si réussite",
  },
  transition: {
    icone: Info,
    couleur: "text-content-muted",
    bordure: "border-surface-border",
    fond: "bg-surface/40",
    etiquette: "Transition",
  },
  declencheur: {
    icone: AlertTriangle,
    couleur: "text-amber-400",
    bordure: "border-amber-900/40",
    fond: "bg-amber-950/10",
    etiquette: "Déclencheur",
  },
};

function CarteConsequence({ consequence }) {
  const config = CONFIG_TYPE[consequence.type] || CONFIG_TYPE.transition;
  const Icone = config.icone;

  return (
    <div className={`border ${config.bordure} ${config.fond} px-3 py-2`}>
      <div className="flex items-start gap-2">
        <Icone size={14} className={`${config.couleur} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] uppercase tracking-wider ${config.couleur} font-semibold`}>
              {config.etiquette}
            </span>
            {consequence.segment && (
              <span className="text-[10px] font-mono text-content-subtle">
                seg. {consequence.segment}
              </span>
            )}
            {consequence.horlogeNom && (
              <span className="text-[10px] text-content-subtle truncate">
                {consequence.horlogeNom}
              </span>
            )}
          </div>
          {consequence.etapeTitre && (
            <p className="text-xs font-semibold text-content mb-0.5">
              {consequence.etapeTitre}
            </p>
          )}
          {consequence.declencheur && (
            <p className="text-xs text-content-secondary italic mb-1">
              {consequence.declencheur}
            </p>
          )}
          <p className="text-xs text-content-secondary leading-relaxed">
            {consequence.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Composant ConsequencesFront - Affiche toutes les conséquences
 * d'un front (remplissage, annulation, étapes).
 */
export function ConsequencesFront({ idFront }) {
  const consequences = useMemo(
    () => consequencesFront(idFront),
    [idFront],
  );

  if (consequences.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <AlertTriangle size={14} className="text-amber-400" />
        <h5 className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
          Conséquences
        </h5>
      </div>
      <div className="space-y-1.5">
        {consequences.map((c, i) => (
          <CarteConsequence key={`${c.type}-${c.horlogeId}-${i}`} consequence={c} />
        ))}
      </div>
    </div>
  );
}

/**
 * Composant ConsequencesScenario - Affiche les conséquences
 * globales d'un scénario (événements mondiaux).
 */
export function ConsequencesScenario({ idScenario }) {
  const consequences = useMemo(
    () => consequencesScenario(idScenario),
    [idScenario],
  );

  if (consequences.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <TrendingDown size={14} className="text-orange-400" />
        <h5 className="text-xs uppercase tracking-widest text-orange-300 font-semibold">
          Ce qui arrive si les PJ n'agissent pas
        </h5>
      </div>
      <div className="space-y-1.5">
        {consequences.map((c, i) => (
          <CarteConsequence key={`${c.type}-${i}`} consequence={c} />
        ))}
      </div>
    </div>
  );
}

export default ConsequencesFront;
