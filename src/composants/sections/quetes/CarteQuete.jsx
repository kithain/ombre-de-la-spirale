import { Gift, Lock } from "lucide-react";
import Carte from "../../interface/Carte";
import BadgeQuete from "./BadgeQuete";

/**
 * Composant CarteQuete - Carte d'une quête annexe individuelle
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.quete - Données de la quête
 */
function CarteQuete({ quete }) {
  return (
    <Carte variante="plat" effetSurvol={false} className="!p-3 sm:!p-4 space-y-3">
      {/* En-tête de la quête */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm sm:text-base font-serif font-bold text-accent-light tracking-wide">
          {quete.titre}
        </h4>
        <div className="flex items-center gap-2">
          <BadgeQuete type="statut" valeur={quete.statut} />
          <BadgeQuete type="difficulte" valeur={quete.difficulte} />
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
        {quete.description}
      </p>

      {/* Détails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
        {quete.recompenses && (
          <div className="flex items-start gap-2 p-2 bg-surface/30 border border-surface-border/30">
            <Gift size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-content-subtle uppercase tracking-wider text-[10px]">
                Récompenses
              </span>
              <p className="text-content-secondary mt-0.5">
                {quete.recompenses}
              </p>
            </div>
          </div>
        )}
        {quete.conditions && (
          <div className="flex items-start gap-2 p-2 bg-surface/30 border border-surface-border/30">
            <Lock size={14} className="text-content-subtle mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-content-subtle uppercase tracking-wider text-[10px]">
                Conditions
              </span>
              <p className="text-content-secondary mt-0.5">
                {quete.conditions}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Scénario lié */}
      {quete.scenario && (
        <div className="text-[10px] uppercase tracking-wider text-content-muted">
          Scénario {quete.scenario}
        </div>
      )}
    </Carte>
  );
}

export default CarteQuete;
