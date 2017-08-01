'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const Path = require('path');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Inert, function(err) {
  if (err) throw err;
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: Path.join(__dirname, "handling.html")
  }
});

server.start((err) => {
  if (err) throw err;
  console.log("Server starting at port ", server.info.uri);
});

