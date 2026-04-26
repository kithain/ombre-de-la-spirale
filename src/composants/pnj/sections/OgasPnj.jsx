import { Target } from "lucide-react";
import SectionPnj from "./SectionPnj";

function OgasPnj({ pnj }) {
  const ogas = pnj.ogas;

  if (!ogas) return null;

  return (
    <SectionPnj titre="Objectifs (OGAS)" icone={Target}>
      <div className="space-y-2 text-sm">
        {ogas.occupation && (
          <p>
            <strong className="text-accent-light">Occupation :</strong>{" "}
            {ogas.occupation}
          </p>
        )}
        {ogas.objectif && (
          <p>
            <strong className="text-accent-light">Objectif :</strong>{" "}
            {ogas.objectif}
          </p>
        )}
        {ogas.attitude && (
          <p>
            <strong className="text-accent-light">Attitude :</strong>{" "}
            {ogas.attitude}
          </p>
        )}
        {ogas.enjeu && (
          <p>
            <strong className="text-accent-light">Enjeu :</strong>{" "}
            {ogas.enjeu}
          </p>
        )}
      </div>
    </SectionPnj>
  );
}


export default OgasPnj;
