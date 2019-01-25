function initMap() {
  // Map options
  var options = {
    zoom: 15,
    center: { lat: -1.2887876, lng: 36.8182244 }
  };

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Listen for click on map
  google.maps.event.addListener(map, "click", function(event) {
    // Add marker
    addMarker({ coords: event.latLng });
    // get lat/lon of click
    var clickLat = event.latLng.lat();
    var clickLon = event.latLng.lng();

    // show in input box
    document.getElementById("lat").value = clickLat.toFixed(2);
    document.getElementById("lon").value = clickLon.toFixed(2);
  });

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
}
