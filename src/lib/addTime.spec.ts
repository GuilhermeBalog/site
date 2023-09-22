import { describe, it } from 'node:test';
import assert from 'node:assert';

import { addTime } from './addTime.js';

describe('addTime()', () => {
  it('should add time to an experience', () => {
    const start = new Date('2000-01-01T01:00:00');
    const end = new Date('2000-12-31T01:00:00');

    const result = addTime({ start, end });

    const expectedTime = 'Jan. 2000 - Dez. 2000';
    assert.deepStrictEqual(result, { start, end, time: expectedTime });
  });

  it('should add time to an experience without end date', () => {
    const start = new Date('2000-01-01T01:00:00');

    const result = addTime({ start });

    const expectedTime = 'Jan. 2000 - Atualmente';
    assert.deepStrictEqual(result, { start, time: expectedTime });
  });
});
