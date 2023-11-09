// Question 2: Find the average of numbers in an array

// Description - Write a JavaScript function that takes an array of numbers as input and calculates the average value of the numbers.

// Sample Input :[5, 10, 15, 20]

// Output :12.5 (average of 5, 10, 15, and 20)

function calculateAverage(arr) {
    if (arr.length === 0) {
      // Handle the case where the array is empty to avoid division by zero
      return 0;
    }
  
    const sum = arr.reduce((total, current) => total + current, 0);
    const average = sum / arr.length;
  
    return average;
  }
  
  // Sample input
  const inputArr = [5, 10, 15, 20];
  
  // Call the function and store the result in a variable
  const averageValue = calculateAverage(inputArr);
  
  // Display the result
  console.log(averageValue,"(average of 5, 10, 15, and 20)");