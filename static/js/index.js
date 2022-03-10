// show amsterdam on google maps map and init google maps services 
var userPosition = {
  lat: 000,
  lng: 000
}
var waypts = [];

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const geocoder = new google.maps.Geocoder();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 52.377956, lng: 4.897070 },
  });

  directionsRenderer.setMap(map);
  document.getElementById("submit").addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, geocoder);
  });
  document.getElementById("locationButton").addEventListener("click", () => {
    calculateUserLocation();
  });
}


// do some user location stuff
function calculateUserLocation(){
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
  
          // map.setCenter(pos);
          console.log(userPosition)
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

}

// calculate and display the route with the stopovers given by the user 
function calculateAndDisplayRoute(directionsService, directionsRenderer, geocoder) {
  const checkboxArray = document.getElementById("Stopovers");
  for (let i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray.options[i].selected) {
      geocoder.geocode({ 'address': checkboxArray.options[i].value}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log(results[0].geometry.location);
        } 
        else {
          console.log('No results found: ' + status);
        }
    })

      waypts.push({
        location: checkboxArray[i].value,
        stopover: true,
      });
    }
  }

  directionsService
    .route({
      origin: document.getElementById("start").value,
      destination: document.getElementById("end").value,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);

      const route = response.routes[0];
      const summaryPanel = document.getElementById("directions-panel");

      summaryPanel.innerHTML = "";

      // For each route, display summary information.
      for (let i = 0; i < route.legs.length; i++) {
        const routeSegment = i + 1;

        summaryPanel.innerHTML +=
          "<b>Route Segment: " + routeSegment + "</b><br>";
        summaryPanel.innerHTML += route.legs[i].start_address + " to ";
        summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
        summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
      }
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}






