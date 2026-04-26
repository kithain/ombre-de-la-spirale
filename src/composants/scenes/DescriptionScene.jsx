import SectionScene from "./SectionScene";

/**
 * Composant DescriptionScene - Affiche la description sensorielle d'une scène
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.description - Données de description
 */
function DescriptionScene({ description }) {
  if (!description) return null;

  const aContenu = Object.entries(description).some(
    ([, valeur]) =>
      valeur && String(valeur).trim() !== "" && valeur !== description.resume,
  );

  if (!aContenu) return null;

  return (
    <SectionScene titre="Description" nomClasse="bg-surface-raised/40">
      <div className="space-y-1.5 text-sm text-content-muted">
        {description.resume && (
          <p className="italic text-content-secondary/90">
            {description.resume}
          </p>
        )}
        {description.visuel && (
          <p>
            <strong className="text-content-secondary">Visuel : </strong>
            {description.visuel}
          </p>
        )}
        {description.audio && (
          <p>
            <strong className="text-content-secondary">Audio : </strong>
            {description.audio}
          </p>
        )}
        {description.odeur && (
          <p>
            <strong className="text-content-secondary">Odeur : </strong>
            {description.odeur}
          </p>
        )}
        {description.lumiere && (
          <p>
            <strong className="text-content-secondary">Lumière : </strong>
            {description.lumiere}
          </p>
        )}
      </div>
    </SectionScene>
  );
}


export default DescriptionScene;
