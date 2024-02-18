const express = require('express');
const router = express.Router();
const { hi } = require('../controllers');

router.get('/hi', hi);

module.exports = router;
