import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { createTemplate } from './createTemplate.js'

export function getTemplates(basePath) {
  return readdirSync(basePath)
    .map(componentPath => ({
      name: getComponentName(componentPath),
      function: createTemplate(getTemplateContent(componentPath))
    }))
    .reduce((final, template) => ({
      ...final,
      [template.name]: template.function,
    }), {})

  function getTemplateContent(componentPath) {
    const fullPath = path.join(basePath, componentPath);

    return readFileSync(fullPath).toString();
  }

  function getComponentName(componentPath) {
    return componentPath.replace(/\.html$/g, '')
  }
}
