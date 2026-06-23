import React from "react";

const CX = 300;
const CY = 300;

/* ─── Palette sombre cohérente avec le thème Valombre ─── */
const COULEURS = {
  hauteurs:      { fill: "#574c3d", stroke: "#78716c", etiquette: "Hauteurs" },
  universite:    { fill: "#1e3a5f", stroke: "#475569", etiquette: "Université" },
  vieilleVille:  { fill: "#573d3d", stroke: "#78716c", etiquette: "Vieille Ville" },
  centreCivique: { fill: "#57502d", stroke: "#78716c", etiquette: "Centre Civique" },
  terrasses:     { fill: "#44403c", stroke: "#78716c", etiquette: "Terrasses Naines" },
  cimetiere:     { fill: "#262626", stroke: "#525252", etiquette: "Cimetière" },
  profondeurs:   { fill: "#1c1917", stroke: "#44403c", etiquette: "Profondeurs" },
  spirale:       { fill: "#2e1065", stroke: "#1e1b4b", etiquette: "La Spirale" },
};

/*
  Valombre vue de dessus en cercles concentriques.
  Du centre (plus haut) vers l'extérieur (plus bas).
  Angles SVG : 0° = droite, sens horaire.
*/
const SECTEURS = [
  /* ── Centre : Hauteurs Brumeuses ── */
  {
    id: "hauteurs_brumeuses",
    type: "circle",
    r: 55,
    couleur: COULEURS.hauteurs,
  },
  /* ── Anneau 2 : 3 quartiers médians (120° chacun) ── */
  {
    id: "quartier_du_savoir",
    type: "sector",
    rInt: 55,
    rExt: 115,
    aDeb: 210,
    aFin: 330,
    couleur: COULEURS.universite,
  },
  {
    id: "centre_civique",
    type: "sector",
    rInt: 55,
    rExt: 115,
    aDeb: 330,
    aFin: 90,
    couleur: COULEURS.centreCivique,
  },
  {
    id: "quartier_des_mineurs",
    type: "sector",
    rInt: 55,
    rExt: 115,
    aDeb: 90,
    aFin: 210,
    couleur: COULEURS.terrasses,
  },
  /* ── Anneau 3 : Cimetière + Vieille Ville ── */
  {
    id: "cimetiere_et_seuil",
    type: "sector",
    rInt: 115,
    rExt: 165,
    aDeb: 90,
    aFin: 210,
    couleur: COULEURS.cimetiere,
  },
  {
    id: "vieille_ville",
    type: "sector",
    rInt: 115,
    rExt: 165,
    aDeb: 210,
    aFin: 90,
    couleur: COULEURS.vieilleVille,
  },
  /* ── Anneau 4 : Profondeurs (passage avec Terrasses) ── */
  {
    id: "profondeurs_mine",
    type: "sector",
    rInt: 165,
    rExt: 205,
    aDeb: 90,
    aFin: 210,
    couleur: COULEURS.profondeurs,
  },
  /* ── Anneau 5 : La Spirale (espace planaire) ── */
  {
    id: "spirale",
    type: "sector",
    rInt: 205,
    rExt: 255,
    aDeb: 0,
    aFin: 360,
    couleur: COULEURS.spirale,
  },
];

/* ─── Géométrie SVG ─── */

function pathSecteur(cx, cy, rInt, rExt, aDeb, aFin) {
  const rad = (deg) => (deg * Math.PI) / 180;
  let end = aFin;
  if (end < aDeb) end += 360;

  const sweep = 1; // sens horaire
  const largeArc = end - aDeb > 180 ? 1 : 0;

  const x1 = cx + rInt * Math.cos(rad(aDeb));
  const y1 = cy + rInt * Math.sin(rad(aDeb));
  const x2 = cx + rExt * Math.cos(rad(aDeb));
  const y2 = cy + rExt * Math.sin(rad(aDeb));
  const x3 = cx + rExt * Math.cos(rad(end));
  const y3 = cy + rExt * Math.sin(rad(end));
  const x4 = cx + rInt * Math.cos(rad(end));
  const y4 = cy + rInt * Math.sin(rad(end));

  return (
    `M ${x1} ${y1} L ${x2} ${y2} ` +
    `A ${rExt} ${rExt} 0 ${largeArc} ${sweep} ${x3} ${y3} ` +
    `L ${x4} ${y4} ` +
    `A ${rInt} ${rInt} 0 ${largeArc} 0 ${x1} ${y1} Z`
  );
}

function centreSecteur(cx, cy, rInt, rExt, aDeb, aFin) {
  const rad = (deg) => (deg * Math.PI) / 180;
  let end = aFin;
  if (end < aDeb) end += 360;
  const mid = aDeb + (end - aDeb) / 2;
  const rMid = (rInt + rExt) / 2;
  return {
    x: cx + rMid * Math.cos(rad(mid)),
    y: cy + rMid * Math.sin(rad(mid)),
  };
}

/* Anneau complet 360° (fill-rule evenodd pour le trou central) */
function pathAnneauComplet(cx, cy, rInt, rExt) {
  return (
    `M ${cx + rExt} ${cy} ` +
    `A ${rExt} ${rExt} 0 1 1 ${cx - rExt} ${cy} ` +
    `A ${rExt} ${rExt} 0 1 1 ${cx + rExt} ${cy} ` +
    `M ${cx + rInt} ${cy} ` +
    `A ${rInt} ${rInt} 0 1 0 ${cx - rInt} ${cy} ` +
    `A ${rInt} ${rInt} 0 1 0 ${cx + rInt} ${cy} Z`
  );
}

/* ─── Composant ─── */

const CarteVille = React.memo(function CarteVille({
  zones = [],
  idZoneSelectionnee,
  auClic,
}) {
  const idsConnus = new Set(zones.map((z) => z.id));

  const estSelectionne = (id) => idZoneSelectionnee === id;
  const estConnu = (id) => idsConnus.has(id);

  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 600 600"
        className="w-full max-w-[560px] h-auto select-none"
        style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.6))" }}
      >
        {/* Cercle de fond global */}
        <circle
          cx={CX}
          cy={CY}
          r={265}
          fill="#0c0a09"
          stroke="#292524"
          strokeWidth="2"
        />

        {SECTEURS.map((s) => {
          const connu = estConnu(s.id);
          const selectionne = estSelectionne(s.id);
          const opacity = connu ? (selectionne ? 1 : 0.82) : 0.25;
          const strokeW = selectionne ? 2.5 : 1;

          if (s.type === "circle") {
            return (
              <g
                key={s.id}
                style={{ cursor: connu ? "pointer" : "default" }}
                onClick={() => connu && auClic?.(s.id)}
              >
                <circle
                  cx={CX}
                  cy={CY}
                  r={s.r}
                  fill={s.couleur.fill}
                  stroke={selectionne ? "#d6d3d1" : s.couleur.stroke}
                  strokeWidth={strokeW}
                  opacity={opacity}
                  onMouseEnter={(e) =>
                    connu && (e.currentTarget.setAttribute("opacity", "1"))
                  }
                  onMouseLeave={(e) =>
                    connu && (e.currentTarget.setAttribute("opacity", String(opacity)))
                  }
                />
                {/* Label centre */}
                <text
                  x={CX}
                  y={CY - 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#d6d3d1"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="serif"
                  pointerEvents="none"
                >
                  {s.couleur.etiquette}
                </text>
                <text
                  x={CX}
                  y={CY + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#a8a29e"
                  fontSize="10"
                  fontFamily="serif"
                  pointerEvents="none"
                >
                  Brumeuses
                </text>
              </g>
            );
          }

          const amplitude = (s.aFin <= s.aDeb ? s.aFin + 360 : s.aFin) - s.aDeb;
          const d =
            amplitude >= 360
              ? pathAnneauComplet(CX, CY, s.rInt, s.rExt)
              : pathSecteur(CX, CY, s.rInt, s.rExt, s.aDeb, s.aFin);
          const c = centreSecteur(CX, CY, s.rInt, s.rExt, s.aDeb, s.aFin);

          return (
            <g
              key={s.id}
              style={{ cursor: connu ? "pointer" : "default" }}
              onClick={() => connu && auClic?.(s.id)}
            >
              <path
                d={d}
                fill={s.couleur.fill}
                fillRule={amplitude >= 360 ? "evenodd" : "nonzero"}
                stroke={selectionne ? "#d6d3d1" : s.couleur.stroke}
                strokeWidth={strokeW}
                opacity={opacity}
                onMouseEnter={(e) =>
                  connu && (e.currentTarget.setAttribute("opacity", "1"))
                }
                onMouseLeave={(e) =>
                  connu && (e.currentTarget.setAttribute("opacity", String(opacity)))
                }
              />
              {/* Label radial */}
              <text
                x={c.x}
                y={c.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#d6d3d1"
                fontSize="12"
                fontWeight="600"
                fontFamily="serif"
                pointerEvents="none"
              >
                {s.couleur.etiquette}
              </text>
            </g>
          );
        })}

        {/* Légende */}
        <g transform="translate(300, 565)" pointerEvents="none">
          <rect
            x="-90"
            y="-12"
            width="180"
            height="22"
            fill="#0c0a09"
            stroke="#292524"
            rx="2"
            opacity="0.9"
          />
          <text
            y="4"
            fill="#a8a29e"
            fontSize="11"
            fontFamily="sans-serif"
            textAnchor="middle"
          >
            Valombre — vue verticale (haut → centre · bas → extérieur)
          </text>
        </g>
      </svg>
    </div>
  );
});

export default CarteVille;
