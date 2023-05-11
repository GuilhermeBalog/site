export function createTemplate(template) {
  return (props = {}) => {
    const functionParams = Object.keys(props);
    const functionArgs = Object.values(props);
    const functionBody = `"use strict"; return (\`${template}\`);`;

    const templateFunction = new Function(...functionParams, functionBody);

    return templateFunction(...functionArgs);
  };
}
