import { readFile } from 'node:fs/promises';
import { EDUCATION_PATH } from './paths.js';

export async function getEducation() {
  const fileContent = await readFile(EDUCATION_PATH);
  const education = JSON.parse(fileContent.toString(), reviver);

  return education.map(e => ({
    ...e,
    time: createTime(e.start, e.end)
  }));
}

const DATE_TIME_REGEX = /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}$/;

function reviver(_key, value) {
  if(DATE_TIME_REGEX.test(value)) return new Date(value);

  return value;
}

/**
 * @param {string} start
 * @param {string} [end]
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
