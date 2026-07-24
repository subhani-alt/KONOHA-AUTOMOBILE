const Configuration = require('../models/Configuration');
const User = require('../models/User');

const generateShareId = () => {
  return 'VAL-' + Math.random().toString(36).substring(2, 9).toUpperCase();
};

// @desc    Save a bespoke configuration
// @route   POST /api/configurator/save
exports.saveConfiguration = async (req, res) => {
  try {
    const {
      vehicleId,
      vehicleName,
      paintColor,
      wheelDesign,
      interiorTrim,
      caliperColor,
      aeroPackage,
      totalPrice,
    } = req.body;

    const shareId = generateShareId();

    const config = await Configuration.create({
      user: req.user ? req.user._id : null,
      vehicle: vehicleId,
      vehicleName,
      paintColor,
      wheelDesign,
      interiorTrim,
      caliperColor,
      aeroPackage,
      totalPrice,
      shareId,
    });

    if (req.user) {
      await User.findByIdAndUpdate(req.user._id, {
        $push: { savedConfigurations: config._id },
      });
    }

    res.status(201).json({
      success: true,
      data: config,
      shareUrl: `${req.protocol}://${req.get('host')}/configurator?shareId=${shareId}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get configuration by shareId
// @route   GET /api/configurator/:shareId
exports.getConfigurationByShareId = async (req, res) => {
  try {
    const config = await Configuration.findOne({ shareId: req.params.shareId }).populate('vehicle');
    if (!config) {
      return res.status(404).json({ success: false, message: 'Bespoke specification record not found' });
    }

    res.json({
      success: true,
      data: config,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
