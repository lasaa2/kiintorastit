    var map;

    function initMap() {
        
        var mapCanvas = document.getElementById("map");  //$("#map")[0];
        var centerLatLng = new google.maps.LatLng(64.4740, 25.2134); 
        
        var mapProperties = {
            center: centerLatLng, 
            zoom: 6,
        };
      
        map = new google.maps.Map(mapCanvas,mapProperties);
    };