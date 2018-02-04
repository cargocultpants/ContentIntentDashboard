const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require("mongodb");
require('dotenv').config();

// create app object
const app = express();
const USER_COLLECTION = "users";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// declare db variable;
let db;

// initialize database connection
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // initialize db object
  db = database;
  console.log("Database connection ready");

  const port = process.env.PORT || 8080;

    // initialize app
    app.listen(port, function () {
      console.log("App now running on port: ", port);
    });
  }
);

/////////////
// ROUTES //
////////////

// error handler
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}


// add Express.static to serve all the static files in the public directory
app.use(express.static('public'));

// import modules from routes directory
const index = require('./routes/index');
const users = require('./routes/users');
const mockup = require('./routes/mockup');

const ejs = require('ejs');

// set up view template engine
app.set('views', './views')
app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;
