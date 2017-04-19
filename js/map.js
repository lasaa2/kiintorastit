    var map;

    function initMap() {
        
        var mapCanvas = document.getElementById("map");  //$("#map")[0];
        var centerLatLng = new google.maps.LatLng(63.246755, 26.599962); 
        
        var mapProperties = {
            center: centerLatLng, 
            zoom: 6,
        };
      
        map = new google.maps.Map(mapCanvas,mapProperties);
    };