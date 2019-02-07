	function counter(){
	  var start = 0;
	  var end1 = 6000;
	  var end2 = 200;
	  var text = d3.select("#strong")
	    .append("strong")
	    .attr("x", 50)
	    .attr("y", 50)
	    .text(0);

	  var text2 = d3.select("#strong2")
	  .append("strong")
	  .attr("x", 50)
	  .attr("y", 50)
	  .text(0);
	    
	  text.transition()
	    .tween("text", function () {
	       var selection = d3.select(this);    // selection of node being transitioned
	       var interpolator = d3.interpolateNumber(start,end1); // d3 interpolator

	       return function (t) { selection.text(Math.round(interpolator(t))); };  // return value
	       
	    })
	  .duration(1000);
	  text2.transition()
	    .tween("text", function () {
	       var selection2 = d3.select(this);    // selection of node being transitioned
	       var interpolator = d3.interpolateNumber(start,end2); // d3 interpolator

	       return function (t){selection2.text(Math.round(interpolator(t))); };  // return value
	       
	    })
	  .duration(1000);
	}