'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  }, {
    timestamps: false
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Review.belongsTo(models.User, {

        });
        Review.belongTo(models.Wine, {

        });
      }
    }
  });
  return Review;
};