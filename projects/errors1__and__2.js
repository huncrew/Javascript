/*
Debugged various errors.
*/
console.log("Welcome to the error program"); //syntax error
console.log("\n"); // syntax error

let ageStr = "24"; // syntax error & logic error
let age = Number(ageStr) // runtime error (Integer)
console.log("I'm "+age+"years old."); //runtime error
let three = 3.5; // logic error (should be 3.5, not 3)

let answerYears = age + three; // runtime error


console.log("The total number of years: " + answerYears); // syntax error & logical error
let answerMonths = answerYears*12 // runtime error (answer doesnt exist)
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old");

/*
Debugged various errors, program 2.
*/
let animal = 'Lion' //runtime error, needs to be a string /
let animalType = "cub";
let numberOfTeeth = 16;
let numberOfLegs = '4'; // logic error

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth` // logic error

if (numberOfLegs == 4) { //logic error
console.log(fullSpec); // Syntax error
}