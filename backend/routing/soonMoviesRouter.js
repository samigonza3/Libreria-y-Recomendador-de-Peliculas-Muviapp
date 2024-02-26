const express = require('express');
const router = express.Router();
const soonMoviesController = require('../controllers/soonMoviesController');

// Ruta para obtener todas las películas
router.get('/soonmovies', soonMoviesController.getMovies);
router.post('/soonmovies', soonMoviesController.createMovie);
module.exports = router;
