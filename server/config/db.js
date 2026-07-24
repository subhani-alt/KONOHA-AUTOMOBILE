const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/valence_automobili';
    const conn = await mongoose.connect(mongoURI);
    console.log(`[VALENCE SERVER] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[VALENCE SERVER] MongoDB Connection Warning: ${error.message}`);
    console.log(`[VALENCE SERVER] Operating in fallback resilient mode.`);
  }
};

module.exports = connectDB;
