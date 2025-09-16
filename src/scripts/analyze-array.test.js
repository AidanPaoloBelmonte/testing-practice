const base = require("./index");

test("Basic Analysis", () => {
  const sample = [1, 2, 3, 4, 5];
  const expected = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };

  expect(base.analyzeArray(sample)).toMatchObject(expected);
});

test("Unordered Analysis", () => {
  const sample = [10, 8, 3, 21, 15];
  const expected = {
    average: 11.4,
    min: 3,
    max: 21,
    length: 5,
  };

  expect(base.analyzeArray(sample)).toMatchObject(expected);
});
