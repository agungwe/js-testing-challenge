const charLength = require('../src/01.js');

const text = "Lapar Mata Melihat Oppa dan Eunnie";
test(`Panjang Karakter dari Teks: ${text}`, () => {
  expect(charLength(text)).toBe(text.length);
});