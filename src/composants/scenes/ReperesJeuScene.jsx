import { Compass } from "lucide-react";
import SectionScene from "./SectionScene";

function ReperesJeuScene({ reperes }) {
  if (!reperes) return null;

  const { indice_indispensable, ne_pas_bloquer_sur_un_jet, question_dramatique } = reperes;

  const aContenu = indice_indispensable || ne_pas_bloquer_sur_un_jet || question_dramatique;
  if (!aContenu) return null;

  return (
    <SectionScene titre="Repères de jeu" nomClasse="bg-stone-900/20 border-stone-600/20">
      <div className="space-y-3 text-xs text-content-muted">
        {indice_indispensable && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Indice indispensable</span>
            <p className="mt-1 leading-relaxed">{indice_indispensable}</p>
          </div>
        )}
        {ne_pas_bloquer_sur_un_jet && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Ne pas bloquer sur un jet</span>
            <p className="mt-1 leading-relaxed">{ne_pas_bloquer_sur_un_jet}</p>
          </div>
        )}
        {question_dramatique && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Question dramatique</span>
            <p className="mt-1 leading-relaxed">{question_dramatique}</p>
          </div>
        )}
      </div>
    </SectionScene>
  );
}

export default ReperesJeuScene;
