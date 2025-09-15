const base = require("./index");

test("Basic Capitalization 1", () => {
  expect(base.capitalize("test")).toBe("Test");
});

test("Basic Capitalization 2", () => {
  expect(base.capitalize("example #5")).toBe("Example #5");
});

test("Non-letter Starting Input", () => {
  expect(base.capitalize("12 days")).toBe("12 days");
});

test("Type Mismatch Rejection 1", () => {
  expect(base.capitalize(90)).toBe(90);
});

test("Type Mismatch Rejection 2", () => {
  expect(base.capitalize({ key: "object", value: 8.1 })).toStrictEqual({
    key: "object",
    value: 8.1,
  });
});
