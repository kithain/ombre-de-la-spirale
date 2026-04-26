import SectionScene from "./SectionScene";

/**
 * Composant NarrationScene - Affiche les éléments narratifs d'une scène
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.narration - Données de narration
 */
function NarrationScene({ narration }) {
  if (!narration) return null;

  const aContenu = Object.values(narration).some(
    (valeur) => valeur && String(valeur).trim() !== "",
  );

  if (!aContenu) return null;

  return (
    <SectionScene titre="Narration" nomClasse="bg-surface-raised/60">
      <div className="space-y-1.5 text-sm text-content-muted">
        {narration.declencheur && (
          <p>
            <strong className="text-content-secondary">Déclencheur : </strong>
            {narration.declencheur}
          </p>
        )}
        {narration.texte_a_lire && (
          <p>
            <strong className="text-content-secondary">À lire : </strong>
            <span className="whitespace-pre-line">
              {narration.texte_a_lire}
            </span>
          </p>
        )}
        {narration.contexte_mj && (
          <div>
            <strong className="text-content-secondary">Contexte MJ : </strong>
            {Array.isArray(narration.contexte_mj) ? (
              <ul className="list-disc ml-4 mt-1 space-y-0.5">
                {narration.contexte_mj.map((element, idx) => (
                  <li key={idx}>{element}</li>
                ))}
              </ul>
            ) : (
              <span className="whitespace-pre-line">
                {narration.contexte_mj}
              </span>
            )}
          </div>
        )}
        {narration.objectif && (
          <p>
            <strong className="text-content-secondary">Objectif : </strong>
            {narration.objectif}
          </p>
        )}
      </div>
    </SectionScene>
  );
}


export default NarrationScene;
