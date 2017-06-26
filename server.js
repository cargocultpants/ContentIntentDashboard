// Dependencies
const express = require('express');
const app = express();
const serveStatic = require('serve-static');

// Application Settings
app.use(express.static('./'));
app.set('views', './');
app.get('/', function(req, res){
  res.render('index.ejs');
});

// Declare port variable;
const port = 8000;

// Create listener
app.listen(port, function() {
  console.log('This is port: ', port);
});
