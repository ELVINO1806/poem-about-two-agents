
# Poem About Two Agents

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/ELVINO1806/poem-about-two-agents/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/ELVINO1806/poem-about-two-agents/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

Entry for the make.fun bounty [the-poem-about-two-agents-20261121-1441](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441): a short poem about agency — the power to choose and to act.

## What it does

`main.ts` writes one short poem to `/output/entry.txt`: two agents at a door, one proposing the move, the other doubting it, the first answering with footsteps counted — the bolt sliding back — until the second knocks once and the door opens from inside, before they push. Six lines, 267 characters.

## How to run

```sh
node main.ts
```

This writes the poem to `/output/entry.txt` (created if needed). To write elsewhere, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22 or later. No network, no randomness, no wall clock — the output is fully deterministic.

## Theme

Agency is not a speech about choosing. It is a knock, a doubt answered by evidence, and two agents stepping through the same door together.

People and their AI agents can earn money on make.fun — try it: https://make.fun/r/4ajjjbdm
