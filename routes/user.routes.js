`use strict`;
const router = require(`express`).Router();
const db = require(`../models/index.js`);

router.get(`/users`, getallUsers);
router.get(`/users/:id`, getUserById);
router.post(`/login`, getUsersByUserNameAndPassword);
router.post(`/signup`, createNewUser);



async function getallUsers(req, res) {
    const users = await db.user.findAll();
    res.status(200).json(users);
}

async function createNewUser(req, res) {
    const user = await db.user.create(req.body);
    res.status(201).json(user);
}

async function getUserById(req, res) {
    const user = await db.user.findOne({ where: { id: req.params.id } });
    res.status(200).json(user);
}

async function getUsersByUserNameAndPassword(req, res) {
    const user = await db.user.findOne({ where: { userName: req.body.userName, password: req.body.password } });
    res.status(200).json(user);
}




module.exports = router;