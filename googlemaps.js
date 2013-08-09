

function addKmlToMap(map, myLatLng, kmlFileName) {
    var kml;
    kml = new google.maps.KmlLayer(kmlFileName);
    kml.setMap(map);

    listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(12);
        map.setCenter(myLatLng);
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        google.maps.event.removeListener(listener);
    });
}

function initialize() {

    var myLatLng, map, listener;
    myLatLng = new google.maps.LatLng(48.800000, -123.527862);
    map = new google.maps.Map(document.getElementById("map-canvas"));
    // these are in DropBox for now, because serving from Azure lead to one of them not working at all.
    addKmlToMap(map, myLatLng, 'https://dl.dropboxusercontent.com/u/17522409/mapdata/activity_297019104-processed-v3.kml');
    addKmlToMap(map, myLatLng, 'https://dl.dropboxusercontent.com/u/17522409/mapdata/activity_280222495-processed-v25.kml');
}

google.maps.event.addDomListener(window, 'load', initialize);
