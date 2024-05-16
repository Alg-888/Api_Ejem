const Donador = require('../models/Donador');

exports.createDonador = async (req, res) => {
  try {
    const newDonador = await Donador.create(req.body);
    res.status(201).json(newDonador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllDonadores = async (req, res) => {
  try {
    const donadores = await Donador.findAll();
    res.status(200).json(donadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDonadorById = async (req, res) => {
  try {
    const donador = await Donador.findByPk(req.params.id);
    if (donador) {
      res.status(200).json(donador);
    } else {
      res.status(404).json({ error: 'Donador no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDonador = async (req, res) => {
  try {
    const donador = await Donador.findByPk(req.params.id);
    if (donador) {
      await donador.update(req.body);
      res.status(200).json(donador);
    } else {
      res.status(404).json({ error: 'Donador no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.changeEstadoDonador = async (req, res) => {
  try {
    const donador = await Donador.findByPk(req.params.id);
    if (donador) {
      const nuevoEstado = donador.estado === 'Activo' ? 'Inactivo' : 'Activo';
      await donador.update({ estado: nuevoEstado });
      res.status(200).json(donador);
    } else {
      res.status(404).json({ error: 'Donador no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
