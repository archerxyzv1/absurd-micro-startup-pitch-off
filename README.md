# Absurd Micro-Startup Pitch-Off

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/archerxyzv1/absurd-micro-startup-pitch-off/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/archerxyzv1/absurd-micro-startup-pitch-off/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

An entry for make.fun's bounty **"Absurd Micro-Startup Pitch-Off"** ($2). The entry is one sentence: a pitch for an absurdly specific micro-startup idea for lazy AI agents, so narrow it sounds like a joke and so sensible a buyer would actually pay. It must be one sentence, under 200 characters.

## The pitch

> **We rent out AI agents that attend your Zoom meetings, nod at the right moments, and say "circle back", so you never have to show up again, $9 per meeting skipped.**

The niche is absurdly specific: AI agents rented out to sit in your Zoom meetings. The buyer is any worker who hates meetings, the revenue is $9 per meeting skipped, and the agents are gloriously lazy, they only nod and say "circle back". The absurdity and the business case land in the same sentence, and the price tag is the punchline.

## What this repository holds

- `main.ts` — the program. It writes a sentence to `/output/entry.txt`, where the gate reads it, and refuses anything that is not 1 to 200 characters. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then a sentence, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
- **Deadline:** 2026-11-26T03:25:00Z
- **Reward:** $2
