import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath =
  "C:/Users/kitha/.codex/attachments/bc37b4b7-8dca-429f-9585-c7991c239ef2/pasted-text.txt";

const hookByBackground = new Map([
  [
    "Étudiant recalé de l’Université",
    "Le professeur qui l’a humilié a falsifié l’épreuve pour couvrir une recherche interdite. Retrouver les notes volées pourrait laver son nom, mais aussi révéler pourquoi l’Université protège ce mensonge.",
  ],
  [
    "Héritier d’une petite maison marchande",
    "Un carnet de dettes trouvé dans les affaires du parent défunt prouve qu’une maison rivale a provoqué la ruine familiale. Il doit choisir entre vengeance publique, justice commerciale ou alliance risquée avec les créanciers.",
  ],
  [
    "Garde civique démissionnaire",
    "L’ordre injuste qu’il a refusé a quand même été exécuté par son ancienne escouade. Un témoin survivant le cherche désormais, persuadé qu’il connaît les vrais responsables.",
  ],
  [
    "Apprenti du clergé de Saint-Aldric",
    "Une confession reçue avant une exécution contredit la version officielle du clergé. S’il enquête, il risque d’exposer un prêtre respecté et de briser la seule communauté qui l’a formé.",
  ],
  [
    "Descendant d’un survivant de Nyx",
    "Un inconnu lui remet un symbole calciné qui appartenait à son ancêtre, avec une liste de survivants rayés un à un. La prochaine personne sur la liste porte son nom de famille.",
  ],
  [
    "Employé de bibliothèque",
    "Le document interdit qu’il a lu disparaît des archives, mais certains passages commencent à apparaître dans ses rêves. Un archiviste clandestin lui propose de l’aider s’il accepte de voler la suite du texte.",
  ],
  [
    "Artisan ruiné",
    "L’incendie de son atelier n’était pas un accident: une pièce qu’il avait fabriquée a été récupérée dans les cendres. La retrouver pourrait prouver le sabotage, ou attirer ceux qui voulaient l’objet à tout prix.",
  ],
  [
    "Enfant des Terrasses",
    "Une décision du Conseil menace de céder une galerie naine à des intérêts extérieurs. Sa famille lui demande de trouver une preuve de fraude avant que les Terrasses ne se divisent entre compromis et révolte.",
  ],
  [
    "Apprenti du Temple-Forgeron",
    "La flamme sacrée du Temple-Forgeron faiblit depuis qu’un ancien marteau rituel a été vendu en secret. Le récupérer lui offrirait sa place, mais accuserait un dignitaire nain de sacrilège.",
  ],
  [
    "Héritier de contremaître",
    "Un éboulement présenté comme un accident cache la négligence d’un contremaître allié à sa famille. En révélant la vérité, il sauverait des mineurs, mais détruirait l’héritage qu’on lui impose.",
  ],
  [
    "Forgeron sans atelier",
    "Un client mystérieux lui propose l’argent nécessaire pour acheter une forge en échange d’une lame impossible à identifier. Chaque indice sur le métal mène vers la Mine d’Argent et une dette ancienne.",
  ],
  [
    "Gardien de tombe",
    "La tombe profanée contenait un ancêtre dont le nom a été effacé des registres nains. Les voleurs n’ont pris qu’un os gravé, et depuis, les morts des Terrasses semblent refuser le silence.",
  ],
  [
    "Nain sans clan",
    "Un clan inconnu le revendique soudain après des années d’indifférence. Leur accueil cache une exigence: porter la responsabilité d’un crime ancestral pour préserver l’honneur du vrai coupable.",
  ],
  [
    "Parent d’un notable nain",
    "Il découvre que son parent négocie en secret un accord qui abandonnera des familles mineures à la misère. S’il agit, il devient un traître politique; s’il se tait, il trahit les siens.",
  ],
  [
    "Manœuvre",
    "Un camarade de chantier disparaît après avoir trouvé une veine étrange sous la ville. Les contremaîtres parlent d’un départ volontaire, mais son outil préféré est revenu couvert d’une poussière noire.",
  ],
  [
    "Garde de porte",
    "La personne qu’il a laissée passer a assassiné quelqu’un pendant la nuit, ou a été accusée de l’avoir fait. Retrouver son visage devient le seul moyen de savoir s’il est complice, victime ou bouc émissaire.",
  ],
  [
    "Enfant d’ouvriers étrangers",
    "Un collecteur de dettes menace d’expulser sa famille en utilisant un contrat écrit dans une langue qu’elle ne lit pas. Il doit prouver l’arnaque avant que la Garde ne vienne vider leur logement.",
  ],
  [
    "Ancien videur de la Vieille Ville",
    "Une ancienne habituée lui confie avant de disparaître qu’un salon privé vend des noms à des hommes masqués. Son passé lui ouvre les portes de l’enquête, mais les tenanciers savent toutes ses faiblesses.",
  ],
  [
    "Protégé d’un sergent",
    "Le sergent qui l’a protégé est officiellement mort, mais une lettre récente porte sa signature et un code de caserne. Le retrouver pourrait sauver son honneur ou révéler qu’il a trahi la Garde.",
  ],
  [
    "Porteur de cadavres",
    "Le corps reconnu deux fois appartient à quelqu’un qui aurait dû être enterré sous un autre nom. Des familles paient pour faire disparaître les morts, et l’une d’elles veut maintenant le faire taire.",
  ],
  [
    "Travailleur des égouts",
    "Une carte interdite des conduits mentionne une porte qui n’existe sur aucun plan officiel. Derrière elle, il trouve des traces fraîches, des symboles de Nyx et le signe de quelqu’un qui connaît son nom.",
  ],
  [
    "Garde d’une maison marchande",
    "Le vol dont il est accusé cache le transport d’un objet plus dangereux que précieux. Sa seule chance de laver son nom est de retrouver la cargaison avant que son ancien employeur ne l’enterre avec l’affaire.",
  ],
  [
    "Survivant d’émeute",
    "Un meneur d’émeute qu’il croyait mort réapparaît pour rallumer la violence dans son quartier. Il doit découvrir qui finance les troubles avant que sa famille ne soit entraînée dans les représailles.",
  ],
  [
    "Fossoyeur occasionnel",
    "La tombe qu’on l’accuse d’avoir profanée contenait un cercueil vide et une inscription récente à l’intérieur du couvercle. Prouver son innocence revient à expliquer pourquoi quelqu’un a simulé sa propre mort.",
  ],
  [
    "Exilé de la Vieille Ville",
    "Un faux garant lui propose enfin une protection officielle, mais le document le lie à une dette qu’il ne comprend pas. Pour rester libre, il doit remonter jusqu’à ceux qui vendent des identités aux exilés.",
  ],
  [
    "Guérisseur clandestin",
    "Un patient sauvé par ses soins revient changé, incapable de reconnaître sa propre famille. Les visiteurs qui l’ont emmené portent le sceau d’une institution respectable de Valombre.",
  ],
  [
    "Musicien des tavernes basses",
    "La chanson ancienne contient en réalité une liste de lieux et de noms codés. Des inconnus l’applaudissent trop fort, puis exigent qu’il chante le couplet manquant.",
  ],
  [
    "Archiviste sans poste",
    "Le texte rare qu’il poursuit est attribué à un auteur mort avant la fondation de Valombre. Chaque fragment retrouvé contredit l’histoire officielle et attire un rival de l’Université.",
  ],
  [
    "Enfant d’une communauté effacée",
    "Une fresque murée révèle que sa communauté possédait autrefois un droit légal sur une partie de la Vieille Ville. Restaurer cette mémoire pourrait protéger les siens, mais réveillerait les familles qui ont profité de l’effacement.",
  ],
  [
    "Contrebandier de médicaments",
    "Le client qui le menace n’a jamais voulu des remèdes: il utilisait les livraisons pour cartographier les malades. Maintenant, une fiole vide retrouvée chez lui porte le nom d’un proche.",
  ],
  [
    "Voyant des ruelles",
    "Ses visions annoncent un meurtre avec des détails impossibles, puis montrent ses propres mains tachées de sang. Il doit découvrir s’il voit l’avenir, un piège mental ou le souvenir de quelqu’un d’autre.",
  ],
  [
    "Ancien serviteur des Hauteurs",
    "La preuve de son innocence est enfermée dans la maison qui l’a renvoyé, mais un nouveau domestique y subit le même complot. Il peut se sauver seul ou exposer tout un réseau d’abus des Hauteurs.",
  ],
  [
    "Orphelin du quartier malade",
    "Un registre médical classe certains pauvres comme “récupérables” et d’autres comme “perdus”. Son propre nom apparaît dans une ancienne page, accompagné d’une date qui n’est pas encore arrivée.",
  ],
  [
    "Éclaireur des toits",
    "Le trajet nocturne impossible mène à une passerelle invisible qui n’apparaît qu’à certaines heures. Quelqu’un l’utilise pour enlever des témoins sans jamais traverser les rues surveillées.",
  ],
  [
    "Enfant de deux quartiers",
    "Un conflit entre le Centre Civique et la Vieille Ville le force à servir d’intermédiaire. Les deux camps lui demandent la même chose: trahir l’autre avant que son double héritage ne devienne une accusation.",
  ],
  [
    "Apprenti refusé par l’Université",
    "Un maître sans titre lui offre enfin un enseignement, mais chaque leçon ressemble à un vol de souvenirs. Pour gagner sa place, il doit déterminer ce que son mentor veut vraiment éveiller en lui.",
  ],
  [
    "Bâtard d’une famille des Hauteurs",
    "Un sceau familial authentique arrive entre ses mains avec une convocation à un héritage secret. S’il se présente, il devient une menace pour les héritiers légitimes; s’il refuse, quelqu’un d’autre prendra son nom.",
  ],
  [
    "Interprète de marchés",
    "Les versions contradictoires qu’il a entendues sont toutes vraies, mais racontées depuis des moments différents. Un témoin lui demande de traduire une langue qu’il ne connaît pas encore.",
  ],
  [
    "Enfant d’un garde et d’une réfugiée elfe",
    "Le dossier de l’opération où son parent a disparu a été classé sous un faux numéro. En le cherchant, il découvre que plusieurs enfants mixtes ont été suivis depuis leur naissance.",
  ],
  [
    "Aide d’apothicaire",
    "Le remède impossible a guéri une blessure ancienne, puis a déplacé la maladie sur quelqu’un d’autre. L’apothicaire lui demande de se taire, mais la prochaine victime frappe à la porte.",
  ],
  [
    "Faux noble",
    "Le nom qu’il a inventé appartient à une lignée officiellement éteinte. Des créanciers, des assassins et un notaire viennent maintenant réclamer des comptes au “dernier héritier”.",
  ],
  [
    "Contact de la Résistance",
    "La livraison trahie contenait un message incomplet qui accuse un membre respecté de la Résistance. S’il suit la piste, il risque de prouver que son réseau est infiltré depuis le début.",
  ],
  [
    "Cartographe de fortune",
    "Ses cartes changent parce que certaines rues changent réellement de place après minuit. Une famille disparue lui laisse un plan annoté de sa propre main, daté de demain.",
  ],
  [
    "Survivant d’un rituel raté",
    "Les signes du rituel réapparaissent sur les murs autour de ceux qui l’ont abandonné enfant. Chaque marque rapproche l’achèvement du rituel, et il semble en être la dernière pièce vivante.",
  ],
]);

function parseTsv(text) {
  return text
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .map((line) => line.split("\t"));
}

function serializeTsv(rows) {
  return rows
    .map((row) =>
      row.map((cell) => String(cell ?? "").replace(/\t/g, " ").replace(/\r?\n/g, " ")).join("\t"),
    )
    .join("\r\n");
}

function csvCell(value, delimiter) {
  const text = String(value ?? "");
  const mustQuote =
    text.includes('"') || text.includes("\n") || text.includes("\r") || text.includes(delimiter);
  return mustQuote ? `"${text.replace(/"/g, '""')}"` : text;
}

function serializeCsv(rows, delimiter = ",") {
  return rows.map((row) => row.map((cell) => csvCell(cell, delimiter)).join(delimiter)).join("\r\n");
}

function columnLetter(index) {
  let dividend = index + 1;
  let name = "";
  while (dividend > 0) {
    const modulo = (dividend - 1) % 26;
    name = String.fromCharCode(65 + modulo) + name;
    dividend = Math.floor((dividend - modulo) / 26);
  }
  return name;
}

const sourceText = await fs.readFile(sourcePath, "utf8");
const rows = parseTsv(sourceText);
const header = [...rows[0]];
header[1] = "Background";
const enrichedHeader = [...header, "Accroche d'histoire personnelle"];

const enrichedRows = rows.slice(1).map((row, index) => {
  if (row.length !== 4) {
    throw new Error(`Ligne ${index + 2}: ${row.length} colonnes trouvées au lieu de 4.`);
  }

  const background = row[1];
  const hook = hookByBackground.get(background);
  if (!hook) {
    throw new Error(`Aucune accroche définie pour le background: ${background}`);
  }

  return [...row, hook];
});

const enriched = [enrichedHeader, ...enrichedRows];
const outputBase = path.join(__dirname, "backgrounds_valombre_avec_accroches");

await fs.writeFile(`${outputBase}.tsv`, `\uFEFF${serializeTsv(enriched)}\r\n`, "utf8");
await fs.writeFile(`${outputBase}.csv`, `\uFEFF${serializeCsv(enriched, ",")}\r\n`, "utf8");
await fs.writeFile(`${outputBase}_point_virgule.csv`, `\uFEFF${serializeCsv(enriched, ";")}\r\n`, "utf8");

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Backgrounds");
const rowCount = enriched.length;
const colCount = enriched[0].length;
const lastCol = columnLetter(colCount - 1);

sheet.getRangeByIndexes(0, 0, rowCount, colCount).values = enriched;
sheet.freezePanes.freezeRows(1);
sheet.showGridLines = false;

const usedRange = sheet.getRange(`A1:${lastCol}${rowCount}`);
usedRange.format.wrapText = true;
usedRange.format.borders = { preset: "inside", style: "thin", color: "#D9E2EC" };

const headerRange = sheet.getRange(`A1:${lastCol}1`);
headerRange.format = {
  fill: "#1F4E78",
  font: { bold: true, color: "#FFFFFF" },
  wrapText: true,
  borders: { preset: "outside", style: "thin", color: "#173A5E" },
};

sheet.getRangeByIndexes(0, 0, rowCount, 1).format.columnWidthPx = 95;
sheet.getRangeByIndexes(0, 1, rowCount, 1).format.columnWidthPx = 190;
sheet.getRangeByIndexes(0, 2, rowCount, 1).format.columnWidthPx = 330;
sheet.getRangeByIndexes(0, 3, rowCount, 1).format.columnWidthPx = 310;
sheet.getRangeByIndexes(0, 4, rowCount, 1).format.columnWidthPx = 520;
sheet.getRange(`A1:${lastCol}1`).format.rowHeightPx = 38;
sheet.getRange(`A2:${lastCol}${rowCount}`).format.rowHeightPx = 78;

sheet.tables.add(`A1:${lastCol}${rowCount}`, true, "BackgroundHooks");

const preview = await workbook.render({
  sheetName: "Backgrounds",
  range: `A1:${lastCol}${Math.min(rowCount, 16)}`,
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputBase}_preview.png`, new Uint8Array(await preview.arrayBuffer()));

const inspect = await workbook.inspect({
  kind: "table",
  range: `Backgrounds!A1:${lastCol}${Math.min(rowCount, 6)}`,
  tableMaxRows: 6,
  tableMaxCols: colCount,
  tableMaxCellChars: 120,
});
console.log(inspect.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(`${outputBase}.xlsx`);

console.log(`Wrote ${rowCount - 1} enriched backgrounds.`);
