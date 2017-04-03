//Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {

  //creates new place in database
  app.post("/api/location", function(req, res) {

    models.Location.create({
      name: req.body.name,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      googleId: req.body.googleId,
      imageUrl: req.body.imageUrl
    })
    .then(function(newPlace) {
      res.json(newPlace);
      
    });

  });//end app.post

}; //end module.exports
