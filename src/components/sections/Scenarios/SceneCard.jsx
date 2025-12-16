import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";
import { cn } from "../../../utils/cn";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { bestiaryData35FR } from "../../../data/bestiary/bestiary";
import { pnjPrincipaux } from "../../../data/pnj/pnjPrincipaux";
import { pnjEnnemis } from "../../../data/pnj/pnjEnnemis";
import { findLocationById, makeUniverseLink } from "../../../utils/dataLinks";

const npcIndex = new Map();

const addNpcList = (list, source) => {
  (list || []).forEach((npc) => {
    if (npc?.id && !npcIndex.has(npc.id)) {
      npcIndex.set(npc.id, { npc, source });
    }
  });
};

addNpcList(pnjPrincipaux, "principaux");
addNpcList(pnjEnnemis, "ennemis");
addNpcList(bestiaryData35FR, "bestiary");

const antagonistUrl = (npcId) =>
  `/antagoniste?pnj=${encodeURIComponent(npcId)}`;

function SceneCard({ scene, highlight, expanded, onToggle }) {
  const [note, setNote] = useLocalStorage(`scene-note-${scene.title}`, "");
  const [favorite, setFavorite] = useLocalStorage(
    `scene-fav-${scene.title}`,
    false
  );

  const linkedLocation = scene.locationId ? findLocationById(scene.locationId) : null;
  const linkedNpcs = Array.isArray(scene.npcIds)
    ? scene.npcIds.map((id) => {
        const entry = npcIndex.get(id);
        if (!entry) {
          return { id, name: id, link: null };
        }

        return {
          id,
          name: entry.npc?.name || id,
          link: antagonistUrl(id),
        };
      })
    : [];

  const hasSensory =
    scene.description &&
    Object.entries(scene.description).some(
      ([, value]) => value && String(value).trim() !== "" && value !== scene.description.sous_titre
    );
  const hasNarrative =
    scene.narration &&
    Object.values(scene.narration).some((value) => value && String(value).trim() !== "");
  const safeDetails = Array.isArray(scene.details) ? scene.details : [];
  const hasMechanics =
    scene.mecaniques &&
    (Array.isArray(scene.mecaniques.defis) ||
      Array.isArray(scene.mecaniques.indices) ||
      scene.mecaniques.recompenses);
  const hasTransitions =
    scene.transitions &&
    Object.values(scene.transitions).some((value) => value && String(value).trim() !== "");

  return (
    <div
      className={cn(
        "bg-surface border border-surface-border p-4 rounded hover:border-accent-muted transition-colors group",
        highlight && "border-accent-dark shadow-[0_0_0_1px_rgba(217,119,6,0.35)]"
      )}
    >
      <div className="flex justify-between items-start mb-3 border-b border-surface-border pb-2 gap-3">
        <div>
          <h5 className="font-serif font-bold text-content text-lg">{scene.title}</h5>
          {favorite && (
            <span className="text-xs text-accent uppercase tracking-widest">Favori</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggle}
            className="text-xs px-2 py-1 rounded border border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light transition-colors"
          >
            {expanded ? "Masquer" : "Afficher"}
          </button>
          <button
            type="button"
            onClick={() => setFavorite((v) => !v)}
            className={cn(
              "text-xs px-2 py-1 rounded border transition-colors",
              favorite
                ? "border-accent text-accent-light bg-accent-surface"
                : "border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light"
            )}
          >
            ★
          </button>
            <Tag type={scene.type} />
        </div>
      </div>
      {expanded && (
        <>
          <ul className="space-y-1.5">
            {safeDetails.map((detail, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-content-muted group-hover:text-content-secondary transition-colors leading-relaxed"
              >
                <span className="text-content-subtle mt-1.5 w-1 h-1 rounded-full bg-surface-border block flex-shrink-0 group-hover:bg-accent-dark transition-colors" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {hasSensory && (
            <div className="mt-3 border border-surface-border rounded p-3 bg-surface-raised/40">
              <h6 className="text-xs font-mono uppercase tracking-widest text-content-subtle mb-1">
                Description
              </h6>
              <div className="space-y-1.5 text-sm text-content-muted">
                {scene.description.sous_titre && (
                  <p className="italic text-content-secondary/90">{scene.description.sous_titre}</p>
                )}
                {scene.description.visuel && (
                  <p>
                    <strong className="text-content-secondary">Visuel : </strong>
                    {scene.description.visuel}
                  </p>
                )}
                {scene.description.audio && (
                  <p>
                    <strong className="text-content-secondary">Audio : </strong>
                    {scene.description.audio}
                  </p>
                )}
                {scene.description.odeur && (
                  <p>
                    <strong className="text-content-secondary">Odeur : </strong>
                    {scene.description.odeur}
                  </p>
                )}
                {scene.description.lumiere && (
                  <p>
                    <strong className="text-content-secondary">Lumière : </strong>
                    {scene.description.lumiere}
                  </p>
                )}
              </div>
            </div>
          )}

          {hasNarrative && (
            <div className="mt-3 border border-surface-border rounded p-3 bg-surface-raised/60">
              <h6 className="text-xs font-mono uppercase tracking-widest text-content-subtle mb-1">
                Narration
              </h6>
              <div className="space-y-1.5 text-sm text-content-muted">
                {scene.narration.declencheur && (
                  <p>
                    <strong className="text-content-secondary">Déclencheur : </strong>
                    {scene.narration.declencheur}
                  </p>
                )}
                {scene.narration.texte_a_lire && (
                  <p>
                    <strong className="text-content-secondary">À lire : </strong>
                    {scene.narration.texte_a_lire}
                  </p>
                )}
                {scene.narration.contexte_mj && (
                  <div>
                    <strong className="text-content-secondary">Contexte MJ : </strong>
                    {Array.isArray(scene.narration.contexte_mj) ? (
                      <ul className="list-disc ml-4 mt-1 space-y-0.5">
                        {scene.narration.contexte_mj.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="whitespace-pre-line">{scene.narration.contexte_mj}</span>
                    )}
                  </div>
                )}
                {scene.narration.objectif && (
                  <p>
                    <strong className="text-content-secondary">Objectif : </strong>
                    {scene.narration.objectif}
                  </p>
                )}
              </div>
            </div>
          )}

          {hasMechanics && (
            <div className="mt-3 border border-surface-border rounded p-3 bg-surface">
              <h6 className="text-xs font-mono uppercase tracking-widest text-content-subtle mb-1">
                Mécaniques
              </h6>
              <div className="space-y-1.5 text-sm text-content-muted">
                {Array.isArray(scene.mecaniques?.defis) && scene.mecaniques.defis.length > 0 && (
                  <div>
                    <strong className="text-content-secondary block">Défis</strong>
                    <ul className="list-disc ml-4 space-y-0.5">
                      {scene.mecaniques.defis.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {Array.isArray(scene.mecaniques?.indices) && scene.mecaniques.indices.length > 0 && (
                  <div>
                    <strong className="text-content-secondary block">Indices</strong>
                    <ul className="list-disc ml-4 space-y-0.5">
                      {scene.mecaniques.indices.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {scene.mecaniques?.recompenses && (
                  <p>
                    <strong className="text-content-secondary">Récompenses : </strong>
                    {scene.mecaniques.recompenses}
                  </p>
                )}
              </div>
            </div>
          )}

          {hasTransitions && (
            <div className="mt-3 border border-surface-border rounded p-3 bg-surface-raised/40">
              <h6 className="text-xs font-mono uppercase tracking-widest text-content-subtle mb-1">
                Transitions
              </h6>
              <div className="text-sm text-content-muted space-y-1">
                {scene.transitions.success && (
                  <p>
                    <strong className="text-content-secondary">Succès : </strong>
                    {scene.transitions.success}
                  </p>
                )}
                {scene.transitions.fail && (
                  <p>
                    <strong className="text-content-secondary">Échec : </strong>
                    {scene.transitions.fail}
                  </p>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {(linkedLocation || linkedNpcs.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {linkedLocation && (
            <Link
              to={makeUniverseLink({ zoneId: linkedLocation.zone.id, locId: linkedLocation.loc.id })}
              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" x2="8" y1="2" y2="18" />
                <line x1="16" x2="16" y1="6" y2="22" />
              </svg>
              {linkedLocation.loc.name}
            </Link>
          )}
          {linkedNpcs.map((npc) =>
            npc.link ? (
              <Link
                key={npc.id}
                to={npc.link}
                title={npc.id}
                className="inline-flex items-center gap-1 px-2 py-1 rounded border border-surface-border text-content bg-surface-raised/50 hover:border-accent-dark hover:text-accent-light transition-colors"
              >
                👤 {npc.name}
              </Link>
            ) : (
              <span
                key={npc.id}
                title={npc.id}
                className="inline-flex items-center gap-1 px-2 py-1 rounded border border-surface-border text-content-muted bg-surface-raised/30"
              >
                👤 {npc.name}
              </span>
            )
          )}
        </div>
      )}

      <div className="mt-4">
        <label className="text-xs uppercase tracking-widest text-content-subtle block mb-1">
          Notes MJ
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-surface-raised border border-surface-border rounded p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
          rows={3}
          placeholder="Notes, rappels, ajustements..."
        />
      </div>
    </div>
  );
}

SceneCard.propTypes = {
  scene: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  highlight: PropTypes.bool,
};

SceneCard.defaultProps = {
  highlight: false,
};

export default SceneCard;
