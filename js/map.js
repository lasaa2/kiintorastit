var map;
var infowindow;
var centerLatLng = {
    lat: 63.344420,
    lng: 26.464051
};
var zoomTaso = 5;

var points = "../aineisto.json"; // Muuttuja jossa on päivitetty kiintorastiaineisto

function initMap() {

    var mapCanvas = document.getElementById("map"); //$("#map")[0];

    var mapProperties = {
        center: new google.maps.LatLng(centerLatLng),
        zoom: zoomTaso,
        disableDefaultUI: true,
        mapTypeControl: true,
          mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_LEFT_CENTER
          },
          zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER
          },
          scaleControl: true,
          streetViewControl: false,
          streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
          },
          fullscreenControl: true,
    };

    map = new google.maps.Map(mapCanvas, mapProperties);

    map = new google.maps.Map($("#map")[0], mapProperties);

    /* Funktio joka tulostaa json objektit kartalle. For-looppi. */

    $.getJSON(points, function (json) {
            for (var i = 0; i < points.length; i++) {

                console.log(json[i].KARTTA + "," + json[i].LAT + "," + json[i].LON);

                // Luodaan muuttuja jossa on markkereitten tiedot
                var markerProperties = {
                    position: new google.maps.LatLng(json[i].LAT, json[i].LON),
                    map: map,
                    infoString: 'Kiintorastikartta: ' + json[i].KARTTA + '<br>Seura: ' + json[i].SEURA + '<br>Mistä kartta? ' + json[i].LISAA + '<br><a href="' + json[i].WEB + '" target=_blank">Linkki karttaan</a>'
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
