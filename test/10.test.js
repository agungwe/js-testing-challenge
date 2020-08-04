const censor = require('../src/10.js');

const text = "Saya ingin makan nasi goreng.";
const censoredWords = ['saya', 'nasi'];
const expected = "#### ingin makan #### goreng.";
test(`Fungsi Censor, text = ${text}, censoredWords = ${censoredWords}, res = ${expected}`, () => {
  expect(censor(text, censoredWords)).toBe(expected);
});

const text1 = "Pada hari Minggu saya tidur siang.";
const censoredWords1 = ['minggu', 'tidur'];
const censorSymbol1 = "*";
const expected1 = "Pada hari ****** saya ***** siang.";
test(`Fungsi Censor, text = ${text1}, censoredWords = ${censoredWords1}, censorSymbol = ${censorSymbol1}, res = ${expected1}`, () => {
  expect(censor(text1, censoredWords1, censorSymbol1)).toBe(expected1);
});