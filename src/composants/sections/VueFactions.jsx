import { Link } from "react-router-dom";
import {
  Shield,
  Target,
  Swords,
  Users as IconeUtilisateurs,
  Scroll,
} from "lucide-react";
import { factionsData } from "../../data/personnages";
import TitreSection from "../interface/TitreSection";
import Carte from "../interface/Carte";
import {
  trouverPnjParId,
  creerLienUnivers,
} from "../../utilitaires/liaisonsDonnees";

/**
 * Composant VueFactions - Affiche les factions du jeu
 */
function VueFactions() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <TitreSection
        titre="Factions"
        icone={Shield}
        sousTitre="Les forces en présence à Valombre"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {factionsData.map((faction) => (
          <Carte
            key={faction.name}
            className={faction.color}
            titre={faction.name}
            sousTitre={faction.type}
            icone={
              faction.icon && (
                <faction.icon
                  size={20}
                  className={faction.color.split(" ")[0]}
                />
              )
            }
            variante="simple"
          >
            <p className="text-sm text-content-secondary leading-relaxed">
              {faction.desc}
            </p>

            {/* Objectifs */}
            {faction.objectifs && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wide text-content-muted flex items-center gap-1.5">
                  <Target size={14} />
                  Objectifs
                </h4>
                <div className="space-y-1.5 text-xs">
                  <p>
                    <span className="font-semibold text-accent-light">
                      Court terme :{" "}
                    </span>
                    <span className="text-content-secondary">
                      {faction.objectifs.court_terme}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-accent-light">
                      Long terme :{" "}
                    </span>
                    <span className="text-content-secondary">
                      {faction.objectifs.long_terme}
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Alliances et Rivalités */}
            {faction.alliances?.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wide text-content-muted flex items-center gap-1.5">
                  <Swords size={14} />
                  Relations
                </h4>
                <div className="space-y-1">
                  {faction.alliances.map((rel) => (
                    <div key={`${rel.type}-${rel.faction}`} className="flex items-start gap-2 text-xs">
                      <span
                        className={`px-1.5 py-0.5 text-[10px] font-semibold uppercase ${
                          rel.type === "alliance"
                            ? "bg-green-900/40 text-green-300"
                            : rel.type === "rivalite"
                              ? "bg-orange-900/40 text-orange-300"
                              : rel.type === "conflit"
                                ? "bg-red-900/40 text-red-300"
                                : "bg-gray-900/40 text-gray-300"
                        }`}
                      >
                        {rel.type}
                      </span>
                      <div className="flex-1">
                        <span className="font-semibold text-accent-light">
                          {rel.faction}
                        </span>
                        <span className="text-content-muted">
                          {" "}
                          — {rel.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Forces militaires */}
            {faction.forces_militaires && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wide text-content-muted flex items-center gap-1.5">
                  <IconeUtilisateurs size={14} />
                  Forces Militaires
                </h4>
                <div className="space-y-1.5 text-xs">
                  <p>
                    <span className="font-semibold text-accent-light">
                      Effectifs :{" "}
                    </span>
                    <span className="text-content-secondary">
                      {faction.forces_militaires.effectifs}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-accent-light">
                      Équipement :{" "}
                    </span>
                    <span className="text-content-secondary">
                      {faction.forces_militaires.equipement}
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Membres clés */}
            {faction.membres_cles?.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wide text-content-muted flex items-center gap-1.5">
                  <Scroll size={14} />
                  Membres Clés
                </h4>
                <ul className="space-y-1 text-xs">
                  {faction.membres_cles.map((membre) => {
                    const resultat = trouverPnjParId(membre.id);
                    const lien =
                      resultat?.zone && resultat?.lieu
                        ? creerLienUnivers({
                            zoneId: resultat.zone.id,
                            locId: resultat.lieu.id,
                            npcId: membre.id,
                          })
                        : null;

                    return (
                      <li key={membre.id} className="flex items-start gap-2">
                        {lien ? (
                          <Link
                            to={lien}
                            className="text-accent-light hover:text-accent font-semibold"
                          >
                            {membre.nom}
                          </Link>
                        ) : (
                          <span className="text-accent-light font-semibold">
                            {membre.nom}
                          </span>
                        )}
                        <span className="text-content-muted">
                          — {membre.role}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Carte>
        ))}
      </div>
    </div>
  );
}

export default VueFactions;
