import { memo, useMemo, useCallback } from "react";
import { ChevronDown, AlertTriangle } from "lucide-react";
import {
  TYPES_CREATURE,
  SOUS_TYPES_CREATURE,
} from "../../../data/constantesDnD35";

/**
 * Composant SelecteurTypeCreature — Combine type principal + sous-type
 * Produit une chaîne "Type (sous-type)" conforme aux règles D&D 3.5
 */
const SelecteurTypeCreature = memo(function SelecteurTypeCreature({ valeur, onChange, erreur }) {
  const parsed = useMemo(() => {
    if (!valeur) return { type: "", sousType: "" };
    const match = valeur.match(/^([^(]+?)(?:\s*\((.+)\))?$/);
    return match ? { type: match[1].trim(), sousType: (match[2] || "").trim() } : { type: valeur, sousType: "" };
  }, [valeur]);

  const majType = useCallback((t) => {
    const nouveau = parsed.sousType ? `${t} (${parsed.sousType})` : t;
    onChange(nouveau);
  }, [parsed.sousType, onChange]);

  const majSousType = useCallback((st) => {
    const nouveau = st ? `${parsed.type} (${st})` : parsed.type;
    onChange(nouveau);
  }, [parsed.type, onChange]);

  return (
    <div className="space-y-1">
      <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
        Type de créature
      </label>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <select
            value={parsed.type}
            onChange={(e) => majType(e.target.value)}
            className="input-forge w-full text-content bg-surface text-sm pr-8 appearance-none"
          >
            <option value="">— Type —</option>
            {TYPES_CREATURE.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-content-muted pointer-events-none" />
        </div>
        <div className="relative">
          <select
            value={parsed.sousType}
            onChange={(e) => majSousType(e.target.value)}
            className="input-forge w-full text-content bg-surface text-sm pr-8 appearance-none"
          >
            <option value="">— Sous-type —</option>
            {SOUS_TYPES_CREATURE.map((st) => <option key={st} value={st}>{st}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-content-muted pointer-events-none" />
        </div>
      </div>
      <p className="text-xs text-content-subtle">{valeur || "—"}</p>
      {erreur && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <AlertTriangle size={12} />
          {erreur}
        </p>
      )}
    </div>
  );
});

export default SelecteurTypeCreature;
