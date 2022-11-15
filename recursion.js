function cutCake(numbFriends, numbSlice){
    if(numbFriends <= numbSlice){ /*Base case. This is the condition
    that terminates the recursion */
    return numbSlice;
    } else {
    /*Recursive call. This function doubles the number of cake
    slices in its recursion call which will end up making the base case true
    and terminates the function.*/
    return cutCake(numbFriends, numbSlice * 2);/*Doubling the
    number of slices by cutting the cake into half.*/
    }
    }
    console.log(cutCake(11, 1));


/*
Parse the sentence, and the number of position changes into a function, position change can be
sentence length for full reversal.
The function calls itself, calling sub.str and .charat to move the string index position,
the position -1 and then the subsequent if statement allow the function stop calling itself when position is 0.
*/
const reverseSent = (sentence, position) => {
    if (position == 0) { 
        return sentence;
    } 
    else {
        return reverseSent(sentence.substr(1), position -1) + sentence.charAt(0);
    }   
}
console.log(reverseSent('dale', 4))

function reverseString(str) {
    if (typeof str !== "string") {
      return str;
    }
    // you must add this line. rest of the code is fine
    if (!str.length) return str; // this terminates the recursion when it reaches the end
  
    return reverseString(str.substring(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!detseT"));



  /*
SECOND RECURSION TASK
  */

/*
Function is parsed a list of words, the length of the list, and the word to be matched as arguments.
The function checks if the word is at the last position in the array, if so it prints the position,
if not, the function is repeatedily called, and the position in the array reduced by one, until the 
base case of the position equalling the word is met.
*/
const findWord = (word, list, position) => {
    if (list[position] == word) { 
        let found = `word was found in position ${position}`;
        return found;
    } 
    else {
        return findWord(word, list, position - 1);
    }   
}
daleList = ['dale', 'grant', 'javascript', 'react', 'node', 'python', 'go'];
console.log(findWord('javascript', daleList, daleList.length));