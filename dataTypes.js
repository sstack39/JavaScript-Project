

//write script respresentative of the different primitive data types in js
//Part 1
// number variable that holds your age
const age = 25;

// string variable that holds your full name
const fullName = "John Doe";

// boolean variable that indicates if you are currently enrolled in a course
const isEnrolled = true;

// undefined variable named futureGoal
let futureGoal;

// null variable named completedCourse that represents a course you haven't completed
const completedCourse = null;

// Use console.log() to print each variable and its data type using the typeof operator: console.log('Age: ${age}, Type: ${typeof age}');
console.log('Age: ${age}, Type: ${typeof age}');

console.log('Full Name: ${fullName}, Type: ${typeof fullName}');

console.log('Is Enrolled: ${isEnrolled}, Type: ${typeof isEnrolled}');

console.log('Future Goal: ${futureGoal}, Type: ${typeof futureGoal}');

console.log('Completed Course: ${completedCourse}, Type: ${typeof completedCourse}');
console.log("");

//Part 2
//Print the results of each type conversion along with its new type
//Convert the number variable (age) to a string and print the result
const ageString = String(age);
console.log(`Age as String: ${ageString}, Type: ${typeof ageString}`);
//Convert the string variable (fullName) to a Boolean
const fullNameBoolean = Boolean(fullName);
console.log(`Full Name as Boolean: ${fullNameBoolean}, Type: ${typeof fullNameBoolean}`);
//Convert the Boolean variable (isEnrolled) to a Number
const isEnrolledNumber = Number(isEnrolled);
console.log(`Is Enrolled as Number: ${isEnrolledNumber}, Type: ${typeof isEnrolledNumber}`);
//Convert the Null variable to a Number and explain the result
const completedCourseNumber = Number(completedCourse); //null is converted to 0:
//this is due to the fact that null is considering a false value in JS and when converted to a number value as false, typically it is converted to 0.
console.log(`Completed Course as Number: ${completedCourseNumber}, Type: ${typeof completedCourseNumber}`);
console.log("");

//Part 3
//Create two new Number variables, x and y, and assign them values of your choice
const x = 10;
const y = 3;

//perform the addition operation (x + y) and print the result
const addition = x + y;
console.log(`Addition: ${addition}`);

//perform the subtraction operation (x - y) and print the result
const subtraction = x - y;
console.log(`Subtraction: ${subtraction}`);

//perform the multiplication operation (x * y) and print the result
const multiplication = x * y;
console.log(`Multiplication: ${multiplication}`);

//perform the division operation (x / y) and print the result
const division = x / y;
console.log(`Division: ${division}`);

//perform the modulus operation (x % y) and print the result
const modulus = x % y;
console.log(`Modulus: ${modulus}`);
console.log("");

//Part 3.2 Perform Logical Operations
//Using Boolean variable isEnrolled and a new Boolean variable hasCompletedAssignment, perform the following logical operations:
//AND (&&), OR (||), and NOT (!)
const hasCompletedAssignment = false;

//Print the results of each logical operation
//AND (&&)
console.log(`isEnrolled && hasCompletedAssignment = ${isEnrolled && hasCompletedAssignment}`);

//OR (||)
console.log(`isEnrolled || hasCompletedAssignment = ${isEnrolled || hasCompletedAssignment}`);

//NOT (!)
console.log(`!isEnrolled = ${!isEnrolled}`);
console.log(`!hasCompletedAssignment = ${!hasCompletedAssignment}`);
console.log("");

//Part 4: Reflection

//See text file "reflection.txt" for details






