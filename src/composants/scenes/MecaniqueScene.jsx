import SectionScene from "./SectionScene";

/**
 * Composant MecaniqueScene - Affiche les mécaniques de jeu d'une scène
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.mecaniques - Données de mécaniques
 */
function MecaniqueScene({ mecaniques }) {
  if (!mecaniques) return null;

  const aContenu =
    (Array.isArray(mecaniques.defis) && mecaniques.defis.length > 0) ||
    (Array.isArray(mecaniques.indices) && mecaniques.indices.length > 0) ||
    mecaniques.recompenses;

  if (!aContenu) return null;

  return (
    <SectionScene titre="Mécaniques" nomClasse="bg-surface">
      <div className="space-y-1.5 text-sm text-content-muted">
        {Array.isArray(mecaniques.defis) && mecaniques.defis.length > 0 && (
          <div>
            <strong className="text-content-secondary block">Défis</strong>
            <ul className="list-disc ml-4 space-y-0.5">
              {mecaniques.defis.map((defi, idx) => (
                <li key={idx} className="whitespace-pre-line">
                  {defi}
                </li>
              ))}
            </ul>
          </div>
        )}
        {Array.isArray(mecaniques.indices) && mecaniques.indices.length > 0 && (
          <div>
            <strong className="text-content-secondary block">Indices</strong>
            <ul className="list-disc ml-4 space-y-0.5">
              {mecaniques.indices.map((indice, idx) => (
                <li key={idx} className="whitespace-pre-line">
                  {indice}
                </li>
              ))}
            </ul>
          </div>
        )}
        {mecaniques.recompenses && (
          <p>
            <strong className="text-content-secondary">Récompenses : </strong>
            <span className="whitespace-pre-line">
              {mecaniques.recompenses}
            </span>
          </p>
        )}
      </div>
    </SectionScene>
  );
}


export default MecaniqueScene;
