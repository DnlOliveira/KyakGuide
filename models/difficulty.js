
module.exports = function(sequelize, DataTypes) {
 var Difficulty = sequelize.define("Difficulty", {
   locationId: DataTypes.INTEGER,
   difficulty: DataTypes.INTEGER
 });
 return Difficulty;
};