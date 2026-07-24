const express = require('express');
const router = express.Router();
const { submitContact, subscribeNewsletter, getInquiries } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/auth');

router.post('/', submitContact);
router.post('/subscribe', subscribeNewsletter);
router.get('/', protect, admin, getInquiries);

module.exports = router;
