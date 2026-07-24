const express = require('express');
const router = express.Router();
const {
  getVehicles,
  getVehicleByIdentifier,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicleController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getVehicles);
router.get('/:identifier', getVehicleByIdentifier);
router.post('/', protect, admin, createVehicle);
router.put('/:id', protect, admin, updateVehicle);
router.delete('/:id', protect, admin, deleteVehicle);

module.exports = router;
