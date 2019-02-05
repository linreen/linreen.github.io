	function scatter(){ d3.csv('https://raw.githubusercontent.com/linreen/linreen.github.io/master/data/Shoe_Master_Test_V2.csv', function (data) {
	  
	  // Variables
	  var body = d3.select("#viz")
		var margin = { top: 50, right: 30, bottom: 50, left: 50 }
		var h = (500 - margin.top - margin.bottom)
		var w = (300 - margin.left - margin.right)
		var formatInt = d3.format('.0f')
		// Scales
	  var colorScale = d3.scale.category20()
	  var xScale = d3.scale.linear()
	    .domain([
	    	d3.min([0,d3.min(data,function (d) { return d.listingid })]),
	    	d3.max([d3.max(data,function (d) { return d.listingid })])
	    	])
	    .range([0,200])
	  var yScale = d3.scale.linear()
	    .domain([
	    	d3.min([0,d3.min(data,function (d) { return d.numbids })]),
	    	d3.max([0,d3.max(data,function (d) { return d.numbids })])
	    	])
	    .range([h,10])
		// SVG
		var svg = body.append('svg')
		    .attr('height',h + margin.top + margin.bottom)
		    .attr('width',w + margin.left + margin.right)
		  .append('g')
		    .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
		// X-axis
		var xAxis = d3.svg.axis()
		  .scale(xScale)
		  .tickFormat(formatInt)
		  .ticks(0)
		  .orient('bottom')
	  // Y-axis
		var yAxis = d3.svg.axis()
		  .scale(yScale)
		  .tickFormat(formatInt)
		  .ticks(5)
		  .orient('left')
	  // Circles
	  var circles = svg.selectAll('circle')
	      .data(data)
	      .enter()
		  .append('circle')
		    .transition()
	        .delay((d, i) => 0.2* i)
	        .duration(5)
	        .ease("elastic")
	      .attr('cx',function (d) { return xScale(d.listingid) })
	      .attr('cy',function (d) { return yScale(d.numbids) })
	      .attr('r',5)
	      .attr('stroke','black')
	      .attr('stroke-width',1)
	      .attr('fill',function (d,i) { return colorScale(i) })


	      // X-axis
  svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',w)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Auction #')
  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('# of Bids')

})}
