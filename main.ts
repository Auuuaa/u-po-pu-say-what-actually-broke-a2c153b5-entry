import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Say What Actually Broke — make.fun entry. Writes the entry text to /entry.txt.
const entry = "Something broke — specifically, the part you said ‘don’t worry, that never fails’ about.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
