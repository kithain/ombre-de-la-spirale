import { useState } from "react";
import {
  ChevronDown,
  AlertTriangle,
  HelpCircle,
  Users,
  Eye,
  Clapperboard,
  Wrench,
} from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";
import AccordeonMenace from "./AccordeonMenace";
import { ConsequencesFront } from "../../scenes/ConsequencesPanel";

/**
 * Composant CarteFront - Un Front (grande crise) dépliable.
 * Affiche l'enjeu, la toile de fond et la liste des menaces avec leurs
 * horloges d'avancée.
 */
function CarteFront({ front, estOuvert, auClic }) {
  const [idMenaceOuverte, definirIdMenaceOuverte] = useState("");
  const Icone = front.icone;

  return (
    <div className="border border-surface-border bg-surface/60 overflow-hidden transition-all duration-300">
      <div
        role="button"
        tabIndex={0}
        onClick={auClic}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            auClic();
          }
        }}
        aria-expanded={estOuvert}
        className="p-3 sm:p-5 cursor-pointer flex items-center justify-between bg-gradient-to-r from-surface-raised to-surface-overlay group gap-3"
      >
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <div
            className={cc(
              "w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center border",
              front.couleur,
            )}
          >
            {Icone && <Icone className="w-6 h-6 sm:w-7 sm:h-7" />}
          </div>
          <div className="min-w-0">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-content-subtle">
              {front.type}
            </p>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-content group-hover:text-accent-light transition-colors truncate">
              {front.nom}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden sm:inline text-xs font-mono text-content-subtle">
            {front.menaces.length} menace{front.menaces.length > 1 ? "s" : ""}
          </span>
          <ChevronDown
            size={16}
            className={cc(
              "text-content-subtle transition-transform duration-300",
              estOuvert && "rotate-180",
            )}
          />
        </div>
      </div>

      {estOuvert && (
        <div className="p-3 sm:p-6 border-t border-surface-border bg-surface/50">
          {/* Enjeu */}
          <div className="mb-4 flex items-start gap-2 bg-surface-raised border-l-2 border-accent-dark px-3 py-3">
            <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-content-secondary">
              <span className="uppercase tracking-wider text-accent-light font-semibold text-[10px]">
                Enjeu{" "}
              </span>
              <span className="block sm:inline">{front.enjeu}</span>
            </p>
          </div>

          {/* Toile de fond */}
          {front.description && (
            <p className="mb-5 text-xs sm:text-sm text-content-muted leading-relaxed italic font-serif max-w-3xl">
              {front.description}
            </p>
          )}

          {/* Question dramatique */}
          {front.questionDramatique && (
            <div className="mb-4 flex items-start gap-2 bg-surface-raised border-l-2 border-indigo-700 px-3 py-3">
              <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-content-secondary">
                <span className="uppercase tracking-wider text-indigo-300 font-semibold text-[10px]">
                  Question dramatique{" "}
                </span>
                <span className="block sm:inline">{front.questionDramatique}</span>
              </p>
            </div>
          )}

          {/* Forces actives */}
          {front.forcesActives?.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-content-subtle font-semibold mb-2">
                <Users size={12} />
                Forces actives
              </h4>
              <div className="space-y-1.5">
                {front.forcesActives.map((force) => (
                  <div
                    key={force.nom}
                    className="text-xs sm:text-sm text-content-secondary bg-surface-raised/50 px-3 py-2 border-l border-surface-border"
                  >
                    <span className="font-semibold text-content">{force.nom}</span>
                    {force.role && (
                      <span className="text-content-muted"> — {force.role}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Signes visibles */}
          {front.signesVisibles?.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-content-subtle font-semibold mb-2">
                <Eye size={12} />
                Signes visibles
              </h4>
              <ul className="space-y-1">
                {front.signesVisibles.map((signe, i) => (
                  <li
                    key={i}
                    className="text-xs text-content-muted flex items-start gap-1.5"
                  >
                    <span className="text-content-subtle mt-0.5">•</span>
                    <span>{signe}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Scènes jouables */}
          {front.scenesJouables && (
            <div className="mb-4">
              <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-content-subtle font-semibold mb-2">
                <Clapperboard size={12} />
                Scènes jouables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {front.scenesJouables.enquete?.length > 0 && (
                  <div className="bg-surface-raised/50 border border-surface-border p-2">
                    <p className="text-[10px] uppercase tracking-wider text-blue-300 font-semibold mb-1">
                      Enquête
                    </p>
                    <ul className="space-y-1">
                      {front.scenesJouables.enquete.map((scene, i) => (
                        <li key={i} className="text-xs text-content-muted">
                          {scene}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {front.scenesJouables.roleplay?.length > 0 && (
                  <div className="bg-surface-raised/50 border border-surface-border p-2">
                    <p className="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                      Roleplay
                    </p>
                    <ul className="space-y-1">
                      {front.scenesJouables.roleplay.map((scene, i) => (
                        <li key={i} className="text-xs text-content-muted">
                          {scene}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {front.scenesJouables.action?.length > 0 && (
                  <div className="bg-surface-raised/50 border border-surface-border p-2">
                    <p className="text-[10px] uppercase tracking-wider text-red-300 font-semibold mb-1">
                      Action
                    </p>
                    <ul className="space-y-1">
                      {front.scenesJouables.action.map((scene, i) => (
                        <li key={i} className="text-xs text-content-muted">
                          {scene}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Leviers PJ */}
          {front.leviersPJ?.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-content-subtle font-semibold mb-2">
                <Wrench size={12} />
                Leviers pour les PJ
              </h4>
              <ul className="space-y-1">
                {front.leviersPJ.map((levier, i) => (
                  <li
                    key={i}
                    className="text-xs text-content-muted flex items-start gap-1.5"
                  >
                    <span className="text-accent mt-0.5">▸</span>
                    <span>{levier}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Menaces */}
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-semibold mb-3">
            Menaces & horloges d'avancée
          </h4>
          <div className="space-y-3">
            {front.menaces.map((menace) => (
              <AccordeonMenace
                key={menace.id}
                menace={menace}
                estOuvert={idMenaceOuverte === menace.id}
                auClic={() =>
                  definirIdMenaceOuverte((prec) =>
                    prec === menace.id ? "" : menace.id,
                  )
                }
              />
            ))}
          </div>

          {/* Conséquences centralisées */}
          <div className="mt-5">
            <ConsequencesFront idFront={front.id} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CarteFront;
