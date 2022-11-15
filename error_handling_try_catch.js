/* 
standard try / catch
*/
while (true) {
    try {
    let x = prompt("enter a number");
        if (x == "") {
            throw "You have not entered anything";
        }
        if (isNaN(x)) { // check whether input is not a number
            throw x + " is not a number";
        }
        x = Number(x);
        console.log(x);
        break;
    } catch (err) {
        console.log(err);
    }
}
/* 
try / catch / finally
*/
try{
    //The try block. You can have more than 1 throw in this block.
    let numb1 = prompt("First number");
    if(isNaN(numb1)){
        throw numb1 + " is not a number";
    }
    let numb2 = prompt("Second Number");
    if (isNaN(numb2)){
        throw numb2 + " is not a number";
    }
    if (numb2 == 0){
        throw "Can't divide by 0";
    }
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    console.log(numb1+ " / " + numb2 + " = "+ (numb1/numb2));
}catch(err){
    //This block will be executed if and when the try block throws an error
        console.log(err);
}
finally{
    //This block will be executed whether the catch block was executed or not.
    console.log("The program will continue from here. ");
}

/*
Program to calculate distance/time/speed
User is asked to enter either distance time or speed with a prompt.
use a switch/if statement, if the input is distance, then ask for speed and time,
and the same goes for any selection, further prompting the remaining two.
for each case block, we need a try catch block to check for empty value, or a number, so the computation can successfully be made.
console out the result.
*/
function numberInput() {
    let userInput = '';
    while (true) {
    try{
        //testing for correct user input, if not continue prompt or quit.
        userInput = prompt('This is a program to calculate distance, time or speed, out of the three, which would you like to calculate?');
        console.log(userInput);
        if(userInput != 'distance' && userInput != 'time' && userInput != 'speed'){
            if(userInput == 'quit') {
                break;
            }
            throw userInput + " is not one of the options! Please try again, type quit to stop";
        }
        else {
            break;
        }
    }catch(err){
            console.log(err);
    }
    }
    // switch between user inputs distance/time/speed
    switch (userInput) {
        case 'distance':
            try{
                let speed = prompt('Please enter the speed as a number');
                if(isNaN(speed)){
                    throw speed + " is not a number";
                }
                let time = prompt('Please enter the time as a number in seconds');
                if (isNaN(time)){
                    throw time + " is not a number";
                }
                speed = Number(speed);
                time = Number(time);
                console.log('distance = ',speed+" * "+time + " = "+ (speed*time));
            }catch(err){
                    console.log(err);
            }
            break;
            //case statements switch between distance/speed/time and check for a number value
        case 'time':
            try{
                let distance = prompt('Please enter the distance as a number');
                if(isNaN(distance)){
                    throw distance + " is not a number";
                }
                let speed = prompt('Please enter the speed as a number in seconds');
                if (isNaN(speed)){
                    throw speed + " is not a number";
                }
                distance = Number(distance);
                speed = Number(speed);
                console.log('time = ',distance+" % "+speed + " = "+ (distance/speed));
            }catch(err){
                    console.log(err);
            }
            break;
        case 'speed':
            try{
                let distance = prompt('Please enter the distance as a number');
                if(isNaN(distance)){
                    throw distance + " is not a number";
                }
                let time = prompt('Please enter the time as a number in seconds');
                if (isNaN(time)){
                    throw time + " is not a number";
                }
                distance = Number(distance);
                time = Number(time);
                console.log('speed = ',distance+" % "+time + " = "+ (distance/time));
            }catch(err){
                    console.log(err);
            }
            break;
    }
}
numberInput();

