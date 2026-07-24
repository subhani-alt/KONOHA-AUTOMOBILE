const News = require('../models/News');

exports.getNews = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};
    if (category && category !== 'All') query.category = category;
    if (featured === 'true') query.featured = true;

    const news = await News.find(query).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: news.length,
      data: news,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getNewsBySlug = async (req, res) => {
  try {
    const news = await News.findOne({ slug: req.params.slug });
    if (!news) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
