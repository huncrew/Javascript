/*
RECREATING FUNCTIONS TO BE ARROW FUNCTIONS, FIRST IS CALCULATOR TASK.
*/
const numberInput = () => {
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

const add = (firstNumber,secondNumber) => {
    let calc = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber} = ${calc}`);
}

const subtract = (firstNumber,secondNumber) => {
    let calc = firstNumber - secondNumber;
    console.log(`${firstNumber} - ${secondNumber} = ${calc}`);
}

const multiply = (firstNumber,secondNumber) => {
    let calc = firstNumber * secondNumber;
    console.log(`${firstNumber} * ${secondNumber} = ${calc}`);
}

const divide = (firstNumber,secondNumber) => {
    let calc = firstNumber / secondNumber;
    console.log(`${firstNumber} / ${secondNumber} = ${calc}`);
}

numberInput();

/*
RECREATING FUNCTIONS TO BE ARROW FUNCTIONS, NUMBER MANIPULATION.
*/

/*
Program to use a recursive function to take 10 inputs from the user, then have a separate function to call
for each operation on the numbers; sum, min, high, mean. I use functional programming to assign the returned value to variables.
*/
let usersTenNumbers = [];
let count = 10;
// userInput function takes the 10 numbers, then parses the array of numbers to the four separate functions
const userInput = () => {
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
const calculateTotal = (tenNumbers) => {
   let numberSum = tenNumbers.reduce((a, b) => a + b, 0);
   console.log(numberSum)
   return numberSum;
}
// finds highest
const maxNumber = (tenNumbers) => {
    let max = tenNumbers.indexOf(Math.max(...tenNumbers));
    console.log(max);
}
// finds lowest
const minNumber = (tenNumbers) => {
    var min = tenNumbers.indexOf(Math.min(...tenNumbers));
    console.log(min);
}
// finds average
const averageRound = (sum, count) => {
    let average = Math.round(sum / count);
    console.log(average)
}
// finds median
const medianNumber = (tenNumbers) => {
    let mid = Math.floor(tenNumbers.length / 2);
    let nums = [...tenNumbers].sort((a, b) => a - b);
    let median = tenNumbers.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    console.log(median);
}

userInput();


/*
RECREATING FUNCTIONS TO BE ARROW FUNCTIONS, WORD MANIPULATION.
*/



/*
userWordInput function takes users input, and calls four string manipulation functions
*/
const userWordInput = () => {
    let sentence = prompt('Please enter a word or sentence to be manipulated');
    characterReplace(sentence);
    reverse(sentence);
    upperCase(sentence);
    ascii(sentence);
}
// Takes the sentence and replaces every second character with '!'
const characterReplace = (sentence) => {
    let replacedString = sentence.split("");
    for (let i = 0; i < replacedString.length; i+=2) {
       replacedString[i] = '!';
    }
    replacedString = replacedString.join("");
    console.log(replacedString);
}
// reverses the string
const reverse = (sentence) => {
    let reversedString = sentence.split("");
    reversedString = reversedString.reverse();
    reversedString = reversedString.join("");
    console.log(reversedString);
}
// changes every 6th character to uppercase
const upperCase = (sentence) => {
    let uppercaseString = sentence.split("");
    for (let i = 0; i < uppercaseString.length; i+=6) {
        uppercaseString[i] = uppercaseString[i].toUpperCase();
    }
    uppercaseString = uppercaseString.join("");
    console.log(uppercaseString)
}
// changes to ascii s
const ascii = (sentence) => {
    let asciiConvert = sentence.split("");
    for (let i = 0; i < asciiConvert.length; i++) {
        asciiConvert[i] = asciiConvert[i].charCodeAt();
    }
    console.log(asciiConvert);
}

userWordInput();