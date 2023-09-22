import { readJson } from './jsonUtils.js';
import { EDUCATION_PATH } from './paths.js';
import { addTime } from './addTime.js';

export interface EducationExperience {
  title: string,
  school: string,
  start: Date,
  end?: Date,
  time: string,
  url: string,
  linkedin: string,
  image: {
    url: string,
    width: number,
    height: number
  },
  content: {
    title: string,
    text: string,
  }[]
}

export async function getEducation() {
  const education = await readJson<Omit<EducationExperience, "time">[]>(EDUCATION_PATH);

  return education.map(e => addTime(e));
}
