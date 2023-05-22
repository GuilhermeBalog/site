import { writeFile } from 'node:fs/promises';

export async function writeJson(path, json) {
  await writeFile(path, JSON.stringify(json, null, '  '));
}
