'use strict';
module.exports = (sequelize, DataTypes) => {

  var Wine = sequelize.define('Wine', {

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    points: {
      type: DataTypes.INTEGER
    },

    price: {
      type: DataTypes.DECIMAL
    },

    variety: {
    type: DataTypes.STRING,
    allowNull: false
    },

    winery: {
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });
  return Wine;
};

