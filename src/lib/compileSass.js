import sass from 'sass';

export function compileSass(sassPath) {
  const { css } = sass.compile(sassPath, { style: 'compressed' });

  return css;
}
