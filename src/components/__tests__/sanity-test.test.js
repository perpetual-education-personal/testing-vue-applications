import { test, expect } from 'vitest';

test('sanity test', () => {
  expect(2 * 2).toBe(4); // set to 5 or something to see it fail
});

// if you return true or false , it still "passes" - so, we'd better find a better way to talk about this
