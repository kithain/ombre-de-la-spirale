import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BookOpen, Pencil, PencilOff, Save } from "lucide-react";
import TitreSection from "../../interface/TitreSection";
import LigneScenario from "./LigneScenario";
import GestionNotes from "./GestionNotes";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { utiliserEditeurScenario } from "../../../contextes/ContexteEditeurScenarioBase";
import { cc } from "../../../utilitaires/combinerClasses";

function VueScenarios() {
  const params = useParams();
  const [parametresRecherche] = useSearchParams();
  const titreSceneCible = parametresRecherche.get("scene") || "";
  const idScenarioCible =
    params.id || parametresRecherche.get("scenario") || "";
  const [idScenarioOuvert, definirIdScenarioOuvert] = utiliserEtatPersistant(
    "scenario-open-active",
    idScenarioCible || "",
  );

  const {
    modeEdition,
    basculerModeEdition,
    scenariosFusionnes,
    sauvegarderTout,
  } = utiliserEditeurScenario();

  useEffect(() => {
    if (idScenarioCible) {
      definirIdScenarioOuvert(String(idScenarioCible));
    }
  }, [idScenarioCible, definirIdScenarioOuvert]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between gap-4">
        <TitreSection
          titre="Le Livre des Scénarios"
          icone={BookOpen}
          sousTitre="Les dieux ont créé la mort par négligence, c'est un défaut de conception."
        />
        <div className="flex items-center gap-2 flex-shrink-0">
          {modeEdition && (
            <button
              type="button"
              onClick={sauvegarderTout}
              className="btn-forge flex items-center gap-1.5 text-xs !px-3 !py-1.5 !border-green-600 hover:!border-green-400 hover:!shadow-[0_0_10px_rgba(34,197,94,0.2)]"
              title="Sauvegarder toutes les modifications"
            >
              <Save size={14} />
              Sauvegarder
            </button>
          )}
          <button
            type="button"
            onClick={basculerModeEdition}
            className={cc(
              "btn-forge flex items-center gap-1.5 text-xs !px-3 !py-1.5 transition-all",
              modeEdition
                ? "!border-amber-500 !shadow-[0_0_10px_rgba(245,158,11,0.2)] text-amber-300"
                : "text-content",
            )}
            title={modeEdition ? "Désactiver le mode édition" : "Activer le mode édition"}
          >
            {modeEdition ? <PencilOff size={14} /> : <Pencil size={14} />}
            {modeEdition ? "Lecture" : "Édition"}
          </button>
        </div>
      </div>

      <GestionNotes />

      <div className="space-y-4">
        {scenariosFusionnes.map((scenario) => (
          <LigneScenario
            key={scenario.id}
            scenario={scenario}
            estOuvert={String(idScenarioOuvert) === String(scenario.id)}
            auClic={() =>
              definirIdScenarioOuvert((prev) =>
                String(prev) === String(scenario.id) ? "" : String(scenario.id),
              )
            }
            titreSceneCible={titreSceneCible}
          />
        ))}
      </div>
    </div>
  );
}

export default VueScenarios;
