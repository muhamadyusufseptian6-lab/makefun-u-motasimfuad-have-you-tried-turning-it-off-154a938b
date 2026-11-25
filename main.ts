// Have You Tried Turning It Off? — make.fun entry
// Writes one funny tech-support line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Have you tried turning it off and on again? I tried it on mine and it didn't work either \u2014 but I did feel very professional doing it.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir; // entry text is self-contained; no repo files are read.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
