/*
Program that takes 11 people on a guest list, and asks the user if they want to replace an existing guest.
If the answer is 'y' the existing guest entered will be removed from the array and the array will retain the 11th.
*/
let guestList = [];
let overTen = false;
let extraPerson = '';
while(overTen == false) {
    let answer = prompt('Enter a guests name to join the party.');
    guestList.push(answer);
    if (guestList.length > 10) {
        let replacementQuestion = prompt('You already have 10 people on the list, would you like to replace somebody? y/n');
        if (replacementQuestion == 'y') {
            guestList.forEach(element => {
                console.log(element)
            });
        let replacement = prompt('Who would you like to replace?');
        let updatedArray = guestList.filter(item => item !== replacement);
        console.log('Your updated list:') ;
        updatedArray.forEach(element => {
            console.log(element)
        });
        }
        else {
            guestList.pop();
        }
        overTen = true;
    }
}