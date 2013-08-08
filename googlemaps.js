


function initialize() {


    var myLatLng = new google.maps.LatLng(48.800000, -123.527862);


    var mapOptions = {
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map-canvas"));

    var activity1 = new google.maps.KmlLayer('http://castaway.azurewebsites.net/mapdata/activity_280222495.kml'); //-processed-v18
    var activity2 = new google.maps.KmlLayer('http://castaway.azurewebsites.net/mapdata/activity_297019104.kml'); //-processed-v3

    activity1.setMap(map);
    activity2.setMap(map);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(12);
        map.setCenter(myLatLng);
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

        google.maps.event.removeListener(listener);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
