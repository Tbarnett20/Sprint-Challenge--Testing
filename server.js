const express = require("express");
const server = express();
const db = require("./database/games.js");

server.use(express.json());

// **Endpoint check ** //
server.get('/', (req, res) => {
  res.status(200).json({ API: 'We running young padawans!!' });
});


server.get("/games", (req, res) => {
  res.status(200).json(db.games);
});

module.exports = server;