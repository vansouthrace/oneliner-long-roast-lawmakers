import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "The senator who wrote the AI Licensing Act spent forty minutes trying to save it as a PDF, declared the format a security risk, and had his aide retype the whole bill into the chat window instead.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
