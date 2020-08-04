const isIsogram = require('../src/14.js');

const text = 'gelas';

test(`Fungsi Isogram, text = ${text}`, () => {
	expect(isIsogram(text)).toBeTruthy();
});

const text1 = 'makan';

test(`Fungsi Isogram, text = ${text1}`, () => {
	expect(isIsogram(text1)).toBeFalsy();
});
