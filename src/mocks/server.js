const pause = require('connect-pause');
const jsonServer = require('json-server');
const fakeDatabase = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(fakeDatabase);
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    '/v1/*': '/$1'
  })
);
server.use(middlewares);
server.use(pause(150));
server.use(router);
server.listen(3000);
