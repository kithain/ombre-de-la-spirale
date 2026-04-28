/**
 * Sérialiseur JS — Convertit un objet JavaScript en code source lisible.
 *
 * Produit du code JS valide (pas du JSON) :
 * - Clés sans guillemets quand possible
 * - Strings avec guillemets doubles
 * - Indentation 2 espaces
 * - Trailing newline
 */

/**
 * Vérifie si une clé peut être écrite sans guillemets.
 * @param {string} key
 * @returns {boolean}
 */
function estCleSimple(key) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
}

/**
 * Échappe une string pour l'écriture en JS.
 * @param {string} str
 * @returns {string}
 */
function echapperString(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    // Caractères de contrôle restants (\u0000-\u001F sauf \n\r\t déjà traités)
    // + séparateurs de ligne U+2028/U+2029 qui cassent les strings JS littérales
    .replace(
      /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u2028\u2029]/g,
      (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`,
    );
}

/**
 * Sérialise une valeur JS en code source formaté.
 * @param {*} valeur - La valeur à sérialiser
 * @param {number} indent - Niveau d'indentation actuel
 * @returns {string}
 */
function serialiserValeur(valeur, indent = 0) {
  const pad = "  ".repeat(indent);
  const padInner = "  ".repeat(indent + 1);

  if (valeur === null) return "null";
  if (valeur === undefined) return "undefined";

  switch (typeof valeur) {
    case "string":
      return `"${echapperString(valeur)}"`;
    case "number":
    case "boolean":
      return String(valeur);
    default:
      break;
  }

  if (Array.isArray(valeur)) {
    if (valeur.length === 0) return "[]";

    // Tableau de primitives courtes → inline
    const toutPrimitif = valeur.every(
      (v) => typeof v === "string" || typeof v === "number" || typeof v === "boolean"
    );
    if (toutPrimitif) {
      const items = valeur.map((v) => serialiserValeur(v, 0));
      const inline = `[${items.join(", ")}]`;
      if (inline.length < 100) return inline;
    }

    const items = valeur.map((v) => `${padInner}${serialiserValeur(v, indent + 1)},`);
    return `[\n${items.join("\n")}\n${pad}]`;
  }

  if (typeof valeur === "object") {
    const entries = Object.entries(valeur);
    if (entries.length === 0) return "{}";

    // Objet simple court → inline (ex: { total: 20, contact: 13 })
    const toutPrimitif = entries.every(
      ([, v]) => typeof v === "string" || typeof v === "number" || typeof v === "boolean"
    );
    if (toutPrimitif) {
      const pairs = entries.map(([k, v]) => {
        const cle = estCleSimple(k) ? k : `"${echapperString(k)}"`;
        return `${cle}: ${serialiserValeur(v, 0)}`;
      });
      const inline = `{ ${pairs.join(", ")} }`;
      if (inline.length < 100) return inline;
    }

    const pairs = entries.map(([k, v]) => {
      const cle = estCleSimple(k) ? k : `"${echapperString(k)}"`;
      const val = serialiserValeur(v, indent + 1);

      // Strings longues : sauter à la ligne après la clé
      if (typeof v === "string" && v.length > 70) {
        return `${padInner}${cle}:\n${padInner}  ${val},`;
      }

      return `${padInner}${cle}: ${val},`;
    });
    return `{\n${pairs.join("\n")}\n${pad}}`;
  }

  return String(valeur);
}

/**
 * Génère le contenu complet d'un fichier zone.
 * @param {string} nomVariable - Nom de la variable exportée (ex: "zoneCentreCivique")
 * @param {object} data - Objet zone complet
 * @returns {string} Code source JS
 */
export function genererFichierZone(nomVariable, data) {
  const corps = serialiserValeur(data, 0);
  return `export const ${nomVariable} = ${corps};\n`;
}

/**
 * Génère le contenu complet d'un fichier PNJ (tableau exporté).
 * @param {string} nomVariable - Nom de la variable exportée (ex: "pnjScenario1Raw")
 * @param {string} commentaire - Commentaire JSDoc en tête de fichier
 * @param {Array} data - Tableau de PNJ
 * @returns {string} Code source JS
 */
export function genererFichierPnj(nomVariable, commentaire, data) {
  const corps = serialiserValeur(data, 0);
  const lignes = [];
  if (commentaire) {
    lignes.push(`/**`);
    commentaire.split("\n").forEach((l) => lignes.push(` * ${l}`));
    lignes.push(` */`);
    lignes.push("");
  }
  lignes.push(`export const ${nomVariable} = ${corps};`);
  lignes.push("");
  return lignes.join("\n");
}

/**
 * Génère le contenu d'un fichier JS exportant un seul objet (acte ou metadata).
 * Réutilisé pour les fichiers acte*.js et metadata.js des scénarios.
 * @param {string} nomVariable - Nom de la variable exportée (ex: "acte1", "scenario2Metadata")
 * @param {string|null} commentaire - Commentaire JSDoc en tête de fichier (ou null)
 * @param {object} data - Objet à sérialiser
 * @returns {string} Code source JS
 */
export function genererFichierObjetJS(nomVariable, commentaire, data) {
  const corps = serialiserValeur(data, 0);
  const lignes = [];
  if (commentaire) {
    lignes.push(`/**`);
    commentaire.split("\n").forEach((l) => lignes.push(` * ${l}`));
    lignes.push(` */`);
    lignes.push("");
  }
  lignes.push(`export const ${nomVariable} = ${corps};`);
  lignes.push("");
  return lignes.join("\n");
}

export { serialiserValeur };
