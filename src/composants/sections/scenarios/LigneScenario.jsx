import { useEffect, useRef } from "react";
import { ChevronDown, Sparkles, Swords, AlertOctagon, HelpCircle, Globe } from "lucide-react";
import AccordeonActe from "./AccordeonActe";
import EvenementsMondiauxScenario from "../../scenes/EvenementsMondiauxScenario";
import VueEnsembleScenario from "../../scenes/VueEnsembleScenario";
import RevelationsIndispensables from "../../scenes/RevelationsIndispensables";
import FrontsActifsScenario from "../../scenes/FrontsActifsScenario";
import { ConsequencesScenario } from "../../scenes/ConsequencesPanel";
import ScenesStructure from "../../scenes/ScenesStructure";
import EncadresMj from "../../scenes/EncadresMj";
import AidesJeuScenario from "../../scenes/AidesJeuScenario";
import AccordeonSection from "../../scenes/AccordeonSection";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { sceneId } from "../../../utilitaires/sceneUtils";

function LigneScenario({ scenario, estOuvert, auClic, titreSceneCible = "" }) {
  const [titreActeOuvert, definirTitreActeOuvert] = utiliserEtatPersistant(
    `scenario-open-act-${scenario.id}`,
    "",
  );
  const aInitialiseActe = useRef(false);

  useEffect(() => {
    if (estOuvert && typeof window !== "undefined") {
      window.localStorage.setItem("current-scenario", String(scenario.id));
    }
  }, [estOuvert, scenario.id]);

  useEffect(() => {
    if (!estOuvert) return;
    if (aInitialiseActe.current) return;
    const acteCible = scenario.actes.find((acte) =>
      acte.scenes?.some(
        (scene) => sceneId(scene).toLowerCase() === titreSceneCible.toLowerCase(),
      ),
    );
    if (acteCible) {
      definirTitreActeOuvert(acteCible.titre);
      aInitialiseActe.current = true;
      return;
    }
    if (!titreActeOuvert && scenario.actes[0]) {
      definirTitreActeOuvert(scenario.actes[0].titre);
      aInitialiseActe.current = true;
    }
  }, [
    estOuvert,
    scenario.actes,
    titreSceneCible,
    titreActeOuvert,
    definirTitreActeOuvert,
  ]);

  return (
    <div className="border border-surface-border hover:border-surface-border bg-surface/60 overflow-hidden transition-all duration-300">
      <div
        role="button"
        tabIndex={0}
        onClick={auClic}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); auClic(); } }}
        aria-expanded={estOuvert}
        className="p-3 sm:p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-surface-raised to-surface-overlay group"
      >
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          {scenario.image ? (
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 border border-surface-border shadow-inner overflow-hidden group-hover:border-accent-muted transition-all">
              <img
                src={scenario.image}
                alt={scenario.titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/70" />
              <span className="absolute bottom-1 right-1 w-5 h-5 flex items-center justify-center bg-surface/90 border border-surface-border font-serif font-bold text-xs text-accent">
                {scenario.id.replace('scenario', '')}
              </span>
            </div>
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-surface border border-surface-border font-serif font-bold text-lg sm:text-xl text-accent shadow-inner group-hover:text-accent group-hover:border-accent-muted transition-all">
              {scenario.id.replace('scenario', '')}
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-content group-hover:text-accent-light transition-colors truncate">
              {scenario.titre}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-content-subtle font-mono tracking-wider">
                {scenario.niveau}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ChevronDown
            size={16}
            className={`text-content-subtle transition-transform duration-300 ${estOuvert ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {estOuvert && (
        <div className="p-3 sm:p-6 border-t border-surface-border bg-surface/50">
          {scenario.image && (
            <div className="relative mb-4 sm:mb-6 h-40 sm:h-56 md:h-72 overflow-hidden border border-surface-border bg-surface">
              <img
                src={scenario.image}
                alt={scenario.titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-light font-semibold">
                  Arc {scenario.id.replace('scenario', '')}
                </p>
                <h4 className="mt-1 text-xl sm:text-3xl font-serif font-bold text-content drop-shadow">
                  {scenario.titre}
                </h4>
              </div>
            </div>
          )}
          <div className="mb-4 sm:mb-8 p-3 sm:p-4 italic text-content-muted text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto text-center font-serif">
            {scenario.synopsis}
          </div>

          {scenario.vue_ensemble && (
            <div className="mb-6">
              <VueEnsembleScenario vue={scenario.vue_ensemble} />
            </div>
          )}

          {scenario.scenes_structure && (
            <div className="mb-6">
              <ScenesStructure structure={scenario.scenes_structure} />
            </div>
          )}

          {scenario.revelations_indispensables?.length > 0 && (
            <AccordeonSection titre="Révélations indispensables" icon={Sparkles} couleur="text-violet-300">
              <RevelationsIndispensables revelations={scenario.revelations_indispensables} />
            </AccordeonSection>
          )}

          {scenario.fronts_actifs?.length > 0 && (
            <AccordeonSection titre="Fronts actifs" icon={Swords} couleur="text-violet-300">
              <FrontsActifsScenario fronts={scenario.fronts_actifs} />
            </AccordeonSection>
          )}

          {scenario.evenements_mondiaux && (
            <AccordeonSection titre="Conséquences — Si les PJ n'agissent pas" icon={AlertOctagon} couleur="text-orange-300">
              <ConsequencesScenario idScenario={scenario.id} />
            </AccordeonSection>
          )}

          {scenario.encadres_mj?.length > 0 && (
            <AccordeonSection titre="Encadrés MJ — Que faire si…" icon={AlertOctagon} couleur="text-red-300">
              <EncadresMj encadres={scenario.encadres_mj} />
            </AccordeonSection>
          )}

          {scenario.aides_jeu && (
            <AccordeonSection titre="Aides de jeu" icon={HelpCircle} couleur="text-sky-300">
              <AidesJeuScenario aides={scenario.aides_jeu} />
            </AccordeonSection>
          )}

          {scenario.evenements_mondiaux && (
            <AccordeonSection titre="Événements mondiaux" icon={Globe} couleur="text-amber-300">
              <EvenementsMondiauxScenario evenements={scenario.evenements_mondiaux} />
            </AccordeonSection>
          )}

          <div className="space-y-2">
            {(scenario.actes || []).map((acte, indexActe) => (
              <AccordeonActe
                key={`${acte.titre}-${indexActe}`}
                acte={acte}
                idScenario={scenario.id}
                indexActe={indexActe}
                estOuvert={titreActeOuvert === acte.titre}
                auClic={() =>
                  definirTitreActeOuvert((precedent) =>
                    precedent === acte.titre ? "" : acte.titre,
                  )
                }
                titreSceneCible={titreSceneCible}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


export default LigneScenario;
