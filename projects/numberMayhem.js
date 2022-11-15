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