'use strict';

const path = require('path');
const express = require('express');

let app = express();
let pathToPlayer = path.join(__dirname, 'player/player.html');

app.use('/player', express.static(pathToPlayer));

app.get('/', (req, res) => {
  res.sendFile(pathToPlayer);
})

module.exports = app;
