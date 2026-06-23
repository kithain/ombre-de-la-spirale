import { useState, useEffect, useMemo, useDeferredValue, useCallback, startTransition } from "react";
import { useSearchParams } from "react-router-dom";
import { Skull } from "lucide-react";
import TitreSection from "../interface/TitreSection";
import FiltresAntagoniste from "./FiltresAntagoniste";
import CartePnjMinimale from "../pnj/CartePnjMinimale";
import ModaleDetailsPnj from "../pnj/ModaleDetailsPnj";
import { utiliserPnj } from "../../hooks/utiliserPnj";

/**
 * Composant VueAntagoniste - Liste PBTA simplifiée
 */
function VueAntagoniste() {
  const [pnjSelectionne, definirPnjSelectionne] = useState(null);
  const [modaleOuverte, definirModaleOuverte] = useState(false);
  const [categorie, _definirCategorie] = useState("tous");
  const [disposition, _definirDisposition] = useState("tous");
  const [requeteRecherche, definirRequeteRecherche] = useState("");

  const rechercheDeferree = useDeferredValue(requeteRecherche);

  const definirCategorie = useCallback((v) => startTransition(() => _definirCategorie(v)), []);
  const definirDisposition = useCallback((v) => startTransition(() => _definirDisposition(v)), []);
  const [parametresRecherche] = useSearchParams();

  const { pnj, obtenirPnjParCategorie } = utiliserPnj();

  useEffect(() => {
    const idPnj = parametresRecherche.get("pnj");
    if (idPnj) {
      const pnjTrouve = pnj.find((n) => n.id === idPnj);
      if (pnjTrouve) {
        definirPnjSelectionne(pnjTrouve);
        definirModaleOuverte(true);
        if (pnjTrouve.categorie) {
          definirCategorie(pnjTrouve.categorie);
        }
      }
    }
  }, [parametresRecherche, pnj, definirCategorie]);

  const pnjFiltres = useMemo(() => {
    let filtres = obtenirPnjParCategorie(
      categorie === "tous" ? "all" : categorie,
    );

    if (disposition !== "tous") {
      filtres = filtres.filter((p) => p.disposition === disposition);
    }

    if (rechercheDeferree.trim()) {
      const requete = rechercheDeferree.toLowerCase();
      filtres = filtres.filter(
        (p) =>
          p.nom?.toLowerCase().includes(requete) ||
          p.role?.toLowerCase().includes(requete) ||
          p.impulsion?.toLowerCase().includes(requete),
      );
    }

    return filtres;
  }, [
    categorie,
    disposition,
    rechercheDeferree,
    obtenirPnjParCategorie,
  ]);

  const gererClicPnj = useCallback((p) => {
    definirPnjSelectionne(p);
    definirModaleOuverte(true);
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <TitreSection
        titre="Antagonistes & Alliés"
        icone={Skull}
        sousTitre="Personnages, créatures et monstres de la campagne"
      />

      <FiltresAntagoniste
        requeteRecherche={requeteRecherche}
        definirRequeteRecherche={definirRequeteRecherche}
        categorie={categorie}
        definirCategorie={definirCategorie}
        disposition={disposition}
        definirDisposition={definirDisposition}
      />

      <div className="text-sm text-content-muted mb-4">
        {pnjFiltres.length} résultat{pnjFiltres.length > 1 ? "s" : ""}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pnjFiltres.map((p) => (
          <CartePnjMinimale
            key={p.id}
            pnj={p}
            auClic={() => gererClicPnj(p)}
          />
        ))}
      </div>

      <ModaleDetailsPnj
        pnj={pnjSelectionne}
        estOuverte={modaleOuverte}
        fermer={() => definirModaleOuverte(false)}
      />
    </div>
  );
}

export default VueAntagoniste;
