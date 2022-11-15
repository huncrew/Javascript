
/*
Using intervalID to hold the setInterval function value globally so
it can be accessed by clearInterval.
the eventListener listens to the clicks, then calls the start and stop counter functions.
*/
let intervalID;
let counter = 0;

// setInterval has a callback function thats called every 1 second
let startCounter = function() {
    intervalID = setInterval(function() {
        counter += 1;
        console.log(counter)
        }, 1000);
}

// clears the counter
function stopCounter() {
    clearInterval(intervalID);
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// listens for elements click, calls the startcounter function
startButton.addEventListener("click", startCounter);


stopButton.addEventListener("click", stopCounter);

