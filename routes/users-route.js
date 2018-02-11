// load express module
const express = require('express');
const usersRouter = express.Router();
const User = require('../models/users-model.js');

// returns all users
usersRouter.get('/', function(req, res) {
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


module.exports = usersRouter;
