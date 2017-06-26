// Dependencies
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Yep.');
});

// Declare port variable;
const port = 8000;

// Create listener
app.listen(port, function() {
  console.log('This is port: ', port);
});
