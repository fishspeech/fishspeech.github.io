document.addEventListener('DOMContentLoaded', () => {
    const ochreContainers = document.querySelectorAll('#ochreContainer');
    ochreContainers.forEach(container => {
        const uuid = container.getAttribute('data-uuid');
        const ochreUrl = "https://ochre.lib.uchicago.edu/ochre?uuid=";
        const link = ochreUrl + uuid;

        fetchXML(link);

        function fetchXML(link) {
            fetch(link, { redirect: 'follow' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(str => (new window.DOMParser()).parseFromString(str, "application/xml"))
                .then(data => parseXML(data, container))
                .catch(error => {
                    console.error('Error fetching XML:', error);
                    container.innerHTML = 'Error: ' + error.message;
                });
        }

        function parseXML(sourceXML, container) {
            try {
                console.log(new XMLSerializer().serializeToString(sourceXML)); // Log the XML response for debugging

                const titleElement = sourceXML.querySelector('title') || sourceXML.querySelector('label');
                if (titleElement) {
                    const title = titleElement.textContent;
                    container.querySelector('#title').textContent = title;
                } else {
                    throw new Error('Title not found in XML data');
                }

                const properties = sourceXML.querySelectorAll('property');
                if (properties.length > 0) {
                    const tableBody = container.querySelector('#ochreTableBody');
                    properties.forEach((prop, index) => {
                        const propNameElement = prop.querySelector('name') || prop.querySelector('string');
                        const propValueElement = prop.querySelector('value');
                        if (propNameElement && propValueElement) {
                            const propName = propNameElement.textContent;
                            const propValue = propValueElement.textContent;
                            const row = document.createElement('tr');
                            row.innerHTML = `<td>${propName}</td><td>${propValue}</td>`;
                            tableBody.appendChild(row);
                        } else {
                            console.warn(`Property name or value missing at index ${index}`);
                        }
                    });
                } else {
                    console.warn('No properties found in XML data');
                }

                const imageElement = sourceXML.querySelector('resource[format="image/jpeg"]');
                if (imageElement) {
                    const imgUrl = ochreUrl + uuid + "&preview";
                    const imgElement = document.createElement('img');
                    imgElement.src = imgUrl;
                    container.querySelector('#preview').appendChild(imgElement);
                } else {
                    console.warn('Image not found in XML data');
                }
            } catch (error) {
                console.error('An error occurred while parsing XML data:', error);
                container.innerHTML = 'Error: ' + error.message;
            }
        }
    });
});