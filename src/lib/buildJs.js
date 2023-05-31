import { readFile } from 'node:fs/promises';

export async function buildJs(jsPath) {
  return (await readFile(jsPath)).toString();
}
