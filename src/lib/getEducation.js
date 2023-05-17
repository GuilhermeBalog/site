import { readJson } from './readJson.js';
import { EDUCATION_PATH } from './paths.js';

export async function getEducation() {
  const education = await  readJson(EDUCATION_PATH);

  return education.map(e => ({
    ...e,
    time: createTime(e.start, e.end)
  }));
}

/**
 * @param {Date} start
 * @param {Date} [end]
 */
function createTime(start, end) {
  const from = formatDate(start)
  const to = end ? formatDate(end) : 'Atualmente';

  return `${from} - ${to}`
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  month: 'short',
  year: 'numeric'
});

/** @param {Date} date */
function formatDate(date) {
  const formatted = dateFormatter.format(date);
  const capitalized = capitalize(formatted);
  const withoutDe = removeDe(capitalized);

  return withoutDe;
}

/** @param {string} text */
function capitalize(text) {
  const [firstLetter, ...rest] = text.split('');
  return firstLetter.toUpperCase().concat(rest.join(''))
}

/** @param {string} text */
function removeDe(text) {
  return text.replace('de ', '')
}
