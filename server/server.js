var express  = require('express');
var http     = require('http');
var socketIo = require('socket.io');
var Util     = require('../app/lib/util');

var app    = express();
var server = http.createServer(app);
var io     = socketIo.listen(server);

server.listen(5000);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendfile('index.html', {'root': __dirname + '/public'});
});

io.sockets.on('connection', function (socket) {
  socket.on('fire', function (data) {
    console.log('Fire requested.');
    var velocity = {
      x: Util.randomNumberBetween(0.7, 1.2),
      y: 0
    };

    io.sockets.emit('shotFired', { velocity: velocity });
  });
});
