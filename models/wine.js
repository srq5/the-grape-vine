module.exports = function (sequelize, DataTypes) {

    var Wine = sequelize.define("Wine", {

        title: {

            type: DataTypes.STRING,
            allowNull: false
        },

        country: {

            type: DataTypes.STRING,
            allowNull: false

        },
        description: {

            type: DataTypes.STRING,
            allowNull: false

        },

        points: {

            type: DataTypes.INTEGER

        },
        price: {

            type: DataTypes.DECIMAL(10, 2)

        },

        variety: {

            type: DataTypes.STRING,
            allowNull: false

        },

        winery: {

            type: DataTypes.STRING,

        }

    });

    return Wine;

}