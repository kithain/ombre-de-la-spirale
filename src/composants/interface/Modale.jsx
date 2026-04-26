import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";

/**
 * Composant Modale - Fenêtre modale avec overlay et gestion des événements
 */
function Modale({
  estOuverte,
  fermer,
  titre,
  sousTitre,
  badge,
  children,
  maxWidth = "max-w-4xl",
}) {
  const refModale = useRef();

  useEffect(() => {
    if (!estOuverte) return;

    const gererClicExterieur = (e) => {
      if (refModale.current && !refModale.current.contains(e.target)) {
        fermer();
      }
    };

    const gererEchap = (e) => {
      if (e.key === "Escape") {
        fermer();
      }
    };

    document.addEventListener("mousedown", gererClicExterieur);
    document.addEventListener("keydown", gererEchap);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", gererClicExterieur);
      document.removeEventListener("keydown", gererEchap);
      document.body.style.overflow = "";
    };
  }, [estOuverte, fermer]);

  if (!estOuverte) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={fermer}
      />

      <div className="relative min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div
          ref={refModale}
          className={cc(
            "relative bg-surface-raised shadow-lifted w-full overflow-hidden border border-surface-border",
            "max-h-[95vh] sm:max-h-[90vh]",
            maxWidth,
          )}
        >
          {/* Coins décoratifs */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-accent-dark/40" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-accent-dark/40" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-accent-dark/40" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-accent-dark/40" />

          {titre && (
            <div className="relative bg-gradient-to-r from-accent-light/20 to-accent-light/5 p-4 sm:p-6 border-b border-surface-border">
              <button
                onClick={fermer}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-surface/80 hover:bg-surface border border-surface-border transition-colors"
                aria-label="Fermer"
              >
                <X size={18} className="sm:w-5 sm:h-5 text-content" />
              </button>

              <div className="flex items-start justify-between pr-10 sm:pr-12">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <h1 className="text-lg sm:text-2xl font-serif text-accent-light font-bold">
                      {titre}
                    </h1>
                    {badge}
                  </div>
                  {sousTitre && (
                    <p className="text-sm sm:text-lg text-content-secondary italic line-clamp-2 sm:line-clamp-none">
                      {sousTitre}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className={cc(
              "p-3 sm:p-6 overflow-y-auto",
              titre
                ? "max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-200px)]"
                : "max-h-[95vh] sm:max-h-[90vh]",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Modale;
