//Sean Stack
//Student ID: 2511132
//COP2801 - Assignment 3
//Professor Tillman
//Date: 10/27/2024

// Define array of test scores (could be modified to accept user input)
const testScores = [75, 82, 60, 45, 95];

// Calculate average score using reduce method
// reduce iterates through array, adding each score to accumulator
const average = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;

// Find highest score using spread operator with Math.max
// spread operator (...) expands array into individual arguments
const highest = Math.max(...testScores);

// Find lowest score using spread operator with Math.min
const lowest = Math.min(...testScores);

// Count number of passing students (score >= 60)
// filter creates new array of passing scores, length gives count
const passed = testScores.filter(score => score >= 60).length;

// Count number of failing students (score < 60)
const failed = testScores.filter(score => score < 60).length;

// Create array of failing scores
const failedStudents = testScores.filter(score => score < 60);

// Create array of high-scoring students (90 or above)
const highScorers = testScores.filter(score => score >= 90);

// Display all results
// Join array elements with commas for clean output
console.log(`Test Scores: ${testScores.join(", ")}`);
// Display average with one decimal place
console.log(`Average Score: ${average.toFixed(1)}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Number of Students Passed: ${passed}`);
console.log(`Number of Students Failed: ${failed}`);
console.log(`Students Who Failed: ${failedStudents.join(", ")}`);
console.log(`Students Who Scored 90 or Above: ${highScorers.join(", ")}`);
