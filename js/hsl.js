$(document).ready(function () {

   // var jsonUrl = "http://data.hslhrt.opendata.arcgis.com/datasets/8baa56336dc74a279c0f0a32998577d4_0.geojson";
    jsonUrl = "http://users.metropolia.fi/~hannutam/hsl-api/HSLn_myyntipisteet.geojson";
    
    $("button").click(function () {
    $.getJSON(jsonUrl, function (json) {
        console.log("Got the json: " + json);
        map.data.loadGeoJson(jsonUrl);
        
        for (i = 0; i< json.features.lenght; i++) {
            listFeature(json.features[i].properties);
        };

        });
    }); 

    $(function listFeature (props) {
    var info = "";
    info += "<br>" + props.NIMI + ", " + props.OSOITE + ", " + props.KUNTA + ".<br>";       
    $("#info").append("<p>" + info + "</p>");        
    });
});