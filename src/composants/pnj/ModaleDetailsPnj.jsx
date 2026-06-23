import Modale from "../interface/Modale";
import { cc } from "../../utilitaires/combinerClasses";
import { obtenirBadgeCategorie } from "../../utilitaires/utilitairesPnj";
import FichePnj from "./FichePnj";

/**
 * ModaleDetailsPnj — Affiche la fiche complète unifiée d'un PNJ.
 */
function ModaleDetailsPnj({ pnj, estOuverte, fermer }) {
  if (!pnj) return null;

  const badgeCategorie = obtenirBadgeCategorie(pnj.categorie);

  const badge = (
    <>
      {badgeCategorie && (
        <div
          className={cc("px-3 py-1 text-sm border", badgeCategorie.nomClasse)}
        >
          {badgeCategorie.etiquette}
        </div>
      )}
      {pnj.disposition && (
        <span className="ml-auto text-xs uppercase tracking-wider text-content-muted border border-surface-border px-2 py-1">
          {pnj.disposition}
        </span>
      )}
    </>
  );

  return (
    <Modale
      estOuverte={estOuverte}
      fermer={fermer}
      titre={pnj.nom}
      sousTitre={pnj.role || ""}
      badge={badge}
    >
      <FichePnj pnj={pnj} />
    </Modale>
  );
}

export default ModaleDetailsPnj;
