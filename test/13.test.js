const stats = require('../src/13.js');

const dataset = [10, 2, 38, 23, 38, 23, 21];
const expected = {
  "mean": 22.142857142857,
  "median": 23,
  "range": 36,
  "mode": "38, 23, each appeared 2 times",
  "largest": 38,
  "smallest": 2,
  "sum": 155,
  "count": 7
};

test(`Fungsi Statistics, dataset = ${dataset}, res = ${expected}`, () => {
  // expect(stats(dataset)).toMatchObject(expected);
  const res = stats(dataset);

  expect(res.mean).toBeCloseTo(expected.mean, 6);
  expect(res.median).toBeCloseTo(expected.median, 6);
  expect(res.range).toBeCloseTo(expected.range, 6);
  expect(res.count).toBe(expected.count);
  expect(res.sum).toBe(expected.sum);
  expect(res.smallest).toBe(expected.smallest);
  expect(res.largest).toBe(expected.largest);
  expect(res.mode).toBe(expected.mode);
});