import { BookOpen, Feather, AlertCircle } from "lucide-react";

function FormatLivreScene({ format }) {
  if (!format) return null;

  return (
    <div className="border border-accent-muted/20 bg-surface-raised/30 p-3 sm:p-4 space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <BookOpen size={14} className="text-accent" />
        <h4 className="text-xs uppercase tracking-widest text-accent font-semibold">
          Format livre
        </h4>
      </div>

      {format.ambiance && (
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <Feather size={11} className="text-content-subtle" />
            <span className="text-[10px] uppercase tracking-wider text-content-subtle font-semibold">
              Ambiance
            </span>
          </div>
          <p className="text-sm text-content-secondary leading-relaxed font-serif whitespace-pre-line">
            {format.ambiance}
          </p>
        </div>
      )}

      {format.deroulement_narratif && (
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <BookOpen size={11} className="text-content-subtle" />
            <span className="text-[10px] uppercase tracking-wider text-content-subtle font-semibold">
              Déroulement narratif
            </span>
          </div>
          <p className="text-sm text-content-secondary leading-relaxed font-serif whitespace-pre-line">
            {format.deroulement_narratif}
          </p>
        </div>
      )}

      {format.notes_mj && (
        <div className="border-l-2 border-accent-muted/40 pl-3 py-1.5 bg-accent-surface/10">
          <div className="flex items-center gap-1.5 mb-1">
            <AlertCircle size={11} className="text-accent-muted" />
            <span className="text-[10px] uppercase tracking-wider text-accent-muted font-semibold">
              Notes MJ
            </span>
          </div>
          <p className="text-xs text-content-muted leading-relaxed italic whitespace-pre-line">
            {format.notes_mj}
          </p>
        </div>
      )}
    </div>
  );
}

export default FormatLivreScene;
