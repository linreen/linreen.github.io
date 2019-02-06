function createDonut(){
var duration = 2000,
    transition = 200,
    percent = 68,
    width = window.innerWidth - 20,
    height = window.innerHeight - 20;

var dataset = {
            lower: calcPercent(0),
            upper: calcPercent(percent)
        },
        radius = Math.min(width, height) / 3,
        pie = d3.layout.pie().sort(null),
        format = d3.format(".0%");

var arc = d3.svg.arc()
        .innerRadius(radius * .8)
        .outerRadius(radius);

var svg = d3.select("#donuts").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")

        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var path = svg.selectAll("path")
                .data(pie(dataset.lower))
                .enter().append("path")

                .attr("class", function (d, i) {
                    return "color" + i
                })
                .attr("d", arc)
                .each(function (d) {
                    this._current = d;
                });

var text = svg.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em");

var progress = 0;

var timeout = setTimeout(function () {
    clearTimeout(timeout);
    path = path.data(pie(dataset.upper));
    path.transition().duration(duration).attrTween("d", function (a) {
        var i = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress, percent)
        this._current = i(0);
        return function (t) {
            text.text(format(i2(t) / 100));
            return arc(i(t));
        };
    });
}, 1000);

function calcPercent(percent) {
    return [percent, 100 - percent];
};
}

function createMoreDonuts(){
    var duration = 2000,
    transition = 200,
    percent = 69,
    percent2 = 63,
    percent3 = 42,
    width = window.innerWidth - 20,
    height = window.innerHeight - 20;

var dataset = {
            lower: calcPercent(0),
            upper: calcPercent(percent),
            upper2:calcPercent(percent2),
            upper3:calcPercent(percent3),
        },
        radius = Math.min(width, height)/6,
        pie = d3.layout.pie().sort(null),
        format = d3.format(".0%");

var arc = d3.svg.arc()
        .innerRadius(radius * .8)
        .outerRadius(radius);

var svg = d3.select("#moredonuts").append("svg")
        .attr("width", width/3)
        .attr("height", height/2)
        .append("g")

        .attr("transform", "translate(" + width / 6 + "," + height / 6 + ")");
var svg2 = d3.select("#moredonuts").append("svg")
        .attr("width", width/3)
        .attr("height", height/2)
        .append("g")

        .attr("transform", "translate(" + width / 6 + "," + height / 6 + ")");
var svg3 = d3.select("#moredonuts").append("svg")
        .attr("width", width/3)
        .attr("height", height/2)
        .append("g")

        .attr("transform", "translate(" + width / 6 + "," + height / 6 + ")");

var path = svg.selectAll("path")
                .data(pie(dataset.lower))
                .enter().append("path")

                .attr("class", function (d, i) {
                    return "color2" + i
                })
                .attr("d", arc)
                .each(function (d) {
                    this._current = d;
                });
var path2 = svg2.selectAll("path")
                .data(pie(dataset.lower))
                .enter().append("path")

                .attr("class", function (d, i) {
                    return "color3" + i
                })
                .attr("d", arc)
                .each(function (d) {
                    this._current = d;
                });
var path3 = svg3.selectAll("path")
                .data(pie(dataset.lower))
                .enter().append("path")

                .attr("class", function (d, i) {
                    return "color4" + i
                })
                .attr("d", arc)
                .each(function (d) {
                    this._current = d;
                });

var text = svg.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em");

var text2 = svg2.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em");

var text3 = svg3.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".3em");

var progress = 0;
var progress2 = 0;
var progress3 = 0;
var timeout = setTimeout(function () {
    clearTimeout(timeout);
    path = path.data(pie(dataset.upper));
    path.transition().duration(duration).attrTween("d", function (a) {
        var i = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress, percent)
        this._current = i(0);
        return function (t) {
            text.text(format(i2(t) / 100));
            return arc(i(t));
        };
    });
}, 1000);

var timeout2 = setTimeout(function () {
    clearTimeout(timeout2);
    path2 = path2.data(pie(dataset.upper2));
    path2.transition().duration(duration).attrTween("d", function (a) {
        var i = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress2, percent2)
        this._current = i(0);
        return function (t) {
            text2.text(format(i2(t) / 100));
            return arc(i(t));
        };
    });
}, 1000);

var timeout3 = setTimeout(function () {
    clearTimeout(timeout3);
    path3 = path3.data(pie(dataset.upper3));
    path3.transition().duration(duration).attrTween("d", function (a) {
        var i = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress3, percent3)
        this._current = i(0);
        return function (t) {
            text3.text(format(i2(t) / 100));
            return arc(i(t));
        };
    });
}, 1000);
function calcPercent(percent) {
    return [percent, 100 - percent];
};
}
