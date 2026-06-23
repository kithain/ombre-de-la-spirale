import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Swords, Compass, Scroll } from "lucide-react";
import TitreSection from "../../interface/TitreSection";
import CarteFront from "./CarteFront";
import LigneScenario from "./LigneScenario";
import GestionNotes from "./GestionNotes";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { frontsData, couchesCampagneData } from "../../../data/scenarios/fronts";
import { scenariosData } from "../../../data/scenarios/scenarios";

/**
 * Composant VueScenarios - Pilotage de la campagne par le système des Fronts.
 * Chaque Front regroupe des menaces dotées d'horloges d'avancée que le MJ
 * fait progresser au fil des parties.
 */
function VueScenarios() {
  const params = useParams();
  const [parametresRecherche] = useSearchParams();
  const idFrontCible = params.id || parametresRecherche.get("front") || "";
  const idScenarioCible = parametresRecherche.get("scenario") || "";
  const [idFrontOuvert, definirIdFrontOuvert] = utiliserEtatPersistant(
    "front-open-active",
    idFrontCible || "",
  );
  const [idScenarioOuvert, definirIdScenarioOuvert] = utiliserEtatPersistant(
    "scenario-open-active",
    "",
  );
  const titreSceneCible = parametresRecherche.get("scene") || "";

  useEffect(() => {
    if (idScenarioCible) {
      definirIdScenarioOuvert(String(idScenarioCible));
    }
    if (idFrontCible) {
      const scenario = scenariosData.find((s) => s.id === idFrontCible);
      if (scenario) {
        definirIdScenarioOuvert(String(idFrontCible));
      } else {
        definirIdFrontOuvert(String(idFrontCible));
      }
    }
  }, [idFrontCible, idScenarioCible, definirIdFrontOuvert, definirIdScenarioOuvert]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {scenariosData?.length > 0 && (
        <>
          <div className="flex items-center justify-between gap-4">
            <TitreSection
              titre="La Trilogie de Valombre"
              icone={Scroll}
              sousTitre="Trois actes, du Serment des Sept Thanes à la Dame de la Spirale. Suivez les scènes, jouez les transitions."
            />
          </div>

          <div className="space-y-3">
            {scenariosData.map((scenario) => (
              <LigneScenario
                key={scenario.id}
                scenario={scenario}
                estOuvert={String(idScenarioOuvert) === String(scenario.id)}
                auClic={() =>
                  definirIdScenarioOuvert((precedent) =>
                    String(precedent) === String(scenario.id)
                      ? ""
                      : String(scenario.id),
                  )
                }
                titreSceneCible={titreSceneCible}
              />
            ))}
          </div>
        </>
      )}

      <div className="pt-4 border-t border-surface-border">
        <div className="flex items-center justify-between gap-4">
          <TitreSection
            titre="Les Fronts de la Campagne"
            icone={Swords}
            sousTitre="Ce qui avance dans l'ombre pendant que les héros hésitent. Faites tourner les horloges."
          />
        </div>
      </div>

      <GestionNotes />

      <div className="space-y-4">
        {frontsData.map((front) => (
          <CarteFront
            key={front.id}
            front={front}
            estOuvert={String(idFrontOuvert) === String(front.id)}
            auClic={() =>
              definirIdFrontOuvert((precedent) =>
                String(precedent) === String(front.id) ? "" : String(front.id),
              )
            }
          />
        ))}
      </div>

      {/* Couches de campagne */}
      {couchesCampagneData?.length > 0 && (
        <div className="pt-4 border-t border-surface-border">
          <div className="flex items-center gap-2 mb-3">
            <Compass size={16} className="text-indigo-400" />
            <h2 className="text-sm uppercase tracking-widest text-indigo-300 font-semibold">
              Couches de campagne
            </h2>
          </div>
          <div className="space-y-4">
            {couchesCampagneData.map((couche) => (
              <CarteFront
                key={couche.id}
                front={couche}
                estOuvert={String(idFrontOuvert) === String(couche.id)}
                auClic={() =>
                  definirIdFrontOuvert((precedent) =>
                    String(precedent) === String(couche.id)
                      ? ""
                      : String(couche.id),
                  )
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default VueScenarios;
