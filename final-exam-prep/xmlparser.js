document.addEventListener("DOMContentLoaded", function() {
    fetch('https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            displayData(xmlDoc);
        })
        .catch(error => console.error('Error fetching XML:', error));

    function displayData(xml) {
        const items = xml.getElementsByTagName("spatialUnit");
        const dataList = document.getElementById("data-list");
        const dataTableBody = document.getElementById("data-table").querySelector("tbody");

        for (let i = 0; i < items.length; i++) {
            const itemLabel = items[i].getElementsByTagName("label")[0].textContent;
            const objectType = items[i].getElementsByTagName("property")[0].getElementsByTagName("value")[0].textContent;
            const museumNumber = items[i].getElementsByTagName("property")[1].getElementsByTagName("value")[0].textContent;
            const findspot = items[i].getElementsByTagName("property")[2].getElementsByTagName("value")[0].textContent;
            const language = items[i].getElementsByTagName("property")[5].getElementsByTagName("value")[0].textContent;


            // Create list item
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = itemLabel;
            dataList.appendChild(listItem);

            // Create table row
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${itemLabel}</td>
                <td>${objectType}</td>
                <td>${museumNumber}</td>
                <td>${findspot}</td>
                <td>${language}</td>
            `;
            dataTableBody.appendChild(row);
        }
    }
});
