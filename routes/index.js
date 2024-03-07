const express = require('express');
const router = express.Router();
const { message, newChatter, chatterLeft } = require('../controllers');

router.post('/', message);
router.post('/newChatter', newChatter);
router.post('/chatterLeft', chatterLeft);

module.exports = router;
