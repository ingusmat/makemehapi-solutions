const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');

const server = new Hapi.Server();

server.register(Vision, (err) => {
  if (err) throw err;
});

server.connection({
  host: "localhost",
  port: Number(process.argv[2] || 8080)
});

server.views({
  engines: {
    html: require('handlebars')
  },
  helpersPath: Path.join(__dirname, 'helpers'),
  path: Path.join(__dirname, 'templates')
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html'
  }
});

server.start((err) => {
  if (err) throw err;
  console.log('starting server!');
});