const { Sequelize } = require("sequelize");
require('dotenv').config();

// const clienteModel = require("./models/clienteModel");
// const pedidoModel = require("./models/pedidoModel");
// const proveedoreModel = require("./models/proovedorModel");


const sequelize = new Sequelize(
  process.env.UriMysql,
  {
    dialect: "mysql", // Dialecto de la base de datos (puede ser 'mysql', 'postgres', 'sqlite', 'mssql', etc.)
    // Otros parámetros de configuración opcionales aquí
  }
);


sequelize
.sync({ alter: true })
  .then(() => {
    console.log("Sincronización exitosa");
  })
  .catch((error) => {
    console.error("Error al sincronizar:", error);
  });


  sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa.");
    })
    .catch((err) => {
      console.error("Error al conectar a la base de datos:", err);
    });

  module.exports = sequelize;