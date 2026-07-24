const Vehicle = require('../models/Vehicle');
const User = require('../models/User');
const Contact = require('../models/Contact');
const Configuration = require('../models/Configuration');
const Subscriber = require('../models/Subscriber');

exports.getAdminStats = async (req, res) => {
  try {
    const totalVehicles = await Vehicle.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalInquiries = await Contact.countDocuments();
    const totalConfigurations = await Configuration.countDocuments();
    const totalSubscribers = await Subscriber.countDocuments();

    const recentInquiries = await Contact.find().sort({ createdAt: -1 }).limit(5);
    const recentConfigurations = await Configuration.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,
      stats: {
        totalVehicles,
        totalUsers,
        totalInquiries,
        totalConfigurations,
        totalSubscribers,
      },
      recentInquiries,
      recentConfigurations,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
