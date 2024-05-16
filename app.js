// Importa el paquete 'express' para crear y configurar el servidor
const express = require("express");

// Importa el paquete 'body-parser' para analizar las solicitudes entrantes con formato JSON
const bodyParser = require("body-parser");

const cors = require('cors')

// Importa las rutas definidas para los diferentes recursos (clientes, detalles de compras y pedidos)
// const detalleCompraRoutes = require("./routes/detalleCompraRoutes");
const donacionRoutes = require("./routes/donacionRutes");
const donadorRutes = require("./routes/donadorRutes");


// Crea una instancia de la aplicación Express
const app = express();

// Configura el middleware bodyParser para analizar las solicitudes entrantes con formato JSON
app.use(bodyParser.json());

app.use(cors())

// Asocia las rutas de clientes, detalles de compras y pedidos a las rutas base "/api/clientes", "/api/detallesCompras" y "/api/pedidos", respectivamente
app.use("/api/donador", donadorRutes);
// app.use("/api/detallesCompras", detalleCompraRoutes);
app.use("/api/donacion", donacionRoutes);


// Middleware para manejar errores cuando no se encuentra una ruta
app.use((req, res, next) => {
  const error = new Error("Ruta no encontrada"); // Crea un nuevo error
  error.status = 404; // Establece el código de estado del error a 404 (No encontrado)
  next(error); // Pasa el error al siguiente middleware
});

// Middleware para manejar otros tipos de errores
app.use((error, req, res, next) => {
  res.status(error.status || 500); // Establece el código de estado de la respuesta al código de estado del error o 500 (Error interno del servidor)
  res.json({
    error: {
      message: error.message, // Envía un mensaje de error con el mensaje del error
    },
  });
});

// Define el número de puerto donde el servidor escuchará las solicitudes, utilizando el número de puerto del entorno o el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

// Inicia el servidor y lo hace escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ${PORT}'); // Muestra un mensaje en la consola indicando que el servidor está en funcionamiento
});