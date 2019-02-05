  function drawLine(){
  var w = 1500;
  var h = 300;

  var svg = d3.select("#line")
    .append("svg")
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "visualization")

  var data = d3.range(11).map(function(){return Math.random()*10})
  var x = d3.scale.linear().domain([0, 10]).range([0, 1500]);
  var y = d3.scale.linear().domain([0, 20]).range([10, 300]);
  var line = d3.svg.line()

    .interpolate("cardinal")
    .x(function(d,i) {return x(i);})
    .y(function(d) {return y(d);})

    var path = svg.append("path")
    .attr("d", line(data))
    .attr("stroke", "grey")
    .attr("stroke-width", "2")
    .attr("fill", "none");

    var totalLength = path.node().getTotalLength();

    path
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
      .duration(2000)
      .ease("linear")
      .attr("stroke-dashoffset", 0);
    
  }