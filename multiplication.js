//Sean Stack
//Student ID: 2511132
//COP2801 - Assignment 3
//Professor Tillman
//Date: 10/27/2024

// Get the readline module for user input
const readline = require('readline');

// Set up input/output
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for a number
userInput.question('Enter a number: ', function(answer) {
    // Convert input to a number
    let num = Number(answer);
    
    // Check if it's a valid number
    if (num) {
        // Print the table
        console.log(`\nMultiplication table for ${num}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} × ${i} = ${num * i}`);
        }
    } else {
        console.log("That's not a valid number!");
    }
    
    userInput.close();
});
