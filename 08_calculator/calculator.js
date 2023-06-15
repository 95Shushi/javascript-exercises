const add = function(...args) {
	return args.reduce((sum, item) => sum + item, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(...args) {
  return args.reduce((total, item) => total * item)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  factorialResult = 1
	if (a === 0) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      factorialResult *= i;
    }
    return factorialResult;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
