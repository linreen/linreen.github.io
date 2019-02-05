	function counter(){
	  var strong1 = d3.select("#strong");
	  var strong2 = d3.select("#strong2");
	    
	  var text = strong1.append("strong")
	    .attr("x", 50)
	    .attr("y", 50)
	    .text(1);

	  var text2 = strong2.append("strong")
	  .attr("x", 50)
	  .attr("y", 50)
	  .text(1);
	    
	  text.transition()
	    .tween("text", function starttrans() {
	       var selection = d3.select(this);    // selection of node being transitioned
	       var start = d3.select(this).text(); // start value prior to transition
	       var end = 6000;                     // specified end value
	       var interpolator = d3.interpolateNumber(start,end); // d3 interpolator

	       return function starttrans(t) { selection.text(Math.round(interpolator(t))); };  // return value
	       
	    })
	  .duration(2000);
	  text2.transition()
	    .tween("text", function starttrans() {
	       var selection = d3.select(this);    // selection of node being transitioned
	       var start = d3.select(this).text(); // start value prior to transition
	       var end = 200;                     // specified end value
	       var interpolator = d3.interpolateNumber(start,end); // d3 interpolator

	       return function starttrans(t){selection.text(Math.round(interpolator(t))); };  // return value
	       
	    })
	  .duration(2000);
	}