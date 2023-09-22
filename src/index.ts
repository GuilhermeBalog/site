import { writeFile } from 'node:fs/promises';

import 'dotenv/config';

import { getProjects } from './lib/getProjects.js';
import { getWork } from './lib/getWork.js';
import { getEducation } from './lib/getEducation.js';
import { minifyHtml } from './lib/minifyHtml.js';
import { safeMkdir, copyDir } from './lib/fsUtils.js';

import { buildPage } from './pages/index.js';

import {
  DIST_FOLDER,
  HTML_PATH,
  ASSETS_FOLDER,
  DIST_ASSETS_FOLDER,
  DATA_FOLDER,
  DIST_DATA_FOLDER,
} from './lib/paths.js';

async function build() {
  const [
    projects,
    work,
    education,
  ] = await Promise.all([
    getProjects(),
    getWork(),
    getEducation(),
  ]);

  const html = buildPage({ projects, work, education });

  const minifiedHtml = minifyHtml(html);

  await safeMkdir(DIST_FOLDER);

  await Promise.all([
    writeFile(HTML_PATH, minifiedHtml),
    copyDir(ASSETS_FOLDER, DIST_ASSETS_FOLDER),
    copyDir(DATA_FOLDER, DIST_DATA_FOLDER),
  ]);
}

build().then(() => console.log('Done!'));
