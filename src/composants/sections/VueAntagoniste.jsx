import { useState, useEffect, useMemo, useDeferredValue, useCallback, startTransition } from "react";
import { useSearchParams } from "react-router-dom";
import { Skull } from "lucide-react";
import TitreSection from "../interface/TitreSection";
import FiltresAntagoniste from "./FiltresAntagoniste";
import CartePnjMinimale from "../pnj/CartePnjMinimale";
import ModaleDetailsPnj from "../pnj/ModaleDetailsPnj";
import { utiliserPnj } from "../../hooks/utiliserPnj";
import { analyserFp, filtrerParPlageFp } from "../../utilitaires/utilitairesPnj";

/**
 * Composant VueAntagoniste - Affiche la liste des antagonistes avec filtres
 */
function VueAntagoniste() {
  const [pnjSelectionne, definirPnjSelectionne] = useState(null);
  const [modaleOuverte, definirModaleOuverte] = useState(false);
  const [categorie, _definirCategorie] = useState("tous");
  const [filtreFp, _definirFiltreFp] = useState("tous");
  const [fpSpecifique, _definirFpSpecifique] = useState("");
  const [requeteRecherche, definirRequeteRecherche] = useState("");

  // Déférer la valeur de recherche pour ne pas bloquer la saisie
  const rechercheDeferree = useDeferredValue(requeteRecherche);

  // Envelopper les changements de filtre dans startTransition (basse priorité)
  const definirCategorie = useCallback((v) => startTransition(() => _definirCategorie(v)), []);
  const definirFiltreFp = useCallback((v) => startTransition(() => _definirFiltreFp(v)), []);
  const definirFpSpecifique = useCallback((v) => startTransition(() => _definirFpSpecifique(v)), []);
  const [parametresRecherche] = useSearchParams();

  const { pnj, obtenirPnjParCategorie, categories } = utiliserPnj();

  // Gestion des paramètres URL
  useEffect(() => {
    const idPnj = parametresRecherche.get("pnj");
    if (idPnj) {
      const pnjTrouve = pnj.find((n) => n.id === idPnj);
      if (pnjTrouve) {
        definirPnjSelectionne(pnjTrouve);
        definirModaleOuverte(true);
        // Déterminer la catégorie du PNJ
        if (pnjTrouve.category) {
          definirCategorie(pnjTrouve.category);
        }
      }
    }
  }, [parametresRecherche, pnj]);

  // Filtrage combiné
  const pnjFiltres = useMemo(() => {
    let filtres = obtenirPnjParCategorie(
      categorie === "tous" ? "all" : categorie,
    );

    // Filtrer par FP Spécifique
    if (fpSpecifique.trim()) {
      const fpCible = analyserFp(fpSpecifique);
      // Si c'est un nombre valide, on filtre
      if (!isNaN(fpCible) && fpCible > 0) {
        filtres = filtres.filter((pnj) => {
          const valeur = pnj.niveau || pnj.fp;
          const fp = analyserFp(valeur);
          return Math.abs(fp - fpCible) < 0.01; // Comparaison approximative pour les floats
        });
      } else {
        // Sinon on essaie de matcher la string exacte (ex: "1/4")
        filtres = filtres.filter(
          (pnj) =>
            String(pnj.niveau || pnj.fp) ===
            fpSpecifique.trim(),
        );
      }
    }
    // Sinon Filtrer par Plage de FP
    else if (filtreFp !== "tous") {
      filtres = filtrerParPlageFp(filtres, filtreFp);
    }

    // Filtrer par recherche (utilise la valeur déférée)
    if (rechercheDeferree.trim()) {
      const requete = rechercheDeferree.toLowerCase();
      filtres = filtres.filter(
        (pnj) =>
          pnj.nom?.toLowerCase().includes(requete) ||
          pnj.role?.toLowerCase().includes(requete) ||
          pnj.type?.toLowerCase().includes(requete) ||
          pnj.environment?.toLowerCase().includes(requete) ||
          pnj.organization?.toLowerCase().includes(requete),
      );
    }

    return filtres;
  }, [
    categorie,
    filtreFp,
    rechercheDeferree,
    obtenirPnjParCategorie,
    fpSpecifique,
  ]);

  const gererClicPnj = useCallback((pnj) => {
    definirPnjSelectionne(pnj);
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
        filtreFp={filtreFp}
        definirFiltreFp={definirFiltreFp}
        fpSpecifique={fpSpecifique}
        definirFpSpecifique={definirFpSpecifique}
      />

      {/* Résultats */}
      <div className="text-sm text-content-muted mb-4">
        {pnjFiltres.length} résultat{pnjFiltres.length > 1 ? "s" : ""}
      </div>

      {/* Grille de PNJ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pnjFiltres.map((pnj) => (
          <CartePnjMinimale
            key={pnj.id}
            pnj={pnj}
            auClic={() => gererClicPnj(pnj)}
          />
        ))}
      </div>

      {/* Modale de détails */}
      <ModaleDetailsPnj
        pnj={pnjSelectionne}
        estOuverte={modaleOuverte}
        fermer={() => definirModaleOuverte(false)}
      />
    </div>
  );
}

export default VueAntagoniste;
