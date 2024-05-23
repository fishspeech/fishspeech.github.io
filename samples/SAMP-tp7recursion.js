document.addEventListener('DOMContentLoaded', () => {loadXML()})

//Define parent element
var parentElement = document.getElementById('ochreTableBody');

var url = "https://ochre.lib.uchicago.edu/ochre?uuid=6f18e3a7-a396-46d9-85cb-92674c24cfc0";


// First function, invoked with event listener
function loadXML() {
  fetch(url)
  .then(response => response.text())
  .then(data =>
    parseData(data)
  )
  .catch(error => {
    console.error('Error loading XML file:', error);
  })
};

// NOTE how this is different from the XHR approach
function parseData(xmlData){
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
  createHeaders(xmlDoc),
  listProps(xmlDoc);
};

function createHeaders(sourceXML){
  document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
  document.getElementById('itemTitle').innerText = sourceXML.getElementsByTagName('spatialUnit')[0].children[3].children[0].children[0].children[0].innerHTML;
  document.getElementById('itemDescription').innerText = sourceXML.getElementsByTagName('spatialUnit')[0].children[4].children[0].children[0].innerHTML
  var licenseText = document.getElementById('license');
  licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
}

function listProps(sourceXML){
  console.log(sourceXML);
  var allProps = sourceXML.getElementsByTagName('properties');
  for (i=0; i < allProps[0].children.length; i++){
    propList(allProps, i);
  }
}

function propList(currentNode, i){
  //f-e child add li
  let newLI = document.createElement("li");
  newLI.innerHTML = currentNode[0].children[i].children[0].children[0].children[0].innerHTML + ": " + currentNode[0].children[i].children[1].innerHTML;
  document.getElementById('itemDetails').appendChild(newLI);
  // each time through, need to check length on child properties
  if (currentNode[0].children[i].getElementsByTagName('property').length > 0) {
    singleProp(currentNode[0].children[i].getElementsByTagName('property'), i)
  }
}

function singleProp(data, i){
  //create UL and add to page
  let newUL = document.createElement("ul");
  newUL.id=`list_${i}`;
  document.getElementById('itemDetails').appendChild(newUL);

  //f-e child add li
  for (let index = 0; index < i; index++) {
    let newLI = document.createElement("li");
    var propVal = data[index].children[1].innerHTML;
    newLI.innerHTML = data[index].children[0].children[0].children[0].innerHTML + ": " + propVal;
    document.getElementById(`list_${i}`).appendChild(newLI);
    // check if recursion is necessary
    if (data[0].children[index]){ // are there children at this node?
      if (data[0].children[index].getElementsByTagName('property')>0){ // if there are props
        singleProp(data[0].children[i].getElementsByTagName('property'), index); // rerun
      }
    }
  }
}
