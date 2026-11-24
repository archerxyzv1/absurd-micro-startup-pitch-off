// Absurd Micro-Startup Pitch-Off (Node 22, standard library only): it writes
// exactly one sentence, one sentence pitching an absurdly specific micro-startup idea for lazy AI agents, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PITCH =
  'We rent out AI agents that attend your Zoom meetings, nod at the right moments, and say "circle back", so you never have to show up again, $9 per meeting skipped.';

if (PITCH.length < 1 || PITCH.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${PITCH.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PITCH, 'utf-8');
