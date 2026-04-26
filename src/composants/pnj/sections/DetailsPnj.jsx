import { List } from "lucide-react";
import SectionPnj from "./SectionPnj";

function DetailsPnj({ details }) {
  if (!details || details.length === 0) return null;

  return (
    <SectionPnj titre="Détails" icone={List}>
      <ul className="space-y-2 text-sm">
        {details.map((detail, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-accent-dark block flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </SectionPnj>
  );
}


export default DetailsPnj;
