// load express module
const express = require('express');
const mockupRouter = express.Router();
const User = require('../models/users-model.js');

// returns all users
mockupRouter.get('/', function(req, res) {
  User.find(function (err, allUsers) {
    if (err) {
      return console.error(err);
    } else {
      res.render('mockup-view', {
        users: allUsers
      });
    }
  });
});


module.exports = mockupRouter;
