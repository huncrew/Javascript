
/*
alternativeString function converts sting to alternate lower and uppcase
program also acts as a test, comparing the strings parsed to the function and then checking the 
output against the correct array.
Using string variable in alternativeString as strings are immutable.
*/
alternativeString = (myString) => {
    var output = "";
    for(var i = 0; i < myString.length; i++){
        if (i % 2 == 0) {
            output += myString[i].toUpperCase();
        }
        else {
            output += myString[i].toLowerCase();
         }   
    }
    return output;
}


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}

/*
PSEUDOCODE
Take string into seperationString function
Turn each string into an array
replace each empty space with a newline character
join the array into a strin
print the string check each word on a new line
*/
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