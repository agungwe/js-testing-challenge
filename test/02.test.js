const sum = require('../src/02.js');

const x = 3;
const y = 5;
test(`Penjumlahan x dan y, x = ${x}, y = ${y}, result = ${x+y}`, () => {
  expect(sum(3,5)).toBe((3+5));
});