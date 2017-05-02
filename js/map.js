var map;
var infowindow;
var centerLatLng = {
    lat: 63.344420,
    lng: 26.464051
};
var zoomTaso = 5; // Kartan zoomitaso
var markerImage = 'img/rastilippu.png'; // Marker image

/* Funktio joka muodostaa kartan */

function initMap() {

    var mapCanvas = document.getElementById("map"); //$("#map")[0];

    var mapProperties = {
        center: new google.maps.LatLng(centerLatLng),
        zoom: zoomTaso,
        disableDefaultUI: true,
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_LEFT_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
            style: google.maps.ZoomControlStyle.LARGE,
        },
        scaleControl: true,
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: false,
    };

    map = new google.maps.Map(mapCanvas, mapProperties);

    map = new google.maps.Map($("#map")[0], mapProperties);

};