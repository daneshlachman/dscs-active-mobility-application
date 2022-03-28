// define user position standard variable
var userPosition = {
  lat: 000,
  lng: 000
}

var endingPoint

// show amsterdam on google maps map and init google maps services 
var geocodes_iamsterdam_places =  [['52.3745616', '4.9039263'], ['52.3910528', '4.8908853'], ['51.5463712', '5.0846164'], ['52.37119999999999', '4.8995411'], ['52.3600658', '4.9253633'], ['52.3738111', '4.8974466'], ['52.3822645', '4.843486899999999'], ['52.3640434', '4.793434299999999'], ['52.3701898', '4.9053046'], ['52.3683932', '4.8971105'], ['52.3603973', '4.8995616'], ['52.3439074', '4.8570176'], ['52.3434197', '4.8541297'], ['52.372801', '4.8776'], ['52.28948486750969', '4.828733944303695'], ['52.3752461', '4.9137949'], ['52.3691255', '4.841227099999999'], ['52.3676804', '4.9047887'], ['52.372572', '4.878057999999999'], ['52.3658482', '4.8969404'], ['52.3670604', '4.8934864'], ['52.3438644', '4.944865699999999'], ['52.37453420000001', '4.8839705'], ['52.3505234', '4.8751944'], ['52.3529622', '4.882414'], ['52.36636799999999', '4.9110099'], ['52.37884510000001', '4.8816871'], ['52.4016002', '4.8930428'], ['52.3798901', '4.883336799999999'], ['52.1681798', '4.8685219'], ['52.34446939999999', '4.9498282'], ['52.3705963', '4.9161559'], ['52.3337436', '4.9083536'], ['52.3624422', '4.8980517'], ['51.987407', '5.8242034'], ['52.372773', '4.900313'], ['52.3484804', '4.8668721'], ['52.3762704', '4.900167499999999'], ['52.3555299', '4.8933031'], ['52.3700017', '4.8841768'], ['52.4030132', '4.893585799999999'], ['52.3397936', '4.9449371'], ['52.3677165', '4.9087828'], ['52.3541614', '4.9123378'], ['52.3795217', '4.886538499999999'], ['52.3434197', '4.8541297'], ['52.3750868', '4.8962854'], ['52.34491269999999', '4.853089'], ['51.2492295', '5.7041225'], ['52.4011456', '4.896287699999999'], ['52.3683956', '4.8973055'], ['52.3512982', '4.849448'], ['52.37639', '4.887459499999999'], ['52.3511344', '4.9335203'], ['52.3662648', '4.916000299999999'], ['52.3742111', '4.9123385'], ['52.368238', '4.9242181'], ['52.37119209999999', '4.890069899999999'], ['52.3374736', '4.8967806']]

var addresses_iamsterdam_places = ['Prins Hendrikkade 108-114,', 'Silodam', 'Transvaalplein 37,', 'Kloveniersburgwal 29,', 'Linnaeusstraat/Oosterpark', 'Trompetterssteeg', 'Wiltzanghlaan 60,', 'Ookmeerweg/Reimerwaalstraat', 'Nieuwe Uilenburgerstraat 91,', 'Staalstraat 7,', 'Frederiksplein t.o. Nederlandse Bank', 'Stadionplein', 'Olympisch Stadion 2,', 'Rozengracht 184,', 'Brugnummer 242 bij Amstel', 'Kattenburgerstraat 5,', 'Jan Evertsenstraat 201,', 'Mr. Visserplein 3,', 'Rozengracht 147-181,', 'Rembrandtplein', 'Muntplein', 'Zaaiersweg 15,', 'Prinsengracht/Westerkerk', 'Apollolaan', 'Roelof Hartplein 50,', 'Plantage Middenlaan 24,', 'Karthuizersstraat 89-171,', 'ms. van Riemsdijkweg 31,', 'Lindengracht 149-163,', 'Amstelkade', 'Esplanade de Meer 95-187,', 'Kattenburgerplein 1,', 'Jan Vroegopsingel 7,', 'Amstelveld', 'De Vrijheidslaan 1,', 'Nieuwmarkt 4,', 'Olympiaplein 31,', 'Zeedijk 1,', 'Albert Cuypstraat', 'Keizersgracht 324,', 'ms. van Riemsdijkweg 6,', 'Akkerstraat 32,', 'Wertheimpark', 'Wibautstraat', 'Noordermarkt 45,', 'Olympisch Stadion 5,', 'Damrak 243,', 'Laan der Hesperiden 118,', 'Stationsplein', 'Tt. Neveritaweg 15,', 'Staalstraat 7B,', 'Hoofddorpplein', 'Keizersgracht 123,', 'Middenweg 72,', 'Plantage Kerklaan 38-40,', 'Oosterdok 2,', 'Oostenburgergracht 75,', 'Nieuwezijds Voorburgwal 280,', 'Gaasterlandstraat 3-5,']

var tags_iamsterdam_places = [['amsterdam school', 'architecture', 'attractions', 'city centre', 'guided tours', 'historical', 'plantage'], ['architecture', 'city centre', 'westerpark'], ['NaN'], ['architecture', 'city centre', 'historical'], ['architecture', 'historical', 'monument', 'oost'], ['city centre', 'historical'], ['hostel'], ['architecture', 'west'], ['architecture', 'church or place of worship', 'city centre', 'historical', 'monument', 'plantage'], ['NaN'], ['architecture', 'canal ring', 'monument'], ['NaN'], ['NaN'], ['NaN'], ['architecture', 'attractions', 'canal ring', 'free', 'historical', 'monument'], ['attractions', 'off the beaten track', 'oostelijke eilanden'], ['architecture', 'church or place of worship', 'west'], ['architecture', 'church or place of worship', 'city centre', 'free with I amsterdam city card', 'historical', 'monument', 'museum', 'plantage'], ['architecture', 'attractions', 'canal ring', 'historical', 'jordaan', 'monument'], ['NaN'], ['architecture', 'city centre', 'historical', 'monument'], ['NaN'], ['9 streets', 'architecture', 'attractions', 'canal ring', 'jordaan', 'monument'], ['amsterdam school', 'architecture'], ['amsterdam school', 'architecture'], [' architecture', 'attractions', 'City Card time slot', 'monument', 'off the beaten track', 'plantage'], ['architecture', 'attractions', 'canal ring', 'historical', 'jordaan', 'monument'], ['NaN'], ['architecture', 'canal ring', 'historical', 'jordaan'], ['amsterdam school', 'architecture'], ['NaN'], ['attractions', 'historical', 'oostelijke eilanden'], ['nature', 'off the beaten track', 'south'], ['NaN'], ['amsterdam school', 'architecture'], ['architecture', 'attractions', 'city centre', 'historical', 'monument', 'terrace'], ['NaN'], ['architecture', 'city centre', 'historical', 'monument'], ['architecture', 'de pijp', 'monument', 'south', 'typically dutch'], ['9 streets', 'canal ring', 'jordaan', 'museum', 'music venue', 'venue rental'], ['NaN'], ['NaN'], ['historical', 'monument'], ['NaN'], ['architecture', 'canal ring', 'historical', 'jordaan'], ['NaN'], ['amsterdam school', 'architecture', 'attractions', 'city centre', 'free', 'guided tours'], ['NaN'], ['city centre', 'cycling'], ['attractions', 'budget', 'market', 'ndsm', 'off the beaten track', 'vintage'], ['city centre', 'design shop', 'interior shop', 'plantage', 'shopping', 'shops'], ['amsterdam school', ' architecture'], ['city centre'], ['attractions', 'city park', 'historical', 'nature', 'off the beaten track'], ['all kids events', 'nature', 'plantage'], ['all kids events', 'attractions', 'city centre', 'city park', 'oostelijke eilanden', 'plantage', 'terrace'], ['dinner', ' restaurants'], ['NaN'], ['theatres']]

var place_info_iamstedam_places = ['The Scheepvaarthuis (Shipping House) is considered a masterpiece of the “Amsterdamse School” architectural style. It was built between 1912 and 1916 by architect Van der Mey, to be used as a head office by Amsterdam’s most prominent shipping companies. The interior is extraordinarily beautiful, featuring works by Krop, Kramer and De Klerk, among other artists.', 'The Silodam is a modern apartment building located on the embankment between the Houthavens (timber docklands) and the IJ River. The striking design by MVRDV architects is reminiscent of haphazard chest of draws, thanks to the 17 different styles and colours of cladding used on the façade.', "Where Betondorp is linked to Johan Cruyff, the Transvaalbuurt is inextricably linked to other Ajax players. The neighbourhoods of Ajacieden Keizer, Hulshoff and Suurbier were also frequented by Cruyff and where Bertus Hoogendam and Bennie Muller grew up. Cruyff's peers Piet Keizer, Barry Hulshoff and Wim Suurbier often met here for a game of street football. The level was so high that Cruijff often wanted to join, and no one expected that they would all later play together in Ajax and for the Netherlands.", 'The Trippenhuis (Trip House) was built in 1666 for two wealthy brothers named Lodewijk and Hendrick Trip. At 22 metres wide, it is the most spacious residence in Amsterdam. The house was designed by Justus Vingboons, the younger brother of the better-known Philip Vingboons. The two designed a number of different houses in Amsterdam for VOC (Dutch East India Company) administrators and well-off merchants.', 'The Netherlands officially abolished slavery in the colonies of Suriname and the Dutch Antilles in July 1863. In 2002 (139 years later), Surinamese sculptor Erwin de Vries was selected to design a memorial for this dark period. The sculpture is located in the Oosterpark and is made up of three elements. The first represents slavery’s dark and dramatic history, the second represents breaking through the wall of resistance in the modern day, and the third element represents the longing for freedom and a better future.', 'The Trompettersteeg is Amsterdam’s narrowest street at only 100 centimetres wide. Despite its small size, it’s one of the busiest alleys in Amsterdam thanks to its location in the middle of the Red Light District.', 'Housed in an old school building, WOW combines a hostel with temporary housing for newly-graduated artists. Come to WOW for a\ndynamic art programme of exciting exhibitions, music and fashion shows.\n', 'The WoZoCo apartments (also known as Oklahoma) are situated in Osdorp, on the southwest edge of Amsterdam. These apartments for the elderly are of special architectural interest. Certain blocks stick out of the flat at crazy angles with huge overhangs, seeming to defy gravity.\n', ' ', "This house is a distinguished example of a house from the Dutch Golden Age. It is one of the few remains of Het Staalhof previously located here. Rembrandt's painting De Staalmeesters portrays the drapers at work in this house.", ' ', ' ', "Who doesn't remember the opening minute of the World Cup finals in 1974? Johan Cruyff was playing around the centre line where he started to dribble and onto the German number 16 where he is taken down by Uli Hoeness. According to this picture, however, that seems to be his compatriot Berti Vogts.", 'From 1639 to 1658 Rembrandt lived and worked in his house on the Jodenbreestraat, the current location of the Rembrandthuis Museum. In 1658 he had to sell the house due to financial problems. Rembrandt then moved with Hendrickje Stoffels, his son Titus and daughter Cornelia to this house where he opened an art dealership and was able to earn some money.', 'One of Amsterdam’s many bridges is the beautiful Magere Brug, known to English speakers at the Skinny Bridge. This wooden drawbridge was once so narrow that it was hard for two pedestrians to pass each other. To cope with increasing traffic on the Amstel, a wider bridge replaced the narrow original in 1871.', 'The Marineterrein is a historic part of Amsterdam that fulfils a variety of functions: cultural, maritime and commercial.', 'Moroccan mosque.', 'Dating back to 1675, the Portuguese Synagogue is one the world’s largest synagogues. Its architect, Elias Bouwman, was supposedly inspired by the Temple of Solomon. Regardless of the source of inspiration, it has become one of Amsterdam’s greatest treasures. ', ' ', ' ', 'The Munttoren (mint tower) was once part of the Regulierspoort which consisted of a gate with a tower on each side. It was built between 1480 and 1487 as part of the medieval city wall. Back in the 17th century, the tower was used to mint coins.', 'This is the former elementary school where Johan Cruyff and brother Henny went. Since 1926 this building served as one of the most important elementary schools for the Betondorp district. Built according to the Amsterdam School style, the reformed Groen van Prinster School was also housed here as was the 5th Montessori School. Due to budget cuts, this school closed in 2013 to make room for living and working space.', "Designed by Amsterdam-born artist Karin Daan in 1979, Amsterdam's Homomonument (gay monument) was the first of its kind. It was commissioned by the Homomonument society and was officially unveiled in September 1987 at the Westermarkt.", 'Het Muzenplein is a small, conclealed garden in Amsterdam South. It features the work of renowned artist Hildo Krop who was part of the Amsterdam School movement. ', 'Situated on the Roelof Hartplein, Het Nieuwe Huis was built and completed in 1928 to improve the living situation of single people. Architect Barend van den Nieuwen Amstel designed this complex with 169 apartments, a number of shops, a library and a post office. ', "Once a grand theatre, the Hollandsche Schouwburg played a dark role in Amsterdam's history when it became the main deportation centre for Jews during the Holocaust. The Hollandsche Schouwburg now serves as a monument to honour the Dutch Jews who were killed in the Second World War.", "The largest of the Jordaan's garden courtyards (hofjes) is the Karthuizerhofje. Located at Karthuizersstraat 89–171, this courtyard was built in the middle of the 17th century as a widow's hospice.", "You'll find the largest image of Anne Frank in Amsterdam, possibly the world, on the wall of the Welding Shed at NDSM. Brazilian artist Eduardo Kobra transformed the empty wall into a vibrant mural using more than 450 spray cans and 35 litres of paint. What a spectacular result!", 'Many years ago, hofjes (almshouses) served to house and care for the elderly. Today, their remaining garden courtyards are an oasis of tranquility hidden behind the hustle and bustle of Amsterdam’s streets. One of these is the Suykerhofje, built in 1670 by Pieter Jansz Suykerhof.', 'The P.L. Kramer Bridge was designed by architect Piet Kramer while he worked as the aesthetic advisor for the Municipality of Amsterdam in the early 1920s. This bridge built in the style of the Amsterdam School, goes over the Noorder Amstel canal next to the Amsteldijk. ', 'On the grounds of De Meer is a residential area with links to the past. Stadion De Meer has been the home of Ajax for 62 years. In 1996 the stadium moved to make room for a residential area where many historical traces can be found. Street names refer to the stadiums where Ajax played legendary games and there are bridges named after Ajax players from the 1970s. While the stadium has disappeared, the entire district is an ode to the club, The Esplanade in particular.', 'The Amsterdam was an 18th-century VOC (Dutch East India Company) vessel which was used as a cargo ship. The Amsterdam has been moored next the National Maritime Museum since 1991. This boat is actually a replica - the original was wrecked during a violent storm on its way to the Far East in 1749. You can visit the Amsterdam with a ticket of the National Maritime Museum.', "Amstelglorie is a large garden park where you'll find an enormous amount of allotments. Cultivated by enthusiastic gardeners from Amsterdam, these allotments are home to small vegetable gardens, fruit trees, ornamental gardens and even ponds here. The park is best explored on foot or by bike where you can take in the play forest, a buzzy bee colony, and much more. It's a wonderful place for people woth green fingers!", ' ', 'Constructed in 1921 in the Amsterdam School style, this neighbourhood runs from the Berlage bridge, past the first skyscraper ever erected in the Netherlands, and ends at the southern district of the city.', 'Amsterdam’s ‘House of Weights’, known locally as De Waag, is a remarkable monument situated on the Nieuwmarkt.', 'Johan Cruyff played football with Marco van Basten often for recovery purposes after injuries. The number of hours that Cruyff and Van Basten have faced each other here is unknown but there must have been many. Even during periods when neither of them was under contract to Ajax, the two met on the Swift fields frequently under the watchful eye of the well-known physiotherapist Reinier van Dantzig.', ' ', 'André Hazes (30 June 1951 – 23 Sept 2004) was one a well-loved Dutch singer. His speciality was the levenslied (life song), a type of emotional folk music about everyday life sung in Dutch. Hazes was one of the most successful and prolific singers of this genre, with 31 albums and 54 singles. Exactly one year after his death, his statue was placed on the Albert Cuypstraat in the Pijp.', 'The impressive architecture, spacious capacity and historical character make Felix Meritis one of Amsterdam’s most inspiring venues. The building is located in the middle of Amsterdam’s Canal Ring, recognised by UNESCO as a World Heritage Site.', 'Housing in Amsterdam is expensive, but there are options. Student housing provider DUWO is currently renting out affordable container houses. This initiative will stop in 2020 when a further development stage will see a number of vacant properties allocated to refugees.', "This was the former home of the Cruijff family and the place where Johan spent his formative years. More than a year before the birth of Johan, the Cruijff family moved from the Jordaan to this house in Betondorp. Though it looks small, the house was apparently large enough for the family's greengrocer business. Opposite the house, you'll find 'Het Poortje' which is where Johan and his brother Henny played football when it rained. It was inevitable that a window would be smashed.", 'This monument was created by Dutch writer and artist Jan Wolkers, in memory of the many victims of Auschwitz. The monument is made up of broken mirrors and can be found in the Wertheimpark. According to Wolkers, the mirrors represent the thought that “heaven is no longer unbroken since Auschwitz”. A memorial service held at the moment every year on the last Sunday in January.', ' ', ' ', 'Through sport and play children become fitter, they learn to interact with others and they develop. The Cruyff Foundation was set up to encourage children to be active, especially those children who need it a little bit more. Every week they help thousands of children worldwide be more active and organise many sporting events. So far more than 200 Cruyff Courts have been created worldwide.', "Beurs van Berlage is the ideal meeting place in the heart of Amsterdam. Conferences, events, exhibitions, flexible workplaces but also catering and several businesses are located here. For example, the Tony's Chocolonely super store is located inside our building, but also the New York Film Academy Café, Bistro Berlage, Sherlocked, Holland Rent a Bike and Meet Berlage. With an ever changing exposition in the expo area, the Beurs van Berlage is a true hotspot since 1903.", "The Johan Cruyff Institute offers a number of training courses for athletes specialising in (master) courses for the business and management side of the sports world. 'My vision of sports management is fairly simple. I think that more people with a passion for sport should lead sports organisations', says Cruijff. It follows then that training courses offered are aligned with his vision.\n", "Since 2001, Stationsplein at Amsterdam's Central Station boasts the world's first bicycle flat. The building has room for 2500 bicycles, and the top level offers a beautiful view of the surrounding area.", 'This cavernous industrial building at NDSM Wharf hosts one of the biggest and best flea markets in Europe once a month, recommended for anyone who loves a bargain.', 'EAT - DRINK - SHOP - THINK.\nHôtel Droog is a cultural hotspot in the field of design in the centre of Amsterdam.\n', 'The Hoofdorpplein was built in 1926 by Joan Melchior van der Meij and Co Franswa, and is a exemplary case of Amsterdam School architecture. ', ' ', 'The Huize Frankendael is a cultural hotspot for business and culture in Amsterdam. The complex comprises a brasserie, culture barn, music salon, high-tech boardroom, art room and a lush green garden with a bright terrace. The Huize Frankendael hosts various exhibitions, workshops, presentations, kids craft days, wedding ceremonies, scavenger hunts, films, inspirational meetings and informal theatrical performances. An intimate living room style atmosphere provides all the right ingredients for real contact and good discussion. ', "The Butterfly Pavilion is a great place to spend a cold, rainy afternoon in Amsterdam. Located in ARTIS Amsterdam Royal Zoo, there are over a thousand butterflies flying freely in the 1,000 m2 tropical interior. Amsterdam's Butterfly Pavilion is the largest in the Netherlands, and is a delight for all ages.", 'A public square overlooking the city is what architect Renzo Piano envisioned when he designed the NEMO Science Museum building. His vision has been a huge success. NEMO Science Museum has the largest roof terrace in all Amsterdam, where you can enjoy a magnificent view of the historic city centre, 22 metres above water level. ', 'A creative hub in a former theatre, featuring exhibitions by contemporary artists, fashion shows and special movie nights. You can also pop by for breakfast, lunch and state-of-theart coffee every day, and Friday evening for dinner.\n', 'In about 1647 Rembrandt drew View of the Nieuwezijds Voorburgwal in black chalk here. With a bit of imagination, you may well get a glimpse of the same magical image that Rembrandt must have seen. Perhaps you make your own masterpiece!', 'A fun, creative hotspot for art and culture. Featuring an organic restaurant and the Old School Podium, it’s an inspiring place where cultural activities, conferences and parties are organised.\n']

var names_info_iamstedam_places = ['Scheepvaarthuis (Shipping House)', 'Silodam', 'Transvaalplein', 'Trippenhuis (Trip House)', 'Slavernijmonument (slavery monument)', 'Trompettersteeg (narrowest street in Amsterdam)', 'WOW', 'WoZoCo (Oklahoma)', 'Uilenburger Sjoel', 'The Drapers Guild', 'Walraven van Hallmonument', 'Stadionplein', 'Standbeeld ’74', 'Laatste woonhuis van Rembrandt van Rijn', 'Magere Brug (Skinny Bridge)', 'Marineterrein', 'Moskee El Mohammadi', 'Portuguese Synagogue', 'Rozenhofje', 'Rembrandtmonument', 'Munttoren', 'Groen van Prinstererschool', 'Homomonument', 'Het Muzenplein', 'Het Nieuwe Huis', 'Hollandsche Schouwburg', 'Karthuizerhofje', 'Street Art Today', 'Suykerhofje', 'De P.L. Kramerbrug', 'Esplanade De Meer', 'The Amsterdam (VOC ship)', 'Amstelglorie allotments', 'Amstelveld', 'De Vrijheidslaan', 'De Waag', 'AVV Swift', 'Houten huizen ', 'André Hazes statue', 'Felix Meritis', 'Container housing', "Johan Cruijff's first home", 'Auschwitz Monument', 'Johan Cruyff Academy', 'Houten ophaalbruggen', 'Johan Cruyff Foundation', 'Beurs van Berlage', 'Johan Cruyff Institute', 'Bicycle flat', 'IJ-hallen', 'Hôtel Droog', 'Hoofddorpplein', 'Huis met de Hoofden', 'Huize Frankendael', 'Butterfly Pavilion at ARTIS Amsterdam Royal Zoo', 'NEMO’s Roof', 'NewWerktheater', 'Nieuwezijds Voorburgwal', 'Old School Amsterdam']

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
    selectedTags = getCheckedSightseeingTags()
    calculateAndDisplayRoute(directionsService, directionsRenderer, geocoder);
  });
  document.getElementById("locationButton").addEventListener("click", () => {
    calculateUserLocation();
    startingPoint = userPosition
    calculateStartingGeoLocations(geocoder, document.getElementById("start").value)
    calculateEndingGeoLocations(geocoder, document.getElementById("end").value)
  });

}

function getCheckedSightseeingTags(){
  CheckedTags = []
  if (document.getElementById('Architecture').checked) {
    CheckedTags.push(document.getElementById('Architecture').name); }
  if (document.getElementById('Attractions').checked) {
    CheckedTags.push(document.getElementById('Attractions').name); }
  if (document.getElementById('Canal ring').checked) {
    CheckedTags.push(document.getElementById('Canal ring').name); }
  if (document.getElementById('Castles & gardens').checked) {
    CheckedTags.push(document.getElementById('Castles & gardens').name); }
  if (document.getElementById('City centre').checked) {
    CheckedTags.push(document.getElementById('City centre').name); }
  if (document.getElementById('Historical').checked) {
    CheckedTags.push(document.getElementById('Historical').name); }
  if (document.getElementById('Monument').checked) {
    CheckedTags.push(document.getElementById('Monument').name); }
  if (document.getElementById('Waterland').checked) {
    CheckedTags.push(document.getElementById('Waterland').name); }
    return CheckedTags
}


// fore each route give the lonLat given a certain fraction of the route
function calculateInterpolateCoordinates(start, end){
  final_stopover_names = []
  final_stopover_geolocations = []
  final_stopover_addresses = []
  final_stopover_descriptions = []

  // calculate interpolates of starting and ending
  list_of_interpolates = []
  for (let i = 0.05; i < 1; i = i + 0.05) {
    list_of_interpolates.push(google.maps.geometry.spherical.interpolate(start, end, i))
  }

  checkedStopoverAddresses = []
  checkedStopoverGeolocations = []
  checkedStopoverNames = []
  checkedStopoverDescriptions = []

  if (selectedTags.length !== 0){
    for (let i = 1; i < tags_iamsterdam_places.length; i++) {
      for (let j = 1; j < tags_iamsterdam_places[i].length; j++) {
        if(selectedTags.includes(tags_iamsterdam_places[i][j])) {
          checkedStopoverAddresses.push(addresses_iamsterdam_places[i])
          checkedStopoverGeolocations.push(geocodes_iamsterdam_places[i])
          checkedStopoverDescriptions.push(place_info_iamstedam_places[i])
          checkedStopoverNames.push(names_info_iamstedam_places[i])
          break
          }
        }
      }
  }
  else{
    checkedStopoverAddresses = addresses_iamsterdam_places
    checkedStopoverGeolocations = geocodes_iamsterdam_places
    checkedStopoverNames = names_info_iamstedam_places
    checkedStopoverDescriptions= place_info_iamstedam_places
  }

    console.log(checkedStopoverGeolocations)
  
    // calculate distance between interpolates and stopovers
  for (let i = 0; i < list_of_interpolates.length; i++){
    // calculate for each interpolates the closest stopover
    local_list_of_distances = []
    for (let j = 0; j < checkedStopoverGeolocations.length; j++){
      local_list_of_distances.push(google.maps.geometry.spherical.computeDistanceBetween(
        list_of_interpolates[i], new google.maps.LatLng(checkedStopoverGeolocations[j][0], checkedStopoverGeolocations[j][1])
        ))
    } 
    interpolate_min = Math.min.apply(Math, local_list_of_distances)
    index_of_minDist_stopover = local_list_of_distances.indexOf(interpolate_min, 0)
    if (!final_stopover_names.includes(checkedStopoverNames[index_of_minDist_stopover])){
      final_stopover_geolocations.push(checkedStopoverGeolocations[index_of_minDist_stopover])
      final_stopover_addresses.push(checkedStopoverAddresses[index_of_minDist_stopover])
      final_stopover_names.push(checkedStopoverNames[index_of_minDist_stopover])
      final_stopover_descriptions.push(checkedStopoverDescriptions[index_of_minDist_stopover])
    }

  }
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
    geocoder.geocode({'address': adress}, function (results, status) {
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

  calculateInterpolateCoordinates(startingPoint, endingPoint)


  const checkboxArray = final_stopover_addresses
  // Loop trough the different stopovers
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
  directionsService
    .route({
      origin: startingPoint,
      destination: endingPoint,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {

      instruction = response.routes[0].legs[0].steps[0].instructions
      directionsRenderer.setDirections(response);

      const summaryPanel = document.getElementById("directions-panel");
      summaryPanel.innerHTML = '<h3>Stopovers:<h3>'
      // summaryPanel.innerHTML = "Stopovers:<b><b>" + final_stopover_names + "<br><br>";
      for (let j = 0; j < final_stopover_names.length; j++) {
        summaryPanel.innerHTML += final_stopover_names[j] + "</b><br>";

      }
      summaryPanel.innerHTML += "<br><h3>Directions:<h3>";


        // loop through the routing legs
        for (let i = 0; i < response.routes[0].legs.length; i++) {
          leg = response.routes[0].legs[i]
          if (i != 0) {
            summaryPanel.innerHTML +=
            "<b>" + leg.start_address.replace(", Netherlands", '') + "</b><br>";
          }
          
          // loop through steps within each routing leg
          for (let j = 0; j < leg.steps.length; j++) {
            instruction = leg.steps[j].instructions
            instruction = instruction.replace( /(<([^>]+)>)/ig, '')
            summaryPanel.innerHTML += instruction + "</b><br>";
  
          }
        }


    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

var currentLocationUpdateLat = document.getElementById("currentlocationlat");
var currentLocationUpdateLong = document.getElementById("currentlocationlong");

window.setInterval(function() {
  
    /* Initialise Reverse Geocode API Client */
    var reverseGeocoder=new BDCReverseGeocode();
    
    /* Get the current user's location information, based on the coordinates provided by their browser */
    /* Fetching coordinates requires the user to be accessing your page over HTTPS and to allow the location prompt. */
    reverseGeocoder.getClientLocation(function(result) {
        console.log(result);
    });

  

    /* You can also set the locality language as needed */
    reverseGeocoder.localityLanguage='en';

    /* Request the current user's coordinates (requires HTTPS and acceptance of prompt) */
    reverseGeocoder.getClientCoordinates(function(result) {
        console.log(result);
        currentLocationUpdateLat.setAttribute("value", result.coords.latitude);
        currentLocationUpdateLong.setAttribute("value", result.coords.longitude);
    });


    
  }, 5000);

  window.setInterval(function() {

if (typeof final_stopover_geolocations != 'undefined'){
  // set the bounds (100m)
var upperbound = Number(currentLocationUpdateLat.getAttribute('value'))+0.000111111;
var lowerbound = Number(currentLocationUpdateLat.getAttribute('value'))-0.000111111;
var upperboundlong = Number(currentLocationUpdateLong.getAttribute('value')) + 0.00111111;
var lowerboundlong = Number(currentLocationUpdateLong.getAttribute('value')) - 0.00111111;

// check whether the overlay needs to be open or closed, first the indicators will be transferred to js 

var overlay = document.querySelector(".overlay-closed1");
var button = document.querySelector(".presstoclose");
let counter1 = 0;

totalLatCordinates = [];
totalLngCordinates = [];
for (let i = 0;  i < final_stopover_geolocations.length; i++){
  totalLatCordinates.push(final_stopover_geolocations[i][1])
  totalLngCordinates.push(final_stopover_geolocations[i][0])
}

    // loop through all values of the array
for (let count10 = 0;  totalLngCordinates.length >= count10; count10++){
  console.log("LOWERBOUNDLONG", lowerboundlong);
  console.log("UPPERBOUNDLONG",upperboundlong)
  console.log("lowerbound",lowerbound)
  console.log("upperbound",totalLngCordinates[count10])

      // the first statement  will be true when a user inside the 100m range of the location of interest
   if (upperboundlong > totalLatCordinates[count10] && lowerboundlong < totalLatCordinates[count10] && lowerbound < totalLngCordinates[count10] && upperbound > totalLngCordinates[count10]){
          // inside the first statmement the system checks if the overlay is open then it will do nothing
    if (overlay.getAttribute("value")=="clicked"){
 
}
          // inside the first statmement the system checks if the overlay is open then it will do nothing

  else {
    activateoverlay(count10)
    count = totalLngCordinates.length+1;
}
  }
  
  else {
    if (overlay.getAttribute("value")=="clicked"){
      counter1=counter1 + 1;
}
    else {
  counter1=counter1 + 1;
  // console.log("bla")
  overlay.setAttribute("value", "notclicked");
  console.log(overlay.getAttribute('value'));

    }
    if (counter1 == totalLngCordinates.length+1){
      // console.log("dit een test");

  overlay.setAttribute("value", "notclicked");
  console.log(overlay.getAttribute('value'));
  overlay.removeAttribute('id');
  overlay.setAttribute("id", "overlay-closed");
  document.querySelector(".overlay-closed2").innerHTML =""

}
else {
}
}

  }

var NameOfatt = document.querySelectorAll(".Name");
var descrip = document.querySelectorAll(".Place-info");


var namearray = Array.prototype.slice.call(NameOfatt);
emptyname=[]
  for (r=0; namearray.length > r; r++){
    emptyname.push(namearray[r].getAttribute("value"));
  }


  var descriparray = Array.prototype.slice.call(descrip);
  emptydescrip=[]

  for (w=0; descriparray.length > w; w++){
    emptydescrip.push(descriparray[w].getAttribute("value"));
  }


function activateoverlay(count10, lengthofarray) {
  var countarray= count10;
  if (overlay.getAttribute('id')=="overlay-closed" && overlay.getAttribute('value')=="notclicked"){
    overlay.setAttribute("id", "overlay-open");
    document.querySelector(".overlay-closed2").innerHTML = "<a href=# class= presstoclose >close</a>" + "<h2>"+final_stopover_names[countarray]+"</h2>"+"<p>"+final_stopover_descriptions[countarray]+"</p>";

function hide(){
  overlay.removeAttribute('id');
  overlay.setAttribute("id", "overlay-closed");
  overlay.setAttribute("value", "clicked")
  document.querySelector(".overlay-closed2").innerHTML =""
}
document.querySelector(".presstoclose").addEventListener("click", hide);
}
}
}
console.log(final_stopover_geolocations);
  }, 5000);