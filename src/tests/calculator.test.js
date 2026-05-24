// Unit tests for calculator functions
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// Test suite for calculator
describe('Calculator Tests', () => {
  test('addition of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtraction of two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplication of two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('division of two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('modulo remainder of two numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('power exponentiation of base and exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('square root of positive number', () => {
    expect(squareRoot(9)).toBe(3);
  });
});
