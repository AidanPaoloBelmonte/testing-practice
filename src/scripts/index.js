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

module.exports = {
  capitalize: capitalize,
  reverse: reverse,
  calculator: calculator,
};
