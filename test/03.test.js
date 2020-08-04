const mebiToKibi = require('../src/03.js');

const mebi = 6.5;
const resKibi = 6656;
test(`Konversi Mebibyte to Kibibyte. Nilai Mebi =${mebi}, Kibibyte = ${resKibi}`, () => {
  expect(mebiToKibi(mebi)).toBe(resKibi);
});