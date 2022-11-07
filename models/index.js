`use strict`;
const { Sequelize, DataTypes, Op } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;
const sequelize = new Sequelize(DATABASE_URL);

const db = {};
db.sequelize = sequelize;
db.user = require(`./user.js`)(sequelize, DataTypes);
db.message = require(`./message.js`)(sequelize, DataTypes);
db.Op = Op;


db.user.hasMany(db.message, { foreignKey: `senderId`, spurskey: `id` });
db.message.belongsTo(db.user, { foreignKey: `senderId`, spurskey: `id` });



module.exports = db;