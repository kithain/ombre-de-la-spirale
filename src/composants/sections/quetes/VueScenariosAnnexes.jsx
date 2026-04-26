import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ScrollText } from "lucide-react";
import TitreSection from "../../interface/TitreSection";
import {
  filtrerPnjParType,
  obtenirScenariosAvecQuetes,
  obtenirToutesLesQuetes,
} from "../../../data/utilitairesQuetes";
import StatistiquesQuetes from "./StatistiquesQuetes";
import FiltresQuetes from "./FiltresQuetes";
import CartePnjQuetes from "./CartePnjQuetes";

/**
 * Composant VueScenariosAnnexes - Page des quêtes annexes par PNJ
 */
function VueScenariosAnnexes() {
  const [filtreType, definirFiltreType] = useState("tous");
  const [filtreScenario, definirFiltreScenario] = useState("tous");
  const [requeteRecherche, definirRequeteRecherche] = useState("");
  const [idPnjOuvert, definirIdPnjOuvert] = useState(null);
  const [parametresRecherche] = useSearchParams();

  const scenariosDisponibles = useMemo(() => obtenirScenariosAvecQuetes(), []);
  const toutesLesQuetes = useMemo(() => obtenirToutesLesQuetes(), []);
  const statsParType = useMemo(() => ({
    allies: filtrerPnjParType("allié").length,
    ennemis: filtrerPnjParType("ennemi").length,
  }), []);

  // Deep linking : ouvrir un PNJ via ?pnj=X
  useEffect(() => {
    const idPnj = parametresRecherche.get("pnj");
    if (idPnj) {
      definirIdPnjOuvert(idPnj);
    }
  }, [parametresRecherche]);

  // Filtrage combiné
  const pnjFiltres = useMemo(() => {
    let resultats = filtrerPnjParType(filtreType);

    // Filtre par scénario
    if (filtreScenario !== "tous") {
      resultats = resultats.filter((pnj) =>
        pnj.quetesAnnexes?.some(
          (q) => q.scenario === Number(filtreScenario),
        ),
      );
    }

    // Filtre par recherche
    if (requeteRecherche.trim()) {
      const requete = requeteRecherche.toLowerCase();
      resultats = resultats.filter(
        (pnj) =>
          pnj.nom?.toLowerCase().includes(requete) ||
          pnj.role?.toLowerCase().includes(requete) ||
          pnj.quetesAnnexes?.some(
            (q) =>
              q.titre?.toLowerCase().includes(requete) ||
              q.description?.toLowerCase().includes(requete),
          ),
      );
    }

    return resultats;
  }, [filtreType, filtreScenario, requeteRecherche]);

  // Compteur de quêtes filtrées
  const nombreQuetes = pnjFiltres.reduce(
    (acc, pnj) => acc + (pnj.quetesAnnexes?.length || 0),
    0,
  );

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <TitreSection
        titre="Scénarios Annexes"
        icone={ScrollText}
        sousTitre="Quêtes annexes des PNJ alliés et ennemis de la campagne"
      />

      <StatistiquesQuetes
        totalQuetes={toutesLesQuetes.length}
        nbAllies={statsParType.allies}
        nbEnnemis={statsParType.ennemis}
        nbScenarios={scenariosDisponibles.length}
      />

      <FiltresQuetes
        filtreType={filtreType}
        definirFiltreType={definirFiltreType}
        filtreScenario={filtreScenario}
        definirFiltreScenario={definirFiltreScenario}
        requeteRecherche={requeteRecherche}
        definirRequeteRecherche={definirRequeteRecherche}
        scenariosDisponibles={scenariosDisponibles}
      />

      {/* Compteur de résultats */}
      <div className="text-sm text-content-muted">
        {pnjFiltres.length} PNJ — {nombreQuetes} quête
        {nombreQuetes > 1 ? "s" : ""} annexe{nombreQuetes > 1 ? "s" : ""}
      </div>

      {/* Liste des PNJ avec quêtes */}
      {pnjFiltres.length > 0 ? (
        <div className="space-y-3">
          {pnjFiltres.map((pnj) => (
            <CartePnjQuetes
              key={pnj.id}
              pnj={pnj}
              estOuvert={idPnjOuvert === pnj.id}
              auClic={() =>
                definirIdPnjOuvert((prev) =>
                  prev === pnj.id ? null : pnj.id,
                )
              }
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-content-muted">
          <ScrollText size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg font-serif">Aucune quête annexe trouvée</p>
          <p className="text-sm mt-2">
            Essayez de modifier vos filtres de recherche
          </p>
        </div>
      )}
    </div>
  );
}

export default VueScenariosAnnexes;
