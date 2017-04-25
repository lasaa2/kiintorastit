var map;
var infowindow;
var centerLatLng = {
    lat: 60.180955,
    lng: 24.927982
};
var zoomTaso = 12;

var jsonUrl = "../testi.geojson"; // määritetään json lähde
//var jsonUrl = "http://users.metropolia.fi/~hannutam/hsl-api/HSLn_myyntipisteet.geojson";

function initMap() {

    var mapCanvas = document.getElementById("map"); //$("#map")[0];
    // var centerLatLng = new google.maps.LatLng(64.4740, 25.2134);

    var mapProperties = {
        center: new google.maps.LatLng(centerLatLng),
        zoom: zoomTaso,
        disableDefaultUI: true
    };

    map = new google.maps.Map(mapCanvas, mapProperties);

    map = new google.maps.Map($("#map")[0], mapProperties);

    
    /* Funktio joka tulostaa json objektit kartalle. For-looppi. */

    $.getJSON("../testi.geojson", function (json) {
        for (var i = 0; i < jsonUrl.length; i++) {

        //    console.log(json.features[2].properties.NIMI + "," + json.features[2].properties.LAT + "," + json.features[2].properties.LON);

            // Luodaan muuttuja jossa on markkereitten tiedot
            var markerProperties = {
                position: new google.maps.LatLng(json.features[i].properties.LAT, json.features[i].properties.LON),
                map: map,
                infoString: "Tämä on HSL " + json.features[i].properties.NIMI
            };

            var marker = new google.maps.Marker(markerProperties);
            var infowindow = new google.maps.InfoWindow({});

            // Tehdään click funktio joka tulostaa infoikkunan klikattaessa markkeria
            marker.addListener('click', function () {
                infowindow.setContent(this.infoString);
                infowindow.open(map, this);
                map.setCenter(this.getPosition());
            });
        };
    });
};


/* Kaupunkihaku toiminto googlen API kautta */
/*
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: centerLatLng,
        radius: 500,
        type: ['store']
    }, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

};

*/

/* Pohjakartan tyylit */

/*
    var stylesArray = [
        {
            featureType: '',
            elementType: '',
            stylers: [
                {
                    color: ''
                },
                {
                    visibility: ''
                },
      // Add any stylers you need.
    ]
  },
        {
            featureType: '',
            // Add the stylers you need.
  }
]
*/
