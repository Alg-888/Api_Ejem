const Donacion = require('../models/Donacion');
const Donador = require('../models/Donador');

exports.createDonacion = async (req, res) => {
  try {
    const newDonacion = await Donacion.create(req.body);
    res.status(201).json(newDonacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDonaciones = async (req, res) => {
  try {
    const donaciones = await Donacion.findAll({ include: Donador });
    res.status(200).json(donaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonacionById = async (req, res) => {
  try {
    const donacion = await Donacion.findByPk(req.params.id, { include: Donador });
    if (donacion) {
      res.status(200).json(donacion);
    } else {
      res.status(404).json({ error: 'Donación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDonacion = async (req, res) => {
  try {
    const donacion = await Donacion.findByPk(req.params.id);
    if (donacion) {
      await donacion.update(req.body);
      res.status(200).json(donacion);
    } else {
      res.status(404).json({ error: 'Donación no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDonacion = async (req, res) => {
  try {
    const donacion = await Donacion.findByPk(req.params.id);
    if (donacion) {
      await donacion.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Donación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
