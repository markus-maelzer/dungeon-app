// req needed modules
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const path = require('path');

// setup express socket.io server
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// define port
//app.set('port', (process.env.API_PORT || 3001));
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, function () {
  console.log('Server definately not running on port: ' + port);
});




// in testing
app.post('/api/filepath', (req, res) => {
  DATA_FILE = filepath(req.body.filepath);
//  console.log('get/filepath: \n' + DATA_FILE);
  res.json({success: 'success'})
});


let DATA_FILE = path.join(__dirname , 'data/monster.json');
app.get('/api/dungeon', (req, res) => {
//  console.log('get/dungeon: \n' + DATA_FILE);
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/dungeon', (req, res) => {
  const fileName = filepath(req.body.filepath);
  fs.readFile(fileName, (err, data) => {
    const monster = JSON.parse(data);
    const newMonster = createData(req.body.data);
    monster.push(newMonster);

    fs.writeFile(fileName, JSON.stringify(monster, null, 2), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(monster);
    });
  });
});

app.put('/api/dungeon', (req, res) => {
  const fileName = filepath(req.body.filepath);
  fs.readFile(fileName, (err, data) => {
    const monster = JSON.parse(data);
    const updatedData = updateData(req.body.data, monster);

    fs.writeFile(fileName, JSON.stringify(updatedData, null, 2), () => {
      res.json({});
    });
  });
});

app.delete('/api/dungeon', (req, res) => {
  const fileName = filepath(req.body.filepath);
  fs.readFile(fileName, (err, data) => {
    const fileData = JSON.parse(data);
  })
});


function createData(req) {
  let object = req;
  Object.getOwnPropertyNames(object).forEach(prop => {
    object[prop] = req[prop];
  });
  return object;
}

function updateData(req, attr) {
  let data = attr;
  // iterate through data array
  data.forEach((object) => {
    // if a object in data array has the same id than the id in request
    // switch data from req body with the object data
    if (object.id === req.id) {
      Object.getOwnPropertyNames(object).forEach(prop => {
        object[prop] = req[prop];
      });
    }
  });
  return(data);
}

const dataFiles = [
  'monster',
  'items',
  'skills',
  'spells',
  'npcs'
]

function filepath(fileName) {
    return path.join(__dirname , 'data/'+ fileName +'.json');
}



io.on('connection', () => {
  console.log('a user has connected');
})
