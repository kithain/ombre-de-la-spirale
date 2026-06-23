import { ChevronDown, Target, User, Swords, Info } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { utiliserModalePnj } from "../../../contextes/ContexteModalePnj";
import { obtenirPnjParIds, obtenirIdsPnjOrphelins } from "../../../data/npcRegistry";
import { CATEGORIES_MENACE } from "../../../data/scenarios/fronts";
import HorlogeMenace from "../../scenes/HorlogeMenace";

/**
 * Composant AccordeonMenace - Une menace d'un Front : catégorie, objectif
 * final, PNJ liés, horloge d'avancée et notes MJ.
 */
function AccordeonMenace({ menace, estOuvert = false, auClic }) {
  const [note, definirNote] = utiliserEtatPersistant(
    `front-note-${menace.id}`,
    "",
  );
  const { ouvrirFichePnj } = utiliserModalePnj();
  const categorie = CATEGORIES_MENACE[menace.categorie];
  const pnjLies = obtenirPnjParIds(menace.idsPnj || []);
  const pnjOrphelins = obtenirIdsPnjOrphelins(menace.idsPnj || []);

  return (
    <div className="border-l-2 border-surface-border ml-2 sm:ml-4 pl-3 sm:pl-6 relative pb-4 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-surface-overlay border-2 border-surface-border" />

      <button
        onClick={auClic}
        aria-expanded={estOuvert}
        className="flex items-start gap-3 text-left group w-full"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-base sm:text-lg font-serif font-bold text-content-secondary group-hover:text-accent transition-colors">
              {menace.nom}
            </h4>
            {categorie && (
              <span
                className={cc(
                  "text-[10px] uppercase tracking-wider px-2 py-0.5 border",
                  categorie.couleur,
                )}
              >
                {categorie.etiquette}
              </span>
            )}
          </div>
          {menace.nature && (
            <p className="text-xs text-content-subtle mt-0.5">{menace.nature}</p>
          )}
        </div>
        <ChevronDown
          size={16}
          className={cc(
            "text-content-subtle transition-transform duration-300 flex-shrink-0 mt-1",
            estOuvert && "rotate-180",
          )}
        />
      </button>

      {/* Objectif final — toujours visible */}
      <div className="mt-2 flex items-start gap-2 text-xs sm:text-sm bg-red-950/20 border border-red-900/40 px-3 py-2">
        <Target className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
        <p className="text-content-muted">
          <span className="uppercase tracking-wider text-red-300 font-semibold text-[10px]">
            Objectif final{" "}
          </span>
          <span className="block sm:inline">{menace.objectifFinal}</span>
        </p>
      </div>

      {estOuvert && (
        <div className="mt-3 space-y-4 animate-slideDown">
          {/* Note MJ — guide pour le MJ */}
          {menace.noteMJ && (
            <div className="flex items-start gap-2 bg-amber-950/20 border border-amber-900/40 px-3 py-2">
              <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-content-muted">
                <span className="uppercase tracking-wider text-amber-300 font-semibold text-[10px]">
                  Note MJ{" "}
                </span>
                <span className="block sm:inline">{menace.noteMJ}</span>
              </p>
            </div>
          )}

          {(pnjLies.length > 0 || pnjOrphelins.length > 0) && (
            <div className="flex flex-wrap gap-2">
              {pnjLies.map((pnj) => {
                const hostile = pnj.categorie === "ennemis";
                return (
                  <button
                    key={pnj.id}
                    type="button"
                    onClick={() => ouvrirFichePnj(pnj.id)}
                    className={cc(
                      "inline-flex items-center gap-1 px-2 py-1 border text-xs transition-colors cursor-pointer",
                      hostile
                        ? "border-red-500/60 text-red-400 bg-red-500/10 hover:border-red-400 hover:text-red-300"
                        : "border-blue-500/60 text-blue-400 bg-blue-500/10 hover:border-blue-400 hover:text-blue-300",
                    )}
                  >
                    {hostile ? (
                      <Swords className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    {pnj.nom}
                  </button>
                );
              })}
              {pnjOrphelins.map((id) => (
                <span
                  key={id}
                  className="inline-flex items-center gap-1 px-2 py-1 border border-amber-700/50 text-xs text-amber-400/80 bg-amber-900/10"
                  title={`ID "${id}" non trouvé dans le registre PNJ`}
                >
                  <User className="w-4 h-4" />
                  <span className="font-mono">{id}</span>
                  <span className="text-[10px] px-1 py-0.5 border border-amber-700 text-amber-300 bg-amber-900/20 uppercase tracking-wide">
                    Introuvable
                  </span>
                </span>
              ))}
            </div>
          )}

          {menace.horloge && <HorlogeMenace menace={menace} />}

          <div>
            <label className="text-xs uppercase tracking-widest text-content-subtle mb-1 block">
              Notes MJ
            </label>
            <textarea
              value={note}
              onChange={(e) => definirNote(e.target.value)}
              className="w-full bg-surface-raised border border-surface-border p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
              rows={3}
              placeholder="Réactions des PJ, ajustements du calendrier, conséquences..."
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordeonMenace;
