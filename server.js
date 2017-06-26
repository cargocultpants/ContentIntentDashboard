// Dependencies
const express = require('express');
const app = express();
const serveStatic = require('serve-static');


app.static('/', 'index.html');

// Declare port variable;
const port = 8000;

// Create listener
app.listen(port, function() {
  console.log('This is port: ', port);
});
