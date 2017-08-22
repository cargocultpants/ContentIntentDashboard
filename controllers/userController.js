const express = require('express');
const router = express.Router();

const User = require('../models/userSchema.js');

// Index: GET '/users'
router.get('/', function(req, res){
	User.find(function(err, userIndex){
		err ? console.log(err) : res.render(
			'users/index.ejs',
			{ users: userIndex }
		);
	});
});

// Show: GET '/users/_id'
router.get('/:id', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		res.render('users/show.ejs', {
			users: user
		});
	});
});


// New: GET '/users/new'
// router.#('/#', function(req, res) {
// 	User.#(req, function(err, obj) {
// 		res.#('users/#.ejs', {
// 			user: obj
// 		});
// 	});
// });

// Create: POST '/users'
// router.#('/#', function(req, res) {
// 	User.#(req, function(err, obj) {
// 		res.#('users/#.ejs', {
// 			user: obj
// 		});
// 	});
// });

// Edit: GET '/users/_id/edit'
// router.#('/#', function(req, res) {
// 	User.#(req, function(err, obj) {
// 		res.#('users/#.ejs', {
// 			user: obj
// 		});
// 	});
// });

// Update: PUT '/users/_id'
// router.#('/#', function(req, res) {
// 	User.#(req, function(err, obj) {
// 		res.#('users/#.ejs', {
// 			user: obj
// 		});
// 	});
// });

// Delete: DELETE '/users/_id'
// router.#('/#', function(req, res) {
// 	User.#(req, function(err, obj) {
// 		res.#('users/#.ejs', {
// 			user: obj
// 		});
// 	});
// });

// Seed: GET '/users/seed'  <-- dev only: route removed before deployment
// router.#('/#', function(req, res) {
// 	User.#(req, function(err, obj) {
// 		res.#('users/#.ejs', {
// 			user: obj
// 		});
// 	});
// });

module.exports = router;
