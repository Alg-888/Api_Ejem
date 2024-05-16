const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Donador = require('./Donador');

const Donacion = sequelize.define('Donacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tipoDonacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Donaciones',
  timestamps: false,
});

Donacion.belongsTo(Donador, {
  foreignKey: 'idDonador',
  onDelete: 'CASCADE',
});

module.exports = Donacion;
