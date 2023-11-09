// Question 9: Array Reversal

// Description: Write a function that reverses the elements of an array, without using the built-in reverse() method.

// Input: An array of strings: ["apple", "banana", "cherry"]

// Output: The reversed array: ["cherry", "banana", "apple"]

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  // Example usage:
  const inputArray = ["apple", "banana", "cherry"];
  const reversedArray = reverseArray(inputArray);
  
  console.log("The reversed array:", reversedArray);
  // Output: The reversed array: ["cherry", "banana", "apple"]
  