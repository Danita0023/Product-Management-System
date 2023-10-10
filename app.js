var createError = require('http-errors');
var path = require('path');
const express = require('express');
const port = 7001;
const mongoose = require('mongoose');
const products =require ('./routes/products');

// ติดต่อ MongoDB
mongoose.connect('mongodb+srv://danitasanmahachai:1111@cluster0.kdhue8d.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once connected to the database
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
    .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

var app = express();

// Middleware
app.use(express.json());

// Routes setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', products);

module.exports = app;

