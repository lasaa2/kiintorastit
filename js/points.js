$(document).ready(function () {
/*
    var jsonUrl = "../testi.geojson"; // määritetään json lähde

    //var jsonUrl = "http://users.metropolia.fi/~hannutam/hsl-api/HSLn_myyntipisteet.geojson";

    /* Funktio joka tulostaa json objektit kartalle. */
/*
    for (var i = 0; i < jsonUrl.length; i++) {
        //Note: Add own property infoString in the marker object to save info for the marker 's infowindow

        var markerProps = {
            position: new google.maps.LatLng(jsonUrl[i].lat, jsonUrl[i].lng),
            map: map,
            infoString: "Tämä on Metropolian " + jsonUrl[i].info
        };
        var marker = new google.maps.Marker(markerProps);
        var infowindow = new google.maps.InfoWindow({}); //Empty window

        marker.addListener('click', function () {
            infowindow.setContent(this.infoString);
            infowindow.open(map, this);
            map.setCenter(this.getPosition());
        });
    };

*/
    /*    
        
        $.getJSON(jsonUrl, function (json) {
            console.log("Got the json: " + json);
            map.data.loadGeoJson(jsonUrl);

            for (i = 0; i < json.features.lenght; i++) {
                listFeature(json.features[i].properties);
            };
            console.log(json.features[1].properties);

        });
    */

    /* Määritellään kohteen tietoikkunassa näkyvät tiedot */
    /*
        $(function listFeature(props) {
            var info = "";
            info += "<br>" + props.NIMI + ", " + props.OSOITE + ", " + props.KUNTA + ".<br>";
            $("#info").append("<p>" + info + "</p>");
        });
    */
    /*
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

    */
});
