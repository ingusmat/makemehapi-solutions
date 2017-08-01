'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: `/{name}`,
  method: 'GET',
  handler: (request, reply) => {
    reply('Hello ' + encodeURIComponent(request.params.name));
  }
});

server.start((err) => {
  if (err) throw err;
  console.log('Server starting on port: ', server.info.uri);
});