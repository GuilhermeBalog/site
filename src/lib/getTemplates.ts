import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { createTemplate } from './createTemplate.js';

import { TEMPLATES_FOLDER } from './paths.js';

export async function getTemplates() {
  const files = await readdir(TEMPLATES_FOLDER);
  const templateObjects = await Promise.all(
    files.map(filePath => mountTemplateObject(filePath))
  );

  type Template = Awaited<ReturnType<typeof mountTemplateObject>>

  const result = templateObjects.reduce((templates, template) => {
    templates[template.name] = template.fn;
    return templates;
  }, {} as Record<Template["name"], Template["fn"]>);
  return result;
}

async function mountTemplateObject(templatePath: string) {
  const name = getComponentName(templatePath);
  const templateContent = await getTemplateContent(templatePath);
  const fn = createTemplate(templateContent);

  return { name, fn };
}

async function getTemplateContent(templatePath: string) {
  const fullPath = path.join(TEMPLATES_FOLDER, templatePath);

  return (await readFile(fullPath)).toString();
}

function getComponentName(templatePath: string) {
  return templatePath.replace(/\.html$/g, '');
}
