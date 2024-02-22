const Pusher = require('pusher');
require('dotenv').config();

console.log(
  process.env.APP_ID,
  process.env.APP_KEY,
  process.env.APP_SECRET,
  process.env.APP_CLUSTER,
);

const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.APP_KEY,
  secret: process.env.APP_SECRET,
  cluster: process.env.APP_CLUSTER,
  useTLS: true,
});

module.exports = pusher;
