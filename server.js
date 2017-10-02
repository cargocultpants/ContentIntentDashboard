// DEPENDENCIES
const express = require('express'),
      mongoose = require('mongoose'),
      app = express(),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),

      uri = 'mongodb://heroku_b7l5h84r:d72i2peoj8gcj8rd65sf9euk6a@ds133340.mlab.com:33340/heroku_b7l5h84r';

// process.env.PORT is the variable for Heroku's port
const port = process.env.PORT || 8000;

// DATABASE
mongoose.connect(uri, { useMongoClient: true });

const db = mongoose.connection;

// Get notified about connection's success
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to ContentIntent Database');
}); //end db.once() function

// MIDDLEWARE

// Make express look in the public directory for assets
app.use(express.static('public'));
app.use(methodOverride('_method')); // <-- allow POST, PUT, and DELETE from a form
app.use(bodyParser.urlencoded({ extended: false })); // <-- req.body
app.use(bodyParser.json()); // <-- req.body

// ROOT ROUTE
app.get('/', function(req, res){
	res.render('index.ejs');
});

// CONTROLLERS
// const usersController = require('./controllers/userController.js');
// app.use('/users', usersController);

// const contentController = require('./controllers/content.js');
// app.use('/content', contentController);

// Create listener
app.listen(port, function() {
  console.log('This is port: ', port);
});
