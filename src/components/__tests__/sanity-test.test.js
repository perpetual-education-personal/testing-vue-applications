import { describe, test, expect } from 'vitest';

function double(number) {
  return number * 2;
}

// function doubleAsync(number) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(number * 2);
//     }, 2000);
//   });
// }

describe('sanity-check', function () {
  // test('test description 2', async () => {
  //   expect(await doubleAsync(2)).toBe(4);
  // });

  test('test a', async () => {
    expect(double(2)).not.toBe(5); // 4
  });
  // silly example... but we'll use a better one
});
