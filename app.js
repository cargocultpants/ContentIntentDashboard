// import dependencies and path node library
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up and get default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

// default connection object
const db = mongoose.connection;

// bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error: '));


// import modules from routes directory
const index = require('./routes/index');
const users = require('./routes/users');
const mockup = require('./routes/mockup');

// create app object
const app = express();

// set up view template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// add middleware libraries into request handling chain

app.use(favicon(path.join(__dirname, 'public', 'COI.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// add Express.static to serve all the static files in the /public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/mockup', mockup);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
