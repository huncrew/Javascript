/*
Program to use a recursive function to take 10 inputs from the user, then have a separate function to call
for each operation on the numbers; sum, min, high, mean. I use functional programming to assign the returned value to variables.
*/
let usersTenNumbers = [];
let count = 10;
// userInput function takes the 10 numbers, then parses the array of numbers to the four separate functions
function userInput() {
    if (usersTenNumbers.length < 10) {
    let inputNumber = Number(prompt('Please enter ten numbers one at a time'));
    usersTenNumbers.push(inputNumber);
    userInput()
    }
    else {
    console.log('These are your ten numbers:', usersTenNumbers);
    let sum = calculateTotal(usersTenNumbers);
    maxNumber(usersTenNumbers);
    minNumber(usersTenNumbers);
    averageRound(sum, count);
    medianNumber(usersTenNumbers);
    }
}
// adds the two numbers
function calculateTotal(tenNumbers) {
   let numberSum = tenNumbers.reduce((a, b) => a + b, 0);
   console.log(numberSum)
   return numberSum;
}
// finds highest
function maxNumber(tenNumbers) {
    let max = tenNumbers.indexOf(Math.max(...tenNumbers));
    console.log(max);
}
// finds lowest
function minNumber(tenNumbers) {
    var min = tenNumbers.indexOf(Math.min(...tenNumbers));
    console.log(min);
}
// finds average
function averageRound(sum, count) {
    let average = Math.round(sum / count);
    console.log(average)
}
// finds median
function medianNumber(tenNumbers) {
    let mid = Math.floor(tenNumbers.length / 2);
    let nums = [...tenNumbers].sort((a, b) => a - b);
    let median = tenNumbers.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    console.log(median);
}

userInput();
