import { readJson } from './jsonUtils.js';
import { WORK_PATH } from './paths.js';
import { addTime } from './addTime.js';

export async function getWork() {
  const work = await readJson(WORK_PATH);

  return work.map(e => addTime(e));
}
