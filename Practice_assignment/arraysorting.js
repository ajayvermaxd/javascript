// Question 3. Array Sorting

// Description: You have an array of numbers, and you need to sort it in ascending order. Write a function that takes the array as input and returns the sorted array.

// Input: An array of numbers: [7, 2, 9, 1, 5]

// Output: The sorted array: [1, 2, 5, 7, 9]

function sortArrayAscending(arr) {
    
    // The compare function subtracts b from a to determine the correct order
    return arr.sort((a, b) => a - b);
  }
  
  // Sample input
  const inputArray1 = [7, 2, 9, 1, 5];
  
  // Call the function and store the result in a variable
  const sortedArray = sortArrayAscending(inputArray1);
  
  // Display the sorted array
  console.log(sortedArray);
