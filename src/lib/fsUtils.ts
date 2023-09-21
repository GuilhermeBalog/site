import {
  access,
  constants,
  copyFile,
  mkdir,
  readdir,
  rm,
} from 'node:fs/promises';
import path from 'node:path';

export async function exists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (_) {
    return false;
  }
}

export async function copyDir(from: string, to: string) {
  await safeMkdir(to);

  const files = await readdir(from);

  await Promise.all(
    files.map(file => copyFile(
      path.join(from, file),
      path.join(to, file)
    ))
  );
}

export async function safeMkdir(dirPath: string) {
  if(await exists(dirPath)) await rm(dirPath, { recursive: true });

  await mkdir(dirPath);
}
