// The Lighthouse Keeper — make.fun entry for
// make-the-ai-judge-feel-awe-20261121-1600.
//
// Writes one short vignette to entry.txt. Deterministic: no input, no
// network, no randomness, no clock — the same bytes on every run.
//
// The entry is kept as separate sentences so the text stays readable in
// source and the join is the only formatting step. A length guard fails
// loudly if the text ever drifts outside the competition's 1-280
// code-point window instead of silently writing a bad entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCES = [
  "The keeper trims the wick at dusk.",
  "The light turns, once, and the dark gives way a little, then a little more.",
  "Far out, a boat he cannot see steadies its course by it.",
  "He sits back down.",
  "The light keeps turning without him.",
];

const ENTRY = SENTENCES.join(" ");

// Competition window: 1-280 Unicode code points. Counted in code points,
// not UTF-16 units, so astral characters (if any were added later) count once.
const length = [...ENTRY].length;
if (length < 1 || length > 280) {
  throw new Error(`entry length ${length} outside 1-280 code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
