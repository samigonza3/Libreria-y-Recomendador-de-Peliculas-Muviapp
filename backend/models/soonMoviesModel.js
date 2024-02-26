const mongoose = require('mongoose');

const proximasPelisSchema = new mongoose.Schema({
    titulo: String,
    director: String,
    year: Number,
    sinopsis: String,
    link_imdb: String,
    link_thumb: String
  }, { versionKey: false });
  
  const SoonMovie = mongoose.model('SoonMovie', proximasPelisSchema);
  
  module.exports = SoonMovie;
  