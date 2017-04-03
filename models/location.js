module.exports = function(sequelize, DataTypes) {
 var Location = sequelize.define("Location", {
   name: DataTypes.STRING,
   street: DataTypes.STRING,
   city: DataTypes.STRING,
   state: DataTypes.STRING,
   zip: DataTypes.STRING,
   googleId: DataTypes.STRING,
   imageUrl: DataTypes.STRING
 });
 return Location;
};