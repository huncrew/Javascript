
// listens to form submission to get the data, pass to storage.
document.querySelector('form').addEventListener('submit', (e) => {
  const data = Object.fromEntries(new FormData(e.target).entries());
  const dataJSON = 
  {
    "author": data.author,
    "title": data.title,
    "genre": data.genre
  }
  storeStorage(dataJSON);
});

// Store the form data in JSON format in session storage.
const storeStorage = (data) => {
  let allKeys = Object.keys(sessionStorage);
  console.log(allKeys.length);
  sessionStorage.setItem(`book${allKeys.length+1}`, JSON.stringify(data)); 
  getStorage();
}

/*

*/
const getStorage = (data) => {

  let allKeys = Object.keys(sessionStorage);
  console.log('ALL OF THE KEYS', allKeys);

  let htmlList = document.querySelector('#storedBooks');
  let theData = sessionStorage.getItem('book1')
  let object = JSON.parse(theData)

  let listItem = document.createElement('li');
  listItem.innerHTML = object.author;
  listItem.id = history.author;
  htmlList.appendChild(listItem);
}

getStorage();

// get data on load
// window.addEventListener('load', function recordInHistory() {
//   var current = sessionStorage.getItem('history');
//   if (!current) { // check if an item is already registered
//     current = []; // if not, we initiate an empty array
//   } else {
//     current = JSON.parse(current); // else parse whatever is in
//   }
//   current.push({
//     title: document.title,
//     url: window.location.href
//   }); // add the item
//   sessionStorage.setItem('history', JSON.stringify(current)); // replace
// });

