import { mkdir, rm, writeFile } from 'node:fs/promises';

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
  const [
    templates,
    pageData,
    projects,
    education,
    css,
    js,
  ] = await Promise.all([
    getTemplates(TEMPLATES_FOLDER),
    getPageMetadata(),
    getProjects(),
    getEducation(),
    compileSass(SASS_PATH),
    buildJs(JS_PATH),
  ]);

  const html = templates.main({
    _: templates,
    css,
    js,
    pageData,
    projects,
    education,
  });

  const minifiedHtml = minifyHtml(html);

  if(exists(DIST_FOLDER)) await rm(DIST_FOLDER, { recursive: true });
  await mkdir(DIST_FOLDER);

  await Promise.all([
    writeFile(HTML_PATH, minifiedHtml),
    copyDir(ASSETS_FOLDER, DIST_ASSETS_FOLDER),
  ])
}

build().then(() => console.log('Done!'));
