import { Shield } from "lucide-react";
import SectionPnj from "./SectionPnj";

function JetsSauvegardePnj({ pnj }) {
  const jets = pnj.js;

  if (!jets) return null;

  const rawRef = jets.ref;
  const rawVig = jets.vig;
  const rawVol = jets.vol;

  // Nettoyer les valeurs (enlever le + si déjà présent)
  const formatVal = (val) => {
    if (val === undefined || val === null) return null;
    const str = String(val).replace(/^\+/, "");
    return str;
  };

  const ref = formatVal(rawRef);
  const vig = formatVal(rawVig);
  const vol = formatVal(rawVol);

  if (ref === null && vig === null && vol === null) return null;

  return (
    <SectionPnj titre="Jets de sauvegarde" icone={Shield}>
      <div className="flex gap-6 text-sm">
        {vig !== null && (
          <div className="text-center">
            <div className="text-accent-light font-bold">Vigueur</div>
            <div className="text-lg">+{vig}</div>
          </div>
        )}
        {ref !== null && (
          <div className="text-center">
            <div className="text-accent-light font-bold">Réflexes</div>
            <div className="text-lg">+{ref}</div>
          </div>
        )}
        {vol !== null && (
          <div className="text-center">
            <div className="text-accent-light font-bold">Volonté</div>
            <div className="text-lg">+{vol}</div>
          </div>
        )}
      </div>
    </SectionPnj>
  );
}


export default JetsSauvegardePnj;
