const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Ruta para obtener todas las películas
router.get('/movies', movieController.getAllMovies);

// Ruta para obtener una película por su ID
router.get('/movies/:id', movieController.getMovieById);

// Ruta para crear una nueva película
router.post('/movies', movieController.createMovie);

// Ruta para editar una película por su ID
router.put('/movies/:id', movieController.editMovie);

// Ruta para eliminar una película por su ID
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
    