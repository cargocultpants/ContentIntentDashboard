const express = require('express');
const app = express();
const port = 3000;

/* GET home page. */
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log('Server listening on port:  ', port);
});
