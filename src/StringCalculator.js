class StringCalculator {
    constructor() {
      this.result = 0;
    }
  
    add(numbers) {
      // Handle empty string
      if (numbers === "") return 0;
  
      // Handle custom delimiters (e.g., "//;\n1;2" -> delimiter is ';')
      if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        const delimiter = numbers.slice(2, delimiterLineEnd);
        numbers = numbers.slice(delimiterLineEnd + 1);
        numbers = numbers.split(new RegExp(`[${delimiter}\n]`));
      } else {
        // Default case: numbers separated by comma or new line
        numbers = numbers.split(/[\n,]+/);
      }
  
      // Convert string numbers to integers
      numbers = numbers.map(Number);
  
      // Handle negative numbers
      const negativeNumbers = numbers.filter(num => num < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      }
  
      // Calculate the sum of numbers
      this.result = numbers.reduce((sum, num) => sum + num, 0);
      return this.result;
    }
  }
  
  export default StringCalculator;
  