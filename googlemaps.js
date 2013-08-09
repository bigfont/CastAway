

function addKmlToMap(map, kmlFileName) {
    var kml;
    kml = new google.maps.KmlLayer(kmlFileName);
    kml.setMap(map);
}

function initialize() {

    var myLatLng, map, listener;
    map = new google.maps.Map(document.getElementById("map-canvas"));
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

    // these are in DropBox for now, because serving from Azure lead to one of them not working at all.
    addKmlToMap(map, 'https://dl.dropboxusercontent.com/u/17522409/mapdata/activity_combined-v2.kml');
}

google.maps.event.addDomListener(window, 'load', initialize);
