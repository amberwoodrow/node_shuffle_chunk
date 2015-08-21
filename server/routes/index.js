var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'IT\'S A SHUFFLE N\' CHUNK!' });
});

var utilities = require('../utilities/utilities.js');

router.post('/submit', function(req, res, next) {
  var chunked = utilities.chunk(utilities.people, parseInt(req.body.chunks));
  console.log(chunked);
  res.send(chunked);
});


module.exports = router;
