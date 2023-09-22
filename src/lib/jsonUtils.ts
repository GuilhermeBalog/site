import { readFile, writeFile } from 'node:fs/promises';

export async function writeJson(path: string, json: any) {
  await writeFile(path, JSON.stringify(json, null, '  '));
}

export async function readJson<T>(path: string) {
  const fileContent = await readFile(path);
  const jsonContent = JSON.parse(fileContent.toString(), reviver) as T;

  return jsonContent;
}

const DATE_TIME_REGEX = /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}/;

function reviver(_key: string, value: any) {
  if(DATE_TIME_REGEX.test(value)) return new Date(value);

  return value;
}
