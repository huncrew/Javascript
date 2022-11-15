/*
userWordInput function takes users input, and calls four string manipulation functions
*/
function userWordInput() {
    let sentence = prompt('Please enter a word or sentence to be manipulated');
    characterReplace(sentence);
    reverse(sentence);
    upperCase(sentence);
    ascii(sentence);
}
// Takes the sentence and replaces every second character with '!'
function characterReplace(sentence) {
    let replacedString = sentence.split("");
    for (let i = 0; i < replacedString.length; i+=2) {
       replacedString[i] = '!';
    }
    replacedString = replacedString.join("");
    console.log(replacedString);
}
// reverses the string
function reverse(sentence) {
    let reversedString = sentence.split("");
    reversedString = reversedString.reverse();
    reversedString = reversedString.join("");
    console.log(reversedString);
}
// changes every 6th character to uppercase
function upperCase(sentence) {
    let uppercaseString = sentence.split("");
    for (let i = 0; i < uppercaseString.length; i+=6) {
        uppercaseString[i] = uppercaseString[i].toUpperCase();
    }
    uppercaseString = uppercaseString.join("");
    console.log(uppercaseString)
}
// changes to ascii s
function ascii(sentence) {
    let asciiConvert = sentence.split("");
    for (let i = 0; i < asciiConvert.length; i++) {
        asciiConvert[i] = asciiConvert[i].charCodeAt();
    }
    console.log(asciiConvert);
}

userWordInput();