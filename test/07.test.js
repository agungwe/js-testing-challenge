const repeatLetter = require('../src/07.js');

const text = "Hello World! ";
const times = 2;
const expected = "HHeelllloo WWoorrlldd!!";
test(`Fungsi Repeat Letter, text = ${text}, times = ${times}, res = ${expected}`, () => {
  expect(repeatLetter(text, times)).toBe(expected);
});