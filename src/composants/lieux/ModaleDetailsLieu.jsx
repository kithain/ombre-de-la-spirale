import { Link } from "react-router-dom";
import { MapPin, User, Pencil } from "lucide-react";
import Modale from "../interface/Modale";
import { obtenirPnjParIds } from "../../data/npcRegistry";
import { trouverOccurrencesLieu } from "../../utilitaires/liaisonsDonnees";
import { utiliserModalePnj } from "../../contextes/ContexteModalePnj";
import { utiliserEditeurLieuContexte } from "../../contextes/ContexteEditeurLieuBase";
import { estModeEditeur } from "../../services/api";

/**
 * Composant ModaleDetailsLieu - Modale affichant les détails complets d'un lieu
 */
function ModaleDetailsLieu({ lieu, zone, estOuverte, fermer }) {
  const { ouvrirFichePnj } = utiliserModalePnj();
  const { ouvrirEditeurLieu } = utiliserEditeurLieuContexte();

  if (!lieu) return null;

  const residents = obtenirPnjParIds(lieu.npcIds || []);
  const occurrences = trouverOccurrencesLieu(lieu.id);

  const badge = (
    <>
      {zone && (
        <div className="px-3 py-1 text-sm border border-accent-muted text-accent-light bg-accent-surface">
          {zone.name}
        </div>
      )}
      {estModeEditeur() && (
        <button
          onClick={() => { fermer(); ouvrirEditeurLieu(lieu.id); }}
          className="btn-forge flex items-center gap-1.5 text-content text-xs !px-3 !py-1.5"
          title="Éditer ce lieu"
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
      titre={lieu.name}
      sousTitre={lieu.summary}
      badge={badge}
    >
      <div className="space-y-6">
        {/* Détails du lieu */}
        {lieu.details && lieu.details.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-content-muted font-semibold">
              Détails
            </h3>
            <ul className="space-y-1.5">
              {lieu.details.map((detail, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-content-secondary leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 bg-surface-border block flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* PNJ résidents */}
        {residents.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-content-muted font-semibold">
              PNJ résidents
            </h3>
            <div className="flex flex-wrap gap-2">
              {residents.map((pnj) => (
                <button
                  key={pnj.id}
                  type="button"
                  onClick={() => { fermer(); ouvrirFichePnj(pnj.id); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-surface-border text-sm text-content-secondary bg-surface/50 hover:border-accent-muted hover:text-accent-light transition-colors cursor-pointer"
                >
                  <User size={14} className="flex-shrink-0" />
                  <span>{pnj.nom || pnj.id}</span>
                  {pnj.est_ennemi && (
                    <span className="text-[10px] px-1.5 py-0.5 border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-wide">
                      Ennemi
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Occurrences dans les scénarios */}
        {occurrences.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-content-muted font-semibold">
              Apparitions dans les scénarios
            </h3>
            <div className="flex flex-wrap gap-2">
              {occurrences.map((occ, idx) => (
                <Link
                  key={`${lieu.id}-${idx}-${occ.titreScene}`}
                  to={`/scenarios?scenario=${occ.idScenario}&scene=${encodeURIComponent(occ.titreScene)}`}
                  onClick={fermer}
                  className="px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface/80 text-[10px] uppercase tracking-wide transition-colors"
                  title={`${occ.titreScenario} · ${occ.titreActe} · ${occ.titreScene}`}
                >
                  {occ.idScenario}.{occ.numeroActe}.{occ.numeroScene}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modale>
  );
}

export default ModaleDetailsLieu;
