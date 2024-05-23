// Version using fetch(), a different method to build the URL, and toSorted() with array.

function wikiAPI() {
  var parentDiv = document.getElementById('wiki');
  removeResults(parentDiv);
  var searchTerm = document.getElementById('searchTerm').value;

  var url = "https://en.wikipedia.org/w/api.php";
  const params = {
    action: "query",
    format: "json",
    generator: "search",
    gsrnamespace: "0",
    gsrlimit: "20",
    gsrsearch: searchTerm
  };
  url = url + "?origin=*";
  Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  fetch(url).then(
    function (response) {
      if (response.status !== 200) {
        console.log('PROBLEM! Status code is: ' + response.status);
        return;
      };
      response.json().then(data => wikiResults(data));
    });

    function wikiResults(wikiObject) {
      var resultArray = []

      for (const pageID in wikiObject.query.pages) {
        resultArray.push([wikiObject.query.pages[pageID].index, wikiObject.query.pages[pageID].pageid, wikiObject.query.pages[pageID].title])
      } // push only the object values we want to array to sort below.

      //console.log(wikiObject);
      console.log(resultArray);

      const sortedArray = resultArray.toSorted((a, b) => a[0] - b[0]); // new method in 2023!
      console.log(sortedArray)

      for (const i in sortedArray) {
        var pageURL = "https://en.wikipedia.org/?curid="
        var newAnchor = document.createElement("a");
        newAnchor.href = pageURL+sortedArray[i][1];
        newAnchor.className = 'd-block';
        newAnchor.innerText = sortedArray[i][2];
        console.log(newAnchor);
        document.getElementById("wiki").appendChild(newAnchor);
      };
    }

    //This function will remove the previous results.
    function removeResults(parentDiv){
      while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
      }
    }
  };
