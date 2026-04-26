import { ChevronDown } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { utiliserModalePnj } from "../../../contextes/ContexteModalePnj";
import BadgeQuete from "./BadgeQuete";
import CarteQuete from "./CarteQuete";

/**
 * Détermine si un PNJ est allié
 */
function estPnjAllie(pnj) {
  return pnj.category === "allies" || (!pnj.est_ennemi && !pnj.antagoniste);
}

/**
 * Composant CartePnjQuetes - Accordéon d'un PNJ avec ses quêtes annexes
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.pnj - Données du PNJ
 * @param {boolean} proprietes.estOuvert - État ouvert/fermé (contrôlé par le parent)
 * @param {Function} proprietes.auClic - Callback toggle
 */
function CartePnjQuetes({ pnj, estOuvert = false, auClic }) {
  const { ouvrirFichePnj } = utiliserModalePnj();
  const [estOuvertLocal, definirEstOuvertLocal] = utiliserEtatPersistant(
    `quete-pnj-${pnj.id}`,
    false,
  );

  const ouvert = auClic ? estOuvert : estOuvertLocal;
  const basculer = auClic || (() => definirEstOuvertLocal((prev) => !prev));

  const allie = estPnjAllie(pnj);
  const couleurTheme = allie ? "bleu" : "rouge";

  return (
    <div className="border border-surface-border bg-surface/60 overflow-hidden transition-all duration-300 hover:border-surface-border">
      {/* En-tête cliquable — pattern LigneScenario */}
      <div
        role="button"
        tabIndex={0}
        onClick={basculer}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); basculer(); } }}
        aria-expanded={ouvert}
        className="p-3 sm:p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-surface-raised to-surface-overlay group"
      >
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          {/* Compteur de quêtes — style neutre comme LigneScenario */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-surface border border-surface-border font-serif font-bold text-lg sm:text-xl text-accent shadow-inner group-hover:text-accent group-hover:border-accent-muted transition-all">
            {pnj.quetesAnnexes?.length || 0}
          </div>

          <div className="min-w-0">
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-content group-hover:text-accent-light transition-colors truncate">
              {pnj.nom}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <BadgeQuete
                type="allegiance"
                valeur={couleurTheme}
              />
              {pnj.role && (
                <span className="text-xs sm:text-sm text-content-subtle font-mono tracking-wider truncate">
                  {pnj.role}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); ouvrirFichePnj(pnj.id); }}
            className="text-[10px] px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:border-accent transition-colors cursor-pointer"
          >
            Fiche
          </button>
          <div
            className={cc(
              "transition-transform duration-300",
              ouvert && "rotate-180",
            )}
          >
            <ChevronDown size={16} className="text-content-subtle" />
          </div>
        </div>
      </div>

      {/* Contenu déplié : liste des quêtes */}
      {ouvert && (
        <div className="p-3 sm:p-6 border-t border-surface-border bg-surface/50 space-y-3 animate-fadeIn">
          {pnj.environnement && (
            <div className="text-xs text-content-muted italic">
              {pnj.environnement}
            </div>
          )}

          <div className="space-y-3">
            {pnj.quetesAnnexes?.map((quete) => (
              <CarteQuete key={quete.id} quete={quete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartePnjQuetes;
