import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Clapperboard, Clock, Users } from "lucide-react";
import { trouverOccurrencesLieu } from "../../utilitaires/liaisonsDonnees";
import { obtenirPnjParIds } from "../../data/npcRegistry";
import { obtenirEffetsFronts } from "../../data/scenarios/effetsFronts";
import { frontsData } from "../../data/scenarios/fronts";

const nomFrontParId = new Map(frontsData.map((f) => [f.id, f.nom]));

function ApparitionsLieu({ lieuId }) {
  const occurrences = useMemo(
    () => (lieuId ? trouverOccurrencesLieu(lieuId) : []),
    [lieuId],
  );

  if (occurrences.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs uppercase font-bold text-content-subtle tracking-wider">
        <Clapperboard size={14} />
        <span>Utilisé dans {occurrences.length} scène{occurrences.length > 1 ? "s" : ""}</span>
      </div>

      <div className="space-y-2">
        {occurrences.map((occ, i) => {
          const pnjScene = obtenirPnjParIds([
            ...(occ.idsPnj || []),
            ...((occ.idsPnjImpliques || []).filter((id) => !(occ.idsPnj || []).includes(id))),
          ]);
          const effets = obtenirEffetsFronts(occ.idScene);
          const frontIds = [...new Set(effets.map((e) => e.frontId))];

          return (
            <div
              key={`${occ.idScene}-${i}`}
              className="border border-surface-border bg-surface/40 p-2.5 space-y-2"
            >
              <Link
                to={`/scenarios?scenario=${occ.idScenario}&scene=${occ.idScene}`}
                className="block group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-content-subtle font-mono text-[10px] flex-shrink-0">
                    {occ.numeroActe}.{occ.numeroScene}
                  </span>
                  <span className="text-sm text-content-secondary group-hover:text-accent-light transition-colors font-serif font-bold">
                    {occ.titreScene}
                  </span>
                  {occ.typeScene && (
                    <span className="text-[9px] px-1.5 py-0.5 border border-accent-muted/30 text-accent-muted uppercase tracking-wide flex-shrink-0">
                      {occ.typeScene}
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-content-subtle mt-0.5 ml-6">
                  {occ.titreScenario} — {occ.titreActe}
                </div>
              </Link>

              {pnjScene.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap ml-6">
                  <Users size={11} className="text-blue-400 flex-shrink-0" />
                  {pnjScene.map((pnj) => (
                    <span
                      key={pnj.id}
                      className={`text-[10px] px-1.5 py-0.5 border ${
                        pnj.categorie === "ennemis"
                          ? "border-red-500/40 text-red-400/80"
                          : "border-blue-500/40 text-blue-400/80"
                      }`}
                    >
                      {pnj.nom}
                    </span>
                  ))}
                </div>
              )}

              {frontIds.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap ml-6">
                  <Clock size={11} className="text-amber-400 flex-shrink-0" />
                  {frontIds.map((fid) => (
                    <span
                      key={fid}
                      className="text-[10px] px-1.5 py-0.5 border border-amber-700/40 text-amber-300/80 bg-amber-900/10"
                    >
                      {nomFrontParId.get(fid) || fid}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApparitionsLieu;
