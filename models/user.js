`use strict`;

const User = (sequelize, DataTypes) => sequelize.define(`User`, {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: `https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png`
    }
});

module.exports = User;