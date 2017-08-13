// Dependencies
const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const mongoose = require('mongoose');


////////////// Application Settings ////////////

// make express look in the public directory for assets
app.use(express.static('public'));

// Open a connection to the ContentIntent database on locally running instance of MongoDB

mongoose.connect('mongodb://localhost:27017/contentintent');

// Get notified about connection's success

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to ContentIntent Database');
}); //end db.once() function

var usersController = require('./controllers/userController.js');
app.use('/users', usersController);

// var contentController = require('./controllers/content.js');
// app.use('/content', contentController);

// home page
app.get('/', function(req, res){
  res.render('index.ejs');
});

// process.env.PORT is the variable for Heroku's port
const port = process.env.PORT || 8000;

// Create listener
app.listen(port, function() {
  console.log('This is port: ', port);
});
