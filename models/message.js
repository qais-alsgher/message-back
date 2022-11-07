const { sequelize } = require(".");

`user strict`;
const Message = (sequelize, DataTypes) => sequelize.define(`Message`, {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    room: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    }

});

module.exports = Message;