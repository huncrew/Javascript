/*
Simple Array Loops
*/
let vehicles = ['Aston Martin', 'Chevvy', 'Racecar', 'Lambo', 'Rari'];
let favouriteVehicle = 'Aston Martin';
for (let vi = 0; vi < vehicles.length; vi++ ) {
    if(vehicles[vi] == 'Aston Martin') {
        console.log('The',vehicles[vi],'is my favourite vehicle');
    }
    else {
        console.log('The',vehicles[vi],'is not my favourite vehicle');
    }
}