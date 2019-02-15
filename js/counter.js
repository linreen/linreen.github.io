	function counter(){
	  var start = 0;
	  var end1 = 179715;
	  var end2 = 241954;
	  var end3 = 328066;

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

  	  var text3 = d3.select("#strong3")
	  .append("strong")
	  .attr("x", 50)
	  .attr("y", 50)
	  .text(0);
	    
	  text.transition()
	    .tween("text", function () {
	       var selection = d3.select(this);    // selection of node being transitioned
	       var interpolator1 = d3.interpolateNumber(100000,end1); // d3 interpolator

	       return function (t) { selection.text(Math.round(interpolator1(t))); };  // return value
	       
	    })
	    .style("color", "black")
	  .duration(1000);
	  text2.transition()
	    .tween("text", function () {
	       var selection2 = d3.select(this);    // selection of node being transitioned
	       var interpolator2 = d3.interpolateNumber(200000,end2); // d3 interpolator

	       return function (t){selection2.text(Math.round(interpolator2(t))); };  // return value
	       
	    })
	    .style("color", "black")
	  .duration(2000);

  	  text3.transition()
	    .tween("text", function () {
	       var selection3 = d3.select(this);    // selection of node being transitioned
	       var interpolator3 = d3.interpolateNumber(300000,end3); // d3 interpolator

	       return function (t){selection3.text(Math.round(interpolator3(t))); };  // return value
	       
	    })
	    .style("color", "black")
	  .duration(3000);
	}