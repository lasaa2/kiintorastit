var map;
var infowindow;
var centerLatLng = {
    lat: 60.180955,
    lng: 24.927982
};
var zoomTaso = 8;

var jsonUrl = "../testi.geojson"; // määritetään json lähde
//var jsonUrl = "http://users.metropolia.fi/~hannutam/hsl-api/HSLn_myyntipisteet.geojson";

var myFile = "../testi.csv" //document.getElementById("myFile"); // Get input file

var data = "../testi2.json";

function initMap() {

    var mapCanvas = document.getElementById("map"); //$("#map")[0];

    var mapProperties = {
        center: new google.maps.LatLng(centerLatLng),
        zoom: zoomTaso,
        disableDefaultUI: true
    };

    map = new google.maps.Map(mapCanvas, mapProperties);

    map = new google.maps.Map($("#map")[0], mapProperties);

    /* Funktio joka tulostaa json objektit kartalle. For-looppi. */

    $.getJSON(data, function (json) {
        for (var i = 0; i < data.length; i++) {

            console.log(json[i].KARTTA + "," + json[i].LAT + "," + json[i].LON);

            // Luodaan muuttuja jossa on markkereitten tiedot
            var markerProperties = {
                position: new google.maps.LatLng(json[i].LAT, json[i].LON),
                map: map,
                infoString: 'Kiintorastikartta: ' + json[i].KARTTA + '<br>Seura: ' + json[i].SEURA + '<br>Mistä kartta? ' + json[i].LISA + '<br><a href="' + json[i].WEB + '" target=_blank">Linkki karttaan</a>'
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


/* Pelkkä csv to json */
/*
    $.ajax({
        url: myFile,
        async: false,
        success: function (csvd) {
            var items = $.csv.toObjects(csvd);
            jsonobject = JSON.stringify(items);
        },
        dataType: "text",
        complete: function () {
            // call a function on complete
            
        }
    });
    
    */
