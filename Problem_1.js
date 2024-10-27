//Sean Stack
//Student ID: 2511132
//COP2801 - Assignment 2
//Professor Tillman
//Date: 10/19/2024

// Import the readline-sync library for user input
const readlineSync = require('readline-sync');

// Problem 1: Even or Odd
console.log("Problem 1: Even or Odd");

// Prompt the user for a number and convert it to an integer
let number = parseInt(readlineSync.question("Input: "));
// Check if the number is divisible by 2 (i.e., even)
if (number % 2 === 0) {
    // If it is, print that it's even
    console.log("The number is even");
} else {
    // If it's not, print that it's odd
    console.log("The number is odd");
}
// Add a blank line for readability
console.log("\n");