// load express module
const express = require('express');
const router = express.Router();
// const User = require('../models/users-model.js');
const User = require('../models/users-data.js');

const jonah = new User('Jonah', 'Bliss');

// define the users route
router.get('/', function(req, res) {
  res.render('users-view', {
    title: 'Users',
    users: jonah.name
  });
  console.table(Object.values(User));
});



module.exports = router;
