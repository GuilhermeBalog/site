import sass from 'sass';

export async function compileSass(sassPath) {
  const { css } = await sass.compileAsync(sassPath, { style: 'compressed' });

  return css;
}
