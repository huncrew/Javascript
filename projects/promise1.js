/*
Promise API Call.
Get random affirmation from API, turn text to JSON, console.log result.
*/
fetch("https://www.affirmations.dev/") // promise for api call
    .then(res => res.json()) 
    .then((result) => { 
        affirmation = result; 
        console.log(affirmation.affirmation);
    }),
    (error) => {
        console.log(error);
    }