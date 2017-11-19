// load express module
var express = require('express');

// use express module to get express.Router object
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users listing');
});

/* GET content listing. */
router.get('/content', function(req, res, next) {
  res.send('Content listing');
});

module.exports = router;
