/*
PSEUDO-CODE
create a function that takes in a string, and the number of positions to move by.
Split string into an array of letters and store in variable called stringToEncode.
loop through each element of the array (javascript using .map to create a new array)
For each letter in the array, store it's unicode number in a variable after converting it with a built in function.
If letter is between 65 and 90 (65 is A, 90 is Z) we add the position change (example 15);
If it was 90 + 15, the letter is now actually 'i';
If the characterVariable is now above 90, we minus the alpbabet number, this gives the correct position
For example if the character was 20, moving it 15 positions would take it to positon 9 in a 26 letter aphabet.
20 + 15 = 35, - 26 = 9;
elseif add the 26 characters, to account for somebody entering a minus character.
elseif compute the same commands as above but for the lowercase alphabet
*/

/*
A string and number of positions in the alphabet for each letter to change is parsed to a function.
The string is split into an array, then looped with the .map method.
Each letter is turned into a code, and this code is checked to see if its within
the lower or uppercase boundaries, if the letter is above 90, or less than 65,
the alphabet length (26) is added or subtracted, the same logic is used with the lowercase numbers.
This discludes special characters by default by leaving the character code as is, if it doesnt fall into the number ranges
of lower and uppcase.
*/

let word = 'abcdefghijklmnopqrstuvwxyzABCDEFG.....';
let alphabetNumber = 26;

const caesar = (stringToEncode, positionChange) => {
    // split to array and iterate with map
    stringToEncode = stringToEncode.split("");
    stringToEncode = stringToEncode.map(letter => {
                            
        let unicodeLetter = letter.charCodeAt(0)
        //uppercase
        if (unicodeLetter >= 65 && unicodeLetter <= 90) {
            unicodeLetter = unicodeLetter + positionChange;
            if (unicodeLetter > 90) {
                unicodeLetter = unicodeLetter - alphabetNumber;
            } else if (unicodeLetter < 65) {
                unicodeLetter = unicodeLetter + alphabetNumber;
            } //lowercase
          } else if (unicodeLetter >= 97 && unicodeLetter <= 122) {
            unicodeLetter = unicodeLetter + positionChange;
            if (unicodeLetter > 122) {
                unicodeLetter = unicodeLetter - alphabetNumber;
            } else if (unicodeLetter < 97) {
                unicodeLetter = unicodeLetter + alphabetNumber;
            }
          }
          // convert to string
        let string = String.fromCharCode(unicodeLetter);
        return string;
    })
    //join array to string
    let updatedString = stringToEncode.join("");
    console.log(updatedString);
    return updatedString;
}

caesar(word, 15);