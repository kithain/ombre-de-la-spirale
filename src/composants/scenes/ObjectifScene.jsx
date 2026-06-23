import { BookmarkCheck } from "lucide-react";
import SectionScene from "./SectionScene";

function ObjectifScene({ objectif }) {
  if (!objectif) return null;

  return (
    <SectionScene titre="Objectif" nomClasse="bg-blue-900/10 border-blue-900/30">
      <div className="flex gap-2 items-start text-sm text-content-muted">
        <BookmarkCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
        <p className="whitespace-pre-line leading-relaxed">{objectif}</p>
      </div>
    </SectionScene>
  );
}

export default ObjectifScene;
