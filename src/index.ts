import { writeFile } from 'node:fs/promises';

import 'dotenv/config';

import { getProjects } from './lib/getProjects.js';
import { getWork } from './lib/getWork.js';
import { getEducation } from './lib/getEducation.js';
import { minifyHtml } from './lib/minifyHtml.js';
import { makeDir, copyDir, removeDirIfExists } from './lib/fsUtils.js';

import { buildPage } from './pages/index.js';

import {
  DIST_FOLDER,
  HTML_PATH,
  PUBLIC_FOLDER,
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

  await removeDirIfExists(DIST_FOLDER);
  await makeDir(DIST_FOLDER);

  await Promise.all([
    writeFile(HTML_PATH, minifiedHtml),
    copyDir(PUBLIC_FOLDER, DIST_FOLDER),
  ]);
}

build().then(() => console.log('Done!'));
