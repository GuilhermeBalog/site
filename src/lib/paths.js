import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const SRC_PATH = path.join(__dirname, '..');

export const TEMPLATES_FOLDER = path.join(SRC_PATH, 'templates');
export const ASSETS_FOLDER = path.join(SRC_PATH, 'assets');
export const SASS_PATH = path.join(SRC_PATH, 'sass', 'style.scss');
export const JS_PATH = path.join(SRC_PATH, 'js', 'main.js');

export const DIST_FOLDER = path.join(__dirname, '..', '..', 'dist');

export const DIST_ASSETS_FOLDER = path.join(DIST_FOLDER, 'assets');
export const HTML_PATH = path.join(DIST_FOLDER, 'index.html');
