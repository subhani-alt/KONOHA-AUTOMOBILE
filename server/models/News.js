const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ['Launch', 'Motorsport', 'Engineering', 'Exhibition', 'Corporate'],
    default: 'Engineering',
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Valence Atelier Communications',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  readTime: {
    type: String,
    default: '4 min read',
  },
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);
