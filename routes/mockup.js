var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/* GET mockup */
router.get('/', function(req, res, next) {
  res.render('mockup',
  {
    name: 'Jonah',
    initials: 'JB',
    category: [
      'main',
      'analytics',
      'report'
    ]
  });
});

module.exports = router;
