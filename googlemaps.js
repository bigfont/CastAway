

function addKmlToMap(map, kmlFileName) {
    var rooturl, kml;
    rooturl = 'http://castaway.azurewebsites.net/mapdata/';
    kml = new google.maps.KmlLayer(rooturl + kmlFileName);
    kml.setMap(map);
}

function initialize() {

    var myLatLng, map, listener;
    myLatLng = new google.maps.LatLng(48.800000, -123.527862);
    map = new google.maps.Map(document.getElementById("map-canvas"));
    addKmlToMap(map, 'kml10.kml');
    addKmlToMap(map, 'kml20.kml');
    listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(12);
        map.setCenter(myLatLng);
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        google.maps.event.removeListener(listener);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
