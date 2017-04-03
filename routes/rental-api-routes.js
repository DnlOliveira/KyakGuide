// Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {
  
  // Get all rentals by locationId
  app.get("/api/rental/:locationId", function(req, res) {

    if (req.params.locationId) {
      models.Rental.findAll({
        where: {
          locationId: req.params.locationId
        }
      }).then(function(modelsRental) {
        res.json(modelsRental);
      });
    }
  });

  // Create rental
  app.post("/api/rental", function(req, res) {

    console.log("Models Data");
    console.log(req.body);
    models.Rental.create({
      locationId: req.body.locationId,
      rental: req.body.rental
    })
    .then(function(modelsRental) {
      res.json(modelsRental);
    });
  });
};