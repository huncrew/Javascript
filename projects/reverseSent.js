// Parse the sentence, and the number of position changes into a function, position change can be
// sentence length for full reversal.
// The function calls itself, calling sub.str and .charat to move the string index position,
// the position -1 and then the subsequent if statement allow the function stop calling itself when position is 0.
const reverseSent = (sentence, position) => {
    if (position == 0) { 
        return sentence;
    } 
    else {
        return reverseSent(sentence.substring(1), position -1) + sentence.charAt(0);
    }   
}

console.log(reverseSent('dale', 4))






