import { readFileSync } from 'node:fs';

export function buildJs(jsPath) {
  return readFileSync(jsPath).toString();
}
