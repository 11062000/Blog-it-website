const mongoose = require('mongoose')

// Connecting to database function
const connectDB = (url = 'mongodb://127.0.0.1:27017') => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB


