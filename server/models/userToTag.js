'use strict';

module.exports = function (sequelize, DataTypes) {
    const userToTag = sequelize.define("userToTag", {
        userId: {//PK(id), userId(unique)
            field: "userId",
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        tagId: {//PK(id)
            field: "tagId",
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            underscored: true,
            freezeTalbeName: true,
            tableName: "userToTag"
        });

    return userToTag;
}