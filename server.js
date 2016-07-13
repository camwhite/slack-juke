'use strict';

const app = require('./app');
const http = require('http');

let port = process.env.PORT || 1337;
let httpServer = http.createServer(app);

app.set('port', port);

httpServer.on('error', (err) => {
  console.log(err)
});

httpServer.on('listening',  () => {
  console.log('Express server is listening on ' + httpServer.address().port);
});

httpServer.listen(port, () => {
});
