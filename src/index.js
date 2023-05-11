import {
  mkdirSync,
  writeFileSync,
  rmSync
} from 'node:fs';

import { getTemplates } from './lib/getTemplates.js';
import { getPageMetadata } from './lib/getPageMetadata.js';
import { exists } from './lib/exists.js';
import { compileSass } from './lib/compileSass.js';
import { minifyHtml } from './lib/minifyHtml.js';
import {
  TEMPLATES_FOLDER,
  DIST_FOLDER,
  SASS_PATH,
  HTML_PATH,
  ASSETS_FOLDER,
  DIST_ASSETS_FOLDER
} from './lib/paths.js';
import { copyFiles } from './lib/copyFiles.js';

async function build() {
  if(exists(DIST_FOLDER)) rmSync(DIST_FOLDER, { recursive: true });

  mkdirSync(DIST_FOLDER);

  const templates = getTemplates(TEMPLATES_FOLDER);
  const pageData = await getPageMetadata();
  const css = compileSass(SASS_PATH);

  const html = templates.main({ _: templates, pageData, css });
  const minifiedHtml = minifyHtml(html);

  writeFileSync(HTML_PATH, minifiedHtml);
  copyFiles(ASSETS_FOLDER, DIST_ASSETS_FOLDER);
}

build();
