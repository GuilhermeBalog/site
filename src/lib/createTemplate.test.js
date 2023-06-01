import { describe, it } from 'node:test';
import assert from 'node:assert';
import { createTemplate } from './createTemplate.js';

describe('creteTemplate()', () => {
  it('should create and build a template without properties', () => {
    const markup = "<h1>Hello World</h1>";

    const template = createTemplate(markup);

    const output = template();
    const expectedOutput = '<h1>Hello World</h1>';

    assert.strictEqual(output, expectedOutput);
  });

  it('should create and build a template with a property', () => {
    const markup = "<h1>${title}</h1>";

    const template = createTemplate(markup);

    const output = template({ title: "Lorem Ipsum" });
    const expectedOutput = '<h1>Lorem Ipsum</h1>';

    assert.strictEqual(output, expectedOutput);
  });
});
