import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Store, MapPin, Coins, Tag } from "lucide-react";
import TitreSection from "../interface/TitreSection";
import Carte from "../interface/Carte";
import { utiliserModalePnj } from "../../contextes/ContexteModalePnj";
import { trouverPnjParId, creerLienUnivers } from "../../utilitaires/liaisonsDonnees";
import { urlImage } from "../../utilitaires/urlImage";

const IDS_MARCHANDS = [
  "armurier_dvalin",
  "armurier_garrek",
  "herboriste_fendrel",
  "marchande_marenne",
  "libraire_penne",
  "marchande_devotion",
  "colporteur_vaneck",
  "marchand_orthen",
  "yselle_vaurin",
  "odran_bellec",
  "brandin_forgeron",
  "voldrin_changeur",
  "aubergiste_pic_brise",
  "ursula_fraternite",
];

function VueMarchands() {
  const { ouvrirFichePnj } = utiliserModalePnj();

  const marchandsParZone = useMemo(() => {
    const groupes = new Map();

    for (const id of IDS_MARCHANDS) {
      const resultat = trouverPnjParId(id);
      if (!resultat || !resultat.pnj) continue;

      const nomZone = resultat.zone?.nom || "Autres";
      if (!groupes.has(nomZone)) {
        groupes.set(nomZone, {
          zone: resultat.zone,
          marchands: [],
        });
      }
      groupes.get(nomZone).marchands.push({
        pnj: resultat.pnj,
        lieu: resultat.lieu,
        zone: resultat.zone,
      });
    }

    return [...groupes.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <TitreSection
        titre="Marchands & Commerçants"
        icone={Store}
        sousTitre="Où acheter, vendre et troquer à Valombre — du forgeron nain au colporteur de la Place"
      />

      {marchandsParZone.map(([nomZone, groupe]) => (
        <section key={nomZone} className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent-light" />
            <h3 className="text-sm uppercase tracking-widest text-accent-light font-semibold">
              {nomZone}
            </h3>
            <span className="text-xs text-content-muted">
              {groupe.marchands.length} marchand{groupe.marchands.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupe.marchands.map(({ pnj, lieu, zone }) => (
              <CarteMarchand
                key={pnj.id}
                pnj={pnj}
                lieu={lieu}
                zone={zone}
                auClic={() => ouvrirFichePnj(pnj.id)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function CarteMarchand({ pnj, lieu, zone, auClic }) {
  const lien = zone && lieu
    ? creerLienUnivers({ idZone: zone.id, idLieu: lieu.id, idPnj: pnj.id })
    : null;

  return (
    <Carte
      className="cursor-pointer transition-all duration-200 hover:border-accent-light/40"
      onClick={auClic}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {pnj.image ? (
            <img
              src={urlImage(pnj.image)}
              alt={pnj.nom}
              className="w-16 h-16 rounded-lg border-2 border-surface-border/40 object-cover shadow-sm"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className="w-16 h-16 rounded-lg border-2 border-surface-border/40 items-center justify-center shadow-sm bg-gradient-to-br from-surface-overlay to-surface"
            style={{ display: pnj.image ? "none" : "flex" }}
          >
            <Store size={20} className="text-accent-light" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-serif text-accent-light font-bold tracking-wide leading-tight">
            {pnj.nom}
          </h4>
          {lieu && (
            <p className="text-xs text-content-muted mt-0.5 flex items-center gap-1">
              <MapPin size={10} className="flex-shrink-0" />
              {lieu.nom}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-surface-border/40 space-y-2">
        {pnj.role && (
          <p className="text-xs text-content-secondary leading-relaxed">
            {pnj.role}
          </p>
        )}
        {pnj.notes && (
          <p className="text-xs text-content-muted leading-relaxed">
            {pnj.notes}
          </p>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {(pnj.etiquettes || []).slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] px-1.5 py-0.5 bg-surface/60 border border-surface-border text-content-secondary flex items-center gap-1"
            >
              <Tag size={8} />{tag}
            </span>
          ))}
        </div>
        {lien && (
          <Link
            to={lien}
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] text-accent hover:text-accent-light flex items-center gap-1 flex-shrink-0 ml-2"
          >
            <MapPin size={10} /> Voir sur la carte
          </Link>
        )}
      </div>
    </Carte>
  );
}

export default VueMarchands;
