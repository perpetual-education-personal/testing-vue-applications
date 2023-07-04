import { test, expect } from 'vitest';

function doubleAsync(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(number * 2);
    }, 2000);
  });
}

test('sanity test', async () => {
  expect(await doubleAsync(2)).toBe(4);
});
// not sure if this is the _right_ way to do this... but for an example
// (and before adding any other libraries)

test('sanity test', async () => {
  expect(await doubleAsync(2)).toBe(5);
});

// seems like these should run concurrently/in-parallel or something
