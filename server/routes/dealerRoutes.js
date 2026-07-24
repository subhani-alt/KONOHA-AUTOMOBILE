const express = require('express');
const router = express.Router();
const { getDealers } = require('../controllers/dealerController');

router.get('/', getDealers);

module.exports = router;
