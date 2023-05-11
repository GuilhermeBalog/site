import {
  accessSync,
  constants
} from 'node:fs';

export function exists(path) {
  try {
    accessSync(path, constants.F_OK);
    return true;
  } catch (_) {
    return false;
  }
}
