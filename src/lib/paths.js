import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_FOLDER = path.join(__dirname, '..', 'templates');
export const ASSETS_FOLDER = path.join(__dirname, '..', 'assets');
export const SASS_PATH = path.join(__dirname, '..', 'sass', 'style.scss');

export const DIST_FOLDER = path.join(__dirname, '..', '..', 'dist');

export const DIST_ASSETS_FOLDER = path.join(DIST_FOLDER, 'assets');
export const HTML_PATH = path.join(DIST_FOLDER, 'index.html');
