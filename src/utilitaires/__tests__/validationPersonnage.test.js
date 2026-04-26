import { describe, it, expect } from "vitest";
import { validerPersonnage, validerChampUnique } from "../validationPersonnage.js";

// ─── VALIDATION PAR CHAMP ────────────────────────────────────────────

describe("validerChampUnique", () => {
  describe("nom", () => {
    it("rejette un nom vide", () => {
      expect(validerChampUnique("nom", "")).toBeTruthy();
      expect(validerChampUnique("nom", null)).toBeTruthy();
    });

    it("accepte un nom valide", () => {
      expect(validerChampUnique("nom", "Thorgar")).toBeNull();
    });

    it("rejette un nom trop long", () => {
      expect(validerChampUnique("nom", "A".repeat(201))).toBeTruthy();
    });
  });

  describe("pv", () => {
    it("accepte null / vide (optionnel)", () => {
      expect(validerChampUnique("pv", null)).toBeNull();
      expect(validerChampUnique("pv", "")).toBeNull();
    });

    it("rejette des PV négatifs", () => {
      expect(validerChampUnique("pv", -5)).toBeTruthy();
    });

    it("accepte des PV valides", () => {
      expect(validerChampUnique("pv", 52)).toBeNull();
      expect(validerChampUnique("pv", 0)).toBeNull();
    });
  });

  describe("niveau", () => {
    it("rejette un niveau hors limites", () => {
      expect(validerChampUnique("niveau", -1)).toBeTruthy();
      expect(validerChampUnique("niveau", 41)).toBeTruthy();
    });

    it("accepte un niveau valide", () => {
      expect(validerChampUnique("niveau", 6)).toBeNull();
      expect(validerChampUnique("niveau", 20)).toBeNull();
    });
  });

  describe("alignement", () => {
    it("accepte les alignements D&D 3.5 valides", () => {
      expect(validerChampUnique("alignement", "LB")).toBeNull();
      expect(validerChampUnique("alignement", "N")).toBeNull();
      expect(validerChampUnique("alignement", "CM")).toBeNull();
    });

    it("rejette un alignement invalide", () => {
      expect(validerChampUnique("alignement", "XY")).toBeTruthy();
    });

    it("accepte un alignement vide (optionnel)", () => {
      expect(validerChampUnique("alignement", "")).toBeNull();
    });
  });

  describe("taille", () => {
    it("accepte les tailles officielles", () => {
      expect(validerChampUnique("taille", "Moyen")).toBeNull();
      expect(validerChampUnique("taille", "Grand")).toBeNull();
    });

    it("accepte une taille non officielle (avertissement seulement)", () => {
      expect(validerChampUnique("taille", "Énorme")).toBeNull();
    });
  });

  describe("carac", () => {
    it("accepte des caractéristiques valides", () => {
      expect(validerChampUnique("carac", { for: 14, dex: 8, con: 18, int: 12, sag: 16, cha: 12 })).toBeNull();
    });

    it("rejette une caractéristique hors limites", () => {
      expect(validerChampUnique("carac", { for: 0 })).toBeTruthy();
      expect(validerChampUnique("carac", { for: 50 })).toBeTruthy();
    });
  });

  describe("ca", () => {
    it("accepte des valeurs de CA valides", () => {
      expect(validerChampUnique("ca", { total: 19, contact: 9, pris_au_depourvu: 19 })).toBeNull();
    });

    it("rejette une CA hors limites", () => {
      expect(validerChampUnique("ca", { total: -1 })).toBeTruthy();
      expect(validerChampUnique("ca", { total: 100 })).toBeTruthy();
    });
  });
});

// ─── VALIDATION COMPLÈTE ─────────────────────────────────────────────

describe("validerPersonnage", () => {
  it("rejette un objet null", () => {
    const result = validerPersonnage(null);
    expect(result.valide).toBe(false);
    expect(result.erreurs._global).toBeTruthy();
  });

  it("valide un personnage complet correct", () => {
    const result = validerPersonnage({
      nom: "Thorgar",
      classe: "Prêtre",
      niveau: 6,
      taille: "Moyen",
      alignement: "LB",
      pv: 52,
      ca: { total: 19, contact: 9, pris_au_depourvu: 19 },
      carac: { for: 14, dex: 8, con: 18, int: 12, sag: 16, cha: 12 },
    });
    expect(result.valide).toBe(true);
    expect(Object.keys(result.erreurs)).toHaveLength(0);
  });

  it("retourne des erreurs pour des champs invalides", () => {
    const result = validerPersonnage({
      nom: "",
      niveau: -5,
      pv: -10,
    });
    expect(result.valide).toBe(false);
    expect(result.erreurs.nom).toBeTruthy();
    expect(result.erreurs.niveau).toBeTruthy();
    expect(result.erreurs.pv).toBeTruthy();
  });
});

// ─── VALIDATION CROISÉE (COHÉRENCE) ─────────────────────────────────

describe("validation croisée", () => {
  it("avertit si un Paladin n'est pas LB", () => {
    const result = validerPersonnage({
      nom: "Sir Truc",
      classe: "Paladin",
      alignement: "NB",
    });
    expect(result.avertissements._coherence_alignement).toBeTruthy();
    expect(result.avertissements._coherence_alignement).toContain("Paladin");
  });

  it("n'avertit pas si un Paladin est LB", () => {
    const result = validerPersonnage({
      nom: "Sir Truc",
      classe: "Paladin",
      alignement: "LB",
    });
    expect(result.avertissements._coherence_alignement).toBeUndefined();
  });

  it("avertit si un Moine n'est pas Loyal", () => {
    const result = validerPersonnage({
      nom: "Monk",
      classe: "Moine",
      alignement: "CB",
    });
    expect(result.avertissements._coherence_alignement).toBeTruthy();
    expect(result.avertissements._coherence_alignement).toContain("Moine");
  });

  it("avertit si un Barbare est Loyal", () => {
    const result = validerPersonnage({
      nom: "Gruk",
      classe: "Barbare",
      alignement: "LN",
    });
    expect(result.avertissements._coherence_alignement).toBeTruthy();
    expect(result.avertissements._coherence_alignement).toContain("Barbare");
  });

  it("avertit si un Druide n'est pas neutre sur un axe", () => {
    const result = validerPersonnage({
      nom: "Druidesse",
      classe: "Druide",
      alignement: "LB",
    });
    expect(result.avertissements._coherence_alignement).toBeTruthy();
    expect(result.avertissements._coherence_alignement).toContain("Druide");
  });

  it("avertit si taille/espace ne correspondent pas", () => {
    const result = validerPersonnage({
      nom: "Giant",
      taille: "Grand",
      espace: "1,5 m", // devrait être 3 m
    });
    expect(result.avertissements._coherence_espace).toBeTruthy();
  });

  it("n'avertit pas si taille/espace correspondent", () => {
    const result = validerPersonnage({
      nom: "Human",
      taille: "Moyen",
      espace: "1,5 m",
    });
    expect(result.avertissements._coherence_espace).toBeUndefined();
  });

  it("avertit si CA contact > CA total", () => {
    const result = validerPersonnage({
      nom: "Test",
      ca: { total: 15, contact: 20 },
    });
    expect(result.avertissements._coherence_ca).toBeTruthy();
  });

  it("avertit si CA dépourvu > CA total", () => {
    const result = validerPersonnage({
      nom: "Test",
      ca: { total: 15, pris_au_depourvu: 20 },
    });
    expect(result.avertissements._coherence_ca_dep).toBeTruthy();
  });

  it("avertit si un Mort-vivant a une Constitution", () => {
    const result = validerPersonnage({
      nom: "Zombie",
      type: "Mort-vivant",
      carac: { for: 14, dex: 10, con: 12, int: null, sag: 10, cha: 10 },
    });
    expect(result.avertissements._coherence_type_con).toBeTruthy();
  });

  it("avertit si une créature incorporelle a de la Force", () => {
    const result = validerPersonnage({
      nom: "Fantôme",
      type: "Mort-vivant (Incorporel)",
      carac: { for: 10, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
    });
    expect(result.avertissements._coherence_incorporel_for).toBeTruthy();
  });

  it("avertit si les traits de type sont manquants (Mort-vivant sans qual_spe)", () => {
    const result = validerPersonnage({
      nom: "Blême",
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
      qual_spe: [],
    });
    expect(result.avertissements._creature_traits_manquants).toBeTruthy();
    expect(result.avertissements._creature_traits_manquants).toContain("Mort-vivant");
  });

  it("n'avertit pas si les traits de type sont présents", () => {
    const result = validerPersonnage({
      nom: "Blême complet",
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
      qual_spe: [
        "Traits des morts-vivants",
        "Vision dans le noir 18 m",
        "Immunité (poison)",
        "Immunité (sommeil)",
        "Immunité (paralysie)",
        "Immunité (étourdissement)",
        "Immunité (maladie)",
        "Immunité (effets de mort)",
        "Immunité (nécromancie)",
        "Immunité (effets mentaux)",
        "Immunité (coups critiques)",
        "Immunité (dégâts non-létaux)",
        "Immunité (affaiblissement de caractéristique)",
        "Immunité (drain d'énergie)",
        "Immunité (fatigue et épuisement)",
        "PV basés sur le Charisme (pas de Constitution)",
        "Pas de guérison naturelle (sauf par nécromancie)",
        "Renvoi/intimidation des morts-vivants",
      ],
    });
    expect(result.avertissements._creature_traits_manquants).toBeUndefined();
  });

  it("avertit sur les dons si le nombre est incorrect pour les DV", () => {
    const result = validerPersonnage({
      nom: "Blême",
      type: "Mort-vivant",
      dv: "4d12",
      taille: "Moyen",
      carac: { for: null, dex: 14, con: null, int: 6, sag: 12, cha: 13 },
      dons: "Esquive, Vigilance, Robustesse",
    });
    // 4 DV = 2 dons attendus, 3 fournis
    expect(result.avertissements._creature_dons).toBeTruthy();
  });

  it("avertit si une Vermine a une classe", () => {
    const result = validerPersonnage({
      nom: "Rat Géant",
      type: "Vermine (Nuée)",
      classe: "Guerrier",
      niveau: 1,
    });
    expect(result.avertissements._coherence_type_classe).toBeTruthy();
    expect(result.avertissements._coherence_type_classe).toContain("Vermine");
  });

  it("avertit si une Vase a une classe", () => {
    const result = validerPersonnage({
      nom: "Cube gélatineux",
      type: "Vase",
      classe: "Guerrier",
      niveau: 1,
    });
    expect(result.avertissements._coherence_type_classe).toBeTruthy();
    expect(result.avertissements._coherence_type_classe).toContain("Vase");
  });

  it("avertit si un Animal a une classe", () => {
    const result = validerPersonnage({
      nom: "Hyène",
      type: "Animal",
      classe: "Rôdeur",
      niveau: 1,
    });
    expect(result.avertissements._coherence_type_classe).toBeTruthy();
    expect(result.avertissements._coherence_type_classe).toContain("Animal");
  });

  it("avertit si une Créature artificielle a une classe via multiclassage", () => {
    const result = validerPersonnage({
      nom: "Golem",
      type: "Créature artificielle",
      classes: [{ classe: "Guerrier", niveau: 2 }],
    });
    expect(result.avertissements._coherence_type_classe).toBeTruthy();
  });

  it("n'avertit pas si un Dragon a une classe", () => {
    const result = validerPersonnage({
      nom: "Dracoliche",
      type: "Dragon",
      classe: "Ensorceleur",
      niveau: 3,
    });
    expect(result.avertissements._coherence_type_classe).toBeUndefined();
  });

  it("n'avertit pas si une Vermine n'a pas de classe", () => {
    const result = validerPersonnage({
      nom: "Rat Géant",
      type: "Vermine (Nuée)",
      dv: "1d8+1",
      taille: "Petit",
      carac: { for: 4, dex: 15, con: 12, int: null, sag: 12, cha: 2 },
    });
    expect(result.avertissements._coherence_type_classe).toBeUndefined();
  });
});
