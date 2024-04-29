function lastItem(fruits, output1)
{   
    var arrayName = fruits
    var y = arrayName.slice();
    fruits.sort((a,b)=> a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length-1];
    const outputDiv = document.getElementById(output1);
    outputDiv.innerHTML = `The original array is [${y}], and it is sorted alphabetically.<br>Fruits sorted: [${fruits.join(', ')}]<br>The last item of the sorted array: ${lastAlphabetical}`;
}



document.getElementById('sortButton2').addEventListener('click', getAndSort);

function getAndSort()
{
    let testprompt = prompt("How many items would you like to enter? Choose between 2 and 4.");
    let numOfCat = parseInt(testprompt);

   // let numOfCat = parseInt(prompt("How many items would you like to enter? Choose between 2 and 4."));
    
    
   //handle situation when user hits cancel or enter empty at the begining of the prompt
    if (!testprompt ) 
    { 
        alert('cancelled!')
        return false; 
    }


    while(isNaN(numOfCat) || numOfCat < 2 || numOfCat > 4)
    {
        numOfCat = parseInt(prompt("Invalid Input. Please enter a number between 2 and 4."));

    }

    let cat = [];
    let itm = [];
    let sortedItm = [];

    for (let i=0; i< numOfCat; i++)
    {
        cat.push(prompt(`Enter category ${i+1} of ${numOfCat}.`));

    }

    for (let category of cat)
    {
        let item = prompt(`Enter your ${category}`);
        itm.push(item);
        sortedItm.push(item);
    }

    sortedItm.sort();

    let displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `<h2>You entered items:</h2><ul>${itm.map(item => `<li>${item}</li>`).join('')}</ul>`;
    displayArea.innerHTML += `<h2>I sorted alphabetically as:</h2><ul>${sortedItm.map(item => `<li>${item}</li>`).join('')}</ul>`;

}




//////////////////////////////////////////////////////
//sort by categories


// clear the previous input values display
function clearcontent(elementID) 
{ 
    document.getElementById(elementID).innerHTML = ""; 
} 



document.getElementById('sortButton').addEventListener('click', sortItemsInput);
function sortItemsInput() 
{
    const responses = {}; // put it inside the function so that when every time hitting the button, 
                            //a new list can be sorted without mixing with the previous input values
    
    while(isNaN(numItems) || numItems > 4 || numItems < 2 || !(Number.isInteger(numItems)))
    {
        //var numItems = Number(prompt('How many items would you like to enter? 2-4.'))

        var getPrompt = prompt('How many items would you like to enter? 2-4.')
        var numItems = Number(getPrompt)
        
        //handle situation when user hits cancel or enter empty at the begining of the prompt
        if (!getPrompt) 
        { 
            alert('cancelled!')
            return false; 
        }

    }

    let Div = document.createElement("div");
    Div.innerHTML = `<h2>Your input categories and items are:</h2>`
    document.getElementById('displayOutput').appendChild(Div)
    
    
    for (let index = 0; index < numItems; index++) 
    {
        let catInput = prompt(`Enter category ${index+1} of ${numItems}.`)
        let catItem = prompt(`Enter your ${catInput}`)
        responses[catInput] = catItem;   //store like a dictionary

        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<li> Your ${catInput.toLowerCase()} is ${responses[catInput]} </li>`
        document.getElementById('displayOutput').appendChild(newDiv)
    };

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h2>I sorted the categories alphabetically as:</h2>`
    document.getElementById('displayOutput').appendChild(newDiv)
    
    //sort by key (input categories)
    const responseKeys = Object.keys(responses).sort();
    for (const key of responseKeys) 
    {
        let newDiv = document.createElement("div");

        newDiv.innerHTML = `<li> Your ${key.toLowerCase()} is ${responses[key]} </li>`
        document.getElementById('displayOutput').appendChild(newDiv)
    }

};
