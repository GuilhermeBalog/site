import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';

export function copyFiles(from, to) {
  mkdirSync(to);

  readdirSync(from).map(fileName => {
    copyFileSync(path.join(from, fileName), path.join(to, fileName));
  })
}