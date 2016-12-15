// Required html:
//		<head>
//<!-- Plotly.js -->
//		<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
//		</head>
//		<body>
//		<!-- Plotly chart will be drawn inside this DIV -->
//		<div id="PCA" style="width:100%;height:100%"></div>
//		</body>

Plotly.d3.csv('https://raw.githubusercontent.com/philliphuang/cs109-proj/master/data/pca/food_by_country.csv', function(err, rows){
  function unpack(rows, key) {
          return rows.map(function(row) 
          { return row[key];});}
var trace1 = {
  x:unpack(rows, 'x'),  y: unpack(rows, 'y'), z: unpack(rows, 'z'), country:unpack(rows, 'Country'), 
  mode: 'markers+text',
  marker: {
    size: 12,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    opacity: 0.8
  },
  text: unpack(rows, 'Country'),
  type: 'scatter3d'
};

var data = [trace1];
var layout = {
  // title: 'PCA of Average Food Consumption by Country (1970-2000)',
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0
  }};
Plotly.newPlot('PCA', data, layout);
});
