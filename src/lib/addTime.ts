interface TimedExperience {
  start: Date,
  end?: Date,
}

export function addTime<T extends TimedExperience>(experience: T) {
  return {
    ...experience,
    time: createTime(experience.start, experience.end),
  };
}

function createTime(start: Date, end?: Date) {
  const from = formatDate(start);
  const to = end ? formatDate(end) : 'Atualmente';

  return `${from} - ${to}`;
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  month: 'short',
  year: 'numeric'
});

function formatDate(date: Date) {
  const formatted = dateFormatter.format(date);
  const capitalized = capitalize(formatted);
  const withoutDe = removeDe(capitalized);

  return withoutDe;
}

function capitalize(text: string) {
  return text.replace(
    /^./,
    firstLetter => firstLetter.toLocaleUpperCase()
  )
}

function removeDe(text: string) {
  return text.replace('de ', '');
}
