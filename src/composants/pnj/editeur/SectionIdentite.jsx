import { useState, useCallback } from "react";
import { User, Swords, Home, MapPin, X, Loader2, Calculator, Trash2, Plus } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { ChampTexte, ChampSelection } from "../champsFormulaire";
import ComboboxFiltrable from "../../interface/ComboboxFiltrable";
import ChampImage from "./ChampImage";
import SelecteurTypeCreature from "./SelecteurTypeCreature";
import {
  CLASSES_TOUTES, ALIGNEMENTS, TAILLES, DISPOSITIONS, VALEURS_FP, BIOMES_DND35,
} from "../../../data/constantesDnD35";
import { obtenirLieuxScenario, obtenirNomLieu } from "../../../utilitaires/liaisonsDonnees";
import { apiPnj, estModeEditeur } from "../../../services/api";
import { fichierCiblePourMode } from "../../../utilitaires/utilitairesPnj";

/**
 * SectionIdentite — Identité complète : mode, nom, image, classe/DV, FP, taille,
 * type, alignement, disposition, rôle, environnement.
 * Gère en interne l'état de déplacement de fichier.
 *
 * @param {{ brouillon, erreurs, modifierChamp, modifierChampImbrique, estCreature, statsCreature, dvParse }} props
 */
function SectionIdentite({
  brouillon, erreurs, modifierChamp, modifierChampImbrique,
  estCreature, statsCreature, dvParse,
}) {
  const [etatDeplacement, setEtatDeplacement] = useState(null);
  const [msgDeplacement, setMsgDeplacement] = useState("");

  const deplacerVersFichierCible = useCallback(async (fichierCible) => {
    if (!brouillon?.id || !estModeEditeur()) return;
    setEtatDeplacement("en_cours");
    setMsgDeplacement("");
    try {
      const res = await apiPnj.deplacer(brouillon.id, fichierCible);
      setMsgDeplacement(res.deja_en_place ? `Déjà dans ${fichierCible}` : `Déplacé vers ${fichierCible}`);
      setEtatDeplacement("ok");
    } catch (err) {
      setMsgDeplacement(err.message);
      setEtatDeplacement("erreur");
    }
  }, [brouillon?.id]);

  return (
    <SectionPnj titre="Identité" icone={User}>
      {/* Switch mode PNJ / Créature */}
      <div className="flex items-center gap-3 p-3 mb-4 bg-surface/50 border border-surface-border">
        <span className="text-xs uppercase tracking-wider text-content-muted font-semibold whitespace-nowrap">
          Type d&apos;entité
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => { modifierChamp("modeEntite", "pnj"); setEtatDeplacement(null); }}
            className={`px-3 py-1.5 text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
              !estCreature
                ? "bg-blue-900/30 border-blue-600 text-blue-200"
                : "bg-surface border-surface-border text-content-muted hover:text-content"
            }`}
          >
            <User size={12} />
            Personnage (Classes)
          </button>
          <button
            type="button"
            onClick={() => {
              modifierChamp("modeEntite", "creature");
              modifierChamp("classe", "");
              modifierChamp("niveau", null);
              setEtatDeplacement(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
              estCreature
                ? "bg-purple-900/30 border-purple-600 text-purple-200"
                : "bg-surface border-surface-border text-content-muted hover:text-content"
            }`}
          >
            <Swords size={12} />
            Créature (DV raciaux)
          </button>
        </div>
        {brouillon.id && brouillon.modeEntite && estModeEditeur() && (() => {
          const cible = fichierCiblePourMode(brouillon.modeEntite, brouillon.fp);
          return (
            <div className="flex items-center gap-2 ml-2">
              {etatDeplacement === null && (
                <button
                  type="button"
                  onClick={() => deplacerVersFichierCible(cible)}
                  className="px-2 py-1 text-[10px] border border-amber-700/40 bg-amber-900/15 text-amber-300 hover:bg-amber-900/30 transition-colors flex items-center gap-1"
                >
                  <Home size={10} />
                  Déplacer → {cible}
                </button>
              )}
              {etatDeplacement === "en_cours" && (
                <span className="text-[10px] text-content-muted flex items-center gap-1">
                  <Loader2 size={10} className="animate-spin" /> Déplacement…
                </span>
              )}
              {etatDeplacement === "ok" && (
                <span className="text-[10px] text-green-400">✓ {msgDeplacement}</span>
              )}
              {etatDeplacement === "erreur" && (
                <span className="text-[10px] text-red-400" title={msgDeplacement}>✗ Échec déplacement</span>
              )}
            </div>
          );
        })()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChampTexte
          etiquette="Nom *"
          valeur={brouillon.nom}
          onChange={(v) => modifierChamp("nom", v)}
          erreur={erreurs.nom}
          placeholder="Nom du personnage"
        />
        <ChampImage
          valeur={brouillon.image}
          nom={brouillon.nom}
          onChange={(v) => modifierChamp("image", v)}
        />

        {/* Classe(s) / DV raciaux — adaptatif selon le mode */}
        {!estCreature ? (
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
              Classe(s) &amp; Niveau
            </label>
            {(brouillon.classes && brouillon.classes.length > 0
              ? brouillon.classes
              : [{ classe: brouillon.classe || "", niveau: brouillon.niveau || "" }]
            ).map((entry, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <select
                  value={entry.classe || ""}
                  onChange={(e) => {
                    const nv = [...(brouillon.classes || arr)];
                    nv[i] = { ...nv[i], classe: e.target.value };
                    modifierChamp("classes", nv);
                    modifierChamp("classe", nv[0]?.classe || "");
                    modifierChamp("niveau", nv.reduce((s, c) => s + (Number(c.niveau) || 0), 0));
                  }}
                  className="input-forge text-sm flex-1"
                >
                  <option value="">— Classe —</option>
                  {CLASSES_TOUTES.map((g) => (
                    <optgroup key={g.groupe} label={g.groupe}>
                      {g.options.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <input
                  type="number"
                  value={entry.niveau || ""}
                  onChange={(e) => {
                    const nv = [...(brouillon.classes || arr)];
                    nv[i] = { ...nv[i], niveau: Number(e.target.value) || 0 };
                    modifierChamp("classes", nv);
                    modifierChamp("classe", nv[0]?.classe || "");
                    modifierChamp("niveau", nv.reduce((s, c) => s + (Number(c.niveau) || 0), 0));
                  }}
                  className="input-forge w-20 text-center text-sm"
                  placeholder="Niv"
                  min="0"
                  max="20"
                />
                {arr.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const nv = (brouillon.classes || arr).filter((_, j) => j !== i);
                      modifierChamp("classes", nv);
                      modifierChamp("classe", nv[0]?.classe || "");
                      modifierChamp("niveau", nv.reduce((s, c) => s + (Number(c.niveau) || 0), 0));
                    }}
                    className="p-1 text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const existantes = brouillon.classes || [{ classe: brouillon.classe || "", niveau: brouillon.niveau || 0 }];
                modifierChamp("classes", [...existantes, { classe: "", niveau: 1 }]);
              }}
              className="text-[11px] px-2 py-1 bg-surface border border-surface-border text-content-muted hover:text-content hover:border-accent-muted transition-colors flex items-center gap-1"
            >
              <Plus size={10} />
              Ajouter une classe
            </button>
            {erreurs.niveau && (
              <p className="text-red-400 text-xs">{erreurs.niveau}</p>
            )}
          </div>
        ) : (
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
              Dés de vie raciaux
            </label>
            {statsCreature?.progression && (
              <div className="flex flex-wrap items-center gap-3 px-2.5 py-1.5 bg-purple-900/10 border border-purple-800/20 text-xs text-purple-300">
                <Calculator size={11} />
                <span>SRD : d{statsCreature.progression.dv} — BBA {statsCreature.progression.bba} — {statsCreature.progression.ptComp} pt/comp/DV</span>
                {statsCreature.progression.notes && (
                  <span className="text-content-muted">— {statsCreature.progression.notes}</span>
                )}
              </div>
            )}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] text-content-muted uppercase">Nombre de DV</label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={dvParse?.nombre || ""}
                  onChange={(e) => {
                    const n = Math.max(1, parseInt(e.target.value) || 1);
                    const t = dvParse?.type || (statsCreature?.progression?.dv ?? 8);
                    const b = dvParse?.bonus || 0;
                    modifierChamp("dv", `${n}d${t}${b !== 0 ? (b > 0 ? `+${b}` : `${b}`) : ""}`);
                  }}
                  className="input-forge w-full text-center text-sm mt-1"
                  placeholder="Ex: 6"
                />
              </div>
              <div>
                <label className="text-[10px] text-content-muted uppercase">Type de dé</label>
                <select
                  value={dvParse?.type || ""}
                  onChange={(e) => {
                    const n = dvParse?.nombre || 1;
                    const t = parseInt(e.target.value);
                    const b = dvParse?.bonus || 0;
                    modifierChamp("dv", `${n}d${t}${b !== 0 ? (b > 0 ? `+${b}` : `${b}`) : ""}`);
                  }}
                  className="input-forge w-full text-sm mt-1"
                >
                  <option value="">— Dé —</option>
                  {[4, 6, 8, 10, 12].map((d) => (
                    <option key={d} value={d}>
                      {`d${d}`}{statsCreature?.progression?.dv === d ? " ✓ SRD" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] text-content-muted uppercase">Bonus total (Con)</label>
                <input
                  type="number"
                  value={dvParse?.bonus || 0}
                  onChange={(e) => {
                    const n = dvParse?.nombre || 1;
                    const t = dvParse?.type || (statsCreature?.progression?.dv ?? 8);
                    const b = parseInt(e.target.value) || 0;
                    modifierChamp("dv", `${n}d${t}${b !== 0 ? (b > 0 ? `+${b}` : `${b}`) : ""}`);
                  }}
                  className="input-forge w-full text-center text-sm mt-1"
                  placeholder="0"
                />
              </div>
            </div>
            {brouillon.dv && (
              <p className="text-xs font-mono text-accent-light">
                DV : {brouillon.dv}
                {statsCreature?.pvMoyens != null && (
                  <span className="text-content-muted ml-2">→ ~{statsCreature.pvMoyens} PV estimés</span>
                )}
              </p>
            )}
          </div>
        )}

        <ChampSelection
          etiquette="Facteur de puissance"
          valeur={brouillon.fp != null ? String(brouillon.fp) : ""}
          onChange={(v) => modifierChamp("fp", v === "" ? null : (isNaN(Number(v)) ? v : Number(v)))}
          options={VALEURS_FP.map((v) => ({ code: String(v), label: `FP ${v}` }))}
          placeholder="— FP —"
        />
        <ChampSelection
          etiquette="Taille"
          valeur={brouillon.taille}
          onChange={(v) => modifierChamp("taille", v)}
          options={TAILLES.map((t) => t.label)}
          erreur={erreurs.taille}
        />
        <SelecteurTypeCreature
          valeur={brouillon.type}
          onChange={(v) => modifierChamp("type", v)}
        />
        <ChampSelection
          etiquette="Alignement"
          valeur={brouillon.alignement}
          onChange={(v) => modifierChamp("alignement", v)}
          options={ALIGNEMENTS}
          erreur={erreurs.alignement}
        />
        <ChampSelection
          etiquette="Disposition"
          valeur={brouillon.disposition}
          onChange={(v) => modifierChamp("disposition", v)}
          options={DISPOSITIONS}
          placeholder="— Disposition —"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChampTexte
          etiquette="Rôle"
          valeur={brouillon.role}
          onChange={(v) => modifierChamp("role", v)}
          placeholder="Rôle narratif"
        />
        <div className="md:col-span-2 space-y-3">
          <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
            Environnement
          </label>

          {/* Biome D&D 3.5 */}
          <div className="space-y-1">
            <span className="text-[10px] text-content-muted">Biome (D&amp;D 3.5)</span>
            <ComboboxFiltrable
              placeholder="Sélectionner un biome…"
              options={BIOMES_DND35}
              onSelect={(v) => {
                modifierChamp("biome", v);
                const res = brouillon.residence ? obtenirNomLieu(brouillon.residence) : "";
                modifierChamp("environnement", [v, res].filter(Boolean).join(" – "));
              }}
            />
            {brouillon.biome && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-surface/60 border border-surface-border text-content-secondary">
                {brouillon.biome}
                <button type="button" onClick={() => {
                  modifierChamp("biome", "");
                  const res = brouillon.residence ? obtenirNomLieu(brouillon.residence) : "";
                  modifierChamp("environnement", res);
                }} className="text-red-400 hover:text-red-300 ml-0.5"><X size={10} /></button>
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Résidence */}
            <div className="space-y-1">
              <span className="text-[10px] text-content-muted flex items-center gap-1">
                <Home size={10} /> Résidence
              </span>
              <ComboboxFiltrable
                placeholder="Lieu de résidence…"
                options={obtenirLieuxScenario()}
                onSelect={(v) => {
                  modifierChamp("residence", v);
                  const nomRes = obtenirNomLieu(v);
                  const biome = brouillon.biome || "";
                  modifierChamp("environnement", [biome, nomRes].filter(Boolean).join(" – "));
                }}
              />
              {brouillon.residence && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-blue-900/20 border border-blue-800/30 text-blue-300">
                  <Home size={10} />
                  {obtenirNomLieu(brouillon.residence)}
                  <button type="button" onClick={() => {
                    modifierChamp("residence", "");
                    modifierChamp("environnement", brouillon.biome || "");
                  }} className="text-red-400 hover:text-red-300 ml-0.5"><X size={10} /></button>
                </span>
              )}
            </div>

            {/* Lieux de rencontre */}
            <div className="space-y-1">
              <span className="text-[10px] text-content-muted flex items-center gap-1">
                <MapPin size={10} /> Lieux de rencontre
              </span>
              <ComboboxFiltrable
                placeholder="Ajouter un lieu de rencontre…"
                options={obtenirLieuxScenario()}
                exclure={[brouillon.residence, ...(brouillon.lieuxRencontre || [])].filter(Boolean)}
                onSelect={(v) => {
                  const actuel = brouillon.lieuxRencontre || [];
                  if (!actuel.includes(v)) {
                    modifierChamp("lieuxRencontre", [...actuel, v]);
                  }
                }}
              />
              {(brouillon.lieuxRencontre || []).length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {(brouillon.lieuxRencontre || []).map((lid) => (
                    <span key={lid} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-amber-900/20 border border-amber-800/30 text-amber-300">
                      <MapPin size={10} />
                      {obtenirNomLieu(lid)}
                      <button type="button" onClick={() => {
                        modifierChamp("lieuxRencontre", (brouillon.lieuxRencontre || []).filter((l) => l !== lid));
                      }} className="text-red-400 hover:text-red-300 ml-0.5"><X size={10} /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {brouillon.environnement && !brouillon.biome && !brouillon.residence && (
            <p className="text-[10px] text-amber-400 italic">
              Valeur libre : « {brouillon.environnement} » — sélectionnez un biome ou lieu pour structurer.
            </p>
          )}
        </div>
      </div>
    </SectionPnj>
  );
}

export default SectionIdentite;
