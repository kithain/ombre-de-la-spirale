const STRIP_KEYS = [
  "size",
  "type",
  "alignment",
  "fp",
  "cr",
  "environment",
  "environnement",
  "organisation",
  "organization",
  "ini",
  "initiative",
  "sens",
  "senses",
  "ca",
  "ac",
  "pv",
  "hp",
  "dv",
  "hd",
  "js",
  "saves",
  "vit",
  "speed",
  "abb",
  "bab",
  "grp",
  "grapple",
  "attaque",
  "attack",
  "att_complete",
  "fullAttack",
  "espace",
  "space",
  "allonge",
  "reach",
  "att_spé",
  "specialAttacks",
  "qual_spé",
  "specialQualities",
  "carac",
  "abilities",
  "compétences",
  "competences",
  "skills",
  "dons",
  "feats",
  "tactiques",
  "tactics",
  "butin",
  "loot",
  "est_ennemi",
  "isEnemy",
  "role",
  "description",
  "tactical",
  "buffs",
  "spells_prepared",
  "spellbook",
];

const DEFAULT_JS = { vig: "+0", ref: "+0", vol: "+0" };
const DEFAULT_CARAC = { for: 10, dex: 10, con: 10, int: 10, sag: 10, cha: 10 };

const clone = (value) => {
  if (Array.isArray(value)) return value.map(clone);
  if (value && typeof value === "object") return { ...value };
  return value;
};

/**
 * Normalise un objet PNJ afin de respecter le template commun.
 * Utiliser createPnj({...}) pour toutes les nouvelles entrées.
 */
export function createPnj(data = {}) {
  const sanitized = { ...data };
  STRIP_KEYS.forEach((key) => {
    if (key in sanitized) {
      delete sanitized[key];
    }
  });

  const normalised = {
    id: data.id ?? "",
    name: data.name ?? "",
    size: data.size ?? "Moyen",
    type: data.type ?? "Humanoïde (Humain)",
    alignment: data.alignment ?? "N",
    fp: data.fp ?? data.cr ?? 1,
    environment: data.environment ?? data.environnement ?? "",
    organisation: data.organisation ?? data.organization ?? "Solitaire",
    ini: data.ini ?? data.initiative ?? "+0",
    sens: data.sens ?? data.senses ?? "",
    ca: data.ca ?? data.ac ?? "10 (+0 Dex) ; contact 10, pris au dépourvu 10",
    pv: data.pv ?? data.hp ?? 1,
    dv: data.dv ?? data.hd ?? "1d8",
    js: clone(data.js ?? data.saves ?? DEFAULT_JS),
    vit: data.vit ?? data.speed ?? "9 m",
    abb: data.abb ?? data.bab ?? "+0",
    grp: data.grp ?? data.grapple ?? "+0",
    attaque: data.attaque ?? data.attack ?? "",
    att_complete: data.att_complete ?? data.fullAttack ?? "",
    espace: data.espace ?? data.space ?? "1,5 m",
    allonge: data.allonge ?? data.reach ?? "1,5 m",
    att_spé: clone(data.att_spé ?? data.specialAttacks ?? []),
    qual_spé: clone(data.qual_spé ?? data.specialQualities ?? []),
    carac: clone(data.carac ?? data.abilities ?? DEFAULT_CARAC),
    compétences:
      data.compétences ?? data.competences ?? data.skills ?? "",
    dons: data.dons ?? data.feats ?? "",
    tactiques: data.tactiques ?? data.tactics ?? "",
    butin: data.butin ?? data.loot ?? "",
    est_ennemi: data.est_ennemi ?? data.isEnemy ?? false,
    role: data.role ?? data.description ?? "",
    tactical: clone(data.tactical ?? null),
    buffs: clone(data.buffs ?? []),
    spells_prepared: clone(data.spells_prepared ?? data.spellbook ?? {}),
  };

  return {
    ...sanitized,
    ...normalised,
  };
}

export const pnjTemplate = `{
  id: "pnj_id_unique",
  name: "Nom du PNJ",
  size: "Moyen",
  type: "Humanoïde (Humain)",
  alignment: "N",
  fp: 1,
  environment: "Lieu / Biome",
  organisation: "Solitaire / Groupe (2-4) / Bande (5-12)",
  ini: "+0",
  sens: "Détection +0, Écouter +0",
  ca: "10 (+0 Dex) ; contact 10, pris au dépourvu 10",
  pv: 1,
  dv: "1d8",
  js: { vig: "+0", ref: "+0", vol: "+0" },
  vit: "9 m",
  abb: "+0",
  grp: "+0",
  attaque: "Arme +0 (dégâts)",
  att_complete: "",
  espace: "1,5 m",
  allonge: "1,5 m",
  att_spé: [],
  qual_spé: [],
  carac: { for: 10, dex: 10, con: 10, int: 10, sag: 10, cha: 10 },
  compétences: "",
  dons: "",
  tactiques: "",
  butin: "",
  est_ennemi: false,
  role: "",
  tactical: null,
  buffs: [],
  spells_prepared: {},
};`;
