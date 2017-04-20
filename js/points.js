$(document).ready(function () {

    var jsonUrl = "../testi.geojson"; // määritetään json lähde

    //var jsonUrl = "http://users.metropolia.fi/~hannutam/hsl-api/HSLn_myyntipisteet.geojson";

    /* Funktio joka tulostaa json objektit kartalle. */

    $.getJSON(jsonUrl, function (json) {
        console.log("Got the json: " + json);
        map.data.loadGeoJson(jsonUrl);

        for (i = 0; i < json.features.lenght; i++) {
            listFeature(json.features[i].properties);
        };
        console.log(json.features[1].properties);

    });


    /* Määritellään kohteen tietoikkunassa näkyvät tiedot */
    /*
        $(function listFeature(props) {
            var info = "";
            info += "<br>" + props.NIMI + ", " + props.OSOITE + ", " + props.KUNTA + ".<br>";
            $("#info").append("<p>" + info + "</p>");
        });
    */

    var contentString = "testi";

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: 
        {lat: 60.182199, lng: 24.913251},
        map: map,
        title: 'Uluru (Ayers Rock)'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

});
