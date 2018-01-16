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

        }

    })
return User;
}