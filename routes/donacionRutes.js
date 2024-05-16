const express = require('express');
const router = express.Router();
const donacionController = require('../controllers/donacionController');

router.post('/', donacionController.createDonacion);
router.get('/', donacionController.getAllDonaciones);
router.get('/:id', donacionController.getDonacionById);
router.put('/:id', donacionController.updateDonacion);
router.delete('/:id', donacionController.deleteDonacion);

module.exports = router;
