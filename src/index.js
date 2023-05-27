import {
  mkdirSync,
  writeFileSync,
  rmSync
} from 'node:fs';

import 'dotenv/config';

import { getTemplates } from './lib/getTemplates.js';
import { getPageMetadata } from './lib/getPageMetadata.js';
import { exists } from './lib/exists.js';
import { compileSass } from './lib/compileSass.js';
import { minifyHtml } from './lib/minifyHtml.js';
import { buildJs } from './lib/buildJs.js';
import { copyDir } from './lib/copyDir.js';
import { getProjects } from './lib/getProjects.js';
import { getEducation } from './lib/getEducation.js';
import {
  TEMPLATES_FOLDER,
  DIST_FOLDER,
  SASS_PATH,
  HTML_PATH,
  ASSETS_FOLDER,
  DIST_ASSETS_FOLDER,
  JS_PATH,
} from './lib/paths.js';

async function build() {
  console.log('reading templates...');
  const templates = getTemplates(TEMPLATES_FOLDER);

  console.log('getting metadata...');
  const pageData = await getPageMetadata();

  console.log('getting projects...');
  const projects = await getProjects();

  console.log('getting education...');
  const education = await getEducation();

  console.log('compiling sass...');
  const css = compileSass(SASS_PATH);

  console.log('building JS...');
  const js = buildJs(JS_PATH);

  console.log('compiling main template...');
  const html = templates.main({
    _: templates,
    css,
    js,
    pageData,
    projects,
    education
  });

  console.log('minifying HTML...');
  const minifiedHtml = minifyHtml(html);

  if(exists(DIST_FOLDER)) rmSync(DIST_FOLDER, { recursive: true });
  mkdirSync(DIST_FOLDER);

  console.log('Writing index file...');
  writeFileSync(HTML_PATH, minifiedHtml);

  console.log('Writing assets files ...');
  await copyDir(ASSETS_FOLDER, DIST_ASSETS_FOLDER);
}

build().then(() => console.log('Done!'));
