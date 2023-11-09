// Question 6: Factorial Calculation

// Description: Write a function that calculates the factorial of a given positive integer.

// Input: 6

// Output: The factorial of 6 is 720.

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Example usage:
  const inputNumber = 6;
  const factorialResult = calculateFactorial(inputNumber);
  
  console.log(`The factorial of ${inputNumber} is ${factorialResult}.`);
  // Output: The factorial of 6 is 720.
  