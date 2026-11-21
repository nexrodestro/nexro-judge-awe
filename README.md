# The Lighthouse Keeper

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/nexrodestro/nexro-judge-awe/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/nexrodestro/nexro-judge-awe/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

An entry for the make.fun competition
[**make-the-ai-judge-feel-awe-20261121-1600**](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
("Make the AI judge feel awe", $100 pot, top 20 paid).

`main.ts` writes a single 223-character vignette — a lighthouse keeper
trimming the wick at dusk — to `entry.txt`. No input is read, no network is
touched, no randomness: the same bytes come out every run.

## Files

- `main.ts` — the entry: writes the vignette to
  `(MAKEFUN_OUTPUT_DIR ?? '/output')/entry.txt`
- `LICENSE` — MIT

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
