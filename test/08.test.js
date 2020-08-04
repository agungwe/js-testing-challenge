const arrayMirroring = require('../src/08.js');

const arr = [1, 2, 3];
const expected = [1, 2, 3, 3, 2, 1];
test(`Fungsi Array Mirroring, arr = ${arr}, res = ${expected}`, () => {
  expect(arrayMirroring(arr)).toEqual(expect.arrayContaining(expected));
});