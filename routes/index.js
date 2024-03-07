const express = require('express');
const router = express.Router();
const { message, newChatter } = require('../controllers');

router.post('/', message);
router.post('/newChatter', newChatter);

module.exports = router;
