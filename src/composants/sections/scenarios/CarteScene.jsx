import { useState } from "react";
import Etiquette from "../../interface/Etiquette";
import { cc } from "../../../utilitaires/combinerClasses";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { cleNoteScene, cleFavoriScene } from "../../../utilitaires/sceneUtils";
import { urlImage } from "../../../utilitaires/urlImage";
import { utiliserLiensScene } from "../../../hooks/utiliserLiensScene";
import ModaleImageScene from "../../scenes/ModaleImageScene";
import TransitionsScene from "../../scenes/TransitionsScene";
import LiensScene from "../../scenes/LiensScene";
import TexteALireScene from "../../scenes/TexteALireScene";
import ObjectifScene from "../../scenes/ObjectifScene";
import ContexteMjScene from "../../scenes/ContexteMjScene";
import DefisScene from "../../scenes/DefisScene";
import IndicesScene from "../../scenes/IndicesScene";
import GuideMjScene from "../../scenes/GuideMjScene";
import ReperesJeuScene from "../../scenes/ReperesJeuScene";
import FormatLivreScene from "../../scenes/FormatLivreScene";
import EffetsFrontsScene from "../../scenes/EffetsFrontsScene";

function CarteScene({ scene, idScenario, indexActe, indexScene, surlignee = false, estEtendue = false, auClic }) {
  const [note, definirNote] = utiliserEtatPersistant(
    cleNoteScene(scene),
    "",
  );
  const [favori, definirFavori] = utiliserEtatPersistant(
    cleFavoriScene(scene),
    false,
  );
  const [modaleImageOuverte, definirModaleImageOuverte] = useState(false);

  const gererClicImage = () => {
    if (scene.image) {
      definirModaleImageOuverte(true);
    }
  };

  const { lieuLie, pnjLies } = utiliserLiensScene(scene);
  const aImage = Boolean(scene.image);

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
          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto">
            {!estEtendue && aImage && (
              <img
                src={scene.image}
                alt={scene.titre}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover border border-surface-border flex-shrink-0 cursor-pointer hover:border-accent-muted transition-colors"
                onClick={gererClicImage}
              />
            )}
            <div className="min-w-0">
              <h5 className="font-serif font-bold text-content text-base sm:text-lg">
                {scene.titre}
              </h5>
              {favori && (
                <span className="text-xs text-accent uppercase tracking-widest">
                  Favori
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
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
            <div
              className={cc(
                "grid grid-cols-1 gap-4 mb-3",
                aImage && "md:grid-cols-[minmax(0,16rem)_1fr]",
              )}
            >
              {aImage && (
                <img
                  src={urlImage(scene.image)}
                  alt={scene.titre}
                  className="w-full h-48 md:h-64 object-cover border border-surface-border cursor-pointer hover:border-accent-muted transition-colors"
                  onClick={gererClicImage}
                />
              )}
              <div className="space-y-3">
                {scene.resume_mj && (
                  <div className="text-sm text-content-secondary italic border-l-2 border-accent-muted/40 pl-3 py-1">
                    {scene.resume_mj}
                  </div>
                )}
                <LiensScene lieuLie={lieuLie} pnjLies={pnjLies} />
              </div>
            </div>

            <FormatLivreScene format={scene.format_livre} />

            <TexteALireScene
              texte={scene.texte_a_lire ?? scene.narration?.texte_a_lire}
              declencheur={scene.narration?.declencheur}
            />

            <ObjectifScene objectif={scene.objectif ?? scene.narration?.objectif} />

            <ContexteMjScene
              contexte={scene.contexte_mj ?? scene.narration?.contexte_mj}
            />

            <DefisScene defis={scene.defis ?? scene.mecaniques?.defis} />

            <IndicesScene indices={scene.indices ?? scene.mecaniques?.indices} />

            <GuideMjScene guide={scene.guide_mj} />

            <ReperesJeuScene reperes={scene.reperes_de_jeu} />

            <TransitionsScene transitions={scene.transitions} />

            <EffetsFrontsScene scene={scene} />
          </>
        )}

        {!estEtendue && <LiensScene lieuLie={lieuLie} pnjLies={pnjLies} />}

        <div className="mt-4">
          <div className="flex items-center gap-2 mb-1">
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
