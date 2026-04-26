import { Sparkles } from "lucide-react";
import SectionPnj from "./SectionPnj";

function BuffsPnj({ pnj }) {
  const buffs = pnj.bonus_actifs;

  if (!buffs || buffs.length === 0) return null;

  return (
    <SectionPnj titre="Effets actifs" icone={Sparkles}>
      <div className="flex flex-wrap gap-2">
        {buffs.map((buff, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-green-900/20 border border-green-800/30 text-green-300 text-sm"
          >
            {typeof buff === "string" ? buff : buff.nom}
          </span>
        ))}
      </div>
    </SectionPnj>
  );
}


export default BuffsPnj;
