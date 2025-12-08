import React, { useEffect, useMemo, useState } from "react";
import { Skull, Filter } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { universeData } from "../../data/universe";
import { bestiaryData35FR as bestiaryData } from "../../data/bestiary";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { findNpcOccurrences } from "../../utils/dataLinks";
import { cn } from "../../utils/cn";

function AntagonistView() {
  const [showEnemiesOnly, setShowEnemiesOnly] = useState(false);
  const [hideNoScenes, setHideNoScenes] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [openBestiaryId, setOpenBestiaryId] = useState(null);
  const [searchParams] = useSearchParams();

  const bestiaryMap = useMemo(() => {
    const map = new Map();
    (bestiaryData || []).forEach((b) => map.set(b.id, b));
    return map;
  }, []);

  const extractBestiaryFields = (b) => {
    if (!b) return null;
    const ca = b.ca || b.ac?.total || b.ac;
    const pv = b.pv ?? b.hp;
    const fp = b.fp ?? b.cr;
    const attaque = b.attaque || b.attack;
    const qualites =
      b.qual_spé || b.qualites || b.specialQualities || b.special_qualities || [];
    const attSpe = b.att_spé || b.specialAttacks || b.attacks_speciales || [];
    const env = b.environnement || b.environment;
    const orga = b.organisation || b.organization;
    const sens = b.sens || b.senses;
    const ini = b.ini || b.initiative;
    const dv = b.dv || b.hd;
    const js = b.js || b.saves;
    const vit = b.vit || b.speed;
    const abb = b.abb || b.bab;
    const grp = b.grp || b.grapple;
    const espace = b.espace || b.space;
    const allonge = b.allonge || b.reach;
    const competences = b.compétences || b.competences || b.skills;
    const dons = b.dons || b.feats;
    const tactiques = b.tactiques || b.tactics;
    const butin = b.butin || b.loot;
    return {
      id: b.id,
      name: b.name,
      taille: b.size,
      type: b.type,
      alignement: b.alignment,
      ca,
      pv,
      fp,
      attaque,
      qualites,
      attSpe,
      env,
      orga,
      sens,
      ini,
      dv,
      js,
      vit,
      abb,
      grp,
      espace,
      allonge,
      competences,
      dons,
      tactiques,
      butin,
    };
  };

  const npcList = useMemo(() => {
    const map = new Map();
    (universeData.zones || []).forEach((zone) => {
      (zone.locations || []).forEach((loc) => {
        (loc.npcs || []).forEach((npc) => {
          if (!map.has(npc.id)) {
            map.set(npc.id, {
              ...npc,
              zone,
              loc,
              occurrences: findNpcOccurrences(npc.id),
            });
          }
        });
      });
    });
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const spiralMineBestiary = useMemo(() => {
    const target = (bestiaryData || []).filter((b) => {
      const env = (b.environnement || b.environment || "").toLowerCase();
      return env.includes("spirale") || env.includes("mine");
    });
    return target.map((b) => {
      const extracted = extractBestiaryFields(b) || {};
      return {
        id: b.id,
        name: b.name,
        env: extracted.env,
        fp: extracted.fp,
        pv: extracted.pv,
        ca: extracted.ca,
        attaque: extracted.attaque,
      };
    });
  }, [bestiaryData]);

  let filtered = npcList;
  if (showEnemiesOnly) filtered = filtered.filter((n) => n.isEnemy);
  if (hideNoScenes) filtered = filtered.filter((n) => n.occurrences.length > 0);

  const noScenes = npcList.filter((n) => n.occurrences.length === 0);
  const formatOcc = (occ) =>
    `${occ.scenarioId}.${occ.actNumber}.${occ.sceneNumber} : ${occ.sceneTitle}`;

  // Auto-ouvrir si pnj param dans l'URL
  useEffect(() => {
    const target = searchParams.get("pnj");
    if (target) {
      setOpenId(target);
    }
  }, [searchParams]);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
    // fermer le panneau bestiaire si on ferme la carte
    setOpenBestiaryId((prev) => (prev === id ? null : prev));
  };

  const toggleBestiary = (id) => {
    setOpenBestiaryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionTitle
        title="PNJ & Créatures"
        icon={Skull}
        subtitle="Référence rapide des alliés, ennemis et contacts"
      />

      <Card className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2 text-sm text-content-secondary">
          <Filter size={16} className="text-accent" />
          <span>Filtres</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setShowEnemiesOnly((v) => !v)}
            className={cn(
              "px-3 py-1 rounded border text-xs uppercase tracking-widest transition-colors",
              showEnemiesOnly
                ? "border-red-700 text-red-300 bg-red-900/20"
                : "border-surface-border text-content-secondary hover:border-accent-dark hover:text-accent-light"
            )}
          >
            {showEnemiesOnly ? "Ennemis uniquement" : "Tous les PNJ"}
          </button>
          <button
            type="button"
            onClick={() => setHideNoScenes((v) => !v)}
            className={cn(
              "px-3 py-1 rounded border text-xs uppercase tracking-widest transition-colors",
              hideNoScenes
                ? "border-accent-dark text-accent-light bg-accent-surface"
                : "border-surface-border text-content-secondary hover:border-accent-dark hover:text-accent-light"
            )}
          >
            {hideNoScenes ? "Masquer 0 apparition : ON" : "Masquer 0 apparition : OFF"}
          </button>
          <span className="text-xs text-content-subtle">
            {filtered.length} / {npcList.length}
          </span>
        </div>
      </Card>

      {noScenes.length > 0 && (
        <Card className="border-accent-muted/40 bg-accent-surface">
          <h4 className="text-sm font-mono tracking-widest text-accent-light uppercase border-b border-accent-muted/40 pb-2 mb-3">
            PNJ sans apparition liée (à relier aux scènes)
          </h4>
          <div className="flex flex-wrap gap-2 text-sm">
            {noScenes.map((npc) => (
              <span
                key={npc.id}
                className="px-2 py-1 rounded border border-accent-muted/50 text-accent-light bg-accent-surface"
                title={`${npc.zone?.name || ""} · ${npc.loc?.name || ""}`}
              >
                {npc.name}
              </span>
            ))}
          </div>
        </Card>
      )}

      {spiralMineBestiary.length > 0 && (
        <Card className="border-accent-muted/40 bg-accent-surface">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-mono tracking-widest text-accent-light uppercase">
                Bestiaire — Spirale & Mines
              </h3>
              <p className="text-xs text-content-muted">
                Référence rapide des créatures des zones Spirale / galeries.
              </p>
            </div>
            <span className="text-[11px] text-accent-light border border-accent-muted/50 px-2 py-0.5 rounded">
              {spiralMineBestiary.length} entrées
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-accent-light">
              <thead className="text-xs uppercase tracking-widest text-accent-light">
                <tr className="border-b border-accent-muted/40">
                  <th className="text-left py-2 pr-2">Nom</th>
                  <th className="text-left py-2 pr-2">FP</th>
                  <th className="text-left py-2 pr-2">PV / CA</th>
                  <th className="text-left py-2 pr-2">Attaque</th>
                  <th className="text-left py-2">Environnement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent-muted/30">
                {spiralMineBestiary.map((b) => (
                  <tr key={b.id} className="align-top">
                    <td className="py-2 pr-2">
                      <span className="font-semibold">{b.name}</span>
                    </td>
                    <td className="py-2 pr-2 text-accent-light">FP {b.fp ?? "–"}</td>
                    <td className="py-2 pr-2 text-accent-light">
                      {b.pv !== undefined ? `PV ${b.pv}` : "PV –"}
                      {b.ca ? ` · CA ${b.ca}` : ""}
                    </td>
                    <td className="py-2 pr-2 text-accent-light">
                      {b.attaque || "—"}
                    </td>
                    <td className="py-2 text-accent-light text-xs">{b.env || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((npc) => (
          <Card
            key={npc.id}
            className={cn(
              "border-surface-border bg-surface/60",
              npc.isEnemy && "border-red-800/60 shadow-[0_0_0_1px_rgba(185,28,28,0.2)]"
            )}
          >
            <button
              type="button"
              onClick={() => toggleOpen(npc.id)}
              className="w-full text-left flex items-start justify-between gap-3 border-b border-surface-border pb-3 mb-3 hover:border-accent-muted transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-serif text-accent-light">{npc.name}</h3>
                  {npc.isEnemy && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-red-700 text-red-300 bg-red-900/30 uppercase tracking-widest">
                      Ennemi
                    </span>
                  )}
                </div>
                <p className="text-sm text-content-muted">{npc.role}</p>
                <p className="text-xs text-content-subtle mt-1">
                  {npc.zone?.name} · {npc.loc?.name}
                </p>
              </div>
              <span className="text-[11px] text-accent-light font-mono px-2 py-1 rounded border border-accent-muted bg-accent-surface">
                {openId === npc.id ? "–" : "+"}
              </span>
            </button>

            {openId === npc.id && (
              <div className="space-y-3">
                {bestiaryMap.has(npc.id) && (
                  <div className="border border-accent-muted/40 rounded bg-accent-surface p-3 space-y-2">
                    <button
                      type="button"
                      onClick={() => toggleBestiary(npc.id)}
                      className="w-full text-left flex items-center justify-between gap-2 text-sm text-accent-light"
                    >
                      <span className="font-semibold uppercase tracking-widest text-[12px]">
                        Bestiaire
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded border border-accent-muted bg-accent-surface">
                        {openBestiaryId === npc.id ? "Masquer" : "Afficher"}
                      </span>
                    </button>
                    {openBestiaryId === npc.id && (
                      (() => {
                        const data = extractBestiaryFields(bestiaryMap.get(npc.id));
                        if (!data) return null;
                        const {
                          ca,
                          pv,
                          fp,
                          attaque,
                          type,
                          qualites,
                          attSpe,
                          env,
                          orga,
                          sens,
                          ini,
                          dv,
                          js,
                          vit,
                          abb,
                          grp,
                          espace,
                          allonge,
                          competences,
                          dons,
                          tactiques,
                          butin,
                        } = data;
                        const tooltip = {
                          fp: "Facteur de Puissance (niveau de difficulté pour 4 PJ de ce niveau).",
                          type: "Type et sous-types (détermine immunités et DV).",
                          pv: "Points de Vie totaux.",
                          ca: "Classe d'Armure (contact / pris au dépourvu inclus si précisés).",
                          attaque: "Attaque principale ou à outrance.",
                          qualites:
                            "Qualités spéciales : défenses, immunités, résistances, faiblesses notables.",
                          attSpe: "Attaques spéciales et pouvoirs offensifs.",
                          env: "Environnement ou zone d'apparition.",
                          orga: "Organisation typique (solitaire, groupe).",
                          sens: "Sens/Perception spéciaux.",
                          ini: "Modificateur d'initiative total.",
                          dv: "Dés de Vie (impact sur PV/JS).",
                          js: "Jets de sauvegarde (Vigueur / Réflexes / Volonté).",
                          vit: "Vitesses de déplacement (mètres / cases).",
                          abb: "Bonus d'Attaque de Base.",
                          grp: "Bonus de lutte/manœuvre (GRP).",
                          espace: "Espace occupé au sol.",
                          allonge: "Allonge des attaques.",
                          competences: "Compétences notables et modificateurs.",
                          dons: "Dons appris.",
                          tactiques: "Comportement tactique en combat.",
                          butin: "Objets ou ressources récupérables.",
                        };
                        return (
                          <div className="space-y-1 text-sm text-accent-light">
                            <div className="flex flex-wrap gap-2 text-[12px] text-accent-light uppercase tracking-widest">
                              <span title={tooltip.fp}>FP {fp ?? "–"}</span>
                              {type && (
                                <span title={tooltip.type} className="underline decoration-dotted">
                                  {type}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 text-[12px] text-accent-light">
                              {pv !== undefined && (
                                <span title={tooltip.pv}>PV {pv}</span>
                              )}
                              {ca && (
                                <span title={tooltip.ca} className="underline decoration-dotted">
                                  CA {ca}
                                </span>
                              )}
                              {attaque && (
                                <span title={tooltip.attaque}>Attaque {attaque}</span>
                              )}
                            </div>
                            {Array.isArray(qualites) && qualites.length > 0 && (
                              <p
                                className="text-[12px] text-accent-light underline decoration-dotted"
                                title={tooltip.qualites}
                              >
                                SQ : {qualites.slice(0, 2).join(" · ")}
                              </p>
                            )}
                            <div className="grid grid-cols-2 gap-2 text-[12px] text-accent-light pt-1">
                              {env && (
                                <span title={tooltip.env} className="underline decoration-dotted">
                                  Env : {env}
                                </span>
                              )}
                              {orga && (
                                <span title={tooltip.orga} className="underline decoration-dotted">
                                  Orga : {orga}
                                </span>
                              )}
                              {sens && <span title={tooltip.sens}>Sens : {sens}</span>}
                              {ini && <span title={tooltip.ini}>Init : {ini}</span>}
                              {dv && <span title={tooltip.dv}>DV : {dv}</span>}
                              {js && <span title={tooltip.js}>JS : {typeof js === "string" ? js : `Vig ${js.vig} / Réf ${js.réf ?? js.ref} / Vol ${js.vol}`}</span>}
                              {vit && <span title={tooltip.vit}>Vit : {vit}</span>}
                              {abb && <span title={tooltip.abb}>ABB : {abb}</span>}
                              {grp && <span title={tooltip.grp}>GRP : {grp}</span>}
                              {espace && <span title={tooltip.espace}>Espace : {espace}</span>}
                              {allonge && <span title={tooltip.allonge}>Allonge : {allonge}</span>}
                            </div>
                            {Array.isArray(attSpe) && attSpe.length > 0 && (
                              <p title={tooltip.attSpe} className="text-[12px] text-accent-light">
                                Att. spé. : {attSpe.join(" · ")}
                              </p>
                            )}
                            {competences && (
                              <p title={tooltip.competences} className="text-[12px] text-accent-light">
                                Compétences : {competences}
                              </p>
                            )}
                            {dons && (
                              <p title={tooltip.dons} className="text-[12px] text-accent-light">
                                Dons : {dons}
                              </p>
                            )}
                            {tactiques && (
                              <p title={tooltip.tactiques} className="text-[12px] text-accent-light">
                                Tactiques : {tactiques}
                              </p>
                            )}
                            {butin && (
                              <p title={tooltip.butin} className="text-[12px] text-accent-light">
                                Butin : {butin}
                              </p>
                            )}
                          </div>
                        );
                      })()
                    )}
                  </div>
                )}
                {npc.details?.length > 0 && (
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-widest text-content-subtle">Caractéristiques</h4>
                    <ul className="space-y-1 text-sm text-content-secondary">
                      {npc.details.map((d, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 w-1 h-1 rounded-full bg-text-content-subtle block flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {npc.occurrences.length > 0 ? (
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-widest text-content-subtle">
                      Apparitions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {npc.occurrences.map((occ, idx) => (
                        <Link
                          key={`${npc.id}-${idx}`}
                          to={`/scenarios?scenario=${occ.scenarioId}&scene=${encodeURIComponent(
                            occ.sceneTitle
                          )}`}
                          className="px-2 py-0.5 rounded border border-surface-border bg-surface-raised/60 text-[11px] hover:border-accent-dark hover:text-accent-light transition-colors"
                          title={`${occ.scenarioTitle} · ${occ.actTitle} · ${occ.sceneTitle}`}
                        >
                          {formatOcc(occ)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-content-subtle">
                    Aucune apparition liée à une scène pour l'instant.
                  </p>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AntagonistView;
