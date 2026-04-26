import { createServer } from "vite";

const args = new Set(process.argv.slice(2));

const options = {
  strict: args.has("--strict"),
  json: args.has("--json"),
  errorsOnly: args.has("--errors-only"),
  help: args.has("--help") || args.has("-h"),
};

if (options.help) {
  console.log(`Usage: npm run validate:pnj -- [options]

Options:
  --errors-only   Do not print warnings in the detailed report
  --strict        Exit with code 1 when warnings are found
  --json          Print the full report as JSON
  --help          Show this help
`);
  process.exit(0);
}

function entries(obj) {
  return Object.entries(obj || {}).map(([cle, message]) => ({ cle, message }));
}

function labelPnj(pnj, index) {
  const nom = pnj?.nom || "Sans nom";
  const id = pnj?.id || `index:${index}`;
  return `${nom} (${id})`;
}

function buildReport(tousLesPnj, validerPersonnage) {
  const details = tousLesPnj.map((pnj, index) => {
    const resultat = validerPersonnage(pnj);
    return {
      index,
      id: pnj?.id || null,
      nom: pnj?.nom || null,
      source: pnj?.source || null,
      category: pnj?.category || null,
      valide: resultat.valide,
      erreurs: entries(resultat.erreurs),
      avertissements: entries(resultat.avertissements),
    };
  });

  const avecErreurs = details.filter((item) => item.erreurs.length > 0);
  const avecAvertissements = details.filter((item) => item.avertissements.length > 0);
  const totalErreurs = details.reduce((total, item) => total + item.erreurs.length, 0);
  const totalAvertissements = details.reduce((total, item) => total + item.avertissements.length, 0);

  return {
    resume: {
      totalPnj: tousLesPnj.length,
      pnjAvecErreurs: avecErreurs.length,
      pnjAvecAvertissements: avecAvertissements.length,
      totalErreurs,
      totalAvertissements,
    },
    details: details.filter(
      (item) => item.erreurs.length > 0 || item.avertissements.length > 0,
    ),
  };
}

function printTextReport(report) {
  const { resume } = report;
  console.log("Validation PNJ");
  console.log("==============");
  console.log(`PNJ analyses       : ${resume.totalPnj}`);
  console.log(`PNJ avec erreurs   : ${resume.pnjAvecErreurs}`);
  console.log(`PNJ avec alertes   : ${resume.pnjAvecAvertissements}`);
  console.log(`Erreurs totales    : ${resume.totalErreurs}`);
  console.log(`Alertes totales    : ${resume.totalAvertissements}`);

  if (report.details.length === 0) {
    console.log("");
    console.log("OK: aucune erreur ni alerte.");
    return;
  }

  console.log("");
  console.log("Details");
  console.log("-------");

  for (const item of report.details) {
    if (options.errorsOnly && item.erreurs.length === 0) continue;

    const source = [item.source, item.category].filter(Boolean).join(" / ");
    console.log("");
    console.log(`- ${labelPnj(item, item.index)}${source ? ` [${source}]` : ""}`);

    if (item.erreurs.length > 0) {
      console.log("  Erreurs:");
      for (const erreur of item.erreurs) {
        console.log(`    - ${erreur.cle}: ${erreur.message}`);
      }
    }

    if (!options.errorsOnly && item.avertissements.length > 0) {
      console.log("  Alertes:");
      for (const alerte of item.avertissements) {
        console.log(`    - ${alerte.cle}: ${alerte.message}`);
      }
    }
  }
}

const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const [{ tousLesPnj }, { validerPersonnage }] = await Promise.all([
    vite.ssrLoadModule("/src/data/npcRegistry.js"),
    vite.ssrLoadModule("/src/utilitaires/validationPersonnage.js"),
  ]);

  const report = buildReport(tousLesPnj, validerPersonnage);

  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    printTextReport(report);
  }

  const { resume } = report;
  process.exitCode =
    resume.totalErreurs > 0 || (options.strict && resume.totalAvertissements > 0)
      ? 1
      : 0;
} finally {
  await vite.close();
}
