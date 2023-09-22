import { readJson } from './jsonUtils.js';
import { WORK_PATH } from './paths.js';
import { addTime } from './addTime.js';

interface WorkExperience {
  title: string,
  company: string,
  start: Date,
  end?: Date,
  url: string,
  linkedin: string,
  image: {
    url: string,
    width: number,
    height: number,
  },
  content: {
    title: string,
    text: string,
  }[]
}

export async function getWork() {
  const work = await readJson<WorkExperience[]>(WORK_PATH);

  return work.map(e => addTime(e));
}
