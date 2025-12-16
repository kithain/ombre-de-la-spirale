import React, { useEffect, useMemo, useState } from "react";
import { Skull, Filter } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { universeData } from "../../data/universe/universe";
import { bestiaryData35FR as bestiaryData } from "../../data/bestiary/bestiary";
import { pnjPrincipaux } from "../../data/pnj/pnjPrincipaux";
import { pnjEnnemis } from "../../data/pnj/pnjEnnemis";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { findNpcOccurrences } from "../../utils/dataLinks";
import { cn } from "../../utils/cn";

function AntagonistView() {
  const [openId, setOpenId] = useState(null);
  const [openBestiaryId, setOpenBestiaryId] = useState(null);
  const [category, setCategory] = useState("allies"); // allies | ennemis | monstres
  const [fpFilter, setFpFilter] = useState("all"); // all | low | mid | high | boss
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
    const carac = b.carac || b.abilities;
    const att_complete = b.att_complete || b.full_attack;
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
      carac,
      att_complete,
    };
  };

  const alliesList = useMemo(() => {
    return (pnjPrincipaux || [])
      .filter((npc) => !(npc.isEnemy ?? npc.est_ennemi ?? false))
      .map((npc) => ({
        ...npc,
        occurrences: findNpcOccurrences(npc.id),
        category: "allies",
      }));
  }, []);

  const ennemisList = useMemo(() => {
    return (pnjEnnemis || []).map((npc) => ({
      ...npc,
      isEnemy: npc.isEnemy ?? npc.est_ennemi ?? true,
      occurrences: findNpcOccurrences(npc.id),
      category: "ennemis",
    }));
  }, []);

  const monstersList = useMemo(() => {
    return (bestiaryData || []).map((b) => {
      const extracted = extractBestiaryFields(b) || {};
      return {
        ...extracted,
        name: extracted.name || b.name,
        role: b.role || "Créature hostile",
        isEnemy: true,
        occurrences: [],
        category: "monstres",
      };
    });
  }, [bestiaryData]);

  const allCategories = useMemo(
    () => ({
      allies: alliesList,
      ennemis: ennemisList,
      monstres: monstersList,
    }),
    [alliesList, ennemisList, monstersList]
  );

  const npcCategoryIndex = useMemo(() => {
    const map = new Map();
    (alliesList || []).forEach((npc) => {
      if (npc?.id && !map.has(npc.id)) map.set(npc.id, "allies");
    });
    (ennemisList || []).forEach((npc) => {
      if (npc?.id && !map.has(npc.id)) map.set(npc.id, "ennemis");
    });
    (monstersList || []).forEach((npc) => {
      if (npc?.id && !map.has(npc.id)) map.set(npc.id, "monstres");
    });
    return map;
  }, [alliesList, ennemisList, monstersList]);

  const baseList = allCategories[category] || [];
  const filtered = baseList.filter((npc) => {
    if (fpFilter === "all") return true;
    const fpValue = Number(npc.fp ?? npc.cr);
    if (Number.isNaN(fpValue)) return true; // on laisse passer si FP absent
    if (fpFilter === "low") return fpValue <= 3;
    if (fpFilter === "mid") return fpValue >= 4 && fpValue <= 6;
    if (fpFilter === "high") return fpValue >= 7 && fpValue <= 9;
    if (fpFilter === "boss") return fpValue >= 10;
    return true;
  });

  const noScenes = baseList.filter((n) => (n.occurrences || []).length === 0);
  const formatOcc = (occ) =>
    `${occ.scenarioId}.${occ.actNumber}.${occ.sceneNumber} : ${occ.sceneTitle}`;

  const formatCaValue = (caValue) => {
    if (!caValue) return null;
    if (typeof caValue === "string" || typeof caValue === "number") return caValue;
    const total = caValue.total ?? caValue?.[0];
    const touch = caValue.touch ?? caValue?.touch?.[0] ?? caValue?.touch;
    const flat = caValue.flatFooted ?? caValue.flat ?? caValue?.flatFooted?.[0];
    if (total !== undefined) {
      return `${total}${touch !== undefined ? ` (contact ${touch}` : ""}${
        flat !== undefined ? `${touch !== undefined ? ", " : " ("}pris au dépourvu ${flat}` : ""
      }${touch !== undefined || flat !== undefined ? ")" : ""}`;
    }
    return null;
  };

  const renderUsageList = (label, items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="space-y-1">
        <p className="text-content-muted text-[11px] uppercase tracking-widest">{label}</p>
        <ul className="list-disc list-inside text-[12px]">
          {items.map((item) => (
            <li key={`${item.name}-${item.details ?? Math.random()}`}>
              <span className="font-semibold text-content-light">{item.name}</span>
              {item.details && <span className="text-content-secondary"> – {item.details}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderUsageDetails = (usage) => {
    if (!usage) return null;
    return (
      <div className="space-y-2 text-[13px] text-content-secondary border border-surface-border rounded bg-surface-overlay p-3">
        <h4 className="text-[11px] uppercase tracking-widest text-content-subtle">
          Fiche tactique
        </h4>
        {usage.bookReference && (
          <p>
            <span className="text-content-muted">Source :</span> {usage.bookReference}
          </p>
        )}
        {usage.scenarioContext && (
          <p>
            <span className="text-content-muted">Contexte :</span> {usage.scenarioContext}
          </p>
        )}
        {renderUsageList("Sorts ciblés", usage.spells)}
        {renderUsageList("Actions spéciales", usage.specialActions)}
        {renderUsageList("Dons mis en avant", usage.feats || usage.tacticFeats)}
        {usage.tacticSummary && (
          <p>
            <span className="text-content-muted">Tactiques :</span> {usage.tacticSummary}
          </p>
        )}
      </div>
    );
  };

  const renderNpcStats = (npc) => {
    const cr = npc.cr ?? npc.fp;
    const ca = formatCaValue(npc.ca || npc.ac);
    const pv = npc.pv ?? npc.hp;
    const attaques = npc.attack || npc.attaque || npc.fullAttack || npc.att_complete;
    const taille = npc.size;
    const type = npc.type;
    const alignement = npc.alignment;
    const vit = npc.speed || npc.vit;
    const saves = npc.saves || npc.js;
    const specialAttacks = npc.specialAttacks || npc.att_spé || npc.attSpe;
    const specialQualities = npc.specialQualities || npc.qual_spé || npc.qualites;
    const skills = npc.skills || npc.compétences || npc.competences;
    const feats = npc.feats || npc.dons;
    const abilities = npc.abilities || npc.carac;

    const tooltip = {
      fp: "Facteur de Puissance / CR.",
      type: "Type et sous-types.",
      pv: "Points de Vie.",
      taille: "Taille de la créature.",
      ca: "Classe d'Armure (contact / pris au dépourvu si précisés).",
      attaque: "Attaque principale ou à outrance.",
      specialAttacks: "Attaques spéciales / pouvoirs offensifs.",
      specialQualities: "Défenses, immunités, résistances.",
      env: "Environnement ou zone d'apparition.",
      orga: "Organisation typique.",
      sens: "Sens/Perception spéciaux.",
      ini: "Modificateur d'initiative.",
      dv: "Dés de Vie.",
      js: "Jets de sauvegarde.",
      vit: "Vitesses de déplacement.",
      abb: "Bonus d'Attaque de Base.",
      grp: "Bonus de lutte/manœuvre.",
      espace: "Espace au sol.",
      allonge: "Allonge des attaques.",
      competences: "Compétences notables.",
      carac: "Caractéristiques (For, Dex, Con, Int, Sag, Cha).",
      dons: "Dons.",
      tactiques: "Comportement tactique.",
      butin: "Objets ou ressources récupérables.",
    };

    return (
      <div className="space-y-2 text-[12px] text-content-secondary border border-surface-border rounded bg-surface-overlay p-3">
        <h4 className="text-[11px] uppercase tracking-widest text-content-subtle">
          Caractéristiques
        </h4>
        <p className="text-accent-light uppercase tracking-wider">
          {taille && <span title={tooltip.taille}>{taille} </span>}
          {type && <span title={tooltip.type}>{type}</span>}
          {alignement && <span className="text-content-muted normal-case"> ({alignement})</span>}
        </p>

        <p title={tooltip.dv}>
          <span className="text-content-muted">DV :</span> {npc.dv ?? npc.hd ?? "–"}{" "}
          {pv !== undefined ? `(${pv} pv)` : ""}
        </p>
        <p title={tooltip.ini}>
          <span className="text-content-muted">Init :</span> {npc.ini ?? npc.initiative ?? "–"} ;{" "}
          <span className="text-content-muted">Sens :</span> {npc.sens ?? npc.senses ?? "–"}
        </p>
        <p title={tooltip.vit}>
          <span className="text-content-muted">Vitesses :</span> {vit ?? "–"}
        </p>
        <p title={tooltip.ca}>
          <span className="text-content-muted">CA :</span> {ca ?? "–"}
        </p>
        <p title={tooltip.attaque}>
          <span className="text-content-muted">Attaque :</span> {attaques ?? "–"}
        </p>
        {(npc.fullAttack || npc.att_complete) && (
          <p>
            <span className="text-content-muted">Att. à outrance :</span>{" "}
            {npc.fullAttack || npc.att_complete}
          </p>
        )}
        {(npc.abb || npc.bab || npc.grp) && (
          <p>
            <span className="text-content-muted">ABB/Lutte :</span> {npc.abb ?? npc.bab ?? "–"} /{" "}
            {npc.grp ?? "–"}
          </p>
        )}
        {(npc.espace || npc.space || npc.allonge || npc.reach) && (
          <p>
            <span className="text-content-muted">Espace/Allonge :</span>{" "}
            {npc.espace ?? npc.space ?? "–"} / {npc.allonge ?? npc.reach ?? "–"}
          </p>
        )}
        {Array.isArray(specialAttacks) && specialAttacks.length > 0 && (
          <p title={tooltip.specialAttacks}>
            <span className="text-content-muted">Att. spé. :</span> {specialAttacks.join(" · ")}
          </p>
        )}
        {Array.isArray(specialQualities) && specialQualities.length > 0 && (
          <p title={tooltip.specialQualities}>
            <span className="text-content-muted">Qualités spé. :</span> {specialQualities.join(" · ")}
          </p>
        )}
        {saves && (
          <p title={tooltip.js}>
            <span className="text-content-muted">JS :</span>{" "}
            {typeof saves === "string"
              ? saves
              : `Vig ${saves.fort ?? saves.vig} / Réf ${saves.ref ?? saves.réf} / Vol ${saves.will ?? saves.vol}`}
          </p>
        )}
        {abilities && (
          <p title={tooltip.carac}>
            <span className="text-content-muted">Carac :</span> For {abilities.str ?? abilities.for}, Dex{" "}
            {abilities.dex}, Con {abilities.con}, Int {abilities.int}, Sag {abilities.wis ?? abilities.sag}, Cha{" "}
            {abilities.cha}
          </p>
        )}
        {skills && (
          <p title={tooltip.competences}>
            <span className="text-content-muted">Compétences :</span> {skills}
          </p>
        )}
        {feats && (
          <p title={tooltip.dons}>
            <span className="text-content-muted">Dons :</span> {feats}
          </p>
        )}
        {(npc.fp || cr !== undefined) && (
          <p title={tooltip.fp}>
            <span className="text-content-muted">FP/CR :</span> {cr ?? npc.fp}
          </p>
        )}
        {(npc.butin || npc.loot) && (
          <p title={tooltip.butin}>
            <span className="text-content-muted">Butin :</span> {npc.butin ?? npc.loot}
          </p>
        )}
        {npc.tactiques && (
          <p title={tooltip.tactiques}>
            <span className="text-content-muted">Tactiques :</span> {npc.tactiques}
          </p>
        )}
      </div>
    );
  };

  // Auto-ouvrir si pnj param dans l'URL
  useEffect(() => {
    const target = searchParams.get("pnj");
    if (target) {
      const resolvedCategory = npcCategoryIndex.get(target);
      if (resolvedCategory) {
        setCategory(resolvedCategory);
      }

      // évite de masquer le PNJ via un filtre laissé actif
      setFpFilter("all");

      setOpenId(target);

      // si on arrive sur une entrée bestiaire, ouvrir directement son panneau
      setOpenBestiaryId(bestiaryMap.has(target) ? target : null);
    }
  }, [searchParams, npcCategoryIndex, bestiaryMap]);

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
        subtitle="Bestiaire"
      />

      <Card className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2 text-sm text-content-secondary">
          <Filter size={16} className="text-accent" />
          <span>Filtres</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { id: "allies", label: "PNJ Alliés" },
            { id: "ennemis", label: "PNJ Ennemis" },
            { id: "monstres", label: "Monstres" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={cn(
                "px-3 py-1 rounded border text-xs uppercase tracking-widest transition-colors",
                category === cat.id
                  ? "border-accent-dark text-accent-light bg-accent-surface"
                  : "border-surface-border text-content-secondary hover:border-accent-dark hover:text-accent-light"
              )}
            >
              {cat.label}
            </button>
          ))}
          <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-content-secondary border border-surface-border rounded px-2 py-1 bg-surface-overlay">
            <span>FP</span>
            <select
              value={fpFilter}
              onChange={(e) => setFpFilter(e.target.value)}
              className="bg-transparent text-sm outline-none"
            >
              <option value="all">Tous</option>
              <option value="low">0 – 3</option>
              <option value="mid">4 – 6</option>
              <option value="high">7 – 9</option>
              <option value="boss">10+</option>
            </select>
          </label>
        </div>
      </Card>

      {noScenes.length > 0 && (
        <Card className="border-accent-muted/40 bg-surface-overlay shadow-lg">
          <h4 className="text-sm font-mono tracking-widest text-accent-light uppercase border-b border-accent-muted/40 pb-2 mb-3">
            PNJ sans apparition liée (à relier aux scènes)
          </h4>
          <div className="flex flex-wrap gap-2 text-sm">
            {noScenes.map((npc) => (
              <span
                key={npc.id}
                className="px-3 py-1 rounded-full border border-accent-muted/60 text-accent-light bg-accent-muted/20 shadow-[0_0_0_1px_rgba(92,32,21,0.35)]"
                title={`${npc.zone?.name || ""} · ${npc.loc?.name || ""}`}
              >
                {npc.name}
              </span>
            ))}
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
                  <div className="border border-accent-muted/40 rounded bg-surface-overlay p-3 space-y-2">
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
                          taille,
                          alignement,
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
                          carac,
                          att_complete,
                        } = data;
                        const tooltip = {
                          fp: "Facteur de Puissance (niveau de difficulté pour 4 PJ de ce niveau).",
                          type: "Type et sous-types (détermine immunités et DV).",
                          pv: "Points de Vie totaux.",
                          taille: "Taille de la créature.",
                          ca: "Classe d'Armure (contact / pris au dépourvu inclus si précisés).",
                          attaque: "Attaque principale ou à outrance.",
                          att_complete: "Attaque à outrance (toutes les attaques sur un round).",
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
                          carac: "Caractéristiques (Force, Dextérité, Constitution, Intelligence, Sagesse, Charisme).",
                          dons: "Dons appris.",
                          tactiques: "Comportement tactique en combat.",
                          butin: "Objets ou ressources récupérables.",
                        };
                        return (
                          <div className="space-y-2 text-[12px] text-content-secondary">
                            {/* Ligne 1: Type, Taille, Alignement */}
                            <p className="text-accent-light uppercase tracking-wider">
                              {taille && <span title={tooltip.taille}>{taille} </span>}
                              {type && <span title={tooltip.type}>{type}</span>}
                              {alignement && <span className="text-content-muted normal-case"> ({alignement})</span>}
                            </p>

                            {/* Ligne 2: DV, PV, Init, Sens, Vitesses */}
                            <p><span className="text-content-muted">DV :</span> {dv ?? '–'} {pv !== undefined ? `(${pv} pv)` : ''}</p>
                            <p><span className="text-content-muted">Init :</span> {ini ?? '–'} ; <span className="text-content-muted">Sens :</span> {sens ?? '–'}</p>
                            <p><span className="text-content-muted">Vitesses :</span> {vit ?? '–'}</p>

                            {/* Ligne 3: CA */}
                            <p><span className="text-content-muted">CA :</span> {ca ?? '–'}</p>

                            {/* Ligne 4: Attaques */}
                            <p><span className="text-content-muted">Attaque :</span> {attaque ?? '–'}</p>
                            {att_complete && <p><span className="text-content-muted">Att. à outrance :</span> {att_complete}</p>}
                            <p><span className="text-content-muted">ABB/Lutte :</span> {abb ?? '–'} / {grp ?? '–'}</p>
                            <p><span className="text-content-muted">Espace/Allonge :</span> {espace ?? '–'} / {allonge ?? '–'}</p>

                            {/* Ligne 5: Attaques spéciales & Qualités spéciales */}
                            {Array.isArray(attSpe) && attSpe.length > 0 && <p><span className="text-content-muted">Att. spé. :</span> {attSpe.join(" · ")}</p>}
                            {Array.isArray(qualites) && qualites.length > 0 && <p><span className="text-content-muted">Qualités spé. :</span> {qualites.join(" · ")}</p>}

                            {/* Ligne 6: JS */}
                            <p><span className="text-content-muted">JS :</span> {js ? (typeof js === "string" ? js : `Vig ${js.vig}, Réf ${js.réf ?? js.ref}, Vol ${js.vol}`) : '–'}</p>

                            {/* Ligne 7: Caractéristiques */}
                            {carac && <p><span className="text-content-muted">Carac :</span> For {carac.for}, Dex {carac.dex}, Con {carac.con}, Int {carac.int}, Sag {carac.sag}, Cha {carac.cha}</p>}

                            {/* Ligne 8: Compétences & Dons */}
                            {competences && (
                              <p title={tooltip.competences}>
                                <span className="text-content-muted">Compétences :</span> {competences}
                              </p>
                            )}
                            {dons && (
                              <p title={tooltip.dons}>
                                <span className="text-content-muted">Dons :</span> {dons}
                              </p>
                            )}

                            {/* Ligne 9: Environnement, Organisation, FP, Butin */}
                            <p><span className="text-content-muted">Environnement :</span> {env ?? '–'}</p>
                            <p><span className="text-content-muted">Organisation :</span> {orga ?? '–'}</p>
                            <p><span className="text-content-muted">FP :</span> {fp ?? '–'} ; <span className="text-content-muted">Butin :</span> {butin ?? '–'}</p>

                            {/* Ligne 10: Tactiques */}
                            {tactiques && (
                              <p title={tooltip.tactiques}>
                                <span className="text-content-muted">Tactiques :</span> {tactiques}
                              </p>
                            )}
                          </div>
                        );
                      })()
                    )}
                  </div>
                )}
                {renderUsageDetails(npc.tactical)}
                {renderNpcStats(npc)}
                {!npc.tactical && (npc.role || npc.description) && (
                  <div className="text-sm text-content-secondary space-y-1">
                    <h4 className="text-xs uppercase tracking-widest text-content-subtle">Présentation</h4>
                    <p>{npc.role || npc.description}</p>
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
