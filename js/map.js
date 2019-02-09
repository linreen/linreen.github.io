
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoiY2l1dTUzcmgxMDJ0djJ0b2VhY2sxNXBiMyJ9.25Qs4HNEkHubd4_Awbd8Og';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9',//stylesheet location
    center: [0.1278,51.5074], // starting position
    zoom: 7 // starting zoom
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: 'https://raw.githubusercontent.com/linreen/linreen.github.io/master/data/lonlat_2012_V2.csv',
        dataType: "text",
        success: function(csvData) {makeGeoJSON(csvData);}
     });
});

function makeGeoJSON(csvData) {
    csv2geojson.csv2geojson(csvData, {
        latfield: 'Latitude',
        lonfield: 'Longitude',
        delimiter: ','
    }, function(err, data) {
        map.on('load', function () {

    map.addLayer({
        "id": "IDs",
        "type": "circle",
        "source": {'type': 'geojson',
                    'data': data},
        "maxzoom": 22,
        'paint': {
// make circles larger as the user zooms from z12 to z22
'circle-radius': {
'base': 0.5,
'stops': [[12, 1], [22, 4]]
},
// color circles by ethnicity, using a match expression
// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
'circle-color': '#DC143C' 
}
});
})})}