const base = require("./index");

test("Single Letter Cipher", () => {
  expect(base.caesarCipher("b", 1)).toBe("c");
});

test("Basic Word Cipher", () => {
  expect(base.caesarCipher("example", 5)).toBe("jcfruqj");
});

test("Basic Phrase Cipher", () => {
  expect(base.caesarCipher("the test", 12)).toBe("ftq fqef");
});

test("Capitalization Handling", () => {
  expect(base.caesarCipher("aBcDEF gHIjK", 25)).toBe("zAbCDE fGHiJ");
});

test("Non-letter Handling", () => {
  expect(base.caesarCipher("There are 12,000 people.", 4)).toBe(
    "Xlivi evi 12,000 tistpi.",
  );
});

test("Shift Overflow Handling 1", () => {
  expect(base.caesarCipher("a", 27)).toBe("a");
});

test("Shift Overflow Handling 2", () => {
  expect(base.caesarCipher("a", 81)).toBe("c");
});
