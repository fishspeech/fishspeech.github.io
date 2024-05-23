document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([41.7908, -87.5974], 16.45);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    var marker = L.marker([41.79081966634601, -87.5968628245941]).addTo(map);
    marker.bindPopup("<b>DIGS Building</b><br>5720 South Woodlawn Avenue").openPopup();

    var polygon = L.polygon([
        [41.7892, -87.6011],
        [41.7892, -87.6008],
        [41.7889, -87.6008],
        [41.7889, -87.6011]
    ]).addTo(map);
    polygon.bindPopup("<b>Cobb Hall</b><br>5811 S Ellis Ave");
});