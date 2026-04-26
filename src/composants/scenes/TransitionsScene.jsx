import SectionScene from "./SectionScene";

/**
 * Composant TransitionsScene - Affiche les transitions possibles d'une scène
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.transitions - Données de transitions
 */
function TransitionsScene({ transitions }) {
  if (!transitions) return null;

  const aContenu = Object.values(transitions).some(
    (valeur) => valeur && String(valeur).trim() !== "",
  );

  if (!aContenu) return null;

  return (
    <SectionScene titre="Transitions" nomClasse="bg-surface-raised/40">
      <div className="text-sm text-content-muted space-y-1">
        {transitions.resume && (
          <p className="italic text-content-secondary/90">
            {transitions.resume}
          </p>
        )}
        {transitions.success && (
          <p>
            <strong className="text-content-secondary">Succès : </strong>
            {transitions.success}
          </p>
        )}
        {transitions.fail && (
          <p>
            <strong className="text-content-secondary">Échec : </strong>
            {transitions.fail}
          </p>
        )}
      </div>
    </SectionScene>
  );
}


export default TransitionsScene;
