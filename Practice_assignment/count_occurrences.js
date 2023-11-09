// Question 1: Count occurrences of elements in an array

// Description: Write a JavaScript function that takes an array as input and counts the occurrences of each element in the array. Return an object with element counts.

// Sample Input   :[1, 2, 3, 2, 4, 1, 5]

// Output         :{ 1: 2, 2: 2, 3: 1, 4: 1, 5: 1 }
function countOccurrences(arr) {
    // Create an empty object to store element counts
    const counts = {};
  
    // Iterate through the array
    for (const element of arr) {
      // Check if the element is already a property in the counts object
      if (counts[element]) {
        // If it is, increment the count
        counts[element]++;
      } else {
        // If it's not, initialize the count to 1
        counts[element] = 1;
      }
    }
  
    return counts;
  }
  
  // Sample input
  const inputArray = [1, 2, 3, 2, 4, 1, 5];
  
  // Call the function and store the result in a variable
  const result = countOccurrences(inputArray);
  
  // Display the result
  console.log(result);