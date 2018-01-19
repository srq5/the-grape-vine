'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: {
      
      type: DataTypes.STRING,
      allowNull: false

    },
    
    last_name: {
      
      type: DataTypes.STRING,
      allowNull: false

    },
    
    email: {
      
      type: DataTypes.STRING,
      
      validate: {
        isEmail: true
      }
    },
    
    password: DataTypes.STRING,
    
    username: {
      
      type: DataTypes.STRING,
      allowNull: false

    }
  },
  {
    timestamps: false
  });

  User.associate = function(models) {
    User.hasMany(models.Review, {
      onDelete: 'CASCADE'
    });
    User.belongsToMany(models.Wine, {
      through: models.UserWine 
    });
  };

  return User;
};

