const roman = require('../src/15.js');

const roman0 = 'I';
const expected0 = 1;
test(`Konversi Bilangan Romawi (${roman0}) `, () => {
  expect(roman(roman0)).toBe(expected0);
});

const roman1 = 'II';
const expected1 = 2;
test(`Konversi Bilangan Romawi (${roman1}) `, () => {
  expect(roman(roman1)).toBe(expected1);
});

const roman2 = 'III';
const expected2 = 3;
test(`Konversi Bilangan Romawi (${roman2}) `, () => {
  expect(roman(roman2)).toBe(expected2);
});

const roman3 = 'V';
const expected3 = 5;
test(`Konversi Bilangan Romawi (${roman3}) `, () => {
  expect(roman(roman3)).toBe(expected3);
});

const roman4 = 'VI';
const expected4 = 6;
test(`Konversi Bilangan Romawi (${roman4}) `, () => {
  expect(roman(roman4)).toBe(expected4);
});

const roman5 = 'X';
const expected5 = 10;
test(`Konversi Bilangan Romawi (${roman5}) `, () => {
  expect(roman(roman5)).toBe(expected5);
});

const roman6 = 'L';
const expected6 = 50;
test(`Konversi Bilangan Romawi (${roman6}) `, () => {
  expect(roman(roman6)).toBe(expected6);
});

const roman7 = 'C';
const expected7 = 100;
test(`Konversi Bilangan Romawi (${roman7}) `, () => {
  expect(roman(roman7)).toBe(expected7);
});

const roman8 = 'D';
const expected8 = 500;
test(`Konversi Bilangan Romawi (${roman8}) `, () => {
  expect(roman(roman8)).toBe(expected8);
});

const roman9 = 'M';
const expected9 = 1000;
test(`Konversi Bilangan Romawi (${roman9}) `, () => {
  expect(roman(roman9)).toBe(expected9);
});

const roman10 = 'MMXVIII';
const expected10 = 2018;
test(`Konversi Bilangan Romawi (${roman10}) `, () => {
  expect(roman(roman10)).toBe(expected10);
});