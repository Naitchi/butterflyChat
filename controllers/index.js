const pusher = require('../pusher');

async function message(req, res) {
  console.log('message');
  const payload = req.body;
  await pusher.trigger(`butterflychat-${payload.idRoom}`, 'message', payload.message);
  res.status(200).send(payload);
}

module.exports = {
  message,
};
