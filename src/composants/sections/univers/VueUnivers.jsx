import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Map,
  Quote,
  BookOpen,
  Cloud,
  Hexagon,
  History,
  KeyRound,
  Palette,
  Settings,
  AlertTriangle,
  Users,
  AlertCircle,
  Scale,
  Store,
} from "lucide-react";
import { universeData } from "../../../data/universe/universe";
import TitreSection from "../../interface/TitreSection";
import Carte from "../../interface/Carte";
import CarteZone from "./CarteZone";
import DetailsZone from "./DetailsZone";
import DetailsLieux from "./DetailsLieux";
import StatsUnivers from "./StatsUnivers";
import CarteVille from "./CarteVille";
import JusticeUnivers from "./JusticeUnivers";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { obtenirPnjPourLieu } from "../../../utilitaires/liaisonsDonnees";
import { cc } from "../../../utilitaires/combinerClasses";
import VueMarchands from "../VueMarchands";

const ONGLETS = [
  { id: "apercu", etiquette: "Vue d'ensemble", icone: Cloud },
  { id: "histoire", etiquette: "Histoire de Thade", icone: BookOpen },
  { id: "zones", etiquette: "Carte & Zones", icone: Map },
  { id: "justice", etiquette: "Justice", icone: Scale },
  { id: "marchands", etiquette: "Marchands", icone: Store },
];

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
  const zones = useMemo(() => universeData.zones || [], []);
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
  const [ongletActif, definirOngletActif] = utiliserEtatPersistant(
    "universe-tab",
    "apercu",
  );
  const [parametresRecherche] = useSearchParams();

  const zoneSelectionnee =
    zones.find((z) => z.id === idZoneSelectionnee) || zones[0] || null;
  const lieux = zoneSelectionnee?.emplacements || [];

  useEffect(() => {
    const paramZone = parametresRecherche.get("zone");
    const paramLieu = parametresRecherche.get("loc");
    const paramPnj = parametresRecherche.get("pnj");

    if (paramZone) {
      const zone = zones.find((z) => String(z.id) === paramZone);
      if (zone) {
        definirOngletActif("zones");
        definirIdZone(zone.id);
        if (paramLieu) {
          const lieu = zone.emplacements?.find((l) => String(l.id) === paramLieu);
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
  }, [
    parametresRecherche,
    zones,
    definirIdZone,
    definirIdLieu,
    definirIdPnj,
    definirOngletActif,
  ]);

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
        titre={universeData.titre}
        icone={Map}
        sousTitre={universeData.introduction}
      />

      <StatsUnivers zones={zones} />

      <div className="flex flex-wrap gap-1 border-b border-surface-border">
        {ONGLETS.map(({ id, etiquette, icone: Icone }) => (
          <button
            key={id}
            type="button"
            onClick={() => definirOngletActif(id)}
            className={cc(
              "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 -mb-px border-b-2",
              ongletActif === id
                ? "text-accent-light border-accent"
                : "text-content-secondary border-transparent hover:text-accent-light",
            )}
          >
            <Icone className="w-4 h-4" />
            <span className="tracking-wide">{etiquette}</span>
          </button>
        ))}
      </div>

      {ongletActif === "apercu" && (
        <div className="space-y-6 sm:space-y-8">
          {universeData.citation && (
            <div className="relative bg-gradient-to-r from-surface/80 via-surface/60 to-surface/80 p-4 sm:p-6 border border-surface-border">
              <Quote className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 text-accent-dark/30" />
              <blockquote className="pl-8 sm:pl-10 pr-2 sm:pr-4">
                <p className="text-sm sm:text-lg italic text-content-primary font-serif">
                  "{universeData.citation.text}"
                </p>
                <footer className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-accent-light">
                  — {universeData.citation.author}
                </footer>
              </blockquote>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {universeData.sections.map((section) => {
          const IconeSection = ICONES_SECTIONS[section.icone] || Cloud;
          return (
            <Carte
              key={section.titre}
              className="group hover:border-accent-muted transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent-surface border border-accent-muted">
                  <IconeSection className="w-5 h-5 text-accent-light" />
                </div>
                <h3 className="text-lg font-serif text-accent-light">
                  {section.titre}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.contenu.map((point, i) => (
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
                    key={theme.nom}
                    className="bg-surface/50 p-3 border border-surface-border hover:border-accent-muted transition-colors"
                  >
                    <h4 className="font-medium text-content-primary text-sm mb-1">
                      {theme.nom}
                    </h4>
                    <p className="text-xs text-content-muted">{theme.description}</p>
                  </div>
                ))}
              </div>
            </Carte>
          )}
        </div>
      )}

      {ongletActif === "histoire" && universeData.histoireThade && (
        <Carte className="relative overflow-hidden">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-accent-surface border border-accent-muted">
              <BookOpen className="w-5 h-5 text-accent-light" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-accent-light tracking-wide">
              {universeData.histoireThade.titre}
            </h3>
          </div>
          {universeData.histoireThade.sousTitre && (
            <p className="text-content-muted italic text-sm sm:text-base mb-6 max-w-3xl">
              {universeData.histoireThade.sousTitre}
            </p>
          )}

          <div className="space-y-8">
            {universeData.histoireThade.chapitres.map((chapitre) => (
              <article key={chapitre.titre} className="relative">
                <h4 className="text-base sm:text-lg font-serif text-content-primary mb-3 pb-2 border-b border-surface-border">
                  {chapitre.titre}
                </h4>
                <div className="space-y-3 text-sm sm:text-base text-content-secondary leading-relaxed">
                  {chapitre.paragraphes.map((paragraphe, i) => (
                    <p key={i}>{paragraphe}</p>
                  ))}
                  {chapitre.citation && (
                    <blockquote className="relative my-4 pl-6 sm:pl-8 pr-2 py-2 border-l-2 border-accent-dark/60 bg-surface/40">
                      <Quote className="absolute top-1 left-1 w-4 h-4 text-accent-dark/40" />
                      <p className="italic text-content-primary font-serif">
                        {chapitre.citation}
                      </p>
                    </blockquote>
                  )}
                  {chapitre.apresCitation &&
                    chapitre.apresCitation.map((paragraphe, i) => (
                      <p key={`after-${i}`}>{paragraphe}</p>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </Carte>
      )}

      {ongletActif === "zones" && (
        <div className="space-y-6 sm:space-y-8">
      <div className="border border-surface-border bg-surface/30 p-3 sm:p-5">
        <CarteVille
          zones={zones}
          idZoneSelectionnee={idZoneSelectionnee}
          auClic={gererSelectionZone}
        />
      </div>

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
              idZone={zoneSelectionnee.id}
            />
          </div>
        </div>
      )}
        </div>
      )}

      {ongletActif === "justice" && (
        <JusticeUnivers justice={universeData.justice} />
      )}

      {ongletActif === "marchands" && (
        <VueMarchands />
      )}
    </div>
  );
}

export default VueUnivers;
