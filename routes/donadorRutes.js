const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/donadorController');

router.post('/', donadorController.createDonador);
router.get('/', donadorController.getAllDonadores);
router.get('/:id', donadorController.getDonadorById);
router.put('/:id', donadorController.updateDonador);
router.patch('/:id/estado', donadorController.changeEstadoDonador);

module.exports = router;
