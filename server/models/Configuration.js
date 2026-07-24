const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true,
  },
  vehicleName: {
    type: String,
    required: true,
  },
  paintColor: {
    name: String,
    hex: String,
    finish: String,
    price: Number,
  },
  wheelDesign: {
    name: String,
    size: String,
    finish: String,
    price: Number,
  },
  interiorTrim: {
    name: String,
    material: String,
    accentColor: String,
    price: Number,
  },
  caliperColor: {
    name: String,
    hex: String,
    price: Number,
  },
  aeroPackage: {
    name: String,
    carbonFinish: String,
    price: Number,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  shareId: {
    type: String,
    unique: true,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Configuration', configurationSchema);
