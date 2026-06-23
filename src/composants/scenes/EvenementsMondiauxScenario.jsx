import { Globe, Timer } from "lucide-react";
import SectionScene from "./SectionScene";

function EvenementsMondiauxScenario({ evenements }) {
  if (!evenements) return null;

  // Ancien format (tableau simple) → nouveau format (objet)
  let chronologie_inevitable = [];
  let consequences_echecs = [];
  if (Array.isArray(evenements)) {
    chronologie_inevitable = evenements;
  } else {
    chronologie_inevitable = evenements.chronologie_inevitable || [];
    consequences_echecs = evenements.consequences_echecs || [];
  }
  const aChrono = chronologie_inevitable.length > 0;
  const aConsequences = consequences_echecs.length > 0;

  if (!aChrono && !aConsequences) return null;

  return (
    <SectionScene titre="Ce qui se passe sans les PJ" nomClasse="bg-stone-900/30 border-stone-600/30">
      {aChrono && (
        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-wider text-content-muted font-semibold mb-2 flex items-center gap-1.5">
            <Timer className="w-3.5 h-3.5 text-stone-400" />
            Chronologie inévitable
          </h4>
          <ul className="space-y-2 text-sm">
            {chronologie_inevitable.map((evt, i) => (
              <li
                key={i}
                className="border-l-2 border-stone-500/40 pl-3 py-1 bg-surface/40"
              >
                <div className="flex items-start gap-2 text-xs text-content-muted">
                  <Timer className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                  <p>{evt}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {aConsequences && (
        <div>
          <h4 className="text-xs uppercase tracking-wider text-content-muted font-semibold mb-2 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            Conséquences des échecs
          </h4>
          <ul className="space-y-2 text-sm">
            {consequences_echecs.map((evt, i) => (
              <li
                key={i}
                className="border-l-2 border-red-500/40 pl-3 py-1 bg-surface/40"
              >
                <div className="flex items-start gap-2 text-xs text-content-muted">
                  <Globe className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p>{evt}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionScene>
  );
}

export default EvenementsMondiauxScenario;
