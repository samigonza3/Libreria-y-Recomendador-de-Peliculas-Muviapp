const express = require('express');
const connectDB = require('./db'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const moviesRoutes = require('./routing/moviesRoutes');
const soonMoviesRouter = require('./routing/soonMoviesRouter');

const app = express();
const PORT = 5000;

// Configuración de CORS para recibir solicitudes del front
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
}));

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api', moviesRoutes);
app.use('/api', soonMoviesRouter);

// Ruta de ping
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Puerto de escucha
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
