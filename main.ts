import { mkdirSync, writeFileSync } from "node:fs";
const entry = "They want to regulate artificial intelligence, crypto, and the entire internet, yet they still email their assistant a PDF with the subject line: please convert this.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
