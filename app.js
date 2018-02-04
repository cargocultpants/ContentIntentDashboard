// const express = require('express');
// const bodyParser = require('body-parser');
require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

// create app object
// const app = express();
// const USER_COLLECTION = "users";
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// declare db variable;
// let db;

const displayResults = function(err, result) {
  if (err) console.log(err);
  else {
    console.log(result);
  }
}

// initialize database connection
MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // initialize database
  console.log("Database connection ready");

  database.collection('users').find().toArray(displayResults());
});

//   const port = process.env.PORT || 8080;
//
//     // initialize app
//     app.listen(port, function () {
//       console.log("App now running on port: ", port);
//     });
//   }
// );

/////////////
// ROUTES //
////////////

// error handler
// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({"error": message});
// }


// add Express.static to serve all the static files in the public directory
// app.use(express.static('public'));

// import modules from routes directory
// const index = require('./routes/index');
// const users = require('./routes/users');
// const mockup = require('./routes/mockup');

// const ejs = require('ejs');

// set up view template engine
// app.set('views', './views')
// app.set('view engine', 'ejs');

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
//
// module.exports = app;
