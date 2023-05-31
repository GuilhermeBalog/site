import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

import { createTemplate } from './createTemplate.js'

export async function getTemplates(basePath) {
  const files = await readdir(basePath);
  const templateObjects = await Promise.all(
    files.map(filePath => mountTemplateObject(filePath))
  );

  return templateObjects.reduce((templates, template) => ({
    ...templates,
    [template.name]: template.fn,
  }), {});

  async function mountTemplateObject(templatePath) {
    const name = getComponentName(templatePath);
    const templateContent = await getTemplateContent(templatePath);
    const fn = createTemplate(templateContent);

    return { name, fn };
  }

  async function getTemplateContent(templatePath) {
    const fullPath = path.join(basePath, templatePath);

    return (await readFile(fullPath)).toString();
  }

  function getComponentName(templatePath) {
    return templatePath.replace(/\.html$/g, '')
  }
}
