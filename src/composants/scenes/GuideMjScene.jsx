import SectionScene from "./SectionScene";

function GuideMjScene({ guide }) {
  if (!guide) return null;

  const {
    intention,
    mise_en_place,
    deroulement,
    actions_utiles,
    fronts_heritiers,
    jeu_des_pnj,
    escalade,
    sortie,
  } = guide;

  const aContenu =
    intention ||
    mise_en_place ||
    (deroulement && deroulement.length) ||
    (actions_utiles && actions_utiles.length) ||
    (fronts_heritiers && fronts_heritiers.length) ||
    jeu_des_pnj ||
    escalade ||
    sortie;
  if (!aContenu) return null;

  const deroulementList = Array.isArray(deroulement) ? deroulement : [];
  const actionsUtilesList = Array.isArray(actions_utiles) ? actions_utiles : [];
  const frontsHeritiersList = Array.isArray(fronts_heritiers) ? fronts_heritiers : [];

  return (
    <SectionScene titre="Guide MJ" nomClasse="bg-stone-900/20 border-stone-600/20">
      <div className="space-y-3 text-xs text-content-muted">
        {intention && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Intention</span>
            <p className="mt-1 leading-relaxed">{intention}</p>
          </div>
        )}
        {mise_en_place && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Mise en place</span>
            <p className="mt-1 leading-relaxed">{mise_en_place}</p>
          </div>
        )}
        {deroulementList.length > 0 && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Déroulement</span>
            <ol className="mt-1 space-y-1 list-decimal list-inside leading-relaxed">
              {deroulementList.map((etape, i) => (
                <li key={i}>{etape}</li>
              ))}
            </ol>
          </div>
        )}
        {actionsUtilesList.length > 0 && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Actions utiles au sommet</span>
            <ul className="mt-1 space-y-1 list-disc list-inside leading-relaxed">
              {actionsUtilesList.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </div>
        )}
        {frontsHeritiersList.length > 0 && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Fronts héritiers</span>
            <ul className="mt-1 space-y-1 list-disc list-inside leading-relaxed">
              {frontsHeritiersList.map((front, i) => (
                <li key={i}>{front}</li>
              ))}
            </ul>
          </div>
        )}
        {jeu_des_pnj && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Jeu des PNJ</span>
            <p className="mt-1 leading-relaxed">{jeu_des_pnj}</p>
          </div>
        )}
        {escalade && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Escalade</span>
            <p className="mt-1 leading-relaxed">{escalade}</p>
          </div>
        )}
        {sortie && (
          <div className="border-l-2 border-accent-muted/40 pl-3">
            <span className="font-semibold text-content-secondary uppercase tracking-wider">Sortie</span>
            <p className="mt-1 leading-relaxed">{sortie}</p>
          </div>
        )}
      </div>
    </SectionScene>
  );
}

export default GuideMjScene;
