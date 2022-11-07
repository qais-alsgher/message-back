`use strict`;
require(`dotenv`).config();
const server = require(`./server.js`);
const db = require(`./models/index.js`);

db.sequelize.sync({ force: true }).then(() => {
// db.sequelize.sync().then(() => {
    server.start(process.env.PORT || 4040);
}).catch((err) => {
    console.log(err);
}
);
