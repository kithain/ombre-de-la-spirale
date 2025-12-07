import fs from "fs";
import path from "path";

const root = path.resolve(".");

function extractNpcsFromUniverse() {
  const zonesFiles = fs
    .readdirSync(path.join(root, "src/data"))
    .filter((f) => f.startsWith("universeZone_") && f.endsWith(".js"));

  const npcs = new Map();
  for (const file of zonesFiles) {
    const content = fs.readFileSync(path.join(root, "src/data", file), "utf8");
    const zoneId = file.replace("universeZone_", "").replace(".js", "");

    // Extraire les blocs npcs: [ ... ]
    const npcsBlockRegex = /npcs:\s*\[([\s\S]*?)\]/g;
    let blockMatch;
    while ((blockMatch = npcsBlockRegex.exec(content))) {
      const block = blockMatch[1];
      const npcRegex = /\{\s*id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"([\s\S]*?role:\s*"([^"]+)")?/g;
      let npcMatch;
      while ((npcMatch = npcRegex.exec(block))) {
        const [, id, name, , role] = npcMatch;
        if (!npcs.has(id)) {
          npcs.set(id, { id, name, role: role || "", from: "universe", zone: zoneId });
        }
      }
    }
  }
  return npcs;
}

function extractNpcsFromScenarios() {
  const scenarioFiles = fs
    .readdirSync(path.join(root, "src/data"))
    .filter((f) => f.startsWith("scenario") && f.endsWith(".js") && f !== "scenarios.js");

  const npcs = new Map();
  for (const file of scenarioFiles) {
    const content = fs.readFileSync(path.join(root, "src/data", file), "utf8");
    const npcRegex = /npcIds:\s*\[([^\]]*)\]/g;
    let match;
    while ((match = npcRegex.exec(content))) {
      const list = match[1]
        .split(",")
        .map((s) => s.trim().replace(/["']/g, ""))
        .filter(Boolean);
      list.forEach((id) => {
        if (!npcs.has(id)) {
          npcs.set(id, { id, name: id, from: "sceneOnly" });
        }
      });
    }
  }
  return npcs;
}

function main() {
  const uniNpcs = extractNpcsFromUniverse();
  const scNpcs = extractNpcsFromScenarios();
  const all = new Map([...uniNpcs, ...scNpcs]);
  const list = [...all.values()].sort((a, b) => a.id.localeCompare(b.id));
  console.log(JSON.stringify(list, null, 2));
}

main();
