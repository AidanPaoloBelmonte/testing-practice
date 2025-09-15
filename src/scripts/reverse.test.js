const base = require("./index");

test("Basic Reverse 1", () => {
  expect(base.reverse("test")).toBe("tset");
});

test("Basic Reverse 2", () => {
  expect(base.reverse("example #5")).toBe("5# elpmaxe");
});

test("Type Mismatch Rejection 1", () => {
  expect(base.reverse(90)).toBe(90);
});

test("Type Mismatch Rejection 2", () => {
  expect(base.reverse({ key: "object", value: 8.1 })).toStrictEqual({
    key: "object",
    value: 8.1,
  });
});
