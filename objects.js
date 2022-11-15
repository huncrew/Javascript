const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

const traits = ['Sexy', 'Strong', 'Smart af', 'Coder'];
for (trait of traits) {
    console.log(trait)
}

/*
LOOPING THROUGH OBJECTS
*/

const dale = {
    sexy: 99,
    strong: 99,
    smart: 99,
    funny: 99
}
let keys = Object.keys(dale) // creates an array of the objects keys
console.log(keys)

let values = Object.values(dale) // creates an array of the objects values
console.log(values);

let entries = Object.entries(dale); // creates an array of arrays for each key / valur pair
console.log(entries)

for( key of Object.keys(dale) ) {
    console.log(typeof key) // keys are stored as strings
    console.log(key, ":", dale[key]) // just accessing the value by using bracket notation, it takes time to get it but I get it.
}

const codeSkills = {
    node: 99,
    react: 99,
    typescript: 99,
    AWS: 99,
    Python: 99,
    Go: 99
}

console.log(codeSkills['node']) // access the value, using the key, which is always a string.