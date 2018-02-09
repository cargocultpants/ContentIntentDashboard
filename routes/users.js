// load express module
const express = require('express');
const router = express.Router();

const model = require('../models/user-model.js');


// define the users route
router.get('/', function(req, res) {
  res.render('users', {
    title: 'Users',

  });
});


module.exports = router;
