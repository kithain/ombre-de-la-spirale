import { Lock, Lightbulb } from "lucide-react";
import SectionScene from "./SectionScene";

/**
 * Composant ContexteMjScene - Affiche le contexte MJ (secret, situation, rappels).
 * Accepte soit une chaîne (ancien format), soit un objet { situation, secrets[], rappels[] }.
 *
 * @param {object} proprietes - Props du composant
 * @param {string|object} proprietes.contexte - Contexte MJ
 */
function ContexteMjScene({ contexte }) {
  if (!contexte) return null;

  // Normaliser : si chaîne ou tableau, traiter comme bloc texte simple
  const estObjet =
    contexte &&
    typeof contexte === "object" &&
    !Array.isArray(contexte);

  return (
    <SectionScene titre="Contexte MJ" nomClasse="bg-red-900/10 border-red-900/30">
      <div className="space-y-2 text-sm text-content-muted">
        {!estObjet && contexte && (
          <div className="whitespace-pre-line">
            {Array.isArray(contexte)
              ? contexte.map((e, i) => <p key={i}>{e}</p>)
              : contexte}
          </div>
        )}

        {estObjet && (
          <>
            {contexte.situation && (
              <p>
                <strong className="text-content-secondary">Situation : </strong>
                <span className="whitespace-pre-line">{contexte.situation}</span>
              </p>
            )}
            {Array.isArray(contexte.secrets) && contexte.secrets.length > 0 && (
              <div>
                <strong className="text-content-secondary inline-flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-red-400" />
                  Secrets MJ
                </strong>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  {contexte.secrets.map((s, i) => (
                    <li key={i} className="whitespace-pre-line">{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {Array.isArray(contexte.rappels) && contexte.rappels.length > 0 && (
              <div>
                <strong className="text-content-secondary inline-flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  Rappels
                </strong>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  {contexte.rappels.map((r, i) => (
                    <li key={i} className="whitespace-pre-line">{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </SectionScene>
  );
}

export default ContexteMjScene;
