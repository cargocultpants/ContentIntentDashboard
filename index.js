const express = require('express');
const app = express();
const port = 3000;


// set view directory and view engine to ejs
app.set('views', './views');
app.set('view engine', 'ejs');

/* GET home page. */
/*
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
*/

 // set home route
 app.use('/', (req, res) => {
   res.render('index', {
     title: 'ContentIntent'
   })
 });

app.listen(port, () => {
  console.log('Server listening on port:  ', port);
});
