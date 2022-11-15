// Checking input text/number/upper/lower
let userInput = prompt('Enter a number or letter');

if (userInput.toLowerCase() == userInput.toUpperCase()) {
    console.log('is not a letter or number')
}
else if (!isNaN(userInput)) {
    console.log(`${userInput} is a number`);
}
else if (userInput === userInput.toLowerCase()){
    console.log(`${userInput} is a lowercase`)
}
else if (userInput === userInput.toUpperCase()){
    console.log(`${userInput} is an uppercase`)
}
else {
    console.log(`${userInput} is not a letter or a number`);
}

// Using Modulo
let num = prompt('enter a number');

if(num % 7 == 0 && num % 11 == 0) {
    console.log(num,'Divisible by 7 AND 11');
}
else if(num % 7 == 0) {
    console.log(num,'Divisible by 7');
}
else if(num % 11 == 0) {
    console.log(num, 'Divisible by 11');
}
else {
    console.log(num, 'is not divisible by 7 or 11');
}



function billCalculator() {
    let userInput = 15000;
    let step2 = 6 * 15.73;
    let step3 = step2 + 4499 / 1000 * 22.38;
    let step4 = step3 + 24499 / 1000 * 31.77;

    if(userInput <= 6000) {
        console.log(`Your bill is`,userInput / 1000 * 15.73);
    }
    else if(userInput > 6000 && userInput <= 10500) {
        let remainder = userInput - 6000;
        let remainderKiloLitre = remainder / 1000;
        let addition = remainderKiloLitre * 22.38;
        console.log(`Your bill is: ${addition + step2}`);
    }
    else if (userInput > 10500 && userInput <= 35000) {
        let remainder = userInput - 10500;
        let remainderKiloLitre = remainder / 1000;
        let addition = remainderKiloLitre * 31.77;
        console.log(`Your bill is: ${addition + step3}`);
    }
    else if(userInput > 35000) {
        let remainder = userInput - 35000;
        let remainderKiloLitre = remainder / 1000;
        let addition = remainderKiloLitre * 69.76;
        console.log(`Your bill is: ${addition + step4}`);
    }
}

billCalculator();