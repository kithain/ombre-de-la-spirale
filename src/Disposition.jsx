import { useEffect, useState, lazy, Suspense } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  BookOpen,
  Map,
  Shield,
  Skull,
  ScrollText,
  BookMarked,
  Menu,
  X,
} from "lucide-react";
import NavigationDesktop from "./composants/interface/NavigationDesktop";
import NavigationMobile from "./composants/interface/NavigationMobile";
import LimiteErreur from "./composants/interface/LimiteErreur";
import { utiliserRecherche } from "./hooks/utiliserRecherche";
import { FournisseurModalePnj } from "./contextes/ContexteModalePnj";
import { FournisseurModaleLieu } from "./contextes/ContexteModaleLieu";
import { utiliserEtatPersistant } from "./hooks/utiliserEtatPersistant";

// ─── Chargement conditionnel des modules éditeur ─────────────────────────────
// En build viewer (VITE_APP_MODE=viewer), Vite substitue la variable d'env par
// la chaîne littérale "viewer" → Rollup élimine les branches `lazy(…)` et les
// dynamic imports associés → zéro octet de code éditeur dans le bundle viewer.
const estEditeur = import.meta.env.VITE_APP_MODE === "editeur";

const FournisseurEditeurScenario = estEditeur
  ? lazy(() => import("./contextes/ContexteEditeurScenario").then((m) => ({ default: m.FournisseurEditeurScenario })))
  : ({ children }) => children;

const FournisseurEditeurPnj = estEditeur
  ? lazy(() => import("./contextes/ContexteEditeurPnj").then((m) => ({ default: m.FournisseurEditeurPnj })))
  : ({ children }) => children;

const FournisseurEditeurLieu = estEditeur
  ? lazy(() => import("./contextes/ContexteEditeurLieu").then((m) => ({ default: m.FournisseurEditeurLieu })))
  : ({ children }) => children;

const FournisseurEditeurZone = estEditeur
  ? lazy(() => import("./contextes/ContexteEditeurZone").then((m) => ({ default: m.FournisseurEditeurZone })))
  : ({ children }) => children;

// EditeurScene : default export, rendu null en mode viewer
const EditeurScene = estEditeur
  ? lazy(() => import("./composants/scenes/EditeurScene"))
  : () => null;

const elementsNavigation = [
  { vers: "/univers", etiquette: "Univers", icone: Map },
  { vers: "/factions", etiquette: "Factions", icone: Shield },
  { vers: "/antagoniste", etiquette: "Antagoniste", icone: Skull },
  { vers: "/scenarios", etiquette: "Scénarios", icone: ScrollText },
  { vers: "/scenarios-annexes", etiquette: "Scénarios Annexes", icone: BookMarked },
];

/**
 * Compose une liste de fournisseurs (providers) en un composant unique.
 * Évite le « pyramid of doom » dans le JSX.
 * @param  {...React.ComponentType} fournisseurs - Composants Provider à imbriquer
 * @returns {React.ComponentType}
 */
function composerFournisseurs(...fournisseurs) {
  return function FournisseursComposes({ children }) {
    return fournisseurs.reduceRight(
      (acc, Fournisseur) => <Fournisseur>{acc}</Fournisseur>,
      children,
    );
  };
}

// Providers éditeur (lazy) — peuvent suspendre au premier render / HMR
const FournisseursEditeur = composerFournisseurs(
  FournisseurEditeurScenario,
  FournisseurEditeurPnj,
  FournisseurEditeurLieu,
  FournisseurEditeurZone,
);

// Providers modales — toujours disponibles, doivent envelopper le Suspense
const FournisseursModales = composerFournisseurs(
  FournisseurModalePnj,
  FournisseurModaleLieu,
);

/**
 * Composant Disposition - Layout principal de l'application
 * Gère la navigation, la recherche et le menu responsive
 */
function Disposition() {
  const { terme, definirTerme, resultats, effacer } = utiliserRecherche();
  const emplacement = useLocation();
  const naviguer = useNavigate();
  const [derniereRoute, definirDerniereRoute] = utiliserEtatPersistant(
    "derniere-route",
    null,
  );
  const [menuMobileOuvert, definirMenuMobileOuvert] = useState(false);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    definirMenuMobileOuvert(false);
  }, [emplacement.pathname]);

  useEffect(() => {
    if (emplacement.pathname !== "/") {
      definirDerniereRoute(emplacement.pathname + emplacement.search);
    }
  }, [emplacement, definirDerniereRoute]);

  useEffect(() => {
    if (
      emplacement.pathname === "/" &&
      derniereRoute &&
      derniereRoute !== "/"
    ) {
      naviguer(derniereRoute, { replace: true });
    }
  }, [emplacement.pathname, derniereRoute, naviguer]);

  const fermerMenu = () => definirMenuMobileOuvert(false);

  return (
    <div className="min-h-screen text-content">
      <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface/90 backdrop-blur-md">
        {/* Ligne décorative supérieure */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-dark/50 to-transparent" />

        <div className="mx-auto max-w-6xl px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo et titre */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative flex-shrink-0">
              {/* Cadre d'icône style forge */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative">
                <div className="absolute inset-0 border border-accent-dark/70 rotate-45" />
                <div className="absolute inset-0.5 bg-gradient-to-br from-accent-muted/30 to-surface" />
                <BookOpen
                  size={18}
                  className="absolute inset-0 m-auto text-accent sm:w-5 sm:h-5"
                />
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-content-subtle">
                Wiki de campagne
              </p>
              <h1 className="text-base sm:text-xl font-serif text-accent-light truncate tracking-wide">
                L&apos;Ombre de la Spirale
              </h1>
            </div>
          </div>

          {/* Desktop: Recherche + Navigation */}
          <NavigationDesktop
            elementsNavigation={elementsNavigation}
            terme={terme}
            definirTerme={definirTerme}
            resultats={resultats}
            effacer={effacer}
          />

          {/* Mobile: Bouton hamburger */}
          <button
            onClick={() => definirMenuMobileOuvert(!menuMobileOuvert)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center transition-colors group"
            aria-label="Menu"
          >
            <div className="absolute inset-0 border border-surface-border rotate-45 group-hover:border-accent-dark transition-colors" />
            <div className="absolute inset-1 bg-surface-raised" />
            {menuMobileOuvert ? (
              <X size={18} className="relative z-10" />
            ) : (
              <Menu size={18} className="relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile: Menu déroulant */}
        {menuMobileOuvert && (
          <NavigationMobile
            elementsNavigation={elementsNavigation}
            terme={terme}
            definirTerme={definirTerme}
            resultats={resultats}
            effacer={effacer}
            fermerMenu={fermerMenu}
          />
        )}
      </header>

      <main className="mx-auto max-w-6xl px-3 sm:px-6 py-6 sm:py-10">
        <LimiteErreur>
          <FournisseursModales>
            <Suspense fallback={null}>
              <FournisseursEditeur>
                <Outlet />
                <EditeurScene />
              </FournisseursEditeur>
            </Suspense>
          </FournisseursModales>
        </LimiteErreur>
      </main>
    </div>
  );
}

export default Disposition;
