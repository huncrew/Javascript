/*
Loop asking user for number, if number is -1, break the loop and calculate average
*/
let number = 0;
let count = 0;
let sum = 0;
let average = 0;

while (number != -1) {
    number = Number(prompt('Enter a number'));
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