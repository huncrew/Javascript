let dale = {
    strength: 99,
    smarts: 99,
    funny: 99,
    sexy: 99
}

let keys = Object.(dale) // // syntax error to access the object
Let print = console.(Keys) // syntax error trying to use print & Let

let values = Object.values(Dale) // runtime error
console.log(values);

let score = String(dale['strength'] + String(dale['smarts'])) // logic error, the number would be 9999, not 198
console.log(score)
