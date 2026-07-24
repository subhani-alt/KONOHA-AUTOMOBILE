const Dealer = require('../models/Dealer');

exports.getDealers = async (req, res) => {
  try {
    const { region } = req.query;
    let query = {};
    if (region && region !== 'All') query.region = region;

    const dealers = await Dealer.find(query);
    res.json({
      success: true,
      count: dealers.length,
      data: dealers,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
