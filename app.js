'use strict';

const path = require('path');
const connect = require('connect');
const express = require('express');
const oembed = require('connect-oembed');
const EmbedUtils = require('./utils/EmbedUtils');

let app = express();
let pathToPlayer = path.join(__dirname, 'player/player.html');

app.use('/player', express.static(pathToPlayer));
app.get('/player', (req, res) => {
  res.sendFile(pathToPlayer);
});

app.use('/oembed', oembed((req, res, next) => {
  let iframe = EmbedUtils.buildIframe();
  res.oembed.rich(iframe, 100, 400);
}));

module.exports = app;
