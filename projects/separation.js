/*
Program to parse strings from an array into a function that will break the words
into separated new lines. .map iterates through the array of letters, changing empty string to new line, turns back into string, returns and prints.
*/
separationString = (myString) => {
    let replacedString = myString.split("");
    let newItems = replacedString.map(replacedString => replacedString === " " ? "\n" : replacedString);
    newItems = newItems.join("")
    return newItems;
}

// DO NOT EDIT BELOW THIS LINE
let testStrings1 = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9"
];

console.log("------------------------------------------------")

testStrings1.forEach((sentence) => {
    let sep = separationString(sentence);
    console.log(sep);
    console.log("------------------------------------------------")

});