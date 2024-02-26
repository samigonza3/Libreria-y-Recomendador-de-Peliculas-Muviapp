import React, { useState, useEffect } from 'react';
import WordCloud from 'react-wordcloud';
import { Container, Typography, Box } from '@material-ui/core';

// Lista de stopwords en español
const stopwords = ['de', 'la', 'of', 'to', 'es', 'the','son', 'in', 've', 'is', 'película', 'embargo,', 'través', 'cómo', 'historia', 'cuenta', 'pelicula','"the', 'are', 'que', 'el', 'en', 'y', 'a', 'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no', 'una', 'su', 'al', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'sí', 'porque', 'esta', 'entre', 'cuando', 'muy', 'sin', 'sobre', 'también', 'me', 'hasta', 'hay', 'donde', 'quien', 'desde', 'todo', 'nos', 'durante', 'todos', 'uno', 'les', 'ni', 'contra', 'otros', 'ese', 'eso', 'ante', 'ellos', 'e', 'esto', 'mí', 'antes', 'algunos', 'qué', 'unos', 'yo', 'otro', 'otras', 'otra', 'él', 'tanto', 'esa', 'estos', 'mucho', 'quienes', 'nada', 'muchos', 'cual', 'poco', 'ella', 'estar', 'estas', 'algunas', 'algo', 'nosotros', 'mi', 'mis', 'tú', 'te', 'ti', 'tu', 'tus', 'ellas', 'nosotras', 'vosotros', 'vosotras', 'os', 'mío', 'mía', 'míos', 'mías', 'tuyo', 'tuya', 'tuyos', 'tuyas', 'suyo', 'suya', 'suyos', 'suyas', 'nuestro', 'nuestra', 'nuestros', 'nuestras', 'vuestro', 'vuestra', 'vuestros', 'vuestras', 'esos', 'esas', 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están', 'esté', 'estés', 'estemos', 'estéis', 'estén', 'estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán', 'estaría', 'estarías', 'estaríamos', 'estaríais', 'estarían', 'estaba', 'estabas', 'estábamos', 'estabais', 'estaban', 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron', 'estuviera', 'estuvieras', 'estuviéramos', 'estuvierais', 'estuvieran', 'estuviese', 'estuvieses', 'estuviésemos', 'estuvieseis', 'estuviesen', 'estando', 'estado', 'estada', 'estados', 'estadas'];

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [12, 80],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 2,
  rotations: 3,
  rotationAngles: [0],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

const WordCloudComponent = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  // Extraer palabras de todas las sinopsis y filtrar stopwords
  const wordsFromSinopsis = movies.reduce((acc, movie) => {
    const words = movie.sinopsis
      .split(/\s+/)
      .filter(word => !stopwords.includes(word.toLowerCase()));
    return [...acc, ...words];
  }, []);

  // Extraer palabras de todos los géneros y filtrar stopwords
  const wordsFromGenres = movies.reduce((acc, movie) => {
    const words = movie.genero
      .split(/\s+/)
      .filter(word => !stopwords.includes(word.toLowerCase()));
    return [...acc, ...words];
  }, []);

  // Contar la frecuencia de cada palabra para sinopsis
  const wordFrequencySinopsis = wordsFromSinopsis.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // Contar la frecuencia de cada palabra para géneros
  const wordFrequencyGenres = wordsFromGenres.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // Formatear datos para la wordcloud de sinopsis
  const wordCloudDataSinopsis = Object.entries(wordFrequencySinopsis).map(([text, value]) => ({ text, value }));

  // Formatear datos para la wordcloud de géneros
  const wordCloudDataGenres = Object.entries(wordFrequencyGenres).map(([text, value]) => ({ text, value }));

  return (
    <Container maxWidth="md">
      <Box my={3} textAlign="center" alignContent='center'>
        <Typography fontFamily="Roboto, sans-serif" variant="h2" color="primary">
          Word Cloud de Sinopsis
        </Typography>
      </Box>     
      <Box my={3} textAlign="center" alignContent='center'>
        <WordCloud options={options} words={wordCloudDataSinopsis} />
      </Box>
      <Box my={3} textAlign="center" alignContent='center'>
        <Typography fontFamily="Roboto, sans-serif" variant="h2" color="primary">
          Word Cloud de Géneros
        </Typography>
      </Box>     
      <Box my={3} textAlign="center" alignContent='center'>
        <WordCloud options={options} words={wordCloudDataGenres} />
      </Box>
    </Container>
  );
};

export default WordCloudComponent;
