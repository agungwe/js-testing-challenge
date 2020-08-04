const leapYear = require('../src/04.js');

const year = 1800;
test(`Fungsi leap year, year = ${year}`, () => {
  expect(leapYear(year)).toBeFalsy();
});

const year1 = 2000;
test(`Fungsi leap year, year = ${year1}`, () => {
  expect(leapYear(year1)).toBeTruthy();
});