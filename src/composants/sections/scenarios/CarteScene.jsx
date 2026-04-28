import { useState } from "react";
import { Pencil } from "lucide-react";
import Etiquette from "../../interface/Etiquette";
import { cc } from "../../../utilitaires/combinerClasses";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { utiliserLiensScene } from "../../../hooks/utiliserLiensScene";
import { utiliserEditeurScenario } from "../../../contextes/ContexteEditeurScenarioBase";
import ModaleImageScene from "../../scenes/ModaleImageScene";
import {
  DescriptionScene,
  NarrationScene,
  MecaniqueScene,
  TransitionsScene,
  LiensScene,
} from "../../scenes";

function CarteScene({ scene, idScenario, indexActe, indexScene, surlignee = false, estEtendue = false, auClic }) {
  const [note, definirNote] = utiliserEtatPersistant(
    `scene-note-${scene.title}`,
    "",
  );
  const [favori, definirFavori] = utiliserEtatPersistant(
    `scene-fav-${scene.title}`,
    false,
  );
  const [modaleImageOuverte, definirModaleImageOuverte] = useState(false);
  const { activerModeEdition, ouvrirEditeurScene } = utiliserEditeurScenario();

  const gererClicImage = () => {
    if (scene.image) {
      definirModaleImageOuverte(true);
    }
  };

  const { lieuLie, pnjLies } = utiliserLiensScene(scene);

  const detailsSurs = Array.isArray(scene.details) ? scene.details : [];

  return (
    <>
      <div
        className={cc(
          "bg-surface border border-surface-border p-3 sm:p-4 hover:border-accent-muted transition-colors group",
          surlignee &&
            "border-accent-dark shadow-[0_0_0_1px_rgba(217,119,6,0.35)]",
        )}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 border-b border-surface-border pb-2 gap-2 sm:gap-3">
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 w-full sm:w-auto">
            {estEtendue && scene.image && (
              <img
                src={scene.image}
                alt={scene.title}
                className="w-full sm:w-48 md:w-64 h-48 sm:h-48 md:h-64 object-cover border border-surface-border flex-shrink-0 cursor-pointer hover:border-accent-muted transition-colors"
                onClick={gererClicImage}
              />
            )}
            <div className="min-w-0">
              <h5 className="font-serif font-bold text-content text-base sm:text-lg">
                {scene.title}
              </h5>
              {favori && (
                <span className="text-xs text-accent uppercase tracking-widest">
                  Favori
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {idScenario != null && indexActe != null && indexScene != null && (
              <button
                type="button"
                onClick={() => { activerModeEdition(); ouvrirEditeurScene(idScenario, indexActe, indexScene); }}
                className="text-xs px-2 py-1 border border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light transition-colors flex items-center gap-1"
                title="Éditer la scène"
              >
                <Pencil size={12} />
                Éditer
              </button>
            )}
            <button
              type="button"
              onClick={auClic}
              aria-expanded={estEtendue}
              className="text-xs px-2 py-1 border border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light transition-colors"
            >
              {estEtendue ? "Masquer" : "Afficher"}
            </button>
            <button
              type="button"
              onClick={() => definirFavori((v) => !v)}
              className={cc(
                "text-xs px-2 py-1 border transition-colors",
                favori
                  ? "border-accent text-accent-light bg-accent-surface"
                  : "border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light",
              )}
            >
              ★
            </button>
            <Etiquette type={scene.type} />
          </div>
        </div>
        {estEtendue && (
          <>
            <ul className="space-y-1.5">
              {detailsSurs.map((detail, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-content-muted group-hover:text-content-secondary transition-colors leading-relaxed"
                >
                  <span className="text-content-subtle mt-1.5 w-1 h-1 bg-surface-border block flex-shrink-0 group-hover:bg-accent-dark transition-colors" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <DescriptionScene description={scene.description} />
            <NarrationScene narration={scene.narration} />
            <MecaniqueScene mecaniques={scene.mecaniques} />
            <TransitionsScene transitions={scene.transitions} />
          </>
        )}

        <LiensScene lieuLie={lieuLie} pnjLies={pnjLies} />

        <div className="mt-4">
          <div className="flex items-center gap-2 mb-1">
            {!estEtendue && scene.image && (
              <img
                src={scene.image}
                alt={scene.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover border border-surface-border flex-shrink-0 cursor-pointer hover:border-accent-muted transition-colors"
                onClick={gererClicImage}
              />
            )}
            <label className="text-xs uppercase tracking-widest text-content-subtle">
              Notes MJ
            </label>
          </div>
          <textarea
            value={note}
            onChange={(e) => definirNote(e.target.value)}
            className="w-full bg-surface-raised border border-surface-border p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
            rows={3}
            placeholder="Notes, rappels, ajustements..."
          />
        </div>
      </div>

      <ModaleImageScene
        scene={scene}
        estOuverte={modaleImageOuverte}
        fermer={() => definirModaleImageOuverte(false)}
      />
    </>
  );
}


export default CarteScene;
