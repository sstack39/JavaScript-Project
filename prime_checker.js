//Sean Stack
//Student ID: 2511132
//COP2801 - Assignment 3
//Professor Tillman
//Date: 10/27/2024

// Import readline module for terminal I/O operations
const readline = require('readline');

// Create interface for reading/writing to terminal
const userInput = readline.createInterface({
    input: process.stdin,    // Set input to keyboard
    output: process.stdout   // Set output to terminal
});

// Function to determine if a number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) return false;
    
    // Check divisibility up to square root of number for efficiency
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If number is divisible by any value, it's not prime
        if (num % i === 0) return false;
    }
    // If no divisors found, number is prime
    return true;
}

// Helper function to create a promise-based question
function askQuestion(query) {
    // Return a new promise that resolves when user answers
    return new Promise(resolve => userInput.question(query, resolve));
}

// Main async function to control program flow
async function main() {
    try {
        // Get start range from user
        const startInput = await askQuestion('Enter the start of the range: ');
        // Get end range from user
        const endInput = await askQuestion('Enter the end of the range: ');

        // Convert string inputs to integers
        const start = parseInt(startInput);
        const end = parseInt(endInput);

        // Validate the input values
        if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
            // Display error for invalid input
            console.log("Please enter valid positive numbers with start <= end!");
        } else {
            // Display header for results
            console.log(`\nPrime numbers between ${start} and ${end}:\n`);
            
            // Array to store prime numbers
            const primes = [];
            
            // Loop through range to find prime numbers
            for (let i = start; i <= end; i++) {
                // If current number is prime, add to array
                if (isPrime(i)) {
                    primes.push(i);
                }
            }
            
            // Display all prime numbers found, separated by commas
            console.log(primes.join(", "));
        }
    } catch (error) {
        // Handle any errors that occur
        console.error('An error occurred:', error);
    } finally {
        // Always close the readline interface
        userInput.close();
    }
}

// Start the program
main();
