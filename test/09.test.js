const symmetrical = require('../src/09.js');

const value = 'malam';
test(`Fungsi symmetrical, value = ${value}`, () => {
  expect(symmetrical(value)).toBeTruthy();
});

const value1 = 'taat';
test(`Fungsi symmetrical, value = ${value1}`, () => {
  expect(symmetrical(value1)).toBeTruthy();
});

const value2 = 'tidur';
test(`Fungsi symmetrical, value = ${value2}`, () => {
  expect(symmetrical(value2)).toBeFalsy();
});

const value3 = 1234;
test(`Fungsi symmetrical, value = ${value3}`, () => {
  expect(symmetrical(value3)).toBeFalsy();
});

const value4 = 108801;
test(`Fungsi symmetrical, value = ${value4}`, () => {
  expect(symmetrical(value4)).toBeTruthy();
});

const value5 = 8001008;
test(`Fungsi symmetrical, value = ${value5}`, () => {
  expect(symmetrical(value5)).toBeTruthy();
});

