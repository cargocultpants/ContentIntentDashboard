// Dependencies
const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const mongoose = require('mongoose');

// Open a connection to the ContentIntent database on locally running instance of MongoDB

mongoose.connect('mongodb://localhost:27017/contentintent');

// Get notified about connection's success

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to ContentIntent Database');


}); //end db.once() function

////////////// Application Settings ////////////

// make express look in the root directory for assets
app.use(express.static('./'));

// reset ejs render to look in the root folder
app.set('views', './');

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
