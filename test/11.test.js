const User = require('../src/11.js');

const search = "johndoe";
const expected = { id: 3, username: 'johndoe', name: 'John Doe' }
test(`Fungsi Search Username, search = ${search}, res = ${expected}`, () => {
  expect(User.findByUsername(search)).toMatchObject(expected);
});