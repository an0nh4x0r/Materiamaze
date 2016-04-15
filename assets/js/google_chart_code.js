google.charts.load('current', {'packages' :['corechart']});

(function () {

    google.charts.setOnLoadCallback(drawChart);

    function drawChart(){
        var data = google.visualization.arrayToDataTable([
            ['Semester', 'Pointer'],
            ['First', 5.7],
            ['Second', 6.5],
            ['Third', 6.5],
            ['Fourth', 6.9],
            ['Fifth', 5.9],
            ['Sixth', 7.5]
        ]);

        var options = {
            pointSize: 10,
            title:  'Semester Performance',
            curveType:  'function',
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
    }

}());

(function () {

    google.charts.setOnLoadCallback(doNut);

    function doNut(){
        var data1 = google.visualization.arrayToDataTable([
            ['Subjects', 'Attendance'],
            ['Software Engineering', 30],
            ['ADA', 23],
            ['D.COM', 25],
            ['CGMI', 35],
            ['Network & Web Security', 24],
            ['Absent', 60]
        ]);

        var options1 = {
            title: 'Attendance',
            pieHole: 0.4
        };

        var chart1 = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart1.draw(data1, options1);

    }

}());
