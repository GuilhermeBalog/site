import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { createTemplate } from './createTemplate.js';

import { TEMPLATES_FOLDER } from './paths.js';

export async function getTemplates() {
  const files = await readdir(TEMPLATES_FOLDER);
  const templateObjects = await Promise.all(
    files.map(filePath => mountTemplateObject(filePath))
  );

  return templateObjects.reduce((templates, template) => ({
    ...templates,
    [template.name]: template.fn,
  }), {});
}

async function mountTemplateObject(templatePath) {
  const name = getComponentName(templatePath);
  const templateContent = await getTemplateContent(templatePath);
  const fn = createTemplate(templateContent);

  return { name, fn };
}

async function getTemplateContent(templatePath) {
  const fullPath = path.join(TEMPLATES_FOLDER, templatePath);

  return (await readFile(fullPath)).toString();
}

function getComponentName(templatePath) {
  return templatePath.replace(/\.html$/g, '');
}
