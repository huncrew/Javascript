/*
The while loop will execute the code in a loop from top to bottom within the brackets,
until the condition in the parenthesis is false
*/
let i = 0; // control variable 
let odd = 1;
while (i < 10) {
    // console.log(odd);
    i++; // increases the term of the condition by 1
    odd = odd+2 // prints odd numbers for 10 terms
}

/*
DO WHILE LOOP, will run once first...
*/
let j = -10;
do {
    j++;
    // break
} while (j < 0);
console.log('j will be -10 as its out of scope');

/*
CHECK FOR PALINDROME
Uses a while loop to iterate through each letter in a string, add that letter backwards to a second string variable
check for a match - easy!
*/
let word = 'racecar'
let backwards = '';
let ij = 0;
while (ij < word.length) {
    console.log(word)
    backwards = word[ij] + backwards;
    console.log(backwards);
    ij++;
}
if (word == backwards) {
    console.log('Its a palindrome!');
}
else {
    console.log('Not a palindrome!');
}

/*
WHILE INPUT BREAK;
Create variable called number
While number does not equal -1, request for input.
Create variable called count
create variable called sum
The number entered adds into count
the count is +1 on each loop
Use break on -1 so its not counted using an if statement
once broken, divide sum by count and print
*/
let number = 0;
let count = 0;
let sum = 0;
let average = 0;

while (number != -1) {
    number = -1;
    if (number == -1) {
        break;
    }
    else {
        sum = sum + number;
        count += 1;
    }
}
average = sum / count;
console.log('The average is:', average)

/*
set up do-while loop syntax
create a correct answer variable to a question
create prompt variable that takes a set of 4 answers from user
if the answer is incorrect, user is prompted with a question
Do they want to try again
if they say no, the program ends
if they answer correctly the program ends
*/

// loops through the incorrect/correct answers, using booleon values to end the loop.

let question = 'Who is the best artist in the world? (type number) \n1. Oasis\n 2. Tupac\n 3. Total\n 4. Bach';
let stopPlay = true;
let answerCorrect = false;

do {
  let userAnswer = '';
    if (userAnswer == '1') {
        console.log('Thats Correct!');
        answerCorrect = true;
    }
    else {
        let askPlay = 'Thats incorrect! Would you like to play again? y/n';
        if (askPlay == 'n') {
            stopPlay = true;
        }
    }
} while (stopPlay == false && answerCorrect == false);


/*
NESTED FOR LOOPS
It will print out a square box like this:
**********
*        *
*        *
*        *
********** 
*/
let numRows = 5;
let numColumns = 10;
let strRowOutput = '*';
for (let row = 1; row <= numRows; row++) {
    for (let column = 1; column <= numColumns; column++) {
        if (
            row === 1 ||
            row === numRows ||
            column === 1 ||
            column === numColumns
            ) {
            //Notice how we make use of the OR logical operator here.
            strRowOutput += "*";
        } 
        else {
            strRowOutput += " ";
        }
    }
    console.log(strRowOutput);
    strRowOutput = "";
}

/*
    FOR LOOOOOOOOOOPS
*/

/*
Three loops to show some simple for loop in action
*/
let num = 20;
while (num > 0) {
    console.log(num)
    num--;
}

let numbers = 1;
while (numbers < 21) {
    if (numbers % 2 == 0) {
        console.log(numbers);
    }
    numbers++;
}

let starNumbers = 1;
let stars = '*'
while (starNumbers < 6) {
    console.log(stars)
    stars += '*'
    starNumbers++;
}




