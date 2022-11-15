/*
REMEMBER - EVERY HTML ELEMENT, IS TURNED INTO AN INSTANCE OF A CLASS,
EACH ELEMENT IS AN OBJECT, THAT THE BROWSER CONSTRUCTS AS THE DOCUMENT OBJECT MODEL,
WITH THE ELEMENTS LINKED TO EACHOTHER BASED ON THEIR HIERARCHY.
OBJECTS HAVE METHODS, AS DO 
*/

/*
ATTACHING A FUNCTION TO AN OBJECTS METHOD
*/
let selectedP = document.getElementsByName('test')[0]; // passes 'p' object to variable

selectedP.onclick = function() {
    console.log('p is clicked');
    selectedP.style.color = 'blue';   
}
/*
HTML elements can call their methods within the html file onclick="functionOne()"
Then call a function in this file.
*/
const closeDoc = () => {
    window.close();
}
/*
We assign the showMoreButton object to a variable,
then add an evoke the addEventListener method on the object, passing the callback function
showMoreDetails, activated with a click.    
*/
let showMoreButton = document.getElementById('showMoreButton');
let information = document.getElementById('info');

const showMoreDetails = () => {
    information.innerHTML += "show more information";
}
showMoreButton.addEventListener('click', showMoreDetails);

// The event object, the eventListener method creates an event object I think.
// This object holds data about the events such as the clicks etc.
showMoreButton.addEventListener('click', function(e) {
    console.log(e)
});

/*
EVENT LISTENER OBJECT.
*/
let button = document.getElementById('genericButton')

button.addEventListener('click', function(e) {
    
    if (e.shiftKey) {
        console.log('the Shift Key was pressed');
    } else {
            console.log('the Shift key was not pressed');
    }
    console.log(e)
});
