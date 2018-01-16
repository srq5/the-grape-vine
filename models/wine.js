module.exports = function(sequelize, DataTypes) {

    var Wine = sequelize.define("Wine", {

        country: {
            
            type: DataTypes.STRING,
            allowNull: false

        },
        description: {

            type: DataTypes.STRING,
            allowNull: false

        },

        designation: {

            type: DataTypes.STRING,
            allowNull: false

        },

        points: {

        },
        price: {

        },
        province: {

            type: DataTypes.STRING,
            allowNull: false

        },
        region_1: {

            type: DataTypes.STRING,
            allowNull: false

        },

        region_2: {

            type: DataTypes.STRING,
            allowNull: false

        },

        variety: {

            type: DataTypes.STRING,
            allowNull: false

        },

        winery: {

            type: DataTypes.STRING,
            allowNull: false

        }







    });

    return Wine;




}