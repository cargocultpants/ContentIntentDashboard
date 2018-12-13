const express = require('express');

const port = process.env.PORT || 8080;
// load users router module
const app = express();
// require('./mongoose.js');

// serve status files from public directory
app.use(express.static(__dirname + '/public'));

// set view directory and view engine to ejs
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('routes', './routes');

 // set home route
 app.get('/', (req, res) => {
   res.render('mockup-view')
 });

// set users route
// const users = require('./routes/users-route.js');
// set users route
// app.use('/users', users);

// set mockup route
const mockup = require('./routes/mockup-route.js');
// set mockup route
app.use('/mockup', mockup);


app.listen(port, () => {
  console.log('Server listening on port:  ', port);
});
