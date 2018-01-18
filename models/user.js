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

    },
    
    favorite_wine: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  },

   {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
         //add include.
    // User.associate = function(models){
    //     User.hasMany(models.Wine, {
    //       onDelete: "CASCADE"
    //     });
    //   };
      }
    }
  });
  return User;
};

