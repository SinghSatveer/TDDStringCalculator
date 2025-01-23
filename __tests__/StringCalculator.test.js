import StringCalculator from '../src/StringCalculator';

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator(); // Create a new instance for each test case
  });

  test('should return 0 for empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(calculator.add("1")).toBe(1);
  });

  test('should return sum for two numbers separated by a comma', () => {
    expect(calculator.add("1,5")).toBe(6);
  });

  test('should return sum for numbers separated by new lines', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('should handle custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test('should throw error for negative numbers', () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow('Negative numbers not allowed: -2, -4');
  });
});
