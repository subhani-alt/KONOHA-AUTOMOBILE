const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

exports.submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received by Valence Concierge. An advisor will reach out shortly.',
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email address is required' });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.json({ success: true, message: 'Email address is already subscribed to Valence Private Gazette.' });
    }

    await Subscriber.create({ email });
    res.status(201).json({
      success: true,
      message: 'Welcome to the Valence Private Gazette.',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
