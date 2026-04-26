import { useEffect, useCallback } from "react";

/**
 * Composant VisionneuseLumineuse - Lightbox pour afficher des images en plein écran
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.src - URL de l'image
 * @param {string} proprietes.alt - Texte alternatif
 * @param {boolean} proprietes.estOuvert - État d'ouverture
 * @param {Function} proprietes.aLaFermeture - Callback de fermeture
 */
function VisionneuseLumineuse({ src, alt = "", estOuvert, aLaFermeture }) {
  const gererToucheAppuyee = useCallback(
    (e) => {
      if (e.key === "Escape") {
        aLaFermeture();
      }
    },
    [aLaFermeture],
  );

  useEffect(() => {
    if (estOuvert) {
      document.addEventListener("keydown", gererToucheAppuyee);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", gererToucheAppuyee);
      document.body.style.overflow = "";
    };
  }, [estOuvert, gererToucheAppuyee]);

  if (!estOuvert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={aLaFermeture}
    >
      <button
        type="button"
        onClick={aLaFermeture}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light transition-colors"
        aria-label="Fermer"
      >
        ×
      </button>
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain shadow-2xl"
        />
        {alt && (
          <p className="text-center text-white/70 text-sm mt-3 font-serif">
            {alt}
          </p>
        )}
      </div>
    </div>
  );
}


export default VisionneuseLumineuse;
