import Modale from "../interface/Modale";
import ContexteMjScene from "./ContexteMjScene";
import ObjectifScene from "./ObjectifScene";
import TransitionsScene from "./TransitionsScene";

/**
 * Composant ModaleImageScene - Modale affichant l'image et la description d'une scène
 */
function ModaleImageScene({ scene, estOuverte, fermer }) {
  if (!scene || !scene.image) return null;

  const resume = scene.description?.resume ?? scene.resume_mj;
  const contexte = scene.contexte_mj ?? scene.narration?.contexte_mj;
  const objectif = scene.objectif ?? scene.narration?.objectif;
  const aDescription = Boolean(
    resume ||
      scene.description?.visuel ||
      scene.description?.audio ||
      scene.description?.odeur ||
      scene.description?.lumiere,
  );

  return (
    <Modale
      estOuverte={estOuverte}
      fermer={fermer}
      titre={scene.titre}
      maxWidth="max-w-3xl"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-full">
          <img
            src={scene.image}
            alt={scene.titre}
            className="w-full h-auto max-h-[40vh] object-contain border border-surface-border"
          />
        </div>

        {aDescription && (
          <div className="w-full max-w-3xl">
            <div className="bg-surface-raised/40 p-4 border border-surface-border">
              <h4 className="text-lg font-serif text-accent-light font-bold mb-2">
                Description
              </h4>
              <div className="space-y-1.5 text-sm text-content-muted">
                {resume && (
                  <p className="italic text-content-secondary/90">
                    {resume}
                  </p>
                )}
                {scene.description?.visuel && (
                  <p>
                    <strong className="text-content-secondary">
                      Visuel :{" "}
                    </strong>
                    {scene.description.visuel}
                  </p>
                )}
                {scene.description?.audio && (
                  <p>
                    <strong className="text-content-secondary">Audio : </strong>
                    {scene.description.audio}
                  </p>
                )}
                {scene.description?.odeur && (
                  <p>
                    <strong className="text-content-secondary">Odeur : </strong>
                    {scene.description.odeur}
                  </p>
                )}
                {scene.description?.lumiere && (
                  <p>
                    <strong className="text-content-secondary">
                      Lumière :{" "}
                    </strong>
                    {scene.description.lumiere}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="w-full max-w-3xl space-y-4">
          <ObjectifScene objectif={objectif} />
          <ContexteMjScene contexte={contexte} />
          <TransitionsScene transitions={scene.transitions} />
        </div>
      </div>
    </Modale>
  );
}

export default ModaleImageScene;
