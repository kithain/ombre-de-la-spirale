import { Swords } from "lucide-react";
import SectionPnj from "./SectionPnj";

function CombatPnj({ pnj }) {
  const attaque = pnj.attaque;
  const attOutrance = pnj.att_outrance;
  const attSpe = pnj.att_spe;
  const bba = pnj.bba;
  const lutte = pnj.lutte;

  if (!attaque && !attSpe && !bba) return null;

  return (
    <SectionPnj titre="Combat" icone={Swords}>
      <div className="space-y-3 text-sm">
        {bba && (
          <p>
            <strong className="text-accent-light">BBA :</strong> +{bba}
          </p>
        )}
        {lutte && (
          <p>
            <strong className="text-accent-light">Lutte :</strong> +
            {lutte}
          </p>
        )}
        {attaque && (
          <div>
            <strong className="text-accent-light block mb-1">Attaque :</strong>
            <p>{attaque}</p>
          </div>
        )}
        {attOutrance && attOutrance !== attaque && (
          <div>
            <strong className="text-accent-light block mb-1">Attaque à outrance :</strong>
            <p>{attOutrance}</p>
          </div>
        )}
        {attSpe && attSpe.length > 0 && (
          <div>
            <strong className="text-accent-light block mb-1">
              Attaques spéciales :
            </strong>
            {Array.isArray(attSpe) ? (
              <ul className="list-disc ml-4 space-y-1">
                {attSpe.map((att, idx) => (
                  <li key={idx}>{att}</li>
                ))}
              </ul>
            ) : (
              <p>{attSpe}</p>
            )}
          </div>
        )}
      </div>
    </SectionPnj>
  );
}


export default CombatPnj;
