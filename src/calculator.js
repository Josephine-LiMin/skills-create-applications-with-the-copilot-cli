// Simple Node.js CLI Calculator App supporting basic math operations:
// addition, subtraction, multiplication, division

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

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
