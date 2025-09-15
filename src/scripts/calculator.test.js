const base = require("./index");

test("Integer Addition", () => {
  expect(base.calculator.add(10, 20)).toBe(30);
});

test("Float Addition", () => {
  expect(base.calculator.add(8.7, 9.8)).toBeCloseTo(18.5);
});
