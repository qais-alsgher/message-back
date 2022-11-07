`use strict`;
const express = require(`express`);
const cors = require(`cors`);
const app = express();
const userRoutes = require(`./routes/user.routes.js`);
const messageRoutes = require(`./routes/message.routes.js`);
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(messageRoutes);

app.get(`/`, (req, res) => {
    res.send(`Hello World!`);
});

io.on('connection', (socket) => {
    console.log(`user connected with id ${socket.id}`);

    socket.on('joinRoom', (data) => {
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
        socket.join(data);
        // send event for sender user to update his state and data message when the room he joined
        socket.emit('oldMessage', data);

    });

    socket.on(`sendMessage`, (data) => {
        console.log(`message sent $`);
        io.to(data.room).emit(`message`, data);//sedning to all users in the room
        // socket.to(data.room).emit(`message`, data); sending to all users except the sender

    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



function start(port) {
    server.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

module.exports = {
    app: app,
    start: start
};