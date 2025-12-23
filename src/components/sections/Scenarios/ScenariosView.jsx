import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { scenariosData } from "../../../data/scenarios/scenarios";
import SectionTitle from "../../ui/SectionTitle";
import ScenarioRow from "./ScenarioRow";
import { usePersistentState } from "../../../hooks/usePersistentState";

function ScenariosView() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const targetSceneTitle = searchParams.get("scene") || "";
  const targetScenarioId = params.id || searchParams.get("scenario") || "";
  const [openScenarioId, setOpenScenarioId] = usePersistentState(
    "scenario-open-active",
    targetScenarioId || ""
  );

  // Ouvrir automatiquement le scénario ciblé par la recherche / route
  useEffect(() => {
    if (targetScenarioId) {
      setOpenScenarioId(String(targetScenarioId));
    }
  }, [targetScenarioId, setOpenScenarioId]);

  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionTitle
        title="Le Livre des Scénarios"
        icon={BookOpen}
        subtitle="Les dieux ont créé la mort par négligence, c'est un défaut de conception."
      />
      <div className="space-y-4">
        {scenariosData.map((scenario) => (
          <ScenarioRow
            key={scenario.id}
            scenario={scenario}
            isOpen={String(openScenarioId) === String(scenario.id)}
            onToggle={() =>
              setOpenScenarioId((prev) =>
                String(prev) === String(scenario.id) ? "" : String(scenario.id)
              )
            }
            targetSceneTitle={targetSceneTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default ScenariosView;
