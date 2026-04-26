import { User } from "lucide-react";
import SectionPnj from "./SectionPnj";

function AttributsPnj({ pnj }) {
  const stats = pnj.carac;

  if (!stats) return null;

  const attributs = [
    { nom: "For", valeur: stats.for },
    { nom: "Dex", valeur: stats.dex },
    { nom: "Con", valeur: stats.con },
    { nom: "Int", valeur: stats.int },
    { nom: "Sag", valeur: stats.sag },
    { nom: "Cha", valeur: stats.cha },
  ];

  const aDesValeurs = attributs.some((a) => a.valeur !== undefined);
  if (!aDesValeurs) return null;

  const calculerMod = (val) => {
    if (val === undefined || val === null || val === "–") return "–";
    const num = parseInt(val);
    if (isNaN(num)) return "–";
    const mod = Math.floor((num - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <SectionPnj titre="Caractéristiques" icone={User}>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center text-sm">
        {attributs.map(({ nom, valeur }) => (
          <div
            key={nom}
            className="bg-surface/50 p-2 border border-surface-border"
          >
            <div className="text-accent-light font-bold text-xs">{nom}</div>
            <div className="text-lg">{valeur ?? "–"}</div>
            <div className="text-xs text-content-muted">
              {calculerMod(valeur)}
            </div>
          </div>
        ))}
      </div>
    </SectionPnj>
  );
}


export default AttributsPnj;
