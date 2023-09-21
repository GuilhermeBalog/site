import { readFile } from 'node:fs/promises';

import { JS_PATH } from './paths.js';

export async function buildJs() {
  return (await readFile(JS_PATH)).toString();
}
