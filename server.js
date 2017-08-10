// Dependencies
const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const mongoose = require('mongoose');

// Open a connection to the ContentIntent database on locally running instance of MongoDB

mongoose.connect('mongodb://localhost:27017/contentintent');

// Get notified about connection's success

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to ContentIntent Database');

// Get a reference to and define a schema

// userSchema maps to a MongoDB collection "users" and defines the shape of the documents within that collection.

const userSchema = mongoose.Schema({
    name: String,
    admin: Boolean
});

userSchema.methods.verify = function () {
  let verify;
  this.admin ? verify = "approved" : verify = "denied";
  const msg = `Administrative access has been ${verify} for ${this.name}.`;
  console.log(msg);
} //end verify method

const User = mongoose.model('User', userSchema);

const jonah = new User({
    name: 'Jonah Bliss',
    admin: true
});
console.log(jonah.name);

const shannon = new User({
    name: 'Shannon Matloob',
    admin: true
});
shannon.verify();

// jonah.save(function (err, shannon) {
//   if (err) return console.error(err);
//   console.log(shannon.name, ' has been saved into the database.');
// }); //save function

User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users.length);
  console.log("All the users: ", users);
});


}); //end db.once() function

////////////// Application Settings ////////////

// make express look in the root directory for assets
app.use(express.static('./'));

// reset ejs render to look in the root folder
app.set('views', './');

// home page
app.get('/', function(req, res){
  res.render('index.ejs');
});

// process.env.PORT is the variable for Heroku's port
const port = process.env.PORT || 8000;

// Create listener
app.listen(port, function() {
  console.log('This is port: ', port);
});
