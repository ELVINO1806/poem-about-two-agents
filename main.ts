
import { mkdirSync, writeFileSync } from "node:fs";

const POEM_LINES: string[] = [
  "At the door, one says: knock twice, then push.",
  "The other says: what if no one answers?",
  "Listen, says the first. Three footsteps,",
  "then the bolt, sliding back. Someone is home.",
  "The second counts the steps, knocks once —",
  "and the door opens from inside, before they push.",
];

function poemText(): string {
  return [...POEM_LINES].join("\n").concat("\n");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, poemText(), "utf-8");
}

main();
