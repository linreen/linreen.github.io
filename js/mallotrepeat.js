	function repeatImage(){var dataset = [{
  	image: "../images/auction.svg",
  	data: 6}];
	var svg = d3.select("#pattern")



	var groups = svg.selectAll("foo")
	    .data(dataset)
	    .enter()
	    .append("g")
	    .attr("transform", (d, i) => "translate(0," + 50*(i) + ")");

	var images = groups.selectAll("bar")
	    .data(d => d3.range(d.data))
	    .enter()
	    .append("svg:image")
	    .transition()
	        .delay((d, i) => 100* i)
	        .duration(2500)
	        .ease("elastic")
	    .attr("x", function(d, i) {
	        return (i*75);
	    })
	    .attr("xlink:href", function(d) {
	        return d3.select(this.parentNode).datum().image
	    })
	
	       
	        

	}
