// Last item function
function lastItem() {
  var arrayName = ['Watermelon', 'Apple', 'Orange', 'Kiwi']
  var y = arrayName.slice();
  var selectedElement = document.getElementById("fruit");
  var x = arrayName.sort();
  selectedElement.innerText = `The original array is [${y}], and I sorted it alphabetically.
  The last item of the sorted array is ${x[x.length - 1]}.`;
}


// WHERE DO WE CONSTRUCT THE NEW OBJECT?
const responses = {};

function sortItemsInput() {

  // ASK HOW MANY ITEMS TO ENTER, CHECK THE NUMBER PROVIDED BY THE PROMPT
  while(isNaN(numItems) || numItems > 4 || numItems < 2 || !(Number.isInteger(numItems))){
    var numItems = Number(prompt('How many items would you like to enter? 2-4.'))
  }

  // COLLECT INPUT FROM USER
  for (let index = 0; index < numItems; index++) {
    let catInput = prompt(`Enter category ${index+1} of ${numItems}.`)
    let catItem = prompt(`Enter your ${catInput}`)
    responses[catInput] = catItem;
    // We cannot create the responses object here!
  };

  // IF YOU WANT TO SORT BY KEY
  const responseKeys = Object.keys(responses).sort();

  for (const key of responseKeys) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `Your ${key.toLowerCase()} is ${responses[key]}`
    document.getElementById('outputArray').appendChild(newDiv)
  }

  // OUTPUT USER RESPONSES AS HTML WITHOUT SORTING
  /*for (const [key, value] of Object.entries(responses)) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `Your ${key.toLowerCase()} is ${value}`
    document.getElementById('outputArray').appendChild(newDiv)
  }*/

};
