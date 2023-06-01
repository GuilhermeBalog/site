import { writeFile } from 'node:fs/promises';

import 'dotenv/config';

import { getTemplates } from './lib/getTemplates.js';
import { getPageMetadata } from './lib/getPageMetadata.js';
import { compileSass } from './lib/compileSass.js';
import { minifyHtml } from './lib/minifyHtml.js';
import { buildJs } from './lib/buildJs.js';
import { getProjects } from './lib/getProjects.js';
import { getEducation } from './lib/getEducation.js';
import { getWork } from './lib/getWork.js';
import { safeMkdir, copyDir } from './lib/fsUtils.js';
import {
  TEMPLATES_FOLDER,
  DIST_FOLDER,
  SASS_PATH,
  HTML_PATH,
  ASSETS_FOLDER,
  DIST_ASSETS_FOLDER,
  JS_PATH,
  DATA_FOLDER,
  DIST_DATA_FOLDER,
} from './lib/paths.js';

async function build() {
  const [
    templates,
    pageData,
    projects,
    education,
    work,
    css,
    js,
  ] = await Promise.all([
    getTemplates(TEMPLATES_FOLDER),
    getPageMetadata(),
    getProjects(),
    getEducation(),
    getWork(),
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
    work,
  });

  const minifiedHtml = minifyHtml(html);

  await safeMkdir(DIST_FOLDER);

  await Promise.all([
    writeFile(HTML_PATH, minifiedHtml),
    copyDir(ASSETS_FOLDER, DIST_ASSETS_FOLDER),
    copyDir(DATA_FOLDER, DIST_DATA_FOLDER),
  ])
}

build().then(() => console.log('Done!'));
