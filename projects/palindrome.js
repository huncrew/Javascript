/*
CHECK FOR PALINDROME
Uses a while loop to iterate through each letter in a string, add that letter backwards to a second string variable
check for a match - easy!
*/
let word = prompt('Enter a word to see if it is a palindrome or not');
let backwards = '';
let ij = 0;
while (ij < word.length) {
    backwards = word[ij] + backwards;
    ij++;
}
if (word == backwards) {
    console.log(word,'is a palindrome!');
}
else {
    console.log(word,'is not a palindrome!');
}