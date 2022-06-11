const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 5000;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// socket.io calls
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });

  socket.on('join_room', (data) => {
    socket.join(data);

    console.log(`user: ${socket.id} joined room: ${data}`);
  });

  socket.on('leave_room', (data) => {
    socket.leave(data);

    console.log(`user: ${socket.id} leave the room: ${data}`);
  });

  socket.on('chat message', (data) => {
    io.to(data.room).emit('chat message', data);
  });
});

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
