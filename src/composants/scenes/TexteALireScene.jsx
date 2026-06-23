import { BookOpen } from "lucide-react";
import SectionScene from "./SectionScene";

/**
 * Composant TexteALireScene - Encadré du texte à lire aux joueurs.
 * Affiché en évidence (fond contrasté, bordure marquée).
 *
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.texte - Texte à lire aux joueurs
 * @param {string} proprietes.declencheur - Déclencheur de la scène (optionnel)
 */
function TexteALireScene({ texte, declencheur }) {
  if (!texte && !declencheur) return null;

  return (
    <SectionScene titre="À lire aux joueurs" nomClasse="bg-surface-raised/80 border-accent-dark/40">
      <div className="space-y-2 text-sm">
        {declencheur && (
          <p className="text-xs text-content-subtle italic">
            <strong className="not-italic text-content-muted">Déclencheur :</strong> {declencheur}
          </p>
        )}
        {texte && (
          <div className="flex gap-2 items-start">
            <BookOpen className="w-4 h-4 mt-1 flex-shrink-0 text-accent-light" />
            <p className="whitespace-pre-line text-content leading-relaxed font-serif">
              {texte}
            </p>
          </div>
        )}
      </div>
    </SectionScene>
  );
}

export default TexteALireScene;
