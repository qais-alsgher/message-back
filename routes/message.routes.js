`use strict`;
const router = require(`express`).Router();
const db = require(`../models/index.js`);

// router.get(`/messages`, getAllMessages);
router.post(`/messages`, createNewMessage);
router.get(`/messages/:room`, getMessagesBetweenUsers);

// async function getAllMessages(req, res) {
//     const messages = await db.message.findAll();
//     res.status(200).json(messages);
// }

async function createNewMessage(req, res) {
    const message = await db.message.create(req.body);
    res.status(201).json(message);
}

async function getMessagesBetweenUsers(req, res) {
    const messages = await db.message.findAll({
        where: {
            room: req.params.room
        }, include: [
            {
                model: db.user,
                attributes: [`userName`]
            }
        ], order: [
            [`createdAt`, `ASC`]

        ]
    });


    res.status(200).json(messages);
}
module.exports = router;