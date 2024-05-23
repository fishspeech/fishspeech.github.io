function loadXMLDoc() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        listTexts(this);
      }
    };
    xhr.open("GET", "media/rsti.xml", true);
    xhr.send();
  };
  
  function listTexts(xml) {
    let selectedData, i, xmlDoc;
    xmlDoc = xml.responseXML;
  
    selectedData = xmlDoc.getElementsByTagName("property");
  
    for (i = 0; i < selectedData.length; i++) {
      if (selectedData[i].children[0].attributes[0].nodeValue==="1db231a7-a055-d5c6-08a8-b06022c8daec") {
        let newDiv = document.createElement("div");
        newDiv.className = "d-block";
        newDiv.innerHTML = selectedData[i].children[1].innerHTML;
        document.getElementById("output").appendChild(newDiv);
      };
    };
  };
  