import { test, expect } from 'vitest';

function double(number) {
  return number * 2;
}

test('sanity test', () => {
  expect(double(2)).toBe(4);
});

test('sanity test 2', () => {
  expect(double(2)).toBe(5); // set to 5 or something to see it fail
});
