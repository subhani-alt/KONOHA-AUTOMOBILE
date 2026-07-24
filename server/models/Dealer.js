const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    enum: ['Europe', 'Americas', 'Middle East & Africa', 'Asia Pacific'],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
  },
}, { timestamps: true });

module.exports = mongoose.model('Dealer', dealerSchema);
