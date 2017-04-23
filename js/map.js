    var map;

    function initMap() {

        var mapCanvas = document.getElementById("map"); //$("#map")[0];
        var centerLatLng = new google.maps.LatLng(64.4740, 25.2134);

        var mapProperties = {
            center: centerLatLng,
            zoom: 6,
            disableDefaultUI: true
        };

        map = new google.maps.Map(mapCanvas, mapProperties);
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