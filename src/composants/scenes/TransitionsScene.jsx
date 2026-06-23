import SectionScene from "./SectionScene";

/**
 * Composant TransitionsScene - Affiche les transitions possibles d'une scène
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.transitions - Données de transitions
 */
function TransitionsScene({ transitions }) {
  if (!transitions) return null;

  const acontent = Object.values(transitions).some(
    (valeur) => valeur && String(valeur).trim() !== "",
  );

  if (!acontent) return null;

  return (
    <SectionScene titre="Transitions" nomClasse="bg-surface-raised/40">
      <div className="text-sm text-content-muted space-y-1">
        {transitions.resume && (
          <p className="italic text-content-secondary/90">
            {transitions.resume}
          </p>
        )}
        {transitions.reussite && (
          <p>
            <strong className="text-content-secondary">Succès : </strong>
            {transitions.reussite}
          </p>
        )}
        {transitions.echec && (
          <p>
            <strong className="text-content-secondary">Échec : </strong>
            {transitions.echec}
          </p>
        )}
      </div>
    </SectionScene>
  );
}


export default TransitionsScene;
