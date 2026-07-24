const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  subject: String,
  type: {
    type: String,
    enum: ['General Inquiry', 'Private Test Drive', 'Commission Request', 'Press & Media'],
    default: 'General Inquiry',
  },
  vehicleInterest: String,
  preferredLocation: String,
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'In Review', 'Contacted', 'Closed'],
    default: 'New',
  },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
