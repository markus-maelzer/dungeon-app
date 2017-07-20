const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const socket = require('socket.io');

const webpackConfig = require('./webpack.config.js');
const compiler = require('webpack')(webpackConfig);

const port = 3004;
const io = socket.listen(server);

// Webpack Middleware config
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);


// socket.io codes




app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, 'src/index.html'));
});

server.listen(port, function () {
  console.log('Server running on port: ' + port);
});

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on('message', function(msg) {
    console.log(msg);
    socket.broadcast.emit('chat message', msg)
  });
});

io.on('disconnect', function () {
  console.log('a user disconnected');
});
