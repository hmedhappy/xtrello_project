const express = require('express');
const cors = require('cors');
var compression = require('compression');
const Message = require('../Model/Message');

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression());

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

app.get('/messages', async (req, res) => {
    try {
      var ress = await Message.find();
      console.log({ress});
      res.json(ress);
    } catch (err) {
      res.status(200).json({ err });
    }
  });
  
  app.post('/messages', async (req, res) => {
    var message = new Message(req.body);
    message.save();
    const { content, username } = req.body;
    res.json({message:"Message added"})
  });
  
  app.get('/welcome', (req, res) => {
    res.send('welcome to th eserver');
  });
  
  io.on('connection', (socket) => {
    socket.on('message', ({ content, username, imgdata }) => {
      io.emit('new-message', { content, imgdata, username });
    });
  });

exports.app = app;
