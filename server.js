// Dependencies
const express = require('express');
const app = express();
const serveStatic = require('serve-static');


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
