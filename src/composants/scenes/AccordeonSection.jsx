import { useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordeonSection({ titre, icon: Icon, couleur = "text-content-subtle", children }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOuvert((v) => !v)}
        aria-expanded={ouvert}
        className="w-full flex items-center gap-2 px-3 py-2 border border-surface-border bg-surface/60 hover:bg-surface-raised/40 transition-colors mb-0"
      >
        {Icon && <Icon size={14} className={couleur} />}
        <span className={`text-xs uppercase tracking-widest font-semibold ${couleur}`}>
          {titre}
        </span>
        <ChevronDown
          size={14}
          className={`text-content-subtle ml-auto transition-transform ${ouvert ? "rotate-180" : ""}`}
        />
      </button>
      {ouvert && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default AccordeonSection;
