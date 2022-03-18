// define user position standard variable
var userPosition = {
  lat: 000,
  lng: 000
}


var final_stopover_names = []

var endingPoint
// show amsterdam on google maps map and init google maps services 
var geocodes_iamsterdam_places =  [['51.7943864', ' 4.704810999999999'], ['52.6403694', ' 5.0592031'], ['52.3439074', ' 4.8570176'], ['52.3434197', ' 4.8541297'], ['52.3673818', ' 5.2157515'], ['52.3603973', ' 4.8995616'], ['52.3672736', ' 5.2162132'], ['52.2549175', ' 4.757383'], ['52.4016002', ' 4.8930428'], ['52.3910528', ' 4.8908853'], ['52.3083018', ' 5.0416455'], ['52.3798901', ' 4.883336799999999'], ['52.3647798', ' 5.2111279'], ['52.3600658', ' 4.9253633'], ['52.3871283', ' 4.8700218'], ['52.0815396', ' 4.3133007'], ['52.3822645', ' 4.843486899999999'], ['52.3640434', ' 4.793434299999999'], ['52.3723609', ' 4.9142553'], ['51.5054814', ' 3.8893168'], ['52.0913359', ' 5.1017597'], ['51.7942384', ' 4.7048651'], ['52.1631406', ' 5.009053799999999'], ['52.5134881', ' 5.0472943'], ['52.3683932', ' 4.8971105'], ['52.516331', ' 5.0697284'], ['52.1935746', ' 5.122539'], ['51.906598', ' 4.4486763'], ['52.3701697', ' 5.220094'], ['51.9223307', ' 4.4773007'], ['51.0343684', ' 2.3767763'], ['51.91280769999999', ' 4.343856600000001'], ['52.372572', ' 4.878057999999999'], ['52.3670604', ' 4.8934864'], ['52.51331889999999', ' 5.0493025'], ['52.372801', ' 4.8776'], ['51.9129718', ' 4.3437503'], ['52.3745616', ' 4.9039263'], ['52.4614284', ' 4.5737203'], ['52.3672736', ' 5.2162132'], ['52.28948486750969', ' 4.828733944303695'], ['51.5463712', ' 5.0846164'], ['52.3752461', ' 4.9137949'], ['52.2936392', ' 5.1622388'], ['52.3790558', ' 4.8923039'], ['52.3691255', ' 4.841227099999999'], ['52.37119999999999', ' 4.8995411'], ['53.218806', ' 6.570236'], ['52.3738111', ' 4.8974466'], ['52.5108425', ' 5.047280499999999'], ['52.055762', ' 4.4981478'], ['51.3703785', ' 5.3409531'], ['52.055762', ' 4.4981478'], ['52.055762', ' 4.4981478'], ['52.34744269999999', ' 4.6702932'], ['52.3701898', ' 4.9053046'], ['52.055762', ' 4.4981478'], ['52.372773', ' 4.900313'], ['52.297603', ' 4.8994832'], ['52.34744269999999', ' 4.6702932'], ['52.3555299', ' 4.8933031'], ['52.3381362', ' 4.6381446'], ['51.7942384', ' 4.7048651'], ['52.3690798', ' 5.2200088'], ['52.3502213', ' 4.936596'], ['52.1681798', ' 4.8685219'], ['52.4030132', ' 4.893585799999999'], ['52.3677165', ' 4.9087828'], ['52.34446939999999', ' 4.9498282'], ['52.45251529999999', ' 4.652013999999999'], ['52.2676846', ' 4.540143'], ['52.0960659', ' 4.9673099'], ['51.98362969999999', ' 5.8836605'], ['52.3750868', ' 4.8962854'], ['51.2492295', ' 5.7041225'], ['52.0891064', ' 5.124784'], ['52.3337436', ' 4.9083536'], ['52.3624422', ' 4.8980517'], ['52.3703642', ' 5.2212727'], ['52.2392943', ' 4.5256143'], ['51.987407', ' 5.8242034'], ['52.37119209999999', ' 4.890069899999999'], ['52.3374736', ' 4.8967806'], ['52.6262337', ' 4.7527918'], ['52.6314727', ' 4.7505001'], ['52.3742111', ' 4.9123385'], ['52.4950663', ' 4.7680499'], ['52.3676804', ' 4.9047887'], ['52.3775402', ' 5.7869622'], ['52.3791952', ' 4.893021099999999'], ['51.8196303', ' 4.7750414'], ['52.3658482', ' 4.8969404'], ['52.368238', ' 4.9242181'], ['52.3061973', ' 4.9061335'], ['52.3511344', ' 4.9335203'], ['52.3762704', ' 4.900167499999999'], ['52.4011456', ' 4.896287699999999'], ['52.3512982', ' 4.849448'], ['52.4327588', ' 4.8344752'], ['52.37453420000001', ' 4.8839705'], ['52.36636799999999', ' 4.9110099'], ['52.3397936', ' 4.9449371'], ['52.5277989', ' 4.9282898'], ['50.9542769', ' 5.4721009'], ['52.3541614', ' 4.9123378'], ['52.3662648', ' 4.916000299999999'], ['52.3484804', ' 4.8668721'], ['52.3434197', ' 4.8541297'], ['52.3700017', ' 4.8841768'], ['52.3687548', ' 5.2143306'], ['52.34491269999999', ' 4.853089'], ['52.516126', ' 5.0678022'], ['52.2246595', ' 5.1720489'], ['52.5399596', ' 4.8388645'], ['52.055762', ' 4.4981478'], ['52.3795217', ' 4.886538499999999'], ['52.465359', ' 4.577223'], ['52.3683956', ' 4.8973055'], ['52.5174236', ' 5.0705569'], ['52.37639', ' 4.887459499999999'], ['52.5399596', ' 4.8388645'], ['52.5108554', ' 5.0458456'], ['52.3438644', ' 4.944865699999999'], ['52.4206999', ' 4.8326179'], ['52.3523849', ' 4.883166399999999'], ['47.63967400000001', ' 6.863849'], ['52.37884510000001', ' 4.8816871'], ['51.7942384', ' 4.7048651'], ['52.3505234', ' 4.8751944']]


var addresses_iamsterdam_places = ['Damplein 5', 'Roode Steen 1', 'Stadionplein ', 'Olympisch Stadion 2', 'Schipperplein ', 'Frederiksplein t.o. Nederlandse Bank ', 'Koetsierbaan ', 'Kudelstaartseweg 16', 'ms. van Riemsdijkweg 31', 'Silodam ', 'Slijkstraat ', 'Lindengracht 149-163', 'Hengelostraat ', 'Linnaeusstraat/Oosterpark ', 'KlÃ¶nneplein 4-6', 'Tournooiveld 1', 'Wiltzanghlaan 60', 'Ookmeerweg/Reimerwaalstraat ', 'Kattenburgerplein 1', 'Bierkade 7', 'Kanaalstraat 80', 'Damplein 1', 'Straatweg 25', 'Jan Nieuwenhuizenplein 5', 'Staalstraat 7', 'Oorgat 1', 'Nieuw-Loosdrechtsedijk 150', 'Voorhaven 127', 'De Diagonaal ', 'Stadhuisplein ', 'Duinkerken ', 'Kwakelsteeg 5', 'Rozengracht 147-181', 'Muntplein ', 'Achterhaven 105', 'Rozengracht 184', 'Kwakelsteeg 2-4', 'Prins Hendrikkade 108-114', 'Seinpostweg 34', 'Koetsierbaan ', 'Brugnummer 242 bij Amstel ', 'Transvaalplein 37', 'Kattenburgerstraat 5', 'Westwalstraat ', 'Herengracht 1', 'Jan Evertsenstraat 201', 'Kloveniersburgwal 29', 'Forum ', 'Trompetterssteeg ', 'Doelland 35', 'Dorpsstraat ', 'Molenpad 1', 'Dorpsstraat ', 'Dorpsstraat ', 'Fortwachter 1', 'Nieuwe Uilenburgerstraat 91', 'Dorpsstraat ', 'Nieuwmarkt 4', 'Amstelzijde 55', 'Fortwachter 1', 'Albert Cuypstraat ', 'Cruquiusdijk 27', 'Damplein 1', 'De Diagonaal 199', 'Middenweg 195', 'Amstelkade ', 'ms. van Riemsdijkweg 6', 'Wertheimpark ', 'Esplanade de Meer 95-187', 'Rijksweg 134', 'Keukenhof 1', 'Kasteellaan 1', 'Onderlangs 21-22', 'Damrak 243', 'Stationsplein ', 'Herenstraat 4', 'Jan Vroegopsingel 7', 'Amstelveld ', 'Stadhuispromenade 1', 'Oude Herenweg 16B', 'De Vrijheidslaan 1', 'Nieuwezijds Voorburgwal 280', 'Gaasterlandstraat 3-5', 'Vondelstraat 1', 'Waagplein ', 'Oosterdok 2', 'Vlietsend ', 'Mr. Visserplein 3', 'Laan 24-28', 'J.C. Brouwersgracht 32', 'Kerkbuurt 35', 'Rembrandtplein ', 'Oostenburgergracht 75', 'Amsteldijk Noord 55', 'Middenweg 72', 'Zeedijk 1', 'Tt. Neveritaweg 15', 'Hoofddorpplein ', 'Zuiddijk ', 'Prinsengracht/Westerkerk ', 'Plantage Middenlaan 24', 'Akkerstraat 32', 'Nekkerweg 24', 'Weidestraat 37', 'Wibautstraat ', 'Plantage Kerklaan 38-40', 'Olympiaplein 31', 'Olympisch Stadion 5', 'Keizersgracht 324', 'Olstgracht ', 'Laan der Hesperiden 118', 'Oorgat 10', "'s - Gravenlandseweg 2", 'Westdijk 46', 'Dorpsstraat ', 'Noordermarkt 45', 'Forteiland 10', 'Staalstraat 7B', 'Zeevangszeedijk 9', 'Keizersgracht 123', 'Westdijk 46', 'Schepenmakersdijk 16', 'Zaaiersweg 15', 'Hemkade 18', 'Roelof Hartplein 50', 'Belfort ', 'Karthuizersstraat 89-171', 'Damplein 1', 'Apollolaan ']


// initialize some stuff
function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const geocoder = new google.maps.Geocoder();
  calculateUserLocation();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 52.377956, lng: 4.897070 },
  });

  document.getElementById("showAllPlaces").addEventListener("click", () => {
      for (let i = 1; i < 1000; i++) {
    new google.maps.Marker({
      position: new google.maps.LatLng(geocodes_iamsterdam_places[i][0], geocodes_iamsterdam_places[i][1]),
      map,
      title: "Hello World!",
    });
  }
  });

  directionsRenderer.setMap(map);
  document.getElementById("submit").addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, geocoder);
  });
  document.getElementById("locationButton").addEventListener("click", () => {
    calculateUserLocation();
    calculateStartingGeoLocations(geocoder, document.getElementById("start").value)
    calculateEndingGeoLocations(geocoder, document.getElementById("end").value)
  });
}


// fore each route give the lonLat given a certain fraction of the route
function calculateInterpolateCoordinates(start, end){
  central_station = {lat: 52.37926581368672, lng: 4.900218354405682}

  // calculate interpolates of starting and ending
  list_of_interpolates = []
  for (let i = 0.05; i < 1; i = i + 0.05) {
    list_of_interpolates.push(google.maps.geometry.spherical.interpolate(start, end, i))
  }

  test = google.maps.geometry.spherical.computeDistanceBetween(
    list_of_interpolates[0], new google.maps.LatLng(geocodes_iamsterdam_places[0][0], geocodes_iamsterdam_places[0][1])
    )
  

    // calculate distance between interpolates and stopovers
  var stopover_geolocations = []
  stopover_names = []
  for (let i = 0; i < list_of_interpolates.length; i++){

    // calculate for each interpolates the closest stopover
    local_list_of_distances = []
    for (let j = 0; j < 100; j++){
      local_list_of_distances.push(google.maps.geometry.spherical.computeDistanceBetween(
        list_of_interpolates[i], new google.maps.LatLng(geocodes_iamsterdam_places[j][0], geocodes_iamsterdam_places[j][1])
        ))
    } 
    interpolate_min = Math.min.apply(Math, local_list_of_distances)
    index_of_minDist_stopover = local_list_of_distances.indexOf(interpolate_min, 0)
    stopover_geolocations.push(geocodes_iamsterdam_places[index_of_minDist_stopover])
    stopover_names.push(addresses_iamsterdam_places[index_of_minDist_stopover])
  }

  final_stopover_names = [...new Set(stopover_names)];
  final_stopover_geolocations = [...new Set(stopover_names)];



  }
  
  function calculateStartingGeoLocations(geocoder, adress){
    geocoder.geocode({ 'address': adress}, function (results, status) {
      if (adress == "Current Location"){
        calculateUserLocation()
      }
      else if (status == google.maps.GeocoderStatus.OK) {
        startingPoint = results[0].geometry.location
      } 
      else {
        console.log('No results found: ' + status);
      }
  })}

  function calculateEndingGeoLocations(geocoder, adress){
    geocoder.geocode({ 'address': adress}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        endingPoint = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
          
          results[0].geometry.location

      } 
      else {
        console.log('No results found: ' + status);
      }
  })}



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
  var waypts = [];

  if (document.getElementById("start").value == "Current Location"){
    calculateUserLocation()
    startingPoint = userPosition
  }
  // else {
  //   startingPoint = calculateStartingGeoLocations(geocoder, document.getElementById("start").value)
  // }

  console.log(startingPoint)
  console.log(endingPoint)

  calculateInterpolateCoordinates(startingPoint, endingPoint)

  const checkboxArray = final_stopover_names
  for (let i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray[i]) {
      geocoder.geocode({ 'address': checkboxArray[i]}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        } 
        else {
          console.log('No results found: ' + status);
        }
    })

      waypts.push({
        location: checkboxArray[i],
        stopover: true,
      });
    }
  }

  console.log('punt 1' + startingPoint)
  console.log('punt 2' + endingPoint)
  directionsService
    .route({
      origin: startingPoint,
      destination: endingPoint,
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






