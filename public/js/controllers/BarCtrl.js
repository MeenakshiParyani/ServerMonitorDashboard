angular.module('BarCtrl', []).controller('BarController', function($scope) {
	$scope.exampleData = 	
[
  {
    key: "Network In",
    color: "#51A351",
    values:
    [      
      { x : "A", y : 40 },
      { x : "B", y : 30 },
      { x : "c",   y : 20 }  
    ]
  },
  {
    key: "Network Out",
    color: "#BD362F",
    values:
    [      
      { x : "A", y : 60 },
      { x : "B", y : 50 },
      { x : "c",   y : 70 } 
    ]
  }
];
	nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      //.transitionDuration(350)
      .reduceXTicks(true)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
    ;

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#barChart svg')
        .datum($scope.exampleData)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});



});