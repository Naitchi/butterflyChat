const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
  console.log('Un client est connecté');

  socket.on('message', (data) => {
    console.log('Message reçu : ', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Un client est déconnecté');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
