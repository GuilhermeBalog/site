import { lstatSync } from 'node:fs';
import {
  access,
  constants,
  copyFile,
  mkdir,
  readdir,
  rm,
} from 'node:fs/promises';
import path from 'node:path';

export function isFile(path: string) {
  return lstatSync(path).isFile();
};

export async function exists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (_) {
    return false;
  }
}

export async function copyDir(from: string, to: string) {
  if(!await exists(to)) {
    await makeDir(to);
  }

  const files = await readdir(from);

  await Promise.all(
    files.map(file => {
      const fromPath = path.join(from, file);
      const toPath = path.join(to, file);

      if(isFile(fromPath)) {
        return copyFile(fromPath, toPath)
      }

      return copyDir(fromPath, toPath);
    })
  );
}

export async function makeDir(dirPath: string) {
  return mkdir(dirPath);
}

export async function removeDirIfExists(dirPath: string) {
  if(await exists(dirPath)) await rm(dirPath, { recursive: true });
}