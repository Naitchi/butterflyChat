const express = require('express');
const router = express.Router();
const { message } = require('../controllers');

router.post('/', message);

module.exports = router;
