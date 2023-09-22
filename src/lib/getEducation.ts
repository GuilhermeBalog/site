import { readJson } from './jsonUtils.js';
import { EDUCATION_PATH } from './paths.js';
import { addTime } from './addTime.js';

interface EducationExperience {
  title: string,
  school: string,
  start: Date,
  end?: Date,
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
  const education = await readJson<EducationExperience[]>(EDUCATION_PATH);

  return education.map(e => addTime(e));
}
