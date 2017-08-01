'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const server = new Hapi.Server();
const Path = require('path');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Inert, (err) => {
  if (err) throw err;
});

server.route({
  path: "/foo/bar/baz/{param}",
  method: 'GET',
  handler: {
    directory: { path: Path.join(__dirname, "public") },
  }
});

server.start((err) => {
  if (err) throw err;
  console.log("Server starting at port ", server.info.uri);
})