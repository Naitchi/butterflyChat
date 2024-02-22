const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const Pusher = require('pusher');

require('dotenv').config();
const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.APP_KEY,
  secret: process.env.APP_SECRET,
  cluster: process.env.APP_CLUSTER,
  useTLS: true,
});

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Trigger a new random event every second for test.
setInterval(() => {
  pusher.trigger('butterflychat', 'testrandomnumber', {
    value: Math.random() * 5000,
  });
}, 1000);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
