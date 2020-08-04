const Item = require('../src/12.js');

const search = 3;
test(`Fungsi Search Item, search ID = ${search}`, () => {
  expect(Item.findById(search).isOnSale()).toBeFalsy();
});

const search1 = 5;
test(`Fungsi Search Item, search ID = ${search1}`, () => {
  expect(Item.findById(search1).isOnSale()).toBeTruthy();
});