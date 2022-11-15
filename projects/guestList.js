/*
Loops through and adds user input to array, breaks out after 10.
*/
let guestList = [];
let overTen = false;
while(overTen == false) {
    let answer = prompt('Enter a guests name to join the party.');
    guestList.push(answer);
    if (guestList.length > 10) {
        guestList.pop();
        overTen = true;
        console.log('You have already added 10 people to your list, here are the members:');
        guestList.forEach(element => {
            console.log(element)
        });
    }
}