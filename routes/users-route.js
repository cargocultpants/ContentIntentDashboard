// load express module
const express = require('express');
const router = express.Router();
const User = require('../models/users-model.js');

// returns all users
router.get('/', function(req, res) {
  User.find(function (err, allUsers) {
    if (err) {
      return console.error(err);
    } else {
      res.render('users-view', {
        title: 'Users',
        users: allUsers
      });
    }
  });
});


// define the users route
/*router.get('/', function(req, res) {
  res.render('users-view', {
    title: 'Users',
    users: jonah.name
  });
  console.table(Object.values(User));
});*/


module.exports = router;
