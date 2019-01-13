function chart() {
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(generateChartData(t));

        var options = {
          title: 'Populations.',
          curveType: "function",
          legend: { position: 'bottom' },
          animation: {"startup": true}
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
}

chart();
