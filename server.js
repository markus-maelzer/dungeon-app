// req needed modules
const proxy = require('express-http-proxy');
const fs = require('fs');
const mysql = require("mysql");

// setup express socket.io server
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// define port
//app.set('port', (process.env.API_PORT || 3001));
const port = 3001;

server.listen(port, function () {
  console.log('Server not running on port: ' + port);
});

io.on('connection', () => {
  console.log('a user has connected');
})
