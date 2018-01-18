module.exports = function(sequelize, DataTypes){

    var User = sequelize.define("User", {
     
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
        password: {

            type: DataTypes.STRING
            

        },
        username: {

            type: DataTypes.STRING,
            allowNull: false

        }, 

        favorite_wines: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    //add include.
    // User.associate = function(models){
    //     User.hasMany(models.Wine, {
    //       onDelete: "CASCADE"
    //     });
    //   };


return User;
}