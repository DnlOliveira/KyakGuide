$(document).ready(function() {

  //function for scanning database for kyaking places
  //based on state initials from map buttons
  function findPlaces(initials) {
    window.location = ("/locations/"+ initials);
  };// end findPlaces function


  $('#map2').usmap({
    'stateStyles': {
      fill: '#025',
      "stroke-width": 1,
      'stroke' : '#036'
    },
    'stateHoverStyles': {
      fill: 'teal'
    },

    'click' : function(event, data) {
      $('#alert')
        .text('Click '+data.name+' on map 2')
        .stop()
        .css('backgroundColor', 'transparent')
        .animate({backgroundColor: '#ddd'}, 1000);

        $("#text").text(data.name);

        findPlaces(data.name);
    }
  });


});//end ready.function
