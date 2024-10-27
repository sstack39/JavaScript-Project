//Sean Stack
//Student ID: 2511132
//COP2801 - Assignment 2
//Professor Tillman
//Date: 10/19/2024

const readlineSync = require('readline-sync');

// Problem 3: FizzBuzz
console.log("Problem 3: FizzBuzz");
console.log("Output: ");
// Loop through numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    // Check if the number is divisible by 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
    // Check if the number is divisible by 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    // If not divisible by 3 or 5, print the number itself
    } else {
        console.log(i);
    }
}

// Add a blank line for readability
console.log("\n");