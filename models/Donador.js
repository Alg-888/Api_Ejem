const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Donador = sequelize.define('Donador', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoDonador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Activo',
  },
}, {
  tableName: 'Donadores',
  timestamps: false,
});

module.exports = Donador;
