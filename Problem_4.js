//Sean Stack
//Student ID: 2511132
//COP2801 - Assignment 2
//Professor Tillman
//Date: 10/19/2024

const readlineSync = require('readline-sync');
// Problem 4: Password Checker
console.log("Problem 4: Password Checker");
// Define the correct password
const correctPassword = "letmein";
// Declare a variable to store the user's input
let userPassword;

// Start a do-while loop that will continue until the correct password is entered
do {
    // Prompt the user for a password
    userPassword = readlineSync.question("Enter the password: ");
    // If the entered password is incorrect, print an error message
    if (userPassword !== correctPassword) {
        console.log("Output: " + "Incorrect password, try again.");
    }
// Continue the loop while the entered password is incorrect
} while (userPassword !== correctPassword);

// If the loop exits (correct password entered), print access granted message
console.log("Output: " + "Access granted");