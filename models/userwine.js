'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserWine = sequelize.define('UserWine', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsToMany(Wine, { through: UserWine });
        Wine.belongsToMany(User, { through: UserWine });
      }
    }
  });
  return UserWine;
};