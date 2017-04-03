// Requiring models
var models = require("../models");

// Routes
module.exports = function(app) {
  
  // Get all difficulties by locationId
  app.get("/api/difficulty/:locationId", function(req, res) {
    if (req.params.locationId) {
      models.Difficulty.findAll({
        where: {
          locationId: req.params.locationId
        }
      }).then(function(modelsDifficulty) {
        res.json(modelsDifficulty);
      });
    }
  });

  // Create difficulty
  app.post("/api/difficulty", function(req, res) {
    models.Difficulty.create({
      locationId: req.body.locationId,
      difficulty: req.body.difficulty
    })
    .then(function(modelsDifficulty) {
      res.json(modelsDifficulty);
    });
  });
};