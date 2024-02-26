const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@movies.cmi1oka.mongodb.net/?retryWrites=true&w=majority', {
    });
    console.log('Conexión exitosa a la base de datos MongoDB');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
