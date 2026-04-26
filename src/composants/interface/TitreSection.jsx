import { cc } from "../../utilitaires/combinerClasses";

/**
 * Composant TitreSection - Titre de section avec icône et décoration
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.titre - Titre de la section
 * @param {React.ComponentType} proprietes.icone - Composant d'icône
 * @param {string} proprietes.sousTitre - Sous-titre de la section
 * @param {string} proprietes.nomClasse - Classes CSS additionnelles
 */
function TitreSection({ titre, icone: Icone = null, sousTitre = "", nomClasse = "" }) {
  return (
    <div className={cc("mb-6 sm:mb-8 pb-4 sm:pb-5 relative", nomClasse)}>
      {/* Ligne décorative avec ornement central */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface-border to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-px w-24 h-px bg-gradient-to-r from-transparent via-accent-dark to-transparent" />
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {Icone && (
          <div className="relative">
            {/* Cadre d'icône stylisé */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <div className="absolute inset-0 border-2 border-accent-dark/60 rotate-45" />
              <div className="absolute inset-1 bg-gradient-to-br from-surface-overlay to-surface" />
              <Icone
                className="absolute inset-0 m-auto text-accent w-5 h-5 sm:w-6 sm:h-6"
                aria-hidden="true"
              />
            </div>
          </div>
        )}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-content tracking-wide">
            {titre}
          </h2>
          {sousTitre && (
            <p className="text-content-muted mt-1 sm:mt-1.5 text-sm sm:text-base max-w-2xl">
              {sousTitre}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}



export default TitreSection;
