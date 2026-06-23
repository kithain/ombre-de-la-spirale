import { cc } from "../../utilitaires/combinerClasses";

/**
 * Composant Carte - Conteneur stylisé avec variantes thématiques
 */
function Carte({
  children,
  className,
  titre,
  sousTitre,
  icone,
  variante = "defaut",
  effetSurvol = true,
  ...props
}) {
  const variantes = {
    defaut: "card-rusted",
    forge: "card-forge",
    arcane: "card-arcane",
    simple: "bg-surface/80 border border-surface-border",
    plat: "bg-surface/40 border border-surface-border/50",
  };

  return (
    <div
      className={cc(
        "p-4 sm:p-5 relative overflow-hidden transition-all duration-300",
        variantes[variante] || variantes.defaut,
        effetSurvol && "hover-glow",
        className,
      )}
      {...props}
    >
      {/* Ligne décorative supérieure */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {(titre || icone) && (
        <div className="flex items-center gap-3 mb-4">
          {icone && (
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Fond hexagonal stylisé */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-overlay to-surface border border-surface-border rotate-45 transform scale-[0.85]" />
              <span className="relative z-10">{icone}</span>
            </div>
          )}
          {titre && (
            <div>
              <h3 className="text-sm font-serif text-content tracking-wide">
                {titre}
              </h3>
              {sousTitre && (
                <p className="text-[10px] uppercase tracking-[0.2em] text-content-subtle mt-0.5">
                  {sousTitre}
                </p>
              )}
            </div>
          )}
        </div>
      )}
      {children}

      {/* Coin décoratif bas-droite */}
      <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-accent-dark/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-accent-dark/40 to-transparent" />
      </div>
    </div>
  );
}


export default Carte;
