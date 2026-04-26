import { memo } from "react";
import { BookOpen, X } from "lucide-react";
import ComboboxFiltrable from "../../interface/ComboboxFiltrable";
import SectionPnj from "../sections/SectionPnj";
import {
  SORTS_COURANTS,
  NOMS_NIVEAUX_SORTS,
} from "../../../data/sortsDnD35";

/**
 * Composant SectionSorts — Table d'emplacements + sélection de sorts préparés
 * Extrait de EditeurPersonnage pour SRP.
 */
const SectionSorts = memo(function SectionSorts({
  emplacementsSorts,
  brouillon,
  modifierChamp,
}) {
  if (!emplacementsSorts) return null;

  return (
    <SectionPnj titre={`Sorts — ${brouillon.classe}`} icone={BookOpen}>
      <div className="space-y-4">
        {/* Table d'emplacements */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="text-content-muted uppercase tracking-wider">
                <th className="text-left py-1.5 px-2 border-b border-surface-border">Niveau</th>
                <th className="text-center py-1.5 px-2 border-b border-surface-border">Base</th>
                <th className="text-center py-1.5 px-2 border-b border-surface-border">Bonus</th>
                {emplacementsSorts[0]?.domaine > 0 && (
                  <th className="text-center py-1.5 px-2 border-b border-surface-border">Domaine</th>
                )}
                <th className="text-center py-1.5 px-2 border-b border-surface-border font-bold text-accent-light">Total</th>
              </tr>
            </thead>
            <tbody>
              {emplacementsSorts.map((emp, i) => (
                <tr key={i} className="hover:bg-surface/30">
                  <td className="py-1 px-2 border-b border-surface-border/50 text-content-secondary">
                    {NOMS_NIVEAUX_SORTS[emp.niveau] || `Niv ${emp.niveau}`}
                  </td>
                  <td className="py-1 px-2 border-b border-surface-border/50 text-center text-content">{emp.base}</td>
                  <td className="py-1 px-2 border-b border-surface-border/50 text-center text-green-400">{emp.bonus > 0 ? `+${emp.bonus}` : "—"}</td>
                  {emplacementsSorts[0]?.domaine > 0 && (
                    <td className="py-1 px-2 border-b border-surface-border/50 text-center text-purple-400">{emp.domaine > 0 ? `+${emp.domaine}` : "—"}</td>
                  )}
                  <td className="py-1 px-2 border-b border-surface-border/50 text-center font-bold text-accent-light">{emp.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sélection de sorts préparés par niveau */}
        {SORTS_COURANTS[brouillon.classe] && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider text-content-muted font-semibold">
              Sorts préparés ({brouillon.classe})
            </p>
            {emplacementsSorts.map((emp) => {
              const sortsNiv = SORTS_COURANTS[brouillon.classe]?.[emp.niveau];
              if (!sortsNiv || sortsNiv.length === 0) return null;
              const sortsPrepares = brouillon.sortsPrepares?.[emp.niveau] || [];
              return (
                <div key={emp.niveau} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase text-content-muted font-semibold w-14 flex-shrink-0">
                      Niv {emp.niveau}
                    </span>
                    <span className="text-[10px] text-content-muted">
                      {sortsPrepares.length} / {emp.total} emplacements
                    </span>
                    {sortsPrepares.length > emp.total && (
                      <span className="text-[10px] text-red-400">⚠ Excédent</span>
                    )}
                  </div>
                  {sortsPrepares.length > 0 && (
                    <div className="flex flex-wrap gap-1 ml-16">
                      {sortsPrepares.map((sort, idx) => (
                        <span
                          key={`${sort}-${idx}`}
                          className="inline-flex items-center gap-0.5 text-[11px] px-1.5 py-0.5 bg-blue-900/30 border border-blue-700/40 text-blue-200"
                        >
                          {sort}
                          <button
                            type="button"
                            onClick={() => {
                              const nv = [...sortsPrepares];
                              nv.splice(idx, 1);
                              modifierChamp("sortsPrepares", {
                                ...(brouillon.sortsPrepares || {}),
                                [emp.niveau]: nv,
                              });
                            }}
                            className="text-red-400 hover:text-red-300 ml-0.5"
                          >
                            <X size={9} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="ml-16">
                    <ComboboxFiltrable
                      placeholder={`+ Ajouter sort niv ${emp.niveau}…`}
                      options={sortsNiv}
                      exclure={[]}
                      onSelect={(sort) => {
                        const nv = [...sortsPrepares, sort];
                        modifierChamp("sortsPrepares", {
                          ...(brouillon.sortsPrepares || {}),
                          [emp.niveau]: nv,
                        });
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </SectionPnj>
  );
});

export default SectionSorts;
