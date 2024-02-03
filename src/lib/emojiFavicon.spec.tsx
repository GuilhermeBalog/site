import { describe, it } from "node:test";
import assert from 'node:assert'

import { emojiFavicon } from "./emojiFavIcon.js";

describe('emojiFavicon()', () => {
  it('should return a svg properly encoded to be used as favicon', () => {
    const actual = emojiFavicon()
    const expected = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌🏾</text></svg>"

    assert.strictEqual(actual, expected);
  });
});
