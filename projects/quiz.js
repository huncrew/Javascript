// loops through the incorrect/correct answers, using booleon values to end the loop.

let question = 'Who is the best artist in the world? (type number) \n1. Oasis\n 2. Tupac\n 3. Total\n 4. Bach';
let stopPlay = false;
let answerCorrect = false;

do {
  let userAnswer = prompt(question);
    if (userAnswer == '1') {
        console.log('Thats Correct!');
        answerCorrect = true;
    }
    else {
        let askPlay = prompt('Thats incorrect! Would you like to play again? y/n');
        if (askPlay == 'n') {
            stopPlay = true;
        }
    }
} while (stopPlay == false && answerCorrect == false);