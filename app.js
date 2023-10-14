const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7001;
const mongoose = require('mongoose');


// Middleware
//server can handle both jason and form-data
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.Promise = global.Promise;

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

//  Import routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var products =require ('./routes/products');

// Routes setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', products);


module.exports = app;

