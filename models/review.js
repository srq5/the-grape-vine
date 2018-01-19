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
  });
    
      Review.associate = function(models) {
        // associations can be defined here
        Review.belongsTo(models.User, {
          onDelete: 'CASCADE'
        });
        Review.belongsTo(models.Wine, {
          onDelete: 'CASCADE'
        });
      
    };
  
  return Review;
};