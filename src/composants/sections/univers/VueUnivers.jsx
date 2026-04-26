import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Map,
  Quote,
  Cloud,
  Hexagon,
  History,
  KeyRound,
  Palette,
  Settings,
  AlertTriangle,
  Users,
  AlertCircle,
} from "lucide-react";
import { universeData } from "../../../data/universe/universe";
import TitreSection from "../../interface/TitreSection";
import Carte from "../../interface/Carte";
import CarteZone from "./CarteZone";
import DetailsZone from "./DetailsZone";
import DetailsLieux from "./DetailsLieux";
import StatsUnivers from "./StatsUnivers";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { obtenirPnjPourLieu } from "../../../utilitaires/liaisonsDonnees";

const ICONES_SECTIONS = {
  cloud: Cloud,
  spiral: Hexagon,
  history: History,
  secrets: KeyRound,
  settings: Settings,
  warning: AlertTriangle,
  groups: Users,
  priority_high: AlertCircle,
};

function VueUnivers() {
  const zones = universeData.zones || [];
  const [idZoneSelectionnee, definirIdZone] = utiliserEtatPersistant(
    "universe-zone",
    zones[0]?.id || null,
  );
  const [idLieuSelectionne, definirIdLieu] = utiliserEtatPersistant(
    "universe-loc",
    null,
  );
  const [idPnjSelectionne, definirIdPnj] = utiliserEtatPersistant(
    "universe-pnj",
    null,
  );
  const [parametresRecherche] = useSearchParams();

  const zoneSelectionnee =
    zones.find((z) => z.id === idZoneSelectionnee) || zones[0] || null;
  const lieux = zoneSelectionnee?.locations || [];

  useEffect(() => {
    const paramZone = parametresRecherche.get("zone");
    const paramLieu = parametresRecherche.get("loc");
    const paramPnj = parametresRecherche.get("pnj");

    if (paramZone) {
      const zone = zones.find((z) => String(z.id) === paramZone);
      if (zone) {
        definirIdZone(zone.id);
        if (paramLieu) {
          const lieu = zone.locations?.find((l) => String(l.id) === paramLieu);
          definirIdLieu(lieu ? lieu.id : null);
          if (lieu && paramPnj) {
            const pnjLieu = obtenirPnjPourLieu(lieu);
            const pnj = pnjLieu.find((n) => String(n.id) === paramPnj);
            definirIdPnj(pnj ? pnj.id : null);
          } else {
            definirIdPnj(null);
          }
        } else {
          definirIdLieu(null);
          definirIdPnj(null);
        }
      }
    }
  }, [parametresRecherche, zones, definirIdZone, definirIdLieu, definirIdPnj]);

  const gererSelectionZone = (idZone) => {
    definirIdZone(idZone);
    definirIdLieu(null);
    definirIdPnj(null);
  };

  const gererSelectionLieu = (idLieu) => {
    definirIdLieu(idLieu);
    definirIdPnj(null);
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <TitreSection
        titre={universeData.title}
        icone={Map}
        sousTitre={universeData.intro}
      />

      {universeData.quote && (
        <div className="relative bg-gradient-to-r from-surface/80 via-surface/60 to-surface/80 p-4 sm:p-6 border border-surface-border">
          <Quote className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 text-accent-dark/30" />
          <blockquote className="pl-8 sm:pl-10 pr-2 sm:pr-4">
            <p className="text-sm sm:text-lg italic text-content-primary font-serif">
              "{universeData.quote.text}"
            </p>
            <footer className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-accent-light">
              — {universeData.quote.author}
            </footer>
          </blockquote>
        </div>
      )}

      <StatsUnivers zones={zones} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {universeData.sections.map((section) => {
          const IconeSection = ICONES_SECTIONS[section.icon] || Cloud;
          return (
            <Carte
              key={section.title}
              className="group hover:border-accent-muted transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent-surface border border-accent-muted">
                  <IconeSection className="w-5 h-5 text-accent-light" />
                </div>
                <h3 className="text-lg font-serif text-accent-light">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.content.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-content-secondary"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-accent-dark block flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Carte>
          );
        })}
      </div>

      {universeData.themes && universeData.themes.length > 0 && (
        <Carte>
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-5 h-5 text-accent-light" />
            <h3 className="text-lg font-serif text-accent-light">
              Thèmes de la Campagne
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {universeData.themes.map((theme) => (
              <div
                key={theme.name}
                className="bg-surface/50 p-3 border border-surface-border hover:border-accent-muted transition-colors"
              >
                <h4 className="font-medium text-content-primary text-sm mb-1">
                  {theme.name}
                </h4>
                <p className="text-xs text-content-muted">{theme.desc}</p>
              </div>
            ))}
          </div>
        </Carte>
      )}

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
        <h2 className="text-base sm:text-xl font-serif text-accent-light whitespace-nowrap">
          Explorer les Zones
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {zones.map((zone) => (
          <CarteZone
            key={zone.id}
            zone={zone}
            estSelectionnee={idZoneSelectionnee === zone.id}
            auClic={gererSelectionZone}
          />
        ))}
      </div>

      {zoneSelectionnee && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-1">
            <DetailsZone zone={zoneSelectionnee} />
          </div>
          <div className="lg:col-span-2">
            <DetailsLieux
              lieux={lieux}
              idLieuSelectionne={idLieuSelectionne}
              auClicLieu={gererSelectionLieu}
              zoneId={zoneSelectionnee.id}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default VueUnivers;
