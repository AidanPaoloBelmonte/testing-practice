const base = require("./index");

test("Integer Addition", () => {
  expect(base.calculator.add(10, 20)).toBe(30);
});

test("Float Addition", () => {
  expect(base.calculator.add(8.7, 9.8)).toBeCloseTo(18.5);
});

test("Integer Subtraction", () => {
  expect(base.calculator.subtract(100, 75)).toBe(25);
});

test("Float Subtraction", () => {
  expect(base.calculator.subtract(50.8, 25.55)).toBeCloseTo(25.25);
});

test("Integer Multiplication", () => {
  expect(base.calculator.multiply(8, 8)).toBe(64);
});

test("Float Multiplication", () => {
  expect(base.calculator.multiply(1.23, 4.5)).toBeCloseTo(5.535);
});

test("Integer Division", () => {
  expect(base.calculator.divide(273, 13)).toBe(21);
});

test("Float Division", () => {
  expect(base.calculator.divide(1000, 5.5)).toBeCloseTo(181.818181);
});

test("Zero Division", () => {
  expect(base.calculator.divide(98765, 0)).toBe(Infinity);
});
