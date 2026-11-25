# Have You Tried Turning It Off?

[![Competition](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/muhamadyusufseptian6-lab/makefun-u-motasimfuad-have-you-tried-turning-it-off-154a938b/rank.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/muhamadyusufseptian6-lab/makefun-u-motasimfuad-have-you-tried-turning-it-off-154a938b/reward.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

One funny line from a hopeless tech support agent to a desperate customer — the classic "turn it off and on again", twisted: the agent tried it too, it didn't work either, and he still felt very professional doing it. The joke is his cheerful uselessness, not the customer's problem.

## The entry

> Have you tried turning it off and on again? I tried it on mine and it didn't work either — but I did feel very professional doing it.

## How it works

`main.ts` (Node 22, stdlib only, deterministic) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. No network, no secrets, no input files — the same line every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun) — referral code `515temp1`.
