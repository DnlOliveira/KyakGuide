
module.exports = function(sequelize, DataTypes) {
 var Rental = sequelize.define("Rental", {
   locationId: DataTypes.INTEGER,
   rental: DataTypes.BOOLEAN
 });
 return Rental;
};