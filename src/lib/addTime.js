/**
 * @param {Object} experience
 * @param {Date} experience.start
 * @param {Date} [experience.end]
 */
export function addTime(experience) {
  return {
    ...experience,
    time: createTime(experience.start, experience.end),
  };
}

/**
 * @param {Date} start
 * @param {Date} [end]
 */
function createTime(start, end) {
  const from = formatDate(start);
  const to = end ? formatDate(end) : 'Atualmente';

  return `${from} - ${to}`;
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
  return text.replace(
    /^./,
    firstLetter => firstLetter.toLocaleUpperCase()
  )
}

/** @param {string} text */
function removeDe(text) {
  return text.replace('de ', '');
}
