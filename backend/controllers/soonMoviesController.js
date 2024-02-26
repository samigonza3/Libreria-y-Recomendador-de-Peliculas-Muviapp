const SoonMovie = require('../models/soonMoviesModel');

const getMovies = async (req, res) => {
    try {
        const soonMovies = await SoonMovie.find();

        if (soonMovies.length === 0) {
            res.status(404).send('No se encontraron películas');
        } else {
            res.status(200).json(soonMovies);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las películas');
    }
};

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await SoonMovie.findById(id);

        if (!movie) {
            res.status(404).send('No se encontró la película');
        } else {
            res.status(200).json(movie);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la película');
    }
};

const createMovie = async (req, res) => {
    const { titulo, director, year, sinopsis, link_imdb, link_thumb } = req.body;

   try {
        const newMovie = {
            titulo,
            director,
            year,
            sinopsis,
            link_imdb,
            link_thumb
        };

        const movie = await SoonMovie.create(newMovie);

        res.status(201).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la película');
    }
};

const editMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMovie = req.body;

        const movie = await SoonMovie.findByIdAndUpdate(id, updatedMovie, { new: true });

        if (!movie) {
            res.status(404).send('No se encontró la película para editar');
        } else {
            res.status(200).json(movie);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al editar la película');
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await SoonMovie.findByIdAndDelete(id);

        if (!deletedMovie) {
            res.status(404).send('No se encontró la película para eliminar');
        } else {
            res.status(200).json(deletedMovie);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la película');
    }
};

module.exports = {
    getMovies,
    getMovieById,
    editMovie,
    deleteMovie,
    createMovie,
}
