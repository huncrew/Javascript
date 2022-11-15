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