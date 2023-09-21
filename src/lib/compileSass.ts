import sass from 'sass';

import { SASS_PATH } from './paths.js';

export async function compileSass() {
  const { css } = await sass.compileAsync(SASS_PATH, { style: 'compressed' });

  return css;
}
