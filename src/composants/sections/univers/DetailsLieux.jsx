import { Link } from "react-router-dom";
import { Pencil, Plus } from "lucide-react";
import Carte from "../../interface/Carte";
import { cc } from "../../../utilitaires/combinerClasses";
import { utiliserModalePnj } from "../../../contextes/ContexteModalePnj";
import { utiliserEditeurPnj } from "../../../contextes/ContexteEditeurPnjBase";
import { utiliserEditeurLieuContexte } from "../../../contextes/ContexteEditeurLieuBase";
import { utiliserPnjLieu } from "../../../hooks/utiliserPnjLieu";
import { estModeEditeur } from "../../../services/api";

function DetailsLieux({ lieux, idLieuSelectionne, auClicLieu, zoneId }) {
  const { ouvrirFichePnj } = utiliserModalePnj();
  const { ouvrirEditeurLieu, creerNouveauLieu } = utiliserEditeurLieuContexte();
  const { creerNouveauPnj } = utiliserEditeurPnj();
  const modeEdition = estModeEditeur();
  const lieuSelectionne =
    lieux.find((loc) => loc.id === idLieuSelectionne) || lieux[0] || null;

  const { residents, visiteurs } = utiliserPnjLieu(lieuSelectionne);

  const CartePnj = ({ pnj, estResident }) => (
    <div className="bg-surface/50 border border-surface-border px-3 py-2 space-y-2">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-accent-light">{pnj.nom}</span>
            {pnj.est_ennemi && (
              <span className="text-[10px] px-1.5 py-0.5 border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-wide">
                Ennemi
              </span>
            )}
          </div>
          {pnj.role && <p className="text-xs text-content-muted">{pnj.role}</p>}
        </div>
        {pnj.id && (
          <button
            type="button"
            onClick={() => ouvrirFichePnj(pnj.id)}
            className="text-[10px] px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:border-accent transition-colors cursor-pointer"
          >
            Fiche
          </button>
        )}
      </div>

      {estResident && pnj.details && pnj.details.length > 0 && (
        <ul className="space-y-1 mt-2">
          {pnj.details.map((detail, idx) => (
            <li key={idx} className="flex gap-2 text-xs text-content-secondary">
              <span className="mt-1 w-1 h-1 bg-surface-border block flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {pnj.occurrences && pnj.occurrences.length > 0 && (
        <div className="pt-1">
          <p className="text-[10px] uppercase tracking-widest text-content-muted mb-1.5">
            Apparitions dans les scénarios
          </p>
          <div className="flex flex-wrap gap-2">
            {pnj.occurrences.map((occ, idx) => (
              <Link
                key={`${pnj.id}-${idx}-${occ.titreScene || occ.sceneTitle}`}
                to={`/scenarios?scenario=${occ.idScenario || occ.scenarioId}&scene=${encodeURIComponent(occ.titreScene || occ.sceneTitle)}`}
                className="px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface/80 text-[10px] uppercase tracking-wide transition-colors"
                title={`${occ.titreScenario || occ.scenarioTitle} · ${occ.titreActe || occ.actTitle} · ${occ.titreScene || occ.sceneTitle}`}
              >
                {occ.idScenario || occ.scenarioId}.
                {occ.numeroActe || occ.actNumber}.
                {occ.numeroScene || occ.sceneNumber}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <Carte>
        <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4 flex items-center justify-between">
          <span>Lieux marquants</span>
          {modeEdition && zoneId && (
            <button
              type="button"
              onClick={() => creerNouveauLieu(zoneId)}
              className="btn-forge flex items-center gap-1 text-content text-[10px] !px-2 !py-1 normal-case tracking-normal font-sans"
              title="Ajouter un lieu dans cette zone"
            >
              <Plus size={12} />
              Lieu
            </button>
          )}
        </h3>

        {lieux.length > 0 ? (
          <>
            <div className="space-y-2 mb-4">
              {lieux.map((lieu) => (
                <button
                  key={lieu.id}
                  onClick={() => auClicLieu(lieu.id)}
                  className={cc(
                    "w-full text-left px-3 py-2 border text-sm font-serif transition-colors",
                    lieuSelectionne && lieuSelectionne.id === lieu.id
                      ? "bg-surface-raised border-accent-dark text-accent-light"
                      : "bg-surface/50 border-surface-border text-content-secondary hover:border-surface-border",
                  )}
                >
                  <div className="font-semibold">{lieu.name}</div>
                  <div className="text-xs text-content-muted line-clamp-1">
                    {lieu.summary}
                  </div>
                </button>
              ))}
            </div>

            {lieuSelectionne && (
              <div className="space-y-4 text-sm text-content-secondary">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif text-accent">
                      {lieuSelectionne.name}
                    </h4>
                    {modeEdition && (
                      <button
                        type="button"
                        onClick={() => ouvrirEditeurLieu(lieuSelectionne.id)}
                        className="btn-forge flex items-center gap-1.5 text-content text-xs !px-2.5 !py-1"
                        title="Éditer ce lieu"
                      >
                        <Pencil size={12} />
                        Éditer
                      </button>
                    )}
                  </div>
                  <p className="text-content-muted text-xs mb-1">
                    Détails du lieu
                  </p>
                  <ul className="space-y-1.5">
                    {lieuSelectionne.details?.map((detail, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 w-1 h-1 bg-surface-border block flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-content-subtle">
            Aucun lieu défini pour cette zone.
          </p>
        )}
      </Carte>

      <Carte>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4 flex items-center justify-between">
              <span>PNJ résidents</span>
              {modeEdition && (
                <button
                  type="button"
                  onClick={() => creerNouveauPnj()}
                  className="btn-forge flex items-center gap-1 text-content text-[10px] !px-2 !py-1 normal-case tracking-normal font-sans"
                  title="Créer un nouveau PNJ"
                >
                  <Plus size={12} />
                  PNJ
                </button>
              )}
            </h3>
            {lieuSelectionne ? (
              residents.length > 0 ? (
                <div className="space-y-3">
                  {residents.map((pnj) => (
                    <CartePnj key={pnj.id} pnj={pnj} estResident={true} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-content-subtle">
                  Aucun résident répertorié.
                </p>
              )
            ) : (
              <p className="text-sm text-content-subtle">
                Sélectionnez un lieu.
              </p>
            )}
          </div>

          {visiteurs.length > 0 && (
            <div>
              <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4">
                PNJ visiteurs
              </h3>
              <div className="space-y-3">
                {visiteurs.map((visiteur) => (
                  <CartePnj
                    key={visiteur.id}
                    pnj={visiteur}
                    estResident={false}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Carte>
    </div>
  );
}


export default DetailsLieux;
