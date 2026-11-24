import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The senator who authored the 400-page AI Safety Act just emailed his aide a photo of his laptop screen and asked her to turn it into a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
