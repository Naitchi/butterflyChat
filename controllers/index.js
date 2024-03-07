const pusher = require('../pusher');

async function message(req, res) {
  console.log('message');
  const payload = req.body;
  await pusher.trigger(`butterflychat-${payload.idRoom}`, 'message', payload);
  res.status(200).send(payload);
}

async function newChatter(req, res) {
  console.log('newChatter');
  const payload = req.body;
  await pusher.trigger(`butterflychat-${payload.idRoom}`, 'newChatter', payload);
  res.status(200).send(payload);
}

module.exports = {
  message,
  newChatter,
};
