const Vehicle = require('../models/Vehicle');

// @desc    Get all hypercars with filtering & sorting
// @route   GET /api/vehicles
exports.getVehicles = async (req, res) => {
  try {
    const { category, search, sort, featured } = req.query;
    let query = {};

    if (category && category !== 'All') {
      query.category = category;
    }

    if (featured === 'true') {
      query.featured = true;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { tagline: { $regex: search, $options: 'i' } },
        { engine: { $regex: search, $options: 'i' } },
      ];
    }

    let result = Vehicle.find(query);

    if (sort === 'price_low') {
      result = result.sort({ price: 1 });
    } else if (sort === 'price_high') {
      result = result.sort({ price: -1 });
    } else if (sort === 'power') {
      result = result.sort({ horsepower: -1 });
    } else {
      result = result.sort({ createdAt: -1 });
    }

    const vehicles = await result;
    res.json({
      success: true,
      count: vehicles.length,
      data: vehicles,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single hypercar by slug or ID
// @route   GET /api/vehicles/:identifier
exports.getVehicleByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params;
    let vehicle;

    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      vehicle = await Vehicle.findById(identifier);
    } else {
      vehicle = await Vehicle.findOne({ slug: identifier });
    }

    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Hypercar not found' });
    }

    res.json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new vehicle (Admin)
// @route   POST /api/vehicles
exports.createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update vehicle (Admin)
// @route   PUT /api/vehicles/:id
exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Hypercar not found' });
    }

    res.json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete vehicle (Admin)
// @route   DELETE /api/vehicles/:id
exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Hypercar not found' });
    }

    res.json({
      success: true,
      message: 'Hypercar removed successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
