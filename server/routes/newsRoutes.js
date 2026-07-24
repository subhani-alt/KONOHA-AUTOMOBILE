const express = require('express');
const router = express.Router();
const { getNews, getNewsBySlug, createNews } = require('../controllers/newsController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getNews);
router.get('/:slug', getNewsBySlug);
router.post('/', protect, admin, createNews);

module.exports = router;
