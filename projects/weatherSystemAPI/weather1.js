let startButton = document.getElementById('submitButton');

let shoppingList = ['lamb', 'garlic', 'carrots', 'coconut'];
let htmlList = document.getElementById("city");

for (i = 0; i < shoppingList.length; i++) {
    let listItem = document.createElement('option');
   listItem.innerHTML = "City: " + shoppingList[i];
   listItem.id = shoppingList[i];
  htmlList.appendChild(listItem);
}


const getOption = () => {
    var city = document.getElementById("city");
    alert(city.selectedOptions[0].textContent);
}

// listens for elements click, calls the startcounter function
startButton.addEventListener("click", getOption);