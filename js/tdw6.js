document.addEventListener('DOMContentLoaded', function () {
    // Setup the Line Chart
    var ctxLine = document.getElementById('myLineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(150, 40, 27, 0.5)',  // Richer maroon
                borderColor: 'rgba(150, 40, 27, 1)',  // Solid border for line
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Setup the Bar Chart
    var ctxBar = document.getElementById('myBarChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Maroon', 'orange', 'Gold', 'Olive', 'Indigo', 'Khaki'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(128, 0, 0, 0.5)',  // Maroon
                    'rgba(233, 105, 44, 0.5)',  // Burnt orange
                    'rgba(207, 181, 59, 0.5)',  // Gold
                    'rgba(120, 134, 107, 0.5)',  // Olive
                    'rgba(97, 61, 193, 0.5)',  // Indigo
                    'rgba(189, 183, 107, 0.5)'  // Dark khaki
                ],
                borderColor: [
                    'rgba(128, 0, 0, 1)',
                    'rgba(233, 105, 44, 1)',
                    'rgba(207, 181, 59, 1)',
                    'rgba(120, 134, 107, 1)',
                    'rgba(97, 61, 193, 1)',
                    'rgba(189, 183, 107, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Setup the Bubble Chart
    var ctxBubble = document.getElementById('myBubbleChart').getContext('2d');
    var bubbleData = [
        { width: 20, height: 20, count: 15 },
        { width: 30, height: 15, count: 20 },
        { width: 15, height: 25, count: 25 },
        { width: 25, height: 25, count: 10 },
        { width: 35, height: 30, count: 30 }
    ];
    new Chart(ctxBubble, {
        type: 'bubble',
        data: {
            datasets: [
                {
                    label: 'width = height',
                    data: bubbleData.filter(row => row.width === row.height).map(row => ({
                        x: row.width,
                        y: row.height,
                        r: Math.sqrt(row.count) * 5
                    })),
                    backgroundColor: 'rgba(128, 0, 0, 0.5)' // Maroon
                },
                {
                    label: 'width > height',
                    data: bubbleData.filter(row => row.width > row.height).map(row => ({
                        x: row.width,
                        y: row.height,
                        r: Math.sqrt(row.count) * 5
                    })),
                    backgroundColor: 'rgba(207, 181, 59, 0.5)' // Gold
                },
                {
                    label: 'width < height',
                    data: bubbleData.filter(row => row.width < row.height).map(row => ({
                        x: row.width,
                        y: row.height,
                        r: Math.sqrt(row.count) * 5
                    })),
                    backgroundColor: 'rgba(120, 134, 107, 0.5)' // Olive
                }
            ]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Setup the Radar Chart
    var ctxRadar = document.getElementById('myRadarChart').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Quality', 'Efficiency', 'Performance', 'Innovation', 'Satisfaction'],
            datasets: [{
                label: 'Team A',
                data: [80, 78, 90, 67, 85],
                fill: true,
                backgroundColor: 'rgba(128, 0, 0, 0.5)', // Maroon
                borderColor: 'rgba(128, 0, 0, 1)',
                pointBackgroundColor: 'rgba(128, 0, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(128, 0, 0, 1)'
            }, {
                label: 'Team B',
                data: [68, 86, 75, 91, 80],
                fill: true,
                backgroundColor: 'rgba(233, 105, 44, 0.5)', // Burnt orange
                borderColor: 'rgba(233, 105, 44, 1)',
                pointBackgroundColor: 'rgba(233, 105, 44, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(233, 105, 44, 1)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });
});