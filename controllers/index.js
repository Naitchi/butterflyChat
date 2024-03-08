const pusher = require('../pusher');

async function message(req, res) {
  console.log('message');
  try {
    const payload = req.body;
    await pusher.trigger(`butterflychat-${payload.idRoom}`, 'message', payload);
    res.status(201).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur message:', error);
    res.status(500).send("Une erreur s'est produite");
  }
}

async function newChatter(req, res) {
  console.log('newChatter');
  try {
    const payload = req.body;
    await pusher.trigger(`butterflychat-${payload.idRoom}`, 'newChatter', payload);
    res.status(200).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur message:', error);
    res.status(500).send("Une erreur s'est produite");
  }
}

async function chatterLeft(req, res) {
  console.log('chatterLeft');
  try {
    const payload = req.body;
    await pusher.trigger(`butterflychat-${payload.idRoom}`, 'chatterLeft', payload);
    res.status(200).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur message:', error);
    res.status(500).send("Une erreur s'est produite");
  }
}

module.exports = {
  message,
  newChatter,
  chatterLeft,
};
