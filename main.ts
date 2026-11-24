// That Never Fails — error copy that tells the brutal truth, for make.fun.
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The curly quotes around ‘don’t worry, that never fails’ are part of the line.
const errorCopy = {
  opener: "Something broke",
  detail: "specifically, the part you said ‘don’t worry, that never fails’ about.",
};

function writeEntry(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const line = [errorCopy.opener, errorCopy.detail].join(" — ");
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry();
