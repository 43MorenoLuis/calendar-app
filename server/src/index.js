const express = require('express');
require ('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Cors
app.use(cors());

// Directorio Publico
app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth') );

// Escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`Servidor on port at ${process.env.PORT} 💻`);
});