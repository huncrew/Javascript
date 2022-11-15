/*
Program to remove vowels from an array of strings.
The original string, and the vowels are parsed to a function that handles.
loop through the vowels, and check to see if the vowel matches using indexOf
that index is then spliced using the .splice method.
It works because indexOf will find the first occurance.
*/
disappearString = (myString, toErase) => {
    let replacedString = myString.split("");
    let vowels = toErase.split("");
    console.log(replacedString);
    console.log(vowels)

    for(let i = 0; i < vowels.length; i++) {
        let index = replacedString.indexOf(vowels[i]);
        if (index > -1) { 
            replacedString.splice(index, 1); 
          }
    }

    replacedString = replacedString.join("")
    return replacedString;
}


// DO NOT EDIT BELOW THIS LINE
let testStrings2 = [
    "the quick brown fox jumps over the lazy dog",
    "hello world",
    "software engineering is fun",
    "i like javascript",
    "clown case",
    "rhythms"
]

let stringToDisappear = "aeiou";

let correctStrings1 = [
    "th qck brwn fox jumps over the lzy dog",
    "hll world",
    "sftwr engneering is fn",
    " lik jvascript",
    "clwn cs",
    "rhythms"
]

for (let strIdx = 0; strIdx < testStrings2.length; strIdx++) {
    let test = testStrings2[strIdx];
    let correct = correctStrings1[strIdx];

    let got = disappearString(test, stringToDisappear);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}