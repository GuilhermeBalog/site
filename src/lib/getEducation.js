import { readJson } from './jsonUtils.js';
import { EDUCATION_PATH } from './paths.js';
import { addTime } from './addTime.js';

export async function getEducation() {
  const education = await readJson(EDUCATION_PATH);

  return education.map(e => addTime(e));
}
