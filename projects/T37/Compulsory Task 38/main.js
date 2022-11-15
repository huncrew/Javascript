    /* Program to create a shopping list, by creating <li> elements, then appending text to each element with innerHTML
    within a for loop, appending a span for deleted, and then appending each one with appendChild!
    function to add item and to delete*/

let shoppingList = ['lamb', 'garlic', 'carrots', 'coconut'];
let htmlList = document.querySelector('#itemList');

// adds initial elements and closing span
const updateList = () => {
    document.getElementById("itemList").innerHTML = ""; // RESETS LIST  
    for (i = 0; i < shoppingList.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = "Item: " + shoppingList[i];
        listItem.id = shoppingList[i];
        htmlList.appendChild(listItem);
        // creates spans
        let spanItem = document.createElement('span');
        spanItem.classList.add("close");        
        spanItem.innerHTML = '\u00D7';
        listItem.appendChild(spanItem);
   }    
}
// adds new item entered into an array, clears box, alerts if empty
const addItem = () => {
    let inputValue = document.querySelector('#input');
    if (inputValue.value == '') {
        alert('You havent entered anything');
        inputValue.value = '';
    } else {
        shoppingList.push(inputValue.value);
        inputValue.value = '';
    }
    updateList();
    deleteListItem();
}
// create an onclick for each span element with class class.
const deleteListItem = () => {
    var spans = document.getElementsByClassName('close');
    for (let i=0;i<spans.length;i++) {
        spans[i].onclick=removeItem; 
    }
}
// using this. as the element is an object, so I can refer to it with 'this'
function removeItem() {
    this.parentElement.style.display = 'none';
    this.remove(); // calling the objects remove method.
}

const bought = () => {
    let coco = document.querySelector('#coconut').style.color = 'blue';
    let garlic = document.querySelector('#garlic').style.color = 'blue';
}
updateList();
bought();
deleteListItem();

// Adds a class name to the event object
let itemListEvent = document.querySelector('#itemList')
itemListEvent.addEventListener('click', function(e) {
    console.log(e.target.tagName); // selects LI
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle("checked");
    }
});

// simulates a click event with .click(), which triggers addItem()
let enterList = document.querySelector('#input');
enterList.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        document.getElementById("addBtn").click();
    }  
});






