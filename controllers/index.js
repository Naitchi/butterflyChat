const pusher = require('../pusher');

function message(req, res) {
  console.log('message');
  const payload = req.body;
  pusher.trigger('butterflychat', 'message', payload.message);
  res.status(200).send(payload);
}

module.exports = {
  message,
};
