import * as http from "http";
import socketServer from "./socket.js";
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

var server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function(req , res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const io = socketServer(server);

io.on('connection', (socket) => {
	console.log(socket.id)
});  
