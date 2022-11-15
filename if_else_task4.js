// Checking input text/number/upper/lower
let userInput = prompt('Enter a number or letter');

if (!isNaN(userInput)) {
    console.log(`${userInput} is a number`);
}
else if (userInput.toLowerCase() != userInput.toUpperCase()){
    console.log('is not a letter or number')
}
else if (userInput === userInput.toLowerCase() && isNaN(userInput)){
    console.log(`${userInput} is a lowercase`)
}
else if (userInput === userInput.toUpperCase() && isNaN(userInput)){
    console.log(`${userInput} is an uppercase`)
}
else {
    console.log(`${userInput} is not a letter or a number`);
}
