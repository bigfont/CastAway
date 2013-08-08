
function initialize() {


    var myLatLng = new google.maps.LatLng(48.800000, -123.527862);


    var mapOptions = {
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map-canvas"));

    var rooturl = 'http://castaway.azurewebsites.net/mapdata/';

    var kml1 = new google.maps.KmlLayer(rooturl + 'activity_280222495-processed-v25.kml');
    kml1.setMap(map);

    // var kml2 = new google.maps.KmlLayer(rootUrl + 'activity_297019104-processed-v3.kml');
    // kml2.setMap(map);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(12);
        map.setCenter(myLatLng);
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

        google.maps.event.removeListener(listener);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
