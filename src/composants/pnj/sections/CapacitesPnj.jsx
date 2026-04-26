import { Sparkles } from "lucide-react";
import SectionPnj from "./SectionPnj";

function CapacitesPnj({ pnj }) {
  const capacites = pnj.att_spe;
  const dons = pnj.dons;
  const pouvoirs = pnj.qual_spe;

  const hasDons = dons && dons !== "—";
  const hasCapacites = capacites && capacites.length > 0;
  const hasPouvoirs = pouvoirs && pouvoirs.length > 0;

  if (!hasCapacites && !hasDons && !hasPouvoirs) return null;

  return (
    <SectionPnj titre="Capacités & Dons" icone={Sparkles}>
      <div className="space-y-3 text-sm">
        {hasDons && (
          <div>
            <strong className="text-accent-light block mb-1">Dons :</strong>
            {Array.isArray(dons) ? <p>{dons.join(", ")}</p> : <p>{dons}</p>}
          </div>
        )}
        {hasCapacites && (
          <div>
            <strong className="text-accent-light block mb-1">
              Capacités :
            </strong>
            {Array.isArray(capacites) ? (
              <ul className="list-disc ml-4 space-y-1">
                {capacites.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>
            ) : (
              <p>{capacites}</p>
            )}
          </div>
        )}
        {hasPouvoirs && (
          <div>
            <strong className="text-accent-light block mb-1">
              Pouvoirs spéciaux :
            </strong>
            {Array.isArray(pouvoirs) ? (
              <ul className="list-disc ml-4 space-y-1">
                {pouvoirs.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            ) : (
              <p>{pouvoirs}</p>
            )}
          </div>
        )}
      </div>
    </SectionPnj>
  );
}


export default CapacitesPnj;
