/*
Closures - a function that returns another function
- The outer function must be assigned to a variable, so the outer function is called, the variable then becomes 'activated' for the inner function.
- Then we must call the variable with the second set of data, to call the inner function.
*/
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable);
        console.log(innerVariable);
    }
}
const functionVariable = outerFunction('Foo');
functionVariable('Bar');
/*
Program to use a recursive function to take 10 inputs from the user, then have a separate function to call
for each operation on the numbers; sum, min, high, mean. I use functional programming to assign the returned value to variables.
*/

let usersTenNumbers = [];
let count = 10;

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

function calculateTotal(tenNumbers) {
   let numberSum = tenNumbers.reduce((a, b) => a + b, 0);
   console.log(numberSum)
   return numberSum;
}

function maxNumber(tenNumbers) {
    let max = tenNumbers.indexOf(Math.max(...tenNumbers));
    console.log(max);
}

function minNumber(tenNumbers) {
    var min = tenNumbers.indexOf(Math.min(...tenNumbers));
    console.log(min);
}

function averageRound(sum, count) {
    let average = Math.round(sum / count);
    console.log(average)
}

function medianNumber(tenNumbers) {
    let mid = Math.floor(tenNumbers.length / 2);
    let nums = [...tenNumbers].sort((a, b) => a - b);
    let median = tenNumbers.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    console.log(median);
}

userInput();

/*
Various manipulations of a string, split into functions. Break string into an array, reverse, join it back up.
iterate through with a loop and change characters.
*/
function userWordInput() {
    let sentence = 'hellohellohellohellohellohello';
    characterReplace(sentence);
    reverse(sentence);
    upperCase(sentence);
    ascii(sentence);
}

function characterReplace(sentence) {
    let replacedString = sentence.split("");
    for (let i = 0; i < replacedString.length; i+=2) {
       replacedString[i] = '!';
    }
    replacedString = replacedString.join("");
    console.log(replacedString);
}

function reverse(sentence) {
    let reversedString = sentence.split("");
    reversedString = reversedString.reverse();
    reversedString = reversedString.join("");
    console.log(reversedString);
}

function upperCase(sentence) {
    let uppercaseString = sentence.split("");
    for (let i = 0; i < uppercaseString.length; i+=6) {
        uppercaseString[i] = uppercaseString[i].toUpperCase();
    }
    uppercaseString = uppercaseString.join("");
    console.log(uppercaseString)
}

function ascii(sentence) {
    let asciiConvert = sentence.split("");
    for (let i = 0; i < asciiConvert.length; i++) {
        asciiConvert[i] = asciiConvert[i].charCodeAt();
    }
    console.log(asciiConvert);
}

userWordInput();

/*
PSEUDO - 
Create a userInput function to receive the users inputs.
Prompt for first number, store in a variable
Prompt for second number, store in a variable
Prompt for calculation type, provide the user with the four options and save the option in variable
Create a switch statement checking for the different options, invoking the various functions.
Parse the first and second number to either of he four functions
Compute the result and console it.
*/

/*
Program that takes numbers inputs, and switces between computational functions to produce an output for the user
after making a calculation.
*/

function numberInput() {
    let firstNumber = Number(prompt('To start using the calculator, enter the first number, you will then be asked for the second number to be computed, and the type of calculation - division, multiplication etc'))
    let secondNumber = Number(prompt('Enter your second number'));
    let calcType = prompt('Now enter either - add, subtract, multiply, divide');

    switch (calcType) {
        case 'add':
            add(firstNumber,secondNumber)
            break;
        case 'subtract':
            subtract(firstNumber,secondNumber)
            break;
        case 'multiply':
            multiply(firstNumber,secondNumber);
            break;
        case 'divide':
            divide(firstNumber,secondNumber);
            break;
    }

}

function add(firstNumber,secondNumber) {
    let calc = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber} = ${calc}`);
}

function subtract(firstNumber,secondNumber) {
    let calc = firstNumber - secondNumber;
    console.log(`${firstNumber} - ${secondNumber} = ${calc}`);
}

function multiply(firstNumber,secondNumber) {
    let calc = firstNumber * secondNumber;
    console.log(`${firstNumber} * ${secondNumber} = ${calc}`);
}

function divide(firstNumber,secondNumber) {
    let calc = firstNumber / secondNumber;
    console.log(`${firstNumber} / ${secondNumber} = ${calc}`);
}

numberInput();