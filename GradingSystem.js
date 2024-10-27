

const readlineSync = require('readline-sync');
// Problem 2: Grading System

// Prompt the user for a score and convert it to an integer
let score = parseInt(readlineSync.question("Enter a score (0-100): "));
// Declare a variable to store the grade
let grade;

// Use a series of if-else statements to determine the grade
if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 60 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score < 60) {
    grade = 'F';
} else {
    // If the score is outside the valid range, set grade to 'Invalid score'
    grade = 'Invalid score';
}

// Print the determined grade
console.log("Output: " + grade);

// Add a blank line for readability
console.log("\n");
