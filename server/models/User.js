'use strict';

module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define("user", {
        userId: {
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name: {
            field: "name",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        school: {
            field: "shool",
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "user"
        });

    return user;
}