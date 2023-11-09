// Question 4. Prime Numbers Count

// Description: Write a program that takes a range of numbers as input and counts the number of prime numbers within that range.

// Input: Range of numbers: 1 to 20

// Output: The number of prime numbers: 8

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function countPrimesInRange(start, end) {
    let count = 0;
  
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Sample input
  const startRange = 1;
  const endRange = 20;
  
  // Call the function to count prime numbers within the range
  const primeCount = countPrimesInRange(startRange, endRange);
  
  // Display the number of prime numbers
  console.log(`The number of prime numbers in the range ${startRange} to ${endRange}: ${primeCount}`);