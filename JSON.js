let jsonTest = {
    "name": "Dale",
    "age": 28,
    "Sexy": 99,
    "leanMuscle": 99,
    "intelligence": 99,
    "Perseverance": 99
}
//adds it on, like object literals.    
jsonTest.grit = 99;
console.log(jsonTest);
// arrays work too
jsonArrayTest = [{
    "abc": 1
}, {
    "abc1": 2
}, { "abc3": 3
}]
// loop through the array of objects
jsonArrayTest.forEach(element => {
    console.log(element)
});

// nested objects
jsonNestedObject = {
    "name": "Dale",
    "age": 28,
    "skills": {
        "Sexy": 99,
        "leanMuscle": 99,
        "intelligence": 99,
        "Perseverance": 99
    }
}
// accesses nested skills
console.log(jsonNestedObject.skills.Sexy)

/*
IMPORTANT - DATA CONVERSION
*/
/*
JSON.parse()
Turns JSON text received from web server into a Javascript Object.
This object data can then be used on the web page.
*/
JSON.parse(jsonNestedObject) // will fail, as already obect
/*
JSON.stringify()
Turn Javascript object into JSON string, to be sent to a webserver.
*/
let jsonToBeSent = JSON.stringify(jsonNestedObject);

