// Simple Node.js CLI Calculator App supporting basic math operations:
// addition, subtraction, multiplication, division, modulo, power, squareRoot

function add(a, b) {
  // This is the addition function
  return a + b;
}

function subtract(a, b) {
  // This is the subtraction function
  return a - b;
}

function multiply(a, b) {
  // This is the multiplication function
  return a * b;
}

function divide(a, b) {
  // This is the division function
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function modulo(a, b) {
  // This is the modulo function
  return a % b;
}

function power(base, exponent) {
  // This is the power function
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  // This is the square root function
  if (n < 0) {
    throw new Error("Square root of negative number");
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};
