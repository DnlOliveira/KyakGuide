$(document).ready(function() {
// Calls placeDetail API after receiving place id from placeSearch
// to get details on a specific place
function placeDetail(id) {
  var query = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+id+"&key=AIzaSyDAhGg64lKOYPK-6jEMFKqQlc2TSTHTI2M";

  $.ajax({
    url: query,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#text").append(JSON.stringify(response.result.reviews[0].text));
  });
}; //end placeDetail function


// Calls placeSearch API  with lat & lng & return place id
// used for placeDetail
function placeSearch(lat, lng) {
  var query = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=50000&type=park&keyword=kyak&key=AIzaSyDAhGg64lKOYPK-6jEMFKqQlc2TSTHTI2M";

  $.ajax({
    url: query,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    var placeId = response.results[0].place_id;
    console.log(placeId);

    placeDetail(placeId);
  });
};// end placeSearch function


// Calls geocoder API to retrieve coordinates
function geocoder(state) {
  geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': state}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {

      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      dispLoc = results[0].formatted_address;
      var placeID = results[0].place_id;
      console.log(dispLoc);
      console.log(placeID);

      placeSearch(lat, lng);

      console.log("lat: "+lat+" lng: "+ lng);
      console.log(results);
    }
    else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });

};// end geocoder function

});//end ready.function
