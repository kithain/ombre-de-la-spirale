import { Minus, Plus, RotateCcw, Check, Loader, Circle } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";
import { utiliserEtatPersistant } from "../../hooks/utiliserEtatPersistant";

/**
 * Convertit un angle (en degrés, 0 = haut) en coordonnées cartésiennes.
 */
function pointPolaire(cx, cy, rayon, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + rayon * Math.cos(a), cy + rayon * Math.sin(a)];
}

/**
 * Construit le chemin SVG d'un secteur (part de tarte).
 */
function cheminSecteur(cx, cy, rayon, debut, fin) {
  const [x1, y1] = pointPolaire(cx, cy, rayon, debut);
  const [x2, y2] = pointPolaire(cx, cy, rayon, fin);
  const grandArc = fin - debut > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${rayon} ${rayon} 0 ${grandArc} 1 ${x2} ${y2} Z`;
}

const STATUTS = {
  accompli: {
    etiquette: "Accompli",
    icone: Check,
    classe: "border-accent text-accent-light bg-accent-surface",
  },
  en_cours: {
    etiquette: "En cours",
    icone: Loader,
    classe: "border-amber-500/60 text-amber-300 bg-amber-950/30",
  },
  a_venir: {
    etiquette: "À venir",
    icone: Circle,
    classe: "border-surface-border text-content-subtle bg-surface-raised/40",
  },
};

/**
 * Composant HorlogeMenace - Horloge d'avancée segmentée et interactive.
 * Le MJ clique sur un segment (ou +/-) pour faire progresser la menace.
 * La progression est persistée dans le localStorage par menace.
 */
function HorlogeMenace({ menace }) {
  const horloge = menace?.horloge;
  const taille = horloge?.taille || horloge?.etapes?.length || 0;
  const etapes = horloge?.etapes || [];

  const [rempli, definirRempli] = utiliserEtatPersistant(
    `front-clock-${menace.id}`,
    0,
  );

  if (taille === 0) return null;

  const rempliBorne = Math.max(0, Math.min(rempli, taille));
  const acheve = rempliBorne >= taille;

  const definirNiveau = (n) => {
    definirRempli((prec) => (prec === n ? n - 1 : n));
  };

  const taillePx = 132;
  const centre = taillePx / 2;
  const rayon = centre - 4;
  const angleParSegment = 360 / taille;

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-6">
      {/* Horloge SVG */}
      <div className="flex flex-col items-center gap-3 flex-shrink-0">
        <svg
          width={taillePx}
          height={taillePx}
          viewBox={`0 0 ${taillePx} ${taillePx}`}
          className="drop-shadow"
        >
          {Array.from({ length: taille }).map((_, i) => {
            const debut = i * angleParSegment;
            const fin = (i + 1) * angleParSegment;
            const estRempli = i < rempliBorne;
            const estProchain = i === rempliBorne && !acheve;
            return (
              <path
                key={i}
                d={cheminSecteur(centre, centre, rayon, debut, fin)}
                onClick={() => definirNiveau(i + 1)}
                className={cc(
                  "cursor-pointer transition-colors",
                  estRempli
                    ? "fill-accent-dark stroke-surface"
                    : "fill-surface-raised stroke-surface hover:fill-surface-overlay",
                  estProchain && "fill-amber-900/40",
                )}
                strokeWidth="2"
              />
            );
          })}
          <circle
            cx={centre}
            cy={centre}
            r={rayon * 0.42}
            className="fill-surface stroke-surface-border"
            strokeWidth="1.5"
          />
          <text
            x={centre}
            y={centre}
            textAnchor="middle"
            dominantBaseline="central"
            className={cc(
              "font-serif font-bold",
              acheve ? "fill-red-400" : "fill-content",
            )}
            style={{ fontSize: "1rem" }}
          >
            {rempliBorne}/{taille}
          </text>
        </svg>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => definirRempli((p) => Math.max(0, p - 1))}
            className="w-7 h-7 flex items-center justify-center border border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light transition-colors"
            aria-label="Reculer l'horloge"
          >
            <Minus size={14} />
          </button>
          <button
            type="button"
            onClick={() => definirRempli(0)}
            className="w-7 h-7 flex items-center justify-center border border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light transition-colors"
            aria-label="Réinitialiser l'horloge"
          >
            <RotateCcw size={13} />
          </button>
          <button
            type="button"
            onClick={() => definirRempli((p) => Math.min(taille, p + 1))}
            className="w-7 h-7 flex items-center justify-center border border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light transition-colors"
            aria-label="Avancer l'horloge"
          >
            <Plus size={14} />
          </button>
        </div>

        {acheve && (
          <span className="text-[10px] uppercase tracking-widest text-red-400 font-semibold">
            Objectif atteint
          </span>
        )}
      </div>

      {/* Étapes / indices */}
      <ol className="flex-1 space-y-2">
        {etapes.map((etape, i) => {
          const cle =
            i < rempliBorne
              ? "accompli"
              : i === rempliBorne && !acheve
                ? "en_cours"
                : "a_venir";
          const statut = STATUTS[cle];
          const Icone = statut.icone;
          const estFinale = i === etapes.length - 1;
          return (
            <li
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => definirNiveau(i + 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  definirNiveau(i + 1);
                }
              }}
              className={cc(
                "border pl-3 pr-3 py-2 cursor-pointer transition-colors",
                statut.classe,
                "hover:border-accent-dark",
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="flex items-center gap-1.5 text-sm font-semibold">
                  <Icone size={14} className="flex-shrink-0" />
                  <span className="text-content-subtle text-xs font-mono">
                    {i + 1}.
                  </span>
                  {etape.titre}
                  {estFinale && (
                    <span className="text-[10px] uppercase tracking-widest text-red-400 ml-1">
                      Fin
                    </span>
                  )}
                </span>
                <span className="text-[9px] uppercase tracking-widest opacity-70 flex-shrink-0">
                  {statut.etiquette}
                </span>
              </div>
              {etape.indice && (
                <p className="text-xs text-content-muted leading-relaxed pl-5">
                  <span className="text-content-subtle font-semibold">
                    Indice :{" "}
                  </span>
                  {etape.indice}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default HorlogeMenace;
