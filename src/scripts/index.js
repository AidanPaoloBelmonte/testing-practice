function capitalize(str) {
  if (typeof str == "string" || str instanceof String)
    return str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

function reverse(str) {
  if (typeof str == "string" || str instanceof String)
    return str.split("").reverse().join("");
  return str;
}

const calculator = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  divide: (x, y) => {
    return x / y;
  },
  multiply: (x, y) => {
    return x * y;
  },
};

const lowerCaseACode = 97;
const lowerCaseZCode = 122;
const upperCaseACode = 65;
const upperCaseZCode = 90;

function caesarCipher(str, shift) {
  const contents = str.split("");
  let newString = "";

  let absoluteShift = shift;

  contents.forEach((x) => {
    originalCode = x.charCodeAt(0);
    newCode = originalCode;

    if (
      !(newCode <= lowerCaseZCode && newCode >= lowerCaseACode) &&
      !(newCode <= upperCaseZCode && newCode >= upperCaseACode)
    ) {
      newString += x;
      return;
    } else {
      if (shift > 26) absoluteShift = shift - Math.floor(shift / 26) * 26 - 1;

      newCode += absoluteShift;
    }

    if (
      (originalCode <= upperCaseZCode && newCode > upperCaseZCode) ||
      (originalCode <= lowerCaseZCode && newCode > lowerCaseZCode)
    )
      newCode -= 26;

    newString += String.fromCharCode(newCode);
  });

  return newString;
}

function analyzeArray(arr) {
  if (!Array.isArray(arr)) return null;

  smallest = arr[0];
  highest = arr[0];

  arr.forEach((x) => {
    smallest = Math.min(smallest, x);
    highest = Math.max(highest, x);
  });

  return {
    average: arr.reduce((total, x) => total + x, 0) / arr.length,
    min: smallest,
    max: highest,
    length: arr.length,
  };
}

module.exports = {
  capitalize: capitalize,
  reverse: reverse,
  calculator: calculator,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray,
};
