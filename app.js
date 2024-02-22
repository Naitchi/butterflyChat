const express = require('express');
const app = express();
const server = require('http').createServer(app);

const index = require('./routes/index');

// Nécessaire pour les .env
require('dotenv').config();
console.log(process.env);

// Nécessaire pour le router
app.use(express.json());

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.use('/api/', index);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
