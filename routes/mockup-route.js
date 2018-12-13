// load express module
const express = require('express');
const mockupRouter = express.Router();
// const User = require('../models/users-data.js');

// returns all users
mockupRouter.get('/', function(req, res) {
  res.render('mockup-view');
});


module.exports = mockupRouter;
