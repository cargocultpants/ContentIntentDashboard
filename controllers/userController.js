const express = require('express');
const User = require('../models/userSchema.js');
const router = express.Router();

// Set shortcut for users index page
router.get('/', function(req, res){
	User.find({}, function(err, foundUsers){
		res.render('users/index.ejs', {
			users: foundUsers
		});
	});
});

module.exports = router;
