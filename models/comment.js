module.exports = function(sequelize, DataTypes) {
 var Comment = sequelize.define("Comment", {
   locationId: DataTypes.INTEGER,
   comment: DataTypes.STRING
 });
 return Comment;
};