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
import { copyFiles } from './lib/copyFiles.js';
import { getProjects } from './lib/getProjects.js';
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
  const templates = getTemplates(TEMPLATES_FOLDER);
  const pageData = await getPageMetadata();
  const projects = await getProjects();

  const css = compileSass(SASS_PATH);
  const js = buildJs(JS_PATH)

  const html = templates.main({ _: templates, css, js, pageData, projects });
  const minifiedHtml = minifyHtml(html);

  if(exists(DIST_FOLDER)) rmSync(DIST_FOLDER, { recursive: true });

  mkdirSync(DIST_FOLDER);
  writeFileSync(HTML_PATH, minifiedHtml);
  copyFiles(ASSETS_FOLDER, DIST_ASSETS_FOLDER);
}

build();
