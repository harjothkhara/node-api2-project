const express = require('express'); // import react-like framework for building apis

const server = express(); // create a server instance

// import router files here
const postsRouter = require('../router/posts-router');

server.use(express.json()); // teach the whole server instance to parse JSON

server.get('/', (req, res) => {
  res.send('the server is alive 🔥');
});

// requests to route that begin with /api/posts
server.use('/api/posts', postsRouter);

module.exports = server;
