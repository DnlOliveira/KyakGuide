
$(document).ready(function(){

try {
  $(document).on('click', '#location', function() {
    console.log(this);
    var value = $(this).val();
    console.log(value);

    window.location = ("/location/"+ value);
  });// end on.click
} catch (e) {
  console.log(e);
} finally {

}


});// end ready.function
