const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  titulo: String,
  director: String,
  genero: String,
  year: Number,
  sinopsis: String,
  rating: String,
  link_imdb: String,
  link_thumb: String
}, { versionKey: false });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

