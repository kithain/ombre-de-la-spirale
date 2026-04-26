import { describe, it, expect } from "vitest";
import {
  calculerModificateur,
  formaterModificateur,
  calculerBBA,
  calculerJSBase,
  calculerPVEstimes,
  formaterDV,
  calculerInitiative,
  calculerCAContact,
  calculerCAPrisAuDepourvu,
  calculerAttaqueCAC,
  calculerAttaqueDist,
  obtenirModTaille,
  calculerStatistiques,
  extraireTypeBase,
  extraireSousTypes,
  parserDV,
  calculerPVMoyens,
  calculerDonsAttendus,
  calculerPointsCompetencesCreature,
  obtenirDegatsNaturels,
  calculerStatistiquesCreature,
  calculerStatsGlobal,
  formaterAttaquesIteratives,
  PROGRESSION_TYPES,
  BONUS_PV_ARTIFICIEL,
  ESPACE_ALLONGE,
  DEGATS_NATURELS,
  calculerPointsAchat,
} from "../calculsDnD35.js";

// ─── MODIFICATEURS DE CARACTÉRISTIQUES ───────────────────────────────

describe("calculerModificateur", () => {
  it("retourne null pour des entrées invalides", () => {
    expect(calculerModificateur(null)).toBeNull();
    expect(calculerModificateur(undefined)).toBeNull();
    expect(calculerModificateur(NaN)).toBeNull();
  });

  it("calcule floor((score - 10) / 2) correctement", () => {
    expect(calculerModificateur(1)).toBe(-5);
    expect(calculerModificateur(8)).toBe(-1);
    expect(calculerModificateur(10)).toBe(0);
    expect(calculerModificateur(11)).toBe(0);
    expect(calculerModificateur(12)).toBe(1);
    expect(calculerModificateur(14)).toBe(2);
    expect(calculerModificateur(16)).toBe(3);
    expect(calculerModificateur(18)).toBe(4);
    expect(calculerModificateur(20)).toBe(5);
    expect(calculerModificateur(30)).toBe(10);
  });
});

describe("formaterModificateur", () => {
  it("formate avec signe", () => {
    expect(formaterModificateur(0)).toBe("+0");
    expect(formaterModificateur(2)).toBe("+2");
    expect(formaterModificateur(-1)).toBe("-1");
  });

  it("retourne — pour null", () => {
    expect(formaterModificateur(null)).toBe("—");
  });
});

// ─── BBA ─────────────────────────────────────────────────────────────

describe("calculerBBA", () => {
  it("bon = niveau", () => {
    expect(calculerBBA("bon", 1)).toBe(1);
    expect(calculerBBA("bon", 5)).toBe(5);
    expect(calculerBBA("bon", 20)).toBe(20);
  });

  it("moyen = floor(3/4 * niveau)", () => {
    expect(calculerBBA("moyen", 1)).toBe(0);
    expect(calculerBBA("moyen", 4)).toBe(3);
    expect(calculerBBA("moyen", 6)).toBe(4);
    expect(calculerBBA("moyen", 8)).toBe(6);
    expect(calculerBBA("moyen", 20)).toBe(15);
  });

  it("faible = floor(niveau / 2)", () => {
    expect(calculerBBA("faible", 1)).toBe(0);
    expect(calculerBBA("faible", 2)).toBe(1);
    expect(calculerBBA("faible", 5)).toBe(2);
    expect(calculerBBA("faible", 10)).toBe(5);
    expect(calculerBBA("faible", 20)).toBe(10);
  });

  it("retourne 0 pour niveau invalide", () => {
    expect(calculerBBA("bon", 0)).toBe(0);
    expect(calculerBBA("bon", -1)).toBe(0);
  });
});

// ─── JETS DE SAUVEGARDE ──────────────────────────────────────────────

describe("calculerJSBase", () => {
  it("bon = floor(niveau/2) + 2", () => {
    expect(calculerJSBase("bon", 1)).toBe(2);
    expect(calculerJSBase("bon", 2)).toBe(3);
    expect(calculerJSBase("bon", 6)).toBe(5);
    expect(calculerJSBase("bon", 10)).toBe(7);
    expect(calculerJSBase("bon", 20)).toBe(12);
  });

  it("faible = floor(niveau/3)", () => {
    expect(calculerJSBase("faible", 1)).toBe(0);
    expect(calculerJSBase("faible", 3)).toBe(1);
    expect(calculerJSBase("faible", 6)).toBe(2);
    expect(calculerJSBase("faible", 9)).toBe(3);
    expect(calculerJSBase("faible", 20)).toBe(6);
  });
});

// ─── PV ESTIMÉS ──────────────────────────────────────────────────────

describe("calculerPVEstimes", () => {
  it("niveau 1 = DV max + mod Con", () => {
    expect(calculerPVEstimes(8, 1, 4)).toBe(12);  // 8 + 4
    expect(calculerPVEstimes(10, 1, 0)).toBe(10);  // 10 + 0
    expect(calculerPVEstimes(4, 1, -1)).toBe(3);   // 4 + (-1)
  });

  it("niveaux suivants = max DV + (moyenne SRD + modCon) * (niv-1)", () => {
    // Prêtre 6 Con 18 (mod +4): d8
    // Niv 1 = 8 + 4 = 12
    // moyenne SRD d8 = (8+1)/2 = 4.5
    // niv 2-6: (4.5 + 4) * 5 = 42.5
    // total = floor(12 + 42.5) = 54
    expect(calculerPVEstimes(8, 6, 4)).toBe(54);
  });

  it("retourne null pour des entrées invalides", () => {
    expect(calculerPVEstimes(null, 5, 2)).toBeNull();
    expect(calculerPVEstimes(8, 0, 2)).toBeNull();
  });

  it("retourne au moins 1 PV", () => {
    expect(calculerPVEstimes(4, 1, -5)).toBe(1);
  });
});

// ─── DV FORMATÉ ──────────────────────────────────────────────────────

describe("formaterDV", () => {
  it("formate correctement", () => {
    expect(formaterDV(8, 6, 4)).toBe("6d8+24");
    expect(formaterDV(10, 5, 0)).toBe("5d10");
    expect(formaterDV(12, 3, -1)).toBe("3d12-3");
  });

  it("retourne vide pour entrées invalides", () => {
    expect(formaterDV(null, 5, 2)).toBe("");
  });
});

// ─── INITIATIVE ──────────────────────────────────────────────────────

describe("calculerInitiative", () => {
  it("retourne le mod Dex formaté", () => {
    expect(calculerInitiative(2)).toBe("+2");
    expect(calculerInitiative(-1)).toBe("-1");
    expect(calculerInitiative(0)).toBe("+0");
  });

  it("retourne vide pour null", () => {
    expect(calculerInitiative(null)).toBe("");
  });
});

// ─── CLASSE D'ARMURE ─────────────────────────────────────────────────

describe("calculerCAContact", () => {
  it("= 10 + modDex + modTaille", () => {
    expect(calculerCAContact(2, 0)).toBe(12);   // 10+2+0
    expect(calculerCAContact(-1, 1)).toBe(10);  // 10-1+1
    expect(calculerCAContact(0, -2)).toBe(8);   // 10+0-2
  });
});

describe("calculerCAPrisAuDepourvu", () => {
  it("= CA totale - bonus Dex (min 0)", () => {
    expect(calculerCAPrisAuDepourvu(19, 2)).toBe(17);  // 19 - max(2,0)
    expect(calculerCAPrisAuDepourvu(15, -1)).toBe(15); // modDex négatif → pas de retrait
    expect(calculerCAPrisAuDepourvu(12, 0)).toBe(12);
  });
});

// ─── ATTAQUES ────────────────────────────────────────────────────────

describe("calculerAttaqueCAC", () => {
  it("= BBA + modFor + modTaille", () => {
    expect(calculerAttaqueCAC(5, 2, 0)).toBe("+7");
    expect(calculerAttaqueCAC(3, -1, 1)).toBe("+3");
  });
});

describe("calculerAttaqueDist", () => {
  it("= BBA + modDex + modTaille", () => {
    expect(calculerAttaqueDist(5, 3, 0)).toBe("+8");
    expect(calculerAttaqueDist(3, -1, -1)).toBe("+1");
  });
});

// ─── TAILLE ──────────────────────────────────────────────────────────

describe("obtenirModTaille", () => {
  it("retourne les modificateurs corrects", () => {
    expect(obtenirModTaille("Petit")).toBe(1);
    expect(obtenirModTaille("Moyen")).toBe(0);
    expect(obtenirModTaille("Grand")).toBe(-1);
    expect(obtenirModTaille("Colossal")).toBe(-8);
    expect(obtenirModTaille("Gigantesque")).toBe(-4);
    expect(obtenirModTaille("Inconnu")).toBe(0);
  });
});

// ─── CALCUL COMPLET ──────────────────────────────────────────────────

// ─── HELPERS CRÉATURES ──────────────────────────────────────────────

describe("extraireTypeBase", () => {
  it("extrait le type de base d'un type composé", () => {
    expect(extraireTypeBase("Mort-vivant (Incorporel)")).toBe("Mort-vivant");
    expect(extraireTypeBase("Extérieur (Chaotique, Extraplanaire, Mal)")).toBe("Extérieur");
    expect(extraireTypeBase("Humanoïde (Humain)")).toBe("Humanoïde");
    expect(extraireTypeBase("Dragon")).toBe("Dragon");
  });

  it("retourne vide pour entrée vide", () => {
    expect(extraireTypeBase("")).toBe("");
    expect(extraireTypeBase(null)).toBe("");
  });
});

describe("extraireSousTypes", () => {
  it("extrait les sous-types entre parenthèses", () => {
    expect(extraireSousTypes("Extérieur (Chaotique, Extraplanaire, Mal)")).toEqual(["Chaotique", "Extraplanaire", "Mal"]);
    expect(extraireSousTypes("Mort-vivant (Incorporel)")).toEqual(["Incorporel"]);
  });

  it("retourne vide sans parenthèses", () => {
    expect(extraireSousTypes("Dragon")).toEqual([]);
    expect(extraireSousTypes(null)).toEqual([]);
  });
});

describe("parserDV", () => {
  it("parse les chaînes DV standards", () => {
    expect(parserDV("4d12")).toEqual({ nombre: 4, type: 12, bonus: 0 });
    expect(parserDV("3d8+6")).toEqual({ nombre: 3, type: 8, bonus: 6 });
    expect(parserDV("6d10-3")).toEqual({ nombre: 6, type: 10, bonus: -3 });
  });

  it("retourne null pour entrées invalides", () => {
    expect(parserDV(null)).toBeNull();
    expect(parserDV("")).toBeNull();
    expect(parserDV("abc")).toBeNull();
  });
});

describe("calculerPVMoyens", () => {
  it("calcule la moyenne SRD monstres (tous DV à la moyenne)", () => {
    // Convention MM/SRD : moyenne = (typeDV + 1) / 2, pas de 1er DV max
    // 1d12 = 6.5 → 6
    expect(calculerPVMoyens(1, 12, 0)).toBe(6);
    // 4d12 = 4 × 6.5 = 26
    expect(calculerPVMoyens(4, 12, 0)).toBe(26);
    // 3d8 = 3 × 4.5 = 13.5 → 13
    expect(calculerPVMoyens(3, 8, 0)).toBe(13);
  });

  it("inclut le bonus fixe", () => {
    // 4d12+4 = 4 × 6.5 + 4 = 30
    expect(calculerPVMoyens(4, 12, 4)).toBe(30);
  });
});

describe("calculerDonsAttendus", () => {
  it("1 don au 1er DV + 1 par tranche de 3", () => {
    expect(calculerDonsAttendus(1)).toBe(1);
    expect(calculerDonsAttendus(2)).toBe(1);
    expect(calculerDonsAttendus(3)).toBe(1);
    expect(calculerDonsAttendus(4)).toBe(2);
    expect(calculerDonsAttendus(6)).toBe(2);
    expect(calculerDonsAttendus(7)).toBe(3);
    expect(calculerDonsAttendus(10)).toBe(4);
  });

  it("retourne 0 pour DV invalide", () => {
    expect(calculerDonsAttendus(0)).toBe(0);
    expect(calculerDonsAttendus(null)).toBe(0);
  });
});

describe("PROGRESSION_TYPES", () => {
  it("couvre les 16 types (15 SRD + Esprit incorporel)", () => {
    expect(Object.keys(PROGRESSION_TYPES).length).toBe(16);
  });

  it("Mort-vivant : d12, BBA faible, Vol bon, con nulle, ptComp 4", () => {
    const mv = PROGRESSION_TYPES["Mort-vivant"];
    expect(mv.dv).toBe(12);
    expect(mv.bba).toBe("faible");
    expect(mv.js.vol).toBe("bon");
    expect(mv.caracNulles).toContain("con");
    expect(mv.ptComp).toBe(4);
  });

  it("Dragon : d12, BBA bon, tous JS bons, ptComp 6", () => {
    const d = PROGRESSION_TYPES["Dragon"];
    expect(d.dv).toBe(12);
    expect(d.bba).toBe("bon");
    expect(d.js.vig).toBe("bon");
    expect(d.js.ref).toBe("bon");
    expect(d.js.vol).toBe("bon");
    expect(d.ptComp).toBe(6);
  });

  it("Vase : d10, int nulle, ptComp 0", () => {
    expect(PROGRESSION_TYPES["Vase"].caracNulles).toContain("int");
    expect(PROGRESSION_TYPES["Vase"].ptComp).toBe(0);
  });

  it("Extérieur : ptComp 8 (le plus élevé)", () => {
    expect(PROGRESSION_TYPES["Extérieur"].ptComp).toBe(8);
  });

  it("Créature artificielle : ptComp 0 (pas d'Int)", () => {
    expect(PROGRESSION_TYPES["Créature artificielle"].ptComp).toBe(0);
  });

  it("Vermine : ptComp 0 (pas d'Int)", () => {
    expect(PROGRESSION_TYPES["Vermine"].ptComp).toBe(0);
  });
});

// ─── POINTS DE COMPÉTENCE CRÉATURE ──────────────────────────────

describe("calculerPointsCompetencesCreature", () => {
  it("Extérieur 5 DV, Int 10 (mod +0) = (8+0)×4 + (8+0)×4 = 64", () => {
    // Premier DV ×4 = 32, DV 2-5 = 8×4 = 32, total 64
    expect(calculerPointsCompetencesCreature("Extérieur", 5, 0)).toBe(64);
  });

  it("Dragon 10 DV, Int 14 (mod +2) = (6+2)×4 + (6+2)×9 = 104", () => {
    expect(calculerPointsCompetencesCreature("Dragon", 10, 2)).toBe(104);
  });

  it("Animal 2 DV, Int 1 (mod -5) = min 1 → 1×4 + 1×1 = 5", () => {
    // ptComp=2, mod=-5 → max(2+(-5), 1) = max(-3, 1) = 1
    expect(calculerPointsCompetencesCreature("Animal", 2, -5)).toBe(5);
  });

  it("Vase (ptComp 0) retourne toujours 0", () => {
    expect(calculerPointsCompetencesCreature("Vase", 5, 0)).toBe(0);
  });

  it("Vermine (ptComp 0) retourne toujours 0", () => {
    expect(calculerPointsCompetencesCreature("Vermine", 4, null)).toBe(0);
  });

  it("Créature artificielle (ptComp 0) retourne toujours 0", () => {
    expect(calculerPointsCompetencesCreature("Créature artificielle", 8, null)).toBe(0);
  });

  it("retourne 0 pour type inconnu", () => {
    expect(calculerPointsCompetencesCreature("Inconnu", 5, 0)).toBe(0);
  });

  it("retourne 0 pour modInt null", () => {
    expect(calculerPointsCompetencesCreature("Extérieur", 5, null)).toBe(0);
  });

  it("Mort-vivant 4 DV, Int 6 (mod -2) = (4+(-2))×4 + (4+(-2))×3 = 8+6 = 14", () => {
    // ptComp=4, mod=-2 → max(4+(-2), 1) = 2
    expect(calculerPointsCompetencesCreature("Mort-vivant", 4, -2)).toBe(14);
  });
});

// ─── BONUS PV CRÉATURES ARTIFICIELLES ───────────────────────────

describe("BONUS_PV_ARTIFICIEL", () => {
  it("Petit = +10, Moyen = +20, Grand = +30", () => {
    expect(BONUS_PV_ARTIFICIEL["Petit"]).toBe(10);
    expect(BONUS_PV_ARTIFICIEL["Moyen"]).toBe(20);
    expect(BONUS_PV_ARTIFICIEL["Grand"]).toBe(30);
  });

  it("Très grand = +40, Gigantesque = +60, Colossal = +80", () => {
    expect(BONUS_PV_ARTIFICIEL["Très grand"]).toBe(40);
    expect(BONUS_PV_ARTIFICIEL["Gigantesque"]).toBe(60);
    expect(BONUS_PV_ARTIFICIEL["Colossal"]).toBe(80);
  });

  it("Infime/Minuscule/Très petit = 0", () => {
    expect(BONUS_PV_ARTIFICIEL["Infime"]).toBe(0);
    expect(BONUS_PV_ARTIFICIEL["Minuscule"]).toBe(0);
    expect(BONUS_PV_ARTIFICIEL["Très petit"]).toBe(0);
  });
});

// ─── ESPACE & ALLONGE ────────────────────────────────────────

describe("ESPACE_ALLONGE", () => {
  it("Moyen : espace 1,5 m, allonge 1,5 m (haut et long)", () => {
    const m = ESPACE_ALLONGE["Moyen"];
    expect(m.espace).toBe("1,5 m");
    expect(m.allonge.haut).toBe("1,5 m");
    expect(m.allonge.long).toBe("1,5 m");
  });

  it("Grand : espace 3 m, allonge 3 m (haut) / 1,5 m (long)", () => {
    const g = ESPACE_ALLONGE["Grand"];
    expect(g.espace).toBe("3 m");
    expect(g.allonge.haut).toBe("3 m");
    expect(g.allonge.long).toBe("1,5 m");
  });

  it("couvre les 9 catégories de taille", () => {
    expect(Object.keys(ESPACE_ALLONGE).length).toBe(9);
  });
});

// ─── DÉGÂTS NATURELS ─────────────────────────────────────────

describe("obtenirDegatsNaturels", () => {
  it("morsure Moyen = 1d6", () => {
    expect(obtenirDegatsNaturels("morsure", "Moyen")).toBe("1d6");
  });

  it("morsure Grand = 1d8", () => {
    expect(obtenirDegatsNaturels("morsure", "Grand")).toBe("1d8");
  });

  it("morsure Petit = 1d4", () => {
    expect(obtenirDegatsNaturels("morsure", "Petit")).toBe("1d4");
  });

  it("griffe Moyen = 1d4", () => {
    expect(obtenirDegatsNaturels("griffe", "Moyen")).toBe("1d4");
  });

  it("griffe Grand = 1d6", () => {
    expect(obtenirDegatsNaturels("griffe", "Grand")).toBe("1d6");
  });

  it("griffe Très grand = 1d8", () => {
    expect(obtenirDegatsNaturels("griffe", "Très grand")).toBe("1d8");
  });

  it("coup Gigantesque = 2d8, coup Colossal = 4d6", () => {
    expect(obtenirDegatsNaturels("coup", "Gigantesque")).toBe("2d8");
    expect(obtenirDegatsNaturels("coup", "Colossal")).toBe("4d6");
  });

  it("retourne null pour type d'attaque inconnu", () => {
    expect(obtenirDegatsNaturels("inconnue", "Moyen")).toBeNull();
  });

  it("retourne null pour taille inconnue", () => {
    expect(obtenirDegatsNaturels("morsure", "Inconnue")).toBeNull();
  });

  it("est insensible à la casse", () => {
    expect(obtenirDegatsNaturels("Morsure", "Moyen")).toBe("1d6");
    expect(obtenirDegatsNaturels("GRIFFE", "Grand")).toBe("1d6");
  });
});

// ─── CALCUL COMPLET CRÉATURE ──────────────────────────────────────

describe("calculerStatistiquesCreature", () => {
  it("retourne null pour un type inconnu", () => {
    expect(calculerStatistiquesCreature({ type: "Inconnu", dv: "1d8" })).toBeNull();
  });

  it("calcule correctement un Blême (Mort-vivant 4 DV)", () => {
    const stats = calculerStatistiquesCreature({
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      pv: 26,
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
      ca: { total: 15, contact: 11, pris_au_depourvu: 14 },
    });

    expect(stats.typeConnu).toBe(true);
    expect(stats.typeBase).toBe("Mort-vivant");
    // BBA faible : floor(4/2) = 2
    expect(stats.bba).toBe(2);
    // JS : Vol bon = floor(4/2)+2 = 4, Vig/Réf faible = floor(4/3) = 1
    // Mort-vivant : Vig utilise mod Cha (+1) au lieu de Con
    expect(stats.jsBase.vol).toBe(4);
    expect(stats.jsBase.vig).toBe(1);
    expect(stats.jsTotal.vig).toBe(2); // 1 + mod Cha 1
    expect(stats.jsTotal.ref).toBe(3); // 1 + mod Dex 2
    expect(stats.jsTotal.vol).toBe(5); // 4 + mod Sag 1
    // Dons attendus : 1 + floor((4-1)/3) = 2
    expect(stats.donsAttendus).toBe(2);
    // Pas d'avertissement DV (d12 correct pour Mort-vivant)
    expect(stats.avertissements._creature_dv_type).toBeUndefined();
  });

  it("génère un avertissement si le type de DV est incorrect", () => {
    const stats = calculerStatistiquesCreature({
      type: "Mort-vivant",
      dv: "4d8", // devrait être d12
      taille: "Moyen",
      carac: { for: null, dex: 10, con: null, int: 6, sag: 10, cha: 10 },
    });
    expect(stats.avertissements._creature_dv_type).toContain("d8");
    expect(stats.avertissements._creature_dv_type).toContain("d12");
  });

  it("avertit si un Mort-vivant a une Constitution", () => {
    const stats = calculerStatistiquesCreature({
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 10, con: 12, int: 6, sag: 10, cha: 10 },
    });
    expect(stats.avertissements._creature_carac_con).toBeDefined();
  });

  it("avertit si une créature incorporelle a de la Force", () => {
    const stats = calculerStatistiquesCreature({
      type: "Mort-vivant (Incorporel)",
      dv: "3d12",
      taille: "Moyen",
      carac: { for: 10, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
    });
    expect(stats.avertissements._creature_incorporel_for).toBeDefined();
  });

  it("calcule un Extérieur (BBA bon, tous JS bons)", () => {
    const stats = calculerStatistiquesCreature({
      type: "Extérieur (Extraplanaire, Loi)",
      dv: "5d8",
      taille: "Grand",
      carac: { for: 17, dex: 13, con: 14, int: 10, sag: 11, cha: 12 },
      ca: { total: 18 },
    });

    expect(stats.typeBase).toBe("Extérieur");
    expect(stats.sousTypes).toEqual(["Extraplanaire", "Loi"]);
    // BBA bon = 5
    expect(stats.bba).toBe(5);
    // Tous JS bons : floor(5/2)+2 = 4
    expect(stats.jsBase.vig).toBe(4);
    expect(stats.jsBase.ref).toBe(4);
    expect(stats.jsBase.vol).toBe(4);
  });

  it("vérifie PV vs moyenne (tolérance 25%)", () => {
    const stats = calculerStatistiquesCreature({
      type: "Géant",
      dv: "4d8",
      taille: "Grand",
      pv: 100, // beaucoup trop élevé pour 4d8
      carac: { for: 21, dex: 8, con: 15, int: 6, sag: 10, cha: 7 },
    });
    expect(stats.avertissements._creature_pv).toBeDefined();
  });

  it("calcule les points de compétence d'un Extérieur", () => {
    const stats = calculerStatistiquesCreature({
      type: "Extérieur (Extraplanaire, Loi)",
      dv: "5d8",
      taille: "Grand",
      carac: { for: 17, dex: 13, con: 14, int: 10, sag: 11, cha: 12 },
      ca: { total: 18 },
    });
    // Extérieur ptComp=8, Int 10 mod +0, 5 DV
    // Premier DV ×4 = 32, DV 2-5 = 8×4 = 32, total 64
    expect(stats.pointsCompetences).toBe(64);
  });

  it("Créature artificielle Moyen : bonus PV +20", () => {
    const stats = calculerStatistiquesCreature({
      type: "Créature artificielle",
      dv: "3d10",
      taille: "Moyen",
      pv: 36,
      carac: { for: 14, dex: 10, con: null, int: null, sag: 10, cha: 1 },
      ca: { total: 15 },
    });
    expect(stats.bonusPVFixe).toBe(20);
    // PV moyens: 10 + 6*2 + 20 = 42
    expect(stats.pvMoyens).toBeDefined();
    expect(stats.pointsCompetences).toBe(0); // pas d'Int
  });

  it("Créature artificielle Grand : bonus PV +30", () => {
    const stats = calculerStatistiquesCreature({
      type: "Créature artificielle",
      dv: "6d10",
      taille: "Grand",
      carac: { for: 18, dex: 8, con: null, int: null, sag: 10, cha: 1 },
    });
    expect(stats.bonusPVFixe).toBe(30);
  });

  it("Mort-vivant : PV basés sur Cha, pas de bonus PV fixe", () => {
    const stats = calculerStatistiquesCreature({
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
    });
    expect(stats.bonusPVFixe).toBe(0);
    // mod Cha = +1, 4 DV → bonusPVParDV = 1*4 = 4
    // PV moyens SRD monstres : 4 × (12+1)/2 + 4 = 4 × 6.5 + 4 = 30
    expect(stats.pvMoyens).toBe(30);
  });

  it("avertit si espace ne correspond pas à la taille", () => {
    const stats = calculerStatistiquesCreature({
      type: "Géant",
      dv: "4d8",
      taille: "Grand",
      espace: "1,5 m", // devrait être 3 m
      carac: { for: 21, dex: 8, con: 15, int: 6, sag: 10, cha: 7 },
    });
    expect(stats.avertissements._creature_espace).toBeDefined();
    expect(stats.avertissements._creature_espace).toContain("3 m");
  });

  it("avertit si allonge inhabituelle pour la taille", () => {
    const stats = calculerStatistiquesCreature({
      type: "Géant",
      dv: "4d8",
      taille: "Grand",
      espace: "3 m",
      allonge: "6 m", // ni 3 m (haut) ni 1,5 m (long)
      carac: { for: 21, dex: 8, con: 15, int: 6, sag: 10, cha: 7 },
    });
    expect(stats.avertissements._creature_allonge).toBeDefined();
  });

  it("pas d'avertissement allonge pour valeur légitime (haut ou long)", () => {
    const statsHaut = calculerStatistiquesCreature({
      type: "Géant",
      dv: "4d8",
      taille: "Grand",
      espace: "3 m",
      allonge: "3 m", // haut = 3 m pour Grand
      carac: { for: 21, dex: 8, con: 15, int: 6, sag: 10, cha: 7 },
    });
    expect(statsHaut.avertissements._creature_allonge).toBeUndefined();

    const statsLong = calculerStatistiquesCreature({
      type: "Animal",
      dv: "3d8",
      taille: "Grand",
      espace: "3 m",
      allonge: "1,5 m", // long = 1,5 m pour Grand
      carac: { for: 17, dex: 13, con: 14, int: 2, sag: 11, cha: 6 },
    });
    expect(statsLong.avertissements._creature_allonge).toBeUndefined();
  });

  it("Vase 0 points de compétence (pas d'Int)", () => {
    const stats = calculerStatistiquesCreature({
      type: "Vase",
      dv: "4d10",
      taille: "Grand",
      carac: { for: 10, dex: 1, con: 26, int: null, sag: 1, cha: 1 },
    });
    expect(stats.pointsCompetences).toBe(0);
  });
});

// ─── CALCUL COMPLET PAR CLASSE ─────────────────────────────────────

describe("calculerStatistiques", () => {
  it("retourne null pour un personnage null", () => {
    expect(calculerStatistiques(null)).toBeNull();
  });

  it("calcule correctement un Guerrier 5 For 16 Dex 12 Con 14", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 5,
      taille: "Moyen",
      carac: { for: 16, dex: 12, con: 14, int: 10, sag: 10, cha: 8 },
      ca: { total: 18 },
    });

    expect(stats.classeConnue).toBe(true);
    expect(stats.modificateurs.for).toBe(3);
    expect(stats.modificateurs.dex).toBe(1);
    expect(stats.modificateurs.con).toBe(2);
    expect(stats.bba).toBe(5);  // bon = niveau
    expect(stats.jsBase.vig).toBe(4);   // bon: floor(5/2)+2
    expect(stats.jsBase.ref).toBe(1);   // faible: floor(5/3)
    expect(stats.jsBase.vol).toBe(1);   // faible: floor(5/3)
    expect(stats.jsTotal.vig).toBe(6);  // 4 + mod Con 2
    expect(stats.jsTotal.ref).toBe(2);  // 1 + mod Dex 1
    expect(stats.jsTotal.vol).toBe(1);  // 1 + mod Sag 0
    expect(stats.dv).toBe(10);
    expect(stats.initiative).toBe("+1");
    expect(stats.caContact).toBe(11);   // 10 + 1 + 0
    expect(stats.caPrisAuDepourvu).toBe(17); // 18 - 1
    expect(stats.attaqueCAC).toBe("+8"); // 5+3+0
    expect(stats.attaqueDist).toBe("+6"); // 5+1+0
  });

  it("calcule correctement un Prêtre 6 nain (Thorgar)", () => {
    const stats = calculerStatistiques({
      classe: "Prêtre",
      niveau: 6,
      taille: "Moyen",
      carac: { for: 14, dex: 8, con: 18, int: 12, sag: 16, cha: 12 },
      ca: { total: 19 },
    });

    expect(stats.bba).toBe(4);  // moyen: floor(6*3/4)
    expect(stats.jsBase.vig).toBe(5);  // bon: floor(6/2)+2
    expect(stats.jsBase.ref).toBe(2);  // faible: floor(6/3)
    expect(stats.jsBase.vol).toBe(5);  // bon: floor(6/2)+2
    expect(stats.jsTotal.vig).toBe(9);  // 5+4
    expect(stats.jsTotal.ref).toBe(1);  // 2+(-1)
    expect(stats.jsTotal.vol).toBe(8);  // 5+3
    expect(stats.initiative).toBe("-1");
    expect(stats.caPrisAuDepourvu).toBe(19); // 19 - max(-1,0) = 19
  });

  it("gère les classes inconnues", () => {
    const stats = calculerStatistiques({
      classe: "ClasseInconnue",
      niveau: 5,
      carac: { for: 10, dex: 10, con: 10, int: 10, sag: 10, cha: 10 },
    });

    expect(stats.classeConnue).toBe(false);
    expect(stats.bba).toBeNull();
    expect(stats.jsBase).toBeNull();
  });
});

// ─── POINTS D'ACHAT (PHB p.169) ───────────────────────────────────────

describe("calculerPointsAchat", () => {
  it("retourne null pour une entrée invalide", () => {
    expect(calculerPointsAchat(null)).toBeNull();
    expect(calculerPointsAchat(undefined)).toBeNull();
    expect(calculerPointsAchat("")).toBeNull();
  });

  it("calcule 0 pt pour un profil 8 partout", () => {
    const r = calculerPointsAchat({ for: 8, dex: 8, con: 8, int: 8, sag: 8, cha: 8 });
    expect(r.total).toBe(0);
    expect(r.budget).toBe("standard");
  });

  it("calcule 25 pts pour un profil standard (15/14/13/12/10/8)", () => {
    const r = calculerPointsAchat({ for: 15, dex: 14, con: 13, int: 12, sag: 10, cha: 8 });
    expect(r.total).toBe(8 + 6 + 5 + 4 + 2 + 0);
    expect(r.total).toBe(25);
    expect(r.budget).toBe("standard");
  });

  it("calcule 28 pts pour un profil héros (17/16/13/8/8/8)", () => {
    // 17=13pts + 16=10pts + 13=5pts + 8=0 + 8=0 + 8=0 = 28 pts
    const r = calculerPointsAchat({ for: 17, dex: 16, con: 13, int: 8, sag: 8, cha: 8 });
    expect(r.total).toBe(13 + 10 + 5 + 0 + 0 + 0);
    expect(r.total).toBe(28);
    expect(r.budget).toBe("héros");
  });

  it("budget héroïque pour 32 pts", () => {
    const r = calculerPointsAchat({ for: 18, dex: 14, con: 12, int: 10, sag: 10, cha: 8 });
    expect(r.total).toBe(16 + 6 + 4 + 2 + 2 + 0);
    expect(r.total).toBe(30);
    expect(r.budget).toBe("héroïque");
  });

  it("budget hors-budget pour > 32 pts", () => {
    const r = calculerPointsAchat({ for: 18, dex: 18, con: 14, int: 12, sag: 10, cha: 8 });
    expect(r.total).toBeGreaterThan(32);
    expect(r.budget).toBe("hors-budget");
  });

  it("ignore les stats null (Con mort-vivant)", () => {
    const r = calculerPointsAchat({ for: 10, dex: 10, con: null, int: 10, sag: 10, cha: 10 });
    expect(r.details.con).toBeNull();
    expect(r.total).toBe(2 + 2 + 2 + 2 + 2); // 5 stats × 2 pts (score 10)
    expect(r.total).toBe(10);
  });

  it("retourne null dans details pour scores hors table (<8 ou >18)", () => {
    const r = calculerPointsAchat({ for: 20, dex: 7, con: 10, int: 10, sag: 10, cha: 10 });
    expect(r.details.for).toBeNull(); // 20 > 18
    expect(r.details.dex).toBeNull(); // 7 < 8
    expect(r.details.con).toBe(2);
  });

  it("coûts individuels corrects pour tous les scores de la table", () => {
    const table = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 6, 15: 8, 16: 10, 17: 13, 18: 16 };
    for (const [score, cout] of Object.entries(table)) {
      const r = calculerPointsAchat({ for: Number(score), dex: 8, con: 8, int: 8, sag: 8, cha: 8 });
      expect(r.details.for).toBe(cout);
    }
  });
});

// ─── MULTICLASSAGE (PHB p.22) ─────────────────────────────────────

describe("calculerStatistiques — multiclasse", () => {
  it("Guerrier 5 / Magicien 5 → BBA +7 (pas +5)", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 10,
      taille: "Moyen",
      carac: { for: 14, dex: 12, con: 14, int: 16, sag: 10, cha: 8 },
      classes: [
        { classe: "Guerrier", niveau: 5 },
        { classe: "Magicien", niveau: 5 },
      ],
    });

    // BBA : Guerrier bon(5)=5 + Magicien faible(5)=2 → 7
    expect(stats.bba).toBe(7);
    expect(stats.classeConnue).toBe(true);
  });

  it("Guerrier 5 / Magicien 5 → JS Vig base = 4+1 = 5", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 10,
      taille: "Moyen",
      carac: { for: 14, dex: 12, con: 14, int: 16, sag: 10, cha: 8 },
      classes: [
        { classe: "Guerrier", niveau: 5 },
        { classe: "Magicien", niveau: 5 },
      ],
    });

    // JS Vig base : Guerrier bon(5)=4 + Magicien faible(5)=1 → 5
    expect(stats.jsBase.vig).toBe(5);
    // JS Vig total : 5 + mod Con 2 → 7
    expect(stats.jsTotal.vig).toBe(7);

    // JS Réf base : Guerrier faible(5)=1 + Magicien faible(5)=1 → 2
    expect(stats.jsBase.ref).toBe(2);

    // JS Vol base : Guerrier faible(5)=1 + Magicien bon(5)=4 → 5
    expect(stats.jsBase.vol).toBe(5);
  });

  it("Guerrier 5 / Roublard 3 → PV estimés avec 2 types de dé", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 8,
      taille: "Moyen",
      carac: { for: 16, dex: 14, con: 14, int: 10, sag: 10, cha: 8 },
      classes: [
        { classe: "Guerrier", niveau: 5 },
        { classe: "Roublard", niveau: 3 },
      ],
    });

    // mod Con = +2, moyenne SRD d10 = 5.5, moyenne SRD d6 = 3.5
    // Guerrier d10 : niv1=10+2=12, niv2-5=(5.5+2)*4=30
    // Roublard d6  : niv6-8=(3.5+2)*3=16.5
    // Total = floor(12 + 30 + 16.5) = 58
    expect(stats.pvEstimes).toBe(58);
    expect(stats.bba).toBe(7); // Guerrier bon(5)=5 + Roublard moyen(3)=2
  });

  it("multiclasse DV formaté contient les deux parties", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 8,
      taille: "Moyen",
      carac: { for: 14, dex: 12, con: 10, int: 10, sag: 10, cha: 10 },
      classes: [
        { classe: "Guerrier", niveau: 5 },
        { classe: "Roublard", niveau: 3 },
      ],
    });

    // mod Con = 0, pas de bonus
    expect(stats.dvFormatte).toBe("5d10 + 3d6");
  });

  it("multiclasse avec modCon positif → DV formaté avec bonus", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 8,
      taille: "Moyen",
      carac: { for: 14, dex: 12, con: 14, int: 10, sag: 10, cha: 10 },
      classes: [
        { classe: "Guerrier", niveau: 5 },
        { classe: "Roublard", niveau: 3 },
      ],
    });

    // mod Con = +2 → Guerrier 5*2=+10, Roublard 3*2=+6
    expect(stats.dvFormatte).toBe("5d10+10 + 3d6+6");
  });

  it("classe unique avec classes[] vide utilise le fallback", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 5,
      taille: "Moyen",
      carac: { for: 16, dex: 12, con: 14, int: 10, sag: 10, cha: 8 },
      classes: [],
    });

    // Fallback : Guerrier 5 classique
    expect(stats.bba).toBe(5);
    expect(stats.dv).toBe(10);
  });

  it("ignore les entrées de classes[] avec classe inconnue", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 5,
      taille: "Moyen",
      carac: { for: 16, dex: 12, con: 14, int: 10, sag: 10, cha: 8 },
      classes: [
        { classe: "Guerrier", niveau: 5 },
        { classe: "ClasseInconnue", niveau: 3 },
      ],
    });

    // Seul Guerrier 5 est pris en compte
    expect(stats.bba).toBe(5);
  });
});

// ─── MORT-VIVANT MODE PNJ (JS Vig → Cha) ──────────────────────────

describe("calculerStatistiques — Mort-vivant PNJ", () => {
  it("Mort-vivant utilise mod Cha pour JS Vigueur (pas Con)", () => {
    const stats = calculerStatistiques({
      classe: "Prêtre",
      niveau: 6,
      taille: "Moyen",
      type: "Mort-vivant",
      carac: { for: 12, dex: 14, con: null, int: 12, sag: 16, cha: 16 },
      ca: { total: 18 },
    });

    // mod Cha = +3
    // JS Vig base (Prêtre bon) : floor(6/2)+2 = 5
    // JS Vig total : 5 + mod Cha 3 = 8 (PAS 5+0)
    expect(stats.jsTotal.vig).toBe(8);
  });

  it("Mort-vivant PNJ utilise mod Cha pour PV estimés", () => {
    const stats = calculerStatistiques({
      classe: "Guerrier",
      niveau: 3,
      taille: "Moyen",
      type: "Mort-vivant",
      carac: { for: 16, dex: 12, con: null, int: 10, sag: 10, cha: 14 },
    });

    // mod Cha = +2, moyenne SRD d10 = (10+1)/2 = 5.5
    // d10 niv1 = 10+2=12, niv2-3 = (5.5+2)*2=15
    // Total = floor(12 + 15) = 27
    expect(stats.pvEstimes).toBe(27);
  });
});

// ─── calculerStatsGlobal — modeEntite forcé ────────────────────────

describe("calculerStatsGlobal", () => {
  it("auto-détecte mode creature quand pas de classe et type reconnu", () => {
    const result = calculerStatsGlobal({
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
    });
    expect(result.mode).toBe("creature");
  });

  it("auto-détecte mode pnj quand classe présente", () => {
    const result = calculerStatsGlobal({
      classe: "Guerrier",
      niveau: 5,
      type: "Humanoïde (Humain)",
      taille: "Moyen",
      carac: { for: 16, dex: 12, con: 14, int: 10, sag: 10, cha: 8 },
    });
    expect(result.mode).toBe("pnj");
  });

  it("respecte modeEntite: 'creature' même avec une classe", () => {
    const result = calculerStatsGlobal({
      classe: "Guerrier",
      niveau: 5,
      modeEntite: "creature",
      type: "Géant",
      dv: "6d8",
      taille: "Grand",
      carac: { for: 21, dex: 8, con: 15, int: 6, sag: 10, cha: 7 },
    });
    expect(result.mode).toBe("creature");
    expect(result.typeBase).toBe("Géant");
  });

  it("respecte modeEntite: 'pnj' même sans classe et type reconnu", () => {
    const result = calculerStatsGlobal({
      classe: "",
      niveau: 0,
      modeEntite: "pnj",
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
    });
    expect(result.mode).toBe("pnj");
  });
});
