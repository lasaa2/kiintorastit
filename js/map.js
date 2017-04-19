    var map;

    function initMap() {
        
        var mapCanvas = document.getElementById("map");  //$("#map")[0];
        var centerLatLng = new google.maps.LatLng(60.2632, 24.9316); 
        
        var mapProperties = {
            center: centerLatLng, 
            zoom: 10,
        };
      
        map = new google.maps.Map(mapCanvas,mapProperties);
    };