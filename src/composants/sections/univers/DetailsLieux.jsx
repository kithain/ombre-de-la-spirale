import { Link } from "react-router-dom";
import Carte from "../../interface/Carte";
import { cc } from "../../../utilitaires/combinerClasses";
import { utiliserModalePnj } from "../../../contextes/ContexteModalePnj";
import { utiliserPnjLieu } from "../../../hooks/utiliserPnjLieu";

function DetailsLieux({ lieux, idLieuSelectionne, auClicLieu }) {
  const { ouvrirFichePnj } = utiliserModalePnj();
  const lieuSelectionne =
    lieux.find((lieu) => lieu.id === idLieuSelectionne) || lieux[0] || null;

  const { residents, visiteurs } = utiliserPnjLieu(lieuSelectionne);

  const CartePnj = ({ pnj, estResident }) => (
    <div className="bg-surface/50 border border-surface-border px-3 py-2 space-y-2">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-accent-light">{pnj.nom}</span>
            {pnj.categorie === "ennemis" && (
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
          {pnj.details.map((detail, index) => (
            <li key={index} className="flex gap-2 text-xs text-content-secondary">
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
            {pnj.occurrences.map((occ, index) => (
              <Link
                key={`${pnj.id}-${index}-${occ.titreScene || occ.titreScene}`}
                to={`/scenarios?scenario=${occ.idScenario || occ.idScenario}&scene=${encodeURIComponent(occ.idScene || occ.titreScene || occ.titreScene)}`}
                className="px-2 py-1 border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface/80 text-[10px] uppercase tracking-wide transition-colors"
                titre={`${occ.titreScenario || occ.titreScenario} · ${occ.titreActe || occ.titreActe} · ${occ.titreScene || occ.titreScene}`}
              >
                {occ.idScenario || occ.idScenario}.
                {occ.numeroActe || occ.numeroActe}.
                {occ.numeroScene || occ.numeroScene}
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
        <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4">
          Lieux marquants
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
                  <div className="font-semibold">{lieu.nom}</div>
                  <div className="text-xs text-content-muted">
                    {lieu.resume}
                  </div>
                </button>
              ))}
            </div>

            {lieuSelectionne && (
              <div className="space-y-4 text-sm text-content-secondary">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif text-accent">
                      {lieuSelectionne.nom}
                    </h4>
                  </div>
                  <p className="text-content-muted text-xs mb-1">
                    Détails du lieu
                  </p>
                  <ul className="space-y-1.5">
                    {lieuSelectionne.details?.map((detail, index) => (
                      <li key={index} className="flex gap-2">
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
            <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4">
              PNJ résidents
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
