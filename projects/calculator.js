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