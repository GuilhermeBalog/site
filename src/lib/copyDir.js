import { copyFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

import { exists } from './exists.js';

export async function copyDir(from, to) {
  if(!exists(to)) {
    await mkdir(to);
  }

  const files = await readdir(from);

  await Promise.all(
    files.map(file => copyFile(
      path.join(from, file),
      path.join(to, file)
    ))
  );
}
