const repeatString = require('../src/06.js');

const text = "Makan! ";
test(`Fungsi Repeat String, text = ${text}, times = default, res = ${text.repeat(1)}`, () => {
  expect(repeatString(text)).toBe(text.repeat(1));
});

const text1 = "Makan! ";
const times1 = 3;
test(`Fungsi Repeat String, text = ${text}, times = ${times1}, res = ${text.repeat(times1)}`, () => {
  expect(repeatString(text1, times1)).toBe(text1.repeat(times1));
});
