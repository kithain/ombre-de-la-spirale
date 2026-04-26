import { describe, it, expect } from "vitest";
import {
  TYPES_BONUS,
  creerBonus,
  resoudreBonusCumules,
  resoudreBonusPourCible,
  calculerCADepuisBonus,
  calculerBonusLutte,
  construireBonusCA,
} from "../bonusDnD35.js";

// ─── CRÉATION DE BONUS ──────────────────────────────────────────────

describe("creerBonus", () => {
  it("crée un bonus valide immutable", () => {
    const b = creerBonus(TYPES_BONUS.ARMURE, 5, "Cotte de mailles +1", "ca");
    expect(b.type).toBe("Armure");
    expect(b.valeur).toBe(5);
    expect(b.source).toBe("Cotte de mailles +1");
    expect(b.cible).toBe("ca");
    expect(Object.isFrozen(b)).toBe(true);
  });

  it("rejette un type inconnu", () => {
    expect(() => creerBonus("Inexistant", 2, "test")).toThrow("Type de bonus inconnu");
  });

  it("rejette une valeur non numérique", () => {
    expect(() => creerBonus(TYPES_BONUS.ARMURE, NaN, "test")).toThrow("Valeur de bonus invalide");
    expect(() => creerBonus(TYPES_BONUS.ARMURE, Infinity, "test")).toThrow("Valeur de bonus invalide");
  });

  it("rejette une source vide", () => {
    expect(() => creerBonus(TYPES_BONUS.ARMURE, 2, "")).toThrow("source du bonus est obligatoire");
    expect(() => creerBonus(TYPES_BONUS.ARMURE, 2, null)).toThrow("source du bonus est obligatoire");
  });

  it("accepte une valeur négative (malus)", () => {
    const b = creerBonus(TYPES_BONUS.TAILLE, -1, "Grand", "ca");
    expect(b.valeur).toBe(-1);
  });
});

// ─── RÉSOLUTION DES CUMULS ──────────────────────────────────────────

describe("resoudreBonusCumules", () => {
  it("retourne total 0 pour une liste vide", () => {
    expect(resoudreBonusCumules([]).total).toBe(0);
    expect(resoudreBonusCumules(null).total).toBe(0);
  });

  it("cumule un seul bonus correctement", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.ARMURE, 4, "Cotte de mailles"),
    ]);
    expect(result.total).toBe(4);
    expect(result.details).toHaveLength(1);
    expect(result.ignores).toHaveLength(0);
  });

  it("ne cumule PAS deux bonus du même type (garde le plus élevé)", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.ARMURE, 4, "Cotte de mailles"),
      creerBonus(TYPES_BONUS.ARMURE, 6, "Armure de mage"),
    ]);
    expect(result.total).toBe(6);
    expect(result.details).toHaveLength(1);
    expect(result.details[0].source).toBe("Armure de mage");
    expect(result.ignores).toHaveLength(1);
    expect(result.ignores[0].source).toBe("Cotte de mailles");
  });

  it("cumule des bonus de types DIFFÉRENTS", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.ARMURE, 4, "Cotte de mailles"),
      creerBonus(TYPES_BONUS.BOUCLIER, 2, "Écu"),
      creerBonus(TYPES_BONUS.PARADE, 1, "Anneau de protection"),
    ]);
    expect(result.total).toBe(7);
    expect(result.details).toHaveLength(3);
    expect(result.ignores).toHaveLength(0);
  });

  it("cumule TOUJOURS les bonus d'Esquive entre eux", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.ESQUIVE, 1, "Don Esquive"),
      creerBonus(TYPES_BONUS.ESQUIVE, 1, "Hâte"),
      creerBonus(TYPES_BONUS.ESQUIVE, 2, "Souplesse du serpent"),
    ]);
    expect(result.total).toBe(4);
    expect(result.details).toHaveLength(3);
    expect(result.ignores).toHaveLength(0);
  });

  it("cumule TOUJOURS les bonus de Synergie entre eux", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.SYNERGIE, 2, "Bluff → Diplomatie"),
      creerBonus(TYPES_BONUS.SYNERGIE, 2, "Psychologie → Diplomatie"),
    ]);
    expect(result.total).toBe(4);
    expect(result.details).toHaveLength(2);
  });

  it("cumule TOUJOURS les bonus de Circonstance de sources différentes (PHB p.21)", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.CIRCONSTANCE, 2, "Terrain élevé"),
      creerBonus(TYPES_BONUS.CIRCONSTANCE, 1, "Vent favorable"),
    ]);
    expect(result.total).toBe(3);
    expect(result.details).toHaveLength(2);
    expect(result.ignores).toHaveLength(0);
  });

  it("cumule TOUJOURS les bonus sans type (Divers)", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.DIVERS, 2, "Dextérité"),
      creerBonus(TYPES_BONUS.DIVERS, -1, "Taille"),
    ]);
    expect(result.total).toBe(1);
    expect(result.details).toHaveLength(2);
  });

  it("cumule TOUJOURS les malus (valeurs négatives)", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.ARMURE, -2, "Malédiction A"),
      creerBonus(TYPES_BONUS.ARMURE, -3, "Malédiction B"),
    ]);
    expect(result.total).toBe(-5);
    expect(result.details).toHaveLength(2);
  });

  it("gère un cas complexe mixte (bonus + malus + cumul + non-cumul)", () => {
    const result = resoudreBonusCumules([
      creerBonus(TYPES_BONUS.ARMURE, 4, "Cotte de mailles"),
      creerBonus(TYPES_BONUS.ARMURE, 6, "Armure de mage"),       // non cumulé → 6
      creerBonus(TYPES_BONUS.BOUCLIER, 2, "Écu"),                // cumulé (type différent)
      creerBonus(TYPES_BONUS.ESQUIVE, 1, "Don Esquive"),         // cumulé (Esquive)
      creerBonus(TYPES_BONUS.ESQUIVE, 1, "Hâte"),                // cumulé (Esquive)
      creerBonus(TYPES_BONUS.MORAL, -2, "Terreur"),              // malus cumulé
    ]);
    // 6 (armure max) + 2 (bouclier) + 1 + 1 (esquive) + (-2) (malus) = 8
    expect(result.total).toBe(8);
    expect(result.details).toHaveLength(5);
    expect(result.ignores).toHaveLength(1);
  });
});

// ─── RÉSOLUTION PAR CIBLE ───────────────────────────────────────────

describe("resoudreBonusPourCible", () => {
  it("filtre par cible avant résolution", () => {
    const bonus = [
      creerBonus(TYPES_BONUS.ARMURE, 4, "Armure", "ca"),
      creerBonus(TYPES_BONUS.MORAL, 2, "Bénédiction", "attaque"),
      creerBonus(TYPES_BONUS.PARADE, 1, "Anneau", "ca"),
    ];
    const result = resoudreBonusPourCible(bonus, "ca");
    expect(result.total).toBe(5); // 4 + 1
    expect(result.details).toHaveLength(2);
  });

  it("retourne 0 si aucun bonus pour la cible", () => {
    const bonus = [
      creerBonus(TYPES_BONUS.MORAL, 2, "Bénédiction", "attaque"),
    ];
    expect(resoudreBonusPourCible(bonus, "ca").total).toBe(0);
  });
});

// ─── CALCUL CA STRUCTURÉ ────────────────────────────────────────────

describe("calculerCADepuisBonus", () => {
  it("retourne CA 10 sans bonus", () => {
    const result = calculerCADepuisBonus([]);
    expect(result.total).toBe(10);
    expect(result.contact).toBe(10);
    expect(result.pris_au_depourvu).toBe(10);
  });

  it("calcule CA totale, contact et dépourvu correctement", () => {
    const bonus = [
      creerBonus(TYPES_BONUS.DIVERS, 2, "Dextérité", "ca"),
      creerBonus(TYPES_BONUS.ARMURE, 5, "Harnois", "ca"),
      creerBonus(TYPES_BONUS.BOUCLIER, 2, "Écu", "ca"),
      creerBonus(TYPES_BONUS.ARMURE_NATURELLE, 3, "Peau d'écorce", "ca"),
    ];
    const result = calculerCADepuisBonus(bonus);
    // Total : 10 + 2 + 5 + 2 + 3 = 22
    expect(result.total).toBe(22);
    // Contact : exclut Armure(5), Bouclier(2), Armure nat(3) → 10 + 2 = 12
    expect(result.contact).toBe(12);
    // Dépourvu : exclut Dex positif → 10 + 5 + 2 + 3 = 20
    expect(result.pris_au_depourvu).toBe(20);
  });

  it("inclut l'Esquive dans le contact mais pas dans le dépourvu", () => {
    const bonus = [
      creerBonus(TYPES_BONUS.ESQUIVE, 1, "Don Esquive", "ca"),
      creerBonus(TYPES_BONUS.ARMURE, 4, "Cotte", "ca"),
    ];
    const result = calculerCADepuisBonus(bonus);
    expect(result.total).toBe(15);     // 10 + 1 + 4
    expect(result.contact).toBe(11);   // 10 + 1 (esquive, pas armure)
    expect(result.pris_au_depourvu).toBe(14); // 10 + 4 (pas esquive)
  });
});

// ─── BONUS DE LUTTE ─────────────────────────────────────────────────

describe("calculerBonusLutte", () => {
  it("calcule BBA + modFor + modTaille(lutte)", () => {
    // Guerrier 5, For 18 (+4), Moyen → 5 + 4 + 0 = 9
    expect(calculerBonusLutte(5, 4, "Moyen")).toBe(9);
  });

  it("applique le modificateur de taille spécifique à la lutte", () => {
    // Troll : BBA 6, For +6, Grand (+4 lutte) → 6 + 6 + 4 = 16
    expect(calculerBonusLutte(6, 6, "Grand")).toBe(16);
  });

  it("gère les créatures Très petit", () => {
    // BBA 0, For -2, Très petit (-8) → 0 + (-2) + (-8) = -10
    expect(calculerBonusLutte(0, -2, "Très petit")).toBe(-10);
  });

  it("gère les valeurs nulles", () => {
    expect(calculerBonusLutte(null, null, "Moyen")).toBe(0);
  });
});

// ─── CONSTRUCTION DE BONUS CA ───────────────────────────────────────

describe("construireBonusCA", () => {
  it("génère les bonus CA depuis les paramètres", () => {
    const bonus = construireBonusCA({
      modDex: 2,
      modTaille: -1,
      bonusArmure: 5,
      bonusBouclier: 2,
      armureNaturelle: 3,
    });
    expect(bonus).toHaveLength(5);
    expect(bonus.every((b) => b.cible === "ca")).toBe(true);
  });

  it("omet les bonus à zéro", () => {
    const bonus = construireBonusCA({ modDex: 0, bonusArmure: 0 });
    expect(bonus).toHaveLength(0);
  });

  it("inclut un modDex négatif", () => {
    const bonus = construireBonusCA({ modDex: -2 });
    expect(bonus).toHaveLength(1);
    expect(bonus[0].valeur).toBe(-2);
  });
});
