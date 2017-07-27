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

// json files
const MONSTER_DATA = path.join(__dirname , 'data/monster.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
*/

app.get('/api/monster', (req, res) => {
  fs.readFile(MONSTER_DATA, (err, data) => {
    console.log("data: " + JSON.parse(data));
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});


app.post('/api/monster', (req, res) => {
  fs.readFile(MONSTER_DATA, (err, data) => {
    const monster = JSON.parse(data);
    const newMonster = {
      id: req.body.id,
      name: req.body.name,
      dungeon_floor: req.body.dungeon_floor,
      challenge: req.body.challenge,
      leben: req.body.leben,

      waffen: req.body.waffen,
      rüstung: req.body.rüstung,

      zäheit: req.body.zäheit,
      schwäche: req.body.schwäche,
      resistenzen: req.body.resistenzen,
      immunitäten: req.body.immunitäten,

      größe: req.body.größe,
      beschreibung: req.body.beschreibung,
      besonderheiten: req.body.besonderheiten,

      skills: req.body.skills,
      movement_speed: req.body.movement_speed,
      dmg: req.body.dmg,
      trefferrate: req.body.trefferrate,
    };
    monster.push(newMonster);

    fs.writeFile(MONSTER_DATA, JSON.stringify(monster, null, 2), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(monster);
    });
  });
});

server.listen(port, function () {
  console.log('Server not running on port: ' + port);
});

io.on('connection', () => {
  console.log('a user has connected');



})
