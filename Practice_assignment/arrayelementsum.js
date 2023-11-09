// Question 7: Array Element Sum

// Description: You are given an array of numbers. Write a program that calculates the sum of all the elements in the array.

// Input: An array of numbers: [4, 9, 2, 5, 1]

// Output: The sum of the elements is 21.

function calculateArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Example usage:
  const inputArray = [4, 9, 2, 5, 1];
  const arraySum = calculateArraySum(inputArray);
  
  console.log(`The sum of the elements is ${arraySum}.`);
  // Output: The sum of the elements is 21.
  