module.exports = function (sequelize, DataTypes) {

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

            type: DataTypes.INTEGER

        },
        price: {

            type: DataTypes.DECIMAL(10, 2)

        },
        province: {

            type: DataTypes.STRING,
            allowNull: false

        },
        region_1: {

            type: DataTypes.STRING

        },

        region_2: {

            type: DataTypes.STRING

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