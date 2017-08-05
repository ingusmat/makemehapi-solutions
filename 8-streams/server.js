const Hapi = require('hapi');
const Rot13 = require('rot13-transform');
const Fs = require('fs');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply(Fs.createReadStream(Path.join(__dirname, 'pursuit.txt')).pipe(Rot13()));
  }
});

server.start((err) => {
  if (err) throw err;
  console.log('we are starting the server!!');
})