const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Quad-Turbo V12', 'Hybrid V10', 'Pure EV', 'Track Special'],
    default: 'Quad-Turbo V12',
  },
  price: {
    type: Number,
    required: true,
  },
  priceFormatted: {
    type: String,
    required: true,
  },
  acceleration: {
    type: String, // e.g. "1.74s"
    required: true,
  },
  topSpeed: {
    type: String, // e.g. "445 km/h"
    required: true,
  },
  horsepower: {
    type: Number, // e.g. 2100
    required: true,
  },
  torque: {
    type: String, // e.g. "2,250 Nm"
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    default: '7-Speed Dual-Clutch Sequential',
  },
  weight: {
    type: String,
    default: '1,280 kg',
  },
  downforce: {
    type: String,
    default: '1,200 kg @ 300 km/h',
  },
  description: {
    type: String,
    required: true,
  },
  heroImage: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
  }],
  specsArray: [{
    label: String,
    value: String,
  }],
  audioExhaustUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  standardFeatures: [{
    type: String,
  }],
  '3DModelConfig': {
    bodyColorDefault: { type: String, default: '#C87D55' },
    caliperColorDefault: { type: String, default: '#D4AF37' },
  },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
