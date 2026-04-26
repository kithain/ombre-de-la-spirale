import { Pencil } from "lucide-react";
import Modale from "../interface/Modale";
import Etiquette from "../interface/Etiquette";
import { cc } from "../../utilitaires/combinerClasses";
import { utiliserEditeurPnj } from "../../contextes/ContexteEditeurPnjBase";
import {
  obtenirBadgeCategorie,
  obtenirVarianteFp,
  analyserFp,
} from "../../utilitaires/utilitairesPnj";
import { trouverOccurrencesPnj } from "../../utilitaires/liaisonsDonnees";
import { estModeEditeur } from "../../services/api";
import {
  GrilleStatsPnj,
  InfoTypePnj,
  CombatPnj,
  CapacitesPnj,
  JetsSauvegardePnj,
  AttributsPnj,
  CompetencesPnj,
  InfoPnj,
  OccurrencesPnj,
  DetailsPnj,
  BuffsPnj,
  OgasPnj,
  TactiquePnj,
} from "./sections";

/**
 * Composant ModaleDetailsPnj - Modale affichant les détails complets d'un PNJ
 */
function ModaleDetailsPnj({ pnj, estOuverte, fermer }) {
  const { ouvrirEditeur } = utiliserEditeurPnj();

  if (!pnj) return null;

  const fp = pnj.fp;
  const occurrences = trouverOccurrencesPnj(pnj.id);
  const badgeCategorie = obtenirBadgeCategorie(pnj.category);

  const badge = (
    <>
      {badgeCategorie && (
        <div
          className={cc("px-3 py-1 text-sm border", badgeCategorie.nomClasse)}
        >
          {badgeCategorie.label}
        </div>
      )}
      {(pnj.niveau || fp) && (
        <Etiquette
          variante={obtenirVarianteFp(pnj)}
          nomClasse="text-lg font-bold ml-auto"
        >
          {pnj.niveau ? `Niv ${analyserFp(pnj.niveau)}` : `FP ${fp}`}
        </Etiquette>
      )}
      {estModeEditeur() && (
        <button
          onClick={() => { fermer(); ouvrirEditeur(pnj); }}
          className="btn-forge flex items-center gap-1.5 text-content text-xs !px-3 !py-1.5"
          title="Éditer ce personnage"
        >
          <Pencil size={14} />
          Éditer
        </button>
      )}
    </>
  );

  return (
    <Modale
      estOuverte={estOuverte}
      fermer={fermer}
      titre={pnj.nom}
      sousTitre={pnj.role || pnj.description}
      badge={badge}
    >
      <GrilleStatsPnj pnj={pnj} />
      <InfoTypePnj pnj={pnj} />
      <BuffsPnj pnj={pnj} />
      <OgasPnj pnj={pnj} />
      <CombatPnj pnj={pnj} />
      <CapacitesPnj pnj={pnj} />
      <TactiquePnj pnj={pnj} />
      <JetsSauvegardePnj pnj={pnj} />
      <AttributsPnj pnj={pnj} />
      <CompetencesPnj pnj={pnj} />
      <InfoPnj pnj={pnj} />
      <OccurrencesPnj occurrences={occurrences} />
      <DetailsPnj details={pnj.details} />
    </Modale>
  );
}

export default ModaleDetailsPnj;
