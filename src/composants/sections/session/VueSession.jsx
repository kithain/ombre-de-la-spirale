import { useState, useMemo } from "react";
import {
  Swords,
  MapPin,
  Users,
  Clock,
  StickyNote,
  Zap,
  ChevronDown,
  Play,
} from "lucide-react";
import { scenariosData } from "../../../data/scenarios/scenarios";
import { frontsData } from "../../../data/scenarios/fronts";
import { obtenirPnjParIds } from "../../../data/npc_registry";
import { trouverLieuParId } from "../../../utilitaires/liaisonsDonnees";
import { sceneId } from "../../../utilitaires/sceneUtils";
import { obtenirEffetsFronts } from "../../../data/scenarios/effetsFronts";
import { consequencesFront, consequencesScene } from "../../../utilitaires/consequences";
import HorlogeMenace from "../../scenes/HorlogeMenace";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";

/**
 * VueSession — Vue "Session maintenant" (MVP).
 *
 * Objectif : permettre au MJ de jouer 20 minutes sans changer d'écran.
 *
 * Fonctionnalités :
 * - Sélection du scénario / acte / scène active
 * - PNJ présents dans la scène
 * - Lieu lié à la scène
 * - Fronts actifs avec horloges modifiables
 * - Effets de fronts et conséquences prêts
 * - Notes rapides
 */

function VueSession() {
  const [idScenarioActif, definirIdScenarioActif] = utiliserEtatPersistant(
    "session-scenario",
    scenariosData[0]?.id || "",
  );
  const [idSceneActive, definirIdSceneActive] = utiliserEtatPersistant(
    "session-scene",
    "",
  );
  const [noteRapide, definirNoteRapide] = utiliserEtatPersistant(
    "session-note-rapide",
    "",
  );
  const [frontsOuverts, definirFrontsOuverts] = useState({});

  const scenario = useMemo(
    () => scenariosData.find((s) => s.id === idScenarioActif),
    [idScenarioActif],
  );

  // Toutes les scènes du scénario, aplaties avec leur acte
  const toutesLesScenes = useMemo(() => {
    if (!scenario) return [];
    const scenes = [];
    for (const [indexActe, acte] of (scenario.actes || []).entries()) {
      for (const [indexScene, scene] of (acte.scenes || []).entries()) {
        scenes.push({
          scene,
          acte,
          indexActe,
          indexScene,
          cle: `${scenario.id}-${sceneId(scene)}`,
          label: `${indexActe + 1}.${indexScene + 1} — ${scene.titre}`,
        });
      }
    }
    return scenes;
  }, [scenario]);

  const sceneActive = useMemo(() => {
    if (!idSceneActive) return toutesLesScenes[0] || null;
    return toutesLesScenes.find((s) => s.cle === idSceneActive) || toutesLesScenes[0] || null;
  }, [idSceneActive, toutesLesScenes]);

  const scene = sceneActive?.scene;
  const pnjPresents = useMemo(
    () => (scene ? obtenirPnjParIds(scene.idsPnj || []) : []),
    [scene],
  );
  const lieuLie = useMemo(
    () => (scene?.idLieu ? trouverLieuParId(scene.idLieu) : null),
    [scene],
  );

  const effets = useMemo(
    () => (scene ? obtenirEffetsFronts(sceneId(scene)) : []),
    [scene],
  );

  const consequences = useMemo(
    () => (scene ? consequencesScene(scene) : []),
    [scene],
  );

  const basculerFront = (id) =>
    definirFrontsOuverts((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 flex items-center justify-center border border-accent-muted bg-accent-surface">
          <Play size={18} className="text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-content">Session maintenant</h2>
          <p className="text-xs text-content-muted">
            Tout l'écran de jeu sur une page — scène, PNJ, fronts, conséquences, notes.
          </p>
        </div>
      </div>

      {/* Sélecteur scénario + scène */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs uppercase tracking-widest text-content-subtle mb-1 block">
            Scénario
          </label>
          <select
            value={idScenarioActif}
            onChange={(e) => {
              definirIdScenarioActif(e.target.value);
              definirIdSceneActive("");
            }}
            className="w-full bg-surface-raised border border-surface-border p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
          >
            {scenariosData.map((s) => (
              <option key={s.id} value={s.id}>{s.titre}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-widest text-content-subtle mb-1 block">
            Scène active
          </label>
          <select
            value={sceneActive?.cle || ""}
            onChange={(e) => definirIdSceneActive(e.target.value)}
            className="w-full bg-surface-raised border border-surface-border p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
          >
            {toutesLesScenes.map((s) => (
              <option key={s.cle} value={s.cle}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grille principale : scène | fronts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Colonne gauche : scène active */}
        <div className="space-y-4">
          {/* Résumé scène */}
          {scene && (
            <div className="border border-surface-border bg-surface-raised/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={14} className="text-accent" />
                <h3 className="text-sm font-serif font-bold text-content">
                  {scene.titre}
                </h3>
                {scene.type && (
                  <span className="text-[10px] px-2 py-0.5 border border-accent-muted/30 text-accent-muted uppercase tracking-wider">
                    {scene.type}
                  </span>
                )}
              </div>
              {scene.resume_mj && (
                <p className="text-xs text-content-secondary italic leading-relaxed mb-3">
                  {scene.resume_mj}
                </p>
              )}
              {scene.objectif && (
                <p className="text-xs text-content leading-relaxed">
                  <span className="text-accent font-semibold">Objectif : </span>
                  {scene.objectif}
                </p>
              )}
            </div>
          )}

          {/* PNJ présents */}
          {pnjPresents.length > 0 && (
            <div className="border border-surface-border bg-surface/40 p-3">
              <div className="flex items-center gap-2 mb-2">
                <Users size={14} className="text-blue-400" />
                <h4 className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
                  PNJ présents ({pnjPresents.length})
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {pnjPresents.map((pnj) => (
                  <span
                    key={pnj.id}
                    className={`inline-flex items-center gap-1 px-2 py-1 border text-xs ${
                      pnj.categorie === "ennemis"
                        ? "border-red-500/60 text-red-400 bg-red-500/10"
                        : "border-blue-500/60 text-blue-400 bg-blue-500/10"
                    }`}
                  >
                    <Users size={12} />
                    {pnj.nom}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Lieu lié */}
          {lieuLie && (
            <div className="border border-surface-border bg-surface/40 p-3">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className="text-emerald-400" />
                <h4 className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                  Lieu
                </h4>
              </div>
              <div className="text-sm text-content font-serif font-bold">
                {lieuLie.lieu.nom}
              </div>
              {lieuLie.lieu.resume && (
                <p className="text-xs text-content-muted mt-1">{lieuLie.lieu.resume}</p>
              )}
              {lieuLie.zone && (
                <p className="text-[10px] text-content-subtle uppercase tracking-wider mt-1">
                  {lieuLie.zone.nom}
                </p>
              )}
            </div>
          )}

          {/* Effets de fronts sur cette scène */}
          {effets.length > 0 && (
            <div className="border border-amber-900/40 bg-amber-950/10 p-3">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-amber-400" />
                <h4 className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                  Effets sur les fronts
                </h4>
              </div>
              <div className="space-y-2">
                {effets.map((effet, i) => (
                  <div key={`${effet.frontId}-${i}`} className="border-l-2 border-amber-700/40 pl-3 py-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-amber-200">{effet.frontId}</span>
                      <span className="text-[10px] px-1.5 py-0.5 border border-amber-700/50 text-amber-300 bg-amber-900/20 uppercase tracking-wide">
                        {effet.effet}
                      </span>
                    </div>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      <span className="text-amber-400/70 font-semibold">Déclencheur : </span>
                      {effet.declencheur}
                    </p>
                    <p className="text-xs text-content-secondary leading-relaxed mt-0.5">
                      {effet.consequence}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transitions / Conséquences de scène */}
          {consequences.length > 0 && (
            <div className="border border-surface-border bg-surface/40 p-3">
              <div className="flex items-center gap-2 mb-2">
                <StickyNote size={14} className="text-content-muted" />
                <h4 className="text-xs uppercase tracking-widest text-content-muted font-semibold">
                  Transitions & conséquences
                </h4>
              </div>
              <div className="space-y-1.5">
                {consequences.filter(c => c.type === "reussite" || c.type === "echec" || c.type === "transition").map((c, i) => (
                  <div key={i} className="text-xs text-content-secondary leading-relaxed">
                    <span className={`font-semibold ${c.type === "reussite" ? "text-emerald-400" : c.type === "echec" ? "text-red-400" : "text-content-muted"}`}>
                      {c.type === "reussite" ? "Réussite : " : c.type === "echec" ? "Échec : " : ""}
                    </span>
                    {c.description}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Colonne droite : fronts actifs + notes */}
        <div className="space-y-4">
          {/* Fronts avec horloges */}
          <div className="border border-surface-border bg-surface/40 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Swords size={14} className="text-violet-400" />
              <h4 className="text-xs uppercase tracking-widest text-violet-300 font-semibold">
                Fronts & horloges
              </h4>
            </div>
            <div className="space-y-2">
              {frontsData.map((front) => (
                <div key={front.id} className="border border-surface-border bg-surface-raised/30">
                  <button
                    type="button"
                    onClick={() => basculerFront(front.id)}
                    className="w-full flex items-center justify-between p-2 text-left hover:bg-surface-raised/50 transition-colors"
                  >
                    <span className="text-sm font-serif font-bold text-content-secondary">
                      {front.nom}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-content-subtle transition-transform ${frontsOuverts[front.id] ? "rotate-180" : ""}`}
                    />
                  </button>
                  {frontsOuverts[front.id] && (
                    <div className="p-3 border-t border-surface-border space-y-3">
                      {(front.menaces || []).map((menace) => (
                        <div key={menace.id}>
                          <p className="text-xs font-semibold text-content mb-1">{menace.nom}</p>
                          <HorlogeMenace menace={menace} />
                        </div>
                      ))}
                      {/* Conséquences du front */}
                      {(() => {
                        const cons = consequencesFront(front.id);
                        if (cons.length === 0) return null;
                        return (
                          <div className="space-y-1.5 mt-2">
                            {cons.filter(c => c.type === "remplissage" || c.type === "annulation").map((c, i) => (
                              <div
                                key={i}
                                className={`text-xs leading-relaxed border-l-2 pl-2 py-1 ${
                                  c.type === "remplissage"
                                    ? "border-red-700/50 text-red-300/80"
                                    : "border-emerald-700/50 text-emerald-300/80"
                                }`}
                              >
                                <span className="font-semibold uppercase tracking-wide text-[10px]">
                                  {c.type === "remplissage" ? "Si remplie : " : "Annulation : "}
                                </span>
                                {c.description}
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Notes rapides */}
          <div className="border border-surface-border bg-surface/40 p-4">
            <div className="flex items-center gap-2 mb-2">
              <StickyNote size={14} className="text-content-muted" />
              <h4 className="text-xs uppercase tracking-widest text-content-muted font-semibold">
                Notes rapides
              </h4>
            </div>
            <textarea
              value={noteRapide}
              onChange={(e) => definirNoteRapide(e.target.value)}
              className="w-full bg-surface-raised border border-surface-border p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
              rows={5}
              placeholder="Réactions des PJ, ajustements, rappels pour la prochaine séance..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VueSession;
