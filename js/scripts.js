var dataArray = [];
var headers = ['Year', 'Total', 'Boys', 'Girls'];
dataArray.push(headers);
json.forEach(function(d){
  dataArray.push([d.year.toString(),d.total,d.boys,d.girls]);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea: {
      top: 20,
      bottom: 50,
      left: 50,
      right: 100
    },
    colors: ['#888','#2c7bb6','#d7191c'],
    curveType: 'function',
    focusTarget: "category",
    hAxis : {
      title: "Year"
    },
    vAxis : {
      title: "Infant mortality rate"
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
