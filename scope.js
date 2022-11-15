/*
Let variable below is scoped globally, and another let global cant be used unless within a different block of code.
*/
let global = 'This is accessible from anywheres';

function scopey() {
    var local = 'This variable isnt accessible outside of this functon';
    //reassigning the let global variable
    global = 'I can update the global variable aboves';
    console.log(global);
}
console.log(global);
scopey();
console.log(global);
/*
Block scope
using the let variable declaration, color within the if block is local only to that block.
*/
let color = 'red'; // global
if (color == 'red') {
    let color = 'blue'; // block scope
}
console.log(color);
/*
const can't be reassigned at all.
*/

const apple = 'apple';

// doesn't work
apple = 'hi';
