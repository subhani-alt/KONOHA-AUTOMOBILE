const express = require('express');
const router = express.Router();
const { saveConfiguration, getConfigurationByShareId } = require('../controllers/configController');

router.post('/save', saveConfiguration);
router.get('/:shareId', getConfigurationByShareId);

module.exports = router;
