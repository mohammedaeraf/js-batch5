// Function to print all odd numbers from 1 up to the given limit
function printOdds(limit) {
  // Loop from 1 to the specified limit (inclusive)
  for (let i = 1; i <= limit; i++) {
    // Check if the current number is odd using modulo operator
    // i % 2 gives the remainder when i is divided by 2
    // If the remainder is not 0, the number is odd
    if (i % 2 !== 0) {
      // Print the odd number to the console
      console.log(i);
    }
  }
}

// Call the function with limit 20
printOdds(20);
console.log(""); // Print a blank line for separation

// Function to print squares of numbers from 1 to n
function printSquares(n) {
  // Loop from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // Print the number and its square in the format "i → i*i"
    // i * i calculates the square of i
    console.log(i + " → " + i * i);
  }
}

// Call the function with n = 5
printSquares(5);
console.log(""); // Print a blank line for separation

// Function to count down from a given number to 1
function reverseCount(start) {
  // Loop from start down to 1
  // The loop decrements i by 1 in each iteration
  for (let i = start; i >= 1; i--) {
    // Print the current value of i
    console.log(i);
  }
}

// Call the function with start = 10
reverseCount(10);
console.log(""); // Print a blank line for separation

// Function to calculate and print the factorial of a number
function printFactorial(n) {
  // Initialize a variable to hold the factorial result
  // Start with 1 because factorial of 0 is 1 and it's the multiplicative identity
  let fact = 1;

  // Loop from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // Multiply the current value of fact by i
    // This accumulates the product: 1 * 2 * 3 * ... * n
    fact *= i;
  }

  // Print the final factorial result
  console.log("Factorial of " + n + " is " + fact);
}

// Call the function with n = 5
printFactorial(5);
console.log(""); // Print a blank line for separation
