
//************************* CAROUSEL SECTION **********************************
function populateGrid() {
var currentModel;
 // current model in the carousel.

//  Using method "get" the ajax function to get asynchronised response from our /api.
	alert(queryURL);
     $.ajax({
        url: queryURL,
        method: "GET",    
//        success: function(response) {     
     }).done(function(response) {  // Function "done" will help to callback/Load data from
     alert("Got the response from API"); 
      	console.log(response); // a server using an AJAX HTTP GET request
    	models = response;
    	tableHTML = "";
    	for (var i = 0; i < 10; i++) {

      	    	if (selection == "models") {
      	    		if (models[i].model.image != null) {
      	    			currentModel = models[i].model.image;
			    		modelId = models[i].model.id;
      	    		}
      	    	}
      	    
      	    	$("#cr" + i).attr("src", currentModel); // Refering to the 10 elements (modelImages) from the carousel in HTML.
      	    	$("#cr" + i).attr("style", "height: 400px; width: 400px");
            }
          });
   }

//********************** DROPDOWN BUTTON *********************************
 //When the user clicks on the button, 
//toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
