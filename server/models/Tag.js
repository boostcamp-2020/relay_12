'use strict';
const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const tag = sequelize.define("tag", {
        name: {
            field: "name",
            type: DataTypes.STRING(255),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "tag"
        });

    return tag;
}