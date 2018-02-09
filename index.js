const express = require('express');
const port = 3000;
// load users router module
const app = express();
require('./app.js');

// serve status files from public directory
app.use(express.static(__dirname + '/public'));

// set view directory and view engine to ejs
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('routes', './routes');

/* GET home page. */

 // set home route
 app.get('/', (req, res) => {
   res.render('index', {
     title: 'Dashboard'
   })
 });

const users = require('./routes/users.js');

// set users route
app.use('/users', users);

app.listen(port, () => {
  console.log('Server listening on port:  ', port);
});
